import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Sai Surya Vidul Chinthamaneni.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I&apos;m an LA-based recent graduate aspiring to become an{' '}
        <strong className="text-stone-100">AI/ML Engineer</strong>. I currently work as a{' '}
        <strong className="text-stone-100">Graduate Student Researcher</strong> at{' '}
        <strong className="text-stone-100">Trustworthy Autonomous Systems Lab (UC Riverside)</strong>, where I help build
        multi-agent navigation and exploration systems.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can find me gaming, hitting the gym, or catching up on popular anime.
      </p>
    </>
  ),

  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I’m an LA-based AI/ML engineer and a recent Master’s graduate from UC Riverside (Electrical Engineering). 
I enjoy building multimodal, attention-based systems and working on model alignment and safety, especially with LLMs and vision language models. 
I’m most comfortable working in Python and PyTorch, and I’ve also worked with tools like Hugging Face, LangChain, Docker, and cloud platforms to take ideas from research to real deployments.`,
  aboutItems: [
    {label: 'Location', text: 'Los Angeles, CA', Icon: MapIcon},
    {label: 'Experience', text: '2 years', Icon: CalendarIcon},
    {label: 'Focus', text: 'LLMs/VLMs, fine tuning, LoRA, inference', Icon: FlagIcon},
    {label: 'Interests', text: 'Gaming, gym, anime', Icon: SparklesIcon},
    {label: 'Study', text: "University of California, Riverside ", Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Trustworthy Autonomous Systems Lab (UC Riverside)', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 8,
      },
      {
        name: 'Telugu',
        level: 9,
      },
    ],
  },

  {
    name: 'LLM and Multimodal Tools',
    skills: [
      {
        name: 'Hugging Face Transformers',
        level: 9,
      },
      {
        name: 'LangChain',
        level: 7,
      },
      {
        name: 'Weights and Biases',
        level: 7,
      },
    ],
  },

  {
    name: 'ML Frameworks and Libraries',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'PyTorch',
        level: 9,
      },
      {
        name: 'NumPy',
        level: 9,
      },
      {
        name: 'Pandas',
        level: 9,
      },
      {
        name: 'scikit-learn',
        level: 8,
      },
      {
        name: 'OpenCV',
        level: 8,
      },
    ],
  },

  {
    name: 'Dev and Deployment Tools',
    skills: [
      {
        name: 'Git / GitHub',
        level: 9,
      },
      {
        name: 'Docker',
        level: 8,
      },
      {
        name: 'AWS',
        level: 7,
      },
      {
        name: 'Kubernetes',
        level: 6,
      },
      {
        name: 'Jupyter',
        level: 10,
      },
    ],
  },
];


/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Visual Question Answering (VQA) Using CLIP with Local Feature Enhancement',
    description: 'Built a CLIP-based VQA system that boosts accuracy by enhancing local image features for better question grounded reasoning.',
    url: 'https://github.com/Mathio11/CS_228_CLIP_LOCAL_FEATURE_ENHANCEMENT',
    image: porfolioImage1,
  },
  {
    title: 'Attention Based Distillation (ViT to CNN)',
    description: 'Distilled a ViT teacher into a lightweight CNN student using dynamic attention weighting (entropy based) with KL loss + attention alignment.',
    url: 'https://github.com/SiddhartaDutta/Attention-Based-Distillation',
    image: porfolioImage2,
  },
  {
    title: 'Image Captioning Using CNN and RNN',
    description: 'Built an end to end image captioning model using a CNN encoder and RNN decoder to generate natural language descriptions.',
    url: 'https://github.com/Mathio11/Image_Captioning_using_CNN_and_RNN',
    image: porfolioImage3,
  },
  {
    title: 'Sentiment Analysis of Course Reviews',
    description: 'Built an NLP pipeline to classify course review sentiment and summarize feedback using text preprocessing and ML models.',
    url: 'https://github.com/Mathio11/Sentiment_Analysis_of_Course_Reviews',
    image: porfolioImage4,
  },
  {
    title: 'GPT-4o Bot',
    description: 'Built a chatbot powered by GPT-4o with a simple UI and reusable prompt workflows for quick Q&A and automation.',
    url: 'https://github.com/Mathio11/GPT-4o-bot',
    image: porfolioImage5,
  },
  {
    title: 'DOCTOR: Dynamic On-Chip Calibration for Photonic Tensor Accelerators',
    description: 'Official implementation of DOCTOR, a training-free on-chip remediation framework for reliable photonic neural accelerators under temporal noise drift.',
    url: 'https://github.com/TRIGGERONE/DOCTOR',
    image: porfolioImage6,
  },
  {
    title: 'T2GCN: Fast Thermal Analysis for Chiplet Design',
    description: 'GCN-based thermal simulation for chiplet systems using global power features, skip connections, and attention to predict thermal maps efficiently.',
    url: 'https://github.com/TRIGGERONE/ThermalGCN',
    image: porfolioImage7,
  },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2025',
    location: 'University of California, Riverside',
    title: 'Master\'s in Electrical Engineering',
    content: <p>During my Master&apos;s at UC Riverside, I did a deep dive into AI/ML through coursework and hands-on projects, which helped me build a strong foundation in machine learning and deep learning. That path naturally led me into research at the Trustworthy Autonomous Systems Lab, where I began working on real-world autonomous systems problems and gained experience designing, training, and evaluating learning-based models end to end.</p>,
  },
  {
    date: 'May 2023',
    location: 'Jawaharlal Nehru Technological University - GRIET',
    title: 'Bachelor\'s, Electrical and Electronics Engineering',
    content: <p>During my Bachelor&apos;s at JNTU - GRIET, I was first introduced to AI/ML through a simple project I built with friends, which sparked my interest in learning how intelligent systems work. Along the way, I strengthened my core math foundation (linear algebra, probability, and optimization) and built strong fundamentals in software and hardware, giving me the base I later used to transition into practical internships.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2025 - Present',
    location: 'Trustworthy Autonomous Systems Lab (TASL)',
    title: 'Graduate Student Researcher',
    content: (
      <p>
        Led research on multi-agent exploration and navigation in complex, dynamic environments using an approach similar
        to PirlNav on the Habitat platform. Built advanced models for semantic mapping and shared location awareness
        using Python and PyTorch. Developed a two-stage decision-making framework that integrates conformal prediction
        for uncertainty-aware planning, enabling robust collaboration via centralized coordination and improving success
        in unseen environments.
      </p>
    ),
  },
  {
    date: 'August 2022 - April 2023',
    location: 'PathFinder Info Solutions',
    title: 'Machine Learning Intern',
    content: (
      <p>
        Engineered features from 25K+ mentor–mentee profiles and session feedback using Python, Pandas, NumPy, SQL, and
        scikit-learn to support personalized matching experiments. Trained and tuned logistic regression, random
        forest, and TF-IDF with cosine similarity models using GridSearchCV and cross-validation, improving match
        precision by 17% over heuristic baselines. Built a Streamlit dashboard with Plotly on AWS to visualize
        recommendations and sentiment-adjusted scores, implemented weighted ranking logic, and maintained the pipeline
        with Git for internal testing.
      </p>
    ),
  },
  {
    date: 'January 2022 - July 2022',
    location: 'Gokul',
    title: 'Machine Learning Intern',
    content: (
      <p>
        Preprocessed and modeled time-series sensor data from embedded water control systems for fault detection and
        predictive maintenance, collaborating closely with the R&D team. Built reproducible pipelines in Pandas, NumPy,
        SQL, and Jupyter to transform 60K+ operational records into clean, normalized datasets; used C to help interpret
        control board outputs and sensor integration. Applied anomaly detection methods including Z-score analysis and
        KNN, and visualized recurring patterns with Matplotlib and Seaborn, informing 2 key hardware design
        improvements.
      </p>
    ),
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can primarily get in touch through email or LinkedIn.',
  items: [
    {
      type: ContactType.Email,
      text: 'saisuryavidul@gmail.com',
      href: 'mailto:saisuryavidul@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Riverside, CA',
      href: 'https://maps.app.goo.gl/L5Ns9k8dVLDutvZP9',
    },
    // {
    //   type: ContactType.LinkedIn,
    //   text: '@ Sai Surya Vidul Chinthamaneni',
    //   href: 'https://www.linkedin.com/in/sai-surya-vidul-chinthamaneni',
    // },
    // {
    //   type: ContactType.Github,
    //   text: 'Mathio11',
    //   href: 'https://github.com/Mathio11',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Mathio11'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sai-surya-vidul-chinthamaneni'},
  {label: 'X', Icon: TwitterIcon, href: 'https://x.com/vidulvictorious?s=11'},
];
