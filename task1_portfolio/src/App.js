import { useEffect } from "react";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import { applyTheme } from "./themes/utils";
import baseTheme from "./themes/base";

function App() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);

  const navigation = [
    { name: "About me", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Languages", href: "#tech-stack" },
    { name: "Connect", href: "#contact-section" },
  ];
  return (
    <>
    <nav className="flex bg-[#ade8f4] items-center justify-between pt-6 lg:px-8" aria-label="Global">
      <div className="m-auto  lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm  leading-6 text-[#0096c7] hover:text-[#48cae4] font-Glimer-Medium font-medium"
          >
            {item.name}
          </a>
        ))}
      </div>
      </nav>
      <CustomCursor />

      <Hero />
      <Projects />
      <TechStack />
      <Contact />
    </>
  );
}

export default App;
