import ProfileIcon from "../assets/Shashank-profile.png";

const HeroSection = () => {
  return (
    <section className="bg-white w-[500px] md:w-full lg:w-full xl:w-full 2xl:w-full">
      <div className="max-w-4xl mx-auto py-6 px-2 text-center">
        <img
          title="Shashank M M"
          src={ProfileIcon}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight drop-shadow-sm">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Turning complex ideas into{" "}
          <span className="text-2xl font-bold text-blue-600">clean</span>,{" "}
          <span className="text-2xl font-bold text-green-600">scalable</span>,
          and{" "}
          <span className="text-2xl font-bold text-purple-600">
            user-friendly
          </span>{" "}
          web applications with{" "}
          <span className="text-2xl font-bold text-red-400">
            secure API development
          </span>{" "}
          and{" "}
          <span className="text-2xl font-bold text-yellow-700">
            seamless backend integration
          </span>
          .
        </p>
        <div className="mt-6 p-2">
          <a
            title="Download Resume"
            target="_blank"
            href="https://shashank-resume.s3.ap-south-1.amazonaws.com/Shashank-M-M-Resume-Full-Stack.pdf"
            className="bg-blue-600 text-white px-6 py-2 m-2 rounded-md font-medium hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
