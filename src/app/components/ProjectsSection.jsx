"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "LifeLine",
    description: "A comprehensive Blood Bank and Donation Management System designed to connect blood banks, donors, hospitals, and organizations across Sri Lanka, facilitating a streamlined and efficient process for blood donation and management. This system centralizes blood inventory management, donor records, and donation requests, enabling stakeholders to quickly coordinate and fulfill urgent blood requirements. I led a team to develop this 'A' grade project, employing a tech stack of HTML, CSS, JavaScript, and PHP. We implemented key functionalities, including donor registration and login, real-time blood inventory updates, donation scheduling, and automated notifications for blood requests and upcoming drives. This project demonstrates a robust approach to managing sensitive data and improving accessibility, reliability, and speed in critical healthcare services.",
    duration: "Jun 2022 - Jun 2023",
    features: [
      "Efficient Blood Reserve Management",
      "Streamlined Communication",
      "Vital Equipment Tracking",
      "Campaign Coordination",
      "Donor Management",
      "Facilitating Cash & Inventory Donations"
    ],
    image: "/images/projects/lifeline.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pasindufernando1/LIFELINE-second-year-group-project-CS-Group-38-",  // Update with actual GitHub link if available
    previewUrl: "/" // Update with project preview link if available
  }
  ,
  {
    id: 2,
    title: "VentureVerse",
    description: "A dedicated platform designed to foster entrepreneurship and innovation in Sri Lanka by connecting aspiring entrepreneurs with investors, mentors, and essential financial support. This platform serves as a comprehensive hub, empowering individuals to turn ideas into actionable ventures and promoting the growth of the startup ecosystem. I led a team to develop this 'A+' grade project, leveraging a tech stack of Spring Boot, React, PostgreSQL, and AWS to create a scalable and interactive environment. Key features include a secure user authentication system, personalized profiles for entrepreneurs, a matching algorithm to connect users with relevant investors and mentors, and a knowledge-sharing forum. This project reflects a robust and scalable architecture, combining backend efficiency with a user-friendly interface, aimed at enabling access to resources, networking, and funding opportunities essential for entrepreneurial success.",
    duration: "May 2023 - Sep 2023",
    features: [
      "User-friendly profiles for investors and entrepreneurs",
      "Project showcases with business plans and financial projections",
      "Video pitching and virtual pitch sessions",
      "Secure communication channels (messaging, chat, video conferencing)",
      "Data-driven insights and analytics",
      "Gamification elements for enhanced user engagement"
    ],
    image: "/images/projects/ventureverse.png", // Update with actual image
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pasindufernando1/VentureVerse",  // Update with actual GitHub link if available
    previewUrl: "/" // Update with project preview link if available
  },

  {
    id: 1,
    title: "'Sri-Care' - Customer care platform",
    description : "Sri-Care is an innovative customer care platform designed to enhance the customer experience for Sri Tel Ltd, a leading telecommunications provider in Sri Lanka. Developed as part of the Middleware Architecture module, this project was targeted to understand microservices architecture and middleware components deeply from an implementation perspective. It focuses on improving customer engagement and optimizing service delivery through a seamless multi-platform solution. Led a team to implement a microservices architecture using Spring Boot, React, and AWS.",
    duration: "Sep 2023 - Nov 2023",
    features: [
      "Customer-Care Web Portal for managing accounts and telecom services",
      "Real-Time Chat Support powered by the Publish-Subscribe (Pub/Sub) pattern",
      "Comprehensive Service Management (roaming, ring tones, data top-ups)",
      "Secure Online Payment Gateway integration",
      "Microservices architecture using Spring Boot and API Gateway",
      "Multiple Consumers Integration Pattern for optimized service delivery"
    ],
  image: "/images/projects/SriTel.png",  // Update with actual image
    tag: ["All", "Web", "Microservices"],
    gitUrl: "https://github.com/pasindufernando1/Sri-Tel",  // Update with actual GitHub link if available
    previewUrl: "/"  // Update with project preview link if available
  }
  ,
  {
    id: 4,
    title: "'ToDo' - Task Management Application",
  description: "A mobile application for managing and organizing tasks effectively, developed using Flutter and Dart with SQLite for local data storage. This app enables users to create, categorize, prioritize, and track tasks with ease, enhancing productivity and organization. It features a user-friendly interface for seamless task handling and reminder management.",
    image: "/images/projects/Logo.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/HasalaDissanayake/TaskManager",
    previewUrl: "/",
  },
  {
    
      "id": 5,
      "title": "'Care & Cure' - Hospital Management System",
      "description": "A MERN stack-based web application for hospital appointment scheduling and staff maintenance. The platform allows patients to schedule appointments with doctors based on available time slots, while hospital staff can manage doctor schedules, patient appointments, and staff records. Built with MongoDB, Express, React, and Node.js, the system ensures seamless scheduling and efficient staff management.",
      "image": "/images/projects/mern.avif",
      "tag": ["All", "Web", "MERN", "Healthcare"],
      "gitUrl": "https://github.com/pasindufernando1/SCS-2208---RAD-group-project",
      "previewUrl": "/"
    
    
  },
  {
    "id": 6,
    "title": "Multi-Threaded Web Server",
    "description": "A C-based web server designed to handle HTTP requests in parallel, using a thread pool for concurrent client connections. The server is optimized for high performance by leveraging parallelism to serve multiple client requests simultaneously, without the overhead of constantly creating and destroying threads. The server supports serving static files, including HTML, images, videos, and documents, and includes robust error handling, graceful shutdown on SIGINT, and optimizations for memory usage and file serving efficiency.",
    "image": "/images/projects/wb.png",
    "tag": ["All", "Networking", "Web", "C", "Parallelization"],
    "gitUrl": "https://github.com/pasindufernando1/Multithreaded---Webserver-using-C",
    "previewUrl": "/",
    "steps": [
      "Download the folder containing the source files and open a terminal in the directory where the source files are located.",
      "There are two ways to run the web server:",
      "Option 1:",
      "  1. Run `make` to create the executable.",
      "  2. Run `./main`.",
      "Option 2:",
      "  1. Run `gcc -o main main.c -pthread`.",
      "  2. Run `./main`.",
      "Open a browser and go to `http://localhost:8080` to access the server."
    ],
    "features": [
      "Thread pool-based parallelization for handling multiple client requests simultaneously.",
      "Optimized for concurrent connections without the overhead of creating and destroying threads for each client.",
      "Error handling for socket creation, binding, client connections, and file serving, ensuring robustness and reliability.",
      "Graceful shutdown on SIGINT (Ctrl+C), ensuring the server exits cleanly without abruptly terminating connections.",
      "Support for serving a variety of static file types, including HTML, images, videos, audio, PDFs, and more."
    ],
    "parallelization": {
      "threadPool": "The server utilizes a thread pool with a fixed number of threads (configurable with `THREAD_POOL_SIZE`), ensuring that a predefined number of threads handle client connections. This approach allows efficient resource management by reusing threads to handle multiple requests, eliminating the overhead of thread creation and destruction for each client.",
      "loadBalancing": "A round-robin method is employed to assign client connections to threads in the pool. This evenly distributes client requests across available threads, preventing any single thread from becoming a bottleneck and ensuring efficient use of system resources.",
      "scalability": "By using a thread pool, the server can scale to handle a larger number of simultaneous client requests, as the number of threads can be adjusted based on the system’s resources. This ensures that the server remains responsive even under heavy load."
    },
    "optimizations": [
      "Buffered file reading for efficient memory usage, especially when serving large files.",
      "Use of `snprintf` for safe string formatting to prevent buffer overflows while constructing file paths.",
      "Efficient resource management through the thread pool model, preventing excessive thread creation and destruction."
    ]
  }
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
