import { useState, useEffect, useRef, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  BookOpen,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Sun,
  Moon,
  ChevronDown,
  Globe,
  Star,
  Trophy,
  Calendar,
  TrendingUp,
  Users,
  Cpu,
  Building2,
  Gamepad2,
  Zap,
  Shield,
  Swords,
  Scroll,
  FlaskConical,
  BookMarked,
} from "lucide-react";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";
import { AIChatWidget } from "@/components/AIChatWidget";
import { BugCatcherGame } from "@/components/BugCatcherGame";

type Theme = "light" | "dark";

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("portfolio-theme-v2") as Theme) || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme-v2", theme);
  }, [theme]);

  return { theme, setTheme };
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Play", href: "#game" },
  { label: "Contact", href: "#contact" },
];

const experiences = [
  {
    company: "US-Bangla Group (Cartup Ltd.)",
    shortName: "Cartup",
    role: "Product Development Executive",
    period: "Aug 2025 – Present",
    location: "Dhaka, Bangladesh",
    link: "https://www.figma.com/design/lJF8vPfDUhgpEZlqR1VVvr/Cartup-Warehouse?m=dev&t=VlDZjrOGQYD259GC-1",
    category: "Product & SAAS",
    color: "sky",
    icon: Cpu,
    metrics: [
      { label: "WMS Modules Built", value: "8+", icon: TrendingUp },
      { label: "Sprint Cycles Led", value: "12+", icon: Users },
    ],
    highlights: [
      "Spearheaded end-to-end development of an enterprise Warehouse Management System (WMS)",
      "Designed comprehensive PRDs and SRS for User App and Web platforms",
      "Implemented smart category feature and 30-min order cancellation improving customer trust",
      "Led Agile sprints, backlog prioritization and cross-functional UAT workflows",
    ],
    tags: ["Product Management", "WMS", "Agile", "PRD/SRS", "UAT", "E-commerce"],
  },
  {
    company: "Zillanee Engineers and Construction",
    shortName: "ZEC",
    role: "Chief Technology Officer",
    period: "Sep 2024 – Present",
    location: "Dhaka, Bangladesh",
    link: "https://zecdbd.weebly.com/",
    category: "Technology Leadership",
    color: "red",
    icon: Building2,
    metrics: [
      { label: "ERP Modules Integrated", value: "SAP", icon: Cpu },
      { label: "ML Systems Deployed", value: "3+", icon: TrendingUp },
    ],
    highlights: [
      "Led end-to-end SAP ERP integration for project management and procurement",
      "Implemented ML-driven analytics for real-time project tracking and optimization",
      "Integrated AI and IoT to enhance construction workflows and disaster resilience",
    ],
    tags: ["CTO", "SAP ERP", "Machine Learning", "IoT", "AI Integration", "Data Analytics"],
  },
  {
    company: "Best Tuition Bangladesh",
    shortName: "BTB",
    role: "Business Analyst",
    period: "Jan 2025 – Aug 2025",
    location: "Dhaka, Bangladesh",
    link: "https://www.figma.com/design/WW6Oe7G7D23qVSqUMGpOB3/Best-Tuition-Bangladesh?node-id=0-1",
    category: "EdTech",
    color: "sky",
    icon: Users,
    metrics: [
      { label: "Engagement Boost", value: "15%", icon: TrendingUp },
      { label: "UAT Cycles", value: "5+", icon: Users },
    ],
    highlights: [
      "Defined BRDs, SRS, and user stories for an online learning platform",
      "Conducted user research to shape product roadmap, improving engagement by 15%",
      "Led UAT and performance reporting to support data-driven product decisions",
    ],
    tags: ["Business Analysis", "BRD", "User Research", "UAT", "EdTech", "UX"],
  },
  {
    company: "Huawei Technologies (Bangladesh) Ltd.",
    shortName: "Huawei",
    role: "Supply Chain Executive",
    period: "Dec 2023 – Sep 2024",
    location: "Dhaka, Bangladesh",
    link: "#",
    category: "Supply Chain & Data",
    color: "dark",
    icon: TrendingUp,
    metrics: [
      { label: "Delivery Delay Reduction", value: "20%", icon: TrendingUp },
      { label: "Forecasting Dashboards", value: "4+", icon: Cpu },
    ],
    highlights: [
      "Developed forecasting models and dashboards, reducing delivery delays by 20%",
      "Designed inventory mapping systems and supplier performance trackers",
      "Applied ML algorithms to optimize inventory management and demand forecasting",
    ],
    tags: ["Supply Chain", "ML Forecasting", "Python", "Data Analytics", "Inventory Optimization"],
  },
  {
    company: "Huawei Technologies (Bangladesh) Ltd.",
    shortName: "Huawei",
    role: "Intern Solution Architect",
    period: "Mar 2023 – Aug 2023",
    location: "Dhaka, Bangladesh",
    link: "#",
    category: "Cloud Architecture",
    color: "dark",
    icon: Cpu,
    metrics: [
      { label: "Cloud Architectures", value: "3+", icon: Cpu },
      { label: "Docs Created", value: "10+", icon: TrendingUp },
    ],
    highlights: [
      "Designed scalable cloud-based architectures integrating large datasets",
      "Contributed to technical specifications and architecture diagrams",
      "Assisted in deployment and optimization of cloud solutions",
    ],
    tags: ["Cloud Architecture", "GCP", "AWS", "Technical Docs", "Data Pipelines"],
  },
];

