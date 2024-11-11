"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "} 
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Pasindu Fernando",
                1000,
                "A 4th Year CS(Hons) Undergraduate",
                1000,
                "A Full Stack Developer",
                1000,
                "A Former Intern at WSO2",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            As a top-performing Computer Science (Hons) undergraduate at the University of Colombo School of Computing, I maintain an exceptional GPA of 3.99/4, placing me at the top of my batch. My academic journey is complemented by a completed internship at WSO2, a leading open-source software company renowned for its enterprise-grade solutions in cloud, API, integration, and identity management.<br/>

            Currently, I am a full-time researcher at the Cloudnet Research Group at UCSC, where I specialize in Cloud Computing and VM migration. This role has honed my expertise in innovative technologies and complex problem-solving.<br/>

            My technical proficiency spans a broad spectrum, including Go, Kubernetes, Azure environments, Ballerina, AWS hosting, Spring Boot, React.js, and PHP. These skills have been applied to numerous assignments and projects, where I consistently strive to architect elegant solutions that deliver substantial value.<br/>

            Driven by a passion for technology and innovation, I am eager to contribute to cutting-edge projects that shape the digital landscape of tomorrow. I excel in algorithmic thinking and embracing the latest technologies, always aiming to push the boundaries of what’s possible in software engineering.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/mydp.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
