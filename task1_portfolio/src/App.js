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
 

  return (
    <>      
      <CustomCursor />
      <Hero />
      <Projects /> 
      <TechStack />
      <Contact />
    </>
  );
}

export default App;
