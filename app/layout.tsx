import "./globals.css";
import ClientScripts from "./client-scripts";

export const metadata = {
  title: "Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet" />
      </head>
      <body>
        <div dangerouslySetInnerHTML={{ __html: `<header x-data="{ scrolled: false, mobileMenuOpen: false }" @scroll.window="scrolled = (window.pageYOffset > 50)" :class="{ 'bg-brand-bg/95 backdrop-blur-md shadow-sm py-4': scrolled, 'bg-transparent py-8': !scrolled }" class="fixed w-full top-0 z-50 transition-all duration-500 ease-squishy border-b border-brand-dark/5">
        <div class="max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-center">
            
            <!-- Logo -->
            <a href="/" class="relative z-10 block w-32 md:w-40 transition-transform duration-500 hover:scale-105">
                <img src="https://www.vabene-imst.at/images/logo-vabene.webp" alt="Pizzeria Va Bene Logo" class="w-full h-auto">
            </a>

            <!-- Desktop Nav -->
            <nav class="hidden md:flex items-center gap-10">
                <a href="/datenschutz" class="text-sm font-medium tracking-widest uppercase text-brand-dark hover:text-brand-accent transition-colors duration-300">Datenschutz</a>
                <a href="/impressum" class="text-sm font-medium tracking-widest uppercase text-brand-dark hover:text-brand-accent transition-colors duration-300">Impressum</a>
                <a href="/" class="text-sm font-medium tracking-widest uppercase text-brand-dark hover:text-brand-accent transition-colors duration-300">Startseite</a>
                <a href="tel:0541261755" class="btn-organic bg-brand-accent text-brand-bg px-6 py-3 rounded-md text-sm font-medium tracking-widest uppercase flex items-center gap-2">
                    Bestellen
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </a>
            </nav>

            <!-- Mobile Menu Toggle -->
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden relative z-10 p-2 text-brand-dark">
                <svg x-show="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                <svg x-show="mobileMenuOpen" x-cloak="" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div x-show="mobileMenuOpen" x-transition:enter="transition ease-squishy duration-500" x-transition:enter-start="opacity-0 -translate-y-full" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 translate-y-0" x-transition:leave-end="opacity-0 -translate-y-full" class="absolute top-0 left-0 w-full h-screen bg-brand-surface z-0 flex flex-col items-center justify-center gap-8" x-cloak="">
            <a href="/datenschutz" @click="mobileMenuOpen = false" class="text-2xl font-serif tracking-tighter text-brand-dark">Datenschutz</a>
            <a href="/impressum" @click="mobileMenuOpen = false" class="text-2xl font-serif tracking-tighter text-brand-dark">Impressum</a>
            <a href="/" @click="mobileMenuOpen = false" class="text-2xl font-serif tracking-tighter text-brand-dark">Startseite</a>
            <a href="tel:0541261755" class="mt-8 text-lg font-sans tracking-widest uppercase text-brand-accent border-b border-brand-accent pb-1">05412 617 55</a>
        </div>
    </header>` }} />
        {children}
        <div dangerouslySetInnerHTML={{ __html: `<footer class="bg-brand-dark pt-12 pb-8 border-t border-brand-surface/10">
        <div class="max-w-[90rem] mx-auto px-6 md:px-12">
            
            <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
                <a href="#" class="w-32 opacity-80 hover:opacity-100 transition-opacity">
                    <img src="https://www.vabene-imst.at/images/logo-vabene-weiss.webp" alt="Va Bene Logo Weiß" class="w-full h-auto">
                </a>
                
                <div class="flex gap-6">
                    <a href="#" class="text-brand-text hover:text-brand-accent transition-colors text-sm tracking-widest uppercase">Facebook</a>
                    <a href="#" class="text-brand-text hover:text-brand-accent transition-colors text-sm tracking-widest uppercase">Instagram</a>
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans tracking-widest text-brand-text/60 border-t border-brand-surface/10 pt-8">
                <p>© 2025 Pizzeria Va Bene Imst.</p>
                <div class="flex gap-6">
                    <a href="#" class="hover:text-brand-surface transition-colors">Impressum</a>
                    <a href="#" class="hover:text-brand-surface transition-colors">Datenschutz</a>
                </div>
            </div>

        </div>
    </footer>` }} />
        <ClientScripts />
      </body>
    </html>
  );
}
