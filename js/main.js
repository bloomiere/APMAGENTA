/* ============================================================
   APM Agenta — main.js v5
   Language dropdown DE/EN · FAQ · Form · Nav · Reveal
============================================================ */

let currentLang = localStorage.getItem('apm_lang') || 'de';

/* ---- ALL TRANSLATIONS ---- */
const T = {
  de: {
    pageTitle: 'APM Agenta | Marketing. Strategie. Wachstum.',
    langCurrent: 'DE',
    'nav-about':'Über uns','nav-services':'Leistungen','nav-framework':'Framework',
    'nav-industries':'Branchen','nav-faq':'FAQ','nav-contact':'Kontakt',
    'mob-about':'Über uns','mob-services':'Leistungen','mob-framework':'Framework',
    'mob-industries':'Branchen','mob-faq':'FAQ','mob-contact':'Kontakt',
    'ck-title':'Wir verwenden Cookies',
    'ck-desc':'Diese Website verwendet Cookies. Mehr in unserer Datenschutzerklärung.',
    'ck-accept':'Alle akzeptieren','ck-decline':'Nur notwendige',
    'hero-badge':'Performance Marketing · Deutschland',
    'hero-headline':'Wir bauen automatisierte<br><em>Marketing-Pipelines</em><br>für Unternehmen die wachsen wollen.',
    'hero-sub':'Kein Halbwissen. Kein Aufschlag auf Werbebudget. Messbarer Erfolg für KMU, Kliniken und lokale Unternehmen in Deutschland.',
    'hero-book':'Strategie-Gespräch buchen','hero-services':'Unsere Leistungen',
    'tr1':'Ab pro Monat','tr2':'Aufschlag auf Werbebudget','tr3':'BAFA-Förderung möglich','tr4':'Antwortzeit',
    'who-eyebrow':'Wer wir sind',
    'who-title':'APM Agenta. <em>Transparenz ist unser Standard.</em>',
    'who-body':'APM Agenta ist eine Performance-Marketing-Agentur für kleine und mittlere Unternehmen in Deutschland. Wir liefern klare Pakete, klare Preise und klare Ergebnisse. Kein verstecktes Markup auf Werbebudgets. Keine vagen Versprechen. Nur messbarer Mehrwert.',
    'who-body2':'Unsere Spezialisierung liegt auf automatisierten Recruiting- und Lead-Pipelines, Employer Branding und gezielten Paid-Media-Kampagnen auf Meta, Google und TikTok.',
    'who-link':'Mehr über uns erfahren',
    'wc1-t':'Performance First','wc1-d':'Jede Kampagne wird auf messbare KPIs ausgerichtet. Wir optimieren kontinuierlich auf Basis echter Daten.',
    'wc2-t':'Volle Transparenz','wc2-d':'Preise, Leistungsumfang und Werbebudget sind klar getrennt. Sie wissen immer, wofür Sie bezahlen.',
    'wc3-t':'Lokaler Fokus','wc3-d':'Wir kennen den deutschen Markt. Von BAFA-Förderung bis lokalem Targeting bauen wir Strategien die funktionieren.',
    'ind-eyebrow':'Branchen','ind-title':'Branchen die wir <em>betreuen.</em>','ind-link':'Alle Branchen',
    'ic1':'Gesundheitswesen','ic1d':'Patienten-Gewinnungs-Pipelines für Kliniken und Praxen',
    'ic2':'Handwerk und Industrie','ic2d':'Mitarbeitergewinnung und Recruiting-Kampagnen',
    'ic3':'Tech und Start-ups','ic3d':'Performance Marketing und Growth Hacking',
    'ic4':'Einzelhandel und Gastronomie','ic4d':'Lokale Sichtbarkeit und Kundenbindung',
    'ic5':'Pflege und Soziales','ic5d':'Fachkräftegewinnung für Pflegeeinrichtungen',
    'ic6':'KMU und Mittelstand','ic6d':'Ganzheitliche Marketing-Strategie für etablierte Unternehmen',
    'fw-eyebrow':'Unser Framework','fw-title':'Wie wir <em>arbeiten.</em>',
    'fw-sub':'Anstatt leere Portfolios zu zeigen, zeigen wir Ihnen den exakten Prozess den wir für jeden Kunden einsetzen.',
    'fw1t':'Analyse und Strategie','fw1d':'Wir analysieren Ihre Zielgruppe, den Wettbewerb und Ihre aktuelle Marktposition. Auf Basis echter Daten entwickeln wir eine maßgeschneiderte Kampagnenstrategie.',
    'fw2t':'Pipeline-Aufbau','fw2d':'Wir bauen automatisierte Funnels für Recruiting, Lead-Generierung oder Patientengewinnung mit individuellem Tracking und klaren Conversion-Zielen.',
    'fw3t':'Creative Produktion','fw3d':'Ad-Texte, Grafiken und Videos werden datenbasiert entwickelt und auf die Zielgruppe optimiert. Kein generischer Content.',
    'fw4t':'Launch und Optimierung','fw4d':'Kampagnenstart mit täglichem Monitoring. Kontinuierliche datenbasierte Anpassungen für maximale Effizienz jedes eingesetzten Euro.',
    'fw5t':'Reporting','fw5d':'Monatliche Reporting-Gespräche in klarer Sprache. KPIs, Fortschritt und nächste Schritte. Kein Fachjargon. Keine Überraschungen.',
    'fw6t':'Skalierung','fw6d':'Was funktioniert, skalieren wir. Was nicht funktioniert, verbessern wir. Langfristige Partnerschaften mit messbarem Wachstum.',
    'price-eyebrow':'Investment und Frameworks','price-title':'Skalierbare Programme für Ihren','price-title-em':'Marktdurchbruch.',
    'price-sub':'Keine starren Dienstleistungen, sondern maßgeschneiderte Wachstums-Pipelines. Wählen Sie das Fundament, das zu Ihren aktuellen Unternehmenszielen passt. Alle Preise sind Nettopreise ohne Werbebudget.',
    'p2-badge':'Meistgewählt',
    'p1-desc':'Die digitale Infrastruktur für planbare Anfragen und messbare Markenpräsenz.',
    'p2-desc':'Die Omnichannel-Wachstumsmaschine für ambitionierte KMU, die den Markt dominieren wollen.',
    'p3-desc':'Das Rundum-Sorglos-Paket für maximale Marktanteile, Omnipräsenz und Employer Branding.',
    'p1-cta':'Catalyst anfordern','p2-cta':'Velocity Engine starten','p3-cta':'Gespräch vereinbaren',
    'price-note':'Werbebudget für Meta, Instagram oder Google Ads wird immer separat und ohne Aufschlag berechnet. APM Agenta verdient nie am Werbebudget unserer Kunden.',
    'faq-title':'Häufig gestellte Fragen',
    'con-eyebrow':'Kontakt','con-title':'Lassen Sie uns gemeinsam','con-title-em':'wachsen.',
    'con-sub':'Kein Druck. Keine Verpflichtung. Nur ein ehrliches Gespräch über Ihre Ziele.',
    'ci0-l':'Telefon','ci1-l':'E-Mail','ci2-l':'Antwortzeit','ci2-v':'Innerhalb von 24 Stunden an Werktagen',
    'ci3-l':'Erstgespräch','ci3-v':'Kostenloser 30-minütiger Strategie-Call',
    'con-book':'Strategie-Gespräch buchen',
    'lbl-name':'Name','lbl-company':'Unternehmen','lbl-email':'E-Mail Adresse',
    'lbl-phone':'Telefon','lbl-service':'Gewünschtes Programm','lbl-message':'Ihre Nachricht',
    'submit-btn':'Nachricht senden',
    'sel-default':'Bitte wählen','sel-cat':'APM Scale Catalyst (199 EUR/Mo)',
    'sel-vel':'Market Velocity Engine (399 EUR/Mo)','sel-dom':'Market Domination Suite (649 EUR/Mo)',
    'sel-bafa':'BAFA-geförderte Beratung','sel-cust':'Individuelles Angebot',
    'consent-inner':'Ich habe die <a href="datenschutz.html" target="_blank">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.',
    'form-success-msg':'Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    'err-name':'Bitte geben Sie Ihren Namen ein.',
    'err-email':'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    'err-message':'Bitte schreiben Sie uns eine kurze Nachricht.',
    'err-phone':'Bitte geben Sie Ihre Telefonnummer ein.',
    'err-consent':'Bitte stimmen Sie der Datenschutzerklärung zu.',
    'sending':'Wird gesendet...',
    'ph-name':'Ihr Name','ph-company':'Ihr Unternehmen','ph-email':'ihre@email.de',
    'ph-message':'Erzählen Sie uns von Ihrem Projekt und Ihren Zielen...',
  },
  en: {
    pageTitle: 'APM Agenta | Marketing. Strategy. Growth.',
    langCurrent: 'EN',
    'nav-about':'About','nav-services':'Services','nav-framework':'Framework',
    'nav-industries':'Industries','nav-faq':'FAQ','nav-contact':'Contact',
    'mob-about':'About','mob-services':'Services','mob-framework':'Framework',
    'mob-industries':'Industries','mob-faq':'FAQ','mob-contact':'Contact',
    'ck-title':'We use cookies',
    'ck-desc':'This website uses cookies for the best experience. See our privacy policy.',
    'ck-accept':'Accept all','ck-decline':'Essential only',
    'hero-badge':'Performance Marketing · Germany',
    'hero-headline':'We build automated<br><em>marketing pipelines</em><br>for businesses that want to grow.',
    'hero-sub':'No half-measures. No markup on ad spend. Measurable success for SMEs, clinics and local businesses in Germany.',
    'hero-book':'Book a Strategy Call','hero-services':'Our Services',
    'tr1':'Starting per month','tr2':'Ad Spend Markup','tr3':'BAFA Funding Available','tr4':'Response Time',
    'who-eyebrow':'Who We Are',
    'who-title':'APM Agenta. <em>Transparency is our standard.</em>',
    'who-body':'APM Agenta is a performance marketing agency for small and medium-sized businesses in Germany. We deliver clear packages, clear prices and clear results. No hidden markup on ad budgets. No vague promises. Only measurable value.',
    'who-body2':'We specialise in automated recruiting and lead pipelines, employer branding and targeted paid media campaigns on Meta, Google and TikTok.',
    'who-link':'Learn more about us',
    'wc1-t':'Performance First','wc1-d':'Every campaign is aligned with measurable KPIs. We continuously optimise based on real data.',
    'wc2-t':'Full Transparency','wc2-d':'Prices, scope and ad spend are clearly separated. You always know exactly what you are paying for.',
    'wc3-t':'Local Focus','wc3-d':'We know the German market. From BAFA funding to local targeting we build strategies that work.',
    'ind-eyebrow':'Industries','ind-title':'Industries we <em>serve.</em>','ind-link':'All Industries',
    'ic1':'Healthcare','ic1d':'Patient acquisition pipelines for clinics and practices',
    'ic2':'Trades and Industry','ic2d':'Recruitment and hiring campaigns',
    'ic3':'Tech and Start-ups','ic3d':'Performance marketing and growth hacking',
    'ic4':'Retail and Hospitality','ic4d':'Local visibility and customer retention',
    'ic5':'Care and Social Services','ic5d':'Specialist recruitment for care facilities',
    'ic6':'SMEs and Mid-Market','ic6d':'Holistic marketing strategy for established businesses',
    'fw-eyebrow':'Our Framework','fw-title':'How we <em>work.</em>',
    'fw-sub':'Instead of showing empty portfolios we show you the exact process we deploy for every client.',
    'fw1t':'Analysis and Strategy','fw1d':'We analyse your target group, competition and current market position. Based on real data we develop a tailored campaign strategy.',
    'fw2t':'Pipeline Build','fw2d':'We build automated funnels for recruiting, lead generation or patient acquisition with individual tracking and clear conversion goals.',
    'fw3t':'Creative Production','fw3d':'Ad copy, graphics and videos are developed data-driven and optimised for the target group. No generic content.',
    'fw4t':'Launch and Optimisation','fw4d':'Campaign launch with daily monitoring. Continuous data-driven adjustments for maximum efficiency of every euro spent.',
    'fw5t':'Reporting','fw5d':'Monthly reporting calls in plain language. KPIs, progress and next steps. No jargon. No surprises.',
    'fw6t':'Scaling','fw6d':'We scale what works and fix what does not. Long-term partnerships with measurable growth.',
    'price-eyebrow':'Investment and Frameworks','price-title':'Scalable programmes for your','price-title-em':'Market Breakthrough.',
    'price-sub':'No rigid services, but tailored growth pipelines. Choose the foundation that fits your current business goals. All prices are net and exclude advertising spend.',
    'p2-badge':'Most Popular',
    'p1-desc':'The digital infrastructure for plannable enquiries and measurable brand presence.',
    'p2-desc':'The omnichannel growth machine for ambitious SMEs that want to dominate the market.',
    'p3-desc':'The all-inclusive package for maximum market share, omnipresence and employer branding.',
    'p1-cta':'Request Catalyst','p2-cta':'Start Velocity Engine','p3-cta':'Book a Call',
    'price-note':'Ad spend for Meta, Instagram or Google Ads is always charged separately and passed through at cost. APM Agenta never takes a percentage of your advertising budget.',
    'faq-title':'Frequently Asked Questions',
    'con-eyebrow':'Contact','con-title':"Let's grow",'con-title-em':'together.',
    'con-sub':'No pressure. No commitment. Just an honest conversation about your goals.',
    'ci0-l':'Phone','ci1-l':'Email','ci2-l':'Response Time','ci2-v':'Within 24 hours on business days',
    'ci3-l':'First Call','ci3-v':'Free 30-minute strategy session',
    'con-book':'Book a Strategy Call',
    'lbl-name':'Name','lbl-company':'Company','lbl-email':'Email Address',
    'lbl-phone':'Phone','lbl-service':'Programme of Interest','lbl-message':'Your Message',
    'submit-btn':'Send Message',
    'sel-default':'Please select','sel-cat':'APM Scale Catalyst (199 EUR/mo)',
    'sel-vel':'Market Velocity Engine (399 EUR/mo)','sel-dom':'Market Domination Suite (649 EUR/mo)',
    'sel-bafa':'BAFA-Funded Consulting','sel-cust':'Custom Offer',
    'consent-inner':'I have read the <a href="datenschutz.html" target="_blank">Privacy Policy</a> and agree to the processing of my data.',
    'form-success-msg':'Thank you! We will be in touch within 24 hours.',
    'err-name':'Please enter your name.',
    'err-email':'Please enter a valid email address.',
    'err-message':'Please write us a short message.',
    'err-phone':'Please enter your phone number.',
    'err-consent':'Please agree to the privacy policy.',
    'sending':'Sending...',
    'ph-name':'Your name','ph-company':'Your company','ph-email':'your@email.com',
    'ph-message':'Tell us about your project and your goals...',
  }
};

