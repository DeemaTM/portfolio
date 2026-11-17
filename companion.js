"use strict";
// Animated chibi cat companion. Follows the scroll, blinks, wags her tail,
// sways her twin tails with scroll speed, watches the cursor, fixes her hair
// when idle, and reacts to hover and taps. Turn off with `companion: false`
// in content.js.
(() => {
  const data = window.portfolio;
  const companion = document.getElementById("companion");
  const portrait = document.getElementById("portrait");
  if (!data || !data.companion || data.profile.portrait || !companion || !portrait) return;

  const OUT = "#3b2340";
  const MARKUP = `
<svg class="chibi" viewBox="0 0 220 270" xmlns="http://www.w3.org/2000/svg" focusable="false">
  <defs>
    <linearGradient id="cHair" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f8dfe5"/><stop offset="1" stop-color="#dfadbb"/></linearGradient>
    <radialGradient id="cFace" cx=".5" cy=".42" r=".62"><stop offset="0" stop-color="#fff7f3"/><stop offset="1" stop-color="#f9e0d8"/></radialGradient>
    <linearGradient id="cIris" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#24112a"/><stop offset=".55" stop-color="#5d3b8f"/><stop offset="1" stop-color="#c6abff"/></linearGradient>
    <linearGradient id="cCloth" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#26232d"/><stop offset="1" stop-color="#141218"/></linearGradient>
    <clipPath id="cClipL"><ellipse cx="105" cy="125" rx="10.5" ry="13"/></clipPath>
    <clipPath id="cClipR"><ellipse cx="145" cy="125" rx="10.5" ry="13"/></clipPath>
  </defs>
  <g id="c-char" stroke-linejoin="round" stroke-linecap="round">
    <g id="c-tail">
      <path d="M146 222 C172 226 196 206 192 178 C189 160 199 146 210 150" fill="none" stroke="${OUT}" stroke-width="13"/>
      <path d="M146 222 C172 226 196 206 192 178 C189 160 199 146 210 150" fill="none" stroke="#e9bfca" stroke-width="8.5"/>
      <path d="M195 162 C198 152 204 148 210 150" fill="none" stroke="#c88fa1" stroke-width="8.5"/>
      <path d="M164 216 L156 206 L172 210 Z M164 216 L176 222 L168 228 Z" fill="#b99af8" stroke="${OUT}" stroke-width="1.6"/>
      <circle cx="166" cy="216" r="3.2" fill="#9b78ec" stroke="${OUT}" stroke-width="1.4"/>
    </g>
    <g id="c-body">
      <rect x="119" y="154" width="12" height="26" rx="4" fill="#f2d2c9"/>
      <path d="M108 176 L142 176 C150 190 156 214 162 234 Q125 244 88 234 C94 214 100 190 108 176 Z" fill="url(#cCloth)" stroke="${OUT}" stroke-width="2.2"/>
      <path d="M91 229 Q125 239 159 229" fill="none" stroke="#b99af8" stroke-width="3"/>
      <path d="M110 176 L125 195 L140 176 Z" fill="#f7f4ef" stroke="${OUT}" stroke-width="1.6"/>
      <path d="M121 189 L129 189 L127.5 203 L125 206 L122.5 203 Z" fill="#b99af8" stroke="${OUT}" stroke-width="1.3"/>
      <rect x="108" y="207" width="5.5" height="5.5" rx="1.2" fill="#8f5fe8"/><rect x="115" y="207" width="5.5" height="5.5" rx="1.2" fill="#b99af8"/>
      <path d="M140 200.5 L141.4 204.6 L145.5 206 L141.4 207.4 L140 211.5 L138.6 207.4 L134.5 206 L138.6 204.6 Z" fill="#dcff53"/>
      <rect x="110" y="235" width="10" height="13" fill="#f7f4ef" stroke="${OUT}" stroke-width="1.6"/>
      <rect x="130" y="235" width="10" height="13" fill="#f7f4ef" stroke="${OUT}" stroke-width="1.6"/>
      <rect x="105" y="245" width="17" height="12" rx="5.5" fill="#19171e" stroke="${OUT}" stroke-width="1.8"/>
      <rect x="128" y="245" width="17" height="12" rx="5.5" fill="#19171e" stroke="${OUT}" stroke-width="1.8"/>
      <path d="M106 182 C98 190 92 202 92 212 L102 214 C103 204 107 196 112 190 Z" fill="url(#cCloth)" stroke="${OUT}" stroke-width="2"/>
      <circle cx="96" cy="216" r="6" fill="#fbe6de" stroke="${OUT}" stroke-width="1.8"/>
    </g>
    <g id="c-head">
      <g id="c-twinL">
        <path d="M74 80 C50 92 40 125 48 158 C52 175 44 188 36 196 C58 194 72 178 74 160 C77 135 80 110 86 92 Z" fill="url(#cHair)" stroke="${OUT}" stroke-width="2.2"/>
        <path d="M64 104 C56 126 58 150 52 176" fill="none" stroke="#cf9eac" stroke-width="1.8"/>
      </g>
      <g id="c-twinR">
        <path d="M176 80 C200 92 210 125 202 158 C198 175 206 188 214 196 C192 194 178 178 176 160 C173 135 170 110 164 92 Z" fill="url(#cHair)" stroke="${OUT}" stroke-width="2.2"/>
        <path d="M186 104 C194 126 192 150 198 176" fill="none" stroke="#cf9eac" stroke-width="1.8"/>
      </g>
      <g id="c-earL">
        <path d="M80 76 L84 26 Q86 21 91 25 L116 52 Z" fill="url(#cHair)" stroke="${OUT}" stroke-width="2.2"/>
        <path d="M87 64 L89 37 L106 54 Z" fill="#ffb3c6"/>
      </g>
      <g id="c-earR">
        <path d="M170 76 L166 26 Q164 21 159 25 L134 52 Z" fill="url(#cHair)" stroke="${OUT}" stroke-width="2.2"/>
        <path d="M163 64 L161 37 L144 54 Z" fill="#ffb3c6"/>
      </g>
      <path d="M66 112 C62 66 96 46 125 46 C154 46 188 66 184 112 C186 134 182 150 176 156 Q125 140 74 156 C68 150 64 134 66 112 Z" fill="url(#cHair)" stroke="${OUT}" stroke-width="2.2"/>
      <ellipse cx="72" cy="86" rx="6.5" ry="5.5" fill="#b99af8" stroke="${OUT}" stroke-width="1.6"/>
      <ellipse cx="178" cy="86" rx="6.5" ry="5.5" fill="#b99af8" stroke="${OUT}" stroke-width="1.6"/>
      <ellipse cx="125" cy="118" rx="49" ry="44" fill="url(#cFace)" stroke="${OUT}" stroke-width="2.2"/>
      <path d="M74 112 C72 80 96 62 125 62 C154 62 178 80 176 112 Q171 99 166 94 Q163 104 158 110 Q154 96 148 90 Q145 100 140 106 Q136 94 131 88 Q129 95 125 100 Q121 95 119 88 Q114 94 110 106 Q105 100 102 90 Q96 96 92 110 Q87 104 84 94 Q79 99 74 112 Z" fill="url(#cHair)" stroke="${OUT}" stroke-width="2.2"/>
      <path d="M100 73 Q125 64 150 73" fill="none" stroke="#fff4f6" stroke-width="3" opacity=".85"/>
      <path d="M78 100 C70 124 72 150 80 172 C86 160 88 140 90 118 Z" fill="url(#cHair)" stroke="${OUT}" stroke-width="2"/>
      <path d="M172 100 C180 124 178 150 170 172 C164 160 162 140 160 118 Z" fill="url(#cHair)" stroke="${OUT}" stroke-width="2"/>
      <ellipse cx="96" cy="142" rx="8" ry="4.5" fill="#ff9fb6" opacity=".55"/>
      <ellipse cx="154" cy="142" rx="8" ry="4.5" fill="#ff9fb6" opacity=".55"/>
      <path d="M92 142 l3 -3 M97 142 l3 -3 M150 142 l3 -3 M155 142 l3 -3" stroke="#ff7f9c" stroke-width="1.2"/>
      <g id="c-eyeL">
        <ellipse cx="105" cy="125" rx="10.5" ry="13" fill="#fff"/>
        <g clip-path="url(#cClipL)"><g id="c-lookL">
          <ellipse cx="105" cy="126" rx="9" ry="11.5" fill="url(#cIris)"/>
          <ellipse cx="105" cy="127" rx="4" ry="5.5" fill="#1a0d1f"/>
          <path d="M105 121.5 L106.3 125.7 L110.5 127 L106.3 128.3 L105 132.5 L103.7 128.3 L99.5 127 L103.7 125.7 Z" fill="#fff"/>
          <circle cx="101" cy="120" r="3" fill="#fff"/><circle cx="108.5" cy="131.5" r="1.5" fill="#fff" opacity=".8"/>
        </g></g>
        <path d="M93.5 120 Q105 107.5 116.5 119 M93.5 120 L89.5 117.5" fill="none" stroke="${OUT}" stroke-width="3.4"/>
        <path d="M99 138.5 Q105 140.5 111 138.5" fill="none" stroke="${OUT}" stroke-width="1.2" opacity=".5"/>
      </g>
      <g id="c-eyeR">
        <ellipse cx="145" cy="125" rx="10.5" ry="13" fill="#fff"/>
        <g clip-path="url(#cClipR)"><g id="c-lookR">
          <ellipse cx="145" cy="126" rx="9" ry="11.5" fill="url(#cIris)"/>
          <ellipse cx="145" cy="127" rx="4" ry="5.5" fill="#1a0d1f"/>
          <path d="M145 121.5 L146.3 125.7 L150.5 127 L146.3 128.3 L145 132.5 L143.7 128.3 L139.5 127 L143.7 125.7 Z" fill="#fff"/>
          <circle cx="141" cy="120" r="3" fill="#fff"/><circle cx="148.5" cy="131.5" r="1.5" fill="#fff" opacity=".8"/>
        </g></g>
        <path d="M133.5 119 Q145 107.5 156.5 120 M156.5 120 L160.5 117.5" fill="none" stroke="${OUT}" stroke-width="3.4"/>
        <path d="M139 138.5 Q145 140.5 151 138.5" fill="none" stroke="${OUT}" stroke-width="1.2" opacity=".5"/>
      </g>
      <path id="c-happy" d="M95 128 Q105 116 115 128 M135 128 Q145 116 155 128" fill="none" stroke="${OUT}" stroke-width="3.4"/>
      <path d="M118 145 Q121.5 149.5 125 145 Q128.5 149.5 132 145" fill="none" stroke="${OUT}" stroke-width="2"/>
      <g id="c-clipL">
        <circle cx="85.5" cy="61" r="4" fill="#fff" stroke="${OUT}" stroke-width="1.6"/><circle cx="98.5" cy="61" r="4" fill="#fff" stroke="${OUT}" stroke-width="1.6"/>
        <circle cx="92" cy="69" r="8.5" fill="#fff" stroke="${OUT}" stroke-width="1.8"/>
        <ellipse cx="92" cy="72" rx="3.2" ry="2.3" fill="#f3d6dd"/>
        <circle cx="89" cy="67.5" r="1.2" fill="${OUT}"/><circle cx="95" cy="67.5" r="1.2" fill="${OUT}"/><circle cx="92" cy="71.2" r=".9" fill="${OUT}"/>
      </g>
      <g id="c-clipR">
        <circle cx="153.5" cy="59" r="4" fill="#19171e" stroke="${OUT}" stroke-width="1.6"/><circle cx="166.5" cy="59" r="4" fill="#19171e" stroke="${OUT}" stroke-width="1.6"/>
        <circle cx="160" cy="67" r="8.5" fill="#19171e" stroke="${OUT}" stroke-width="1.8"/>
        <ellipse cx="160" cy="70.2" rx="3.4" ry="2.5" fill="#f7f4ef"/>
        <circle cx="157" cy="65.2" r="1.3" fill="#f7f4ef"/><circle cx="163" cy="65.2" r="1.3" fill="#f7f4ef"/><circle cx="160" cy="69.4" r=".9" fill="#19171e"/>
      </g>
    </g>
    <g id="c-armR">
      <path d="M144 182 C152 190 158 202 158 212 L148 214 C147 204 143 196 138 190 Z" fill="url(#cCloth)" stroke="${OUT}" stroke-width="2"/>
      <circle cx="154" cy="216" r="6" fill="#fbe6de" stroke="${OUT}" stroke-width="1.8"/>
    </g>
  </g>
  <g id="c-bubble" class="c-bubble" opacity="0">
    <path d="M46 37 L62 51 L36 40 Z" fill="#17151b" stroke="#b99af8" stroke-width="1.6" stroke-linejoin="round"/>
    <rect x="4" y="8" width="62" height="32" rx="16" fill="#17151b" stroke="#b99af8" stroke-width="1.6"/>
    <path d="M37 40 L45.5 40" stroke="#17151b" stroke-width="2.6"/>
    <text id="c-say" x="35" y="29.5" text-anchor="middle" font-family="Consolas, 'IBM Plex Mono', monospace" font-weight="700" font-size="15" fill="#f1eee8">:3</text>
  </g>
  <ellipse class="hit" cx="125" cy="150" rx="74" ry="106" fill="transparent"/>
</svg>`;

  companion.innerHTML = MARKUP;
  const svg = companion.querySelector("svg");
  const part = (id) => svg.querySelector("#" + id);
  const P = {
    char: part("c-char"), head: part("c-head"), tail: part("c-tail"),
    twinL: part("c-twinL"), twinR: part("c-twinR"), earL: part("c-earL"), earR: part("c-earR"),
    armR: part("c-armR"), eyeL: part("c-eyeL"), eyeR: part("c-eyeR"),
    lookL: part("c-lookL"), lookR: part("c-lookR"), clipR: part("c-clipR"),
    bubble: part("c-bubble"), say: part("c-say"), hit: svg.querySelector(".hit")
  };
  const RATIO = 270 / 220;
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

  // ---------- state + tweens ----------
  const s = { head: 0, headTilt: 0, tail: 0, phase: 0, twin: 0, twinV: 0, earL: 0, earR: 0, arm: 0,
    hop: 0, blink: 1, lookX: 0, lookY: 0, lookTX: 0, lookTY: 0, bubble: 0, clip: 0 };
  let tweens = [];
  const ease = (t) => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  function tween(key, to, ms) {
    tweens = tweens.filter((t) => { if (t.key === key) { t.resolve(); return false; } return true; });
    return new Promise((resolve) => tweens.push({ key, from: s[key], to, ms, start: performance.now(), resolve }));
  }
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  function render() {
    P.char.setAttribute("transform", `translate(0 ${-s.hop})`);
    P.head.setAttribute("transform", `rotate(${s.head} 125 165)`);
    P.tail.setAttribute("transform", `rotate(${s.tail} 148 222)`);
    P.twinL.setAttribute("transform", `rotate(${s.twin} 76 84)`);
    P.twinR.setAttribute("transform", `rotate(${-s.twin} 174 84)`);
    P.earL.setAttribute("transform", `rotate(${-s.earL} 96 60)`);
    P.earR.setAttribute("transform", `rotate(${s.earR} 154 60)`);
    P.armR.setAttribute("transform", `rotate(${s.arm} 146 186)`);
    P.clipR.setAttribute("transform", `rotate(${s.clip} 160 67)`);
    const lid = `translate(0 ${125 * (1 - s.blink)}) scale(1 ${s.blink})`;
    P.eyeL.setAttribute("transform", lid);
    P.eyeR.setAttribute("transform", lid);
    const look = `translate(${s.lookX} ${s.lookY})`;
    P.lookL.setAttribute("transform", look);
    P.lookR.setAttribute("transform", look);
    const b = .6 + .4 * s.bubble;
    P.bubble.setAttribute("opacity", s.bubble.toFixed(3));
    P.bubble.setAttribute("transform", `translate(${62 * (1 - b)} ${51 * (1 - b)}) scale(${b})`);
  }

  // ---------- actions ----------
  let busy = false, happyOn = false, lookOverride = false, sayTimer = 0;
  async function blink() {
    await tween("blink", .08, 70); await tween("blink", 1, 120);
    if (Math.random() < .2) { await wait(90); await tween("blink", .08, 70); await tween("blink", 1, 120); }
  }
  function say(text, ms = 1500) {
    P.say.textContent = text;
    tween("bubble", 1, 170);
    clearTimeout(sayTimer);
    sayTimer = setTimeout(() => tween("bubble", 0, 220), ms);
  }
  async function flick(key) { await tween(key, 20, 90); await tween(key, 0, 160); }
  function happy(ms = 1100) {
    happyOn = true; svg.classList.add("is-happy");
    setTimeout(() => { happyOn = false; svg.classList.remove("is-happy"); }, ms);
  }
  async function hop() { await tween("hop", 11, 170); await tween("hop", 0, 230); }
  async function fixHair() {
    busy = true;
    tween("headTilt", 7, 380);
    await tween("arm", -145, 380);
    for (let i = 0; i < 2; i++) {
      tween("clip", -14, 130);
      await tween("arm", -133, 140);
      tween("clip", 0, 130);
      await tween("arm", -148, 140);
    }
    happy(700);
    await wait(250);
    tween("headTilt", 0, 420);
    await tween("arm", 0, 420);
    busy = false;
  }
  async function lookAround() {
    busy = true; lookOverride = true;
    s.lookTX = -2.8; s.lookTY = .4; await wait(650);
    s.lookTX = 2.8; await wait(650);
    lookOverride = false; busy = false;
  }
  function idleAction() {
    const r = Math.random();
    if (r < .4) fixHair();
    else if (r < .65) lookAround();
    else if (r < .85) { flick("earL"); setTimeout(() => flick("earR"), 160); say(":3"); }
    else { flick("earR"); say("nya~"); }
  }

  // ---------- interaction ----------
  let pointer = null;
  addEventListener("pointermove", (e) => { pointer = { x: e.clientX, y: e.clientY }; }, { passive: true });
  document.addEventListener("pointerleave", () => { pointer = null; });
  P.hit.addEventListener("pointerenter", () => {
    flick("earL"); setTimeout(() => flick("earR"), 120);
    if (s.bubble < .5) say(":3", 1300);
  });
  const phrases = ["nya~", "hi!", ":3", "♡", "✦"];
  let lastPhrase = "";
  P.hit.addEventListener("click", (e) => {
    e.stopPropagation();
    let p; do { p = phrases[Math.floor(Math.random() * phrases.length)]; } while (p === lastPhrase);
    lastPhrase = p;
    happy(); hop(); say(p, 1400);
  });

  // ---------- main loop ----------
  let running = false, last = 0, lastScroll = scrollY, vel = 0, idleSince = 0, nextBlink = 0, nextIdle = 0;
  function frame(now) {
    if (!running) return;
    const dt = Math.min(.05, (now - last) / 1000 || .016); last = now;
    const dy = scrollY - lastScroll; lastScroll = scrollY;
    vel += (dy / dt - vel) * Math.min(1, dt * 9);
    if (Math.abs(dy) > .5) idleSince = now;

    tweens = tweens.filter((t) => {
      const p = Math.min(1, (now - t.start) / t.ms);
      s[t.key] = t.from + (t.to - t.from) * ease(p);
      if (p === 1) { t.resolve(); return false; }
      return true;
    });

    const speed = Math.min(Math.abs(vel), 2600);
    s.phase += dt * (3.2 + speed / 300);
    s.tail = Math.sin(s.phase) * (11 + speed / 140);

    const twinTarget = Math.max(-24, Math.min(24, vel / 55)) + Math.sin(now / 650) * 2;
    s.twinV += (120 * (twinTarget - s.twin) - 12 * s.twinV) * dt;
    s.twin += s.twinV * dt;

    const headTarget = s.headTilt + Math.max(-6, Math.min(6, -vel / 260)) + Math.sin(now / 1300) * 1.2;
    s.head += (headTarget - s.head) * Math.min(1, dt * 6);

    if (!lookOverride) {
      if (pointer) {
        const box = svg.getBoundingClientRect();
        const dx = pointer.x - (box.left + box.width * 125 / 220);
        const dyp = pointer.y - (box.top + box.height * 125 / 270);
        const d = Math.hypot(dx, dyp) || 1, f = Math.min(1, d / 220);
        s.lookTX = dx / d * 2.8 * f; s.lookTY = dyp / d * 2.2 * f;
      } else { s.lookTX = 0; s.lookTY = 0; }
    }
    s.lookX += (s.lookTX - s.lookX) * Math.min(1, dt * 10);
    s.lookY += (s.lookTY - s.lookY) * Math.min(1, dt * 10);

    if (now > nextBlink) { if (!happyOn) blink(); nextBlink = now + 2200 + Math.random() * 3300; }
    if (!busy && now > nextIdle && now - idleSince > 1200) { idleAction(); nextIdle = now + 6500 + Math.random() * 4500; }

    render();
    requestAnimationFrame(frame);
  }
  function start() {
    if (running) return;
    running = true; last = performance.now(); lastScroll = scrollY;
    nextBlink = last + 1500; nextIdle = last + 5000; idleSince = last;
    requestAnimationFrame(frame);
  }
  function stop() { running = false; }

  // ---------- placement (scrolls down the page and docks into the About card) ----------
  let placeFrame = 0;
  function placeCompanion() {
    placeFrame = 0;
    if (reducedMotion.matches) return;
    const target = portrait.getBoundingClientRect();
    const viewHeight = window.innerHeight;
    const viewWidth = document.documentElement.clientWidth;
    const progress = Math.min(1, Math.max(0, (viewHeight * .91 - target.top) / (viewHeight * .34)));
    const dock = progress * progress * (3 - 2 * progress);
    const travelWidth = Math.max(78, Math.min(160, viewWidth * .13));
    const dockWidth = Math.min(target.width * .9, target.height * .98 / RATIO);
    const width = travelWidth + (dockWidth - travelWidth) * dock;
    const cornerX = viewWidth - travelWidth - Math.max(8, viewWidth * .02);
    const approachScroll = Math.max(1, window.scrollY + target.top - viewHeight * .91);
    const descent = Math.min(1, window.scrollY / approachScroll);
    const startY = Math.min(84, viewHeight * .14);
    const lastY = Math.max(startY, viewHeight - travelWidth * RATIO - 20);
    const cornerY = startY + (lastY - startY) * descent;
    const dockX = target.left + (target.width - dockWidth) * .5;
    const dockY = target.bottom - dockWidth * RATIO * .93;
    const x = cornerX + (dockX - cornerX) * dock;
    const y = cornerY + (dockY - cornerY) * dock;
    companion.style.width = width + "px";
    companion.style.transform = "translate3d(" + x + "px," + y + "px,0)";
    companion.style.setProperty("--peek", (9 * dock) + "%");
    companion.dataset.pose = dock > .93 ? "peek" : window.scrollY < 45 ? "idle" : "travel";
  }
  const schedule = () => { if (!placeFrame) placeFrame = requestAnimationFrame(placeCompanion); };

  function syncMotion() {
    if (reducedMotion.matches) {
      stop();
      companion.hidden = true;
      portrait.classList.add("companion-still");
      portrait.append(svg);
      Object.assign(s, { head: 0, tail: 0, twin: 0, arm: 0, hop: 0, blink: 1, lookX: 0, lookY: 0, bubble: 0, clip: 0 });
      render();
    } else {
      portrait.classList.remove("companion-still");
      companion.append(svg);
      placeCompanion();
      companion.hidden = false;
      start();
    }
  }
  reducedMotion.addEventListener("change", syncMotion);
  addEventListener("scroll", schedule, { passive: true });
  addEventListener("resize", schedule);
  document.addEventListener("visibilitychange", () => { if (document.hidden) stop(); else if (!reducedMotion.matches) start(); });
  render();
  syncMotion();
})();
