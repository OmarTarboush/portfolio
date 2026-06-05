"use client";

import Image from "next/image";
import {
  Download,
  Languages,
  MessageCircle,
  Moon,
  Play,
  Sun,
} from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import {
  experience,
  profile,
  projects,
  roles,
  skillGroups,
  type Locale,
  type PortfolioProject,
} from "@/lib/portfolio";

type ActiveImage = {
  src: string;
  alt: string;
  project: string;
};

const copy = {
  en: {
    nav: [
      ["#projects", "Apps"],
      ["#roles", "Roles"],
      ["#experience", "Experience"],
      ["#skills", "Skills"],
      ["#contact", "Contact"],
    ],
    langLabel: "AR",
    themeLabel: { dark: "Light", light: "Dark" },
    heroKicker: "Production Flutter portfolio",
    heroTitle: "Flutter apps with real store presence, secure systems, and polished mobile flows.",
    heroText:
      "I build and maintain production Flutter applications across communication, task management, food, beauty, maps, Firebase systems, APIs, and secure mobile workflows.",
    viewWork: "View apps",
    contact: "Contact",
    downloadCv: "Download CV",
    selectedWork: "Selected applications",
    selectedWorkTitle: "Published apps with screens people can inspect.",
    selectedWorkText:
      "Every project keeps the product story, store links, and screenshots close together so recruiters and clients can judge the work quickly.",
    openImage: "Open image",
    playStore: "Play Store",
    appStore: "App Store",
    roleSection: "Role coverage",
    roleTitle: "More than UI work: delivery, systems, security, APIs, testing, and coordination.",
    roleText:
      "The work spans Flutter architecture, Firebase, REST/GraphQL, maps, deep links, notifications, secure access, legacy codebases, and release-ready delivery.",
    experience: "Experience",
    experienceTitle: "Production roles across UAE, Saudi Arabia, and Syria.",
    skills: "Technical system",
    skillsTitle: "Technologies grouped where they matter.",
    contactSection: "Contact",
    contactTitle: "For Flutter roles, production support, and mobile product delivery.",
    contactText:
      "Reach me directly on WhatsApp or open Gmail with my email already filled in.",
    whatsapp: "Contact WhatsApp",
    gmail: "Contact Gmail",
    portfolio: "Portfolio",
    location: "Location",
    education: "Education",
    languages: "Languages",
    close: "Close",
    livePanel: "Live app wall",
  },
  ar: {
    nav: [
      ["#projects", "التطبيقات"],
      ["#roles", "الأدوار"],
      ["#experience", "الخبرة"],
      ["#skills", "المهارات"],
      ["#contact", "التواصل"],
    ],
    langLabel: "EN",
    themeLabel: { dark: "فاتح", light: "داكن" },
    heroKicker: "بورتفوليو Flutter إنتاجي",
    heroTitle: "تطبيقات Flutter بروابط متجر حقيقية وأنظمة آمنة وتجربة موبايل مصقولة.",
    heroText:
      "أبني وأدعم تطبيقات Flutter إنتاجية في التواصل، إدارة المهام، الطعام، التجميل، الخرائط، Firebase، واجهات API، وتدفقات الموبايل الآمنة.",
    viewWork: "عرض التطبيقات",
    contact: "تواصل",
    downloadCv: "تحميل السيرة",
    selectedWork: "التطبيقات المختارة",
    selectedWorkTitle: "تطبيقات منشورة يمكن فحص شاشاتها.",
    selectedWorkText:
      "كل مشروع يجمع قصة المنتج وروابط المتاجر والصور في مكان واحد حتى يتم تقييم العمل بسرعة.",
    openImage: "فتح الصورة",
    playStore: "Play Store",
    appStore: "App Store",
    roleSection: "تغطية الأدوار",
    roleTitle: "أكثر من واجهات: تسليم، أنظمة، حماية، APIs، اختبارات، وتنسيق.",
    roleText:
      "العمل يغطي Flutter architecture وFirebase وREST/GraphQL والخرائط والروابط العميقة والتنبيهات والوصول الآمن والكود القديم والتسليم الجاهز للإطلاق.",
    experience: "الخبرة",
    experienceTitle: "أدوار إنتاجية ضمن الإمارات والسعودية وسوريا.",
    skills: "النظام التقني",
    skillsTitle: "التقنيات مجمعة في المكان الصحيح.",
    contactSection: "التواصل",
    contactTitle: "لأدوار Flutter ودعم الإنتاج وتسليم منتجات الموبايل.",
    contactText:
      "تواصل معي مباشرة عبر WhatsApp أو افتح Gmail والبريد جاهز للإرسال.",
    whatsapp: "Contact WhatsApp",
    gmail: "Contact Gmail",
    portfolio: "Portfolio",
    location: "الموقع",
    education: "التعليم",
    languages: "اللغات",
    close: "إغلاق",
    livePanel: "جدار التطبيقات",
  },
} as const;