/* ---- FAQ DATA ---- */
const FAQS = {
  de: [
    { q:"Was macht APM Agenta?", a:"APM Agenta ist eine Performance-Marketing-Agentur für KMU in Deutschland. Wir spezialisieren uns auf Recruitment Marketing, Employer Branding, Paid Media, Social Media Management sowie BAFA-geförderte Beratung." },
    { q:"Was unterscheidet APM Agenta von anderen Agenturen?", a:"Wir veröffentlichen unsere Preise offen, trennen Servicegebühren vom Werbebudget und arbeiten mit festen Leistungsumfängen. Werbebudget wird ohne Aufschlag weitergeleitet und monatliches Reporting ist in jedem Paket enthalten." },
    { q:"Was kosten eure Programme?", a:"Unsere Programme beginnen bei 199 EUR pro Monat für den Scale Catalyst, 399 EUR für die Market Velocity Engine und 649 EUR für die Market Domination Suite. Alle Preise sind Nettopreise ohne Werbebudget." },
    { q:"Was ist die BAFA-Förderung?", a:"Das BAFA-Programm ermöglicht KMU in Deutschland eine staatliche Förderung von bis zu 50 Prozent der Beratungskosten. Voraussetzungen sind weniger als 250 Mitarbeiter und mindestens zwei Jahre Unternehmensgeschichte." },
    { q:"Garantieren Sie bestimmte Ergebnisse?", a:"Wir arbeiten datenbasiert und optimieren kontinuierlich. Eine Garantie für bestimmte Leads oder Umsätze können wir nicht geben, da Ergebnisse von Markt, Budget und Zielgruppe abhängen. Transparente Kommunikation und ehrliches Reporting garantieren wir immer." },
    { q:"Wie starte ich eine Zusammenarbeit?", a:"Buchen Sie direkt einen kostenlosen Strategie-Call über den Kalender-Link im Kontaktbereich oder schreiben Sie uns an contact@apmagenta.com. Wir antworten innerhalb von 24 Stunden an Werktagen." }
  ],
  en: [
    { q:"What does APM Agenta do?", a:"APM Agenta is a performance marketing agency for SMEs in Germany. We specialise in recruitment marketing, employer branding, paid media, social media management and BAFA-funded consulting." },
    { q:"How is APM Agenta different?", a:"We publish prices openly, separate service fees from ad spend and work with fixed scopes. Ad spend is passed through at cost with zero markup and monthly reporting is included in every package." },
    { q:"What do your programmes cost?", a:"Programmes start at 199 EUR per month for the Scale Catalyst, 399 EUR for the Market Velocity Engine and 649 EUR for the Market Domination Suite. All prices are net and exclude advertising spend." },
    { q:"What is BAFA funding?", a:"The BAFA program allows SMEs in Germany to receive up to 50 percent state funding for strategic consulting. Requirements include fewer than 250 employees and at least two years of trading history." },
    { q:"Do you guarantee results?", a:"We work data-driven and optimise continuously. We cannot guarantee specific lead or revenue numbers as results depend on market, budget and target group. We do guarantee transparent communication and honest reporting." },
    { q:"How do I get started?", a:"Book a free strategy call directly via the calendar link in the contact section or email contact@apmagenta.com. We respond within 24 hours on business days." }
  ]
};

