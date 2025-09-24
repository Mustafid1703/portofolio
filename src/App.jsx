import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/herosection";
import School from "./components/school";




function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <School />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
