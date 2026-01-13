import { createI18n } from 'vue-i18n'
const savedLocale = localStorage.getItem('user-locale') || 'it'

const messages = {
  en: {
    hero: {
        role: 'FULL-STACK DEVELOPER',
        description: 'Specializing in building modern applications. From reactive design with {vue} to complex backend logic with {stack}.',
        button: 'View Projects'
    },
    nav: {
        home: 'Home',
        about: 'Tech Stack',
        projects: 'Projects',
        contact: 'Contact'
    },
    footer: {
        title: "Let's talk about your next project?",
        subtitle: "Currently available for new opportunities as a Full Stack Developer.",
        qr_title: "Scan QR Code",
        qr_text: "Add me on WeChat to collaborate",
        view_github:"Watch all projects"
    },
    about: {
        title: "Tech Stack & Skills",
        subtitle: "My technological arsenal is constantly evolving. Currently focused on creating performant APIs with {stack}.",
        levels: { expert: 'Expert', advanced: 'Advanced', intermediate: 'Intermediate', basic: 'Basic' },
        categories: { backend: 'Backend Core', frontend: 'Frontend Experience', devops: 'Data & DevOps' }
    },
    services: {
      subtitle: 'MY SERVICES',
      title: 'End-to-End Solutions',
      api_title: 'RESTful API Development',
      api_desc: 'Designing robust backends with Django, Typescript or Laravel, ready for any frontend or mobile app.',
      front_title: 'Reactive Frontend',
      front_desc: 'Dynamic and fast user interfaces with Vue.js 3, with obsessive attention to User Experience (UX).'
    },
    timeline: {
        title: "My Journey",
        present: "Present",
        freelancer: {
            role: "Freelancer - Bluebiloba Startup Innovativa S.r.l.",
            desc: "Collaboration with Bluebiloba, creating web apps using Vue.js/Django and managing PostgreSQL databases."
        },
        firstjob: {
            role: "Junior Full Stack Developer - Appare S.r.l",
            desc: "Development of complex applications using Vue.js/Typescript and PostgreSQL database management."
        },
        study: {
            role: "Intensive Full Stack Web Development",
            desc: "Intensive training path in HTML, CSS, Javascript, PHP, Laravel, Vue.js, and MySQL."
        }
    }
  },
  it: {
    hero: {
        role: 'SVILUPPATORE FULL-STACK',
        description: 'Specializzato nella costruzione di applicazioni moderne. Dal design reattivo con {vue} alla logica backend complessa con {stack}.',
        button: 'Vedi Progetti'
    },
    nav: {
        home: 'Home',
        about: 'Competenze',
        projects: 'Progetti',
        contact: 'Contatti'
    },
    footer: {
        title: "Parliamo del tuo prossimo progetto?",
        subtitle: "Attualmente disponibile per nuove opportunità come Full Stack Developer.",
        qr_title: "Scannerizza QR Code",
        qr_text: "Aggiungimi su WeChat per collaborare",
        view_github:"Vedi tutti i progetti"
    },
    about: {
        title: "Tech Stack & Competenze",
        subtitle: "Il mio arsenale tecnologico è in continua evoluzione. Attualmente focalizzato sulla creazione di API performanti con {stack}.",
        levels: { expert: 'Esperto', advanced: 'Avanzato', intermediate: 'Intermedio', basic: 'Base' },
        categories: { backend: 'Core Backend', frontend: 'Esperienza Frontend', devops: 'Dati & DevOps' }
    },
    services: {
      subtitle: 'I MIEI SERVIZI',
      title: 'Soluzioni End-to-End',
      api_title: 'Sviluppo API RESTful',
      api_desc: 'Progettazione di backend robusti con Django, Typescript o Laravel, pronti per essere consumati da qualsiasi frontend o app mobile.',
      front_title: 'Frontend Reattivo',
      front_desc: 'Interfacce utente dinamiche e veloci con Vue.js 3, con una maniacale attenzione alla User Experience (UX).'
    },
    timeline: {
        title: "Il mio Percorso",
        present: "Presente",
        freelancer: {
            role: "Freelancer - Bluebiloba Startup Innovativa S.r.l.",
            desc: "Collaborazione con Bluebiloba, creazione di web app utilizzando Vue.js/Django e gestione database PostgreSQL."
        },
        firstjob: {
            role: "Junior Full Stack Developer - Appare S.r.l",
            desc: "Sviluppo di applicazioni complesse utilizzando Vue.js/Typescript e gestione database PostgreSQL."
        },
        study: {
            role: "Studying - Full Stack Development",
            desc: "Percorso intensivo dei linguaggi HTML, CSS, Javascript, PHP, Laravel, Vue.js, MySQL."
        }
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: savedLocale, 
  fallbackLocale: 'en',
  messages,
})

export default i18n