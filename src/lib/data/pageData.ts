import { FaqType } from "@/app/types/faq";
import { FeatureType } from "@/app/types/features";
import { FooterType } from "@/app/types/footerlink";
import { HeaderItem } from "@/app/types/menu";
import { SocialType } from "@/app/types/sociallink";
import { WorkType } from "@/app/types/work";

/* ─── Navigation ──────────────────────────────────── */
export const Headerdata: HeaderItem[] = [
  { label: "About",        href: "/about"          },
  { label: "Services",     href: "/services"        },
  { label: "Technologies", href: "/technologies"    },
  { label: "Testimonials", href: "/#testimonials"   },
  { label: "Contact Us",   href: "/#contact"        },
];

/* ─── How It Works steps (if used anywhere) ──────── */
export const workdata: WorkType[] = [
  {
    imgSrc: "/images/work/icon-one.svg",
    heading: "Discovery Call",
    subheading:
      "We start with a free consultation to understand your goals, requirements, and vision — so we can plan the perfect solution for your business.",
  },
  {
    imgSrc: "/images/work/icon-two.svg",
    heading: "Design & Develop",
    subheading:
      "Our team designs pixel-perfect UI and builds clean, scalable code — keeping you updated at every milestone throughout the process.",
  },
  {
    imgSrc: "/images/work/icon-three.svg",
    heading: "Launch & Support",
    subheading:
      "We deploy your product to production and provide ongoing support, maintenance, and updates to keep your digital product running flawlessly.",
  },
];

/* ─── Features / Highlights (if used anywhere) ───── */
export const Featuresdata: FeatureType[] = [
  {
    imgSrc: "/images/features/featureOne.svg",
    heading: "Innovative Design",
    subheading:
      "We create intuitive, visually stunning interfaces that captivate users and deliver seamless experiences across all devices.",
  },
  {
    imgSrc: "/images/features/featureTwo.svg",
    heading: "Scalable Development",
    subheading:
      "Our solutions are built to grow with your business — from MVP to enterprise scale, without costly rewrites or performance bottlenecks.",
  },
  {
    imgSrc: "/images/features/featureThree.svg",
    heading: "AI-Powered Solutions",
    subheading:
      "We integrate cutting-edge AI and machine learning to automate processes, enhance decisions, and unlock new business opportunities.",
  },
];

/* ─── FAQ ─────────────────────────────────────────── */
export const Faqdata: FaqType[] = [
  {
    heading: "What services does Kerodevs offer?",
    subheading:
      "Kerodevs offers end-to-end digital solutions including web development, mobile app development, custom software, AI integration, UI/UX design, and cloud & DevOps services.",
  },
  {
    heading: "How long does a typical project take?",
    subheading:
      "Timelines depend on project complexity. A simple website takes 1–2 weeks, while a full-scale application can take 4–12 weeks. We provide a clear timeline and milestones before starting.",
  },
  {
    heading: "Do you provide support after launch?",
    subheading:
      "Yes. We offer dedicated post-launch support including bug fixes, performance monitoring, feature updates, and ongoing maintenance to keep your product running at its best.",
  },
  {
    heading: "What technologies do you work with?",
    subheading:
      "We work across the full stack — React, Next.js, Node.js, Python, Flutter, React Native, AWS, Docker, PostgreSQL, MongoDB, OpenAI, and more. Visit our Technologies page for the full list.",
  },
  {
    heading: "How do we get started?",
    subheading:
      "Simply reach out via our Contact page or book a free discovery call. We'll discuss your project, provide a proposal, and get started once you're ready.",
  },
];

/* ─── Social Links ────────────────────────────────── */
export const Sociallinkdata: SocialType[] = [
  {
    imgsrc: "/images/footer/insta.svg",
    href: "https://instagram.com/kerodevs",
  },
  {
    imgsrc: "/images/footer/twitter.svg",
    href: "https://twitter.com/kerodevs",
  },
  {
    imgsrc: "/images/footer/youtube.svg",
    href: "https://youtube.com/@kerodevs",
  },
  {
    imgsrc: "/images/footer/dribble.svg",
    href: "https://linkedin.com/company/kerodevs",
  },
];

/* ─── Footer Links ────────────────────────────────── */
export const Footerlinkdata: FooterType[] = [
  { label: "About",        href: "/about"         },
  { label: "Services",     href: "/services"       },
  { label: "Technologies", href: "/technologies"   },
  { label: "Testimonials", href: "/#testimonials"  },
  { label: "Contact Us",   href: "/#contact"       },
];