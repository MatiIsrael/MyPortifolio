# Mati Israel — Professional Full-Stack Developer Portfolio

A fast, accessible, and authentic developer portfolio website built with modern **React 18**, **Vite**, and **vanilla CSS design tokens**. Designed to showcase real production projects, technical capabilities, and direct contact channels for recruiters, employers, and clients worldwide.

---

## 🚀 Live Demo & Repository
- **GitHub Repository:** [https://github.com/MatiIsrael/MyPortifolio](https://github.com/MatiIsrael/MyPortifolio)
- **Live Preview:** Ready for instant 1-click deployment on [Vercel](https://vercel.com/)

---

## 🛠️ Tech Stack & Architecture

- **Frontend Core:** React 18, JavaScript (ES6+), Semantic HTML5, CSS3 Custom Properties
- **Build Tool:** Vite (Instant HMR, production build in < 6s)
- **Icons:** Lucide React
- **Micro-Interactions:** Custom theme engine (Dark / Light toggle with `localStorage` persistence), interactive confetti on form submission
- **SEO & Social Sharing:**
  - Semantic HTML5 headings and landmarks
  - Open Graph (`og:*`) & Twitter Cards
  - JSON-LD Schema.org `Person` structured data
  - `sitemap.xml` and `robots.txt`

---

## 📂 Project Structure

```text
Portifelio/
├── public/
│   ├── images/
│   │   └── mati-israel.jpg       # Profile photo
│   ├── cv.pdf                    # Downloadable CV / Resume
│   ├── favicon.svg               # Custom brand SVG favicon
│   ├── robots.txt                # Search engine crawler instructions
│   └── sitemap.xml               # Search engine index map
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navigation with theme toggle & mobile drawer
│   │   ├── Hero.jsx              # Hero with status pill, headline, photo & CTAs
│   │   ├── About.jsx             # Story, engineering principles, highlights & stats
│   │   ├── Skills.jsx            # Categorized technical toolkit (Frontend, Backend, DB, DevOps)
│   │   ├── Services.jsx          # 6 client & engineering service cards
│   │   ├── Projects.jsx          # AUWC Meal Scan & Blood Donation Platform
│   │   ├── Education.jsx         # Ambo University B.Sc. Computer Science timeline
│   │   ├── Certifications.jsx   # Verified practicum & placeholder for new certs
│   │   ├── Contact.jsx           # Form validation, direct WhatsApp, Telegram, email
│   │   └── Footer.jsx            # Footer with social links & back-to-top
│   ├── data/
│   │   └── portfolioData.js      # SINGLE SOURCE OF TRUTH (All your data lives here)
│   ├── styles/
│   │   └── index.css             # Unified CSS variables, dark/light themes & responsiveness
│   ├── App.jsx                   # Theme orchestrator & section container
│   └── main.jsx                  # React DOM mount point
├── package.json
└── vite.config.js
```

---

## ⚡ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MatiIsrael/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## ✏️ How to Customize Your Content

### 1. Update Personal Info, Projects, or Skills
Open `src/data/portfolioData.js`. All text, social links, project descriptions, and service details are stored here in clean JavaScript objects:
- To add a new project, add an entry to the `projects` array.
- To add a certificate, add an entry to the `certifications` array.
- To change phone numbers or social links, update `personal`.

### 2. Update Your Profile Photo
Replace the image at `public/images/mati-israel.jpg` with any new photo using the same filename (or change the path in `portfolioData.js`).

### 3. Update Your Downloadable CV
Replace `public/cv.pdf` with your updated resume PDF.

---

## 🌐 Deploy to Vercel (Recommended)

Because you already host **AUWC Meal Scan** and **Blood Donation** on Vercel, deploying this portfolio takes under 2 minutes:

### Option A: Via GitHub (Continuous Deployment)
1. Push this project to a new repository on your GitHub account (`https://github.com/MatiIsrael/portfolio`).
2. Log in to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Select your `portfolio` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Any future push to `main` will automatically build and publish updates!

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📄 License
MIT &copy; Mati Israel
