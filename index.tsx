
import * as THREE from 'three';

// Language switching functionality
const translations = {
    en: {
        pageTitle: "Nicolás Pimienta - Portfolio",
        metaDescription: "Explore the portfolio of Nicolás Pimienta, a Digital Designer & Developer specializing in minimalist and impactful web experiences. Discover services and selected projects.",
        ogImageAlt: "Nicolás Pimienta's Portfolio - Digital Design and Development",
        navAbout: "About",
        navServices: "Services",
        navClients: "Clients", 
        navContact: "Contact",
        langSwitcherENLabel: "Switch to English",
        langSwitcherESLabel: "Switch to Spanish",
        heroSubtitle: "Digital Designer & Developer creating minimalist and impactful experiences.",
        aboutTitle: "About Me",
        aboutMyName: "Nicolás Pimienta",
        aboutMyRole: "Digital Designer & Developer",
        aboutRoleDescription: ", with knowledge in web development and design, I offer the best projects resulting in quality work.",
        aboutParagraph: "I leverage my passion and skills to craft digital products and experiences. With a focus on clean aesthetics and intuitive design, I work with individuals and companies to bring their visions to life. I thrive on minimalist principles and brutalist honesty in design.",
        profileImageAlt: "Profile picture of Nicolás Pimienta",
        servicesTitle: "Services",
        serviceWebPageTitle: "Web Page or App",
        serviceWebPageDesc: "We develop custom digital solutions: from impactful and functional websites to intuitive mobile applications, designed to boost your brand and optimize your processes.",
        serviceOnlineStoreTitle: "Online Store",
        serviceOnlineStoreDesc: "Take your business to the digital world with an online store that offers your customers a convenient and secure shopping experience, allowing you to expand your reach and increase sales.",
        serviceNewsBlogTitle: "News Site & Blog",
        serviceNewsBlogDesc: "We create the platform, you control the content. We provide the perfect structure: from impactful headlines to fluid navigation. Your information source deserves a website that reflects its importance, and we provide the tools for you to manage it easily.",
        clientsTitle: "Companies That Trusted Me",
        apaolazaLogoAlt: "Apaolaza & Asoc.",
        mandalaLogoAlt: "Alma Y Destino", 
        hotelDelSolarLogoAlt: "Hotel Del Solar",
        lanzaLaBolaLogoAlt: "Lanza la Bola Deportes",
        pehuajo365LogoAlt: "365 Pehuajó",
        contactTitle: "Let's build something great.",
        contactButton: "Send me an Email",
        messengerFabAriaLabel: "Contact via Messenger",
        footerSocialFacebookLabel: "Facebook",
        footerSocialInstagramLabel: "Instagram",
        footerCopyright: "© 2025 Nicolás Pimienta. All rights reserved.",
    },
    es: {
        pageTitle: "Nicolás Pimienta - Portafolio",
        metaDescription: "Explora el portafolio de Nicolás Pimienta, Diseñador Digital y Desarrollador especializado en experiencias web minimalistas e impactantes. Descubre servicios y proyectos seleccionados.",
        ogImageAlt: "Portafolio de Nicolás Pimienta - Diseño Digital y Desarrollo",
        navAbout: "Sobre mí",
        navServices: "Servicios",
        navClients: "Clientes", 
        navContact: "Contacto",
        langSwitcherENLabel: "Cambiar a Inglés",
        langSwitcherESLabel: "Cambiar a Español",
        heroSubtitle: "Diseñador Digital y Desarrollador creando experiencias minimalistas e impactantes.",
        aboutTitle: "Sobre Mí",
        aboutMyName: "Nicolás Pimienta",
        aboutMyRole: "Diseñador Digital y Desarrollador",
        aboutRoleDescription: ", Combino diseño visual y desarrollo web para crear sitios atractivos, rápidos y adaptables a cualquier dispositivo. Me especializo en ayudar a marcas, profesionales y emprendimientos a destacar online con soluciones modernas y efectivas.",
        aboutParagraph: "Trabajo con un enfoque limpio, funcional y orientado a la experiencia del usuario. Escucho las necesidades de cada proyecto y transformo ideas en plataformas digitales claras, intuitivas y fáciles de navegar. Cada web que creo busca generar impacto y cumplir objetivos reales.",
        profileImageAlt: "Foto de perfil de Nicolás Pimienta",
        servicesTitle: "Servicios",
        serviceWebPageTitle: "Página Web o App",
        serviceWebPageDesc: "Desarrollamos soluciones digitales a medida: desde sitios web impactantes y funcionales hasta aplicaciones móviles intuitivas, diseñadas para potenciar tu marca y optimizar tus procesos.",
        serviceOnlineStoreTitle: "Tienda Online",
        serviceOnlineStoreDesc: "Llevá tu negocio al mundo digital con una tienda en línea que brinde a tus clientes una experiencia de compra conveniente y segura, permitiéndote ampliar tu alcance y aumentar tus ventas.",
        serviceNewsBlogTitle: "Sitio de Noticias & Blog",
        serviceNewsBlogDesc: "Creamos la plataforma, vos controlás el contenido. Te brindamos la estructura perfecta: desde titulares impactantes hasta una navegación fluida. Tu fuente de información se merece un sitio web que refleje su importancia y te brindamos las herramientas para que lo manejes con facilidad.",
        clientsTitle: "Empresas que Confiaron en Mí",
        apaolazaLogoAlt: "Apaolaza & Asoc.",
        mandalaLogoAlt: "Alma Y Destino", 
        hotelDelSolarLogoAlt: "Hotel Del Solar",
        lanzaLaBolaLogoAlt: "Lanza la Bola Deportes",
        pehuajo365LogoAlt: "365 Pehuajó",
        contactTitle: "Construyamos algo increíble.",
        contactButton: "Enviame un Email",
        messengerFabAriaLabel: "Contactar por Messenger",
        footerSocialFacebookLabel: "Facebook",
        footerSocialInstagramLabel: "Instagram",
        footerCopyright: "© 2025 Nicolás Pimienta. Todos los derechos reservados.",
    }
};

