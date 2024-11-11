"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { KoHo } from "next/font/google";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 gap-x-4 list-disc pl-2">
        <li>Go</li>
        <li>C/C++</li>
        <li>Kubernetes</li>
        <li>Azure</li>
        <li>Ballerina</li>
        <li>AWS hosting</li>
        <li>Spring Boot</li>
        <li>React.js</li>
        <li>PHP</li>
        <li>Python</li>
        <li>R</li>
        <li>Octave</li>
        <li>Node JS</li>
        <li>Express JS</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>SQLite</li>
        <li>Kotlin</li>
        <li>Flutter</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Colombo School of Computing - Bsc.(Hons) Computer Science Undergraduate</li>
        <li>Esoft Metro Campus - DITEC/DIE Dual Diploma</li>
        <li>National Youth Services Council - Diploma in Computer Hardware and Networking</li>
        <li>St. Sebastian's College, Moratuwa - GCE A/L,O/L</li>
      </ul>
    ),
  },
  {
    title: "Honors & Awards",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4">
        <li className="font-bold">Academic Achievements</li>
        <ul className="list-disc pl-6">
          <li>Top of the Batch: Currently a fourth-year student at the University of Colombo School of Computing, maintaining the highest overall GPA in the first three academic years.</li>
          <li>GPA: Achieved a GPA of 3.99/4.0 in the first year, and 4.0/4.0 in both the second and third years.</li>
          <li>Director's List Awardee:
            <ul className="list-disc pl-6">
              <li>Second Academic Year</li>
              <li>Third Academic Year</li>
            </ul>
          </li>
        </ul>
        <li className="font-bold">Competitions & Hackathons</li>
        <ul className="list-disc pl-6">
          <li>All Island "MADHACK" Inter-Uni Hackathon: Finalist (2024)</li>
          <li>FreshHack 2.0: Participant</li>
          <li>IET Hackathon: Participant</li>
          <li>ReidExtreme 2022: Participant</li>
        </ul>
        <li className="font-bold">Sports Achievements</li>
        <ul className="list-disc pl-6">
          <li>“Deuced” Inter-University Tennis Championship: Champions</li>
        </ul>
      </ul>

    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a top-ranking Computer Science (Hons) undergraduate at the University of Colombo School of Computing, holding a GPA of 3.99/4 and having completed an impactful internship at WSO2, a leading open-source software company. Currently, I am a full-time researcher with the Cloudnet Research Group at UCSC, where I specialize in Cloud Computing and VM migration, furthering my expertise in advanced technologies and complex problem-solving. My technical skills encompass Go, Kubernetes, Azure, Ballerina, AWS hosting, Spring Boot, React.js, and PHP, all of which I’ve applied across various projects to architect solutions that deliver value. Passionate about technology and innovation, I am committed to contributing to projects that shape the future digital landscape, excelling in algorithmic thinking and the integration of the latest technologies.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Honors & Awards{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
