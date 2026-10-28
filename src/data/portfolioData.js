export const portfolioData = {
  personal: {
    fullName: "Mati Israel",
    displayName: "matiisrael",
    title: "Full-Stack Developer",
    badge: "Available for Clients Worldwide • Open to Relocation & Remote",
    location: "Addis Ababa, Ethiopia",
    tagline: "Building practical, user-friendly web applications that solve real-world problems.",
    photoUrl: "/images/mati-israel.jpg",
    cvUrl: "/cv.pdf",
    email: "matiisrael60@gmail.com",
    phones: ["+251917643789", "+251943652102"],
    whatsapp: "+251917643789",
    whatsappLink: "https://wa.me/251917643789?text=Hello%20Mati,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    telegram: "@MatiIsrael",
    telegramLink: "https://t.me/MatiIsrael",
    github: "https://github.com/MatiIsrael",
    linkedin: "https://www.linkedin.com/in/mati-israel-19b474407",
    facebook: "https://www.facebook.com/wezpep.hope",
  },

  about: {
    heading: "Turning ideas into functional, reliable digital products",
    bio: [
      "I’m a passionate Full-Stack Developer focused on building practical, user-friendly web applications that solve real-world problems. I work comfortably across the stack with HTML, CSS, JavaScript, React, Python, Django, FastAPI, and PostgreSQL (as well as Supabase).",
      "I genuinely enjoy turning ideas into functional digital products, learning new technologies, and continuously improving my problem-solving skills through hands-on development. My goal is to grow as a software engineer, contribute to high-impact projects, collaborate with forward-thinking teams, and create dependable digital solutions for businesses and individuals.",
      "I believe in continuous learning, clean code, teamwork, and building software that makes a real difference in people's lives."
    ],
    highlights: [
      { label: "Location", value: "Addis Ababa, Ethiopia" },
      { label: "Education", value: "Ambo University (Computer Science)" },
      { label: "Primary Focus", value: "Full-Stack Web & API Architecture" },
      { label: "Client Policy", value: "Ready to work with clients worldwide" }
    ],
    stats: [
      { number: "2+", label: "Production Platforms" },
      { number: "8+", label: "Core Technologies" },
      { number: "100%", label: "Hands-on Delivery" },
      { number: "24/7", label: "Fast Communication" }
    ]
  },

  skills: {
    frontend: [
      { name: "React", icon: "Code" },
      { name: "JavaScript (ES6+)", icon: "FileCode" },
      { name: "HTML5 & CSS3", icon: "Layout" },
      { name: "Bootstrap", icon: "Grid" },
      { name: "Responsive UI/UX", icon: "Smartphone" }
    ],
    backend: [
      { name: "Python", icon: "Terminal" },
      { name: "Django", icon: "Server" },
      { name: "FastAPI", icon: "Zap" },
      { name: "RESTful APIs", icon: "Layers" }
    ],
    database: [
      { name: "PostgreSQL", icon: "Database" },
      { name: "Supabase", icon: "Cloud" },
      { name: "MySQL", icon: "Database" },
      { name: "SQLite", icon: "Database" }
    ],
    tools: [
      { name: "Git & GitHub", icon: "GitBranch" },
      { name: "VS Code", icon: "Monitor" },
      { name: "Vercel", icon: "UploadCloud" },
      { name: "Postman & API Testing", icon: "CheckSquare" }
    ]
  },

  services: [
    {
      id: "fullstack",
      title: "Full-Stack Web Development",
      description: "End-to-end web applications designed from architecture to deployment using React and Python (Django/FastAPI).",
      icon: "Layers",
      tags: ["React", "Django", "FastAPI", "Full-Stack"]
    },
    {
      id: "frontend",
      title: "Frontend & Responsive UI",
      description: "Fast, mobile-friendly interfaces built with modern React, semantic HTML5, CSS3, and Bootstrap for intuitive user experiences.",
      icon: "Layout",
      tags: ["React", "Bootstrap", "Mobile-First", "Accessibility"]
    },
    {
      id: "backend",
      title: "RESTful API & Backend Systems",
      description: "High-performance backend services, authentication mechanisms, business logic, and API endpoints with FastAPI and Django.",
      icon: "Server",
      tags: ["FastAPI", "Django", "REST APIs", "JWT Auth"]
    },
    {
      id: "database",
      title: "Database Architecture & Integration",
      description: "Normalized relational schemas, queries, and BaaS integration with PostgreSQL and Supabase for robust data integrity.",
      icon: "Database",
      tags: ["PostgreSQL", "Supabase", "SQL", "Data Security"]
    },
    {
      id: "maintenance",
      title: "Maintenance & Code Quality",
      description: "Refactoring legacy code, fixing bugs, boosting load speeds, and auditing frontend and backend code for reliability.",
      icon: "Wrench",
      tags: ["Bug Fixing", "Refactoring", "Performance", "Code Audit"]
    },
    {
      id: "mobile-custom",
      title: "Mobile & Custom Software Solutions",
      description: "Tailored software solutions designed around client workflows, with extensible architectures ready for mobile expansion.",
      icon: "Smartphone",
      tags: ["Custom Software", "Mobile-Ready", "Scalable"]
    }
  ],

  projects: [
    {
      id: "auwc-meal-scan",
      title: "AUWC Meal Card System (Meal Scan)",
      tagline: "Digital campus meal management & QR verification system",
      description: "A comprehensive digital cafeteria card and verification system built for Ambo University Welfare Community (AUWC). Replaced manual meal tracking with fast digital barcode/QR scanning, student meal eligibility checks, and administrative records.",
      role: "Sole Full-Stack Developer — Designed the user interface, student verification logic, and database tracking.",
      techStack: ["React", "JavaScript", "HTML5", "CSS3 / Bootstrap", "Supabase"],
      githubUrl: "https://github.com/MatiIsrael/auwc-meal-scan",
      liveUrl: "https://auwc-meal-scan.vercel.app/",
      featured: true,
      category: "Full-Stack / Institutional",
      highlights: [
        "Real-time student meal status verification",
        "Fast barcode/QR scanner integration",
        "Streamlined meal logging to eliminate duplicate entries",
        "Hosted live with seamless Vercel continuous deployment"
      ]
    },
    {
      id: "blood-donation",
      title: "Blood Donation Platform",
      tagline: "Life-saving community health and blood donor network",
      description: "A community-focused web platform designed to solve emergency blood shortage challenges by connecting voluntary blood donors directly with healthcare clinics and patients in urgent need. Features donor registration, blood group search, and emergency requests.",
      role: "Sole Full-Stack Developer — Architected the donor matching workflow, blood group search, and responsive user experience.",
      techStack: ["React", "JavaScript", "HTML5", "CSS3", "Supabase", "Python API"],
      githubUrl: "https://github.com/MatiIsrael/blood-donation",
      liveUrl: "https://blood-donation-nu-lemon.vercel.app/",
      featured: true,
      category: "Full-Stack / Community Health",
      highlights: [
        "Instant donor filtering by blood group and proximity",
        "Confidential donor registration and contact portal",
        "Emergency request broadcast for urgent patient requirements",
        "Mobile-first interface accessible in low-bandwidth conditions"
      ]
    }
  ],

  education: [
    {
      institution: "Ambo University",
      degree: "Bachelor of Science in Computer Science",
      status: "Undergraduate Student",
      location: "Ambo, Ethiopia",
      period: "Present",
      description: "Rigorous academic focus on software engineering, algorithms, data structures, relational database systems, network security, and modern web application development.",
      highlights: [
        "Hands-on full-stack software development",
        "Database design and systems architecture",
        "Collaborative problem solving and algorithmic thinking"
      ]
    }
  ],

  certifications: [
    {
      id: "fullstack-cert",
      title: "Full-Stack Web Development Practicum",
      issuer: "Independent Software Engineering Projects",
      date: "2025 - Present",
      description: "Demonstrated proficiency in architecting and deploying end-to-end production web applications (AUWC Meal Scan & Blood Donation Platform).",
      status: "Active / Verified Projects",
      badge: "Production Delivered"
    },
    {
      id: "cs-degree",
      title: "B.Sc. Computer Science Curriculum",
      issuer: "Ambo University",
      date: "Ongoing",
      description: "Foundational mastery in object-oriented programming, data structures, database management systems, and networking.",
      status: "In Progress",
      badge: "Academic"
    }
  ],

  callToAction: {
    heading: "Have a project in mind or need a reliable developer?",
    subheading: "Whether you need a full-stack web application, custom API, responsive frontend, or ongoing maintenance, I'm ready to turn your goals into working code.",
    primaryBtn: "Send Me a Message",
    secondaryBtn: "Chat on WhatsApp"
  }
};