const whatsappHref = "https://wa.me/963941717409";
const gmailHref =
  "https://mail.google.com/mail/?view=cm&fs=1&to=omartarboush191@gmail.com";
const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function publicAsset(src: string) {
  return src.startsWith("/") ? `${siteBasePath}${src}` : src;
}

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeImage, setActiveImage] = useState<ActiveImage | null>(null);
  const text = copy[locale];
  const dir = locale === "ar" ? "rtl" : "ltr";
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const backgroundProjects = useMemo(() => projects.slice(0, 6), []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [dir, locale, theme]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[90] h-1 origin-left bg-accent"
        style={{ scaleX: progressScale }}
      />

      <header className="fixed inset-x-0 top-3 z-50 px-3">
        <nav className="mx-auto flex min-h-16 max-w-[1440px] items-center justify-between gap-3 rounded-[28px] border border-border bg-background/78 px-3 shadow-[0_24px_80px_-55px_rgba(0,0,0,0.75)] backdrop-blur-2xl sm:px-5">
          <a href="#home" className="group flex min-w-0 items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-foreground text-sm font-black text-background transition duration-300 group-hover:scale-95">
              OT
            </span>
            <span className="hidden min-w-0 md:block">
              <span className="block truncate text-sm font-black leading-none">
                {profile.name}
              </span>
              <span className="mt-1 block truncate text-xs font-semibold text-muted">
                {profile.title[locale]}
              </span>
            </span>
          </a>

          <div className="hidden rounded-full border border-border bg-surface/70 p-1 lg:flex">
            {text.nav.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-4 py-2 text-sm font-black text-muted transition duration-300 hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="nav-icon-button"
              aria-label={text.themeLabel[theme]}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              <span className="hidden sm:inline">{text.themeLabel[theme]}</span>
            </button>
            <button
              type="button"
              onClick={() => setLocale(locale === "en" ? "ar" : "en")}
              className="nav-icon-button"
              aria-label={text.langLabel}
            >
              <Languages size={18} />
              <span>{text.langLabel}</span>
            </button>
            <a
              href={`${siteBasePath}/Omar_Tarboush_CV.docx`}
              className="button-accent min-h-11"
            >
              <Download size={18} />
              <span className="hidden sm:inline">{text.downloadCv}</span>
              <span className="sm:hidden">CV</span>
            </a>
          </div>
        </nav>
      </header>

      <main id="home" dir={dir}>
        <section className="relative isolate min-h-dvh overflow-hidden border-b border-border pt-24">
          <div className="absolute inset-0 -z-20 hero-field" />
          <HeroBackground projects={backgroundProjects} locale={locale} />
          <div className="mx-auto grid min-h-[calc(100dvh-6rem)] max-w-[1440px] items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="relative z-10">
              <Reveal delay={0.08}>
                <h1
                  className={`max-w-5xl text-4xl font-black sm:text-5xl md:text-6xl xl:text-7xl ${
                    locale === "ar" ? "leading-[1.22]" : "leading-[0.98]"
                  }`}
                >
                  {text.heroTitle}
                </h1>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl md:leading-9">
                  {text.heroText}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a className="button-primary" href="#projects">
                    <Play size={18} />
                    {text.viewWork}
                  </a>
                  <a className="button-secondary" href="#contact">
                    <MessageCircle size={18} />
                    {text.contact}
                  </a>
                </div>
              </Reveal>
            </div>

            <HeroAppWall projects={backgroundProjects} locale={locale} text={text} />
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <Reveal>
              <div className="grid gap-6 md:grid-cols-[minmax(0,0.92fr)_minmax(280px,0.48fr)] md:items-end">
                <div>
                  <h2 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
                    {text.selectedWorkTitle}
                  </h2>
                </div>
                <p className="max-w-md text-base leading-8 text-muted">
                  {text.selectedWorkText}
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  locale={locale}
                  text={text}
                  onOpenImage={setActiveImage}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="roles" className="scroll-mt-28 border-b border-border bg-surface/74">
          <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <Reveal>
              <div className="grid gap-6 lg:grid-cols-[0.8fr_0.55fr] lg:items-end">
                <h2 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                  {text.roleTitle}
                </h2>
                <p className="text-base leading-8 text-muted">{text.roleText}</p>
              </div>
            </Reveal>
            <Stagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {roles.map((role) => (
                <StaggerItem key={role.title.en}>
                  <article className="role-card">
                    <h3 className="text-xl font-black">{role.title[locale]}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted">
                      {role.text[locale]}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 border-b border-border">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.48fr_1fr] lg:px-8">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <h2 className="text-4xl font-black leading-tight md:text-6xl">
                  {text.experienceTitle}
                </h2>
              </div>
            </Reveal>
            <Stagger className="relative grid gap-4">
              {experience.map((item) => (
                <StaggerItem key={`${item.company}-${item.period}`}>
                  <article className="rounded-3xl border border-border bg-surface/88 p-5 md:p-7">
                    <p className="text-sm font-black text-accent">{item.period}</p>
                    <h3 className="mt-2 text-2xl font-black">{item.company}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {item.role[locale]} / {item.location[locale]}
                    </p>
                    <ul className="mt-5 grid gap-3 text-sm leading-7 text-foreground/86">
                      {item.points.map((point) => (
                        <li key={point.en} className="grid grid-cols-[auto_1fr] gap-3">
                          <span className="mt-3 size-1.5 rounded-full bg-accent" />
                          <span>{point[locale]}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section id="skills" className="scroll-mt-28 border-b border-border bg-surface/70">
          <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <Reveal>
              <h2 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
                {text.skillsTitle}
              </h2>
            </Reveal>
            <Stagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group) => (
                <StaggerItem key={group.title.en}>
                  <article className="h-full rounded-3xl border border-border bg-background/88 p-6">
                    <h3 className="text-xl font-black">{group.title[locale]}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="skill-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1fr_0.74fr] lg:px-8">
            <Reveal>
              <div>
                <h2 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
                  {text.contactTitle}
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
                  {text.contactText}
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    className="contact-action contact-action-primary"
                    href={gmailHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${text.gmail}: ${profile.email}`}
                  >
                    <GmailGlyph size={23} />
                    <span>{text.gmail}</span>
                  </a>
                  <a
                    className="contact-action"
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${text.whatsapp}: ${profile.phone}`}
                  >
                    <WhatsAppGlyph size={23} />
                    <span>{text.whatsapp}</span>
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <dl className="overflow-hidden rounded-3xl border border-border bg-surface/88">
                <ContactRow label={text.location} value={profile.location[locale]} />
                <ContactRow label={text.education} value={profile.education[locale]} />
                <ContactRow label={text.languages} value={profile.languages[locale]} />
                <ContactRow label="LinkedIn" value={profile.linkedin} />
              </dl>
            </Reveal>
          </div>
        </section>
      </main>

      <ImageLightbox
        activeImage={activeImage}
        closeLabel={text.close}
        onClose={() => setActiveImage(null)}
      />
    </>
  );
}

function HeroBackground({
  projects,
  locale,
}: {
  projects: PortfolioProject[];
  locale: Locale;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-55">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          className="absolute hidden h-52 w-32 overflow-hidden rounded-[28px] border border-white/10 bg-black/30 shadow-2xl md:block"
          style={{
            ...(locale === "ar"
              ? { right: `${52 + (index % 3) * 13}%` }
              : { left: `${52 + (index % 3) * 13}%` }),
            top: `${12 + Math.floor(index / 3) * 38}%`,
          }}
          animate={{
            y: [0, index % 2 === 0 ? -24 : 24, 0],
            rotate: [index * 2 - 5, index * 2 + 2, index * 2 - 5],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={publicAsset(project.screenshots[0])}
            alt=""
            width={220}
            height={390}
            className="h-full w-full object-cover object-top opacity-80"
            priority={index < 3}
          />
        </motion.div>
      ))}
    </div>
  );
}

function HeroAppWall({
  projects,
  locale,
  text,
}: {
  projects: PortfolioProject[];
  locale: Locale;
  text: (typeof copy)[Locale];
}) {
  return (
    <Reveal delay={0.16} y={36} className="relative z-10">
      <motion.div
        className="relative overflow-hidden rounded-[36px] border border-border bg-surface/82 p-4 shadow-[0_44px_180px_-120px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:p-6"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_20%,transparent),transparent_34%),linear-gradient(315deg,color-mix(in_srgb,var(--warm)_18%,transparent),transparent_42%)]" />
        <div className="relative">
          <div className="flex items-center justify-end gap-4">
            <div className="flex max-w-[23rem] flex-wrap justify-end gap-3">
              {projects.map((project) => (
                <Image
                  key={project.name}
                  src={publicAsset(project.icon)}
                  alt={`${project.name} icon`}
                  width={48}
                  height={48}
                  className="size-11 rounded-2xl border border-border bg-surface object-cover shadow-lg sm:size-12"
                  priority
                />
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.name}
                className="group relative min-h-[220px] overflow-hidden rounded-[28px] border border-border bg-background/80 p-4"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <Image
                  src={publicAsset(project.screenshots[0])}
                  alt={`${project.name} ${project.role[locale]}`}
                  width={333}
                  height={592}
                  className="absolute bottom-0 end-3 h-[88%] w-auto rounded-[22px] object-contain object-bottom opacity-80 transition duration-500 group-hover:scale-105"
                  priority={index < 2}
                />
                <div className="relative z-10 max-w-[52%]">
                  <Image
                    src={publicAsset(project.icon)}
                    alt={`${project.name} icon`}
                    width={56}
                    height={56}
                    className="size-14 rounded-2xl object-cover ring-1 ring-border"
                    priority
                  />
                  <h3 className="mt-4 text-xl font-black">{project.name}</h3>
                  <p className="mt-2 text-xs font-bold leading-5 text-muted">
                    {project.role[locale]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

function ProjectCard({
  project,
  locale,
  text,
  onOpenImage,
}: {
  project: PortfolioProject;
  locale: Locale;
  text: (typeof copy)[Locale];
  onOpenImage: (image: ActiveImage) => void;
}) {
  return (
    <Reveal y={36}>
      <article className="overflow-hidden rounded-[32px] border border-border bg-surface/88 shadow-[0_42px_150px_-115px_rgba(0,0,0,0.86)]">
        <div className="grid gap-8 p-5 md:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
          <div className="flex min-w-0 flex-col">
            <div className="flex items-start gap-4">
              <Image
                src={publicAsset(project.icon)}
                alt={`${project.name} app icon`}
                width={96}
                height={96}
                className="size-20 rounded-3xl object-cover ring-1 ring-border md:size-24"
              />
              <div className="min-w-0 pt-1">
                <h3 className="text-3xl font-black leading-none md:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-3 text-lg font-black text-accent">
                  {project.role[locale]}
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-muted">
              {project.description[locale]}
            </p>

            <div className="mt-6 rounded-3xl border border-border bg-background/78 p-4 text-sm font-semibold leading-7 text-foreground/84">
              {project.impact[locale]}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.playStore && (
                <StoreLink href={project.playStore} label={text.playStore} />
              )}
              {project.appStore && (
                <StoreLink href={project.appStore} label={text.appStore} />
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {project.screenshots.map((screenshot, screenshotIndex) => (
              <motion.button
                key={screenshot}
                type="button"
                onClick={() =>
                  onOpenImage({
                    src: screenshot,
                    alt: `${project.name} screenshot ${screenshotIndex + 1}`,
                    project: project.name,
                  })
                }
                className={`group relative min-h-[180px] overflow-hidden rounded-[18px] border border-border bg-background p-1.5 text-left transition duration-300 hover:-translate-y-2 hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:min-h-[390px] sm:rounded-[28px] sm:p-3 ${
                  screenshotIndex === 1
                    ? "sm:mt-8"
                    : screenshotIndex === 2
                      ? "sm:mt-16"
                      : ""
                }`}
                initial={{ opacity: 0, y: 28, rotate: screenshotIndex - 1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.58, delay: screenshotIndex * 0.08 }}
                aria-label={`${text.openImage}: ${project.name}`}
              >
                <Image
                  src={publicAsset(screenshot)}
                  alt={`${project.name} screenshot ${screenshotIndex + 1}`}
                  width={420}
                  height={760}
                  className="h-full max-h-[250px] w-full rounded-[14px] object-cover object-top sm:max-h-[620px] sm:rounded-[20px]"
                />
                <span className="absolute inset-x-2 bottom-2 translate-y-3 rounded-full bg-background/92 px-2 py-2 text-center text-[10px] font-black opacity-0 shadow-xl transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-6 sm:bottom-6 sm:px-4 sm:py-3 sm:text-xs">
                  {text.openImage}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function StoreLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center rounded-2xl bg-foreground px-5 text-sm font-black text-background transition duration-300 hover:-translate-y-px hover:bg-accent hover:text-white active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      {label}
    </a>
  );
}

function GmailGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.5 6.5h15v11h-15z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="m4.8 7 7.2 5.4L19.2 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m4.8 17.2 5-6.3m9.4 6.3-5-6.3"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WhatsAppGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
    >
      <path d="M4.8 19.2 6 15.8a8 8 0 1 1 3.1 2.9z" />
      <path d="M9.2 8.9c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c.8 1.3 1.8 2.3 3.1 3.1l.6-.5c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.6v.5c0 .3-.1.5-.4.7-.6.3-1.3.5-2 .4-3.2-.5-5.9-2.7-7.1-5.8-.3-.7-.1-1.5.3-2z" />
    </svg>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="grid gap-2 border-b border-border px-5 py-5 last:border-b-0 sm:grid-cols-[150px_1fr]">
      <dt className="text-sm font-black text-muted">{label}</dt>
      <dd className="text-sm font-semibold leading-7 text-foreground/88">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 transition hover:underline"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

function ImageLightbox({
  activeImage,
  closeLabel,
  onClose,
}: {
  activeImage: ActiveImage | null;
  closeLabel: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {activeImage && (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-black/82 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[92dvh] w-full max-w-4xl overflow-hidden rounded-[32px] border border-white/18 bg-background p-3"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3 px-2">
              <p className="min-w-0 truncate text-sm font-black">
                {activeImage.project}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="min-h-11 shrink-0 rounded-full border border-border px-4 text-sm font-black transition duration-300 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {closeLabel}
              </button>
            </div>
            <div className="max-h-[82dvh] overflow-auto rounded-[24px] bg-black">
              <Image
                src={publicAsset(activeImage.src)}
                alt={activeImage.alt}
                width={900}
                height={1600}
                className="mx-auto h-auto w-full max-w-[560px] object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
