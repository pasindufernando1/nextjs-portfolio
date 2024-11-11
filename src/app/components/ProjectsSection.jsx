"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "LifeLine",
    description: "A blood bank and donation management system connecting blood banks, donors, hospitals, and organizations across Sri Lanka. Led a team to develop this 'A' grade project using HTML, CSS, JavaScript, and PHP.",
    duration: "Jun 2022 - Jun 2023",
    features: [
      "Efficient Blood Reserve Management",
      "Streamlined Communication",
      "Vital Equipment Tracking",
      "Campaign Coordination",
      "Donor Management",
      "Facilitating Cash & Inventory Donations"
    ],
    image: "/images/projects/lifeLine.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pasindufernando1/LIFELINE-second-year-group-project-CS-Group-38-",  // Update with actual GitHub link if available
    previewUrl: "/" // Update with project preview link if available
  }
  ,
  {
    id: 2,
    title: "VentureVerse",
    description: "A platform to support entrepreneurship and innovation in Sri Lanka, connecting aspiring entrepreneurs with investors, mentors, and financial support. Led a team to develop this 'A+' grade project using Spring Boot, React, PostgreSQL, and AWS.",
    duration: "May 2023 - Sep 2023",
    features: [
      "User-friendly profiles for investors and entrepreneurs",
      "Project showcases with business plans and financial projections",
      "Video pitching and virtual pitch sessions",
      "Secure communication channels (messaging, chat, video conferencing)",
      "Data-driven insights and analytics",
      "Gamification elements for enhanced user engagement"
    ],
    image: "/images/projects/lifeline.jpg", // Update with actual image
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pasindufernando1/VentureVerse",  // Update with actual GitHub link if available
    previewUrl: "/" // Update with project preview link if available
  },

  {
    id: 1,
    title: "Sri-Care",
    description : "Sri-Care is an innovative customer care platform designed to enhance the customer experience for Sri Tel Ltd, a leading telecommunications provider in Sri Lanka. Developed as part of the Middleware Architecture module, this project focuses on improving customer engagement and optimizing service delivery through a seamless multi-platform solution. Led a team to implement a microservices architecture using Spring Boot, React, and AWS.",
    duration: "Sep 2023 - Nov 2023",
    features: [
      "Customer-Care Web Portal for managing accounts and telecom services",
      "Real-Time Chat Support powered by the Publish-Subscribe (Pub/Sub) pattern",
      "Comprehensive Service Management (roaming, ring tones, data top-ups)",
      "Secure Online Payment Gateway integration",
      "Microservices architecture using Spring Boot and API Gateway",
      "Multiple Consumers Integration Pattern for optimized service delivery"
    ],
  image: "/images/projects/lifeline.jpg",  // Update with actual image
    tag: ["All", "Web", "Microservices"],
    gitUrl: "https://github.com/pasindufernando1/Sri-Tel",  // Update with actual GitHub link if available
    previewUrl: "/"  // Update with project preview link if available
  }
  ,
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
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
