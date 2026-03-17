import "./index.css";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiZap,
  FiBriefcase,
  FiTrendingUp,
  FiMail,
  FiUser,
  FiCode,
  FiGlobe,
  FiCheckCircle,
  FiLayout,
  FiSmartphone,
  FiDatabase,
  FiMenu,
  FiX,
  FiLinkedin,
  FiMonitor,
} from "react-icons/fi";

const projects = [
  {
    title: "Stripe King",
    category: "Premium Footwear Platform",
    description:
      "A modern full-stack footwear platform with authentication, scalable backend architecture, curated storefront design, and a polished shopping experience.",
    image: "/aaa.png",
    live: "https://stripe-king.vercel.app/",
    code: "https://github.com/UmairShah-coder/stripeKing.git",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "TypeScript",
      "JWT",
      "Tailwind CSS",
    ],
    status: "In Progress (Backend APIs not connected)",
    number: "02",
    role: "Full Stack Development • MERN Architecture",
    highlights: [
      "Authentication and protected routes",
      "Scalable MERN-based structure",
      "Product-oriented storefront experience",
    ],
  },
  {
    title: "Time Sphere",
    category: "Luxury Watch E-Commerce",
    description:
      "A premium e-commerce experience focused on elegant product presentation, responsive design, seamless browsing, and a refined visual system for a luxury digital brand.",
    image: "/time.png",
    live: "https://watches-app-eta.vercel.app/",
    code: "https://github.com/UmairShah-coder/watches-app.git",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    status: "Live",
    number: "01",
    role: "Frontend Development • UI Implementation",
    highlights: [
      "Luxury-inspired premium interface",
      "Responsive product showcase experience",
      "Clean layout and strong visual hierarchy",
    ],
  },
  
];

const stats = [
  {
    label: "Projects Built",
    value: "02+",
    icon: <FiBriefcase />,
  },
  {
    label: "Specialization",
    value: "Frontend & Full Stack",
    icon: <FiCode />,
  },
  {
    label: "Development Style",
    value: "Modern • Clean • Scalable",
    icon: <FiTrendingUp />,
  },
];

