"use strict";
// Interface text in English and Arabic. The Arabic version opens with ?lang=ar.
// Project text lives in content.js (English) and content.ar.js (Arabic).
(() => {
  const strings = {
    en: {
      title: "Deema Almanea — Portfolio",
      skip: "Skip to work", brand: "Deema Almanea home", nav: "Main navigation",
      navWork: "Work", navArchive: "Archive", navAbout: "About", navLab: "Lab",
      heroTop1: "PERSONAL PORTFOLIO", heroTop2: "AI / XR / CREATIVE TECH",
      heroFirst: "DEEMA", heroLast: "ALMANEA",
      heroAlt: "Lilac retro CRT computer with an acid-green pixel star on its screen",
      explore: "Explore work",
      workEyebrow: "PORTFOLIO / TECHNICAL PROJECTS", workTitle: "Selected work<span>.</span>",
      workSub: "XR games, Arabic NLP, and software projects.",
      archiveEyebrow: "WEB / LOCALIZATION", archiveTitle: "Creative archive<span>.</span>", filters: "Filter the creative archive",
      aboutEyebrow: "ABOUT", aboutTitle: "Hi, I’m<br>Deema<span>.</span>", profile: "PROFILE", portraitAlt: "Portrait of Deema Almanea",
      labEyebrow: "ELECTRONICS / AI", labTitle: "Hardware lab<span>.</span>",
      contactEyebrow: "CONTACT", contactTitle: "Let’s connect<span>.</span>",
      cv: "View CV (PDF)", phone: "Phone", email: "Email",
      footerName: "Deema Almanea", backTop: "Back to top ↑",
      detailBar: "PORTFOLIO / PROJECT DETAIL", close: "Close project",
      all: "All", behind: "Behind the scenes", report: "View full report (PDF)",
      sampleCue: "Sample Arabic cue", gameplay: "gameplay", arrow: "↗",
      toggleLabel: "عربي", toggleLang: "ar",
      chatter: { hover: ":3", idle: ["nya~", ":3"], tap: ["nya~", "hi!", ":3", "♡", "✦"] }
    },
    ar: {
      title: "ديما المانع — معرض الأعمال",
      skip: "انتقل إلى الأعمال", brand: "الصفحة الرئيسية لديما المانع", nav: "التنقل الرئيسي",
      navWork: "الأعمال", navArchive: "الأرشيف", navAbout: "نبذة", navLab: "المختبر",
      heroTop1: "معرض أعمال شخصي", heroTop2: "ذكاء اصطناعي / واقع ممتد / تقنية إبداعية",
      heroFirst: "ديما", heroLast: "المانع",
      heroAlt: "حاسوب CRT كلاسيكي بلون الليلك، وعلى شاشته نجمة بكسل خضراء فسفورية",
      explore: "استكشف أعمالي",
      workEyebrow: "معرض الأعمال / مشاريع تقنية", workTitle: "أعمال مختارة<span>.</span>",
      workSub: "ألعاب واقع ممتد، ومعالجة اللغة العربية، ومشاريع برمجية.",
      archiveEyebrow: "الويب / التعريب", archiveTitle: "الأرشيف الإبداعي<span>.</span>", filters: "تصفية الأرشيف الإبداعي",
      aboutEyebrow: "نبذة", aboutTitle: "أهلًا، أنا<br>ديما<span>.</span>", profile: "الملف الشخصي", portraitAlt: "صورة ديما المانع",
      labEyebrow: "إلكترونيات / ذكاء اصطناعي", labTitle: "مختبر العتاد<span>.</span>",
      contactEyebrow: "تواصل", contactTitle: "لنتواصل<span>.</span>",
      cv: "عرض السيرة الذاتية (PDF)", phone: "الجوال", email: "البريد",
      footerName: "ديما المانع", backTop: "العودة للأعلى ↑",
      detailBar: "معرض الأعمال / تفاصيل المشروع", close: "إغلاق المشروع",
      all: "الكل", behind: "خلف الكواليس", report: "عرض التقرير كاملًا (PDF)",
      sampleCue: "مثال على سطر ترجمة", gameplay: "لقطات اللعب", arrow: "↖",
      toggleLabel: "English", toggleLang: "en",
      chatter: { hover: ":3", idle: ["مياو~", ":3"], tap: ["مياو~", "هلا!", ":3", "♡", "✦"] }
    }
  };

  const lang = document.documentElement.lang === "ar" ? "ar" : "en";
  const t = strings[lang];
  window.i18n = { lang, t };
  if (lang === "ar" && window.portfolioAr) window.portfolio = window.portfolioAr;

  document.title = t.title;
  for (const node of document.querySelectorAll("[data-i18n]")) node.textContent = t[node.dataset.i18n];
  for (const node of document.querySelectorAll("[data-i18n-html]")) node.innerHTML = t[node.dataset.i18nHtml];
  for (const node of document.querySelectorAll("[data-i18n-aria]")) node.setAttribute("aria-label", t[node.dataset.i18nAria]);
  for (const node of document.querySelectorAll("[data-i18n-alt]")) node.alt = t[node.dataset.i18nAlt];

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.textContent = t.toggleLabel;
    toggle.lang = t.toggleLang;
    toggle.hreflang = t.toggleLang;
    toggle.href = t.toggleLang === "ar" ? "?lang=ar" : location.pathname;
  }
  document.documentElement.classList.add("i18n-ready");
})();
