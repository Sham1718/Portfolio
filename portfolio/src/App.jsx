import "./App.css";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Project";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
     <main className="bg-white dark:bg-[#0f0f0f] text-black dark:text-white transition-colors duration-300">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;