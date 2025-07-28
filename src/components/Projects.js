import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "AI-Powered Medical Exam Platform",
    image1:
      "/assets/portfolio/1-1.png",
    image2:
      "/assets/portfolio/1-2.png",
    description:
      "Contributed to the development of the platform  that provides a chat-bot for exam emulation for medical students. On the backend, I built scalable APIs with Django and Django REST Framework, optimizing data retrieval for smooth interactions with a PostgreSQL database. For the frontend, I used React and Redux to create dynamic, mobile-friendly interfaces. I also integrated PayPal and Stripe for secure payments and used Amazon ECS for efficient containerized deployments. Also, I implemented unit tests, achieving 80% test coverage to ensure reliable, bug-free code",
    tools: [
      "Python",
      "Django",
      "Langchain",
      "PostgreSQL",
      "React.js",
      "Tailwind CSS",
    ],
    liveLink: "https://www.oscer.ai/",
    fullStackLink: "",
    frontEndLink: "",
    backEndLink: "",
  },
  {
    id: 2,
    title: "Interactive 3D Garden Room Configurator",
    image1:
      "/assets/portfolio/2-1.png",
    image2:
      "/assets/portfolio/2-2.png",
    description:
      "Built an interactive 3D garden room configurator that enables users to design custom garden buildings in real-time. On the backend, I built robust APIs using Node.js and Express, managing configuration data and ensuring smooth communication with a MongoDB database. On the frontend, I used React and React Three Fiber to create a visually rich, drag-and-drop 3D design interface that works seamlessly across desktop and mobile. I implemented dynamic pricing logic, real-time dimension validation, and embedded export features to support quoting and order submissions. Additionally, I optimized rendering performance for large 3D models and deployed the platform using Docker and AWS Fargate for scalable, container-based infrastructure.",
    tools: [
      "Node.js",
      "Three.js",
      "React.js",
      "React-three-fiber",
      "MongoDB",
      "Docker",
    ],
    liveLink: "https://gardenroomplanner.com/app",
    fullStackLink: "",
    frontEndLink: "",
    backEndLink: "",
  },
  {
    id: 3,
    title: "Food Delivery Website",
    image1:
      "/assets/portfolio/3-1.png",
    image2:
      "/assets/portfolio/3-2.png",
    description:
      "Developed the delivery website that connected customers with food companies, available them to order food from the comfort of their homes. I used React for the front end, creating a robust and responsive application, and Node.js and Express.js for the back end I implemented Redux , to optimize the website's performance and data flow between components. To ensure a secure environment for users, I designed and implemented a user authentication system. I also developed a payment processing system by integrating multiple payment gateways, smooth and secure transactions for users. This approach not only improved user experience but also boosted customer trust and satisfaction with the platform",
    tools: [
      "Next.js",
      "React.js",
      "PostgreSQL",
      "Stripe",
      "Prisma",
      "GCP",
      "Tailwind CSS",
    ],
    liveLink: "https://deliveroo.co.uk/",
    fullStackLink: "",
    frontEndLink: "",
    backEndLink: "",
  },
  {
    id: 4,
    title: "Online Rental Portal Booking System",
    image1:
      "/assets/portfolio/4-1.png",
    image2:
      "/assets/portfolio/4-2.png",
    description:
      "Developed the online search portal for rentals platform. My roles involved implementing the core search functionalities for various types of accommodations, such as hotels, villas, houses, and resorts, using React for the front end and Next.js for server-side rendering. In this role, I also implemented the development of a multi-language system on the front end and ensuring a smooth user experience across different language settings. Also, I developed REST APIs for new features, ensuring seamless integration with the front end, and created administration portals to efficiently manage the main database information. Through these efforts, I contributed in improving the functionality and performance of the online rental portal",
    tools: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
    ],
    liveLink: "https://www.vacationrenter.com/",
    fullStackLink: "",
    frontEndLink: "",
    backEndLink: "",
  },
  {
    id: 5,
    title: "Jersey Configurator",
    image1:
      "/assets/portfolio/5-1.png",
    image2:
      "/assets/portfolio/5-2.png",
    description:
      "I contributed to the development of the GlobalTech Jersey e-commerce platform, which specializes in customized sports apparel. On the backend, I built RESTful APIs using Node.js and Express, ensuring high performance and scalability, with Firebase as the primary database for managing product and order data. For the frontend, I implemented a responsive, interactive UI using React and Tailwind CSS, enabling a smooth and modern shopping experience. I integrated Shopify storefront API and Stripe for secure checkout and payments. Additionally, I configured Netlify CI/CD pipelines for seamless deployments and implemented Jest-based unit tests, maintaining over 80% test coverage to guarantee stable and maintainable code.",
    tools: ["React.js", "Three.js", "Shopify", "Redux Toolkit", "Firebase"],
    liveLink: "https://globaltech-jersey.netlify.app/",
    fullStackLink: "",
    frontEndLink: "",
    backEndLink: "",
  }
];

const Projects = () => {
  return (
    <div className='projects container mx-auto mt-40' id='projects'>
      <SectionTitle title={"My Projects"} />
      <div className='projects-wrapper mt-40 flex flex-col gap-10'>
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