type Language = keyof typeof translations;
type TranslationKey = keyof typeof translations.en;


function switchLanguage(lang: Language) {
    document.documentElement.lang = lang;
    const currentTranslations = translations[lang];

    // Update text content for elements with data-translate-key
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key') as TranslationKey;
        if (key && currentTranslations[key]) {
            const targetSpan = element.querySelector(`[data-translate-key-target="${key}"]`) as HTMLElement;
            if (targetSpan) {
                targetSpan.textContent = currentTranslations[key];
            } else if (element.classList.contains('about-role-description')) {
                element.textContent = currentTranslations[key];
            } else { // General case for elements like simple spans or buttons directly holding text
                // Check if the element is a span or if it's okay to set textContent directly
                // For example, an <a> tag with data-translate-key for its main text
                 if (element.tagName === 'SPAN' || element.tagName === 'A' || element.tagName === 'P' || element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'BUTTON') {
                    element.textContent = currentTranslations[key];
                }
            }
        }
    });
    
    // Special handling for multi-span elements like about-intro
    document.querySelectorAll('.about-intro').forEach(introElement => {
        const roleHighlight = introElement.querySelector('.about-role-highlight') as HTMLElement;
        const roleDescription = introElement.querySelector('.about-role-description') as HTMLElement;

        if (roleHighlight) {
            const highlightKey = roleHighlight.getAttribute('data-translate-key') as TranslationKey;
            if (highlightKey && currentTranslations[highlightKey]) {
                roleHighlight.textContent = currentTranslations[highlightKey];
            }
        }
        if (roleDescription) {
            const descriptionKey = roleDescription.getAttribute('data-translate-key') as TranslationKey;
             if (descriptionKey && currentTranslations[descriptionKey]) {
                roleDescription.textContent = currentTranslations[descriptionKey];
            }
        }
    });

    // Update ARIA labels
    document.querySelectorAll('[data-translate-key-aria]').forEach(element => {
        const key = element.getAttribute('data-translate-key-aria') as TranslationKey;
        if (key && currentTranslations[key]) {
            element.setAttribute('aria-label', currentTranslations[key]);
        }
    });
    
    // Update ALT attributes
    document.querySelectorAll('[data-translate-key-alt]').forEach(element => {
        const key = element.getAttribute('data-translate-key-alt') as TranslationKey;
        if (key && currentTranslations[key]) {
            element.setAttribute('alt', currentTranslations[key]);
        }
    });

    // Update page title
    if (currentTranslations.pageTitle) {
        document.title = currentTranslations.pageTitle;
    }
    
    // Update active language link
    document.querySelectorAll('.lang-link').forEach(link => {
        link.classList.remove('active-lang');
        if (link.getAttribute('data-lang-code') === lang) {
            link.classList.add('active-lang');
        }
    });

    // Update SEO Meta Tags
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag && currentTranslations.metaDescription) {
        metaDescriptionTag.setAttribute('content', currentTranslations.metaDescription);
    }

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag && currentTranslations.pageTitle) {
        ogTitleTag.setAttribute('content', currentTranslations.pageTitle);
    }

    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionTag && currentTranslations.metaDescription) {
        ogDescriptionTag.setAttribute('content', currentTranslations.metaDescription);
    }
    
    const ogImageAltTag = document.querySelector('meta[property="og:image:alt"]');
    if (ogImageAltTag && currentTranslations.ogImageAlt) {
        ogImageAltTag.setAttribute('content', currentTranslations.ogImageAlt);
    }

    const ogLocaleTag = document.querySelector('meta[property="og:locale"]');
    if (ogLocaleTag) {
        if (lang === 'es') {
            ogLocaleTag.setAttribute('content', 'es_ES');
        } else if (lang === 'en') {
            ogLocaleTag.setAttribute('content', 'en_US');
        } else {
            ogLocaleTag.setAttribute('content', lang); // Fallback
        }
    }

    const twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleTag && currentTranslations.pageTitle) {
        twitterTitleTag.setAttribute('content', currentTranslations.pageTitle);
    }

    const twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescriptionTag && currentTranslations.metaDescription) {
        twitterDescriptionTag.setAttribute('content', currentTranslations.metaDescription);
    }

    // Update JSON-LD structured data
    const ldJsonScript = document.querySelector('script[type="application/ld+json"]');
    if (ldJsonScript) {
        try {
            const ldJson = JSON.parse(ldJsonScript.textContent || '{}');
            
            ldJson.name = currentTranslations.pageTitle;
            ldJson.inLanguage = lang;

            if (ldJson.mainEntity) {
                ldJson.mainEntity.jobTitle = currentTranslations.aboutMyRole;
                ldJson.mainEntity.description = currentTranslations.heroSubtitle; 
            }
            if (ldJson.about) {
                ldJson.about.description = currentTranslations.aboutParagraph;
            }
            
            ldJsonScript.textContent = JSON.stringify(ldJson, null, 2);
        } catch (e) {
            console.error("Failed to parse or update JSON-LD:", e);
        }
    }
}

