import './style.css'

const profileImg = '/profile.jpg'

const skills = [
  'Java', 'Spring Boot', 'RESTful API', 'Hibernate', 'Spring Data JPA',
  'MySQL', 'MongoDB', 'Spring AI', 'JavaScript', 'HTML & CSS', 'Git'
]

const projects = [
  {
    title: 'Banking Management System',
    desc: 'A full-stack banking management system built with Spring Boot, HTML5, CSS3, JavaScript, and MySQL. Features Spring Security for authentication/authorization and Hibernate (JPA) for transaction management.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate (JPA)', 'REST API', 'MySQL'],
    repo: 'https://github.com/Dharshini19-01/BANKING_MANAGEMENT_BACKEND.git'
  },
  {
    title: 'Student Management System',
    desc: 'A comprehensive academic management system using Java, Hibernate ORM, and JDBC to handle student records, course details, and CRUD operations applying DAO design patterns.',
    tags: ['Java', 'JDBC', 'Hibernate', 'MySQL', 'DAO Pattern', 'OOP'],
    repo: 'https://github.com/Dharshini19-01/STUDENT_HIBERNATE_PROJECTS.git'
  },
  {
    title: 'Full Stack Web Applications',
    desc: 'End-to-end web applications combining responsive frontend interfaces with Java Spring Boot backend services, database operations, and RESTful API integrations.',
    tags: ['Java', 'Spring Boot', 'HTML5', 'CSS3', 'REST APIs', 'Postman']
  }
]

const services = [
  { icon: '☕', title: 'Java & Spring Boot Development', desc: 'Robust REST APIs, backend services, and server logic using Java, Spring Boot, Spring Data JPA, and Hibernate.' },
  { icon: '🌐', title: 'Web Development', desc: 'Responsive, modern web applications built with HTML5, CSS3, JavaScript, and clean maintainable code.' },
  { icon: '🗄️', title: 'Database Design & Management', desc: 'Efficient schema design, CRUD operations, and ORM mapping for MySQL and MongoDB.' },
  { icon: '🔐', title: 'Security & Authentication', desc: 'Implementing Spring Security for secure authentication, authorization, and role-based access control.' },
  { icon: '🔌', title: 'RESTful API Integration', desc: 'Designing, testing with Postman, and integrating clean RESTful endpoints and third-party APIs.' },
  { icon: '🤖', title: 'GenAI & Modern Tech', desc: 'Exploring modern developer tooling and AI capabilities with Spring AI and cloud deployments.' }
]

const contacts = [
  { icon: '🐙', label: 'GitHub', value: 'github.com/Dharshini19-01', href: 'https://github.com/Dharshini19-01' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/priyadharshini-b-921ba0325', href: 'https://linkedin.com/in/priyadharshini-b-921ba0325' },
  { icon: '🌐', label: 'Portfolio', value: 'priyadharshini-portfolio-tawny.vercel.app', href: 'https://priyadharshini-portfolio-tawny.vercel.app/' },
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
        <span class="hero-role" id="dynamicRole">JAVA DEVELOPER</span>
      </div>
      <p class="hero-intro">
        I'm a passionate Java Web Developer and Computer Science &amp; Business Systems student with a strong foundation in Java, Spring Boot, SQL, DBMS, OOP, and web development. Passionate about building scalable software solutions, solving real-world problems, and continuously learning modern technologies.
      </p>
      <div class="hero-cta-group" style="display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 24px;">
        <a href="/resume.html" class="btn-download" style="text-decoration: none;">View &amp; Download Resume 📄</a>
        <a href="#projects" class="btn-back" style="text-decoration: none;">Explore Projects ↓</a>
      </div>
      <div class="skills">
        ${skills.map((s, idx) => `<span class="chip" style="--i: ${idx}">${s}</span>`).join('')}
      </div>
    </div>
  </section>

  <section id="projects" class="reveal">
    <h2 class="section-title"><span class="title-gradient">Featured Projects</span></h2>
    <p class="section-sub">A showcase of systems and applications I've built.</p>
    <div class="cards">
      ${projects.map((p, i) => `
        <div class="card" style="--delay: ${i * 0.1}s">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          ${p.repo ? `
            <div style="margin-top: 18px;">
              <a href="${p.repo}" target="_blank" rel="noopener noreferrer" class="project-link">
                <span>View Source Code</span>
                <span style="font-size: 1.1em;">↗</span>
              </a>
            </div>
          ` : ''}
        </div>
      `).join('')}
    </div>
  </section>

  <section id="service" class="reveal">
    <h2 class="section-title"><span class="title-gradient">What I Do</span></h2>
    <p class="section-sub">Core competencies and backend engineering strengths.</p>
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
    <div class="footer-copy">© ${new Date().getFullYear()} Priya Dharshini · Java Developer</div>
  </footer>
`

// Mobile menu toggle
const navLinks = document.getElementById('navLinks')
document.getElementById('navToggle').addEventListener('click', () => navLinks.classList.toggle('open'))
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')))

// Dynamic role rotator transition
const roles = [
  'JAVA DEVELOPER',
  'SPRING BOOT SPECIALIST',
  'BACKEND ENGINEER',
  'FULL STACK DEVELOPER'
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
