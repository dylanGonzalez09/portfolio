export type Language = "es" | "en";

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  techStack: string[];
}

export const projects: Record<Language, Project[]> = {
  es: [
    {
      title:
        "Aplicación Android e IOS para la monitorización de personas mayores discapacitadas",
      description:
        "Desarrollé una aplicación web y otra móvil para Android e IOS en colaboración con el CEMCIT AIP, utilizando Next js para la aplicación web y la API y React Native con Expo para la aplicación Android e IOS. Permitiendo la monitorización para personas mayores con discapacidades, los cuidadores pueden monitorizar la ubicación, establecer zonas seguras y recibir alertas mediante notificaciones push. La aplicación web permite a los administradores de la UTP gestionar usuarios, roles y ubicaciones de forma centralizada.",
      image: "/pamt.png",
      link: "",
      github: "",
      techStack: ["React Native", "Next JS", "MySQL"],
    },
    {
      title: "Aplicación Android para la Gestión y alertas de Medicamentos",
      description:
        "Desarrollé una aplicación móvil para Android en colaboración con el CEMCIT AIP, utilizando Java y tecnología NFC. Esta solución permite a los usuarios gestionar de manera eficiente sus medicamentos y enviar recordatorios automáticos tanto a los usuarios (adultos mayores) como a sus familiares, mejorando el control y seguimiento de tratamientos médicos.",
      image: "/panfc.png",
      link: "",
      github: "",
      techStack: ["Java", "SQLite", "NFC", "Android Studio"],
    },
    {
      title: "Exoplanets-AI",
      description:
        "Participé en el desarrollo del proyecto Exoplanets-AI, como parte de una Hackathon organizada por el streamer Midudev y Vercel. Durante este desafío colaborativo, implementamos un entorno 3D utilizando tecnologías como react-three-fiber y el AI SDK de Vercel para representar exoplanetas a escala real, combinando visualización interactiva y datos científicos reales obtenidos desde la API de la nasa.",
      image: "/exoplanets-ai.png",
      link: "https://exoplanets-ai.vercel.app",
      github: "https://github.com/dylanGonzalez09/exoplanets-ai",
      techStack: ["Next JS", "Three JS", "TypeScript"],
    },
    {
      title: "QuicklyDocs",
      description:
        "Desarrollé una aplicación web impulsada por Inteligencia Artificial para la creación rápida y eficiente de documentos. Durante el proceso, integré herramientas avanzadas de RichText e Inteligencia Artificial, permitiendo a los usuarios generar documentos listos para exportar de forma sencilla y ágil.",
      image: "/quicklydocs.png",
      link: "https://quicklydocs.com",
      github: "",
      techStack: ["Next JS", "Prisma", "Next Auth", "TypeScript", "MySQL"],
    },
    {
      title: "TesloShop E-commerce",
      description:
        "Completé un curso intensivo de 36.5 horas sobre Next.js v14, donde adquirí habilidades avanzadas en la implementación de sus nuevas características. Durante el curso, desarrollé un e-commerce completo, integrando funciones clave como autenticación de usuarios, gestión de carrito de compras y procesamiento de pagos en línea a través de PayPal.",
      image: "/teslo-shop.png",
      link: "https://tesloshop-ecommerce.vercel.app/",
      github: "https://github.com/dylanGonzalez09/tesloshop-ecommerce",
      techStack: [
        "Next JS",
        "Prisma",
        "Next Auth",
        "TypeScript",
        "PostgreSql",
        "Docker",
      ],
    },
    {
      title: "AccesaYa",
      description:
        "AccesaYa es un proyecto desarrollado para participar en la JIC UTP, diseñado específicamente para mejorar la movilidad de las personas con discapacidad motriz en Panamá. Utilizando tecnología GPS, AccesaYa facilita la localización de baños y estacionamientos accesibles, optimizando así la independencia y comodidad de sus usuarios.",
      image: "/accesa-ya.png",
      link: "https://accesaya.vercel.app/",
      github: "",
      techStack: ["React JS", "Mongo DB", "Node JS"],
    },
  ],
  en: [
    {
      title:
        "Android and iOS App for Monitoring Elderly People with Disabilities",
      description:
        "I developed a web and mobile app (Android & iOS) in collaboration with CEMCIT AIP, using Next.js for the web app and API, and React Native with Expo for the mobile version. It enables caregivers to track the location of elderly individuals with disabilities, set safe zones, and receive push notifications. The web dashboard allows UTP admins to manage users, roles, and locations centrally.",
      image: "/pamt.png",
      link: "",
      github: "",
      techStack: ["React Native", "Next JS", "MySQL"],
    },
    {
      title: "Android App for Medicine Management and Alerts",
      description:
        "I developed an Android app in collaboration with CEMCIT AIP using Java and NFC technology. This solution helps users efficiently manage medications and send automatic reminders to both users (elderly people) and their families, improving treatment monitoring.",
      image: "/panfc.png",
      link: "",
      github: "",
      techStack: ["Java", "SQLite", "NFC", "Android Studio"],
    },
    {
      title: "Exoplanets-AI",
      description:
        "I participated in the development of the Exoplanets-AI project, as part of a hackathon organized by Midudev and Vercel. We built a 3D environment using react-three-fiber and Vercel's AI SDK to represent real-scale exoplanets, combining interactive visuals and real data from NASA's API.",
      image: "/exoplanets-ai.png",
      link: "https://exoplanets-ai.vercel.app",
      github: "https://github.com/dylanGonzalez09/exoplanets-ai",
      techStack: ["Next JS", "Three JS", "TypeScript"],
    },
    {
      title: "QuicklyDocs",
      description:
        "I built an AI-powered web app for fast and efficient document creation. It integrates advanced RichText editing tools and artificial intelligence to help users generate export-ready documents quickly and easily.",
      image: "/quicklydocs.png",
      link: "https://quicklydocs.com",
      github: "",
      techStack: ["Next JS", "Prisma", "Next Auth", "TypeScript", "MySQL"],
    },
    {
      title: "TesloShop E-commerce",
      description:
        "I completed a 36.5-hour intensive course on Next.js v14, mastering new features and building a full e-commerce site. It includes user authentication, cart management, and online payment processing via PayPal.",
      image: "/teslo-shop.png",
      link: "https://tesloshop-ecommerce.vercel.app/",
      github: "https://github.com/dylanGonzalez09/tesloshop-ecommerce",
      techStack: [
        "Next JS",
        "Prisma",
        "Next Auth",
        "TypeScript",
        "PostgreSql",
        "Docker",
      ],
    },
    {
      title: "AccesaYa",
      description:
        "AccesaYa is a project created for the JIC UTP event, aimed at improving mobility for people with motor disabilities in Panama. Using GPS technology, the app helps users locate accessible bathrooms and parking, increasing independence and comfort.",
      image: "/accesa-ya.png",
      link: "https://accesaya.vercel.app/",
      github: "",
      techStack: ["React JS", "Mongo DB", "Node JS"],
    },
  ],
};
