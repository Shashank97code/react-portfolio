import Project1Image from "../assets/react-gmap-ui-preview.png";
import PortfolioImage from "../assets/portfolio-preview.png";

import github from "../assets/svg/github.svg";

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img
              src={Project1Image}
              alt="React + Google Map UI"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                <div className="flex justify-between items-center">
                  <div className="text-gray-900"> React + Google Map UI</div>
                  <div className="flex space-x-2">
                    <a
                      title="View Source Code on GitHub"
                      href="https://github.com/Shashank97code/react-vue-gmap-demo/tree/feature/google_tracking/react-gmaps-ui"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:color-blue-600 hover:bg-blue-200  p-0.5 rounded "
                    >
                      <img src={github} alt="github Logo" className="w-4 h-4" />
                    </a>
                    <a
                      title="View Live Demo"
                      href="https://react-gmap-ui-demo.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:color-blue-600 hover:bg-blue-200  p-0.5 rounded "
                    >
                      🔗
                    </a>
                  </div>
                </div>
              </h3>
              <p className="text-gray-700 mb-3">
                Tailwind-styled Google Map integrated with React, featuring
                interactive markers.
              </p>
              <div className="flex space-x-2 mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  React Hooks
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  Tailwind
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  @googlemaps/js-api-loader
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img
              src={PortfolioImage}
              alt="Portfolio Website"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <div className="flex justify-between items-center">
                  <div> Personal Portfolio Website</div>
                  <div className="flex space-x-2">
                    <a
                      title="View Source Code on GitHub"
                      href="https://github.com/Shashank97code/react-portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:color-blue-600 hover:bg-blue-200  p-0.5 rounded "
                    >
                      <img src={github} alt="github Logo" className="w-4 h-4" />
                    </a>
                    <a
                      title="View Live Demo"
                      href="https://shashank-devfolio.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:color-blue-600 hover:bg-blue-200  p-0.5 rounded "
                    >
                      🔗
                    </a>
                  </div>
                </div>
              </h3>
              <p className="text-gray-700 mb-3">
                A personal portfolio website to showcase projects, skills, and
                experience, built with React and Firebase.
              </p>
              <div className="flex space-x-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  Tailwind
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  Components based
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
