export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Base Styles & Typography adjustments */
        body {
            background-color: #F5F0E8;
            color: #2C2A28;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        ::selection {
            background-color: #C2714F;
            color: #F5F0E8;
        }

        /* Hide scrollbar for gallery but keep functionality */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        /* Micro-interactions */
        .btn-organic {
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .btn-organic:hover {
            transform: scale(1.03) translateY(-2px);
            box-shadow: 0 15px 30px -10px rgba(194, 113, 79, 0.4);
        }
        
        .image-hover-zoom {
            transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .group:hover .image-hover-zoom {
            transform: scale(1.05);
        }

        /* Technical lines */
        .tech-line {
            position: relative;
        }
        .tech-line::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: rgba(44, 42, 40, 0.1);
        }

        /* Datenschutz-Spezifische Styles */
        .privacy-section {
            padding: 2rem 0;
        }

        .privacy-toc {
            background: #EAE3D9;
            padding: 2rem;
            border-radius: 0.75rem;
            border: 1px solid rgba(44, 42, 40, 0.05);
        }

        .privacy-toc ul {
            list-style: none;
            padding: 0;
        }

        .privacy-toc li {
            margin-bottom: 0.75rem;
        }

        .privacy-toc a {
            color: #C2714F;
            text-decoration: none;
            transition: color 300ms ease;
        }

        .privacy-toc a:hover {
            color: #2C2A28;
            text-decoration: underline;
        }

        .privacy-box {
            background: rgba(178, 197, 168, 0.08);
            border-left: 4px solid #B2C5A8;
            padding: 1.5rem;
            margin: 2rem 0;
            border-radius: 0.5rem;
        }

        .privacy-box strong {
            color: #C2714F;
        }

        .definition-list dt {
            font-weight: 600;
            color: #2C2A28;
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
        }

        .definition-list dd {
            margin-left: 0;
            color: #6B655C;
            margin-bottom: 1rem;
        }

        .placeholder-note {
            background: rgba(194, 113, 79, 0.1);
            border-left: 4px solid #C2714F;
            padding: 1rem;
            margin: 1.5rem 0;
            border-radius: 0.25rem;
            font-size: 0.875rem;
            color: #6B655C;
        }
    ` }} />
      <main dangerouslySetInnerHTML={{ __html: `<!-- Hero Section -->
        <section class="pb-24 md:pb-40 px-6 md:px-12">
            <div class="max-w-[90rem] mx-auto">
                <div class="max-w-2xl">
                    <h1 class="text-6xl md:text-8xl font-serif tracking-tighter leading-[0.9] text-brand-dark mb-6">
                        Datenschutz
                    </h1>
                    <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text max-w-lg">
                        Transparente Information über die Verarbeitung Ihrer personenbezogenen Daten bei Pizzeria Va Bene Imst
                    </p>
                </div>
            </div>
        </section>

        <!-- Inhaltsverzeichnis -->
        <section class="py-24 md:py-40 px-6 md:px-12 bg-brand-surface/50 tech-line">
            <div class="max-w-[90rem] mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-12">Inhaltsverzeichnis</h2>
                
                <div class="privacy-toc">
                    <ul>
                        <li><a href="#einfuehrung">Einleitung und Überblick</a></li>
                        <li><a href="#anwendungsbereich">Anwendungsbereich</a></li>
                        <li><a href="#verantwortlicher">Kontaktdaten des Verantwortlichen</a></li>
                        <li><a href="#datenverarbeitung">Übersicht der Datenverarbeitung</a></li>
                        <li><a href="#rechtsgrundlagen">Rechtsgrundlagen</a></li>
                        <li><a href="#speicherdauer">Speicherdauer</a></li>
                        <li><a href="#sicherheit">Sicherheit der Datenverarbeitung</a></li>
                        <li><a href="#cookies">Cookies und Tracking</a></li>
                        <li><a href="#hosting">Hosting</a></li>
                        <li><a href="#kontaktformular">Kontaktformular</a></li>
                        <li><a href="#tools">Verwendete Tools und Services</a></li>
                        <li><a href="#ssl">SSL-Verschlüsselung</a></li>
                        <li><a href="#rechte">Ihre Rechte nach DSGVO</a></li>
                        <li><a href="#aenderungen">Änderungen dieser Datenschutzerklärung</a></li>
                        <li><a href="#begriffe">Erklärung verwendeter Begriffe</a></li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Einleitung -->
        <section id="einfuehrung" class="py-24 md:py-40 px-6 md:px-12">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-8">
                    Einleitung und Überblick
                </h2>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-6">
                    Diese Datenschutzerklärung gilt für die Website und alle digitalen Dienste der Pizzeria Va Bene Imst. Wir informieren Sie hiermit transparent und leicht verständlich über die Verarbeitung Ihrer personenbezogenen Daten gemäß der Datenschutz-Grundverordnung (DSGVO) und geltenden nationalen Gesetzen.
                </p>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-6">
                    Mit dieser Datenschutzerklärung möchten wir Ihnen zeigen, welche Daten wir verarbeiten, zu welchem Zweck, auf welcher rechtlichen Grundlage und wie lange wir diese speichern. Gleichzeitig informieren wir Sie über Ihre Rechte und wie Sie diese ausüben können.
                </p>

                <div class="privacy-box">
                    <p><strong>Datenschutz ist uns wichtig:</strong> Die Sicherheit und der Schutz Ihrer persönlichen Daten stehen an erster Stelle. Wir verarbeiten Ihre Daten nur, soweit dies erforderlich und rechtmäßig ist.</p>
                </div>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                    Falls Fragen offen bleiben oder Sie weitere Informationen benötigen, wenden Sie sich bitte an die Kontaktdaten unseres Datenschutzverantwortlichen (siehe unten).
                </p>
            </div>
        </section>

        <!-- Anwendungsbereich -->
        <section id="anwendungsbereich" class="py-24 md:py-40 px-6 md:px-12 bg-brand-surface/50 tech-line">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-8">
                    Anwendungsbereich
                </h2>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-6">
                    Diese Datenschutzerklärung gilt für:
                </p>

                <ul class="text-lg md:text-xl font-sans leading-relaxed text-brand-text space-y-4 mb-8">
                    <li class="flex gap-3">
                        <span class="text-brand-accent font-bold">•</span>
                        <span>Die Website <strong>www.vabene-imst.at</strong> und alle Unterseiten</span>
                    </li>
                    <li class="flex gap-3">
                        <span class="text-brand-accent font-bold">•</span>
                        <span>Alle elektronischen Kommunikationsmittel (E-Mail, Kontaktformulare)</span>
                    </li>
                    <li class="flex gap-3">
                        <span class="text-brand-accent font-bold">•</span>
                        <span>Social-Media-Auftritte und externe Plattformen</span>
                    </li>
                    <li class="flex gap-3">
                        <span class="text-brand-accent font-bold">•</span>
                        <span>Alle Dienstleistungen und Produkte, die wir anbieten</span>
                    </li>
                </ul>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                    Mit personenbezogenen Daten meinen wir Informationen, durch die Sie als natürliche Person identifiziert werden können, wie Name, E-Mail-Adresse, Telefonnummer, Adresse oder IP-Adresse.
                </p>
            </div>
        </section>

        <!-- Verantwortlicher -->
        <section id="verantwortlicher" class="py-24 md:py-40 px-6 md:px-12">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-8">
                    Kontaktdaten des Verantwortlichen
                </h2>

                <div class="privacy-box">
                    <p class="font-bold text-brand-dark mb-4">Verantwortlicher für die Datenverarbeitung:</p>
                    <p class="mb-2"><strong>Name:</strong> Nafiz Ceylan</p>
                    <p class="mb-2"><strong>Position/Titel:</strong> [HIER ERGAENZEN]</p>
                    <p class="mb-2"><strong>Adresse:</strong> Langgasse 78c, 6460 Imst, Österreich</p>
                    <p class="mb-2"><strong>E-Mail:</strong> <a href="mailto:nafizc-bjk@hotmail.com" class="text-brand-accent hover:underline">nafizc-bjk@hotmail.com</a></p>
                    <p class="mb-2"><strong>Telefon:</strong> <a href="tel:0541261755" class="text-brand-accent hover:underline">05412 617 55</a></p>
                    <p class="mb-0"><strong>Website:</strong> <a href="https://www.vabene-imst.at" class="text-brand-accent hover:underline" target="_blank">www.vabene-imst.at</a></p>
                </div>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mt-8">
                    Der Verantwortliche ist die Person oder Organisation, die über die Zwecke und Mittel der Verarbeitung Ihrer personenbezogenen Daten entscheidet.
                </p>
            </div>
        </section>

        <!-- Datenverarbeitung Übersicht -->
        <section id="datenverarbeitung" class="py-24 md:py-40 px-6 md:px-12 bg-brand-surface/50 tech-line">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-8">
                    Übersicht der Datenverarbeitung
                </h2>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-8">
                    Wir verarbeiten verschiedene Kategorien von personenbezogenen Daten:
                </p>

                <div class="space-y-6">
                    <div class="privacy-box">
                        <p><strong>Kontaktdaten:</strong> Name, E-Mail-Adresse, Telefonnummer, Adresse</p>
                    </div>
                    <div class="privacy-box">
                        <p><strong>Browserdaten:</strong> IP-Adresse, Browser-Typ, Betriebssystem, Besuchszeit, angesehene Seiten</p>
                    </div>
                    <div class="privacy-box">
                        <p><strong>Formulardaten:</strong> Informationen aus Kontaktformularen und Anfragen</p>
                    </div>
                    <div class="privacy-box">
                        <p><strong>Tracking-Daten:</strong> [COOKIE-DETAILS HIER ERGAENZEN]</p>
                    </div>
                    <div class="privacy-box">
                        <p><strong>Kommunikationsdaten:</strong> E-Mail-Korrespondenz, Nachrichten über Kontaktformulare</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Rechtsgrundlagen -->
        <section id="rechtsgrundlagen" class="py-24 md:py-40 px-6 md:px-12">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-8">
                    Rechtsgrundlagen
                </h2>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-8">
                    Wir verarbeiten Ihre personenbezogenen Daten nur, wenn eine der folgenden Rechtsgrundlagen gegeben ist:
                </p>

                <div class="space-y-6">
                    <div>
                        <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-3">1. Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</h3>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                            Sie haben uns Ihre Einwilligung zur Verarbeitung gegeben. Sie können diese Einwilligung jederzeit widerrufen, ohne dass die Rechtmäßigkeit der bisherigen Verarbeitung beeinträchtigt wird.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-3">2. Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)</h3>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                            Die Verarbeitung ist erforderlich, um einen Vertrag mit Ihnen zu erfüllen oder um vorvertragliche Maßnahmen durchzuführen. Dies gilt beispielsweise für Bestellungen oder Reservierungen.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-3">3. Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO)</h3>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                            Wir sind einer rechtlichen Verpflichtung unterworfen, die die Verarbeitung Ihrer Daten erfordert. Dies können beispielsweise steuerliche oder buchhaltungstechnische Anforderungen sein.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-3">4. Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</h3>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                            Die Verarbeitung ist erforderlich, um unsere berechtigten Interessen oder die Interessen Dritter zu wahren. Dies kann beispielsweise die Sicherheit unserer Website, Marketing oder die Verbesserung unserer Dienste sein, solange Ihre Grundrechte nicht beeinträchtigt werden.
                        </p>
                    </div>
                </div>

                <div class="placeholder-note mt-8">
                    <strong>Hinweis:</strong> Diese Datenschutzerklärung ist eine Strukturvorlage. Spezifische Rechtsgrundlagen für einzelne Verarbeitungsvorgänge werden in den entsprechenden Abschnitten behandelt.
                </div>
            </div>
        </section>

        <!-- Speicherdauer -->
        <section id="speicherdauer" class="py-24 md:py-40 px-6 md:px-12 bg-brand-surface/50 tech-line">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-8">
                    Speicherdauer
                </h2>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-6">
                    Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies erforderlich ist:
                </p>

                <div class="space-y-4">
                    <div class="flex gap-4">
                        <span class="text-brand-accent font-bold flex-shrink-0">•</span>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text"><strong>Kontaktformular-Daten:</strong> [SPEICHERDAUER HIER ERGAENZEN]</p>
                    </div>
                    <div class="flex gap-4">
                        <span class="text-brand-accent font-bold flex-shrink-0">•</span>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text"><strong>Website-Logs (IP-Adressen):</strong> [SPEICHERDAUER HIER ERGAENZEN]</p>
                    </div>
                    <div class="flex gap-4">
                        <span class="text-brand-accent font-bold flex-shrink-0">•</span>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text"><strong>Cookie-Daten:</strong> [SPEICHERDAUER HIER ERGAENZEN]</p>
                    </div>
                    <div class="flex gap-4">
                        <span class="text-brand-accent font-bold flex-shrink-0">•</span>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text"><strong>Geschäftsdaten (Rechnungen, Vertragsdaten):</strong> Gemäß österreichischem Gesetz mindestens 7 Jahre</p>
                    </div>
                </div>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mt-8">
                    Nach Ablauf dieser Fristen werden Ihre Daten gelöscht oder anonymisiert, es sei denn, wir müssen sie noch speichern, um rechtliche Verpflichtungen zu erfüllen.
                </p>
            </div>
        </section>

        <!-- Sicherheit -->
        <section id="sicherheit" class="py-24 md:py-40 px-6 md:px-12">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-8">
                    Sicherheit der Datenverarbeitung
                </h2>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-6">
                    Wir ergreifen umfassende technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust, Zerstörung und Missbrauch zu schützen:
                </p>

                <div class="space-y-4 mb-8">
                    <div class="flex gap-4">
                        <span class="text-brand-accent font-bold flex-shrink-0">✓</span>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text"><strong>SSL-Verschlüsselung:</strong> Alle Datenübertragungen zwischen Ihrem Browser und unserer Website sind verschlüsselt.</p>
                    </div>
                    <div class="flex gap-4">
                        <span class="text-brand-accent font-bold flex-shrink-0">✓</span>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text"><strong>Zugriffskontrolle:</strong> Nur autorisierte Mitarbeiter haben Zugriff auf Ihre Daten.</p>
                    </div>
                    <div class="flex gap-4">
                        <span class="text-brand-accent font-bold flex-shrink-0">✓</span>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text"><strong>Datenschutz-Schulungen:</strong> Unser Personal wird regelmäßig zum Thema Datenschutz geschult.</p>
                    </div>
                    <div class="flex gap-4">
                        <span class="text-brand-accent font-bold flex-shrink-0">✓</span>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text"><strong>Regelmäßige Überprüfungen:</strong> Wir überprüfen und aktualisieren regelmäßig unsere Sicherheitsmaßnahmen.</p>
                    </div>
                    <div class="flex gap-4">
                        <span class="text-brand-accent font-bold flex-shrink-0">✓</span>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text"><strong>Sichere Datenübertragung:</strong> [WEITERE SICHERHEITSMASSNAHMEN HIER ERGAENZEN]</p>
                    </div>
                </div>

                <div class="privacy-box">
                    <p><strong>Wichtig:</strong> Trotz aller Sicherheitsmaßnahmen können wir nicht 100% Sicherheit garantieren. Bitte teilen Sie uns verdächtige Aktivitäten umgehend mit.</p>
                </div>
            </div>
        </section>

        <!-- Cookies und Tracking -->
        <section id="cookies" class="py-24 md:py-40 px-6 md:px-12 bg-brand-surface/50 tech-line">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-8">
                    Cookies und Tracking
                </h2>

                <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-4 mt-8">Was sind Cookies?</h3>
                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-6">
                    Cookies sind kleine Dateien, die auf Ihrem Gerät gespeichert werden und Informationen über Ihr Verhalten auf unserer Website enthalten. Sie helfen uns, Ihre Erfahrung zu verbessern und Sie beim nächsten Besuch wiederzuerkennen.
                </p>

                <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-4 mt-8">Arten von Cookies</h3>
                <div class="space-y-4 mb-8">
                    <div class="privacy-box">
                        <p><strong>Notwendige Cookies:</strong> Diese sind erforderlich, damit unsere Website korrekt funktioniert. Beispiele: Session-Cookies für die Authentifizierung, Sicherheitscookies.</p>
                    </div>
                    <div class="privacy-box">
                        <p><strong>Marketing/Tracking-Cookies:</strong> [COOKIE-DETAILS HIER ERGAENZEN]</p>
                    </div>
                    <div class="privacy-box">
                        <p><strong>Analyse-Cookies:</strong> [TRACKING-TOOLS HIER ERGAENZEN]</p>
                    </div>
                </div>

                <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-4 mt-8">Ihre Cookie-Präferenzen</h3>
                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-6">
                    Sie können die meisten Cookies über Ihre Browser-Einstellungen kontrollieren. Notwendige Cookies können nicht deaktiviert werden, da sie für die Funktion der Website erforderlich sind. Mit dem Deaktivieren anderer Cookies kann die Funktionalität unserer Website eingeschränkt werden.
                </p>

                <div class="placeholder-note">
                    <strong>Datenschutz-Banner:</strong> Beim Besuch unserer Website wird ein Cookie-Consent-Banner angezeigt, über das Sie Ihre Präferenzen verwalten können.
                </div>
            </div>
        </section>

        <!-- Hosting -->
        <section id="hosting" class="py-24 md:py-40 px-6 md:px-12">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-8">
                    Hosting
                </h2>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-6">
                    Unsere Website wird von einem Hosting-Anbieter gehostet. Der Hosting-Anbieter verarbeitet technisch notwendige Daten wie Ihre IP-Adresse, um die Website bereitzustellen:
                </p>

                <div class="privacy-box">
                    <p class="mb-2"><strong>Hosting-Anbieter:</strong> [HOSTING-ANBIETER HIER ERGAENZEN]</p>
                    <p class="mb-2"><strong>Server-Standort:</strong> [STANDORT HIER ERGAENZEN]</p>
                    <p class="mb-2"><strong>Datenschutzerklärung:</strong> [LINK ZUR DATENSCHUTZERKLAERUNG DES ANBIETERS HIER ERGAENZEN]</p>
                    <p class="mb-0"><strong>Datenverarbeitungsvertrag:</strong> Ein gültiger Datenverarbeitungsvertrag liegt vor.</p>
                </div>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mt-8">
                    Der Hosting-Anbieter wird im Rahmen eines Auftragsverarbeitungsvertrags tätig und verarbeitet Ihre Daten nur nach unseren Anweisungen.
                </p>
            </div>
        </section>

        <!-- Kontaktformular -->
        <section id="kontaktformular" class="py-24 md:py-40 px-6 md:px-12 bg-brand-surface/50 tech-line">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-8">
                    Kontaktformular
                </h2>

                <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-4">Daten, die wir erheben</h3>
                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-6">
                    Wenn Sie unser Kontaktformular ausfüllen, werden folgende Daten erhoben:
                </p>

                <ul class="space-y-2 mb-8">
                    <li class="text-lg md:text-xl font-sans leading-relaxed text-brand-text flex gap-3">
                        <span class="text-brand-accent font-bold">•</span>
                        <span>Name</span>
                    </li>
                    <li class="text-lg md:text-xl font-sans leading-relaxed text-brand-text flex gap-3">
                        <span class="text-brand-accent font-bold">•</span>
                        <span>E-Mail-Adresse</span>
                    </li>
                    <li class="text-lg md:text-xl font-sans leading-relaxed text-brand-text flex gap-3">
                        <span class="text-brand-accent font-bold">•</span>
                        <span>Telefonnummer (optional)</span>
                    </li>
                    <li class="text-lg md:text-xl font-sans leading-relaxed text-brand-text flex gap-3">
                        <span class="text-brand-accent font-bold">•</span>
                        <span>Nachricht / Anfrage</span>
                    </li>
                    <li class="text-lg md:text-xl font-sans leading-relaxed text-brand-text flex gap-3">
                        <span class="text-brand-accent font-bold">•</span>
                        <span>Zeitstempel und IP-Adresse</span>
                    </li>
                </ul>

                <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-4">Rechtsgrundlage und Zweck</h3>
                <div class="privacy-box">
                    <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) / Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)</p>
                    <p><strong>Zweck:</strong> Um Ihre Anfrage zu beantworten und mit Ihnen in Kontakt zu treten</p>
                </div>

                <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-4 mt-8">Speicherdauer</h3>
                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                    Ihre Daten werden [SPEICHERDAUER HIER ERGAENZEN] nach Beantwortung Ihrer Anfrage gelöscht, es sei denn, wir müssen sie für geschäftliche oder rechtliche Zwecke weiterspeichern.
                </p>
            </div>
        </section>

        <!-- Tools und Services -->
        <section id="tools" class="py-24 md:py-40 px-6 md:px-12">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-8">
                    Verwendete Tools und Services
                </h2>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-8">
                    Wir nutzen verschiedene Tools und Dienste von Drittanbietern, die teilweise personenbezogene Daten verarbeiten:
                </p>

                <div class="space-y-8">
                    <div>
                        <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-4">Google Analytics</h3>
                        <div class="privacy-box">
                            <p class="mb-2"><strong>Status:</strong> [TRACKING-TOOLS HIER ERGAENZEN]</p>
                            <p class="mb-2"><strong>Zweck:</strong> Analyse des Besucherverhaltens zur Verbesserung unserer Website</p>
                            <p class="mb-2"><strong>Daten:</strong> IP-Adresse (gekürzt), Besuchszeit, besuchte Seiten, Browser-Daten</p>
                            <p class="mb-0"><strong>Datenschutzerklärung:</strong> <a href="https://policies.google.com/privacy" target="_blank" class="text-brand-accent hover:underline">Google Privacy Policy</a></p>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-4">Weitere Tools</h3>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-4">
                            [WEITERE TRACKING-TOOLS UND SERVICES HIER BESCHREIBEN]
                        </p>
                        <div class="placeholder-note">
                            <strong>Hinweis:</strong> Wenn auf dieser Website weitere Tracking-Tools, Payment-Anbieter, CRM-Systeme oder andere Dienste verwendet werden, müssen diese hier dokumentiert werden.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SSL-Verschlüsselung -->
        <section id="ssl" class="py-24 md:py-40 px-6 md:px-12 bg-brand-surface/50 tech-line">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-8">
                    SSL-Verschlüsselung
                </h2>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-6">
                    Diese Website verwendet SSL-Verschlüsselung (TLS) zum Schutz Ihrer Daten. Dies ist erkennbar an:
                </p>

                <div class="space-y-4 mb-8">
                    <div class="flex gap-4">
                        <span class="text-brand-accent font-bold flex-shrink-0">✓</span>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text"><strong>Grünes Schloss-Symbol</strong> in der Adresszeile Ihres Browsers</p>
                    </div>
                    <div class="flex gap-4">
                        <span class="text-brand-accent font-bold flex-shrink-0">✓</span>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text"><strong>"https://"</strong> Protokoll in der URL</p>
                    </div>
                    <div class="flex gap-4">
                        <span class="text-brand-accent font-bold flex-shrink-0">✓</span>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">Alle Daten zwischen Ihrem Browser und unserem Server sind <strong>verschlüsselt</strong></p>
                    </div>
                </div>

                <div class="privacy-box">
                    <p><strong>Zertifikat:</strong> [SSL-ZERTIFIKATDETAILS HIER ERGAENZEN]</p>
                </div>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mt-8">
                    Die SSL-Verschlüsselung ist essentiell für den Schutz sensibler Informationen wie Passwörter oder Zahlungsdaten. Sie verhindert, dass Dritte Ihre Kommunikation abhören oder manipulieren können.
                </p>
            </div>
        </section>

        <!-- Rechte der betroffenen Personen -->
        <section id="rechte" class="py-24 md:py-40 px-6 md:px-12">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-8">
                    Ihre Rechte nach der DSGVO
                </h2>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-8">
                    Nach der Datenschutz-Grundverordnung haben Sie folgende Rechte:
                </p>

                <div class="space-y-6">
                    <div>
                        <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-3">Recht auf Auskunft (Art. 15 DSGVO)</h3>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                            Sie haben das Recht, von uns eine Auskunft darüber zu verlangen, welche personenbezogenen Daten wir über Sie speichern, zu welchem Zweck und auf welcher Rechtsgrundlage.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-3">Recht auf Berichtigung (Art. 16 DSGVO)</h3>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                            Sie können unrichtige oder unvollständige Daten verlangen, dass diese berichtigt oder ergänzt werden.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-3">Recht auf Löschung (Art. 17 DSGVO)</h3>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                            Sie können verlangen, dass Ihre Daten gelöscht werden ("Recht auf Vergessenwerden"), sofern keine rechtlichen Gründe für die weitere Speicherung bestehen.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-3">Recht auf Einschränkung (Art. 18 DSGVO)</h3>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                            Sie können verlangen, dass wir die Verarbeitung Ihrer Daten einschränken, beispielsweise während überprüft wird, ob eine Anfrage berechtigt ist.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-3">Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                            Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und diese an einen anderen Verantwortlichen zu übermitteln.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-3">Widerspruchsrecht (Art. 21 DSGVO)</h3>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                            Sie haben das Recht, der Verarbeitung auf Basis berechtigter Interessen zu widersprechen. Dies gilt insbesondere für Direktmarketing.
                        </p>
                    </div>

                    <div>
                        <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-3">Recht auf Widerruf der Einwilligung</h3>
                        <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                            Sie können eine erteilte Einwilligung jederzeit widerrufen, ohne dass dies Auswirkungen auf die Rechtmäßigkeit der bisherigen Verarbeitung hat.
                        </p>
                    </div>
                </div>

                <div class="privacy-box mt-8">
                    <p><strong>So üben Sie Ihre Rechte aus:</strong> Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter den oben angegebenen Kontaktdaten. Wir benötigen möglicherweise Informationen zu Ihrer Identität zur Überprüfung.</p>
                </div>

                <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-4 mt-8">Beschwerderecht bei einer Aufsichtsbehörde</h3>
                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                    Wenn Sie der Meinung sind, dass wir Ihre Datenschutzrechte verletzt haben, haben Sie das Recht, sich bei einer Datenschutzbehörde zu beschweren. In Österreich ist die zuständige Behörde die <strong>Österreichische Datenschutzbehörde (DSB)</strong>.
                </p>
            </div>
        </section>

        <!-- Änderungen -->
        <section id="aenderungen" class="py-24 md:py-40 px-6 md:px-12 bg-brand-surface/50 tech-line">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-8">
                    Änderungen dieser Datenschutzerklärung
                </h2>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-6">
                    Wir können diese Datenschutzerklärung jederzeit anpassen, um sie an geänderte Gesetze, neue Technologien oder Änderungen unserer Geschäftspraxis anzupassen. Die jeweils aktuelle Fassung finden Sie immer auf dieser Seite.
                </p>

                <div class="privacy-box">
                    <p><strong>Letzte Aktualisierung dieser Datenschutzerklärung:</strong> [DATUM HIER ERGAENZEN]</p>
                </div>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mt-6">
                    Bei wesentlichen Änderungen benachrichtigen wir Sie durch einen prominenten Hinweis auf unserer Website oder per E-Mail.
                </p>
            </div>
        </section>

        <!-- Begriffe -->
        <section id="begriffe" class="py-24 md:py-40 px-6 md:px-12">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-serif tracking-tighter leading-[1.1] text-brand-dark mb-8">
                    Erklärung verwendeter Begriffe
                </h2>

                <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-8">
                    Einige Begriffe aus dieser Datenschutzerklärung werden hier erklärt:
                </p>

                <dl class="definition-list space-y-6">
                    <div>
                        <dt>Personenbezogene Daten</dt>
                        <dd>
                            Alle Informationen, die sich auf eine natürliche Person beziehen und durch die diese Person identifiziert werden kann. Dazu gehören Name, Adresse, E-Mail, Telefonnummer, IP-Adresse, Cookies, etc.
                        </dd>
                    </div>

                    <div>
                        <dt>Verarbeitung</dt>
                        <dd>
                            Jeder Vorgang, der mit personenbezogenen Daten durchgeführt wird, wie das Sammeln, Erfassen, Organisieren, Speichern, Verändern, Abrufen, Nutzen, Übermitteln oder Löschen von Daten.
                        </dd>
                    </div>

                    <div>
                        <dt>Verantwortlicher</dt>
                        <dd>
                            Die Person oder Organisation, die über die Zwecke und Mittel der Verarbeitung personenbezogener Daten entscheidet. In unserem Fall: Nafiz Ceylan / Pizzeria Va Bene Imst.
                        </dd>
                    </div>

                    <div>
                        <dt>Auftragsverarbeiter</dt>
                        <dd>
                            Eine Person oder Organisation, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet. Beispiele: Hosting-Anbieter, E-Mail-Service-Provider, Analyse-Tools.
                        </dd>
                    </div>

                    <div>
                        <dt>Rechtsgrundlage</dt>
                        <dd>
                            Die rechtliche Basis, auf der die Verarbeitung personenbezogener Daten erlaubt ist. Die DSGVO definiert verschiedene Rechtsgrundlagen (Einwilligung, Vertrag, Rechtliche Verpflichtung, Berechtigte Interessen, etc.).
                        </dd>
                    </div>

                    <div>
                        <dt>DSGVO</dt>
                        <dd>
                            Datenschutz-Grundverordnung (Regulation (EU) 2016/679) – das wichtigste Datenschutzgesetz in der Europäischen Union und im EWR.
                        </dd>
                    </div>

                    <div>
                        <dt>IP-Adresse</dt>
                        <dd>
                            Eine eindeutige numerische Adresse, die Ihrem Gerät zugewiesen wird, wenn Sie sich mit dem Internet verbinden. Sie wird verwendet, um Datenpakete im Internet zu routern.
                        </dd>
                    </div>

                    <div>
                        <dt>Cookie</dt>
                        <dd>
                            Eine kleine Textdatei, die auf Ihrem Computer gespeichert wird, wenn Sie eine Website besuchen. Cookies speichern Informationen wie Ihre Präferenzen oder Login-Daten.
                        </dd>
                    </div>

                    <div>
                        <dt>Anonymisierung</dt>
                        <dd>
                            Das Entfernen aller Identifikatoren aus Daten, sodass ein Bezug zur Person nicht mehr hergestellt werden kann. Anonymisierte Daten unterliegen nicht mehr der DSGVO.
                        </dd>
                    </div>

                    <div>
                        <dt>Einwilligung</dt>
                        <dd>
                            Eine freiwillige, spezifische und informierte Zustimmung zur Verarbeitung von Daten. Die Einwilligung muss aktiv erfolgen und kann jederzeit widerrufen werden.
                        </dd>
                    </div>
                </dl>
            </div>
        </section>

        <!-- Abschlussnote -->
        <section class="py-24 md:py-40 px-6 md:px-12 bg-brand-surface/50 tech-line">
            <div class="max-w-3xl mx-auto">
                <div class="privacy-box">
                    <h3 class="text-2xl font-serif tracking-tighter text-brand-dark mb-4">Haben Sie noch Fragen?</h3>
                    <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text mb-6">
                        Falls Sie Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung Ihrer Daten haben, kontaktieren Sie uns bitte direkt:
                    </p>
                    <p class="text-lg md:text-xl font-sans leading-relaxed text-brand-text">
                        <strong>E-Mail:</strong> <a href="mailto:nafizc-bjk@hotmail.com" class="text-brand-accent hover:underline">nafizc-bjk@hotmail.com</a><br>
                        <strong>Telefon:</strong> <a href="tel:0541261755" class="text-brand-accent hover:underline">05412 617 55</a>
                    </p>
                </div>
            </div>
        </section>` }} />
    </>
  );
}