/* ---- APPLY LANGUAGE ---- */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('apm_lang', lang);
  document.documentElement.lang = lang;
  const t = T[lang];
  document.title = t.pageTitle;

  // Update lang dropdown display
  const cur = document.getElementById('lang-current');
  if (cur) cur.textContent = t.langCurrent;

  // Update dropdown options aria-selected
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.setAttribute('aria-selected', btn.getAttribute('onclick').includes(`'${lang}'`) ? 'true' : 'false');
  });

  // Update mobile lang buttons
  const mDE = document.getElementById('mob-lang-de');
  const mEN = document.getElementById('mob-lang-en');
  if (mDE) mDE.classList.toggle('active', lang === 'de');
  if (mEN) mEN.classList.toggle('active', lang === 'en');

  // Apply all text translations by ID
  const htmlIds = ['hero-headline','who-title','who-body','who-body2','ind-title','fw-title',
    'ck-desc','consent-text'];
  Object.keys(t).forEach(id => {
    if (['pageTitle','langCurrent','consent-inner','form-success-msg'].includes(id) ||
        id.startsWith('err-') || id.startsWith('ph-') || id === 'sending') return;
    const el = document.getElementById(id);
    if (!el) return;
    const val = t[id];
    if (htmlIds.includes(id)) { el.innerHTML = val; }
    else { el.textContent = val; }
  });

  // Consent text (HTML)
  const ct = document.getElementById('consent-text');
  if (ct) ct.innerHTML = t['consent-inner'];

  // Placeholders
  const phs = {fname:t['ph-name'],fcompany:t['ph-company'],femail:t['ph-email'],fmessage:t['ph-message']};
  Object.entries(phs).forEach(([id,ph]) => { const el=document.getElementById(id); if(el) el.placeholder=ph; });

  renderFaq();
}

