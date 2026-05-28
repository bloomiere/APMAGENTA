/* ============================================================
   APM Agenta — main.js
   Auto language detection + full DE/EN translation
============================================================ */

/* ---- DETECT BROWSER LANGUAGE ---- */
function detectLang() {
  const saved = localStorage.getItem('apm_lang');
  if (saved) return saved;
  const browser = (navigator.language || navigator.userLanguage || 'de').toLowerCase();
  return browser.startsWith('de') ? 'de' : 'en';
}

let currentLang = detectLang();

/* ---- TRANSLATIONS ---- */
const T = {
  de: {
    pageTitle: 'APM Agenta | Marketing. Strategie. Wachstum.',
    langCurrent: 'DE',
    htmlLang: 'de',
    /* COOKIE */
    'ck-title': 'Datenschutzeinstellungen',
    'ck-desc': 'Wir verwenden Cookies um Ihnen die beste Nutzererfahrung zu bieten. Analytische Cookies helfen uns zu verstehen wie Besucher unsere Website nutzen. Mehr in unserer <a href="datenschutz.html">Datenschutzerklärung</a>.',
    'ck-necessary-label': 'Notwendige Cookies',
    'ck-necessary-desc': 'Für die Grundfunktionen der Website erforderlich.',
    'ck-always-active': 'Immer aktiv',
    'ck-analytics-label': 'Analyse-Cookies',
    'ck-analytics-desc': 'Helfen uns zu verstehen wie Besucher die Website nutzen (Google Analytics).',
    'ck-accept': 'Auswahl speichern',
    'ck-accept-all': 'Alle akzeptieren',
    'ck-decline': 'Nur notwendige',
    /* NAV */
    'nav-about': 'Über uns',
    'nav-services': 'Leistungen',
    'nav-framework': 'Framework',
    'nav-industries': 'Branchen',
    'nav-faq': 'FAQ',
    'nav-contact': 'Kontakt',
    'mob-about': 'Über uns',
    'mob-services': 'Leistungen',
    'mob-framework': 'Framework',
    'mob-industries': 'Branchen',
    'mob-faq': 'FAQ',
    'mob-contact': 'Kontakt',
    /* HERO */
    'hero-headline': 'APM Agenta entwickelt datenbasierte<br><em>Marketing-Strategien</em><br>die messbare Ergebnisse liefern.',
    'hero-sub': 'Wir verbinden analytische Präzision mit kreativer Exzellenz. Für kleine und mittlere Unternehmen die professionelles Marketing verdienen — transparent, skalierbar und ohne versteckte Kosten.',
    'hero-book': 'Strategiegespräch vereinbaren',
    'hero-services': 'Leistungen entdecken',
    'tr1': 'Ab pro Monat', 'tr2': 'Aufschlag auf Werbebudget',
    'tr3': 'BAFA-Förderung möglich', 'tr4': 'Antwortzeit',
    /* WHO */
    'who-eyebrow': 'Über APM Agenta',
    'who-title': 'Analytische Präzision. <em>Kreative Exzellenz.</em>',
    'who-body': 'APM Agenta wurde gegründet um die Lücke zwischen leistungsstarkem Marketing und zugänglichen Preisen zu schließen. Wir entwickeln individuelle Strategien auf Basis fundierter Marktanalysen und setzen diese mit messbarem Erfolg um.',
    'who-body2': 'Unser Ansatz basiert auf Transparenz: Werbebudgets werden ohne Aufschlag weitergeleitet, Leistungsumfänge sind klar definiert und jede Kampagne wird anhand konkreter Kennzahlen bewertet.',
    'who-link': 'Mehr über uns',
    'wc1-t': 'Datenbasierte Strategien',
    'wc1-d': 'Jede Kampagne basiert auf fundierten Marktanalysen und wird anhand messbarer Kennzahlen kontinuierlich optimiert.',
    'wc2-t': 'Vollständige Kostentransparenz',
    'wc2-d': 'Servicegebühren und Werbebudgets sind klar getrennt. Kein Aufschlag auf Drittanbieterkosten. Keine versteckten Positionen.',
    'wc3-t': 'Skalierbare Lösungen',
    'wc3-d': 'Unsere Leistungspakete wachsen mit Ihrem Unternehmen. Von der ersten Kampagne bis zur vollständigen Marketinginfrastruktur.',
    /* INDUSTRIES */
    'ind-eyebrow': 'Branchen',
    'ind-title': 'Spezialisierte Lösungen für <em>Ihren Markt.</em>',
    'ind-link': 'Alle Branchen',
    'ic1': 'Gesundheitswesen', 'ic1d': 'Patientengewinnung und Fachkräfterekrutierung für medizinische Einrichtungen',
    'ic2': 'Handwerk und Industrie', 'ic2d': 'Strategische Mitarbeitergewinnung für produzierende Unternehmen',
    'ic3': 'Tech und Start-ups', 'ic3d': 'Performance Marketing und skalierbare Wachstumsstrategien',
    'ic4': 'Einzelhandel und Gastronomie', 'ic4d': 'Lokale Marktpräsenz und nachhaltige Kundenbindung',
    'ic5': 'Pflege und Soziales', 'ic5d': 'Gezielte Fachkräftegewinnung für Pflegeeinrichtungen',
    'ic6': 'KMU und Mittelstand', 'ic6d': 'Ganzheitliche Marketingstrategien für etablierte Unternehmen',
    /* FRAMEWORK */
    'fw-eyebrow': 'Unser Framework',
    'fw-title': 'Strukturiert. Messbar. <em>Wirksam.</em>',
    'fw-sub': 'Unser Prozess folgt einem klar definierten Framework das für jeden Kunden individuell angepasst wird und jederzeit vollständige Transparenz über Fortschritt und Ergebnisse gewährleistet.',
    'fw1t': 'Analyse und Strategie', 'fw1d': 'Fundierte Analyse Ihrer Zielgruppe, des Wettbewerbsumfelds und Ihrer aktuellen Marktposition. Daraus entwickeln wir eine maßgeschneiderte Strategie mit klaren Zielvorgaben.',
    'fw2t': 'Pipeline-Entwicklung', 'fw2d': 'Konzeption und Aufbau automatisierter Marketing-Funnels mit individuellem Tracking und definierten Conversion-Zielen.',
    'fw3t': 'Creative-Produktion', 'fw3d': 'Entwicklung zielgruppenspezifischer Werbemittel auf Basis datengestützter Erkenntnisse. Werbetexte, Grafiken und Videocontent werden konsequent auf Conversion optimiert.',
    'fw4t': 'Launch und Optimierung', 'fw4d': 'Kampagnenstart mit täglichem Performance-Monitoring. Kontinuierliche datenbasierte Anpassungen zur Maximierung des Return on Ad Spend.',
    'fw5t': 'Reporting und Analyse', 'fw5d': 'Monatliche Reportinggespräche mit klarer Darstellung aller relevanten KPIs. Vollständige Transparenz über Kampagnenleistung und Budgetverwendung.',
    'fw6t': 'Skalierung', 'fw6d': 'Systematische Skalierung erfolgreicher Maßnahmen. Aufbau einer langfristigen Marketinginfrastruktur die mit Ihrem Unternehmen wächst.',
    /* PRICING */
    'price-eyebrow': 'Leistungspakete',
    'price-title': 'Transparente Investition.',
    'price-title-em': 'Kalkulierbarer Erfolg.',
    'price-sub': 'Alle Pakete beinhalten klar definierte Leistungsumfänge ohne versteckte Kosten. Werbebudgets werden stets ohne Aufschlag weitergeleitet und sind nicht im Paketpreis enthalten.',
    'p2-badge': 'Empfohlen',
    'p1-desc': 'Der strukturierte Einstieg in professionelles Performance Marketing mit messbarer Wirkung.',
    'p2-desc': 'Die umfassende Wachstumslösung für Unternehmen die ihre Marktposition systematisch ausbauen wollen.',
    'p3-desc': 'Die vollständige Marketinglösung für maximale Marktpräsenz, Neukundengewinnung und Arbeitgeberpositionierung.',
    'p1-cta': 'Paket anfragen', 'p2-cta': 'Paket anfragen', 'p3-cta': 'Paket anfragen',
    'price-note': 'Werbebudgets für Meta, Google Ads und weitere Plattformen werden stets ohne Aufschlag weitergeleitet. APM Agenta erzielt keine Erträge aus den Werbebudgets unserer Kunden.',
    /* FAQ */
    'faq-title': 'Häufig gestellte Fragen',
    /* CONTACT */
    'con-eyebrow': 'Kontakt',
    'con-title': 'Gemeinsam zum',
    'con-title-em': 'nächsten Wachstumsschritt.',
    'con-sub': 'Wir analysieren Ihre aktuelle Situation und entwickeln gemeinsam eine Strategie die zu Ihren Unternehmenszielen passt. Unverbindlich und kostenfrei.',
    'ci1-l': 'E-Mail', 'ci2-l': 'Antwortzeit',
    'ci2-v': 'Innerhalb von 24 Stunden an Werktagen',
    'ci3-l': 'Erstgespräch', 'ci3-v': 'Kostenlos und unverbindlich',
    'con-book': 'Strategiegespräch buchen',
    'lbl-name': 'Name', 'lbl-company': 'Unternehmen',
    'lbl-email': 'E-Mail', 'lbl-phone': 'Telefon',
    'lbl-service': 'Gewünschtes Paket', 'lbl-message': 'Nachricht',
    'submit-btn': 'Anfrage senden',
    'sel-default': 'Bitte wählen',
    'sel-cat': 'APM Scale Catalyst (199 EUR/Mo)',
    'sel-vel': 'Market Velocity Engine (399 EUR/Mo)',
    'sel-dom': 'Market Domination Suite (649 EUR/Mo)',
    'sel-bafa': 'BAFA-geförderte Beratung',
    'sel-cust': 'Individuelles Angebot',
    'consent-inner': 'Ich habe die <a href="datenschutz.html" target="_blank">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.',
    'form-success-msg': 'Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    'form-error-inner': 'Ein Fehler ist aufgetreten. Bitte schreiben Sie uns direkt an <a href="mailto:contact@apmagenta.com">contact@apmagenta.com</a>.',
    /* FOOTER */
    'footer-desc': 'Datenbasierte Marketing-Strategien für Unternehmen die professionelles Marketing verdienen.',
    'ft-col1': 'Leistungen', 'ft-col2': 'Unternehmen', 'ft-col3': 'Rechtliches',
    'ftl-1': 'Recruitment Marketing', 'ftl-2': 'Employer Branding',
    'ftl-3': 'Paid Media', 'ftl-4': 'Social Media', 'ftl-5': 'BAFA Beratung',
    'ftc-1': 'Über APM Agenta', 'ftc-2': 'Branchen',
    'ftc-3': 'Pakete', 'ftc-4': 'FAQ', 'ftc-5': 'Kontakt',
    'ftleg-1': 'Impressum', 'ftleg-2': 'Datenschutzerklärung', 'ftleg-3': 'AGB',
    'ft-cookies': 'Cookie-Einstellungen',
    'ft-copy': '© 2026 APM AGENTA. Alle Rechte vorbehalten.',
    'fb-imp': 'Impressum', 'fb-dsg': 'Datenschutz', 'fb-agb': 'AGB',
    /* FORM */
    'ph-name': 'Ihr Name', 'ph-company': 'Ihr Unternehmen',
    'ph-email': 'ihre@email.de', 'ph-phone': '+49 ...',
    'ph-message': 'Beschreiben Sie kurz Ihr Unternehmen und Ihre Ziele...',
    'err-name': 'Bitte geben Sie Ihren Namen ein.',
    'err-email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    'err-phone': 'Bitte geben Sie Ihre Telefonnummer ein.',
    'err-message': 'Bitte schreiben Sie uns eine kurze Nachricht.',
    'err-consent': 'Bitte stimmen Sie der Datenschutzerklärung zu.',
    'sending': 'Wird gesendet...',
  },
  en: {
    pageTitle: 'APM Agenta | Marketing. Strategy. Growth.',
    langCurrent: 'EN',
    htmlLang: 'en',
    /* COOKIE */
    'ck-title': 'Privacy Settings',
    'ck-desc': 'We use cookies to provide you with the best experience and to improve our website. Analytical cookies help us understand how visitors use our site. Learn more in our <a href="datenschutz.html">Privacy Policy</a>.',
    'ck-necessary-label': 'Necessary Cookies',
    'ck-necessary-desc': 'Required for the basic functions of the website.',
    'ck-always-active': 'Always active',
    'ck-analytics-label': 'Analytics Cookies',
    'ck-analytics-desc': 'Help us understand how visitors use the website (Google Analytics).',
    'ck-accept': 'Save selection',
    'ck-accept-all': 'Accept all',
    'ck-decline': 'Necessary only',
    /* NAV */
    'nav-about': 'About',
    'nav-services': 'Services',
    'nav-framework': 'Framework',
    'nav-industries': 'Industries',
    'nav-faq': 'FAQ',
    'nav-contact': 'Contact',
    'mob-about': 'About',
    'mob-services': 'Services',
    'mob-framework': 'Framework',
    'mob-industries': 'Industries',
    'mob-faq': 'FAQ',
    'mob-contact': 'Contact',
    /* HERO */
    'hero-headline': 'APM Agenta develops data-driven<br><em>marketing strategies</em><br>that deliver measurable results.',
    'hero-sub': 'We combine analytical precision with creative excellence. For small and medium-sized businesses that deserve professional marketing — transparent, scalable and without hidden costs.',
    'hero-book': 'Schedule a Strategy Call',
    'hero-services': 'Explore Services',
    'tr1': 'Starting per month', 'tr2': 'Ad Spend Markup',
    'tr3': 'BAFA Funding Available', 'tr4': 'Response Time',
    /* WHO */
    'who-eyebrow': 'About APM Agenta',
    'who-title': 'Analytical Precision. <em>Creative Excellence.</em>',
    'who-body': 'APM Agenta was founded to close the gap between high-performance marketing and accessible pricing. We develop individual strategies based on thorough market analysis and implement them with measurable success.',
    'who-body2': 'Our approach is built on transparency: advertising budgets are passed through without markup, service scopes are clearly defined and every campaign is evaluated against concrete performance metrics.',
    'who-link': 'Learn more about us',
    'wc1-t': 'Data-Driven Strategies',
    'wc1-d': 'Every campaign is based on thorough market analysis and continuously optimised against measurable KPIs.',
    'wc2-t': 'Full Cost Transparency',
    'wc2-d': 'Service fees and advertising budgets are clearly separated. No markup on third-party costs. No hidden charges.',
    'wc3-t': 'Scalable Solutions',
    'wc3-d': 'Our service packages grow with your business. From the first campaign to a complete marketing infrastructure.',
    /* INDUSTRIES */
    'ind-eyebrow': 'Industries',
    'ind-title': 'Specialised solutions for <em>your market.</em>',
    'ind-link': 'All Industries',
    'ic1': 'Healthcare', 'ic1d': 'Patient acquisition and specialist recruitment for medical institutions',
    'ic2': 'Trades and Industry', 'ic2d': 'Strategic talent acquisition for manufacturing businesses',
    'ic3': 'Tech and Start-ups', 'ic3d': 'Performance marketing and scalable growth strategies',
    'ic4': 'Retail and Hospitality', 'ic4d': 'Local market presence and sustainable customer retention',
    'ic5': 'Care and Social Services', 'ic5d': 'Targeted specialist recruitment for care facilities',
    'ic6': 'SMEs and Mid-Market', 'ic6d': 'Comprehensive marketing strategies for established businesses',
    /* FRAMEWORK */
    'fw-eyebrow': 'Our Framework',
    'fw-title': 'Structured. Measurable. <em>Effective.</em>',
    'fw-sub': 'Our process follows a clearly defined framework that is individually adapted for each client and ensures full transparency over progress and results at all times.',
    'fw1t': 'Analysis and Strategy', 'fw1d': 'Thorough analysis of your target group, competitive environment and current market position. From this we develop a tailored strategy with clear objectives.',
    'fw2t': 'Pipeline Development', 'fw2d': 'Conception and build of automated marketing funnels with individual tracking and defined conversion goals.',
    'fw3t': 'Creative Production', 'fw3d': 'Development of target group-specific advertising materials based on data-driven insights. Ad copy, graphics and video content are consistently optimised for conversion.',
    'fw4t': 'Launch and Optimisation', 'fw4d': 'Campaign launch with daily performance monitoring. Continuous data-driven adjustments to maximise return on ad spend.',
    'fw5t': 'Reporting and Analysis', 'fw5d': 'Monthly reporting calls with clear presentation of all relevant KPIs. Full transparency over campaign performance and budget allocation.',
    'fw6t': 'Scaling', 'fw6d': 'Systematic scaling of successful measures. Building a long-term marketing infrastructure that grows with your business.',
    /* PRICING */
    'price-eyebrow': 'Service Packages',
    'price-title': 'Transparent Investment.',
    'price-title-em': 'Calculable Success.',
    'price-sub': 'All packages include clearly defined service scopes without hidden costs. Advertising budgets are always passed through without markup and are not included in the package price.',
    'p2-badge': 'Recommended',
    'p1-desc': 'The structured entry into professional performance marketing with measurable impact.',
    'p2-desc': 'The comprehensive growth solution for businesses that want to systematically expand their market position.',
    'p3-desc': 'The complete marketing solution for maximum market presence, customer acquisition and employer positioning.',
    'p1-cta': 'Request Package', 'p2-cta': 'Request Package', 'p3-cta': 'Request Package',
    'price-note': 'Advertising budgets for Meta, Google Ads and other platforms are always passed through without markup. APM Agenta generates no revenue from our clients\' advertising budgets.',
    /* FAQ */
    'faq-title': 'Frequently Asked Questions',
    /* CONTACT */
    'con-eyebrow': 'Contact',
    'con-title': 'Together towards your',
    'con-title-em': 'next growth milestone.',
    'con-sub': 'We analyse your current situation and develop a strategy aligned with your business goals. No commitment required.',
    'ci1-l': 'Email', 'ci2-l': 'Response Time',
    'ci2-v': 'Within 24 hours on business days',
    'ci3-l': 'First Consultation', 'ci3-v': 'Free and non-binding',
    'con-book': 'Schedule a Strategy Call',
    'lbl-name': 'Name', 'lbl-company': 'Company',
    'lbl-email': 'Email', 'lbl-phone': 'Phone',
    'lbl-service': 'Package of Interest', 'lbl-message': 'Message',
    'submit-btn': 'Send Enquiry',
    'sel-default': 'Please select',
    'sel-cat': 'APM Scale Catalyst (199 EUR/mo)',
    'sel-vel': 'Market Velocity Engine (399 EUR/mo)',
    'sel-dom': 'Market Domination Suite (649 EUR/mo)',
    'sel-bafa': 'BAFA-Funded Consulting',
    'sel-cust': 'Custom Offer',
    'consent-inner': 'I have read the <a href="datenschutz.html" target="_blank">Privacy Policy</a> and agree to the processing of my data.',
    'form-success-msg': 'Thank you for your enquiry. We will be in touch within 24 hours.',
    'form-error-inner': 'Something went wrong. Please email us directly at <a href="mailto:contact@apmagenta.com">contact@apmagenta.com</a>.',
    /* FOOTER */
    'footer-desc': 'Data-driven marketing strategies for businesses that deserve professional marketing.',
    'ft-col1': 'Services', 'ft-col2': 'Company', 'ft-col3': 'Legal',
    'ftl-1': 'Recruitment Marketing', 'ftl-2': 'Employer Branding',
    'ftl-3': 'Paid Media', 'ftl-4': 'Social Media', 'ftl-5': 'BAFA Consulting',
    'ftc-1': 'About APM Agenta', 'ftc-2': 'Industries',
    'ftc-3': 'Packages', 'ftc-4': 'FAQ', 'ftc-5': 'Contact',
    'ftleg-1': 'Legal Notice', 'ftleg-2': 'Privacy Policy', 'ftleg-3': 'Terms',
    'ft-cookies': 'Cookie Settings',
    'ft-copy': '© 2026 APM AGENTA. All rights reserved.',
    'fb-imp': 'Legal', 'fb-dsg': 'Privacy', 'fb-agb': 'Terms',
    /* FORM */
    'ph-name': 'Your name', 'ph-company': 'Your company',
    'ph-email': 'your@email.com', 'ph-phone': '+49 ...',
    'ph-message': 'Briefly describe your business and your goals...',
    'err-name': 'Please enter your name.',
    'err-email': 'Please enter a valid email address.',
    'err-phone': 'Please enter your phone number.',
    'err-message': 'Please write us a short message.',
    'err-consent': 'Please agree to the privacy policy.',
    'sending': 'Sending...',
  }
};

