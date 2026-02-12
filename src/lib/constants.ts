export const siteConfig = {
  name: "Nkosi Hut",
  url: "https://nkosihut.co.za",
  email: "hello@nkosihut.co.za",
  description:
    "South African tech agency specializing in website development, mobile applications, UI/UX design, and cloud solutions.",
  links: {
    github: "https://github.com/Nhlanhla30",
    linkedin: "#",
    twitter: "#",
  },
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
] as const;

export const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "High-performance, responsive websites built with modern frameworks. From landing pages to complex web applications — optimized for speed, SEO, and conversion.",
    tags: ["Next.js", "React", "E-Commerce", "CMS"],
    icon: "code" as const,
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. We create intuitive, fast apps that users love and businesses depend on.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    icon: "smartphone" as const,
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "User-centred design that converts. We research, wireframe, prototype, and deliver pixel-perfect interfaces that delight users and meet business objectives.",
    tags: ["Figma", "Prototyping", "User Research", "Design Systems"],
    icon: "pen-tool" as const,
  },
  {
    number: "04",
    title: "Cloud & DevOps Solutions",
    description:
      "Scalable cloud architecture, CI/CD pipelines, and infrastructure automation. We ensure your applications run reliably, securely, and cost-effectively.",
    tags: ["AWS", "Azure", "Docker", "CI/CD"],
    icon: "cloud" as const,
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your business, goals, and audience to build a strategic foundation for the project.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes and high-fidelity mockups are crafted, refined with your feedback until pixel-perfect.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Clean, tested code brings the design to life with performance, accessibility, and SEO baked in.",
  },
  {
    number: "04",
    title: "Deploy & Support",
    description:
      "We launch, monitor, and continuously improve — providing ongoing support and maintenance.",
  },
] as const;

export const whyUsReasons = [
  {
    title: "Modern Tech Stack",
    description:
      "We use industry-leading tools and frameworks to ensure your product is fast, scalable, and future-proof.",
    icon: "zap" as const,
  },
  {
    title: "Results Focused",
    description:
      "Every line of code and every pixel serves a purpose — driving conversions, engagement, and business growth.",
    icon: "target" as const,
  },
  {
    title: "Transparent Process",
    description:
      "Regular updates, clear communication, and no surprises. You're always in the loop on progress and decisions.",
    icon: "handshake" as const,
  },
] as const;

export const techStack = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Figma", category: "Design" },
] as const;
