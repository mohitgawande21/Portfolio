import './style.css'

const projects = [
  { title: 'Komax Digital Platform', type: 'Professional case study · Private', description: 'Enterprise-grade, multilingual product experiences built with Vue.js, TypeScript, GraphQL, and Hygraph CMS.', tags: ['Vue.js', 'TypeScript', 'GraphQL'], tone: 'atlas', number: '01', href: '#about', external: false, label: 'Professional case study' },
  { title: 'Canada Money Transfer', type: 'Professional case study · Private', description: 'Secure customer journeys for KYC, recipient management, bank transfers, cards, and cash pickup at Western Union.', tags: ['React', 'React Native', 'Next.js'], tone: 'lumen', number: '02', href: '#about', external: false, label: 'Professional case study' },
  { title: 'Weather App', type: 'Personal project · Public', description: 'A live weather experience for quickly finding current conditions in a clean, responsive interface.', tags: ['JavaScript', 'REST API', 'Responsive UI'], tone: 'field', number: '03', href: 'https://github.com/mohitgawande21/Weather-App', external: true, label: 'View GitHub' },
  { title: 'Employee Management App', type: 'Personal project · Public', description: 'An employee information management app focused on practical workflows and clear data presentation.', tags: ['JavaScript', 'CRUD', 'Frontend'], tone: 'atlas', number: '04', href: 'https://github.com/mohitgawande21/Empolyee-Mangament-App', external: true, label: 'View GitHub' },
]

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Back to top"><span class="mark">M</span> Mohit Gawande</a>
    <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
    <a class="header-resume" href="/Mohit-Gawande-CV.pdf" download>Resume <span aria-hidden="true">↗</span></a>
  </header>

  <main id="top">
    <section class="hero section-wrap">
      <div class="hero-copy reveal"><p class="eyebrow">Senior frontend developer <span class="status-dot"></span></p><h1>I build products that feel <em>effortless.</em></h1><p class="hero-intro">6.5+ years designing and developing scalable, high-performance web and mobile applications with React, Next.js, React Native, TypeScript, and JavaScript.</p><div class="hero-actions"><a class="button button-dark" href="#work">See selected work <span>↓</span></a><a class="text-link" href="mailto:mohitgawande65@gmail.com">Let's talk <span>↗</span></a></div></div>
      <div class="hero-art reveal" aria-label="Abstract orange and blue composition"><div class="art-grid"></div><div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div><div class="art-sun"></div><div class="art-label">6.5+ YEARS<br>BUILDING WITH INTENT</div></div>
    </section>

    <section class="ticker" aria-label="Capabilities"><div>REACT & NEXT.JS</div><span>+</span><div>VUE & NUXT.JS</div><span>+</span><div>PERFORMANCE</div><span>+</span><div>FRONTEND ARCHITECTURE</div></section>

    <section id="work" class="section-wrap work-section"><div class="section-heading"><div><p class="eyebrow">Selected work / 2019—present</p><h2>Work with a point of view.</h2></div><p class="section-note">Professional case studies are described at a high level for confidentiality. Personal projects link directly to public source code.</p></div><div class="project-grid">${projects.map((project) => `<article class="project-card reveal"><a href="${project.href}" ${project.external ? 'target="_blank" rel="noreferrer"' : ''} class="project-link"><div class="project-visual ${project.tone}"><span class="project-number">${project.number}</span><div class="visual-window"><i></i><i></i><i></i><div class="visual-lines"></div></div><span class="view-project">${project.label} ↗</span></div><div class="project-meta"><div><p class="project-type">${project.type}</p><h3>${project.title}</h3></div><p class="project-description">${project.description}</p></div><div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div></a></article>`).join('')}</div><div class="github-bar"><span>More personal experiments and source code</span><a class="text-link" href="https://github.com/mohitgawande21" target="_blank" rel="noreferrer">Visit GitHub <span>↗</span></a></div></section>

    <section id="about" class="about-section"><div class="section-wrap about-layout"><div><p class="eyebrow">A little context</p><h2>Technical depth.<br><em>Human clarity.</em></h2></div><div class="about-copy"><p class="large-copy">I build maintainable frontend systems for products people rely on, from international money transfers to global manufacturing platforms.</p><p>My work spans architecture, state management, authentication, accessibility, Core Web Vitals, observability, and the collaboration needed to take a feature from a question to production.</p><div class="skills"><span>01 / React + Next.js</span><span>02 / Vue.js + Nuxt.js</span><span>03 / TypeScript</span><span>04 / GraphQL + REST</span></div></div></div></section>

    <section id="contact" class="contact-section section-wrap"><div><p class="eyebrow">Have a good problem?</p><h2>Let's build something<br><em>worth using.</em></h2></div><div class="contact-side"><a class="email-link" href="mailto:mohitgawande65@gmail.com">mohitgawande65@gmail.com <span>↗</span></a><div class="contact-links"><a href="https://www.linkedin.com/in/mohitgawande65/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/mohitgawande21" target="_blank" rel="noreferrer">GitHub</a><a href="/Mohit-Gawande-CV.pdf" download>Download resume</a></div></div></section>
  </main>
  <footer class="site-footer section-wrap"><span>© 2026 Mohit Gawande</span><span>Designed & built with intention</span><a href="#top">Back to top ↑</a></footer>
`

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.14 })
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