/* ---- FAQ DATA ---- */
const FAQS = {
  de: [
    { q: 'Was ist APM Agenta?', a: 'APM Agenta ist eine Performance-Marketing-Agentur für kleine und mittlere Unternehmen in Deutschland. Wir entwickeln datenbasierte Marketing-Strategien und setzen diese mit klaren Leistungsumfängen und transparenten Preisen um.' },
    { q: 'Was unterscheidet APM Agenta von anderen Agenturen?', a: 'Unser Ansatz basiert konsequent auf Transparenz: Werbebudgets werden ohne Aufschlag weitergeleitet, Leistungsumfänge sind klar definiert und jede Kampagne wird anhand messbarer Kennzahlen bewertet. Monatliches Reporting ist in jedem Paket enthalten.' },
    { q: 'Was kosten Ihre Leistungspakete?', a: 'Unsere Pakete beginnen bei 199 EUR pro Monat für den APM Scale Catalyst, 399 EUR für die Market Velocity Engine und 649 EUR für die Market Domination Suite. Alle Preise sind Nettopreise und beinhalten keine Werbebudgets.' },
    { q: 'Was ist die BAFA-Förderung?', a: 'Das BAFA-Förderprogramm ermöglicht kleinen und mittleren Unternehmen in Deutschland einen staatlichen Zuschuss von bis zu 50 Prozent auf strategische Beratungsleistungen. Voraussetzungen sind weniger als 250 Mitarbeiter und mindestens zwei Jahre Unternehmensgeschichte. Wir begleiten Sie vollständig durch den Antragsprozess.' },
    { q: 'Können Sie Ergebnisse garantieren?', a: 'Wir arbeiten mit bewährten Methoden und optimieren jede Kampagne kontinuierlich auf Basis realer Daten. Konkrete Ergebnisgarantien sind aufgrund der Abhängigkeit von Marktbedingungen, Wettbewerb und weiteren externen Faktoren nicht möglich. Was wir garantieren: vollständige Transparenz und konsequente Ergebnisorientierung.' },
    { q: 'Wie beginne ich eine Zusammenarbeit?', a: 'Vereinbaren Sie ein kostenloses Erstgespräch über den Kalender-Link im Kontaktbereich oder senden Sie uns eine Anfrage über das Kontaktformular. Wir melden uns innerhalb von 24 Stunden an Werktagen bei Ihnen.' }
  ],
  en: [
    { q: 'What is APM Agenta?', a: 'APM Agenta is a performance marketing agency for small and medium-sized businesses in Germany. We develop data-driven marketing strategies and implement them with clearly defined service scopes and transparent pricing.' },
    { q: 'What makes APM Agenta different?', a: 'Our approach is consistently built on transparency: advertising budgets are passed through without markup, service scopes are clearly defined and every campaign is evaluated against measurable KPIs. Monthly reporting is included in every package.' },
    { q: 'What do your packages cost?', a: 'Our packages start at 199 EUR per month for the APM Scale Catalyst, 399 EUR for the Market Velocity Engine and 649 EUR for the Market Domination Suite. All prices are net and do not include advertising budgets.' },
    { q: 'What is BAFA funding?', a: 'The BAFA programme allows small and medium-sized businesses in Germany to receive a government subsidy of up to 50 percent on strategic consulting services. Requirements include fewer than 250 employees and at least two years of trading history. We guide you through the entire application process.' },
    { q: 'Can you guarantee results?', a: 'We apply proven methodologies and continuously optimise every campaign based on real data. Concrete result guarantees are not possible due to dependency on market conditions, competition and other external factors. What we do guarantee: full transparency and consistent focus on performance.' },
    { q: 'How do I start working with you?', a: 'Schedule a free initial consultation via the calendar link in the contact section or send us an enquiry through the contact form. We will respond within 24 hours on business days.' }
  ]
};

