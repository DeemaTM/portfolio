"use strict";

const data = window.portfolio;
const $ = (id) => document.getElementById(id);
const dialog = $("detail");

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function artwork(entry) {
  if (!entry.image && !entry.art) return null;
  const art = element("div", entry.art ? "artwork art-" + entry.art : "artwork");
  if (entry.image) {
    const img = element("img");
    img.src = entry.image;
    img.alt = entry.alt || "";
    img.loading = "lazy";
    art.append(img);
  } else {
    art.setAttribute("aria-hidden", "true");
    const symbols = { snsd: "SNSD", design: "✳", translation: "Aa / أ" };
    if (symbols[entry.art]) art.append(element("span", "art-type", symbols[entry.art]));
  }
  return art;
}

function openInNewTab(anchor) {
  anchor.target = "_blank";
  anchor.rel = "noopener";
}

function appendLinks(container, links) {
  for (const link of links) {
    if (!link.url || !link.label) continue;
    const destination = new URL(link.url, location.href);
    if (!["https:", "http:", "mailto:", "file:"].includes(destination.protocol)) continue;
    const anchor = element("a", "button secondary", link.label + " ↗");
    anchor.href = link.url;
    if (destination.protocol.startsWith("http")) openInNewTab(anchor);
    container.append(anchor);
  }
}

function projectShot(item) {
  const figure = element("figure", "project-shot");
  figure.append(artwork(item), element("figcaption", "", item.caption));
  return figure;
}

function showDetail(entry) {
  const links = element("div", "contact-actions");
  appendLinks(links, entry.links);
  const art = artwork(entry);
  const sections = (entry.sections || []).map((item) => {
    const section = element("section", "case-section");
    section.append(element("h3", "", item.title), element("p", "", item.text));
    if (item.arabicExample) {
      const example = element("p", "subtitle-example", "Sample Arabic cue");
      const subtitle = element("q", "", item.arabicExample);
      subtitle.lang = "ar";
      subtitle.dir = "rtl";
      example.append(subtitle);
      section.append(example);
    }
    section.append(...(item.shots || []).map(projectShot));
    if (item.links?.length) {
      const sectionLinks = element("div", "contact-actions");
      appendLinks(sectionLinks, item.links);
      section.append(sectionLinks);
    }
    return section;
  });
  const skills = element("ul", "project-skills");
  skills.append(...(entry.skills || []).map((skill) => element("li", "", skill)));
  const gameplay = element("figure", "gameplay-video");
  if (entry.video) {
    const player = element("video");
    player.controls = true;
    player.playsInline = true;
    player.preload = "none";
    player.poster = entry.image || "";
    player.src = entry.video;
    player.setAttribute("aria-label", entry.name + " gameplay");
    gameplay.append(player, element("figcaption", "", entry.videoCaption));
  }
  const behind = element("section", "case-section behind-scenes");
  if (entry.behindText || entry.behindScenes?.length) {
    behind.append(element("h3", "", "Behind the scenes"));
    if (entry.behindText) behind.append(element("p", "", entry.behindText));
    behind.append(...(entry.behindScenes || []).map(projectShot));
  }
  if (entry.report) {
    const report = element("a", "button secondary", "View full report (PDF) ↗");
    report.href = entry.report;
    openInNewTab(report);
    links.append(report);
  }
  const showCover = art && !entry.sections?.some((section) => section.shots?.length);
  $("detail-body").replaceChildren(
    element("p", "eyebrow", entry.category),
    Object.assign(element("h2", "", entry.name), { id: "detail-title" }),
    element("p", "detail-copy", entry.description),
    ...(skills.children.length ? [skills] : []),
    ...(entry.video ? [gameplay] : showCover ? [art] : []),
    ...sections,
    ...(entry.gallery || []).map(projectShot),
    ...(behind.children.length ? [behind] : []),
    links
  );
  dialog.showModal();
  dialog.scrollTop = 0;
}

function card(entry) {
  const button = element("button", "card");
  button.type = "button";
  const caption = element("span", "card-caption");
  const title = element("span", "card-title", entry.name);
  const arrow = element("span", "card-arrow", "↗");
  arrow.setAttribute("aria-hidden", "true");
  caption.append(element("span", "eyebrow", entry.category), title, element("span", "card-summary", entry.summary), arrow);
  const art = artwork(entry);
  if (art) button.append(art);
  else button.classList.add("text-only");
  button.append(caption);
  button.addEventListener("click", () => showDetail(entry));
  return button;
}

function renderArchive(category) {
  const entries = data.archive.filter((entry) => category === "All" || entry.category === category);
  $("archive-grid").replaceChildren(...entries.map(card));
}

const categories = [...new Set(data.archive.map((entry) => entry.category))];
$("filters").hidden = categories.length < 2;
for (const category of ["All", ...categories]) {
  const button = element("button", "filter", category);
  button.type = "button";
  button.setAttribute("aria-pressed", category === "All");
  button.addEventListener("click", () => {
    for (const filter of $("filters").children) filter.setAttribute("aria-pressed", filter === button);
    renderArchive(category);
  });
  $("filters").append(button);
}
renderArchive("All");
$("project-grid").append(...data.projects.map(card));

