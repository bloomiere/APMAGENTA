/* ============================================================
   APM Agenta. main.js
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
    'nav-bafa': 'BAFA',
    'nav-contact': 'Kontakt',
    'mob-about': 'Über uns',
    'mob-services': 'Leistungen',
    'mob-framework': 'Framework',
    'mob-industries': 'Branchen',
    'mob-faq': 'FAQ',
    'mob-bafa': 'BAFA',
    'mob-contact': 'Kontakt',
    /* HERO */
    'hero-headline': 'APM Agenta entwickelt datenbasierte<br><em>Marketing-Strategien</em><br>die messbare Ergebnisse liefern.',
    'hero-sub': 'Wir verbinden analytische Präzision mit kreativer Exzellenz. Für kleine und mittlere Unternehmen die professionelles Marketing verdienen. transparent, skalierbar und ohne versteckte Kosten.',
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
    'nav-bafa': 'BAFA',
    'nav-contact': 'Contact',
    'mob-about': 'About',
    'mob-services': 'Services',
    'mob-framework': 'Framework',
    'mob-industries': 'Industries',
    'mob-faq': 'FAQ',
    'mob-bafa': 'BAFA',
    'mob-contact': 'Contact',
    /* HERO */
    'hero-headline': 'APM Agenta develops data-driven<br><em>marketing strategies</em><br>that deliver measurable results.',
    'hero-sub': 'We combine analytical precision with creative excellence. For small and medium-sized businesses that deserve professional marketing. transparent, scalable and without hidden costs.',
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

/* ---- SUB-PAGE TRANSLATIONS ---- */
const SUB_PAGE_T = {
  about: {
    de: {
      'page-eyebrow': 'Wer wir sind',
      'page-title': 'Hinter APM Agenta <em>stehen echte Menschen.</em>',
      'page-sub': 'Wir glauben dass kleine Unternehmen die gleiche Qualität im Marketing verdienen wie große. Deshalb haben wir APM Agenta gegründet.'
    },
    en: {
      'page-eyebrow': 'Who We Are',
      'page-title': 'Behind APM Agenta <em>stand real people.</em>',
      'page-sub': 'We believe small businesses deserve the same quality of marketing as large ones. That is why we founded APM Agenta.'
    }
  },
  services: {
    de: {
      'page-eyebrow': 'Was wir anbieten',
      'page-title': 'Unsere <em>Leistungen.</em>',
      'page-sub': 'Sechs spezialisierte Dienstleistungen für messbare Ergebnisse. Transparent. Skalierbar. Ohne versteckte Kosten.'
    },
    en: {
      'page-eyebrow': 'What We Offer',
      'page-title': 'Our <em>Services.</em>',
      'page-sub': 'Six specialised services for measurable results. Transparent. Scalable. No hidden costs.'
    }
  },
  industries: {
    de: {
      'page-eyebrow': 'Unsere Zielgruppen',
      'page-title': 'Branchen die wir <em>betreuen.</em>',
      'page-sub': 'Spezialisierte Strategien für jede Branche. Wir verstehen die Herausforderungen Ihres Marktes.'
    },
    en: {
      'page-eyebrow': 'Our Target Markets',
      'page-title': 'Industries we <em>serve.</em>',
      'page-sub': 'Specialised strategies for every industry. We understand the challenges of your market.'
    }
  }
};

function applySubPageLang(lang) {
  const page = document.body.getAttribute('data-page');
  if (!page || !SUB_PAGE_T[page]) return;
  const t = SUB_PAGE_T[page][lang];
  Object.entries(t).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  });
  // Also update page title
  const titles = {
    about:      { de: 'Über uns | APM Agenta',      en: 'About | APM Agenta' },
    services:   { de: 'Leistungen | APM Agenta',    en: 'Services | APM Agenta' },
    industries: { de: 'Branchen | APM Agenta',      en: 'Industries | APM Agenta' }
  };
  if (titles[page]) document.title = titles[page][lang];
}

/* Patch applyLang to also run sub-page translations */
const _originalApplyLang = applyLang;
applyLang = function(lang) {
  _originalApplyLang(lang);
  applySubPageLang(lang);
};

