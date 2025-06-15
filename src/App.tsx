import "./App.css";
import MainSection from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <MainSection />
      <HeroSection />
    </div>
  );
}

export default App;