/* ---- APPLY LANGUAGE ---- */
const HTML_IDS = ['hero-headline','who-title','who-body','who-body2','ind-title','fw-title','ck-desc','consent-text'];

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('apm_lang', lang);
  const t = T[lang];
  document.documentElement.lang = t.htmlLang;
  document.title = t.pageTitle;

  // Lang toggle display
  const cur = document.getElementById('lang-current');
  if (cur) cur.textContent = t.langCurrent;

  // Dropdown aria-selected
  document.querySelectorAll('.lang-opt').forEach(btn => {
    const isSelected = (lang === 'de' && btn.textContent === 'Deutsch') ||
                       (lang === 'en' && btn.textContent === 'English');
    btn.setAttribute('aria-selected', String(isSelected));
  });

  // Mobile lang buttons
  document.getElementById('mob-lang-de')?.classList.toggle('active', lang === 'de');
  document.getElementById('mob-lang-en')?.classList.toggle('active', lang === 'en');

  // Apply all translations
  Object.keys(t).forEach(id => {
    const skip = ['pageTitle','langCurrent','htmlLang','consent-inner','form-success-msg',
                  'form-error-inner','ck-desc'].concat(
                  Object.keys(t).filter(k => k.startsWith('err-') || k.startsWith('ph-') || k === 'sending'));
    if (skip.includes(id)) return;
    const el = document.getElementById(id);
    if (!el) return;
    if (HTML_IDS.includes(id)) { el.innerHTML = t[id]; }
    else { el.textContent = t[id]; }
  });

  // Cookie desc (HTML)
  const ckDesc = document.getElementById('ck-desc');
  if (ckDesc) ckDesc.innerHTML = t['ck-desc'];

  // Consent text (HTML)
  const ct = document.getElementById('consent-text');
  if (ct) ct.innerHTML = t['consent-inner'];

  // Form error (HTML)
  const fe = document.getElementById('form-error-msg');
  if (fe) fe.innerHTML = t['form-error-inner'];

  // Placeholders
  const phs = {fname:t['ph-name'],fcompany:t['ph-company'],femail:t['ph-email'],fphone:t['ph-phone'],fmessage:t['ph-message']};
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
  document.getElementById('langDropdownMenu')?.classList.remove('open');
  const btn = document.getElementById('langDropdownBtn');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

