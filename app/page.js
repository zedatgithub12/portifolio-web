"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getLPTheme from "@/getLPTheme";
import WebAppBar from "@/components/WebAppBar";
import Hero from "@/components/hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Whyme from "@/components/Whyme";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import WorkLife from "@/components/WorkLife";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [mode, setMode] = React.useState("light");
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Box>
        <WebAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Services />
        <Whyme />
        <Projects />
        <Testimonials />
        <WorkLife />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
