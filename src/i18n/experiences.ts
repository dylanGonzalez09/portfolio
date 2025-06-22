export type Language = "es" | "en";

export const experiences: Record<
  Language,
  {
    startDate: string;
    finishDate: string;
    company: string;
    title: string;
    description: string;
  }[]
> = {
  es: [
    {
      startDate: "Octubre 2024",
      finishDate: "Febrero 2025",
      company: "CEMCIT AIP",
      title:
        "Desarrollo de soluciones tecnológicas de asistencia para personas con discapacidad, divididas en dos aplicaciones complementarias (RETINA)",
      description:
        "Con el cargo de Estudiante Asistente de Investigación logré realizar dos aplicaciones. Aplicación móvil (Android e iOS): Permite la localización en tiempo real mediante GPS, configuración de zonas seguras y envío de alertas automáticas a cuidadores en caso de que los usuarios salgan de estas zonas, Dashboard web administrativo: Herramienta para que los administradores de la UTP gestionen usuarios, roles y ubicaciones de forma centralizada",
    },
    {
      startDate: "Septiembre 2023",
      finishDate: "Febrero 2024",
      company: "CEMCIT AIP",
      title:
        "Implementación de herramientas de tecnologías de asistencia para mejorar la calidad de vida de personas con discapacidad (RETINA)",
      description:
        "Con el cargo de Estudiante Asistente de Investigación logré realizar un proyecto de aplicación móvil en android, el cual consiste en la implementación de Herramientas de Tecnologías de Asistencia para Mejorar la Calidad de Vida de Personas con Discapacidad",
    },
  ],
  en: [
    {
      startDate: "October 2024",
      finishDate: "February 2025",
      company: "CEMCIT AIP",
      title:
        "Development of assistive technology solutions for people with disabilities, divided into two complementary applications (RETINA)",
      description:
        "As a Research Assistant Student, I developed two applications. Mobile application (Android and iOS): Enables real-time location via GPS, safe zone setup, and automatic alerts to caregivers when users leave those zones. Web admin dashboard: Tool for UTP administrators to manage users, roles, and locations centrally.",
    },
    {
      startDate: "September 2023",
      finishDate: "February 2024",
      company: "CEMCIT AIP",
      title:
        "Implementation of assistive technology tools to improve the quality of life for people with disabilities (RETINA)",
      description:
        "As a Research Assistant Student, I developed an Android mobile app project implementing assistive technology tools to enhance quality of life for people with disabilities.",
    },
  ],
};