/* ---- FAQ ---- */
function renderFaq() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = FAQS[currentLang].map((f, i) => `
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
  const ans = document.getElementById('fa-' + i);
  const icon = document.getElementById('fi-' + i);
  const btn = ans?.previousElementSibling;
  const isOpen = ans?.classList.contains('open');
  document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-icon').forEach(ic => ic.classList.remove('open'));
  document.querySelectorAll('.faq-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
  if (!isOpen && ans) {
    ans.classList.add('open');
    icon?.classList.add('open');
    btn?.setAttribute('aria-expanded', 'true');
  }
}

/* ---- COOKIE CONSENT ---- */
function enableAnalytics() {
  if (typeof gtag === 'function') gtag('consent', 'update', { analytics_storage: 'granted' });
  localStorage.setItem('apm_analytics', 'granted');
}
function disableAnalytics() {
  if (typeof gtag === 'function') gtag('consent', 'update', { analytics_storage: 'denied' });
  localStorage.setItem('apm_analytics', 'denied');
}
function acceptAll() {
  localStorage.setItem('apm_cookies', 'accepted');
  enableAnalytics();
  hideCookieBanner();
}
function acceptSelected() {
  const on = document.getElementById('analytics-toggle')?.checked;
  localStorage.setItem('apm_cookies', 'accepted');
  on ? enableAnalytics() : disableAnalytics();
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
  if (localStorage.getItem('apm_analytics') === 'granted') enableAnalytics();
  if (!localStorage.getItem('apm_cookies')) {
    const b = document.getElementById('cookie-banner');
    if (b) setTimeout(() => b.classList.add('visible'), 1200);
  }
}

/* ---- NAV SCROLL ---- */
function initNav() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60), { passive: true });
}

/* ---- MOBILE MENU ---- */
function closeMobile() {
  document.getElementById('mobileMenu')?.classList.remove('open');
  const t = document.getElementById('mobileToggle');
  if (t) { t.classList.remove('active'); t.setAttribute('aria-expanded', 'false'); }
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
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobile(); });
}

/* ---- CONTACT FORM ---- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  function showErr(f, m) {
    const e = document.getElementById(f + '-error');
    if (e) { e.textContent = m; e.classList.add('visible'); }
    const i = document.getElementById('f' + f);
    if (i) i.style.borderColor = '#fc8181';
  }
  function clearErr(f) {
    const e = document.getElementById(f + '-error');
    if (e) { e.textContent = ''; e.classList.remove('visible'); }
    const i = document.getElementById('f' + f);
    if (i) i.style.borderColor = '';
  }
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const t = T[currentLang];
    let valid = true;
    ['name', 'email', 'phone', 'message', 'consent'].forEach(f => clearErr(f));
    const name = document.getElementById('fname');
    const email = document.getElementById('femail');
    const phone = document.getElementById('fphone');
    const msg = document.getElementById('fmessage');
    const consent = document.getElementById('fconsent');
    if (!name?.value.trim()) { showErr('name', t['err-name']); valid = false; }
    if (!email?.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { showErr('email', t['err-email']); valid = false; }
    if (!phone?.value.trim()) { showErr('phone', t['err-phone']); valid = false; }
    if (!msg?.value.trim()) { showErr('message', t['err-message']); valid = false; }
    if (!consent?.checked) { showErr('consent', t['err-consent']); valid = false; }
    if (!valid) return;
    const btn = document.getElementById('submit-btn');
    const success = document.getElementById('form-success');
    const errMsg = document.getElementById('form-error-msg');
    btn.disabled = true;
    btn.textContent = t['sending'];
    if (success) success.style.display = 'none';
    if (errMsg) errMsg.style.display = 'none';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (res.ok) {
        form.reset();
        if (success) { success.textContent = t['form-success-msg']; success.style.display = 'block'; }
      } else {
        if (errMsg) errMsg.style.display = 'block';
      }
    } catch {
      if (errMsg) errMsg.style.display = 'block';
    } finally {
      btn.disabled = false;
      btn.textContent = T[currentLang]['submit-btn'];
    }
  });
}

/* ---- SCROLL REVEAL ---- */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ---- SMOOTH SCROLL ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
      }
    });
  });
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
  initCookieBanner();
  initNav();
  initMobileMenu();
  initLangDropdown();
  initContactForm();
  initReveal();
  initSmoothScroll();
});
