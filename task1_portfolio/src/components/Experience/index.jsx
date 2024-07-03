import { motion } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";
import { Fade } from "@mui/material";
import React from "react";

const experiences = [
  {
    company: "Blitz Digital Solutions",
    position: "Web Development Intern",
    duration: "Jan 2024 - Feb 2024 · 2 mos",
    location: "Delhi, India · Remote",
    skills: ["HTML", "CSS"],
    proofLink: "https://drive.google.com/file/d/115Z3ThqX85iAQyeVoRMGGaywY4s90gM2/view?usp=drive_link"
  },
  {
    company: "GirlScript Summer of Code",
    position: "GSSoC'23 Contributor",
    duration: "May 2023 - Jul 2023 · 3 mos",
    location: "India · Remote",
    skills: ["React.js", "JavaScript"],
    proofLink: "https://drive.google.com/file/d/1J1YIYfUclCF0Xq4y4DE5MaXDqj8m8myQ/view?usp=drive_link"
  },
  {
    company: "LegalBrain.ai",
    position: "Frontend Developer",
    duration: "Apr 2023 - Jun 2023 · 3 mos",
    location: "Delhi, India · Hybrid",
    description:
      "Developed and enhanced LegalBrain.ai's primary website during internship; collaborated with cross-functional teams to drive UI/UX improvements and boost user engagement by 40% through streamlined navigation and interactive features",
    skills: ["Software Infrastructure", "Front-End Development"],
    proofLink: "#"
  },
  {
    company: "Mood Indigo IIT Bombay",
    position: "Indigo Squad Member",
    duration: "Sep 2022 - Nov 2022 · 3 mos",
    location: "Remote",
    skills: ["Project Management", "Strategic Communications"],
    proofLink: "https://drive.google.com/file/d/1uaCxaya6TLPQZG3xVQICyVpClKBW4jgB/view?usp=drive_link"
  },
  {
    company: "MLH Fellowship",
    position: "MLH Fellowship",
    duration: "Jul 2022 - Jul 2022 · 1 mo",
    location: "New York, United States · Remote",
    description:
      "I've been selected to participate in a 4-week technologist training program, involving hands-on collaboration on real-world projects.",
    skills: ["React.js", "JavaScript","Nodejs"],
    proofLink: "https://drive.google.com/file/d/1wdmKi3O7qNj6ECs2slOUUtjbAVXAfLbA/view?usp=sharing"
  },
];
const Experience = () => {
    return (
      <section
        id="experience"
        className="w-full bg-primary xl:px-44 lg:px-40 sm:pt-24 sm:pb-0 pt-28 md:px-32 sm:px-28 vvs:px-12 px-10"
      >
        <div className="experience-container flex flex-col">
          <h1 className="text-[#0096c7] font-Glimer-Bold 2xl:text-[4.5rem] xl:text-[4.2rem] lg:text-[3.5rem] md:text-[3rem] sm:text-[1.5rem] vvs:text-[1.3rem] text-[1.2rem] tracking-normal xl:leading-[70px] md:leading-[60px] lg:leading-[50px] sm:leading-[40px] vvs:leading-[30px] leading-[20px]">
            Experience ////
          </h1>
          <ul role="list" className="divide-y divide-gray-100 mt-10 ">
            {experiences.map((experience, index) => (
              <motion.li
                key={index}
                className="flex flex-col gap-x-6 py-5 rounded-lg p-8 hover:bg-[#0096c7]/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <div className="min-w-0 flex-auto">
                    <p className="text-l font-semibold leading-6 text-gray-900">
                      {experience.position}
                    </p>
                    <p className="text-sm leading-6 text-gray-900">
                      {experience.company}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-600">
                      {experience.duration}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-600">
                      {experience.location}
                    </p>
                    {experience.description && (
                      <p className="mt-1 text-xs leading-5 text-gray-600">
                        {experience.description}
                      </p>
                    )}
                  </div>
                  
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    {experience.skills.map((skill, skillIndex) => (
                      <p
                        key={skillIndex}
                        className="text-xs leading-5 text-gray-700"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
                <a
                  href={experience.proofLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[#0096c7] hover:text-[#005f73] font-medium text-sm"
                >
                  Link
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Experience;
  