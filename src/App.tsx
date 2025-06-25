import "./App.css";
import About from "./components/About";
import { Footer } from "./components/Footer";
import MainSection from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    //  Header
    <div className="min-h-screen bg-gray-100">
      <MainSection />
      {/* Hero Section  */}
      <HeroSection />
      {/* About Section */}
      <About />
      {/* Project Section */}
      <Projects />
      {/* Skills Section */}
      <Skills />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