const projects = [
  {
    title: "Time Series Analysis of SPI",
    description: "Forecasting drought using ARIMA, SARIMA, and LSTM models on Standardized Precipitation Index data.",
    tags: ["Python", "ARIMA", "LSTM", "Time Series"],
    link: "https://github.com/hasnayen/Time-Series-Analysis-of-SPI-Standardized-Precipitation-Index-",
    category: "AI / ML",
    color: "sky",
  },
  {
    title: "To-Do List — Android App",
    description: "Multi-user task management application with Flutter and SQLite, featuring offline-first architecture.",
    tags: ["Flutter", "Dart", "SQLite", "Android"],
    link: "https://github.com/hasnayen/To-Do-List",
    category: "Mobile",
    color: "red",
  },
  {
    title: "E-Commerce Android App",
    description: "Full-featured e-commerce platform with Flutter and Firebase — product catalog, cart, real-time DB.",
    tags: ["Flutter", "Firebase", "Dart"],
    link: "https://github.com/hasnayen/uecom",
    category: "Mobile",
    color: "sky",
  },
  {
    title: "Cartup WMS (Figma + PRD)",
    description: "Enterprise-grade Warehouse Management System — full product lifecycle from PRD to UAT.",
    tags: ["Product Management", "Agile", "WMS"],
    link: "https://www.figma.com/design/lJF8vPfDUhgpEZlqR1VVvr/Cartup-Warehouse?m=dev",
    category: "Product",
    color: "dark",
  },
  {
    title: "Best Tuition Bangladesh",
    description: "EdTech platform with comprehensive BRD, SRS, and optimized user journeys.",
    tags: ["Business Analysis", "Figma", "EdTech"],
    link: "https://www.figma.com/design/WW6Oe7G7D23qVSqUMGpOB3/Best-Tuition-Bangladesh",
    category: "Product",
    color: "red",
  },
  {
    title: "Sketch → Photo (GAN Research)",
    description: "Bachelor's thesis — generating photorealistic images from hand-drawn sketches using GANs. Published at IEEE.",
    tags: ["GAN", "Deep Learning", "TensorFlow"],
    link: "https://dspace.bracu.ac.bd/xmlui/handle/10361/16818",
    category: "Research",
    color: "sky",
  },
];

const publications = [
  {
    title: "Enhancing Early Detection of Diabetic Retinopathy Through Deep Learning and Explainable AI",
    journal: "IEEE Access",
    reference: "vol. 12, pp. 73950–73969",
    year: "2024",
  },
  {
    title: "Generating Photorealistic Images from Human-Generated Sketches: A GAN-based Synthesis Approach",
    journal: "6th ICEEICT Conference",
    reference: "pp. 160–165",
    year: "2024",
  },
  {
    title: "Automated Sentiment Analysis for Stock & Cryptocurrency News with Transformer-Based Models",
    journal: "IEEE CSDE, Nadi, Fiji",
    reference: "pp. 1–6",
    year: "2023",
  },
  {
    title: "Multilingual Sentiment Analysis on Social Media for Enhanced Decision Support for Travelers",
    journal: "6th ICEEICT Conference",
    reference: "pp. 166–171",
    year: "2024",
  },
];

