/* APM Agenta — main.js */
let currentLang = localStorage.getItem('apm_lang') || 'de';

const FAQS = {
  de: [
    { q: "Was macht APM Agenta?", a: "APM Agenta ist eine Performance-Marketing-Agentur für KMU in Deutschland. Wir spezialisieren uns auf Recruitment Marketing, Employer Branding, Paid Media, Social Media Management, Video und Fotoproduktion sowie BAFA-geförderte Beratung." },
    { q: "Was unterscheidet APM Agenta von anderen Agenturen?", a: "Wir veröffentlichen unsere Preise offen auf der Website, trennen Servicegebühren vom Werbebudget und arbeiten mit festen Leistungsumfängen. Werbebudget wird ohne Aufschlag weitergeleitet und monatliches Reporting ist in jedem Paket enthalten." },
    { q: "Was kosten eure Pakete?", a: "Unsere Pakete beginnen bei 199 EUR pro Monat für Starter, 399 EUR für Growth und 649 EUR für Campaign. Alle Preise sind Nettopreise ohne Werbebudget." },
    { q: "Was ist die BAFA-Förderung?", a: "Das BAFA-Programm ermöglicht KMU in Deutschland eine staatliche Förderung von bis zu 50 Prozent der Beratungskosten. Voraussetzungen sind weniger als 250 Mitarbeiter und mindestens zwei Jahre Unternehmensgeschichte. Wir begleiten Sie durch den Antragsprozess." },
    { q: "Garantieren Sie bestimmte Ergebnisse?", a: "Wir arbeiten datenbasiert und optimieren kontinuierlich. Eine Garantie für bestimmte Leads oder Umsätze können wir nicht geben, da Ergebnisse von Markt, Budget und Zielgruppe abhängen. Transparente Kommunikation und ehrliches Reporting garantieren wir immer." },
    { q: "Wie starte ich eine Zusammenarbeit?", a: "Buchen Sie direkt einen kostenlosen 30-minütigen Strategie-Call über den Kalender-Link auf dieser Seite oder schreiben Sie uns an contact@apmagenta.com. Wir antworten innerhalb von 24 Stunden an Werktagen." }
  ],
  en: [
    { q: "What does APM Agenta do?", a: "APM Agenta is a performance marketing agency for SMEs in Germany. We specialise in recruitment marketing, employer branding, paid media, social media management, video and photo production and BAFA-funded consulting." },
    { q: "How is APM Agenta different?", a: "We publish prices openly, separate service fees from ad spend and work with fixed scopes. Ad spend is passed through at cost with zero markup and monthly reporting is included in every package." },
    { q: "What do your packages cost?", a: "Packages start at 199 EUR per month for Starter, 399 EUR for Growth and 649 EUR for Campaign. All prices are net and exclude advertising spend." },
    { q: "What is BAFA funding?", a: "The BAFA program allows SMEs in Germany to receive up to 50 percent state funding for strategic consulting. Requirements include fewer than 250 employees and at least two years of trading history. We guide you through the full process." },
    { q: "Do you guarantee results?", a: "We work data-driven and optimize continuously. We cannot guarantee specific lead or revenue numbers as results depend on market, budget and target group. We do guarantee transparent communication and honest reporting." },
    { q: "How do I get started?", a: "Book a free 30-minute strategy call directly via the calendar link on this page or email contact@apmagenta.com. We respond within 24 hours on business days." }
  ]
};

