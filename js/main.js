/* ============================================================
   APM Agency — main.js v3
   ID-based translation — content always visible on load
============================================================ */

let currentLang = localStorage.getItem('apm_lang') || 'de';

/* ---- ALL TRANSLATIONS ---- */
const T = {
  de: {
    /* META */
    pageTitle: 'APM Agency | Marketing. Strategie. Wachstum.',
    /* COOKIE */
    'ck-title': 'Wir verwenden Cookies',
    'ck-desc': 'Diese Website verwendet Cookies für die bestmögliche Erfahrung. Mehr in unserer Datenschutzerklärung.',
    'ck-accept': 'Alle akzeptieren',
    'ck-decline': 'Nur notwendige',
    /* NAV */
    'nav-work': 'Work',
    'nav-services': 'Leistungen',
    'nav-pricing': 'Preise',
    'nav-about': 'Über uns',
    'nav-faq': 'FAQ',
    'nav-legal': 'Impressum',
    'nav-cta': 'Kontakt aufnehmen',
    'mob-work': 'Work',
    'mob-services': 'Leistungen',
    'mob-pricing': 'Preise',
    'mob-about': 'Über uns',
    'mob-faq': 'FAQ',
    'mob-legal': 'Impressum',
    'mob-cta': 'Kontakt aufnehmen',
    /* HERO */
    'hero-eyebrow': 'APM Agency — ESTD 2026',
    'hero-headline': 'Eine Full-Service-Agentur für <em>Recruiting</em>, <em>Paid Media</em>, <em>Employer Branding</em>, <em>Content</em> und <em>Strategie</em>.',
    'hero-sub': 'Wir helfen kleinen und mittleren Unternehmen dabei, ihre Sichtbarkeit zu steigern, Kunden zu gewinnen und qualifizierte Mitarbeiter zu rekrutieren. Transparente Preise. Messbare Ergebnisse. Keine versteckten Kosten.',
    'hero-cta': 'Unsere Leistungen entdecken',
    /* WORK */
    'work-eyebrow': 'Unsere Projekte',
    'work-title': 'Ergebnisse, die',
    'work-title-em': 'für sich sprechen.',
    'work-cta': 'Projekt starten',
    'wc1-tag': 'Employer Branding · Gesundheitswesen',
    'wc1-title': 'Recruiting-Kampagne für wachsendes KMU',
    'wc1-desc': 'Vollständiger Recruiting-Funnel von der Zielgruppenanalyse bis zum aktiven Kampagnenmanagement mit qualifizierten Kandidaten.',
    'wc2-tag': 'Paid Media · Lokales Unternehmen',
    'wc2-title': 'Meta Ads Lead-Generierung',
    'wc2-desc': 'Präzisionskampagne mit qualifizierten Leads zu einem Preis, der die Kalkulation schlüssig macht.',
    'wc3-tag': 'Social Media · Einzelhandel',
    'wc3-title': 'Markenaufbau und Wachstum',
    'wc3-desc': 'Konsistente Content-Strategie, die eine engagierte Community von null aufgebaut hat.',
    /* INDUSTRIES */
    'ind-label': 'Branchen, die wir betreuen',
    'ind-1': 'Gesundheitswesen', 'ind-2': 'Handwerk und Industrie',
    'ind-3': 'Tech und Start-ups', 'ind-4': 'Einzelhandel und Gastronomie',
    'ind-5': 'Pflege und Soziales', 'ind-6': 'KMU und Mittelstand',
    'ind-7': 'Lokale Unternehmen', 'ind-8': 'Consumer Brands',
    /* SERVICES */
    'svc-eyebrow': 'Unser Ansatz',
    'svc-tag1': 'Datengetrieben.',
    'svc-tag2': 'Kreativ geführt.',
    'svc-tag3': 'Ergebnisorientiert.',
    's1-name': 'Recruitment Marketing',
    's1-desc': 'Von der Zielgruppenanalyse bis zur aktiven Recruiting-Kampagne bringen wir die richtigen Talente zur richtigen Zeit zu Ihnen. Mit individuellem Funnel, kontinuierlicher Optimierung und transparentem Reporting machen wir Recruiting zu einem planbaren Prozess.',
    's1-link': 'Kampagne starten',
    's2-name': 'Employer Branding',
    's2-desc': 'Wir machen Ihr Unternehmen zur ersten Wahl für qualifizierte Bewerber. Durch gezielte Positionierung, authentische Inhalte und strategische Kampagnen, die nachhaltig wirken. Ihre Arbeitgebermarke ist Ihr stärkstes Recruiting-Instrument und wir bauen sie für die Zukunft.',
    's2-link': 'Marke aufbauen',
    's3-name': 'Paid Media',
    's3-desc': 'Präzisionskampagnen auf Meta, Instagram, TikTok und Google mit maximal optimiertem Budget. Werbebudget wird immer zum Selbstkostenpreis ohne Aufschlag weitergeleitet, damit Sie genau wissen, wohin Ihr Geld fließt.',
    's3-link': 'Kampagne starten',
    's4-name': 'Video und Fotoproduktion',
    's4-desc': 'Professionelle Employer-Branding-Videos und hochwertige Fotoinhalte inklusive Konzeption, Drehtag und Nachbearbeitung. Anreise und Unterkunft sind im Paketpreis enthalten, weil Komplexität keine versteckten Kosten mit sich bringen sollte.',
    's4-link': 'Drehtag planen',
    's5-name': 'Social Media Management',
    's5-desc': 'Konsistente Content-Planung, Texterstellung, Grafikdesign und Veröffentlichung auf Ihren Kanälen. Von drei Beiträgen pro Monat für eine professionelle Präsenz bis zu sechs oder mehr für den Aufbau einer engagierten Community. Klarer Umfang, klare Leistungen, klare Ergebnisse.',
    's5-link': 'Präsenz aufbauen',
    's6-name': 'BAFA-geförderte Beratung',
    's6-desc': 'Kleine und mittlere Unternehmen in Deutschland können bis zu 50 Prozent der Beratungskosten staatlich gefördert bekommen. Wir begleiten Sie vollständig durch den Antragsprozess ohne zusätzliche Kosten.',
    's6-link': 'Förderung prüfen',
    /* PRICING */
    'price-eyebrow': 'Transparente Preise',
    'price-title': 'Klare Pakete.',
    'price-title-em': 'Keine Überraschungen.',
    'price-sub': 'Alle Preise sind Nettopreise und beinhalten kein Werbebudget. Werbebudget für Meta, Instagram oder Google Ads wird immer separat und ohne Aufschlag zum Selbstkostenpreis berechnet.',
    'p1-tag': 'Starter', 'p1-desc': 'Für Unternehmen, die ihre erste professionelle Online-Präsenz aufbauen möchten.',
    'p1-f1': 'Grundlegendes Social Media Management', 'p1-f2': 'Monatlicher Content-Plan',
    'p1-f3': '3 Beiträge pro Monat', 'p1-f4': 'Kurzes monatliches Reporting', 'p1-f5': '4 bis 5 Stunden pro Monat', 'p1-cta': 'Jetzt starten',
    'p2-badge': 'Beliebtestes Paket', 'p2-tag': 'Growth',
    'p2-desc': 'Für Unternehmen, die regelmäßig Inhalte veröffentlichen und strukturiert kommunizieren möchten.',
    'p2-f1': 'Social Media Management', 'p2-f2': 'Monatlicher Content-Plan',
    'p2-f3': '6 Beiträge und 1 Premium-Beitrag', 'p2-f4': 'Monatliches Reporting',
    'p2-f5': '1 Strategie-Call pro Monat', 'p2-f6': 'WhatsApp und E-Mail-Support', 'p2-f7': '8 bis 10 Stunden pro Monat', 'p2-cta': 'Jetzt starten',
    'p3-tag': 'Campaign', 'p3-desc': 'Für Unternehmen, die Recruiting-Kampagnen, Lead-Generierung oder Werbekampagnen durchführen möchten.',
    'p3-f1': 'Zielgruppenanalyse', 'p3-f2': 'Kampagnenkonzept und Creatives',
    'p3-f3': 'Meta Ads Setup und Management', 'p3-f4': 'Lead und Kandidaten-Weiterleitung',
    'p3-f5': 'Monatliches Reporting und Strategie-Call', 'p3-f6': 'Erweiterter Support', 'p3-f7': '13 bis 15 Stunden pro Monat', 'p3-cta': 'Jetzt starten',
    'price-note': 'Werbebudget für Meta, Instagram oder Google Ads wird immer separat und ohne Aufschlag berechnet. APM agency verdient nie am Werbebudget unserer Kunden.',
    /* STATS */
    'st1': 'Ab pro Monat', 'st2': 'BAFA-Förderung möglich', 'st3': 'Antwortzeit garantiert', 'st4': 'Aufschlag auf Werbebudget',
    /* ABOUT */
    'about-eyebrow': 'Über APM Agency',
    'about-headline': 'Gebaut für Unternehmen, die <em>nicht zu viel für echte Ergebnisse bezahlen wollen.</em>',
    'about-body': 'APM agency wurde 2026 gegründet, um die Lücke zwischen teuren Agenturen und Unternehmen zu schließen, die professionelles Marketing brauchen. Wir sind bewusst schlank aufgestellt, transparent in unseren Prinzipien und konsequent auf messbaren Mehrwert für jeden Kunden ausgerichtet.',
    'about-cta': 'Zusammenarbeiten',
    'ab1': 'Transparente Preise, die offen auf der Website stehen',
    'ab2': 'Werbebudget wird immer ohne Aufschlag weitergeleitet',
    'ab3': 'Fester Leistungsumfang, damit Sie immer wissen, was Sie bezahlen',
    'ab4': 'Monatliches Reporting, damit Sie den Überblick behalten',
    'ab5': 'BAFA-Beratung mit bis zu 50 Prozent staatlicher Förderung',
    'ab6': '24-Stunden-Antwortzeit an Werktagen garantiert',
    /* PROCESS */
    'proc-eyebrow': 'So arbeiten wir',
    'proc-title': 'Vom ersten Gespräch',
    'proc-title-em': 'zu messbaren Ergebnissen.',
    'pr1-t': 'Erstgespräch', 'pr1-d': 'Ein kostenloser 30-minütiger Strategie-Call ohne Druck. Ein ehrliches Gespräch über Ihre Ziele und ob APM agency der richtige Partner für Sie ist.',
    'pr2-t': 'Onboarding', 'pr2-d': 'Gemeinsam legen wir Ziele, Zielgruppen, Kanäle, Tonalität und nächste Schritte fest. Von Anfang an klar, damit es später keine Überraschungen gibt.',
    'pr3-t': 'Konzeption und Erstellung', 'pr3-d': 'Sieben Tage für Kampagnenkonzept, kreative Entwicklung und Aufbau. Sie prüfen und genehmigen, bevor etwas live geht. Eine Korrekturschleife ist in jedem Paket enthalten.',
    'pr4-t': 'Launch und Management', 'pr4-d': 'Aktives Kampagnenmanagement mit kontinuierlichem Monitoring, datenbasierter Optimierung und Budgetkontrolle. Wir kümmern uns um alles.',
    'pr5-t': 'Reporting', 'pr5-d': 'Monatliche Reporting-Gespräche über KPIs, Kampagnenleistung und nächste Schritte in verständlicher Sprache. Kein Fachjargon.',
    'pr6-t': 'Wachstum', 'pr6-d': 'Wir skalieren, was funktioniert, und verbessern, was nicht funktioniert. Unser Ziel ist eine Partnerschaft, die langfristig Mehrwert schafft.',
    /* TESTIMONIALS */
    'test-eyebrow': 'Kundenstimmen', 'test-title': 'Was unsere Kunden sagen.',
    't1-text': 'APM agency war die erste Agentur, die uns wirklich erklärt hat, was sie tut und warum. Das Reporting war klar, die Ergebnisse waren real und wir wussten jederzeit genau, wohin jeder Euro unseres Budgets geflossen ist.',
    't1-role': 'Geschäftsführer · Gesundheitsgruppe',
    't2-text': 'Wir hatten vor APM zwei andere Agenturen ausprobiert. Der Unterschied war die Transparenz. Keine versteckten Kosten, keine vagen Versprechen, nur ein klarer Plan und ein Team, das ihn konsequent umgesetzt hat.',
    't2-role': 'Inhaber · Handwerksbetrieb',
    't3-text': 'Die BAFA-Beratung allein hat uns erheblich Geld gespart. APM hat uns durch den gesamten Antragsprozess begleitet und gleichzeitig eine Recruiting-Strategie geliefert, die wirklich für unser wachsendes Team funktioniert hat.',
    't3-role': 'HR-Managerin · Regionales KMU',
    /* FAQ TITLE */
    'faq-title': 'Häufig gestellte Fragen',
    /* CONTACT */
    'con-eyebrow': 'Kontakt',
    'con-title': 'Lassen Sie uns gemeinsam',
    'con-title-em': 'wachsen.',
    'con-sub': 'Kein Druck, keine Verpflichtung. Nur ein ehrliches Gespräch über Ihre Ziele und ob APM agency der richtige Partner für Sie ist.',
    'ci1-l': 'E-Mail', 'ci2-l': 'Antwortzeit', 'ci2-v': 'Innerhalb von 24 Stunden an Werktagen',
    'ci3-l': 'Erstgespräch', 'ci3-v': 'Kostenloser 30-minütiger Strategie-Call',
    'lbl-name': 'Name', 'lbl-company': 'Unternehmen', 'lbl-email': 'E-Mail Adresse',
    'lbl-service': 'Gewünschtes Paket', 'lbl-message': 'Ihre Nachricht',
    'sel-default': 'Bitte wählen', 'sel-starter': 'APM Starter (199 EUR/Monat)',
    'sel-growth': 'APM Growth (399 EUR/Monat)', 'sel-campaign': 'APM Campaign (649 EUR/Monat)',
    'sel-bafa': 'BAFA-geförderte Beratung', 'sel-custom': 'Individuelles Angebot',
    'submit-btn': 'Nachricht senden',
    'form-success': 'Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    'consent-text-inner': 'Ich habe die <a href="datenschutz.html" target="_blank">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.',
    /* FOOTER */
    'ft-tagline': 'Marketing Agency · ESTD 2026',
    'ft-desc': 'Transparente und ergebnisorientierte Marketing-Agentur für Unternehmen, die wachsen wollen.',
    'ft-col1': 'Leistungen', 'ft-col2': 'Unternehmen', 'ft-col3': 'Rechtliches',
    'ftl-1': 'Recruitment Marketing', 'ftl-2': 'Employer Branding', 'ftl-3': 'Paid Media',
    'ftl-4': 'Social Media', 'ftl-5': 'BAFA Beratung', 'ftl-6': 'Video Produktion',
    'ftc-1': 'Über APM', 'ftc-2': 'Projekte', 'ftc-3': 'Preise', 'ftc-5': 'Kontakt',
    'ftleg-1': 'Impressum', 'ftleg-2': 'Datenschutzerklärung', 'ftleg-3': 'AGB',
    'ft-copy': '© 2026 APM Marketing Agency. Alle Rechte vorbehalten.',
    'fb-imp': 'Impressum', 'fb-dsg': 'Datenschutz', 'fb-agb': 'AGB',
    /* FORM PLACEHOLDERS */
    'ph-name': 'Ihr Name', 'ph-company': 'Ihr Unternehmen',
    'ph-email': 'ihre@email.de', 'ph-message': 'Erzählen Sie uns von Ihrem Projekt und Ihren Zielen...',
    /* FORM ERRORS */
    'err-name': 'Bitte geben Sie Ihren Namen ein.',
    'err-email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    'err-message': 'Bitte schreiben Sie uns eine kurze Nachricht.',
    'err-consent': 'Bitte stimmen Sie der Datenschutzerklärung zu.',
    'sending': 'Wird gesendet...',
    'err-form': 'Etwas ist schiefgelaufen. Bitte schreiben Sie uns direkt an <a href="mailto:contact@apmagenta.com">contact@apmagenta.com</a>.',
  },

  en: {
    pageTitle: 'APM Agency | Marketing. Strategy. Growth.',
    'ck-title': 'We use cookies',
    'ck-desc': 'This website uses cookies to give you the best experience. See our privacy policy for details.',
    'ck-accept': 'Accept all', 'ck-decline': 'Essential only',
    'nav-work': 'Work', 'nav-services': 'Services', 'nav-pricing': 'Pricing',
    'nav-about': 'About', 'nav-faq': 'FAQ', 'nav-legal': 'Legal', 'nav-cta': 'Work With Us',
    'mob-work': 'Work', 'mob-services': 'Services', 'mob-pricing': 'Pricing',
    'mob-about': 'About', 'mob-faq': 'FAQ', 'mob-legal': 'Legal', 'mob-cta': 'Work With Us',
    'hero-eyebrow': 'APM Agency — ESTD 2026',
    'hero-headline': 'A full service agency focused on <em>Recruitment</em>, <em>Paid Media</em>, <em>Employer Branding</em>, <em>Content</em> and <em>Strategy</em>.',
    'hero-sub': 'We help small and medium-sized businesses grow their visibility, attract customers and recruit talent. Transparent pricing. Measurable results. No hidden costs.',
    'hero-cta': 'Explore Our Services',
    'work-eyebrow': 'Our Work', 'work-title': 'Results That', 'work-title-em': 'Speak for Themselves.',
    'work-cta': 'Start Your Project',
    'wc1-tag': 'Employer Branding · Healthcare', 'wc1-title': 'Recruitment Campaign for Growing SME',
    'wc1-desc': 'Full recruitment funnel from target group analysis to active campaign management delivering qualified candidates at scale.',
    'wc2-tag': 'Paid Media · Local Business', 'wc2-title': 'Meta Ads Lead Generation',
    'wc2-desc': 'Precision campaign delivering qualified leads at a cost that made the math work.',
    'wc3-tag': 'Social Media · Retail', 'wc3-title': 'Brand Presence and Growth',
    'wc3-desc': 'Consistent content strategy building an engaged community from zero to thousands of followers.',
    'ind-label': 'Industries We Serve',
    'ind-1': 'Healthcare', 'ind-2': 'Trades and Industry', 'ind-3': 'Tech and Start-ups',
    'ind-4': 'Retail and Hospitality', 'ind-5': 'Care and Social Services',
    'ind-6': 'SMEs and Mid-Market', 'ind-7': 'Local Businesses', 'ind-8': 'Consumer Brands',
    'svc-eyebrow': 'Our Process', 'svc-tag1': 'Data driven.', 'svc-tag2': 'Creatively led.', 'svc-tag3': 'Results focused.',
    's1-name': 'Recruitment Marketing',
    's1-desc': 'From target group analysis to active recruiting campaigns we bring the right talent to you at the right time. With an individual funnel, continuous optimization and transparent reporting we make hiring a predictable process instead of a guessing game.',
    's1-link': 'Start a Campaign',
    's2-name': 'Employer Branding',
    's2-desc': 'We make your company the first choice for qualified applicants through targeted positioning, authentic content and strategic campaigns that create lasting impact. Your employer brand is your most powerful recruiting tool and we build it to last.',
    's2-link': 'Build Your Brand',
    's3-name': 'Paid Media',
    's3-desc': 'Precision campaigns on Meta, Instagram, TikTok and Google with every budget optimized for maximum impact. Advertising spend is always passed through at cost with zero markup so you always know exactly where your money goes.',
    's3-link': 'Launch a Campaign',
    's4-name': 'Video and Photo Production',
    's4-desc': 'Professional employer branding videos and high-quality photo content including concept development, the shoot day and full post-production. Travel and accommodation are included in the package price because complexity should not come with hidden extras.',
    's4-link': 'Plan a Shoot',
    's5-name': 'Social Media Management',
    's5-desc': 'Consistent content planning, copywriting, graphic design and publishing across your channels. From three posts per month for a professional presence to six or more for building an engaged audience. Clear scope, clear deliverables, clear results.',
    's5-link': 'Grow Your Presence',
    's6-name': 'BAFA-Funded Consulting',
    's6-desc': 'Small and medium-sized businesses in Germany can receive up to 50 percent state funding for strategic consulting. We offer structured consulting engagements that qualify for this funding and guide you through the full application process at no extra charge.',
    's6-link': 'Check Your Eligibility',
    'price-eyebrow': 'Transparent Pricing', 'price-title': 'Clear Packages.', 'price-title-em': 'No Surprises.',
    'price-sub': 'All prices are net and exclude advertising spend which is always charged separately and passed through at cost with zero markup.',
    'p1-tag': 'Starter', 'p1-desc': 'For businesses building their first professional online presence.',
    'p1-f1': 'Basic social media management', 'p1-f2': 'Monthly content plan',
    'p1-f3': '3 posts per month', 'p1-f4': 'Short monthly reporting', 'p1-f5': '4 to 5 hours per month', 'p1-cta': 'Get Started',
    'p2-badge': 'Most Popular', 'p2-tag': 'Growth',
    'p2-desc': 'For businesses that want consistent content and structured communication.',
    'p2-f1': 'Social media management', 'p2-f2': 'Monthly content plan',
    'p2-f3': '6 posts and 1 premium post', 'p2-f4': 'Monthly reporting',
    'p2-f5': '1 strategy call per month', 'p2-f6': 'WhatsApp and email support', 'p2-f7': '8 to 10 hours per month', 'p2-cta': 'Get Started',
    'p3-tag': 'Campaign', 'p3-desc': 'For businesses running recruiting, lead generation or promotional campaigns.',
    'p3-f1': 'Target group analysis', 'p3-f2': 'Campaign concept and creatives',
    'p3-f3': 'Meta Ads setup and management', 'p3-f4': 'Lead and candidate forwarding',
    'p3-f5': 'Monthly reporting and strategy call', 'p3-f6': 'Extended support', 'p3-f7': '13 to 15 hours per month', 'p3-cta': 'Get Started',
    'price-note': 'Ad spend for Meta, Instagram or Google Ads is always charged separately and passed through at cost. APM agency never takes a percentage of your advertising budget.',
    'st1': 'Starting from per month', 'st2': 'BAFA State Funding Available',
    'st3': 'Response Time Guaranteed', 'st4': 'Ad Spend Markup',
    'about-eyebrow': 'About APM Agency',
    'about-headline': 'Built for businesses that <em>refuse to overpay for real results.</em>',
    'about-body': 'APM agency was founded in 2026 to fill the gap between expensive agencies and businesses that still need professional marketing. We are lean by design, transparent by principle and relentless about delivering measurable value for every client we work with.',
    'about-cta': 'Work With Us',
    'ab1': 'Transparent pricing published openly with no hidden costs',
    'ab2': 'Advertising spend always passed through at cost with zero markup',
    'ab3': 'Fixed package scopes so you always know what you are paying for',
    'ab4': 'Monthly reporting so you always know how your investment is performing',
    'ab5': 'BAFA consulting with up to 50 percent state funding',
    'ab6': '24-hour response time on all business days guaranteed',
    'proc-eyebrow': 'How We Work', 'proc-title': 'From first conversation', 'proc-title-em': 'to measurable results.',
    'pr1-t': 'Discovery Call', 'pr1-d': 'A free 30-minute strategy call with no pressure. Just an honest conversation about your goals, your challenges and whether APM agency is the right fit.',
    'pr2-t': 'Onboarding', 'pr2-d': 'We define goals, target groups, channels, tone of voice and next steps together. Clear from day one so there are no surprises later in the process.',
    'pr3-t': 'Concept and Creation', 'pr3-d': 'Seven days of campaign conception, creative development and build. You review and approve before anything goes live. One revision round is included in every package.',
    'pr4-t': 'Launch and Management', 'pr4-d': 'Active campaign management with continuous monitoring, data-driven optimization and budget control. We handle everything so you can focus on your business.',
    'pr5-t': 'Reporting', 'pr5-d': 'Monthly reporting calls covering KPIs, campaign performance and next steps in plain language. No jargon and no hiding behind numbers that do not matter.',
    'pr6-t': 'Growth', 'pr6-d': 'We scale what works and fix what does not. Our goal is a partnership that delivers compounding value over time not a single campaign that disappears after three months.',
    'test-eyebrow': 'Client Voices', 'test-title': 'What Our Clients Say.',
    't1-text': 'APM agency was the first agency that actually explained what they were doing and why. The reporting was clear, the results were real and we knew exactly where every euro of our budget was going at all times.',
    't1-role': 'Managing Director · Healthcare Group',
    't2-text': 'We had tried two other agencies before APM. The difference was the transparency. No hidden costs, no vague promises, just a clear plan and a team that delivered on it consistently every month.',
    't2-role': 'Owner · Trades Business',
    't3-text': 'The BAFA consulting pathway alone saved us significant money. APM guided us through the entire application process while delivering a recruitment strategy that genuinely worked for our growing team.',
    't3-role': 'HR Manager · Regional SME',
    'faq-title': 'Frequently Asked Questions',
    'con-eyebrow': 'Get In Touch', 'con-title': "Let's grow", 'con-title-em': 'together.',
    'con-sub': 'No pressure, no commitment. Just an honest conversation about your goals and whether APM agency is the right partner for you.',
    'ci1-l': 'Email', 'ci2-l': 'Response Time', 'ci2-v': 'Within 24 hours on business days',
    'ci3-l': 'First Call', 'ci3-v': 'Free 30-minute strategy session',
    'lbl-name': 'Name', 'lbl-company': 'Company', 'lbl-email': 'Email Address',
    'lbl-service': 'Package of Interest', 'lbl-message': 'Your Message',
    'sel-default': 'Please select', 'sel-starter': 'APM Starter (199 EUR/month)',
    'sel-growth': 'APM Growth (399 EUR/month)', 'sel-campaign': 'APM Campaign (649 EUR/month)',
    'sel-bafa': 'BAFA-Funded Consulting', 'sel-custom': 'Custom Offer',
    'submit-btn': 'Send Message',
    'form-success': 'Thank you! We will be in touch within 24 hours.',
    'consent-text-inner': 'I have read the <a href="datenschutz.html" target="_blank">Privacy Policy</a> and agree to the processing of my data.',
    'ft-tagline': 'Marketing Agency · ESTD 2026',
    'ft-desc': 'Transparent and results-driven marketing agency for businesses that want to grow.',
    'ft-col1': 'Services', 'ft-col2': 'Company', 'ft-col3': 'Legal',
    'ftl-1': 'Recruitment Marketing', 'ftl-2': 'Employer Branding', 'ftl-3': 'Paid Media',
    'ftl-4': 'Social Media', 'ftl-5': 'BAFA Consulting', 'ftl-6': 'Video Production',
    'ftc-1': 'About APM', 'ftc-2': 'Our Work', 'ftc-3': 'Pricing', 'ftc-5': 'Contact',
    'ftleg-1': 'Legal Notice', 'ftleg-2': 'Privacy Policy', 'ftleg-3': 'Terms',
    'ft-copy': '© 2026 APM Marketing Agency. All rights reserved.',
    'fb-imp': 'Legal', 'fb-dsg': 'Privacy', 'fb-agb': 'Terms',
    'ph-name': 'Your name', 'ph-company': 'Your company',
    'ph-email': 'your@email.com', 'ph-message': 'Tell us about your project and your goals...',
    'err-name': 'Please enter your name.',
    'err-email': 'Please enter a valid email address.',
    'err-message': 'Please write us a short message.',
    'err-consent': 'Please agree to the privacy policy.',
    'sending': 'Sending...',
    'err-form': 'Something went wrong. Please email us directly at <a href="mailto:contact@apmagenta.com">contact@apmagenta.com</a>.',
  }
};

