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
    ` }} />
      <main dangerouslySetInnerHTML={{ __html: `<!-- Hero Section (Broken Grid) -->
        <section class="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden">
            <div class="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 relative">
                
                <!-- Text Content -->
                <div class="md:col-start-1 md:col-span-7 z-20 flex flex-col justify-center" data-aos="fade-up" data-aos-duration="1000">
                    <span class="text-xs md:text-sm font-sans tracking-widest uppercase text-brand-accent mb-6 md:mb-10 block ml-1">Handwerk &amp; Leidenschaft</span>
                    <h1 class="text-6xl md:text-8xl lg:text-[7.5rem] font-serif tracking-tighter leading-[0.9] text-brand-dark mb-8">
                        Beste <i class="text-brand-primary font-normal">Pizza</i> <br>
                        in Imst.
                    </h1>
                    <p class="font-sans text-brand-text text-lg md:text-xl max-w-md leading-relaxed mb-12">
                        Typisch italienische und traditionell bodenständige Gerichte, serviert in einer gemütlichen Atmosphäre.
                    </p>
                    <div class="flex items-center gap-6">
                        <a href="tel:0541261755" class="btn-organic bg-brand-dark text-brand-bg px-8 py-4 rounded-md text-sm font-medium tracking-widest uppercase">
                            Tisch reservieren
                        </a>
                    </div>
                </div>

                <!-- Hero Image (Asymmetrical placement) -->
                <div class="md:col-start-6 md:col-span-7 mt-12 md:mt-0 relative z-10" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
                    <!-- Decorative background block -->
                    <div class="absolute -top-10 -right-10 w-full h-full bg-brand-surface rounded-2xl -z-10"></div>
                    
                    <div class="overflow-hidden rounded-2xl group aspect-[4/3] md:aspect-auto md:h-[600px] w-full">
                        <img src="/images/bild-03.webp" alt="Frische Pizza aus dem Ofen" class="w-full h-full object-cover image-hover-zoom">
                    </div>
                    
                    <!-- Floating Badge -->
                    <div class="absolute -bottom-6 -left-6 md:bottom-12 md:-left-16 bg-brand-bg p-6 rounded-xl shadow-[0_20px_40px_-15px_rgba(44,42,40,0.1)] border border-brand-dark/5 z-30" data-aos="fade-up" data-aos-delay="600">
                        <p class="text-xs font-sans tracking-widest uppercase text-brand-text mb-1">Qualität</p>
                        <p class="text-xl font-serif tracking-tighter text-brand-dark italic">Handgemacht</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Philosophie Section -->
        <section id="philosophie" class="py-24 md:py-40 tech-line bg-brand-surface/50">
            <div class="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-12 items-center">
                
                <!-- Image Left -->
                <div class="md:col-start-1 md:col-span-5 relative" data-aos="fade-up">
                    <div class="overflow-hidden rounded-xl aspect-[3/4] w-full group">
                        <img src="/images/bild-04.jpg" alt="Atmosphäre im Va Bene" class="w-full h-full object-cover image-hover-zoom">
                    </div>
                    <!-- Slight offset image for depth -->
                    <div class="hidden md:block absolute -right-16 top-1/2 w-48 h-64 overflow-hidden rounded-lg shadow-xl z-20 border-4 border-brand-bg" data-aos="fade-up" data-aos-delay="200">
                         <img src="/images/bild-05.jpg" alt="Detail" class="w-full h-full object-cover">
                    </div>
                </div>

                <!-- Text Right -->
                <div class="md:col-start-7 md:col-span-5 z-10" data-aos="fade-up" data-aos-delay="100">
                    <h2 class="text-4xl md:text-6xl font-serif tracking-tighter text-brand-dark leading-[1.1] mb-8">
                        Typisch <i class="text-brand-accent">Italienisch</i>,<br>
                        echt verankert.
                    </h2>
                    <div class="w-12 h-[1px] bg-brand-accent mb-8"></div>
                    <p class="font-sans text-brand-text text-lg leading-relaxed mb-6">
                        Wir freuen uns, Sie bei uns begrüßen zu dürfen. Unsere Küche verbindet die klassische italienische Tradition mit bodenständiger Handwerkskunst. 
                    </p>
                    <p class="font-sans text-brand-text text-lg leading-relaxed mb-10">
                        Jede Pizza wird mit Sorgfalt zubereitet, der Teig ruht, um seinen vollen Geschmack zu entfalten, und die Zutaten werden mit Blick auf höchste Qualität ausgewählt. Ein Ort zum Genießen, Verweilen und Wiederkommen.
                    </p>
                    <a href="#galerie" class="inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-brand-dark hover:text-brand-accent transition-colors group">
                        Eindrücke sammeln
                        <span class="w-8 h-[1px] bg-brand-dark group-hover:bg-brand-accent group-hover:w-12 transition-all duration-300"></span>
                    </a>
                </div>

            </div>
        </section>

        <!-- Galerie Section (Broken Grid / Masonry style) -->
        <section id="galerie" class="py-24 md:py-40 tech-line">
            <div class="max-w-[90rem] mx-auto px-6 md:px-12">
                
                <div class="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24" data-aos="fade-up">
                    <div>
                        <span class="text-xs font-sans tracking-widest uppercase text-brand-primary mb-4 block">Impressionen</span>
                        <h2 class="text-5xl md:text-7xl font-serif tracking-tighter text-brand-dark leading-none">
                            Unser <i class="text-brand-text">Handwerk</i>
                        </h2>
                    </div>
                    <p class="font-sans text-brand-text max-w-sm mt-6 md:mt-0 text-right hidden md:block">
                        Ein visueller Vorgeschmack auf das, was Sie bei uns erwartet. Authentisch und unverfälscht.
                    </p>
                </div>

                <!-- Asymmetrical Image Grid -->
                <div class="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
                    
                    <!-- Row 1 -->
                    <div class="col-span-2 md:col-span-4 overflow-hidden rounded-xl group" data-aos="fade-up" data-aos-delay="0">
                        <img src="/images/bild-06.jpg" alt="Galerie Bild 3" class="w-full h-64 md:h-96 object-cover image-hover-zoom">
                    </div>
                    <div class="col-span-2 md:col-span-3 overflow-hidden rounded-xl group md:mt-12" data-aos="fade-up" data-aos-delay="100">
                        <img src="/images/bild-07.jpg" alt="Galerie Bild 4" class="w-full h-48 md:h-80 object-cover image-hover-zoom">
                    </div>
                    <div class="col-span-2 md:col-span-5 overflow-hidden rounded-xl group" data-aos="fade-up" data-aos-delay="200">
                        <img src="/images/bild-08.jpg" alt="Galerie Bild 5" class="w-full h-64 md:h-[28rem] object-cover image-hover-zoom">
                    </div>

                    <!-- Row 2 -->
                    <div class="col-span-1 md:col-span-3 overflow-hidden rounded-xl group" data-aos="fade-up" data-aos-delay="0">
                        <img src="/images/bild-09.jpg" alt="Galerie Bild 6" class="w-full h-40 md:h-72 object-cover image-hover-zoom">
                    </div>
                    <div class="col-span-1 md:col-span-6 overflow-hidden rounded-xl group md:-mt-12" data-aos="fade-up" data-aos-delay="100">
                        <img src="/images/bild-10.jpg" alt="Galerie Bild 7" class="w-full h-40 md:h-96 object-cover image-hover-zoom">
                    </div>
                    <div class="col-span-2 md:col-span-3 overflow-hidden rounded-xl group md:mt-8" data-aos="fade-up" data-aos-delay="200">
                        <img src="/images/bild-11.jpg" alt="Galerie Bild 8" class="w-full h-56 md:h-80 object-cover image-hover-zoom">
                    </div>

                    <!-- Row 3 -->
                    <div class="col-span-2 md:col-span-5 overflow-hidden rounded-xl group md:-mt-8" data-aos="fade-up" data-aos-delay="0">
                        <img src="/images/bild-12.jpg" alt="Galerie Bild 9" class="w-full h-64 md:h-[26rem] object-cover image-hover-zoom">
                    </div>
                    <div class="col-span-1 md:col-span-4 overflow-hidden rounded-xl group md:mt-12" data-aos="fade-up" data-aos-delay="100">
                        <img src="/images/bild-13.jpg" alt="Galerie Bild 10" class="w-full h-48 md:h-72 object-cover image-hover-zoom">
                    </div>
                    <div class="col-span-1 md:col-span-3 overflow-hidden rounded-xl group" data-aos="fade-up" data-aos-delay="200">
                        <img src="/images/bild-14.jpg" alt="Galerie Bild 11" class="w-full h-48 md:h-64 object-cover image-hover-zoom">
                    </div>
                    
                    <!-- Extra Image to fulfill requirement -->
                    <div class="col-span-2 md:col-span-12 overflow-hidden rounded-xl group mt-4 md:mt-8" data-aos="fade-up">
                        <img src="/images/bild-15.jpg" alt="Galerie Bild 12" class="w-full h-48 md:h-80 object-cover image-hover-zoom">
                    </div>

                </div>
            </div>
        </section>

        <!-- Info / Besuch Section -->
        <section id="besuch" class="py-24 md:py-40 bg-brand-dark text-brand-bg tech-line relative overflow-hidden">
            <!-- Subtle background texture adjustment for dark section -->
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-text/10 via-transparent to-transparent pointer-events-none"></div>

            <div class="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 relative z-10">
                
                <!-- Info Text -->
                <div class="md:col-start-2 md:col-span-4" data-aos="fade-up">
                    <h2 class="text-4xl md:text-5xl font-serif tracking-tighter mb-12">
                        Ihr Besuch bei <i class="text-brand-accent">Va Bene</i>
                    </h2>

                    <div class="space-y-12">
                        <!-- Hours -->
                        <div>
                            <span class="text-xs font-sans tracking-widest uppercase text-brand-text mb-4 block">Öffnungszeiten</span>
                            <ul class="font-sans text-brand-surface/80 space-y-3">
                                <li class="flex justify-between border-b border-brand-surface/10 pb-2">
                                    <span>Di – Sa</span>
                                    <span>10:00 – 23:00</span>
                                </li>
                                <li class="flex justify-between border-b border-brand-surface/10 pb-2">
                                    <span>Sonn- &amp; Feiertag</span>
                                    <span>11:00 – 22:00</span>
                                </li>
                            </ul>
                            <p class="text-sm text-brand-text mt-4 italic">Pizza &amp; Salat ganztägig. Warme Küche mittags und abends.</p>
                        </div>

                        <!-- Location -->
                        <div>
                            <span class="text-xs font-sans tracking-widest uppercase text-brand-text mb-4 block">Standort</span>
                            <p class="font-sans text-brand-surface/80 leading-relaxed">
                                Langgasse 78c<br>
                                6460 Imst
                            </p>
                            <p class="font-sans text-brand-surface/80 mt-4">
                                Ca. 65 Sitzplätze innen<br>
                                25 Terrassenplätze im Sommer
                            </p>
                        </div>

                        <!-- Contact -->
                        <div>
                            <span class="text-xs font-sans tracking-widest uppercase text-brand-text mb-4 block">Bestellung &amp; Reservierung</span>
                            <a href="tel:0541261755" class="text-3xl font-serif tracking-tighter text-brand-surface hover:text-brand-accent transition-colors duration-300">
                                05412 617 55
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Teaser Image -->
                <div class="md:col-start-7 md:col-span-5 flex items-center" data-aos="fade-left" data-aos-delay="200">
                    <div class="overflow-hidden rounded-xl w-full">
                        <img src="/images/bild-16.webp" alt="Pizza Zubereitung" class="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500">
                    </div>
                </div>

            </div>
        </section>` }} />
    </>
  );
}