function setLang(lang) {
  applyLang(lang);
  closeLangDropdown();
}

/* ---- LANGUAGE DROPDOWN ---- */
function initLangDropdown() {
  const btn = document.getElementById('langDropdownBtn');
  const menu = document.getElementById('langDropdownMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const open = menu.classList.contains('open');
    menu.classList.toggle('open', !open);
    btn.setAttribute('aria-expanded', String(!open));
  });

  document.addEventListener('click', () => closeLangDropdown());
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLangDropdown(); });
}

function closeLangDropdown() {
  const menu = document.getElementById('langDropdownMenu');
  const btn = document.getElementById('langDropdownBtn');
  if (menu) menu.classList.remove('open');
  if (btn) btn.setAttribute('aria-expanded','false');
}

/* ---- FAQ ---- */
function renderFaq() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = FAQS[currentLang].map((f,i) => `
    <div class="faq-item">
      <button class="faq-btn" onclick="toggleFaq(${i})" aria-expanded="false">
        <span class="faq-question">${f.q}</span>
        <span class="faq-icon" id="fi-${i}" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="fa-${i}">
        <div class="faq-answer-inner">${f.a}</div>
      </div>
    </div>
  `).join('');
}

function toggleFaq(i) {
  const ans = document.getElementById('fa-'+i);
  const icon = document.getElementById('fi-'+i);
  const btn = ans?.previousElementSibling;
  const isOpen = ans?.classList.contains('open');
  document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-icon').forEach(ic => ic.classList.remove('open'));
  document.querySelectorAll('.faq-btn').forEach(b => b.setAttribute('aria-expanded','false'));
  if (!isOpen && ans) {
    ans.classList.add('open');
    icon?.classList.add('open');
    btn?.setAttribute('aria-expanded','true');
  }
}