const TRANSLATIONS = {
  de: {
    pageTitle: 'APM Agenta | Marketing. Strategie. Wachstum.',
    langBtn: 'EN',
    'nav-services': 'Leistungen', 'nav-industries': 'Branchen', 'nav-about': 'Über uns',
    'nav-pricing': 'Preise', 'nav-faq': 'FAQ', 'nav-phone': '+49 177 295 0662',
    'nav-cta': 'Gespräch buchen',
    'mob-services': 'Leistungen', 'mob-industries': 'Branchen', 'mob-about': 'Über uns',
    'mob-pricing': 'Preise', 'mob-faq': 'FAQ', 'mob-cta': 'Gespräch buchen',
    'hero-badge': 'Performance Marketing · Deutschland',
    'hero-headline': 'Wir bauen automatisierte<br><em>Marketing-Pipelines</em><br>für Unternehmen die wachsen wollen.',
    'hero-sub': 'Kein Halbwissen. Kein Aufschlag auf Werbebudget. Messbarer Erfolg für KMU, Kliniken und lokale Unternehmen in Deutschland.',
    'hero-book': 'Strategie-Gespräch buchen', 'hero-services': 'Unsere Leistungen',
    'tr1': 'Ab pro Monat', 'tr2': 'Aufschlag auf Werbebudget',
    'tr3': 'BAFA-Förderung möglich', 'tr4': 'Antwortzeit',
    'who-eyebrow': 'Wer wir sind',
    'who-title': 'APM Agenta. <em>Transparenz ist unser Standard.</em>',
    'who-body': 'APM Agenta ist eine Performance-Marketing-Agentur für kleine und mittlere Unternehmen in Deutschland. Wir liefern klare Pakete, klare Preise und klare Ergebnisse. Kein verstecktes Markup auf Werbebudgets. Keine vagen Versprechen. Nur messbarer Mehrwert.',
    'who-body2': 'Unsere Spezialisierung liegt auf automatisierten Recruiting- und Lead-Pipelines, Employer Branding und gezielten Paid-Media-Kampagnen auf Meta, Google und TikTok.',
    'who-link': 'Mehr über uns erfahren',
    'wc1-t': 'Performance First', 'wc1-d': 'Jede Kampagne wird auf messbare KPIs ausgerichtet. Wir optimieren kontinuierlich auf Basis echter Daten.',
    'wc2-t': 'Volle Transparenz', 'wc2-d': 'Preise, Leistungsumfang und Werbebudget sind klar getrennt. Sie wissen immer, wofür Sie bezahlen.',
    'wc3-t': 'Lokaler Fokus', 'wc3-d': 'Wir kennen den deutschen Markt. Von BAFA-Förderung bis lokalem Targeting bauen wir Strategien die funktionieren.',
    'ind-eyebrow': 'Branchen', 'ind-title': 'Branchen die wir <em>betreuen.</em>', 'ind-link': 'Alle Branchen',
    'ic1': 'Gesundheitswesen', 'ic1d': 'Patienten-Gewinnungs-Pipelines für Kliniken und Praxen',
    'ic2': 'Handwerk und Industrie', 'ic2d': 'Mitarbeitergewinnung und Recruiting-Kampagnen',
    'ic3': 'Tech und Start-ups', 'ic3d': 'Performance Marketing und Growth Hacking',
    'ic4': 'Einzelhandel und Gastronomie', 'ic4d': 'Lokale Sichtbarkeit und Kundenbindung',
    'ic5': 'Pflege und Soziales', 'ic5d': 'Fachkräftegewinnung für Pflegeeinrichtungen',
    'ic6': 'KMU und Mittelstand', 'ic6d': 'Ganzheitliche Marketing-Strategie für etablierte Unternehmen',
    'fw-eyebrow': 'Unser Framework', 'fw-title': 'Wie wir <em>arbeiten.</em>',
    'fw-sub': 'Anstatt leere Portfolios zu zeigen, zeigen wir Ihnen den exakten Prozess den wir für jeden Kunden einsetzen.',
    'fw1t': 'Analyse und Strategie', 'fw1d': 'Wir analysieren Ihre Zielgruppe, den Wettbewerb und Ihre aktuelle Marktposition. Auf Basis echter Daten entwickeln wir eine maßgeschneiderte Kampagnenstrategie.',
    'fw2t': 'Pipeline-Aufbau', 'fw2d': 'Wir bauen automatisierte Funnels für Recruiting, Lead-Generierung oder Patientengewinnung mit individuellem Tracking und klaren Conversion-Zielen.',
    'fw3t': 'Creative Produktion', 'fw3d': 'Ad-Texte, Grafiken und Videos werden datenbasiert entwickelt und auf die Zielgruppe optimiert. Kein generischer Content.',
    'fw4t': 'Launch und Optimierung', 'fw4d': 'Kampagnenstart mit täglichem Monitoring. Kontinuierliche datenbasierte Anpassungen für maximale Effizienz jedes eingesetzten Euro.',
    'fw5t': 'Reporting', 'fw5d': 'Monatliche Reporting-Gespräche in klarer Sprache. KPIs, Fortschritt und nächste Schritte. Kein Fachjargon. Keine Überraschungen.',
    'fw6t': 'Skalierung', 'fw6d': 'Was funktioniert, skalieren wir. Was nicht funktioniert, verbessern wir. Langfristige Partnerschaften mit messbarem Wachstum.',
    'price-eyebrow': 'Transparente Preise', 'price-title': 'Klare Pakete.', 'price-title-em': 'Keine Überraschungen.',
    'price-sub': 'Alle Preise sind Nettopreise und beinhalten kein Werbebudget. Werbebudget für Meta, Instagram oder Google Ads wird immer separat und ohne Aufschlag weitergeleitet.',
    'p2-badge': 'Beliebtestes Paket',
    'p1-desc': 'Für Unternehmen die ihre erste professionelle Online-Präsenz aufbauen möchten.',
    'p2-desc': 'Für Unternehmen die regelmäßig Inhalte veröffentlichen und strukturiert kommunizieren möchten.',
    'p3-desc': 'Für Unternehmen die Recruiting-Kampagnen oder Lead-Generierung benötigen.',
    'p1-cta': 'Jetzt starten', 'p2-cta': 'Jetzt starten', 'p3-cta': 'Jetzt starten',
    'price-note': 'Werbebudget für Meta, Instagram oder Google Ads wird immer separat und ohne Aufschlag berechnet. APM Agenta verdient nie am Werbebudget unserer Kunden.',
    'faq-title': 'Häufig gestellte Fragen',
    'con-eyebrow': 'Kontakt', 'con-title': 'Lassen Sie uns gemeinsam', 'con-title-em': 'wachsen.',
    'con-sub': 'Kein Druck. Keine Verpflichtung. Nur ein ehrliches Gespräch über Ihre Ziele.',
    'ci0-l': 'Telefon', 'ci1-l': 'E-Mail', 'ci2-l': 'Antwortzeit',
    'ci2-v': 'Innerhalb von 24 Stunden an Werktagen', 'ci3-l': 'Erstgespräch',
    'ci3-v': 'Kostenloser 30-minütiger Strategie-Call',
    'con-book': 'Strategie-Gespräch buchen',
    'lbl-name': 'Name', 'lbl-company': 'Unternehmen', 'lbl-email': 'E-Mail Adresse',
    'lbl-phone': 'Telefon', 'lbl-service': 'Gewünschtes Paket', 'lbl-message': 'Ihre Nachricht',
    'submit-btn': 'Nachricht senden',
    'ck-title': 'Wir verwenden Cookies', 'ck-accept': 'Alle akzeptieren', 'ck-decline': 'Nur notwendige',
    'err-name': 'Bitte geben Sie Ihren Namen ein.',
    'err-email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    'err-message': 'Bitte schreiben Sie uns eine kurze Nachricht.',
    'err-consent': 'Bitte stimmen Sie der Datenschutzerklärung zu.',
    'sending': 'Wird gesendet...',
    'form-success': 'Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    'ph-name': 'Ihr Name', 'ph-company': 'Ihr Unternehmen', 'ph-email': 'ihre@email.de',
    'ph-message': 'Erzählen Sie uns von Ihrem Projekt und Ihren Zielen...',
    'consent-inner': 'Ich habe die <a href="datenschutz.html" target="_blank">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.',
  },
  en: {
    pageTitle: 'APM Agenta | Marketing. Strategy. Growth.',
    langBtn: 'DE',
    'nav-services': 'Services', 'nav-industries': 'Industries', 'nav-about': 'About',
    'nav-pricing': 'Pricing', 'nav-faq': 'FAQ', 'nav-phone': '+49 177 295 0662',
    'nav-cta': 'Book a Call',
    'mob-services': 'Services', 'mob-industries': 'Industries', 'mob-about': 'About',
    'mob-pricing': 'Pricing', 'mob-faq': 'FAQ', 'mob-cta': 'Book a Call',
    'hero-badge': 'Performance Marketing · Germany',
    'hero-headline': 'We build automated<br><em>marketing pipelines</em><br>for businesses that want to grow.',
    'hero-sub': 'No half-measures. No markup on ad spend. Measurable success for SMEs, clinics and local businesses in Germany.',
    'hero-book': 'Book a Strategy Call', 'hero-services': 'Our Services',
    'tr1': 'Starting per month', 'tr2': 'Ad Spend Markup',
    'tr3': 'BAFA Funding Available', 'tr4': 'Response Time',
    'who-eyebrow': 'Who We Are',
    'who-title': 'APM Agenta. <em>Transparency is our standard.</em>',
    'who-body': 'APM Agenta is a performance marketing agency for small and medium-sized businesses in Germany. We deliver clear packages, clear prices and clear results. No hidden markup on ad budgets. No vague promises. Only measurable value.',
    'who-body2': 'We specialise in automated recruiting and lead pipelines, employer branding and targeted paid media campaigns on Meta, Google and TikTok.',
    'who-link': 'Learn more about us',
    'wc1-t': 'Performance First', 'wc1-d': 'Every campaign is aligned with measurable KPIs. We continuously optimize based on real data.',
    'wc2-t': 'Full Transparency', 'wc2-d': 'Prices, scope and ad spend are clearly separated. You always know exactly what you are paying for.',
    'wc3-t': 'Local Focus', 'wc3-d': 'We know the German market. From BAFA funding to local targeting we build strategies that work.',
    'ind-eyebrow': 'Industries', 'ind-title': 'Industries we <em>serve.</em>', 'ind-link': 'All Industries',
    'ic1': 'Healthcare', 'ic1d': 'Patient acquisition pipelines for clinics and practices',
    'ic2': 'Trades and Industry', 'ic2d': 'Recruitment and hiring campaigns',
    'ic3': 'Tech and Start-ups', 'ic3d': 'Performance marketing and growth hacking',
    'ic4': 'Retail and Hospitality', 'ic4d': 'Local visibility and customer retention',
    'ic5': 'Care and Social Services', 'ic5d': 'Specialist recruitment for care facilities',
    'ic6': 'SMEs and Mid-Market', 'ic6d': 'Holistic marketing strategy for established businesses',
    'fw-eyebrow': 'Our Framework', 'fw-title': 'How we <em>work.</em>',
    'fw-sub': 'Instead of showing empty portfolios we show you the exact process we deploy for every client.',
    'fw1t': 'Analysis and Strategy', 'fw1d': 'We analyse your target group, competition and current market position. Based on real data we develop a tailored campaign strategy.',
    'fw2t': 'Pipeline Build', 'fw2d': 'We build automated funnels for recruiting, lead generation or patient acquisition with individual tracking and clear conversion goals.',
    'fw3t': 'Creative Production', 'fw3d': 'Ad copy, graphics and videos are developed data-driven and optimized for the target group. No generic content.',
    'fw4t': 'Launch and Optimization', 'fw4d': 'Campaign launch with daily monitoring. Continuous data-driven adjustments for maximum efficiency of every euro spent.',
    'fw5t': 'Reporting', 'fw5d': 'Monthly reporting calls in plain language. KPIs, progress and next steps. No jargon. No surprises.',
    'fw6t': 'Scaling', 'fw6d': 'We scale what works and fix what does not. Long-term partnerships with measurable growth.',
    'price-eyebrow': 'Transparent Pricing', 'price-title': 'Clear Packages.', 'price-title-em': 'No Surprises.',
    'price-sub': 'All prices are net and exclude advertising spend which is always charged separately and passed through at cost with zero markup.',
    'p2-badge': 'Most Popular',
    'p1-desc': 'For businesses building their first professional online presence.',
    'p2-desc': 'For businesses that want consistent content and structured communication.',
    'p3-desc': 'For businesses running recruiting or lead generation campaigns.',
    'p1-cta': 'Get Started', 'p2-cta': 'Get Started', 'p3-cta': 'Get Started',
    'price-note': 'Ad spend for Meta, Instagram or Google Ads is always charged separately and passed through at cost. APM Agenta never takes a percentage of your advertising budget.',
    'faq-title': 'Frequently Asked Questions',
    'con-eyebrow': 'Get In Touch', 'con-title': "Let's grow", 'con-title-em': 'together.',
    'con-sub': 'No pressure. No commitment. Just an honest conversation about your goals.',
    'ci0-l': 'Phone', 'ci1-l': 'Email', 'ci2-l': 'Response Time',
    'ci2-v': 'Within 24 hours on business days', 'ci3-l': 'First Call',
    'ci3-v': 'Free 30-minute strategy session',
    'con-book': 'Book a Strategy Call',
    'lbl-name': 'Name', 'lbl-company': 'Company', 'lbl-email': 'Email Address',
    'lbl-phone': 'Phone', 'lbl-service': 'Package of Interest', 'lbl-message': 'Your Message',
    'submit-btn': 'Send Message',
    'ck-title': 'We use cookies', 'ck-accept': 'Accept all', 'ck-decline': 'Essential only',
    'err-name': 'Please enter your name.',
    'err-email': 'Please enter a valid email address.',
    'err-message': 'Please write us a short message.',
    'err-consent': 'Please agree to the privacy policy.',
    'sending': 'Sending...',
    'form-success': 'Thank you! We will be in touch within 24 hours.',
    'ph-name': 'Your name', 'ph-company': 'Your company', 'ph-email': 'your@email.com',
    'ph-message': 'Tell us about your project and your goals...',
    'consent-inner': 'I have read the <a href="datenschutz.html" target="_blank">Privacy Policy</a> and agree to the processing of my data.',
  }
};

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('apm_lang', lang);
  document.documentElement.lang = lang;
  const t = TRANSLATIONS[lang];
  document.title = t.pageTitle;
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = t.langBtn;
  Object.keys(t).forEach(id => {
    if (id === 'pageTitle' || id === 'langBtn' || id.startsWith('err-') || id.startsWith('ph-') || id === 'sending' || id === 'form-success' || id === 'consent-inner') return;
    const el = document.getElementById(id);
    if (!el) return;
    const val = t[id];
    if (id.includes('title') || id.includes('headline') || id.includes('body') || id.includes('sub') || id.includes('desc') || id.includes('badge') || id.includes('d') ) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
  const consentEl = document.getElementById('consent-text');
  if (consentEl) consentEl.innerHTML = t['consent-inner'];
  const phs = { fname: t['ph-name'], fcompany: t['ph-company'], femail: t['ph-email'], fmessage: t['ph-message'] };
  Object.entries(phs).forEach(([id, ph]) => { const el = document.getElementById(id); if (el) el.placeholder = ph; });
  renderFaq();
}

function toggleLang() { applyLang(currentLang === 'de' ? 'en' : 'de'); }

function renderFaq() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = FAQS[currentLang].map((f, i) => `
    <div class="faq-item">
      <button class="faq-btn" onclick="toggleFaq(${i})">
        <span class="faq-question">${f.q}</span>
        <span class="faq-icon" id="fi-${i}">+</span>
      </button>
      <div class="faq-answer" id="fa-${i}">
        <div class="faq-answer-inner">${f.a}</div>
      </div>
    </div>
  `).join('');
}

