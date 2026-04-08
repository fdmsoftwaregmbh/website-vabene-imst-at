export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
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

        .btn-organic {
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .btn-organic:hover {
            transform: scale(1.03) translateY(-2px);
            box-shadow: 0 15px 30px -10px rgba(194, 113, 79, 0.4);
        }

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
    ` }} />
      <main dangerouslySetInnerHTML={{ __html: `<div class="max-w-[90rem] mx-auto px-6 md:px-12">
            
            <!-- Page Title -->
            <div class="mb-24">
                <h1 class="font-serif text-5xl md:text-7xl tracking-tighter leading-[1.1] text-brand-dark mb-6">Impressum</h1>
                <div class="w-12 h-[1px] bg-brand-accent"></div>
            </div>

            <!-- Content Grid -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                
                <!-- Left Column: Operator Info -->
                <div class="md:col-span-6 space-y-16">
                    
                    <!-- Anbieter -->
                    <section>
                        <h2 class="font-serif text-3xl md:text-4xl tracking-tighter leading-tight text-brand-dark mb-6">Anbieter der Website</h2>
                        <div class="space-y-3 font-sans leading-relaxed text-brand-text">
                            <p>
                                <strong>Nafiz Ceylan</strong><br>
                                Langgasse 78c<br>
                                6460 Imst<br>
                                Österreich
                            </p>
                            <p>
                                <strong>Telefon:</strong> <a href="tel:05412617555" class="text-brand-accent hover:underline">05412 617 55</a><br>
                                <strong>E-Mail:</strong> <a href="mailto:nafizc-bjk@hotmail.com" class="text-brand-accent hover:underline">nafizc-bjk@hotmail.com</a>
                            </p>
                        </div>
                    </section>

                    <!-- Vertretungsberechtigte Person -->
                    <section>
                        <h2 class="font-serif text-3xl md:text-4xl tracking-tighter leading-tight text-brand-dark mb-6">Vertretungsberechtigte Person</h2>
                        <div class="space-y-3 font-sans leading-relaxed text-brand-text">
                            <p><strong>[HIER ERGAENZEN]</strong></p>
                        </div>
                    </section>

                    <!-- Registrierungsdaten -->
                    <section>
                        <h2 class="font-serif text-3xl md:text-4xl tracking-tighter leading-tight text-brand-dark mb-6">Registrierungsdaten</h2>
                        <div class="space-y-4 font-sans leading-relaxed text-brand-text">
                            <p>
                                <strong>Registergericht:</strong> [REGISTERGERICHT HIER ERGAENZEN]<br>
                                <strong>Registernummer:</strong> [REGISTERNUMMER HIER ERGAENZEN]
                            </p>
                            <p>
                                <strong>Umsatzsteuer-ID-Nummer (UID):</strong> [UST-IDNR HIER ERGAENZEN]
                            </p>
                        </div>
                    </section>

                    <!-- Verantwortlicher für Inhalte -->
                    <section>
                        <h2 class="font-serif text-3xl md:text-4xl tracking-tighter leading-tight text-brand-dark mb-6">Verantwortlicher für den Inhalt</h2>
                        <div class="space-y-3 font-sans leading-relaxed text-brand-text">
                            <p>
                                <strong>[NAME HIER ERGAENZEN]</strong><br>
                                Langgasse 78c<br>
                                6460 Imst<br>
                                Österreich
                            </p>
                        </div>
                    </section>

                </div>

                <!-- Right Column: Legal Info & Disclaimers -->
                <div class="md:col-span-6 space-y-16">
                    
                    <!-- Haftungsausschluss -->
                    <section>
                        <h2 class="font-serif text-3xl md:text-4xl tracking-tighter leading-tight text-brand-dark mb-6">Haftungsausschluss</h2>
                        <div class="space-y-4 font-sans leading-relaxed text-brand-text text-sm md:text-base">
                            <p>
                                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte dieser Website. Insbesondere übernehmen wir keine Haftung für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte.
                            </p>
                            <p>
                                Die Nutzung dieser Website erfolgt auf eigenes Risiko. Wir haften nicht für Schäden, die durch die Nutzung dieser Website entstehen, sofern diese nicht auf vorsätzliches oder grob fahrlässiges Verhalten zurückzuführen sind.
                            </p>
                        </div>
                    </section>

                    <!-- Links zu externen Websites -->
                    <section>
                        <h2 class="font-serif text-3xl md:text-4xl tracking-tighter leading-tight text-brand-dark mb-6">Externe Links</h2>
                        <div class="space-y-4 font-sans leading-relaxed text-brand-text text-sm md:text-base">
                            <p>
                                Diese Website enthält möglicherweise Links zu externen Websites. Für den Inhalt dieser externen Seiten sind ausschließlich deren Betreiber verantwortlich. Wir übernehmen keine Haftung für die Inhalte verlinkter Websites und keine Verantwortung für deren Verfügbarkeit.
                            </p>
                            <p>
                                Wenn Sie fehlerhafte oder unzutreffende Links entdecken, bitten wir Sie, uns dies mitzuteilen, damit wir diese entsprechend korrigieren können.
                            </p>
                        </div>
                    </section>

                    <!-- Urheberrecht -->
                    <section>
                        <h2 class="font-serif text-3xl md:text-4xl tracking-tighter leading-tight text-brand-dark mb-6">Urheberrecht &amp; Rechte an Inhalten</h2>
                        <div class="space-y-4 font-sans leading-relaxed text-brand-text text-sm md:text-base">
                            <p>
                                Die Inhalte dieser Website (Texte, Grafiken, Bilder, Videos, Layouts und Code) sind urheberrechtlich geschützt. Alle Rechte liegen bei Nafiz Ceylan oder den jeweiligen Lizenzgebern.
                            </p>
                            <p>
                                Eine Vervielfältigung, Bearbeitung, Verbreitung oder öffentliche Wiedergabe der Inhalte, auch auszugsweise, ist ohne vorherige schriftliche Zustimmung nicht gestattet.
                            </p>
                            <p>
                                <strong>Bildquellen:</strong><br>
                                Bilder wurden teilweise zur Verfügung gestellt von privaten Quellen und von <a href="https://pexels.com" target="_blank" rel="noopener" class="text-brand-accent hover:underline">pexels.com</a>.
                            </p>
                        </div>
                    </section>

                    <!-- Webdesign -->
                    <section>
                        <h2 class="font-serif text-3xl md:text-4xl tracking-tighter leading-tight text-brand-dark mb-6">Design &amp; Technische Umsetzung</h2>
                        <div class="space-y-3 font-sans leading-relaxed text-brand-text text-sm md:text-base">
                            <p>
                                <strong>Design &amp; Entwicklung:</strong> <a href="https://www.innubis.com" target="_blank" rel="noopener" class="text-brand-accent hover:underline">www.innubis.com</a>
                            </p>
                        </div>
                    </section>

                </div>

            </div>

            <!-- Additional Legal Info -->
            <div class="mt-24 md:mt-32 pt-16 md:pt-24 border-t border-brand-surface/10 tech-line space-y-12">
                
                <section>
                    <h2 class="font-serif text-3xl md:text-4xl tracking-tighter leading-tight text-brand-dark mb-6">Datensammlung &amp; Analyse</h2>
                    <div class="space-y-4 font-sans leading-relaxed text-brand-text text-sm md:text-base">
                        <p>
                            Diese Website kann Dienste wie Google Analytics verwenden, um Besucherdaten zu Statistik- und Verbesserungszwecken zu sammeln. Diese Daten werden nicht an Dritte weitergegeben und dienen ausschließlich der Optimierung unserer Website.
                        </p>
                        <p>
                            Weitere Informationen zum Datenschutz finden Sie in unserer <a href="/datenschutz" class="text-brand-accent hover:underline">Datenschutzerklärung</a>.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 class="font-serif text-3xl md:text-4xl tracking-tighter leading-tight text-brand-dark mb-6">Cookies</h2>
                    <div class="space-y-4 font-sans leading-relaxed text-brand-text text-sm md:text-base">
                        <p>
                            Diese Website nutzt Cookies zur Optimierung der Nutzerfreundlichkeit und Funktionalität. Durch die Nutzung dieser Website stimmen Sie der Verwendung von Cookies zu.
                        </p>
                        <p>
                            Weitere Details zur Verwendung von Cookies finden Sie in unserer <a href="/datenschutz" class="text-brand-accent hover:underline">Datenschutzerklärung</a>.
                        </p>
                    </div>
                </section>

            </div>

            <!-- Last Updated -->
            <div class="mt-16 pt-12 border-t border-brand-surface/10">
                <p class="font-sans text-xs tracking-widest uppercase text-brand-text/60">
                    Zuletzt aktualisiert: Januar 2025
                </p>
            </div>

        </div>` }} />
    </>
  );
}