/* ---- COOKIE ---- */
/* ---- COOKIE CONSENT — DSGVO/GDPR ---- */
function enableAnalytics() {
  if (typeof gtag === 'function') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }
  localStorage.setItem('apm_analytics', 'granted');
}

function disableAnalytics() {
  if (typeof gtag === 'function') {
    gtag('consent', 'update', { analytics_storage: 'denied' });
  }
  localStorage.setItem('apm_analytics', 'denied');
}

function acceptAll() {
  localStorage.setItem('apm_cookies', 'accepted');
  localStorage.setItem('apm_analytics', 'granted');
  enableAnalytics();
  hideCookieBanner();
}

function acceptSelected() {
  const analyticsOn = document.getElementById('analytics-toggle')?.checked;
  localStorage.setItem('apm_cookies', 'accepted');
  if (analyticsOn) { enableAnalytics(); } else { disableAnalytics(); }
  hideCookieBanner();
}

function declineCookies() {
  localStorage.setItem('apm_cookies', 'declined');
  disableAnalytics();
  hideCookieBanner();
}

function acceptCookies() { acceptAll(); }

function hideCookieBanner() {
  const b = document.getElementById('cookie-banner');
  if (b) { b.classList.remove('visible'); setTimeout(() => { b.style.display = 'none'; }, 400); }
}

