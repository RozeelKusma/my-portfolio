export const portfolioData = {
  name: "Rojil Kusma",
  title: "Frontend Developer",
  tagline: "React · TypeScript · AWS",
  summary:
    "Frontend Developer with 3+ years of experience building scalable SaaS and real-time web applications using React and TypeScript. Specialized in performance optimization, component architecture, and cloud-based deployments on AWS.",
  contact: {
    email: "kusmarozeel@gmail.com",
    phone: "+977-9860456534",
    location: "Bhaktapur, Nepal",
    github: "https://github.com/RozeelKusma",
    linkedin: "https://linkedin.com/in/rojil-kusma",
  },
  experience: [
    {
      role: "Frontend Developer",
      company: "Genese Solutions",
      location: "Bakhundol, Lalitpur",
      period: "May 2025 — Present",
      current: true,
      highlights: [
        "Developed a scalable SaaS-based mass mailing platform with multi-tenant architecture.",
        "Improved page load time by 30% via code-splitting, lazy loading, and bundle optimization.",
        "Built a drag-and-drop email template builder using GrapesJS for campaigns exceeding 1M+ emails.",
        "Integrated real-time analytics dashboards for delivery rates, open rates, and user engagement.",
        "Deployed frontend assets using AWS (S3, CloudFront) for global content delivery.",
        "Automated campaign workflows reducing email preparation time by 70%.",
        "Mentored junior developers, reducing bug escape rate by 25%.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Varosa Technology",
      location: "Anamnagar, Kathmandu",
      period: "Aug 2022 — May 2025",
      current: false,
      highlights: [
        "Built a real-time VoIP web application using Twilio and WebRTC for browser-based calling and SMS.",
        "Developed React + TypeScript SPAs with GraphQL (Apollo) and REST API integration.",
        "Optimized performance with lazy loading, memoization, and efficient API state management.",
        "Designed reusable UI component libraries using React and CSS-in-JS.",
        "Developed real-time cargo tracking systems with shipment visibility and pricing workflows.",
        "Built interactive dashboards and reporting tools to visualize business metrics.",
      ],
    },
    {
      role: "Frontend Intern",
      company: "Digital Terai",
      location: "Koteshwor, Kathmandu",
      period: "Apr 2022 — Jul 2022",
      current: false,
      highlights: [
        "Built a responsive React application using Tailwind CSS.",
        "Implemented dynamic and validated forms with efficient state management.",
        "Created interactive UI components and animations to enhance user experience.",
        "Ensured cross-browser compatibility and mobile responsiveness.",
      ],
    },
  ],
  projects: [
    {
      name: "GUMP — Mass Mailing SaaS",
      description:
        "Scalable multi-tenant SaaS platform for managing large-scale email campaigns with drag-and-drop template builder and real-time analytics.",
      tags: ["React", "TypeScript", "GrapesJS", "AWS S3", "CloudFront"],
      highlights: [
        "Multi-tenant architecture with secure isolated environments",
        "Campaigns exceeding 1M+ emails with dynamic content",
        "Real-time delivery and engagement analytics",
      ],
      url: "https://gumpnow.com",
    },
    {
      name: "Real-Time VoIP App",
      description:
        "Browser-based VoIP application supporting calls, conferencing, and two-way SMS communication with low-latency real-time features.",
      tags: ["React", "Twilio", "WebRTC", "TypeScript"],
      highlights: [
        "Browser-based calling and conferencing",
        "Two-way SMS communication",
        "Responsive across desktop and mobile",
      ],
      url: "https://calilio.com",
    },
    {
      name: "Cargo Tracking System",
      description:
        "Logistics tracking platform with real-time shipment visibility, status updates, pricing workflows, and operational dashboards.",
      tags: ["React", "TypeScript", "REST APIs"],
      highlights: [
        "Real-time shipment visibility and status updates",
        "Pricing workflow automation",
        "Interactive dashboards for operational metrics",
      ],
      url: "",
    },
    {
      name: "Versify — Encrypted Chat",
      description:
        "Real-time chat application with end-to-end encryption using Diffie-Hellman key exchange for secure user communication.",
      tags: ["React", "Node.js", "WebSockets", "E2E Encryption"],
      highlights: [
        "End-to-end encryption via Diffie-Hellman key exchange",
        "Real-time messaging with state management",
        "Interactive messaging UI",
      ],
      url: "https://github.com/RozeelKusma/versify-frontend",
    },
  ],
  skills: {
    Frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
    "State Management": ["Redux", "Zustand", "Context API"],
    Backend: ["NestJS", "PostgreSQL", "REST APIs", "GraphQL"],
    "Cloud & DevOps": [
      "AWS EC2",
      "AWS S3",
      "CloudFront",
      "Lambda",
      "CodePipeline",
    ],
    Tools: ["Git", "Vite", "Apollo Client", "GrapesJS", "Twilio", "WebRTC"],
  },
  education: [
    {
      degree: "BSc. Computer Science and Information Technology",
      institution: "Bhaktapur Multiple Campus",
      period: "2017 — 2022",
    },
    {
      degree: "Higher Secondary Education (Science)",
      institution: "S.S College",
      period: "2015 — 2017",
    },
  ],
};