function toggleFaq(i) {
  const ans = document.getElementById('fa-' + i);
  const icon = document.getElementById('fi-' + i);
  const isOpen = ans.classList.contains('open');
  document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-icon').forEach(ic => ic.classList.remove('open'));
  if (!isOpen) { ans.classList.add('open'); icon.classList.add('open'); }
}

function acceptCookies() { localStorage.setItem('apm_cookies', 'accepted'); hideCookieBanner(); }
function declineCookies() { localStorage.setItem('apm_cookies', 'declined'); hideCookieBanner(); }
function hideCookieBanner() { const b = document.getElementById('cookie-banner'); if (b) { b.classList.remove('visible'); setTimeout(() => b.remove(), 400); } }

function initCookieBanner() {
  if (!localStorage.getItem('apm_cookies')) {
    const b = document.getElementById('cookie-banner');
    if (b) setTimeout(() => b.classList.add('visible'), 1400);
  }
}

function initNav() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60), { passive: true });
}

function closeMobile() {
  document.getElementById('mobileMenu')?.classList.remove('open');
  document.getElementById('mobileToggle')?.classList.remove('active');
  document.body.style.overflow = '';
}

function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const open = menu.classList.contains('open');
    if (open) { closeMobile(); } else {
      menu.classList.add('open');
      toggle.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobile(); });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  function showErr(f, m) { const e = document.getElementById(f + '-error'); if (e) { e.textContent = m; e.classList.add('visible'); } const i = document.getElementById('f' + f); if (i) i.style.borderColor = '#fc8181'; }
  function clearErr(f) { const e = document.getElementById(f + '-error'); if (e) { e.textContent = ''; e.classList.remove('visible'); } const i = document.getElementById('f' + f); if (i) i.style.borderColor = ''; }
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const t = TRANSLATIONS[currentLang];
    let valid = true;
    ['name','email','message','consent'].forEach(f => clearErr(f));
    const name = document.getElementById('fname');
    const email = document.getElementById('femail');
    const msg = document.getElementById('fmessage');
    const consent = document.getElementById('fconsent');
    if (!name?.value.trim()) { showErr('name', t['err-name']); valid = false; }
    if (!email?.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { showErr('email', t['err-email']); valid = false; }
    if (!msg?.value.trim()) { showErr('message', t['err-message']); valid = false; }
    if (!consent?.checked) { showErr('consent', t['err-consent']); valid = false; }
    if (!valid) return;
    const btn = document.getElementById('submit-btn');
    const success = document.getElementById('form-success');
    const errMsg = document.getElementById('form-error-msg');
    btn.disabled = true; btn.textContent = t['sending'];
    if (success) success.style.display = 'none';
    if (errMsg) errMsg.style.display = 'none';
    try {
      const res = await fetch(form.action, { method:'POST', body:new FormData(form), headers:{ Accept:'application/json' } });
      if (res.ok) { form.reset(); if (success) { success.textContent = t['form-success']; success.style.display = 'block'; } }
      else { if (errMsg) errMsg.style.display = 'block'; }
    } catch { if (errMsg) errMsg.style.display = 'block'; }
    finally { btn.disabled = false; btn.textContent = TRANSLATIONS[currentLang]['submit-btn']; }
  });
}

function initReveal() {
  const els = document.querySelectorAll('.who-card, .ind-card, .fw-step, .pricing-card, .faq-item, .who-grid');
  els.forEach(el => el.classList.add('reveal'));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 68, behavior:'smooth' }); }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('apm_lang');
  if (saved && saved !== 'de') { applyLang(saved); } else { renderFaq(); }
  initCookieBanner();
  initNav();
  initMobileMenu();
  initContactForm();
  initReveal();
  initSmoothScroll();
});
