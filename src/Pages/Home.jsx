import Backdrop from "../components/Backdrop";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => (
  <div className="min-h-screen">
    <Backdrop />
    <Navbar />
    <Hero />
    <Experience />
    <Projects />
    <Skills />
    <About />
    <Contact />
    <Footer />
  </div>
);

export default Home;
