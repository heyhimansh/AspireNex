import { useEffect } from "react";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import { applyTheme } from "./themes/utils";
import baseTheme from "./themes/base";
import darkTheme from "./themes/dark";
import Switch from '@mui/material/Switch';

function App() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);
 
  const handleChange = (evt) => {
    applyTheme(evt.target.checked?darkTheme:baseTheme);
  }

  return (
    <>
      <Switch onChange={handleChange} className="pull-right" />
      <CustomCursor />
      <Hero />
      <Projects /> 
      <TechStack />
      <Contact />
    </>
  );
}

export default App;