function initHeroAnimation() {
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
    if (!canvas) {
        console.warn("Hero canvas not found, skipping hero animation.");
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true }); 

    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio); 

    const accentColorValue = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
    const color = new THREE.Color(accentColorValue || '#64FFDA');


    const geometry = new THREE.IcosahedronGeometry(2, 0); 
    const material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
    const icosahedron = new THREE.Mesh(geometry, material);
    scene.add(icosahedron);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        icosahedron.rotation.x += 0.002;
        icosahedron.rotation.y += 0.003;
        renderer.render(scene, camera);
    }

    function onWindowResize() {
        const heroSection = document.getElementById('hero') as HTMLElement;
        if (heroSection && canvas) { 
             const width = heroSection.offsetWidth; 
             const height = heroSection.offsetHeight;
             renderer.setSize(width, height);
             camera.aspect = width / height;
             camera.updateProjectionMatrix();
        }
    }
    
    let heroResizeDebounceTimer: number;
    window.addEventListener('resize', () => {
        clearTimeout(heroResizeDebounceTimer);
        heroResizeDebounceTimer = window.setTimeout(onWindowResize, 100);
    }, false);
    onWindowResize(); 
    animate();
}

function initParticleBgAnimation() {
    const canvas = document.getElementById('particle-bg-canvas') as HTMLCanvasElement;
    if (!canvas) {
        console.warn("Particle background canvas not found, skipping particle animation.");
        return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error("Could not get 2D context for particle background");
        return;
    }

    let particlesArray: Particle[] = [];
    const particleCount = 70;
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim() || '#64FFDA';
    const primaryTextColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-text-color').trim() || '#E0E0E0';
    
    function hexToRgba(hex: string, alpha: number): string {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    const mouse = {
        x: undefined as number | undefined,
        y: undefined as number | undefined,
        radius: 100 
    };

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });
    canvas.addEventListener('mouseleave', () => { 
        mouse.x = undefined;
        mouse.y = undefined;
    });

    class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;

        constructor(x: number, y: number, size: number, speedX: number, speedY: number, color: string) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.speedX = speedX;
            this.speedY = speedY;
            this.color = color;
        }

        draw() {
            if (!ctx) return;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }

        update() {
            if (this.x + this.size > canvas.width || this.x - this.size < 0) {
                this.speedX = -this.speedX;
            }
            if (this.y + this.size > canvas.height || this.y - this.size < 0) {
                this.speedY = -this.speedY;
            }
            this.x += this.speedX;
            this.y += this.speedY;

            if (mouse.x !== undefined && mouse.y !== undefined) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius + this.size) { 
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const maxDistance = mouse.radius + this.size;
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = forceDirectionX * force * 0.5; 
                    const directionY = forceDirectionY * force * 0.5;
                    this.x -= directionX;
                    this.y -= directionY;
                }
            }
        }
    }

    function setupInitialParticles() {
        if (!canvas) return; 
        particlesArray = [];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (let i = 0; i < particleCount; i++) {
            const size = Math.random() * 2 + 1; 
            const x = Math.random() * (canvas.width - size * 2) + size;
            const y = Math.random() * (canvas.height - size * 2) + size;
            const speedX = (Math.random() * 0.4) - 0.2; 
            const speedY = (Math.random() * 0.4) - 0.2; 
            const color = hexToRgba(accentColor, 0.6); 
            particlesArray.push(new Particle(x, y, size, speedX, speedY, color));
        }
    }

    function connectParticles() {
        if (!ctx) return;
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a + 1; b < particlesArray.length; b++) { 
                const dx = particlesArray[a].x - particlesArray[b].x;
                const dy = particlesArray[a].y - particlesArray[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) { 
                    opacityValue = 1 - (distance / 100);
                    ctx.strokeStyle = hexToRgba(primaryTextColor, opacityValue * 0.3); 
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
            if (mouse.x !== undefined && mouse.y !== undefined) {
                const dxMouse = particlesArray[a].x - mouse.x;
                const dyMouse = particlesArray[a].y - mouse.y;
                const distanceMouse = Math.sqrt(dxMouse*dxMouse + dyMouse*dyMouse);
                if (distanceMouse < mouse.radius + 50) { 
                    opacityValue = 1 - (distanceMouse / (mouse.radius + 50));
                    ctx.strokeStyle = hexToRgba(accentColor, opacityValue * 0.4); 
                    ctx.lineWidth = 0.3;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        connectParticles();
        requestAnimationFrame(animateParticles);
    }

    setupInitialParticles();
    animateParticles();

    let particleResizeDebounceTimer: number;
    function handleResizeForParticles() {
        if (!canvas || !ctx) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Particles will adjust to new boundaries via their update() method's collision detection.
        // No need to re-create or reposition them manually.
    }

    window.addEventListener('resize', () => {
        clearTimeout(particleResizeDebounceTimer);
        particleResizeDebounceTimer = window.setTimeout(handleResizeForParticles, 150); 
    });
}


function initLiquidGlassEffect() {
    const canvas = document.getElementById('liquid-glass-canvas') as HTMLCanvasElement;
    if (!canvas) {
        console.warn("Liquid glass canvas not found, skipping effect.");
        return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error("Could not get 2D context for liquid glass canvas");
        return;
    }

    const clientSection = document.getElementById('clients');
    if (!clientSection) {
        console.error("Client section not found for liquid glass effect.");
        return;
    }
    
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim() || '#64FFDA';
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color').trim() || '#121212';

    function hexToRgba(hex: string, alpha: number): string {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    let blobs: { x: number, y: number, radius: number, speedX: number, speedY: number, color: string, targetRadius: number }[] = [];
    const numBlobs = 5;

    function resizeCanvasForLiquidGlass() {
        if (!clientSection || !canvas || !ctx) return;
        canvas.width = clientSection.offsetWidth;
        canvas.height = clientSection.offsetHeight;
        blobs = []; 
        for (let i = 0; i < numBlobs; i++) {
            const radius = Math.random() * (Math.min(canvas.width, canvas.height) / 4) + 50;
            blobs.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: radius,
                targetRadius: radius,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                color: i % 2 === 0 ? hexToRgba(accentColor, 0.05) : hexToRgba(bgColor, 0.1)
            });
        }
    }


    function animateLiquidGlass() {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.filter = 'blur(10px) brightness(1.1)';

        blobs.forEach(blob => {
            blob.x += blob.speedX;
            blob.y += blob.speedY;

            blob.radius += (blob.targetRadius - blob.radius) * 0.02;
            if (Math.abs(blob.radius - blob.targetRadius) < 0.5) {
                blob.targetRadius = Math.random() * (Math.min(canvas.width, canvas.height) / 3) + 40;
            }

            if (blob.x - blob.radius > canvas.width) blob.x = -blob.radius;
            if (blob.x + blob.radius < 0) blob.x = canvas.width + blob.radius;
            if (blob.y - blob.radius > canvas.height) blob.y = -blob.radius;
            if (blob.y + blob.radius < 0) blob.y = canvas.height + blob.radius;

            const gradient = ctx.createRadialGradient(blob.x, blob.y, blob.radius * 0.1, blob.x, blob.y, blob.radius);
            gradient.addColorStop(0, blob.color);
            gradient.addColorStop(1, hexToRgba(blob.color.startsWith('rgba(100, 255, 218') ? accentColor : bgColor, 0));

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
            ctx.fill();
        });
        
        ctx.filter = 'none'; 

        requestAnimationFrame(animateLiquidGlass);
    }

    resizeCanvasForLiquidGlass(); 
    animateLiquidGlass();

    let liquidGlassResizeDebounceTimer: number;
    window.addEventListener('resize', () => {
        clearTimeout(liquidGlassResizeDebounceTimer);
        liquidGlassResizeDebounceTimer = window.setTimeout(resizeCanvasForLiquidGlass, 100);
    });
}


function initScrollRevealAnimations() {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    if (!elementsToAnimate.length) return;

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                if (entry.target.classList.contains('about-text-content')) {
                    const h2 = entry.target.querySelector('h2');
                    if (h2) h2.classList.add('is-visible'); 
                }
                if (entry.target.tagName === 'H2') {
                     entry.target.classList.add('is-visible');
                }
                observer.unobserve(entry.target); 
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    elementsToAnimate.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    const langLinks = document.querySelectorAll('.lang-link');
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang-code') as Language;
            if (lang) {
                switchLanguage(lang);
                localStorage.setItem('preferredLanguage', lang);
            }
        });
    });

    const preferredLanguage = localStorage.getItem('preferredLanguage') as Language || (navigator.language.startsWith('es') ? 'es' : 'en');
    switchLanguage(preferredLanguage);

    initHeroAnimation();
    initParticleBgAnimation();
    initLiquidGlassEffect(); 
    initScrollRevealAnimations();
});