const skillCategories = [
  {
    category: "Product Management",
    icon: Briefcase,
    color: "sky",
    skills: ["PRD / SRS", "UAT", "Agile / Scrum", "Product Strategy", "Stakeholder Comms", "Backlog Prioritization"],
  },
  {
    category: "Data & Analytics",
    icon: TrendingUp,
    color: "red",
    skills: ["SQL", "Machine Learning", "Data Visualization", "Forecasting Models", "Time Series"],
  },
  {
    category: "Programming",
    icon: Code,
    color: "dark",
    skills: ["Python", "Flutter", "Dart", "Bash", "Web Scraping", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    icon: Globe,
    color: "sky",
    skills: ["Pendo", "Jira", "GitHub", "Firebase", "Power BI", "Tableau"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cpu,
    color: "red",
    skills: ["GCP", "AWS (Basics)", "Azure (Basics)", "Huawei Cloud", "CI/CD Awareness"],
  },
  {
    category: "AI Tools",
    icon: Star,
    color: "dark",
    skills: ["ChatGPT", "Notion AI", "Perplexity", "Claude", "Gemini", "Figma AI", "Canva AI"],
  },
];

const certifications = [
  { title: "Certified SQL Associate", issuer: "DataCamp", period: "Mar 2025 – Mar 2027", link: "https://www.datacamp.com/certificate/SQA0010977907566" },
  { title: "Associate Data Analyst", issuer: "DataCamp", period: "Sep 2024 – Sep 2026", link: "https://www.datacamp.com/certificate/DAA0015351231353" },
  { title: "Data Science & ML with Python", issuer: "OSTAD", period: "Jun – Nov 2024", link: "https://ostad.app/share/certificate/a19014-abu-hasnayen-zillanee" },
  { title: "Data Analysis with Python", issuer: "IBM / Coursera", period: "Mar 2023", link: "https://coursera.org/share/fd7e4ee8bd002544e04dccdfb1b68f82" },
  { title: "SQA: Manual & Automated Testing", issuer: "OSTAD", period: "2024", link: "#" },
  { title: "Android App Development (Flutter)", issuer: "Pencilbox / SEIP", period: "2023", link: "#" },
];

const education = [
  {
    degree: "BSc in Computer Science and Engineering",
    institution: "BRAC University",
    period: "2018 – 2022",
    gpa: "CGPA 3.67 / 4.00 — High Distinction",
    note: "Thesis: Generation of Realistic Images from Human Drawn Sketches using Deep Learning",
    link: "https://www.bracu.ac.bd/",
    awards: ["Dean's List (x2)", "Vice Chancellor's List (x4)"],
  },
  {
    degree: "HSC (Science)",
    institution: "Dhaka City College",
    period: "2015 – 2017",
    gpa: "GPA 4.92 / 5.00",
    link: "https://www.dhakacitycollege.edu.bd/",
  },
];

function colorClass(color: string, type: "bg" | "text" | "border" | "glow") {
  if (color === "sky") {
    if (type === "bg") return "bg-primary/10";
    if (type === "text") return "text-primary";
    if (type === "border") return "border-primary/30";
    if (type === "glow") return "shadow-[0_0_20px_hsl(199_89%_52%/0.2)]";
  }
  if (color === "red") {
    if (type === "bg") return "bg-destructive/10";
    if (type === "text") return "text-destructive";
    if (type === "border") return "border-destructive/30";
    if (type === "glow") return "shadow-[0_0_20px_hsl(0_80%_52%/0.2)]";
  }
  if (type === "bg") return "bg-muted";
  if (type === "text") return "text-foreground";
  if (type === "border") return "border-border";
  if (type === "glow") return "";
  return "";
}

const XP_PER_LEVEL = [0, 100, 250, 500, 900, 1400];
const MAX_LEVEL = 5;

const SECTION_ACHIEVEMENTS_MAP: Record<string, {title: string; desc: string; icon: string; xp: number}> = {
  about:       { title: "PLAYER FOUND",     desc: "You discovered Abu's profile.",         icon: "🎮", xp: 50  },
  experience:  { title: "QUEST LOG OPENED", desc: "Mission history unlocked.",              icon: "📜", xp: 75  },
  projects:    { title: "INVENTORY ACCESS", desc: "Project vault opened.",                  icon: "🗝️", xp: 75  },
  publications:{ title: "CODEX UNLOCKED",  desc: "Research scrolls discovered.",            icon: "📚", xp: 100 },
  skills:      { title: "SKILL TREE VIEW",  desc: "Ability matrix loaded.",                 icon: "⚡", xp: 75  },
  education:   { title: "ARCHIVES OPEN",    desc: "Academic history revealed.",              icon: "🎓", xp: 75  },
  game:        { title: "MINI-GAME FOUND",  desc: "Secret game area discovered! +bonus XP", icon: "🕹️", xp: 150 },
  contact:     { title: "CHANNEL OPEN",     desc: "Communication link established.",        icon: "📡", xp: 100 },
};

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("about");

  // ── GAME STATE ──
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set());
  const [unlockedAchievements, setUnlockedAchievements] = useState<Set<string>>(new Set());
  const [activeAchievement, setActiveAchievement] = useState<{title: string; desc: string; icon: string} | null>(null);
  const [achievementLeaving, setAchievementLeaving] = useState(false);
  const [xpPopups, setXpPopups] = useState<{id: number; amount: number}[]>([]);
  const [levelAnimating, setLevelAnimating] = useState(false);
  const xpPopupId = useRef(0);

  const computeLevel = useCallback((totalXp: number) => {
    for (let l = MAX_LEVEL; l >= 1; l--) {
      if (totalXp >= XP_PER_LEVEL[l - 1]) return l;
    }
    return 1;
  }, []);

  const xpForNextLevel = (lvl: number) => XP_PER_LEVEL[Math.min(lvl, MAX_LEVEL)] ?? XP_PER_LEVEL[MAX_LEVEL - 1];
  const xpProgress = (lvl: number, totalXp: number) => {
    const base = XP_PER_LEVEL[lvl - 1] ?? 0;
    const next = xpForNextLevel(lvl);
    if (next <= base) return 100;
    return Math.min(100, ((totalXp - base) / (next - base)) * 100);
  };

  const showAchievement = useCallback((title: string, desc: string, icon: string) => {
    setAchievementLeaving(false);
    setActiveAchievement({ title, desc, icon });
    setTimeout(() => {
      setAchievementLeaving(true);
      setTimeout(() => setActiveAchievement(null), 350);
    }, 3200);
  }, []);

  const gainXp = useCallback((amount: number) => {
    setXp((prev) => {
      const next = prev + amount;
      const newLevel = computeLevel(next);
      setLevel((prevLevel) => {
        if (newLevel > prevLevel) {
          setLevelAnimating(true);
          setTimeout(() => setLevelAnimating(false), 700);
          showAchievement(`LEVEL UP! → LVL ${newLevel}`, "New rank achieved. Keep exploring!", "⬆️");
        }
        return newLevel;
      });
      return next;
    });
    const id = ++xpPopupId.current;
    setXpPopups((p) => [...p, { id, amount }]);
    setTimeout(() => setXpPopups((p) => p.filter((x) => x.id !== id)), 1500);
  }, [computeLevel, showAchievement]);

  const unlockAchievement = useCallback((key: string, title: string, desc: string, icon: string, xpReward: number) => {
    setUnlockedAchievements((prev) => {
      if (prev.has(key)) return prev;
      const next = new Set(prev);
      next.add(key);
      showAchievement(title, desc, icon);
      gainXp(xpReward);
      return next;
    });
  }, [showAchievement, gainXp]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            setVisitedSections((prev) => {
              if (!prev.has(id)) {
                const ach = SECTION_ACHIEVEMENTS_MAP[id];
                if (ach) unlockAchievement(id, ach.title, ach.desc, ach.icon, ach.xp);
                const next = new Set(prev);
                next.add(id);
                return next;
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: "-80px 0px 0px 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [unlockAchievement]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ─── Achievement Popup ─── */}
      {activeAchievement && (
        <div className={`fixed top-20 right-4 z-[100] max-w-xs ${achievementLeaving ? "achievement-out" : "achievement-in"}`}>
          <div className="game-card bg-card rounded-xl p-4 flex items-start gap-3 shadow-2xl">
            <div className="text-2xl flex-shrink-0">{activeAchievement.icon}</div>
            <div>
              <p className="text-[10px] font-mono text-primary tracking-widest uppercase mb-0.5">Achievement Unlocked</p>
              <p className="font-mono font-bold text-sm text-foreground">{activeAchievement.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{activeAchievement.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* ─── XP Float Popups ─── */}
      <div className="fixed bottom-24 right-6 z-[100] pointer-events-none space-y-1">
        {xpPopups.map((p) => (
          <div key={p.id} className="xp-float text-right">
            <span className="font-mono font-bold text-primary text-sm neon-text">+{p.amount} XP</span>
          </div>
        ))}
      </div>

      {/* ─── Nav ─── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        {/* XP progress strip */}
        <div className="h-0.5 w-full bg-border/40">
          <div className="xp-bar-fill h-full" style={{ width: `${xpProgress(level, xp)}%` }} />
        </div>
        <nav className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between gap-3">
          {/* Logo + level badge */}
          <button
            data-testid="nav-logo"
            onClick={() => scrollTo("#about")}
            className="font-serif font-bold text-lg flex-shrink-0 flex items-center gap-2"
          >
            <span className="sky-gradient neon-text">AHZ</span>
            <span className={`font-mono text-[10px] bg-primary/20 text-primary border border-primary/30 px-1.5 py-0.5 rounded ${levelAnimating ? "level-up-animate" : ""}`}>
              LVL {level}
            </span>
          </button>

          {/* Links */}
          <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-hide flex-1 justify-center">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                data-testid={`nav-link-${label.toLowerCase()}`}
                onClick={() => scrollTo(href)}
                className={`px-2.5 py-1 text-xs font-mono font-medium whitespace-nowrap transition-colors relative flex-shrink-0 rounded ${
                  activeSection === href.slice(1)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {visitedSections.has(href.slice(1)) && (
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-primary" />
                )}
                {label}
              </button>
            ))}
          </div>

          {/* Right — XP total + theme */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="hidden sm:flex items-center gap-1 font-mono text-xs text-primary">
              <Zap className="w-3 h-3" />{xp} XP
            </span>
            <Button
              data-testid="button-theme-toggle"
              size="icon"
              variant="ghost"
              className="w-7 h-7"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* ─── HERO / PLAYER CARD ─── */}
        <section id="about" className="relative min-h-screen overflow-hidden flex items-center pt-14">
          {/* Ambient glow bg */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-red-500/4 blur-2xl" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left — terminal intro */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase flex items-center gap-2">
                    <span className="w-4 h-px bg-primary inline-block" />
                    PLAYER_PROFILE.exe
                    <span className="cursor-blink text-primary">█</span>
                  </p>
                  <h1
                    data-testid="hero-name"
                    className="font-serif font-bold leading-none text-7xl md:text-8xl lg:text-9xl neon-text"
                  >
                    <span className="text-foreground">Hello</span>
                  </h1>
                  <div data-testid="hero-greeting" className="terminal-line space-y-1">
                    <p className="font-mono text-sm text-foreground">Abu Hasnayen Zillanee</p>
                    <p className="font-mono text-xs text-muted-foreground">Product Executive · AI Engineer · Researcher</p>
                    <p className="font-mono text-xs text-muted-foreground">📍 Dhaka, Bangladesh</p>
                  </div>
                </div>

                {/* Stat grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "+3", label: "Years Experience", icon: "⚔️" },
                    { value: "4",  label: "Publications",      icon: "📚" },
                    { value: "6",  label: "Projects Built",    icon: "🏗️" },
                    { value: "3.67", label: "CGPA / 4.00",    icon: "🎓" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      data-testid={`stat-${stat.label.replace(/\s+/g, "-").toLowerCase()}`}
                      className="game-card bg-card/60 rounded-xl p-4 space-y-1"
                    >
                      <p className="text-lg">{stat.icon}</p>
                      <p className="font-mono font-bold text-2xl text-primary">{stat.value}</p>
                      <p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    data-testid="hero-cta-quest"
                    onClick={() => scrollTo("#experience")}
                    className="font-mono text-xs gap-2"
                  >
                    <Scroll className="w-3.5 h-3.5" />
                    VIEW QUEST LOG
                  </Button>
                  <Button
                    data-testid="hero-cta-contact"
                    variant="outline"
                    onClick={() => scrollTo("#contact")}
                    className="font-mono text-xs gap-2 game-card"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    OPEN CHANNEL
                  </Button>
                </div>
              </div>

              {/* Right — player card / character sheet */}
              <div className="game-card bg-card/60 rounded-2xl p-6 space-y-6 relative overflow-hidden">
                {/* Card corner decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-tr-full" />

                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-mono text-[10px] text-primary tracking-widest uppercase">Character Sheet</p>
                    <p className="font-mono font-bold text-xl mt-1">Product Dev Executive</p>
                    <p className="font-mono text-xs text-muted-foreground">Class: Full-Stack · AI · Strategy</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="font-mono text-xs bg-primary/20 text-primary border border-primary/30 px-2 py-1 rounded">
                      LVL {level} PLAYER
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">{xp} / {xpForNextLevel(level)} XP</span>
                  </div>
                </div>

                {/* Attribute bars */}
                <div className="space-y-3">
                  {[
                    { label: "INTELLIGENCE",   short: "INT", val: 92, color: "primary" },
                    { label: "CREATIVITY",     short: "CRE", val: 88, color: "primary" },
                    { label: "LEADERSHIP",     short: "LEAD", val: 85, color: "primary" },
                    { label: "BUILD SPEED",    short: "DEX", val: 90, color: "primary" },
                    { label: "RESEARCH",       short: "WIS", val: 95, color: "primary" },
                  ].map((attr) => (
                    <div key={attr.short} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[10px] text-muted-foreground tracking-widest">{attr.label}</span>
                        <span className="font-mono text-[10px] text-primary font-bold">{attr.val}/100</span>
                      </div>
                      <div className="h-1.5 bg-border/40 rounded-full overflow-hidden">
                        <div className="stat-bar-fill h-full rounded-full" style={{ width: `${attr.val}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Equipped skills badges */}
                <div>
                  <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-2">Equipped Skills</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["AI/ML", "Product", "React", "Python", "LLMs", "Strategy", "Research"].map((sk) => (
                      <span key={sk} className="font-mono text-[10px] bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3 pt-1 border-t border-border/40">
                  <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">Links</p>
                  {[
                    { icon: <SiLinkedin className="w-4 h-4" />, href: "https://linkedin.com/in/abuhasnayen", label: "linkedin" },
                    { icon: <SiGithub className="w-4 h-4" />, href: "https://github.com/zillanee", label: "github" },
                    { icon: <SiLeetcode className="w-4 h-4" />, href: "https://leetcode.com/u/azillanee/", label: "leetcode" },
                    { icon: <Globe className="w-4 h-4" />, href: "https://scholar.google.com/citations?user=abuhasnayen", label: "scholar" },
                  ].map(({ icon, href, label }) => (
                    <a
                      key={label}
                      data-testid={`social-${label}`}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => gainXp(10)}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
            <button
              data-testid="scroll-down"
              onClick={() => scrollTo("#experience")}
              className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1.5"
            >
              <span className="text-[10px] tracking-widest uppercase font-mono">Scroll to explore</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </section>

        {/* ─── PLAYER BIO ─── */}
        <section className="py-12 border-y border-border bg-card/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div
                data-testid="hero-summary"
                className="md:col-span-2 game-card bg-card/40 rounded-xl p-5 space-y-3"
              >
                <p className="font-mono text-[10px] text-primary tracking-widest uppercase">// PLAYER BIO</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Passionate about AI-driven solutions, end-to-end product lifecycle management,
                  and transforming complex business requirements into scalable products. Built
                  enterprise SaaS, EdTech platforms, supply chain tools, and construction tech.
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-1.5 pt-1">
                  {[
                    { icon: MapPin, text: "Dhaka, Bangladesh" },
                    { icon: Mail, text: "hasnayen3072@gmail.com" },
                    { icon: Phone, text: "+880 1841343493" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Icon className="w-3 h-3 text-primary flex-shrink-0" />
                      <span className="font-mono">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="game-card bg-card/40 rounded-xl p-5 space-y-3">
                <p className="font-mono text-[10px] text-primary tracking-widest uppercase">// QUICK ACTIONS</p>
                <div className="space-y-2">
                  <Button data-testid="button-contact" onClick={() => scrollTo("#contact")} className="w-full font-mono text-xs gap-2 justify-start">
                    <Mail className="w-3.5 h-3.5" />Send Message +30 XP
                  </Button>
                  <Button data-testid="button-projects" variant="outline" onClick={() => scrollTo("#projects")} className="w-full font-mono text-xs gap-2 justify-start game-card">
                    <Code className="w-3.5 h-3.5" />Open Inventory +25 XP
                  </Button>
                  <Button variant="outline" onClick={() => scrollTo("#game")} className="w-full font-mono text-xs gap-2 justify-start game-card">
                    <Gamepad2 className="w-3.5 h-3.5" />Play Mini-Game +75 XP
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ─── EXPERIENCE ─── */}
        <section id="experience" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              label="📜 Quest Log"
              title="Professional Experience"
              description="Mission history: From product strategy to cloud architecture — spanning enterprise SaaS, EdTech, supply chain, and construction tech."
            />

            <div className="mt-16 space-y-6">
              {experiences.map((exp, i) => {
                const Icon = exp.icon;
                return (
                  <div
                    key={i}
                    data-testid={`experience-${i}`}
                    className="rounded-2xl border border-primary/20 bg-card exp-card-glow"
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-5">
                        {/* Company icon */}
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-xl font-serif font-bold border ${
                            exp.color === "sky"
                              ? "bg-primary/10 border-primary/20 text-primary"
                              : exp.color === "red"
                              ? "bg-destructive/10 border-destructive/20 text-destructive"
                              : "bg-muted border-border text-foreground"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div>
                              <h3 className="font-serif font-semibold text-lg leading-tight">{exp.role}</h3>
                              <div className="flex items-center gap-2 mt-1 flex-wrap">
                                <span
                                  className={`font-medium text-sm ${
                                    exp.color === "sky"
                                      ? "text-primary"
                                      : exp.color === "red"
                                      ? "text-destructive"
                                      : "text-foreground"
                                  }`}
                                >
                                  {exp.company}
                                </span>
                                {exp.link !== "#" && (
                                  <a
                                    href={exp.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                  >
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                                <Badge variant="outline" className="text-xs">{exp.category}</Badge>
                              </div>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Calendar className="w-3 h-3" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5 justify-end">
                                <MapPin className="w-3 h-3" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Metrics row */}
                          <div className="flex flex-wrap gap-4 mt-4">
                            {exp.metrics.map((m, mi) => (
                              <div
                                key={mi}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${
                                  exp.color === "sky"
                                    ? "bg-primary/8 text-primary"
                                    : exp.color === "red"
                                    ? "bg-destructive/8 text-destructive"
                                    : "bg-muted text-foreground"
                                }`}
                              >
                                <m.icon className="w-3.5 h-3.5" />
                                <span className="font-bold">{m.value}</span>
                                <span className="text-xs opacity-70">{m.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Always-visible details */}
                      <div className="mt-6 space-y-4">
                        <div className="border-t border-border/50 pt-4">
                          <ul className="space-y-2.5">
                            {exp.highlights.map((h, j) => (
                              <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                                <span
                                  className={`flex-shrink-0 mt-1 font-bold ${
                                    exp.color === "sky"
                                      ? "text-primary"
                                      : exp.color === "red"
                                      ? "text-destructive"
                                      : "text-foreground"
                                  }`}
                                >
                                  ▸
                                </span>
                                <span className="leading-relaxed">{h}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-border/50">
                            {exp.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ─── PROJECTS ─── */}
        <section id="projects" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              label="🗝️ Inventory"
              title="Featured Projects"
              description="Project vault: AI/ML systems, mobile apps, and enterprise products built from zero to production."
            />

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project, i) => (
                <a
                  key={i}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`project-card-${i}`}
                  onClick={() => gainXp(25)}
                  className={`group hover-elevate block rounded-xl border p-5 bg-card transition-all duration-200 ${
                    colorClass(project.color, "border")
                  } hover:${colorClass(project.color, "border")}`}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <Badge
                      variant="outline"
                      className={`text-xs ${colorClass(project.color, "text")} ${colorClass(project.color, "border")}`}
                    >
                      {project.category}
                    </Badge>
                    <ExternalLink className={`w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${colorClass(project.color, "text")}`} />
                  </div>
                  <h3 className="font-serif font-semibold text-base leading-snug mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button variant="outline" asChild>
                <a href="https://github.com/hasnayen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <SiGithub className="w-4 h-4" />
                  All Projects on GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ─── PUBLICATIONS ─── */}
        <section id="publications" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              label="📚 Research Codex"
              title="Publications"
              description="Peer-reviewed scrolls: Deep learning, computer vision, NLP, and AI for healthcare and finance."
            />

            <div className="mt-16 grid md:grid-cols-2 gap-4">
              {publications.map((pub, i) => (
                <div
                  key={i}
                  data-testid={`publication-${i}`}
                  onClick={() => gainXp(20)}
                  className="hover-elevate rounded-xl border border-card-border bg-card p-6 cursor-pointer"
                >
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-sm leading-snug mb-2">{pub.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <span className="text-primary font-medium">{pub.journal}</span>
                        <span>·</span>
                        <span>{pub.reference}</span>
                        <Badge variant="outline" className="text-xs ml-auto">{pub.year}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ─── SKILLS ─── */}
        <section id="skills" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              label="⚡ Skill Tree"
              title="Skills & Technologies"
              description="Ability matrix: Product, data science, cloud infrastructure, and AI-powered tools."
            />

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {skillCategories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <div key={i} data-testid={`skill-category-${i}`} className="hover-elevate">
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0 ${colorClass(cat.color, "bg")}`}>
                            <Icon className={`w-4 h-4 ${colorClass(cat.color, "text")}`} />
                          </div>
                          <h3 className="font-serif font-semibold">{cat.category}</h3>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.skills.map((skill) => (
                            <Badge
                              key={skill}
                              data-testid={`skill-badge-${skill.replace(/\s+/g, "-").toLowerCase()}`}
                              variant="secondary"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ─── EDUCATION ─── */}
        <section id="education" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              label="🎓 Level History"
              title="Education"
              description="Academic archives: Distinguished record with research publications and multiple honor recognitions."
            />

            <div className="mt-16 grid md:grid-cols-2 gap-6 mb-14">
              {education.map((edu, i) => (
                <div key={i} data-testid={`education-${i}`} className="hover-elevate">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex gap-4 mb-4">
                        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-serif font-semibold leading-snug">{edu.degree}</h3>
                          <a
                            href={edu.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline flex items-center gap-1 mt-0.5"
                          >
                            {edu.institution}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="w-3.5 h-3.5 text-primary" />
                          <span className="font-medium">{edu.gpa}</span>
                        </div>
                        {edu.note && (
                          <p className="text-xs text-muted-foreground leading-relaxed mt-2 pl-5">{edu.note}</p>
                        )}
                        {edu.awards && (
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {edu.awards.map((a) => (
                              <Badge key={a} variant="outline" className="text-xs gap-1">
                                <Trophy className="w-2.5 h-2.5" />
                                {a}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <h3 className="font-serif text-2xl font-semibold mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                <Award className="w-4 h-4 text-primary" />
              </div>
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <a
                  key={i}
                  href={cert.link !== "#" ? cert.link : undefined}
                  target={cert.link !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-testid={`certification-${i}`}
                  className="hover-elevate block"
                >
                  <Card className="h-full">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h4 className="font-medium text-sm leading-snug">{cert.title}</h4>
                        {cert.link !== "#" && <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0 mt-0.5" />}
                      </div>
                      <p className="text-primary text-xs font-medium">{cert.issuer}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{cert.period}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ─── HONORS & LEADERSHIP ─── */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-primary" />
                  Honours & Awards
                </h2>
                <div className="space-y-3">
                  {[
                    { title: "Dean's List", org: "BRAC University", detail: "Awarded twice for academic excellence" },
                    { title: "Vice Chancellor's List", org: "BRAC University", detail: "Recognized four times for outstanding performance" },
                    { title: "1st Runner Up — Expression Art", org: "BRAC University", detail: "Art competition on Life & Vision of Sir Fazle Hasan Abed" },
                    { title: "1st Prize — Science Fair", org: "Inter-school Competition 2011", detail: '"Flood Alarm" — Early warning system for floods' },
                  ].map((award, i) => (
                    <div key={i} data-testid={`award-${i}`} className="flex gap-4 p-4 rounded-xl bg-card border border-card-border">
                      <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                        <Star className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{award.title}</h4>
                        <p className="text-primary text-xs mt-0.5">{award.org}</p>
                        <p className="text-muted-foreground text-xs mt-0.5">{award.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-destructive" />
                  Leadership & Volunteering
                </h2>
                <div className="space-y-3">
                  {[
                    { title: "Creative Designer", org: "BRACU Express", period: "2018 – 2022", detail: "Led design team, mentored junior designers." },
                    { title: "Executive", org: "BRACU Adventure Club", period: "2018 – 2020", detail: "Organized hiking, camping, outdoor events." },
                    { title: "Event Planner", org: "BRACU Robotics Club", period: "2018 – 2022", detail: "Coordinated robotics events and competitions." },
                    { title: "Member", org: "Lalbagh Open Scout", period: "2019 – Present", detail: "Community support, COVID-19 pandemic relief." },
                  ].map((item, i) => (
                    <div key={i} data-testid={`leadership-${i}`} className="flex gap-4 p-4 rounded-xl bg-card border border-card-border">
                      <div className="w-8 h-8 rounded-full bg-destructive/15 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-3.5 h-3.5 text-destructive" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{item.title}</h4>
                        <p className="text-destructive text-xs mt-0.5">{item.org}</p>
                        <p className="text-muted-foreground text-xs mt-0.5">{item.period} · {item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ─── GAME ─── */}
        <section id="game" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              label="🕹️ Secret Area"
              title="Mini-Game"
              description="You found the secret zone! Catch bugs, earn real XP. Different bugs score differently."
            />
            <div className="mt-12 max-w-2xl">
              <div className="flex items-center gap-2 mb-5">
                <Gamepad2 className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground font-mono">Bug Catcher — 30 Second Challenge</span>
              </div>
              <BugCatcherGame onXpGain={gainXp} />
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ─── CONTACT ─── */}
        <section id="contact" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              label="📡 Comms Channel"
              title="Contact"
              description="Communication link established. Open to new missions, collaborations, and conversations about product, AI, and technology."
            />

            <div className="mt-16 grid md:grid-cols-2 gap-4 max-w-3xl">
              {[
                { icon: Mail, label: "Email", value: "hasnayen3072@gmail.com", href: "mailto:hasnayen3072@gmail.com", color: "sky" },
                { icon: Phone, label: "Phone", value: "+880 1841343493", href: "tel:+8801841343493", color: "red" },
                { icon: SiLinkedin, label: "LinkedIn", value: "abu-hasnayen-zillanee", href: "https://www.linkedin.com/in/abu-hasnayen-zillanee-7543a11a5/", color: "sky" },
                { icon: SiGithub, label: "GitHub", value: "hasnayen", href: "https://github.com/hasnayen", color: "dark" },
                { icon: Globe, label: "Website", value: "abuhasnayenzillanee.wixsite.com", href: "https://abuhasnayenzillanee.wixsite.com/abuhanayenzillanee", color: "sky" },
                { icon: MapPin, label: "Location", value: "Lalbagh, Dhaka 1211, Bangladesh", href: "https://maps.google.com/?q=Lalbagh,Dhaka,Bangladesh", color: "red" },
              ].map((contact, i) => (
                <a
                  key={i}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-testid={`contact-${contact.label.toLowerCase()}`}
                  className={`hover-elevate flex items-center gap-4 p-5 rounded-xl bg-card border ${colorClass(contact.color, "border")}`}
                >
                  <div className={`w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 ${colorClass(contact.color, "bg")}`}>
                    <contact.icon className={`w-4 h-4 ${colorClass(contact.color, "text")}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono">{contact.label}</p>
                    <p className="text-sm font-medium mt-0.5 truncate">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-serif font-semibold">Abu Hasnayen Zillanee</p>
            <p className="text-xs text-muted-foreground mt-1">Product Executive · Engineer · Researcher · Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center gap-4">
            {[
              { icon: SiGithub, href: "https://github.com/hasnayen" },
              { icon: SiLinkedin, href: "https://www.linkedin.com/in/abu-hasnayen-zillanee-7543a11a5/" },
              { icon: Mail, href: "mailto:hasnayen3072@gmail.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">{new Date().getFullYear()} · All rights reserved</p>
        </div>
      </footer>

      {/* AI Chat Widget */}
      <AIChatWidget />
    </div>
  );
}

function SectionHeader({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <div className="space-y-4 max-w-2xl">
      <p className="text-xs font-mono tracking-[0.25em] uppercase text-primary flex items-center gap-2">
        <span className="w-3 h-px bg-primary inline-block" />
        {label}
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-bold">{title}</h2>
      <div className="h-0.5 w-16 bg-primary rounded-full" style={{ boxShadow: "0 0 8px hsl(199 89% 52% / 0.6)" }} />
      <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
    </div>
  );
}
