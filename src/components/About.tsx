function About() {
  return (
    <section id="about" className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-5 text-center">
          About Me
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            Hello! I'm Shashank, a passionate{" "}
            <span className="font-medium">MERN Stack Developer</span> with 3
            years of experience building responsive, scalable, and user-friendly
            web applications. I specialize in{" "}
            <span className="font-medium">React.js</span>,{" "}
            <span className="font-medium">Node.js</span>,{" "}
            <span className="font-medium">MongoDB</span>, and
            <span className="font-medium"> Express.js</span>, and I'm also{" "}
            <span className="font-medium">AWS Certified</span>, enabling me to
            build and deploy applications with cloud efficiency.
          </p>
          <p className="text-gray-700">
            When I'm not coding, you’ll find me exploring new technologies,
            reading tech blogs, or hiking. I’m always eager to learn and stay
            ahead in the industry by expanding my skills across both{" "}
            <span className="font-medium">frontend</span> and{" "}
            <span className="font-medium">backend development</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
