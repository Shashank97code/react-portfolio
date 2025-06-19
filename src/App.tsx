import "./App.css";
import About from "./components/About";
import MainSection from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    //  Header
    <div className="min-h-screen bg-gray-100">
      <MainSection />
      {/* Hero Section  */}
      <HeroSection />
      {/* About Section */}
      <About />
    </div>
  );
}

export default App;