/* ---- EXTENDED SUB-PAGE CONTENT TRANSLATIONS ---- */
const SUB_CONTENT_T = {
  about: {
    de: {
      'meta-desc': 'Über APM Agenta. Transparente Performance-Marketing-Agentur für KMU in Deutschland.',
      'about-mission-eyebrow': 'Unsere Mission',
      'about-mission-title': 'Professionelles Marketing <em>für alle zugänglich machen.</em>',
      'about-mission-p1': 'APM Agenta wurde gegründet weil wir eine klare Lücke im Markt gesehen haben: Teure Agenturen auf der einen Seite, überforderte Unternehmer auf der anderen. Wir schließen diese Lücke mit transparenten Paketen, fairen Preisen und echter Expertise.',
      'about-mission-p2': 'Kein versteckter Aufschlag auf Werbebudgets. Keine leeren Versprechen. Keine vagen Berichte. Nur klare Leistungen, klare Preise und messbare Ergebnisse.',
      'about-values-eyebrow': 'Unsere Werte',
      'about-values-title': 'Was uns <em>antreibt.</em>',
      'val1-title': 'Transparenz', 'val1-desc': 'Wir veröffentlichen unsere Preise offen. Werbebudget wird ohne Aufschlag weitergeleitet. Sie wissen immer wo Ihr Geld hingeht.',
      'val2-title': 'Verantwortung', 'val2-desc': 'Jedes Paket enthält Reporting. Jede Kampagne wird gemessen. Wir sagen Ihnen was funktioniert und was nicht, in klarer Sprache.',
      'val3-title': 'Zugänglichkeit', 'val3-desc': 'Professionelles Marketing sollte nicht nur für Unternehmen mit großem Budget zugänglich sein. Deshalb beginnen unsere Pakete bei 199 EUR.',
      'val4-title': 'Ergebnisse', 'val4-desc': 'Wir interessieren uns mehr dafür was wirklich funktioniert als dafür was im Pitch-Deck beeindruckend klingt. Daten statt Bauchgefühl.',
      'about-team-eyebrow': 'Unser Team',
      'about-team-title': 'Die Menschen <em>hinter APM Agenta.</em>',
      'about-team-sub': 'Wir sind ein junges, engagiertes Team mit echter Expertise in Performance Marketing, Employer Branding und digitalem Wachstum. Keine anonyme Agentur, sondern echte Ansprechpartner die sich für Ihre Ergebnisse verantwortlich fühlen.',
      'about-cta-title': 'Lernen Sie uns <em>persönlich kennen.</em>',
      'about-cta-btn': 'Kostenloses Erstgespräch buchen',
    },
    en: {
      'meta-desc': 'About APM Agenta. Transparent performance marketing agency for SMEs in Germany.',
      'about-mission-eyebrow': 'Our Mission',
      'about-mission-title': 'Making professional marketing <em>accessible to everyone.</em>',
      'about-mission-p1': 'APM Agenta was founded because we saw a clear gap in the market: expensive agencies on one side, overwhelmed business owners on the other. We close this gap with transparent packages, fair pricing and real expertise.',
      'about-mission-p2': 'No hidden markup on advertising budgets. No empty promises. No vague reports. Just clear services, clear prices and measurable results.',
      'about-values-eyebrow': 'Our Values',
      'about-values-title': 'What <em>drives us.</em>',
      'val1-title': 'Transparency', 'val1-desc': 'We publish our prices openly. Ad spend is passed through without markup. You always know where your money goes.',
      'val2-title': 'Accountability', 'val2-desc': 'Every package includes reporting. Every campaign is measured. We tell you what works and what does not, in plain language.',
      'val3-title': 'Accessibility', 'val3-desc': 'Professional marketing should not only be available to businesses with large budgets. That is why our packages start at 199 EUR.',
      'val4-title': 'Results', 'val4-desc': 'We care more about what actually works than what sounds impressive in a pitch deck. Data over gut feeling.',
      'about-team-eyebrow': 'Our Team',
      'about-team-title': 'The people <em>behind APM Agenta.</em>',
      'about-team-sub': 'We are a young, dedicated team with real expertise in performance marketing, employer branding and digital growth. Not an anonymous agency, but real people who feel responsible for your results.',
      'about-cta-title': 'Get to <em>know us personally.</em>',
      'about-cta-btn': 'Book a Free Initial Consultation',
    }
  },
  services: {
    de: {
      'meta-desc': 'APM Agenta Leistungen: Recruitment Marketing, Employer Branding, Paid Media, Social Media Management und BAFA-Beratung.',
      's1-name': 'Recruitment Marketing',
      's2-name': 'Employer Branding',
      's3-name': 'Paid Media',
      's4-name': 'Video und Fotoproduktion',
      's5-name': 'Social Media Management',
      's6-name': 'BAFA-geförderte Beratung',
      'svc-cta-title': 'Bereit zu starten? <em>Gespräch buchen.</em>',
      'svc-cta-btn': 'Kostenloses Strategie-Gespräch buchen',
    },
    en: {
      'meta-desc': 'APM Agenta Services: Recruitment Marketing, Employer Branding, Paid Media, Social Media Management and BAFA Consulting.',
      's1-name': 'Recruitment Marketing',
      's2-name': 'Employer Branding',
      's3-name': 'Paid Media',
      's4-name': 'Video and Photo Production',
      's5-name': 'Social Media Management',
      's6-name': 'BAFA-Funded Consulting',
      'svc-cta-title': 'Ready to get started? <em>Book a call.</em>',
      'svc-cta-btn': 'Book a Free Strategy Call',
    }
  },
  industries: {
    de: {
      'meta-desc': 'APM Agenta betreut Unternehmen in Gesundheitswesen, Handwerk, Tech, Einzelhandel, Pflege und KMU in Deutschland.',
      'ind1-title': 'Gesundheitswesen',
      'ind2-title': 'Handwerk und Industrie',
      'ind3-title': 'Tech und Start-ups',
      'ind4-title': 'Einzelhandel und Gastronomie',
      'ind5-title': 'Pflege und Soziales',
      'ind6-title': 'KMU und Mittelstand',
      'ind-cta-title': 'Ihre Branche dabei? <em>Sprechen wir.</em>',
      'ind-cta-btn': 'Kostenloses Strategie-Gespräch buchen',
    },
    en: {
      'meta-desc': 'APM Agenta serves businesses in healthcare, trades, tech, retail, care and SMEs across Germany.',
      'ind1-title': 'Healthcare',
      'ind2-title': 'Trades and Industry',
      'ind3-title': 'Tech and Start-ups',
      'ind4-title': 'Retail and Hospitality',
      'ind5-title': 'Care and Social Services',
      'ind6-title': 'SMEs and Mid-Market',
      'ind-cta-title': 'Your industry included? <em>Let\'s talk.</em>',
      'ind-cta-btn': 'Book a Free Strategy Call',
    }
  }
};