const services = [
  {
    icon: <FiLayout />,
    title: "Frontend Development",
    text: "Modern, polished, and responsive interfaces built with strong structure, clean components, and premium UI quality.",
  },
  {
    icon: <FiSmartphone />,
    title: "Responsive Design",
    text: "Layouts optimized for desktop, tablet, and mobile to deliver a consistent and professional user experience.",
  },
  {
    icon: <FiDatabase />,
    title: "Full Stack Solutions",
    text: "Complete web solutions with frontend, backend, authentication, database integration, and scalable architecture.",
  },
  {
    icon: <FiMonitor />,
    title: "Landing Pages & Portfolios",
    text: "High-converting personal brands, business websites, and professional landing pages with refined presentation.",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-150px] top-[-100px] h-[440px] w-[440px] rounded-full bg-fuchsia-700/15 blur-[160px]" />
        <div className="absolute right-[-110px] top-[8%] h-[360px] w-[360px] rounded-full bg-violet-700/15 blur-[150px]" />
        <div className="absolute bottom-[-150px] left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-purple-700/15 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.06]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <a
            href="#home"
            className="text-sm font-bold uppercase tracking-[0.32em] text-white"
          >
            Umair Shah
          </a>

          <nav className="hidden items-center gap-8 uppercase md:flex">
            <a href="#services" className="text-sm text-zinc-300 transition hover:text-white">
              Services
            </a>
            <a href="#projects" className="text-sm text-zinc-300 transition hover:text-white">
              Projects
            </a>
            <a href="#about" className="text-sm text-zinc-300 transition hover:text-white">
              About
            </a>
            <a href="#contact" className="text-sm text-zinc-300 transition hover:text-white">
              Contact
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://www.linkedin.com/in/umair-shah-8b5b473aa/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white transition hover:border-blue-400/30 hover:bg-white/[0.08]"
            >
              LinkedIn
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/UmairShah-coder"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white transition hover:border-purple-400/30 hover:bg-purple-500/10"
            >
              GitHub
              <FiGithub />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white md:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black/80 px-5 py-5 backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#services" onClick={() => setMenuOpen(false)} className="text-sm text-zinc-300">
                Services
              </a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="text-sm text-zinc-300">
                Projects
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm text-zinc-300">
                About
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm text-zinc-300">
                Contact
              </a>
              <a
                href="https://www.linkedin.com/in/umair-shah-8b5b473aa/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-300"
              >
                LinkedIn <FiLinkedin />
              </a>
              <a
                href="https://github.com/UmairShah-coder"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-300"
              >
                GitHub <FiGithub />
              </a>
            </div>
          </div>
        )}
      </header>

      <main
        id="home"
        className="mx-auto max-w-7xl px-5 py-10 md:px-8 lg:px-12 lg:py-16"
      >
        {/* Hero */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_20px_90px_rgba(0,0,0,0.50)] backdrop-blur-2xl md:p-10 lg:p-14"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(217,70,239,0.08),transparent_26%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/80 to-transparent" />

          <div className="relative grid gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div>
              <motion.div
                variants={fadeUp}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium tracking-wide text-purple-300 backdrop-blur-xl"
              >
                <FiLayers className="text-purple-400" />
                Frontend Developer • React • Full Stack Builder
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mb-4 text-[11px] font-semibold uppercase tracking-[0.38em] text-zinc-500"
              >
                Modern Developer Portfolio
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="max-w-5xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.07em] text-white md:text-6xl xl:text-7xl"
              >
                Crafting Premium
                <span className="mt-2 block bg-gradient-to-r from-white via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
                  Web Experiences
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base md:leading-8"
              >
                I build modern, responsive, and product-focused web applications
                with clean UI, smooth user experience, and scalable development
                practices for brands, startups, and businesses.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_45px_rgba(168,85,247,0.35)] transition duration-300 hover:scale-[1.03]"
                >
                  View Projects
                  <FiArrowUpRight />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-purple-400/30 hover:bg-purple-500/10"
                >
                  Hire Me
                  <FiMail />
                </a>
              </motion.div>
            </div>

            <motion.div variants={container} className="grid gap-4">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="rounded-[26px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_10px_50px_rgba(168,85,247,0.10)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-300">
                    {item.icon}
                  </div>
                  <p className="text-xs text-zinc-400">{item.label}</p>
                  <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                    {item.value}
                  </h3>
                </motion.div>
              ))}

              <motion.div
                variants={fadeUp}
                className="rounded-[26px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-2xl"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                  Professional Focus
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Clean interfaces, premium presentation, and practical
                  engineering that makes products feel trustworthy and modern.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services */}
        <section id="services" className="mt-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <motion.div variants={fadeUp}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.05em] text-white md:text-5xl">
                What I Do
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-sm leading-7 text-zinc-400"
            >
              I help transform ideas into polished digital products with strong
              UI, responsive development, and scalable web architecture.
            </motion.p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="rounded-[28px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/25 hover:bg-white/[0.06]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-300">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <motion.div variants={fadeUp}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
                Selected Work
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.05em] text-white md:text-5xl">
                Featured Projects
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-sm leading-7 text-zinc-400"
            >
              A curated collection of frontend and full-stack builds with clean
              design execution, maintainable structure, and product thinking.
            </motion.p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => {
              const reverse = index % 2 !== 0;

              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-[0_20px_90px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-400/30 hover:shadow-[0_30px_120px_rgba(168,85,247,0.14)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent opacity-80" />

                  <div
                    className={`grid items-stretch lg:grid-cols-2 ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="mt-32 h-[290px] w-[600px] object-cover transition duration-700 group-hover:scale-105 md:h-[430px] lg:h-[300px]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10),transparent_30%,rgba(0,0,0,0.45))]" />

                      <div className="absolute left-4 top-4 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-300 backdrop-blur-xl">
                          {project.category}
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.32em] text-zinc-300">
                            Case Study
                          </p>
                          <h2 className="mt-2 text-2xl font-extrabold text-white md:text-3xl">
                            {project.title}
                          </h2>
                        </div>

                        <div className="hidden rounded-2xl border border-white/10 bg-black/40 px-4 py-2 text-base font-bold text-white/80 backdrop-blur-md md:block">
                          {project.number}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative flex flex-col justify-between p-6 md:p-8 lg:p-10">
                      <div>
                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-xs text-zinc-300">
                            <FiZap className="text-purple-400" />
                            Product-Oriented Build
                          </div>

                          <span
                            className={`rounded-full border px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] ${
                              project.status === "Live"
                                ? "border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-300"
                                : "border-violet-400/20 bg-red-500/30 text-red-400"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>

                        <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">
                          {project.role}
                        </h3>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300">
                          {project.description}
                        </p>

                        <div className="mt-7 grid gap-3">
                          {project.highlights.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                            >
                              <div className="mt-0.5 text-purple-300">
                                <FiCheckCircle />
                              </div>
                              <p className="text-sm text-zinc-300">{item}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                            Technology Stack
                          </p>

                          <div className="flex flex-wrap gap-2.5">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-xs font-medium text-zinc-200 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-10">
                        <div className="flex flex-wrap gap-3">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(168,85,247,0.28)] transition duration-300 hover:scale-[1.03]"
                          >
                            Live Demo
                            <FiExternalLink />
                          </a>

                          <a
                            href={project.code}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-purple-400/30 hover:bg-purple-500/10"
                          >
                            View Code
                            <FiGithub />
                          </a>
                        </div>

                        <div className="mt-7 flex items-center gap-2 text-xs text-zinc-500">
                          <span className="h-px w-14 bg-gradient-to-r from-purple-500 to-transparent" />
                          Professional UI with practical engineering
                          <FiArrowUpRight className="text-purple-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-24">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-300">
                <FiUser />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
                About Me
              </p>
              <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                I build polished digital experiences with modern UI craft and
                reliable development standards.
              </h3>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl"
            >
              <p className="text-sm leading-7 text-zinc-300">
                I focus on creating websites and web applications that feel
                professional, smooth, and visually strong. My approach combines
                refined frontend design with practical engineering so the final
                product is clean, scalable, and ready for real users.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-300">
                    <FiGlobe />
                  </div>
                  <h4 className="text-sm font-semibold text-white">
                    User-Focused Interfaces
                  </h4>
                  <p className="mt-2 text-xs leading-6 text-zinc-400">
                    Modern, responsive, and clean experiences designed with
                    clarity and usability in mind.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <FiLayers />
                  </div>
                  <h4 className="text-sm font-semibold text-white">
                    Scalable Structure
                  </h4>
                  <p className="mt-2 text-xs leading-6 text-zinc-400">
                    Clean code organization and component-driven systems built
                    for maintainability.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-2xl md:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(217,70,239,0.08),transparent_30%)]" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.05em] text-white md:text-5xl">
                  Let’s Build Something Great
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300">
                  Available for freelance work, collaborations, business
                  websites, premium portfolios, landing pages, dashboards, and
                  full web applications.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:umair41388shah@gmail.com"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(168,85,247,0.28)] transition duration-300 hover:scale-[1.03]"
                >
                  Email Me
                  <FiMail />
                </a>

                <a
                  href="https://www.linkedin.com/in/umair-shah-8b5b473aa/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.07]"
                >
                  LinkedIn
                  <FiLinkedin />
                </a>

                <a
                  href="https://github.com/UmairShah-coder"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-purple-400/30 hover:bg-purple-500/10"
                >
                  GitHub
                  <FiGithub />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 py-8">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <p className="text-sm font-medium text-zinc-300">Umair Shah</p>
              <p className="mt-1 text-sm text-zinc-500">
                Frontend Developer crafting modern digital experiences.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 uppercase md:justify-end">
              <a href="#home" className="text-sm text-zinc-400 transition hover:text-white">
                Home
              </a>
              <a href="#services" className="text-sm text-zinc-400 transition hover:text-white">
                Services
              </a>
              <a href="#projects" className="text-sm text-zinc-400 transition hover:text-white">
                Projects
              </a>
              <a href="#contact" className="text-sm text-zinc-400 transition hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
