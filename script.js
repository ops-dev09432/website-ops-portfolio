(() => {
  'use strict';

  // Mark JS as active — this only runs if script.js itself loaded and
  // executed successfully, so the CSS reveal-hiding rules only kick in
  // when we're guaranteed something will actually reveal the content.
  document.documentElement.className += ' js';

  /* =========================================================
     i18n
  ========================================================= */
  const translations = {
    fr: {
      "nav.home":"Accueil","nav.skills":"Compétences","nav.projects":"Projets","nav.journey":"Parcours","nav.contact":"Contact",
      "hero.role1":"Développeur Roblox","hero.role2":"CEO de KPS Production & TipJar Games",
      "hero.cta1":"Voir les projets","hero.cta2":"Me contacter","hero.scroll":"Scroll",
      "about.eyebrow":"À propos","about.title":"Qui suis-je",
      "about.p1":"Je suis Ops, développeur Roblox français passionné par la création d'expériences immersives et de systèmes performants.",
      "about.p2":"Guidé par la curiosité et une envie constante de progresser, je cherche toujours à élargir mes connaissances et à relever de nouveaux défis.",
      "about.p3":"Je m'investis pleinement dans chaque projet, en portant une attention particulière à la qualité du code, à la performance, à l'expérience joueur et aux détails qui font toute la différence.",
      "about.p4":"Mon objectif est de construire des jeux et des systèmes fiables, optimisés et agréables à utiliser.",
      "about.p5":"À travers mon travail, je continue de progresser en tant que développeur, de collaborer sur des projets ambitieux et de transformer des idées créatives en expériences Roblox de qualité.",
      "about.orbit":"Tous mes studios, réunis sous un même toit",
      "skills.eyebrow":"Ce que je fais","skills.title":"Compétences clés",
      "skills.subtitle":"Trois disciplines, un seul objectif : des expériences Roblox soignées de bout en bout.",
      "skills.card1.title":"UI Design","skills.card1.tag":"Interfaces claires & modernes",
      "skills.card1.li1":"Souci du détail","skills.card1.li2":"UI propre et cohérente","skills.card1.li3":"Design visuel professionnel",
      "skills.card2.title":"Building","skills.card2.tag":"Conception d'environnements Roblox",
      "skills.card2.li1":"Builds optimisés","skills.card2.li2":"Environnements créatifs","skills.card2.li3":"Structures propres et organisées",
      "skills.card3.title":"Scripting","skills.card3.tag":"Systèmes en Lua",
      "skills.card3.li1":"Code propre et maintenable","skills.card3.li2":"Optimisation des performances","skills.card3.li3":"Systèmes de jeu évolutifs",
      "projects.eyebrow":"Mes studios","projects.title":"Studios & projets",
      "projects.subtitle":"L'ensemble des studios que je possède et développe.",
      "projects.kps.desc":"Studio principal, structure multilingue derrière l'ensemble du réseau KPS.","projects.kps.tag":"C.E.O",
      "projects.kpsintl.desc":"Branche internationale du réseau KPS Production.","projects.kpsintl.tag":"Branche perso",
      "projects.kpsen.desc":"Branche anglophone du réseau KPS Production.","projects.kpsen.tag":"100% maison",
      "projects.kpsfr.desc":"Branche francophone du réseau KPS Production.","projects.kpsfr.tag":"Studio perso",
      "projects.kpses.desc":"Branche hispanophone du réseau KPS Production.","projects.kpses.tag":"Développé par moi",
      "projects.1week.desc":"Mon studio de développement rapide — des jeux entiers conçus en une semaine.","projects.1week.tag":"Projet solo",
      "projects.tipjar.desc":"Un de mes studios, spécialisé dans les expériences basées sur un système de dons.","projects.tipjar.tag":"Mon projet",
      "projects.brasilblox.desc":"Mon studio d'expériences multilingues axées sur le chat vocal.","projects.brasilblox.tag":"Studio indépendant",
      "discover.title":"Ce que vous allez découvrir",
      "discover.p1":"Ce portfolio présente mes projets Roblox, mon parcours de développement, mon travail créatif et mon expertise technique.",
      "discover.p2":"Vous y découvrirez les jeux que j'ai créés, les systèmes que j'ai développés, les studios avec lesquels j'ai collaboré et mon évolution en tant que développeur Roblox.",
      "discover.p3":"Chaque projet reflète mon engagement envers la qualité, la performance, la créativité et l'amélioration continue.",
      "contact.eyebrow":"Parlons-en","contact.title":"Contact",
      "contact.subtitle":"Une idée de projet, une question ou une proposition de collaboration ? Écrivez-moi.",
      "contact.info":"Vous pouvez aussi me retrouver directement sur les réseaux ci-dessous.",
      "contact.form.name":"Nom","contact.form.subject":"Objet du contact","contact.form.message":"Message du contact","contact.form.submit":"Envoyer le message",
      "footer.tagline":"Développeur Roblox français","footer.rights":"Tous droits réservés.",
      "form.sending":"Envoi en cours…","form.ok":"Message envoyé — merci, je reviens vers vous vite !",
      "form.err":"Une erreur est survenue. Réessaie ou écris-moi directement sur X.",
      "form.required":"Merci de remplir tous les champs."
    },
    en: {
      "nav.home":"Home","nav.skills":"Skills","nav.projects":"Projects","nav.journey":"Journey","nav.contact":"Contact",
      "hero.role1":"Roblox Developer","hero.role2":"CEO of KPS Production & TipJar Games",
      "hero.cta1":"View projects","hero.cta2":"Get in touch","hero.scroll":"Scroll",
      "about.eyebrow":"About","about.title":"About Me",
      "about.p1":"I'm Ops, a French Roblox developer passionate about creating immersive experiences and high-performance systems.",
      "about.p2":"Driven by curiosity and a constant desire to improve, I'm always looking to expand my knowledge and take on new challenges.",
      "about.p3":"I dedicate myself to every project I work on, paying close attention to code quality, performance, player experience, and the details that make an experience stand out.",
      "about.p4":"My goal is to build reliable, optimized, and enjoyable games and systems.",
      "about.p5":"Through my work, I aim to keep growing as a developer, collaborate on ambitious projects, and turn creative ideas into high-quality Roblox experiences.",
      "about.orbit":"All my studios, brought together",
      "skills.eyebrow":"What I do","skills.title":"Core Skills",
      "skills.subtitle":"Three disciplines, one goal: polished Roblox experiences from end to end.",
      "skills.card1.title":"UI Design","skills.card1.tag":"Clean & modern interfaces",
      "skills.card1.li1":"Attention to detail","skills.card1.li2":"Clean & consistent UI","skills.card1.li3":"Professional visual design",
      "skills.card2.title":"Building","skills.card2.tag":"Roblox environment design",
      "skills.card2.li1":"Optimized builds","skills.card2.li2":"Creative environment design","skills.card2.li3":"Clean & organized structures",
      "skills.card3.title":"Scripting","skills.card3.tag":"Lua development systems",
      "skills.card3.li1":"Clean & maintainable code","skills.card3.li2":"Performance optimization","skills.card3.li3":"Scalable game systems",
      "projects.eyebrow":"My studios","projects.title":"Studios & Projects",
      "projects.subtitle":"All the studios I own and develop.",
      "projects.kps.desc":"Main studio, the multilingual structure behind the whole KPS network.","projects.kps.tag":"C.E.O",
      "projects.kpsintl.desc":"International branch of the KPS Production network.","projects.kpsintl.tag":"Personal branch",
      "projects.kpsen.desc":"English-speaking branch of the KPS Production network.","projects.kpsen.tag":"In-house",
      "projects.kpsfr.desc":"French-speaking branch of the KPS Production network.","projects.kpsfr.tag":"Personal studio",
      "projects.kpses.desc":"Spanish-speaking branch of the KPS Production network.","projects.kpses.tag":"Built by me",
      "projects.1week.desc":"My fast-paced development studio — full games built in one week.","projects.1week.tag":"Solo project",
      "projects.tipjar.desc":"One of my studios, focused on donation-based experiences.","projects.tipjar.tag":"My project",
      "projects.brasilblox.desc":"My studio for multilingual, voice-chat focused Roblox games.","projects.brasilblox.tag":"Independent studio",
      "discover.title":"What You'll Discover",
      "discover.p1":"This portfolio showcases my Roblox projects, development journey, creative work, and technical expertise.",
      "discover.p2":"You'll discover games I've built, systems I've developed, studios I've collaborated with, and my evolution as a Roblox developer.",
      "discover.p3":"Every project reflects my commitment to quality, performance, creativity, and continuous improvement.",
      "contact.eyebrow":"Let's talk","contact.title":"Contact",
      "contact.subtitle":"A project idea, a question, or a collab proposal? Write to me.",
      "contact.info":"You can also find me directly on the socials below.",
      "contact.form.name":"Name","contact.form.subject":"Contact subject","contact.form.message":"Contact message","contact.form.submit":"Send message",
      "footer.tagline":"French Roblox Developer","footer.rights":"All rights reserved.",
      "form.sending":"Sending…","form.ok":"Message sent — thanks, I'll get back to you soon!",
      "form.err":"Something went wrong. Try again or message me directly on X.",
      "form.required":"Please fill in every field."
    },
    es: {
      "nav.home":"Inicio","nav.skills":"Habilidades","nav.projects":"Proyectos","nav.journey":"Trayectoria","nav.contact":"Contacto",
      "hero.role1":"Desarrollador Roblox","hero.role2":"CEO de KPS Production & TipJar Games",
      "hero.cta1":"Ver proyectos","hero.cta2":"Contactarme","hero.scroll":"Scroll",
      "about.eyebrow":"Sobre mí","about.title":"Quién soy",
      "about.p1":"Soy Ops, desarrollador Roblox francés apasionado por crear experiencias inmersivas y sistemas de alto rendimiento.",
      "about.p2":"Impulsado por la curiosidad y unas ganas constantes de mejorar, siempre busco ampliar mis conocimientos y asumir nuevos retos.",
      "about.p3":"Me dedico por completo a cada proyecto, prestando especial atención a la calidad del código, el rendimiento, la experiencia del jugador y los detalles que marcan la diferencia.",
      "about.p4":"Mi objetivo es crear juegos y sistemas fiables, optimizados y agradables de usar.",
      "about.p5":"A través de mi trabajo, sigo creciendo como desarrollador, colaborando en proyectos ambiciosos y convirtiendo ideas creativas en experiencias Roblox de calidad.",
      "about.orbit":"Todos mis estudios, reunidos en un mismo lugar",
      "skills.eyebrow":"Lo que hago","skills.title":"Habilidades clave",
      "skills.subtitle":"Tres disciplinas, un solo objetivo: experiencias Roblox cuidadas de principio a fin.",
      "skills.card1.title":"Diseño UI","skills.card1.tag":"Interfaces claras y modernas",
      "skills.card1.li1":"Atención al detalle","skills.card1.li2":"UI limpia y coherente","skills.card1.li3":"Diseño visual profesional",
      "skills.card2.title":"Building","skills.card2.tag":"Diseño de entornos Roblox",
      "skills.card2.li1":"Builds optimizados","skills.card2.li2":"Entornos creativos","skills.card2.li3":"Estructuras limpias y organizadas",
      "skills.card3.title":"Scripting","skills.card3.tag":"Sistemas en Lua",
      "skills.card3.li1":"Código limpio y mantenible","skills.card3.li2":"Optimización del rendimiento","skills.card3.li3":"Sistemas de juego escalables",
      "projects.eyebrow":"Mis estudios","projects.title":"Estudios y proyectos",
      "projects.subtitle":"Todos los estudios que poseo y desarrollo.",
      "projects.kps.desc":"Estudio principal, la estructura multilingüe detrás de toda la red KPS.","projects.kps.tag":"C.E.O",
      "projects.kpsintl.desc":"Rama internacional de la red KPS Production.","projects.kpsintl.tag":"Rama personal",
      "projects.kpsen.desc":"Rama anglófona de la red KPS Production.","projects.kpsen.tag":"Propio",
      "projects.kpsfr.desc":"Rama francófona de la red KPS Production.","projects.kpsfr.tag":"Estudio personal",
      "projects.kpses.desc":"Rama hispanohablante de la red KPS Production.","projects.kpses.tag":"Creado por mí",
      "projects.1week.desc":"Mi estudio de desarrollo rápido — juegos completos creados en una semana.","projects.1week.tag":"Proyecto solo",
      "projects.tipjar.desc":"Uno de mis estudios, centrado en experiencias basadas en donaciones.","projects.tipjar.tag":"Mi proyecto",
      "projects.brasilblox.desc":"Mi estudio de juegos Roblox multilingües centrados en el chat de voz.","projects.brasilblox.tag":"Estudio independiente",
      "discover.title":"Lo que vas a descubrir",
      "discover.p1":"Este portafolio muestra mis proyectos de Roblox, mi trayectoria como desarrollador, mi trabajo creativo y mi experiencia técnica.",
      "discover.p2":"Descubrirás los juegos que he creado, los sistemas que he desarrollado, los estudios con los que he colaborado y mi evolución como desarrollador Roblox.",
      "discover.p3":"Cada proyecto refleja mi compromiso con la calidad, el rendimiento, la creatividad y la mejora continua.",
      "contact.eyebrow":"Hablemos","contact.title":"Contacto",
      "contact.subtitle":"¿Una idea de proyecto, una pregunta o una propuesta de colaboración? Escríbeme.",
      "contact.info":"También puedes encontrarme directamente en las redes de abajo.",
      "contact.form.name":"Nombre","contact.form.subject":"Asunto del contacto","contact.form.message":"Mensaje de contacto","contact.form.submit":"Enviar mensaje",
      "footer.tagline":"Desarrollador Roblox francés","footer.rights":"Todos los derechos reservados.",
      "form.sending":"Enviando…","form.ok":"Mensaje enviado — ¡gracias, te responderé pronto!",
      "form.err":"Ha ocurrido un error. Inténtalo de nuevo o escríbeme directamente en X.",
      "form.required":"Por favor, completa todos los campos."
    }
  };

  const root = document.documentElement;
  const langButtons = document.querySelectorAll('.lang-switch button');

  function applyLang(lang){
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    langButtons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    root.setAttribute('lang', lang);
    try { localStorage.setItem('ops_lang', lang); } catch(e){}
    window.__opsLang = lang;
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  let savedLang = 'en';
  try { savedLang = localStorage.getItem('ops_lang') || 'en'; } catch(e){}
  applyLang(savedLang);

  /* =========================================================
     Navbar: scroll state, active link, mobile toggle
  ========================================================= */
  const navbar = document.getElementById('navbar');
  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');

  /* =========================================================
     Hero parallax + fade
  ========================================================= */
  const heroBanner = document.getElementById('heroBanner');
  const heroContent = document.getElementById('heroContent');
  const heroSection = document.querySelector('.hero');
  let ticking = false;

  function parallaxHero(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const h = heroSection.offsetHeight;
      const y = Math.min(window.scrollY, h);
      const ratio = y / h;
      heroBanner.style.transform = `translateY(${y * 0.35}px) scale(${1 + ratio * 0.08})`;
      heroBanner.style.opacity = String(Math.max(1 - ratio * 1.4, 0));
      heroContent.style.transform = `translateY(${y * 0.2}px)`;
      heroContent.style.opacity = String(Math.max(1 - ratio * 1.6, 0));
      ticking = false;
    });
  }

  function onScroll(){
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });

    parallaxHero();
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  links.forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));

  /* =========================================================
     Scroll reveals
  ========================================================= */
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  try {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.15, rootMargin:'0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } catch (e) {
    // IntersectionObserver unsupported/failed: show everything immediately
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Safety net: if something above throws before reaching this point in a
  // browser without full support, force every section visible after a
  // short delay so the page is never stuck blank.
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-visible), .reveal-stagger:not(.is-visible)')
        .forEach(el => el.classList.add('is-visible'));
    }, 2500);
  });

  /* =========================================================
     Floating background particles
  ========================================================= */
  const particleHost = document.getElementById('particles');
  const PARTICLE_COUNT = window.innerWidth < 700 ? 14 : 28;
  for (let i = 0; i < PARTICLE_COUNT; i++){
    const p = document.createElement('span');
    const size = 2 + Math.random() * 3;
    p.style.width = p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.bottom = '-10px';
    p.style.animationDuration = (14 + Math.random() * 16) + 's';
    p.style.animationDelay = (Math.random() * 20) + 's';
    if (Math.random() > 0.5) p.style.background = 'var(--accent-cyan)';
    particleHost.appendChild(p);
  }

  /* =========================================================
     Contact form -> Netlify Function -> Discord webhook
  ========================================================= */
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');
  const submitBtn = document.getElementById('formSubmit');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const dict = translations[window.__opsLang || 'en'];

    const name = form.name.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !subject || !message){
      statusEl.textContent = dict['form.required'];
      statusEl.className = 'form-status err';
      return;
    }

    submitBtn.disabled = true;
    statusEl.textContent = dict['form.sending'];
    statusEl.className = 'form-status';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, subject, message })
      });

      if (!res.ok) throw new Error('bad response');

      statusEl.textContent = dict['form.ok'];
      statusEl.className = 'form-status ok';
      form.reset();
    } catch (err) {
      statusEl.textContent = dict['form.err'];
      statusEl.className = 'form-status err';
    } finally {
      submitBtn.disabled = false;
    }
  });

  /* =========================================================
     Misc
  ========================================================= */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
