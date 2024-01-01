import ConsultlyLogo from "../images/logos/consultly.svg";
import ClevertechLogo from "../images/logos/clevertech.png";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Nguyen Khac Thanh",
  initials: "NKT",
  location: "Hanoi, Vietnam",
  locationLink: "#",
  about:
    "Full Stack Engineer focused on building products with extra attention to details",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. Currently, I work mostly with Python, FastAPI and LLMs frameworks for AI products. I have over 5 years of experience in software development.",
  avatarUrl: "https://avatars.githubusercontent.com/u/13352088?v=4",
  personalWebsiteUrl: "https://nkthanh.dev",
  contact: {
    email: "nguyenkhacthanh244@gmail.com",
    tel: "+84968614342",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/magiskboy",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/thanh-nguyen-khac",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/magiskboy",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Engineering and Technology - Vietnam National University, Hanoi",
      degree: "Bachelor's Degree in Comminication and Computer Networking",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Schiesser IT",
      link: "",
      badges: ["Remote"],
      title: "Python Developer",
      logo: NSNLogo,
      start: "2023",
      end: "Present",
      description: "Creating AI software for Germany companies based on LLM's",
    },
    {
      company: "Offspring Digital",
      link: "https://offspringdigital.com",
      badges: [],
      title: "NodeJS developer",
      logo: JojoMobileLogo,
      start: "2023",
      end: "2023",
      description:
        "Built a NodeJS application based on Strapi framework (a headless CMS) for daily workouts.",
    },
    {
      company: "Teko Vietnam",
      link: "https://teko.vn",
      badges: [],
      title: "Python Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2019",
      end: "2023",
      description:
        "Built a product management service for the ecommerce system. As a fullstack developer, I built a customer facing by NextJS for multiple tenants and focused on improving web performance",
    },
    {
      company: "Revotech",
      link: "https://revotech.com.vn",
      badges: [],
      title: "Internship → Python Developer",
      logo: ParabolLogo,
      start: "2017",
      end: "2019",
      description:
        "Implemented a machine learning service for predicting amount of oil in wells. In this role, I worked on Python ecosystem so I learned many things like database design, Restful, master-worker model, Machine learning algorithms, software development, clean code...",
    },
  ],
  skills: [
    "JavaScript",
    "Typescript",
    "NodeJS",
    "React",
    "Next.js",
    "Python",
    "Flask",
    "FastAPI",
    "asyncio/SQLALchemy/Pydantic",
    "LLMs/RAG"
  ],
  projects: [
    {
      title: "PrepsJ",
      techStack: [
        "Side Project",
        "TypeScript",
        "React",
        "Strapi",
        "TailwindCSS",
      ],
      description: "A platform to making online examinations for interview and testing.",
      logo: ConsultlyLogo,
      link: {
        label: "prepsj.com",
        href: "https://prepsj.com",
      },
    },
    {
      title: "Teko web",
      techStack: [
        "Typescript",
        "Next.js",
        "Monorepo",
        "styled-component",
      ],
      description: "A single customer facing application for multiple ecommerce sites such as phongvu.vn, vnshop.vn,...",
      link: {
        label: "phongvu.vn",
        href: "https://phongvu.vn",
      },
    },
    {
      title: "Catalog",
      techStack: [
        "Python",
        "Flask",
        "SQLALchemy",
        "MySQL",
        "Celery",
        "Entity-Attribute-Value model"
      ],
      description: "A service for managing products and related informations like categories, brands, attributes,... It was used by staffs of seller and other internal services"
    },
    {
      title: "Well-Insign Prediction service",
      techStack: [
        "Python",
        "Flask",
        "SQLALchemy",
        "MySQL",
        "Celery",
        "Scikit-learn",
        "Scipy/Numpy",
        "Tensorflow",
      ],
      description: "A machine learning service implements some Classification, Regression and Timeseri algorithms like SVM, Tree base, Logistic regression,... It was used to predict amount of oil in wells by oli & gas Vietnam's companies.",
      link: {
        label: "i2g.cloud",
        hrer: "https://i2g.cloud"
      }
    }
  ],
} as const;
