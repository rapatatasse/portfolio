(function () {
    const D = PORTFOLIO_DATA;
    const K = 16, LANE_K = 2.25;
    const MONTHS = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
    const smooth = t => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };
    const $ = id => document.getElementById(id);

    const parse = s => {
        if (s === "now") { const d = new Date(); return d.getFullYear() + (d.getMonth() + d.getDate() / 31) / 12; }
        const [y, m] = s.split("-").map(Number);
        return y + (m - 1) / 12;
    };
    const BIRTH = parse(D.person.birth);
    const NOW = parse("now");
    const X = yr => (yr - BIRTH) * K;
    const fmtDate = yr => { const y = Math.floor(yr + 1e-6); const m = clamp(Math.floor((yr - y) * 12 + 1e-6), 0, 11); return MONTHS[m] + " " + y; };
    const ageAt = yr => Math.floor(yr - BIRTH);

    const branches = D.branches.map((b, i) => ({ ...b, lane: b.lane * LANE_K, index: i, z: (i - 2.5) * 1.6, exps: [] }));
    const branchById = Object.fromEntries(branches.map(b => [b.id, b]));
    const skills = D.skills;
    const skillById = Object.fromEntries(skills.map(s => [s.id, s]));
    const exps = D.experiences.map(e => ({ ...e, s: parse(e.start), e: parse(e.end) }));
    exps.forEach(e => branchById[e.branch].exps.push(e));
    branches.forEach(b => b.exps.sort((a, c) => a.s - c.s));

    /* ---------- Three.js ---------- */
    const canvas = $("stage");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b0f14);
    const cam = new THREE.PerspectiveCamera(45, 1, 0.5, 3000);

    function label(text, h, color, weight) {
        const size = 64, c = document.createElement("canvas"), ctx = c.getContext("2d");
        ctx.font = (weight || "400") + " " + size + "px 'Segoe UI', sans-serif";
        const w = Math.ceil(ctx.measureText(text).width) + 20;
        c.width = w; c.height = size * 1.4;
        ctx.font = (weight || "400") + " " + size + "px 'Segoe UI', sans-serif";
        ctx.fillStyle = color; ctx.textBaseline = "middle"; ctx.fillText(text, 10, c.height / 2);
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
        sp.scale.set(h * 1.4 * w / c.height, h * 1.4, 1);
        return sp;
    }

    const sphere = (r, color) => new THREE.Mesh(new THREE.SphereGeometry(r, 20, 14), new THREE.MeshBasicMaterial({ color, transparent: true }));

    function buildPath(pts) {
        const cum = [0];
        for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + pts[i].distanceTo(pts[i - 1]));
        const total = cum[cum.length - 1];
        const tube = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), pts.length * 2, 0.5, 6, false);
        const tubular = pts.length * 2;
        return { pts, cum, total, tube, tubular };
    }
    function fracAt(path, x) {
        const p = path.pts;
        if (x <= p[0].x) return 0;
        if (x >= p[p.length - 1].x) return 1;
        let i = 1; while (p[i].x < x) i++;
        const t = (x - p[i - 1].x) / (p[i].x - p[i - 1].x);
        return (path.cum[i - 1] + t * (path.cum[i] - path.cum[i - 1])) / path.total;
    }

    /* Branche principale */
    const mainEnd = X(NOW);
    const mainPts = []; for (let x = 0; x <= mainEnd; x += 1) mainPts.push(new THREE.Vector3(x, 0, 0));
    const mainPath = buildPath(mainPts);
    mainPath.tube = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(mainPts), mainPts.length, 0.8, 8, false);
    mainPath.tubular = mainPts.length;
    const mainMesh = new THREE.Mesh(mainPath.tube, new THREE.MeshBasicMaterial({ color: 0xe6edf3 }));
    scene.add(mainMesh);

    const birthDot = sphere(1.2, 0xffffff); scene.add(birthDot);
    const birthLabel = label("Naissance · " + fmtDate(BIRTH).toLowerCase(), 3.4, "#e6edf3", "600");
    birthLabel.position.set(16, 7, 0); scene.add(birthLabel);

    const yearDots = [];
    for (let y = Math.ceil(BIRTH); y <= NOW; y++) {
        const big = y % 5 === 0;
        const d = sphere(big ? 1.3 : 0.6, big ? 0xe6edf3 : 0x6e7681);
        d.position.set(X(y), 0, 0); scene.add(d);
        const it = { yr: y, mesh: d, label: null };
        if (big) {
            const l = label(y + " · " + ageAt(y) + " ans", 3, "#8b949e");
            l.position.set(X(y), -6, 0); scene.add(l); it.label = l;
        }
        yearDots.push(it);
    }

    const cursorDot = sphere(1.9, 0xffffff); scene.add(cursorDot);
    const cursorLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -400, 0), new THREE.Vector3(0, 400, 0)]),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12 }));
    scene.add(cursorLine);

    /* Branches */
    const cardW = 20, cardH = 12.5;
    const SLOTS = [13, -13, 28, -28];
    const hitList = [];

    branches.forEach(b => {
        if (!b.exps.length) return;
        const firstS = b.exps[0].s, lastE = Math.max(...b.exps.map(e => e.e));
        const forkLen = 14 + Math.abs(b.lane) * 0.22;
        const laneX = X(firstS), forkX = Math.max(0, laneX - forkLen);
        let endX = X(lastE), mergeX = null;
        const mergeLen = forkLen;
        if (endX + mergeLen <= mainEnd) { mergeX = endX + mergeLen; } else endX = mainEnd;
        const lastX = mergeX !== null ? mergeX : endX;
        const pts = [];
        for (let x = forkX; x <= lastX + 0.001; x += 0.5) {
            let k = 1;
            if (x < laneX) k = smooth((x - forkX) / (laneX - forkX));
            else if (mergeX !== null && x > endX) k = 1 - smooth((x - endX) / (mergeX - endX));
            pts.push(new THREE.Vector3(x, b.lane * k, b.z * k));
        }
        b.forkX = forkX; b.laneX = laneX; b.lastX = lastX; b.forkYear = BIRTH + forkX / K;
        b.path = buildPath(pts);
        const color = new THREE.Color(b.color);
        b.mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.55 });
        b.mesh = new THREE.Mesh(b.path.tube, b.mat);
        scene.add(b.mesh);

        b.nameLabel = label(b.name, 5, b.color, "600");
        b.nameLabel.position.set(laneX - 4, b.lane + 5.5, b.z);
        b.nameLabel.center.set(1, 0.5);
        scene.add(b.nameLabel);

        if (mergeX !== null) {
            b.mergeDot = sphere(0.7, color); b.mergeDot.position.set(mergeX, 0, 0); scene.add(b.mergeDot);
        }

        const lastRight = SLOTS.map(() => -1e9);
        b.exps.forEach((e, i) => {
            const x0 = X(e.s), x1 = Math.max(X(e.e), x0 + 0.5);
            e.x0 = x0; e.x1 = x1; e.b = b;
            const rot = [0, 1, 2, 3].map(k => (i + k) % 4);
            let slot = rot.find(k => x0 - lastRight[k] >= cardW + 0.8);
            if (slot === undefined) slot = rot.reduce((a, k) => lastRight[k] < lastRight[a] ? k : a, rot[0]);
            lastRight[slot] = x0;
            e.slotY = SLOTS[slot];

            const g = new THREE.Group(); g.position.set(x0, b.lane, b.z); scene.add(g);
            e.group = g;
            e.node = sphere(2, color); g.add(e.node);
            e.node.userData.exp = e;

            const spanLen = x1 - x0;
            e.span = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, spanLen, 10), new THREE.MeshBasicMaterial({ color, transparent: true }));
            e.span.rotation.z = Math.PI / 2; e.span.userData.full = spanLen; scene.add(e.span);
            e.spanBase = { y: b.lane, z: b.z };

            const cardY = e.slotY;
            e.link = new THREE.Line(
                new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, cardY, 1.5)]),
                new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.5 }));
            g.add(e.link);

            e.canvas = document.createElement("canvas"); e.canvas.width = 768; e.canvas.height = 480;
            e.tex = new THREE.CanvasTexture(e.canvas);
            e.tex.anisotropy = 4;
            drawCard(e, null);
            e.card = new THREE.Mesh(new THREE.PlaneGeometry(cardW, cardH), new THREE.MeshBasicMaterial({ map: e.tex, transparent: true }));
            e.card.position.set(0, cardY + (cardY > 0 ? cardH / 2 : -cardH / 2) * 0.55, 1.5);
            e.card.userData.exp = e; e.cardBaseY = e.card.position.y;
            e.card.rotation.y = (b.index % 2 ? 1 : -1) * 0.12;
            g.add(e.card);
            hitList.push(e.card, e.node);
            e.appear = 0; e.hover = 0; e.phase = Math.random() * 6;

            if (e.images.length) {
                const img = new Image();
                img.onload = () => {
                    const test = document.createElement("canvas"); test.width = test.height = 1;
                    try { const c = test.getContext("2d"); c.drawImage(img, 0, 0, 1, 1); c.getImageData(0, 0, 1, 1); } catch (err) { return; }
                    drawCard(e, img);
                };
                img.src = e.images[0];
            }
        });
        b.appear = 0;
    });

    function wrap(ctx, text, maxW, maxLines) {
        const words = text.split(" "), lines = []; let cur = "";
        for (const w of words) {
            const t = cur ? cur + " " + w : w;
            if (ctx.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t;
        }
        lines.push(cur);
        if (lines.length > maxLines) { lines.length = maxLines; lines[maxLines - 1] = lines[maxLines - 1].replace(/\s?\S*$/, "") + "…"; }
        return lines;
    }
    function drawCard(e, img) {
        const c = e.canvas, ctx = c.getContext("2d"), W = 512, H = 320, imgH = 150;
        ctx.setTransform(c.width / W, 0, 0, c.height / H, 0, 0);
        ctx.fillStyle = "#12171e"; ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = "#1c232c"; ctx.fillRect(0, 0, W, imgH);
        if (img) {
            const r = Math.max(W / img.width, imgH / img.height), w = img.width * r, h = img.height * r;
            ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, imgH); ctx.clip();
            ctx.drawImage(img, (W - w) / 2, (imgH - h) / 2, w, h); ctx.restore();
        } else {
            ctx.fillStyle = e.b.color; ctx.globalAlpha = 0.18; ctx.fillRect(0, 0, W, imgH); ctx.globalAlpha = 1;
            ctx.fillStyle = e.b.color; ctx.font = "600 34px 'Segoe UI', sans-serif"; ctx.textAlign = "center";
            ctx.fillText(e.b.name.toUpperCase(), W / 2, imgH / 2 + 12); ctx.textAlign = "left";
        }
        ctx.fillStyle = e.b.color; ctx.fillRect(0, imgH, W, 5);
        ctx.fillStyle = "#f0f6fc"; ctx.font = "600 36px 'Segoe UI', sans-serif"; ctx.textBaseline = "alphabetic";
        wrap(ctx, e.title, W - 36, 2).forEach((l, i) => ctx.fillText(l, 18, imgH + 44 + i * 40));
        ctx.fillStyle = "#a0a8b2"; ctx.font = "26px 'Segoe UI', sans-serif";
        const endTxt = e.end === "now" ? "auj." : e.end.slice(0, 4);
        ctx.fillText(e.start.slice(0, 4) + " → " + endTxt, 18, H - 18);
        const top = Object.entries(e.gains).sort((a, b) => b[1] - a[1])[0];
        const tag = "+" + top[1] + " " + (skillById[top[0]] ? skillById[top[0]].label : top[0]);
        ctx.font = "600 24px 'Segoe UI', sans-serif";
        const tw = Math.min(ctx.measureText(tag).width, 300);
        ctx.fillStyle = "#238636"; ctx.fillRect(W - tw - 34, H - 50, tw + 22, 36);
        ctx.fillStyle = "#fff"; ctx.fillText(tag, W - tw - 23, H - 24, 300);
        ctx.strokeStyle = e.b.color; ctx.lineWidth = 4; ctx.strokeRect(2, 2, W - 4, H - 4);
        e.tex.needsUpdate = true;
    }

    /* ---------- Caméra ---------- */
    const view = { tx: 0, ty: 0, d: 120 }, goal = { tx: 0, ty: 0, d: 120 };
    let follow = true;
    function resize() {
        const w = innerWidth, h = innerHeight;
        renderer.setSize(w, h, false);
        cam.aspect = w / h;
        cam.setViewOffset(w, h, innerWidth > 1000 ? 170 : 130, 0, w, h);
        cam.updateProjectionMatrix();
    }
    addEventListener("resize", resize); resize();

    function setFollow() {
        const vis = branches.filter(b => b.path && cur >= b.forkYear);
        let lo = 0, hi = 0;
        vis.forEach(b => { lo = Math.min(lo, b.lane); hi = Math.max(hi, b.lane); });
        const span = hi - lo + 90;
        goal.tx = X(cur) - 4; goal.ty = (hi + lo) / 2;
        goal.d = clamp(span / (2 * Math.tan(Math.PI / 8)) * 0.9, 100, 900);
    }
    function overview() {
        const lanes = branches.map(b => b.lane), lo = Math.min(0, ...lanes) - 30, hi = Math.max(0, ...lanes) + 30;
        const t = 2 * Math.tan(Math.PI / 8);
        goal.tx = mainEnd / 2; goal.ty = (hi + lo) / 2;
        goal.d = Math.max((hi - lo) * 1.3 / t, mainEnd * 1.3 / (t * cam.aspect)); follow = false;
    }

    /* ---------- État / temps ---------- */
    let cur = BIRTH, playing = false, selected = null;
    const slider = $("year");
    slider.min = BIRTH; slider.max = NOW; slider.value = BIRTH;

    function setYear(y, doFollow) {
        cur = clamp(y, BIRTH, NOW);
        slider.value = cur;
        $("year-label").textContent = fmtDate(cur) + " · " + ageAt(cur) + " ans";
        if (doFollow !== false) { follow = true; setFollow(); }
    }

    slider.addEventListener("input", () => { stopPlay(); closeDetail(true); setYear(parseFloat(slider.value)); });
    function stopPlay() { playing = false; $("play").innerHTML = "&#9654;"; }
    $("play").addEventListener("click", () => {
        if (playing) return stopPlay();
        if (cur >= NOW - 0.01) setYear(BIRTH);
        closeDetail(true); playing = true; $("play").innerHTML = "&#10074;&#10074;";
    });
    $("reset").addEventListener("click", () => { stopPlay(); closeDetail(true); overview(); });

    const ticks = $("ticks");
    for (let y = Math.ceil(BIRTH / 5) * 5; y <= NOW; y += 5) {
        const t = document.createElement("div"); t.className = "yr"; t.textContent = y;
        t.style.left = ((y - BIRTH) / (NOW - BIRTH) * 100) + "%"; ticks.appendChild(t);
    }
    exps.forEach(e => {
        const t = document.createElement("div"); t.className = "tk"; t.style.background = e.b.color;
        t.style.left = ((e.s - BIRTH) / (NOW - BIRTH) * 100) + "%"; ticks.appendChild(t);
    });

    /* ---------- Interactions ---------- */
    const ray = new THREE.Raycaster(), mouse = new THREE.Vector2(), tip = $("tooltip");
    let hovered = null, down = null, dragged = false;

    function pick(ev) {
        mouse.set(ev.clientX / innerWidth * 2 - 1, -(ev.clientY / innerHeight) * 2 + 1);
        ray.setFromCamera(mouse, cam);
        const hit = ray.intersectObjects(hitList.filter(o => o.userData.exp.appear > 0.6), false)[0];
        return hit ? hit.object.userData.exp : null;
    }
    canvas.addEventListener("pointerdown", ev => { down = { x: ev.clientX, y: ev.clientY }; dragged = false; canvas.setPointerCapture(ev.pointerId); });
    canvas.addEventListener("pointermove", ev => {
        if (down) {
            const dx = ev.clientX - down.x, dy = ev.clientY - down.y;
            if (!dragged && Math.hypot(dx, dy) > 5) { dragged = true; canvas.classList.add("dragging"); stopPlay(); follow = false; }
            if (dragged) {
                const wpp = 2 * goal.d * Math.tan(Math.PI / 8) / innerHeight;
                goal.tx -= dx * wpp; goal.ty += dy * wpp; view.tx = goal.tx; view.ty = goal.ty;
                down = { x: ev.clientX, y: ev.clientY };
            }
            return;
        }
        hovered = pick(ev);
        canvas.classList.toggle("pointer", !!hovered);
        if (hovered) { tip.textContent = hovered.title; tip.style.left = ev.clientX + 14 + "px"; tip.style.top = ev.clientY + 14 + "px"; tip.style.opacity = 1; } else tip.style.opacity = 0;
    });
    canvas.addEventListener("pointerup", ev => {
        canvas.classList.remove("dragging");
        if (!dragged) { const e = pick(ev); if (e) openDetail(e); }
        down = null;
    });
    canvas.addEventListener("wheel", ev => {
        ev.preventDefault(); stopPlay(); follow = false;
        goal.d = clamp(goal.d * Math.exp(ev.deltaY * 0.0012), 20, 1800);
    }, { passive: false });
    addEventListener("keydown", ev => { if (ev.key === "Escape") closeDetail(); });

    /* ---------- Panneau détail ---------- */
    let prevGoal = null;
    function openDetail(e) {
        stopPlay();
        if (!selected) prevGoal = { ...goal, follow };
        selected = e; follow = false;
        const wp = new THREE.Vector3(); e.card.getWorldPosition(wp);
        goal.d = 62; goal.tx = wp.x - 14; goal.ty = wp.y;
        if (cur < e.e) setYear(e.e, false);
        const d = $("detail");
        $("detail-chip").textContent = e.b.name; $("detail-chip").style.background = e.b.color;
        $("detail-title").textContent = e.title;
        $("detail-meta").textContent = e.place + " · " + fmtDate(e.s) + " → " + (e.end === "now" ? "aujourd'hui" : fmtDate(e.e));
        $("detail-desc").textContent = e.desc;
        const main = d.querySelector("#detail-img img");
        $("detail-img").style.display = e.images.length ? "" : "none";
        if (e.images.length) main.src = e.images[0];
        const th = $("detail-thumbs"); th.innerHTML = "";
        if (e.images.length > 1) e.images.forEach((src, i) => {
            const im = document.createElement("img"); im.src = src; if (!i) im.className = "on";
            im.onclick = () => { main.src = src; th.querySelectorAll("img").forEach(x => x.classList.remove("on")); im.classList.add("on"); };
            th.appendChild(im);
        });
        $("detail-gains").innerHTML = Object.entries(e.gains).sort((a, b) => b[1] - a[1])
            .map(([k, v]) => "<li><span>" + (skillById[k] ? skillById[k].label : k) + "</span><b>+" + v + "</b></li>").join("");
        d.classList.remove("hidden");
        d.scrollTop = 0;
        pip.hl = new Set(Object.keys(e.gains)); pip.key = "";
    }
    function closeDetail(silent) {
        if (!selected) return;
        selected = null; $("detail").classList.add("hidden");
        pip.hl = new Set(); pip.key = "";
        if (!silent && prevGoal) { Object.assign(goal, { tx: prevGoal.tx, ty: prevGoal.ty, d: prevGoal.d }); follow = prevGoal.follow; }
    }
    $("detail-close").addEventListener("click", () => closeDetail());

    /* ---------- Légende ---------- */
    const legend = $("legend");
    branches.forEach(b => {
        const li = document.createElement("li");
        li.innerHTML = '<i style="background:' + b.color + '"></i>' + b.name;
        li.onclick = () => {
            stopPlay(); closeDetail(true);
            if (cur < b.exps[0].s + 0.3) setYear(b.exps[0].s + 0.3, false);
            const last = Math.max(...b.exps.map(e => e.e));
            goal.tx = (b.laneX + X(Math.min(last, NOW))) / 2; goal.ty = b.lane; goal.d = 115; follow = false;
        };
        b.li = li; legend.appendChild(li);
    });

    /* ---------- Pip-Boy ---------- */
    const pip = { shown: {}, disp: {}, newUntil: {}, key: "", hl: new Set() };
    $("pip-photo").src = D.person.photo; $("pip-name").textContent = D.person.name;
    document.querySelectorAll(".pip-tabs button").forEach(btn => btn.addEventListener("click", () => {
        document.querySelectorAll(".pip-tabs button").forEach(x => x.classList.toggle("active", x === btn));
        document.querySelectorAll(".pip-tab").forEach(t => t.classList.toggle("active", t.id === "tab-" + btn.dataset.tab));
    }));
    $("pip-contact").innerHTML = D.contact.map(c =>
        "<li><small>" + c.icon + " · " + c.label.toUpperCase() + "</small>" +
        (c.url ? '<a href="' + c.url + '" target="_blank" rel="noopener">' + c.value + "</a>" : c.value) + "</li>").join("");
    $("pip-clients").innerHTML = D.clients.map(c => "<li>" + c + "</li>").join("");

    function targetSkills() {
        const v = {};
        exps.forEach(e => {
            const p = clamp((cur - e.s) / Math.max(e.e - e.s, 0.25), 0, 1);
            if (p <= 0) return;
            for (const k in e.gains) v[k] = (v[k] || 0) + e.gains[k] * p;
        });
        for (const k in v) v[k] = Math.min(100, v[k]);
        return v;
    }
    function updatePip(now) {
        const target = targetSkills();
        let changed = false;
        skills.forEach(s => {
            const t = target[s.id] || 0, d = pip.disp[s.id] || 0;
            const nd = Math.abs(t - d) < 0.05 ? t : d + (t - d) * 0.15;
            if (nd !== d) { pip.disp[s.id] = nd; changed = true; }
            const sh = nd >= 0.5;
            if (sh && !pip.shown[s.id]) { pip.shown[s.id] = true; pip.newUntil[s.id] = now + 3000; pip.key = ""; }
            if (!sh && pip.shown[s.id]) { pip.shown[s.id] = false; pip.key = ""; }
        });
        const anyNew = skills.some(s => pip.shown[s.id] && pip.newUntil[s.id] > now);
        const key = skills.filter(s => pip.shown[s.id]).map(s => s.id).join(",") + "|" + anyNew;
        if (pip.key !== key) {
            pip.key = key;
            let html = "";
            branches.forEach(b => {
                const list = skills.filter(s => s.branch === b.id && pip.shown[s.id]);
                if (!list.length) return;
                html += '<div class="pip-group"><h4><span>' + b.name + '</span><span data-sum="' + b.id + '"></span></h4>' + list.map(s =>
                    '<div class="pip-skill' + (pip.newUntil[s.id] > now ? " new" : "") + (pip.hl.has(s.id) ? " hl" : "") + '" data-id="' + s.id + '"><span class="name">' + s.label +
                    '</span><span class="num"></span><div class="bar"><i></i></div></div>').join("") + "</div>";
            });
            $("pip-skills").innerHTML = html || '<div class="pip-empty">AUCUNE COMPÉTENCE DÉTECTÉE<br>FAITES AVANCER LA TIMELINE</div>';
            changed = true;
        }
        if (!changed) return;
        let total = 0; const bsum = {};
        skills.forEach(s => { const v = pip.disp[s.id] || 0; total += v; bsum[s.branch] = (bsum[s.branch] || 0) + v; });
        $("pip-skills").querySelectorAll(".pip-skill").forEach(el => {
            const v = pip.disp[el.dataset.id] || 0;
            el.querySelector(".num").textContent = Math.round(v);
            el.querySelector(".bar i").style.width = v + "%";
        });
        $("pip-skills").querySelectorAll("[data-sum]").forEach(el => el.textContent = Math.round(bsum[el.dataset.sum] || 0) + " PTS");
        const lvl = 1 + Math.floor(total / 40);
        $("pip-lvl").textContent = lvl;
        $("pip-xp").style.width = ((total % 40) / 40 * 100) + "%";
        $("pip-date").textContent = fmtDate(cur).toUpperCase() + " · " + ageAt(cur) + " ANS";
        $("pip-sum").innerHTML = branches.filter(b => bsum[b.id] > 0.5).map(b =>
            '<div style="border-color:' + b.color + ';color:' + b.color + '">' + b.name.split(" ")[0].toUpperCase().slice(0, 5) + "<b>" + Math.round(bsum[b.id]) + "</b></div>").join("");
    }

    /* ---------- Boucle ---------- */
    const clock = new THREE.Clock();
    function frame() {
        requestAnimationFrame(frame);
        const dt = Math.min(clock.getDelta(), 0.1), t = clock.elapsedTime, now = performance.now();
        if (playing) {
            setYear(cur + dt * 1.6);
            if (cur >= NOW) stopPlay();
        }
        const k = 1 - Math.pow(0.001, dt);
        view.tx += (goal.tx - view.tx) * k; view.ty += (goal.ty - view.ty) * k; view.d += (goal.d - view.d) * k;
        cam.position.set(view.tx + view.d * 0.13, view.ty + view.d * 0.09, view.d);
        cam.lookAt(view.tx, view.ty, 0);

        mainPath.tube.setDrawRange(0, Math.floor(clamp(cur / (NOW - BIRTH), 0, 1) * mainPath.tubular) * 48);
        const cx = X(cur);
        cursorDot.position.set(cx, 0, 0); cursorDot.scale.setScalar(1 + Math.sin(t * 4) * 0.12);
        cursorLine.position.x = cx;
        yearDots.forEach(d => {
            const on = d.yr <= cur; d.mesh.visible = on; if (d.label) d.label.visible = on;
        });

        branches.forEach(b => {
            if (!b.path) return;
            const on = cur >= b.forkYear;
            b.appear += ((on ? 1 : 0) - b.appear) * 0.12;
            b.mesh.visible = b.appear > 0.02;
            b.path.tube.setDrawRange(0, Math.floor(fracAt(b.path, cx) * b.path.tubular) * 36);
            b.nameLabel.material.opacity = b.appear;
            b.nameLabel.visible = b.appear > 0.02;
            if (b.mergeDot) b.mergeDot.visible = cx >= b.lastX;
            b.li.classList.toggle("on", on);
            b.exps.forEach(e => {
                const shown = cur >= e.s;
                e.appear += ((shown ? 1 : 0) - e.appear) * 0.14;
                const hv = (hovered === e || selected === e) ? 1 : 0;
                e.hover += (hv - e.hover) * 0.2;
                const a = e.appear, vis = a > 0.01;
                e.group.visible = vis; e.span.visible = vis;
                if (!vis) return;
                e.node.scale.setScalar(a * (1 + e.hover * 0.35));
                e.card.scale.setScalar(a * (1 + e.hover * 0.12));
                e.card.position.y = e.cardBaseY + Math.sin(t * 0.9 + e.phase) * 0.22;
                e.card.material.opacity = a; e.link.material.opacity = 0.5 * a;
                const len = clamp(cx - e.x0, 0.001, e.x1 - e.x0);
                e.span.scale.y = len / e.span.userData.full;
                e.span.position.set(e.x0 + len / 2, e.spanBase.y, e.spanBase.z);
                e.span.material.opacity = a;
            });
        });

        updatePip(now);
        renderer.render(scene, cam);
    }

    setYear(BIRTH);
    view.tx = goal.tx; view.ty = goal.ty; view.d = goal.d;
    frame();
})();
