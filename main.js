import './style.css'

const profileImg = '/profile.jpg'

const skills = [
  'Java', 'Spring Boot', 'JavaScript',
  'HTML & CSS', 'SQL', 'REST APIs', 'Git'
]

const projects = [
  { title: 'Banking Management System', desc: 'A secure RESTful API backend service built with Spring Boot for managing bank accounts, transactions, and user authentication.', tags: ['Java', 'Spring Boot', 'REST API', 'MySQL'] },
  { title: 'Restaurant Website', desc: 'An interactive online food ordering platform featuring dynamic menus, cart management, and seamless checkout UI.', tags: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'Bus Ticket Booking System', desc: 'A Low-Level Design (LLD) project focusing on object-oriented system design, seat selection, booking workflows, and design patterns.', tags: ['Java', 'LLD', 'OOPs', 'Design Patterns'] }
]

const services = [
  { icon: '🌐', title: 'Web Development', desc: 'Responsive, modern websites and web apps built with clean, maintainable code.' },
  { icon: '⚙️', title: 'Backend Development (Java)', desc: 'Robust REST APIs and server logic using Java, Spring Boot and relational databases.' },
  { icon: '🎨', title: 'Frontend Design', desc: 'Attractive, accessible user interfaces with smooth animations and great UX.' },
  { icon: '🗄️', title: 'Database Design', desc: 'Efficient schema design, queries and data modeling for SQL and NoSQL databases.' },
  { icon: '🔌', title: 'API Integration', desc: 'Connecting apps with third-party services, payments and external data sources.' },
  { icon: '🛠️', title: 'Bug Fixing & Maintenance', desc: 'Debugging, refactoring and keeping existing applications running smoothly.' }
]

const contacts = [
  { icon: '🐙', label: 'GitHub', value: 'github.com/Dharshini19-01', href: 'https://github.com/Dharshini19-01' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/priyadharshini-b-921ba0325', href: 'https://www.linkedin.com/in/priyadharshini-b-921ba0325' },
  { icon: '✉️', label: 'Email', value: 'priyadharshini.b19012006@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=priyadharshini.b19012006@gmail.com' }
]

document.querySelector('#app').innerHTML = `
  <!-- Ambient background glow Orbs -->
  <div class="bg-orb orb-1"></div>
  <div class="bg-orb orb-2"></div>
  <div class="bg-orb orb-3"></div>

  <nav class="nav">
    <a href="#home" class="brand">
      <span class="brand-sparkle">✨</span>
      <span class="brand-text">Priya Dharshini</span>
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Menu">Menu</button>
    <ul class="nav-links" id="navLinks">
      <li><a href="#home" data-nav="home">Home</a></li>
      <li><a href="#projects" data-nav="projects">Projects</a></li>
      <li><a href="#service" data-nav="service">Service</a></li>
      <li><a href="#contact" data-nav="contact">Contact</a></li>
      <li><a href="/resume.html" data-nav="resume">Resume 📄</a></li>
    </ul>
  </nav>

  <section id="home" class="hero-section reveal">
    <div class="hero-avatar-wrapper">
      <div class="hero-avatar-ring"></div>
      <div class="hero-avatar-glow"></div>
      <img src="${profileImg}" alt="Priya Dharshini" class="hero-img" />
    </div>
    <div class="hero-content">
      <div class="status-badge">
        <span class="status-dot"></span> Available for Hire & Collaborations
      </div>
      <p class="hero-greeting">Hi, I'm</p>
      <h1 class="hero-name">
        <span class="name-gradient">Priya Dharshini</span>
      </h1>
      <div class="hero-role-container">
        <span class="role-icon">⚡</span>
        <span class="hero-role" id="dynamicRole">SOFTWARE DEVELOPER</span>
      </div>
      <p class="hero-intro">
        I'm a passionate software developer who loves turning ideas into real,
        working products. I specialize in building reliable backends with Java
        and creating clean, user-friendly web interfaces. I enjoy solving
        problems, learning new tools, and shipping software that people enjoy
        using.
      </p>
      <div class="skills">
        ${skills.map((s, idx) => `<span class="chip" style="--i: ${idx}">${s}</span>`).join('')}
      </div>
    </div>
  </section>

  <section id="projects" class="reveal">
    <h2 class="section-title"><span class="title-gradient">Projects</span></h2>
    <p class="section-sub">A few things I've built recently.</p>
    <div class="cards">
      ${projects.map((p, i) => `
        <div class="card" style="--delay: ${i * 0.1}s">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
      `).join('')}
    </div>
  </section>

  <section id="service" class="reveal">
    <h2 class="section-title"><span class="title-gradient">Services</span></h2>
    <p class="section-sub">What I can help you with.</p>
    <div class="service-grid">
      ${services.map((s, i) => `
        <div class="service" style="--delay: ${i * 0.1}s">
          <div class="icon">${s.icon}</div>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
        </div>
      `).join('')}
    </div>
  </section>

  <section id="contact" class="reveal">
    <h2 class="section-title"><span class="title-gradient">Contact</span></h2>
    <p class="section-sub">Let's connect — I'd love to hear from you.</p>
    <div class="contact-grid">
      ${contacts.map(c => `
        <a class="contact-card" href="${c.href}" target="_blank" rel="noopener noreferrer">
          <span class="ic">${c.icon}</span>
          <div>
            <small>${c.label}</small>
            <span>${c.value}</span>
          </div>
        </a>
      `).join('')}
    </div>
  </section>

  <footer>
    <div class="footer-info">
      <span>✉️ <a href="mailto:priyadharshini.b19012006@gmail.com">priyadharshini.b19012006@gmail.com</a></span>
      <span>📍 Chennai, Tamil Nadu</span>
    </div>
    <div class="footer-copy">© ${new Date().getFullYear()} Priya Dharshini · Software Developer</div>
  </footer>
`

// Mobile menu toggle
const navLinks = document.getElementById('navLinks')
document.getElementById('navToggle').addEventListener('click', () => navLinks.classList.toggle('open'))
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')))

// Dynamic role rotator transition
const roles = [
  'SOFTWARE DEVELOPER',
  'JAVA & SPRING BOOT SPECIALIST',
  'FULL STACK ENGINEER',
  'CREATIVE UI/UX DEVELOPER'
]
let roleIdx = 0
const dynamicRoleEl = document.getElementById('dynamicRole')
if (dynamicRoleEl) {
  setInterval(() => {
    roleIdx = (roleIdx + 1) % roles.length
    dynamicRoleEl.classList.add('role-fade-out')
    setTimeout(() => {
      dynamicRoleEl.textContent = roles[roleIdx]
      dynamicRoleEl.classList.remove('role-fade-out')
    }, 300)
  }, 3200)
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
}, { threshold: 0.12 })
document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