/* ---- FAQ DATA ---- */
const FAQS = {
  de: [
    { q: "Was macht APM agency?", a: "APM agency ist eine Full-Service-Marketing-Agentur mit Spezialisierung auf Recruitment Marketing, Employer Branding, Paid Media, Social Media Management, Video und Fotoproduktion sowie BAFA-geförderte Beratung. Wir betreuen kleine und mittlere Unternehmen in Deutschland, die professionelles Marketing benötigen ohne die Preise einer klassischen Agentur zahlen zu wollen." },
    { q: "Was unterscheidet APM agency von anderen Agenturen?", a: "Wir veröffentlichen unsere Preise offen auf der Website, trennen unsere Servicegebühren vom Werbebudget und arbeiten mit festen Leistungsumfängen, damit Kunden immer genau wissen, was sie bezahlen. Werbebudget wird ohne Aufschlag weitergeleitet und monatliches Reporting ist in jedem Paket enthalten." },
    { q: "Was kosten eure Pakete?", a: "Unsere Pakete beginnen bei 199 EUR pro Monat für APM Starter, 399 EUR pro Monat für APM Growth und 649 EUR pro Monat für APM Campaign. Alle Preise sind Nettopreise und beinhalten kein Werbebudget, das immer separat und ohne Aufschlag berechnet wird." },
    { q: "Was ist die BAFA-Förderung und erfülle ich die Voraussetzungen?", a: "Das BAFA-Programm ermöglicht kleinen und mittleren Unternehmen in Deutschland eine staatliche Förderung von bis zu 50 Prozent der Beratungskosten. Voraussetzungen sind weniger als 250 Mitarbeiter, ein Jahresumsatz unter 50 Millionen EUR und mindestens zwei Jahre Unternehmensgeschichte. Wir begleiten Sie durch den gesamten Antragsprozess ohne zusätzliche Kosten." },
    { q: "Garantieren Sie bestimmte Ergebnisse?", a: "Wir arbeiten sorgfältig und datenbasiert und optimieren kontinuierlich jede Kampagne. Eine Garantie für bestimmte Zahlen bei Leads, Bewerbungen oder Umsätzen können wir jedoch nicht geben, da Ergebnisse von Faktoren wie Markt, Budget, Angebot und Zielgruppe abhängen." },
    { q: "Wie starte ich eine Zusammenarbeit?", a: "Füllen Sie das Kontaktformular auf dieser Seite aus oder schreiben Sie uns direkt an contact@apmagenta.com. Wir antworten innerhalb von 24 Stunden an Werktagen. Der erste 30-minütige Strategie-Call ist völlig kostenlos und unverbindlich." }
  ],
  en: [
    { q: "What does APM agency do?", a: "APM agency is a full-service marketing agency specialising in recruitment marketing, employer branding, paid media campaigns, social media management, video and photo production and BAFA-funded strategic consulting. We serve small and medium-sized businesses across Germany that need professional marketing without traditional agency prices." },
    { q: "How is APM agency different from other agencies?", a: "We publish our prices openly, separate our service fees from advertising spend and operate on fixed package scopes so clients always know exactly what they are paying for. We pass advertising spend through at cost with zero markup and include monthly reporting in every package." },
    { q: "What do your packages cost?", a: "Our packages start at 199 EUR per month for APM Starter, 399 EUR per month for APM Growth and 649 EUR per month for APM Campaign. All prices are net and exclude advertising spend which is always charged separately and passed through at cost." },
    { q: "What is the BAFA funding and does my business qualify?", a: "The BAFA program allows small and medium-sized businesses in Germany to receive up to 50 percent state funding for strategic consulting costs. You need fewer than 250 employees, a turnover under 50 million EUR and at least two years of trading history. We guide you through the full application process at no extra charge." },
    { q: "Do you guarantee results?", a: "We work carefully and data-driven and optimize continuously throughout every campaign. However we do not guarantee specific numbers of leads, applicants or sales because results depend on factors including the market, your budget, your offer and your target group." },
    { q: "How do I get started?", a: "Fill in the contact form on this page or email us directly at contact@apmagenta.com. We respond within 24 hours on all business days. Your first 30-minute strategy call is completely free with no commitment required." }
  ]
};

