import { useEffect } from "react";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";

import { applyTheme } from "./themes/utils";
import baseTheme from "./themes/base";
import { Link as ScrollLink } from 'react-scroll';

function App() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);

  const navigation = [
    { name: "About me", href: "hero" },
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Languages", href: "tech-stack" },
    { name: "Connect", href: "contact-section" },
  ];

  return (
    <>
      <nav className="flex bg-[#ade8f4] items-center justify-between pt-6 lg:px-8" aria-label="Global">
        <div className="m-auto lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href}
              smooth={true}
              duration={500}
              className="text-sm leading-6 text-[#0096c7] hover:text-[#48cae4] font-Glimer-Medium font-medium cursor-pointer"
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </nav>
      <CustomCursor />

      <Hero />
      <Projects />
      <Experience />
      <TechStack />
      <Contact />
    </>
  );
}

export default App;
