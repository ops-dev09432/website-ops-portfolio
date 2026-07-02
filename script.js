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
      "hero.role1":"Développeur Roblox","hero.role2":"C.E.O de KPS Production",
      "hero.cta1":"Voir les projets","hero.cta2":"Me contacter","hero.scroll":"Scroll",
      "about.eyebrow":"À propos","about.title":"Qui suis-je",
      "about.p1":"Je suis Ops, développeur Roblox français passionné par la création d'expériences immersives et de systèmes performants.",
      "about.p2":"Guidé par la curiosité et une envie constante de progresser, je cherche toujours à élargir mes connaissances et à relever de nouveaux défis.",
      "about.p3":"Je m'investis pleinement dans chaque projet, en portant une attention particulière à la qualité du code, à la performance, à l'expérience joueur et aux détails qui font toute la différence.",
      "about.p4":"Mon objectif est de construire des jeux et des systèmes fiables, optimisés et agréables à utiliser.",
      "about.p5":"À travers mon travail, je continue de progresser en tant que développeur, de collaborer sur des projets ambitieux et de transformer des idées créatives en expériences Roblox de qualité.",
      "about.orbit":"Un réseau de studios multilingues, FR · EN · ES · INTL",
      "skills.eyebrow":"Ce que je fais","skills.title":"Compétences clés",
      "skills.subtitle":"Trois disciplines, un seul objectif : des expériences Roblox soignées de bout en bout.",
      "skills.card1.title":"UI Design","skills.card1.tag":"Interfaces claires & modernes",
      "skills.card1.li1":"Souci du détail","skills.card1.li2":"UI propre et cohérente","skills.card1.li3":"Design visuel professionnel",
      "skills.card2.title":"Building","skills.card2.tag":"Conception d'environnements Roblox",
      "skills.card2.li1":"Builds optimisés","skills.card2.li2":"Environnements créatifs","skills.card2.li3":"Structures propres et organisées",
      "skills.card3.title":"Scripting","skills.card3.tag":"Systèmes en Lua",
      "skills.card3.li1":"Code propre et maintenable","skills.card3.li2":"Optimisation des performances","skills.card3.li3":"Systèmes de jeu évolutifs",
      "projects.eyebrow":"Collaborations","projects.title":"Studios & projets",
      "projects.subtitle":"Les studios avec lesquels je construis des expériences Roblox au quotidien.",
      "projects.kps.desc":"Studios Roblox spécialisés dans des expériences de jeu multilingues.","projects.kps.tag":"C.E.O",
      "projects.1week.desc":"Studio de développement rapide — des jeux entiers conçus en une semaine.","projects.1week.tag":"Collaboration",
      "projects.tipjar.desc":"Expériences Roblox basées sur un système de dons.","projects.tipjar.tag":"C.E.O",
      "projects.brasilblox.desc":"Jeux Roblox multilingues axés sur le chat vocal.","projects.brasilblox.tag":"Collaboration",
      "discover.title":"Ce que vous allez découvrir",
      "discover.p1":"Ce portfolio présente mes projets Roblox, mon parcours de développement, mon travail créatif et mon expertise technique.",
      "discover.p2":"Vous y découvrirez les jeux que j'ai créés, les systèmes que j'ai développés, les studios avec lesquels j'ai collaboré et mon évolution en tant que développeur Roblox.",
      "discover.p3":"Chaque projet reflète mon engagement envers la qualité, la performance, la créativité et l'amélioration continue.",
      "contact.eyebrow":"Parlons-en","contact.title":"Contact",
      "contact.subtitle":"Une idée de projet, une question ou une proposition de collaboration ? Écrivez-moi.",
      "contact.info":"Vous pouvez aussi me retrouver directement sur les réseaux ci-dessous.",
      "contact.form.name":"Nom","contact.form.email":"Email","contact.form.message":"Message","contact.form.submit":"Envoyer le message",
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
      "about.orbit":"A network of multilingual studios, FR · EN · ES · INTL",
      "skills.eyebrow":"What I do","skills.title":"Core Skills",
      "skills.subtitle":"Three disciplines, one goal: polished Roblox experiences from end to end.",
      "skills.card1.title":"UI Design","skills.card1.tag":"Clean & modern interfaces",
      "skills.card1.li1":"Attention to detail","skills.card1.li2":"Clean & consistent UI","skills.card1.li3":"Professional visual design",
      "skills.card2.title":"Building","skills.card2.tag":"Roblox environment design",
      "skills.card2.li1":"Optimized builds","skills.card2.li2":"Creative environment design","skills.card2.li3":"Clean & organized structures",
      "skills.card3.title":"Scripting","skills.card3.tag":"Lua development systems",
      "skills.card3.li1":"Clean & maintainable code","skills.card3.li2":"Performance optimization","skills.card3.li3":"Scalable game systems",
      "projects.eyebrow":"Collaborations","projects.title":"Studios & Projects",
      "projects.subtitle":"The studios I build Roblox experiences with, day to day.",
      "projects.kps.desc":"Roblox studios focused on multilingual game experiences.","projects.kps.tag":"C.E.O",
      "projects.1week.desc":"Fast-paced development studio — full games built in one week.","projects.1week.tag":"Collaboration",
      "projects.tipjar.desc":"Donation-based Roblox experiences.","projects.tipjar.tag":"C.E.O",
      "projects.brasilblox.desc":"Multilingual, voice-chat focused Roblox games.","projects.brasilblox.tag":"Collaboration",
      "discover.title":"What You'll Discover",
      "discover.p1":"This portfolio showcases my Roblox projects, development journey, creative work, and technical expertise.",
      "discover.p2":"You'll discover games I've built, systems I've developed, studios I've collaborated with, and my evolution as a Roblox developer.",
      "discover.p3":"Every project reflects my commitment to quality, performance, creativity, and continuous improvement.",
      "contact.eyebrow":"Let's talk","contact.title":"Contact",
      "contact.subtitle":"A project idea, a question, or a collab proposal? Write to me.",
      "contact.info":"You can also find me directly on the socials below.",
      "contact.form.name":"Name","contact.form.email":"Email","contact.form.message":"Message","contact.form.submit":"Send message",
      "footer.tagline":"French Roblox Developer","footer.rights":"All rights reserved.",
      "form.sending":"Sending…","form.ok":"Message sent — thanks, I'll get back to you soon!",
      "form.err":"Something went wrong. Try again or message me directly on X.",
      "form.required":"Please fill in every field."
    }
  };

  const root = document.documentElement;
  const langButtons = document.querySelectorAll('.lang-switch button');

  function applyLang(lang){
    const dict = translations[lang] || translations.fr;
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

  let savedLang = 'fr';
  try { savedLang = localStorage.getItem('ops_lang') || 'fr'; } catch(e){}
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
    const dict = translations[window.__opsLang || 'fr'];

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message){
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
        body: JSON.stringify({ name, email, message })
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
