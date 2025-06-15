const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto py-6 px-4 text-center">
        <img
          title="Shashank M M"
          src="/api/placeholder/400/400"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Full Stack Developer
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          <span className="font-medium text-primary no-underline hover:underline">
            MERN Stack Developer
          </span>{" "}
          turning complex ideas into clean, scalable, and user-friendly web
          applications.
        </p>
        <div className="mt-6 p-2">
          <a
            title="Experience To Hire"
            href=""
            className="bg-blue-600 text-white px-6 py-2 m-2 rounded-md font-medium hover:bg-blue-700"
          >
            Get in touch
          </a>
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