/* Override applySubPageLang to also apply content translations */
applySubPageLang = function(lang) {
  const page = document.body.getAttribute('data-page');
  if (!page) return;

  // Hero text
  if (SUB_PAGE_T[page]) {
    const t = SUB_PAGE_T[page][lang];
    Object.entries(t).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = val;
    });
  }

  // Content text
  if (SUB_CONTENT_T[page]) {
    const t = SUB_CONTENT_T[page][lang];
    Object.entries(t).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (id === 'meta-desc') {
        el.setAttribute('content', val);
      } else {
        el.innerHTML = val;
      }
    });
  }

  // Page title
  const titles = {
    about:      { de: 'Über uns | APM Agenta',      en: 'About | APM Agenta' },
    services:   { de: 'Leistungen | APM Agenta',    en: 'Services | APM Agenta' },
    industries: { de: 'Branchen | APM Agenta',      en: 'Industries | APM Agenta' }
  };
  if (titles[page]) document.title = titles[page][lang];
};

/* ---- FULL CONTENT TRANSLATIONS PATCH ---- */
const FULL_CONTENT_T = {
  services: {
    de: {
      's1-desc': 'Von der Zielgruppenanalyse bis zur aktiven Recruiting-Kampagne bringen wir die richtigen Talente zur richtigen Zeit zu Ihnen. Mit individuellem Funnel, kontinuierlicher Optimierung und transparentem Reporting machen wir Recruiting zu einem planbaren Prozess.',
      's2-desc': 'Wir machen Ihr Unternehmen zur ersten Wahl für qualifizierte Bewerber. Durch gezielte Positionierung, authentische Inhalte und strategische Kampagnen die nachhaltig wirken.',
      's3-desc': 'Präzisionskampagnen auf Meta, Instagram, TikTok und Google mit maximal optimiertem Budget. Werbebudget wird immer zum Selbstkostenpreis ohne Aufschlag weitergeleitet.',
      's4-desc': 'Professionelle Employer-Branding-Videos und hochwertige Fotoinhalte inklusive Konzeption, Drehtag und Nachbearbeitung. Anreise und Unterkunft im Paketpreis enthalten.',
      's5-desc': 'Konsistente Content-Planung, Texterstellung, Grafikdesign und Veröffentlichung auf Ihren Kanälen. Klarer Umfang, klare Leistungen, klare Ergebnisse.',
      's6-desc': 'Kleine und mittlere Unternehmen in Deutschland können bis zu 50 Prozent der Beratungskosten staatlich gefördert bekommen. Wir begleiten Sie vollständig durch den Antragsprozess.',
      'sl1': 'Kampagne starten', 'sl2': 'Marke aufbauen', 'sl3': 'Kampagne starten',
      'sl4': 'Drehtag planen', 'sl5': 'Präsenz aufbauen', 'sl6': 'Förderung prüfen',
    },
    en: {
      's1-desc': 'From target group analysis to active recruiting campaigns we bring the right talent to you at the right time. With individual funnels, continuous optimisation and transparent reporting we make hiring a predictable process.',
      's2-desc': 'We make your company the first choice for qualified applicants through targeted positioning, authentic content and strategic campaigns that create lasting impact.',
      's3-desc': 'Precision campaigns on Meta, Instagram, TikTok and Google with fully optimised budgets. Advertising spend is always passed through at cost with zero markup.',
      's4-desc': 'Professional employer branding videos and high-quality photo content including concept development, the shoot day and full post-production. Travel and accommodation included in the package price.',
      's5-desc': 'Consistent content planning, copywriting, graphic design and publishing across your channels. Clear scope, clear deliverables, clear results.',
      's6-desc': 'Small and medium-sized businesses in Germany can receive up to 50 percent state funding on consulting costs. We guide you completely through the application process.',
      'sl1': 'Start a Campaign', 'sl2': 'Build Your Brand', 'sl3': 'Start a Campaign',
      'sl4': 'Plan a Shoot', 'sl5': 'Grow Your Presence', 'sl6': 'Check Your Eligibility',
    }
  },
  industries: {
    de: {
      'ind1-sub': 'Kliniken, Praxen, MVZ und medizinische Einrichtungen',
      'ind2-sub': 'Handwerksbetriebe, Produktionsunternehmen, technische Dienstleister',
      'ind3-sub': 'Software-Unternehmen, SaaS-Produkte, digitale Plattformen',
      'ind4-sub': 'Lokale Geschäfte, Restaurants, Hotellerie, E-Commerce',
      'ind5-sub': 'Pflegeheime, ambulante Dienste, soziale Einrichtungen',
      'ind6-sub': 'Etablierte Unternehmen mit 10 bis 250 Mitarbeitern',
      'ind1-desc': 'Wir bauen automatisierte Patienten-Gewinnungs-Pipelines für moderne Kliniken und Arztpraxen. Von gezielten Meta-Kampagnen bis zur vollständigen Recruiting-Strategie für medizinisches Fachpersonal.',
      'ind2-desc': 'Fachkräftemangel ist eine der größten Herausforderungen im Handwerk. Wir entwickeln gezielte Recruiting-Kampagnen die qualifizierte Bewerber direkt ansprechen.',
      'ind3-desc': 'Performance Marketing für schnell wachsende Tech-Unternehmen. Von User-Acquisition-Kampagnen bis hin zu B2B-Lead-Generierung auf LinkedIn und Google.',
      'ind4-desc': 'Lokale Sichtbarkeit und Kundenbindung in einem wettbewerbsintensiven Markt. Kampagnen die Laufkundschaft generieren, Online-Bestellungen steigern und Stammkunden aufbauen.',
      'ind5-desc': 'Fachkräftegewinnung für Pflegeberufe ist eine der dringlichsten Aufgaben unserer Zeit. Einfühlsame Recruiting-Kampagnen die die richtigen Menschen ansprechen.',
      'ind6-desc': 'Ganzheitliche Marketing-Strategie für etablierte Unternehmen die professionelles Marketing ohne Agentur-Preisaufschläge benötigen. Von der ersten Analyse bis zur langfristigen Begleitung.',
    },
    en: {
      'ind1-sub': 'Clinics, practices, medical centres and healthcare institutions',
      'ind2-sub': 'Trade businesses, manufacturing companies, technical service providers',
      'ind3-sub': 'Software companies, SaaS products, digital platforms',
      'ind4-sub': 'Local shops, restaurants, hospitality, e-commerce',
      'ind5-sub': 'Care homes, outpatient services, social institutions',
      'ind6-sub': 'Established businesses with 10 to 250 employees',
      'ind1-desc': 'We build automated patient acquisition pipelines for modern clinics and medical practices. From targeted Meta campaigns to complete recruiting strategies for medical professionals.',
      'ind2-desc': 'Skills shortages are one of the greatest challenges in the trades sector. We develop targeted recruiting campaigns that reach qualified applicants directly.',
      'ind3-desc': 'Performance marketing for fast-growing tech companies. From user acquisition campaigns to B2B lead generation on LinkedIn and Google.',
      'ind4-desc': 'Local visibility and customer retention in a highly competitive market. Campaigns that generate foot traffic, increase online orders and build loyal customer bases.',
      'ind5-desc': 'Recruiting specialist care workers is one of the most urgent challenges of our time. Empathetic recruiting campaigns that reach the right people.',
      'ind6-desc': 'Comprehensive marketing strategy for established businesses that need professional marketing without agency price markups. From initial analysis to long-term partnership.',
    }
  }
};

/* Final patch. extend applySubPageLang to include full content */
const _prevApplySubPage = applySubPageLang;
applySubPageLang = function(lang) {
  _prevApplySubPage(lang);
  const page = document.body.getAttribute('data-page');
  if (!page || !FULL_CONTENT_T[page]) return;
  const t = FULL_CONTENT_T[page][lang];
  Object.entries(t).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });
};