$("computer").querySelector("img").src = data.heroImage;
$("hero-intro").textContent = data.intro;
$("bio").textContent = data.profile.bio;
$("id-role").textContent = data.profile.role;
if (data.profile.portrait) {
  const portrait = element("img");
  portrait.src = data.profile.portrait;
  portrait.alt = "Portrait of Deema Almanea";
  $("portrait").removeAttribute("aria-hidden");
  $("portrait").replaceChildren(portrait);
}
if (data.profile.cv) {
  $("cv-link").href = data.profile.cv;
  openInNewTab($("cv-link"));
  $("cv-link").hidden = false;
}

$("lab-intro").textContent = data.lab.intro;
const labArt = artwork(data.lab);
if (labArt) $("lab-art").replaceWith(labArt);
else $("lab-art").remove();
for (const topic of data.lab.topics) {
  const detail = element("details", "lab-topic");
  detail.append(element("summary", "", topic.title), element("p", "", topic.text));
  $("lab-topics").append(detail);
}

$("contact-copy").textContent = data.contact.message;
if (data.contact.phone) {
  const phone = element("a", "contact-method");
  phone.href = "tel:" + data.contact.phone.replace(/[^+\d]/g, "");
  phone.append(element("span", "", "Phone"), element("strong", "", data.contact.phone), element("span", "contact-arrow", "↗"));
  phone.lastChild.setAttribute("aria-hidden", "true");
  $("contact-methods").append(phone);
}
if (data.contact.email) {
  const email = element("a", "contact-method");
  email.href = "mailto:" + data.contact.email;
  email.append(element("span", "", "Email"), element("strong", "", data.contact.email), element("span", "contact-arrow", "↗"));
  email.lastChild.setAttribute("aria-hidden", "true");
  $("contact-methods").append(email);
}
appendLinks($("contact-actions"), data.contact.links);
$("year").textContent = new Date().getFullYear();

dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener("close", () => {
  dialog.querySelector("video")?.pause();
});

function tilt(surface, target) {
  surface.addEventListener("pointermove", (event) => {
    const box = surface.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    target.style.setProperty("--rx", (-y * 15) + "deg");
    target.style.setProperty("--ry", (x * 18) + "deg");
  });
  surface.addEventListener("pointerleave", () => {
    target.style.removeProperty("--rx");
    target.style.removeProperty("--ry");
  });
}
if (matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) {
  tilt($("hero-stage"), $("computer"));
  tilt($("id-desk"), $("id-card"));
}

if (data.companionImage && !data.profile.portrait) {
  const companion = $("companion");
  const sprite = companion.querySelector("img");
  const portrait = $("portrait");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;

  function placeCompanion() {
    frame = 0;
    if (reducedMotion.matches) return;
    const target = portrait.getBoundingClientRect();
    const viewHeight = window.innerHeight;
    const viewWidth = document.documentElement.clientWidth;
    const progress = Math.min(1, Math.max(0, (viewHeight * .91 - target.top) / (viewHeight * .34)));
    const dock = progress * progress * (3 - 2 * progress);
    const travelWidth = Math.max(61, Math.min(128, viewWidth * .105));
    const dockWidth = Math.min(target.width * .82, target.height * .92);
    const width = travelWidth + (dockWidth - travelWidth) * dock;
    const ratio = sprite.naturalHeight / sprite.naturalWidth;
    const cornerX = viewWidth - travelWidth - Math.max(12, viewWidth * .025);
    const approachScroll = Math.max(1, window.scrollY + target.top - viewHeight * .91);
    const descent = Math.min(1, window.scrollY / approachScroll);
    const startY = Math.min(96, viewHeight * .16);
    const lastY = Math.max(startY, viewHeight - travelWidth * ratio - 28);
    const cornerY = startY + (lastY - startY) * descent;
    const dockX = target.left + (target.width - dockWidth) * .5;
    const dockY = target.bottom - dockWidth * ratio * .90;
    const x = cornerX + (dockX - cornerX) * dock;
    const y = cornerY + (dockY - cornerY) * dock;
    companion.style.width = width + "px";
    companion.style.transform = "translate3d(" + x + "px," + y + "px,0)";
    companion.style.setProperty("--peek", (11 * dock) + "%");
    companion.dataset.pose = dock > .93 ? "peek" : window.scrollY < 45 ? "idle" : "travel";
  }

  function scheduleCompanion() {
    if (!frame) frame = requestAnimationFrame(placeCompanion);
  }

  function syncMotion() {
    if (reducedMotion.matches) {
      companion.hidden = true;
      portrait.classList.add("companion-still");
      portrait.style.backgroundImage = 'url("' + data.companionImage + '")';
    } else {
      portrait.classList.remove("companion-still");
      portrait.style.removeProperty("background-image");
      if (sprite.naturalWidth) {
        placeCompanion();
        companion.hidden = false;
      }
    }
  }

  sprite.addEventListener("load", syncMotion);
  sprite.src = data.companionImage;
  reducedMotion.addEventListener("change", syncMotion);
  window.addEventListener("scroll", scheduleCompanion, { passive: true });
  window.addEventListener("resize", scheduleCompanion);
  if (sprite.complete && sprite.naturalWidth) syncMotion();
}