function reopenCookieBanner() {
  const b = document.getElementById('cookie-banner');
  if (b) { b.style.display = ''; setTimeout(() => b.classList.add('visible'), 50); }
}

function initCookieBanner() {
  const status = localStorage.getItem('apm_cookies');
  // Restore previous analytics consent
  const analyticsStatus = localStorage.getItem('apm_analytics');
  if (analyticsStatus === 'granted') { enableAnalytics(); }
  // Show banner if no decision yet
  if (!status) {
    const b = document.getElementById('cookie-banner');
    if (b) setTimeout(() => b.classList.add('visible'), 1200);
  }
}

/* ---- NAV SCROLL ---- */
function initNav() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>60),{passive:true});
}

/* ---- MOBILE MENU ---- */
function closeMobile() {
  document.getElementById('mobileMenu')?.classList.remove('open');
  const t = document.getElementById('mobileToggle');
  if (t) { t.classList.remove('active'); t.setAttribute('aria-expanded','false'); }
  document.body.style.overflow = '';
}
function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle||!menu) return;
  toggle.addEventListener('click',()=>{
    const open = menu.classList.contains('open');
    if (open) { closeMobile(); } else {
      menu.classList.add('open');
      toggle.classList.add('active');
      toggle.setAttribute('aria-expanded','true');
      document.body.style.overflow = 'hidden';
    }
  });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeMobile(); });
}