/* ---- APPLY LANGUAGE ---- */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('apm_lang', lang);
  document.documentElement.lang = lang;
  const t = T[lang];

  // Page title
  document.title = t.pageTitle;

  // Update lang toggle button
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'de' ? 'EN' : 'DE';

  // Update all elements by ID
  Object.keys(t).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const val = t[id];
    if (id === 'hero-headline' || id === 'about-headline') {
      el.innerHTML = val;
    } else if (id === 'consent-text-inner') {
      el.innerHTML = val;
    } else if (id === 'form-success') {
      el.textContent = val;
    } else if (id === 'err-form') {
      // skip, handled in form
    } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });

  // Form placeholders
  const fields = { fname: t['ph-name'], fcompany: t['ph-company'], femail: t['ph-email'], fmessage: t['ph-message'] };
  Object.entries(fields).forEach(([id, ph]) => {
    const el = document.getElementById(id);
    if (el) el.placeholder = ph;
  });

  // Re-render FAQ
  renderFaq();
}

function toggleLang() {
  applyLang(currentLang === 'de' ? 'en' : 'de');
}

/* ---- FAQ ---- */
function renderFaq() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  const faqs = FAQS[currentLang];
  list.innerHTML = faqs.map((f, i) => `
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

/* ---- COOKIE BANNER ---- */
function acceptCookies() { localStorage.setItem('apm_cookies', 'accepted'); hideCookieBanner(); }
function declineCookies() { localStorage.setItem('apm_cookies', 'declined'); hideCookieBanner(); }
function hideCookieBanner() {
  const b = document.getElementById('cookie-banner');
  if (b) { b.classList.remove('visible'); setTimeout(() => b.remove(), 400); }
}
function initCookieBanner() {
  if (!localStorage.getItem('apm_cookies')) {
    const b = document.getElementById('cookie-banner');
    if (b) setTimeout(() => b.classList.add('visible'), 1400);
  }
}

/* ---- NAV ---- */
function initNav() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60), { passive: true });
}

/* ---- MOBILE MENU ---- */
function closeMobile() {
  const m = document.getElementById('mobileMenu');
  const t = document.getElementById('mobileToggle');
  if (m) m.classList.remove('open');
  if (t) t.classList.remove('active');
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

/* ---- CONTACT FORM ---- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  function showErr(field, msg) {
    const el = document.getElementById(field + '-error');
    if (el) { el.textContent = msg; el.classList.add('visible'); }
    const inp = document.getElementById('f' + field);
    if (inp) inp.style.borderColor = '#e07070';
  }
  function clearErr(field) {
    const el = document.getElementById(field + '-error');
    if (el) { el.textContent = ''; el.classList.remove('visible'); }
    const inp = document.getElementById('f' + field);
    if (inp) inp.style.borderColor = '';
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const t = T[currentLang];
    let valid = true;
    ['name', 'email', 'message', 'consent'].forEach(f => clearErr(f));

    const name = document.getElementById('fname');
    const email = document.getElementById('femail');
    const msg = document.getElementById('fmessage');
    const consent = document.getElementById('fconsent');

    if (!name || !name.value.trim()) { showErr('name', t['err-name']); valid = false; }
    if (!email || !email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { showErr('email', t['err-email']); valid = false; }
    if (!msg || !msg.value.trim()) { showErr('message', t['err-message']); valid = false; }
    if (!consent || !consent.checked) { showErr('consent', t['err-consent']); valid = false; }
    if (!valid) return;

    const btn = document.getElementById('submit-btn');
    const success = document.getElementById('form-success');
    const errMsg = document.getElementById('form-error-msg');
    btn.disabled = true;
    btn.textContent = t['sending'];
    if (success) success.style.display = 'none';
    if (errMsg) errMsg.style.display = 'none';

    try {
      const action = form.getAttribute('action');
      if (action && !action.includes('YOUR_FORM_ID')) {
        const res = await fetch(action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        if (res.ok) { form.reset(); if (success) { success.textContent = t['form-success']; success.style.display = 'block'; } }
        else { if (errMsg) { errMsg.innerHTML = t['err-form']; errMsg.style.display = 'block'; } }
      } else {
        await new Promise(r => setTimeout(r, 800));
        form.reset();
        if (success) { success.textContent = t['form-success']; success.style.display = 'block'; }
      }
    } catch {
      if (errMsg) { errMsg.innerHTML = t['err-form']; errMsg.style.display = 'block'; }
    } finally {
      btn.disabled = false;
      btn.textContent = T[currentLang]['submit-btn'];
    }
  });
}

/* ---- SCROLL REVEAL ---- */
function initReveal() {
  const els = document.querySelectorAll('.work-card, .service-row, .pricing-card, .process-card, .testimonial-card, .stat-item');
  els.forEach(el => el.classList.add('reveal'));
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
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved or default language (content is already in DE by default in HTML)
  const saved = localStorage.getItem('apm_lang');
  if (saved && saved !== 'de') {
    applyLang(saved);
  } else {
    // Just render FAQ in DE
    renderFaq();
    // Update lang toggle to show EN
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = 'EN';
  }
  initCookieBanner();
  initNav();
  initMobileMenu();
  initContactForm();
  initReveal();
  initSmoothScroll();
});
