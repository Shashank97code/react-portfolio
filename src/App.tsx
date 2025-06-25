import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import { Footer } from "./components/Footer";
import MainSection from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    //  Header

    <div className="bg-gray-100 w-[500px] md:w-full lg:w-full xl:w-full 2xl:w-full">
      <MainSection />
      {/* Hero Section  */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-32">
        <HeroSection />
        {/* About Section */}
        <About />
        {/* Project Section */}
        <Projects />
        {/* Blog Section */}
        <div>
          <Blog />
        </div>
        {/* Skills Section */}
        <Skills />
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