/* ---- CONTACT FORM ---- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  function showErr(f,m){const e=document.getElementById(f+'-error');if(e){e.textContent=m;e.classList.add('visible');}const i=document.getElementById('f'+f);if(i)i.style.borderColor='#fc8181';}
  function clearErr(f){const e=document.getElementById(f+'-error');if(e){e.textContent='';e.classList.remove('visible');}const i=document.getElementById('f'+f);if(i)i.style.borderColor='';}
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const t=T[currentLang];
    let valid=true;
    ['name','email','phone','message','consent'].forEach(f=>clearErr(f));
    const name=document.getElementById('fname');
    const email=document.getElementById('femail');
    const msg=document.getElementById('fmessage');
    const consent=document.getElementById('fconsent');
    if(!name?.value.trim()){showErr('name',t['err-name']);valid=false;}
    const phone=document.getElementById('fphone');
    if(!phone?.value.trim()){showErr('phone',t['err-phone']);valid=false;}
    if(!email?.value.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){showErr('email',t['err-email']);valid=false;}
    if(!msg?.value.trim()){showErr('message',t['err-message']);valid=false;}
    if(!consent?.checked){showErr('consent',t['err-consent']);valid=false;}
    if(!valid)return;
    const btn=document.getElementById('submit-btn');
    const success=document.getElementById('form-success');
    const errMsg=document.getElementById('form-error-msg');
    btn.disabled=true; btn.textContent=t['sending'];
    if(success)success.style.display='none';
    if(errMsg)errMsg.style.display='none';
    try{
      const res=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
      if(res.ok){form.reset();if(success){success.textContent=t['form-success-msg'];success.style.display='block';}}
      else{if(errMsg)errMsg.style.display='block';}
    }catch{if(errMsg)errMsg.style.display='block';}
    finally{btn.disabled=false;btn.textContent=T[currentLang]['submit-btn'];}
  });
}

/* ---- SCROLL REVEAL ---- */
function initReveal() {
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});
  },{threshold:0.1,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

/* ---- SMOOTH SCROLL (accounts for fixed nav height) ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const target=document.querySelector(a.getAttribute('href'));
      if(target){e.preventDefault();window.scrollTo({top:target.getBoundingClientRect().top+window.scrollY-72,behavior:'smooth'});}
    });
  });
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded',()=>{
  const saved = localStorage.getItem('apm_lang');
  if (saved && saved !== 'de') { applyLang(saved); } else { renderFaq(); }
  initCookieBanner();
  initNav();
  initMobileMenu();
  initLangDropdown();
  initContactForm();
  initReveal();
  initSmoothScroll();
});
