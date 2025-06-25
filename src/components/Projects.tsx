import Project1Image from "../assets/react-gmap-ui-preview.png";
import PortfolioImage from "../assets/portfolio-preview.png";
import LogiSaas from "../assets/LogiSaas-preview.png";
import DashboardAdminView from "../assets/student-enter-key.png";
import github from "../assets/svg/github.svg";
import { useState } from "react";

const Projects = () => {
  const [siteType] = useState("personal");

  return (
    <section id="projects" className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1  */}
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
                      href="https://react-gmap-ui.netlify.app/"
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
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded inline-block w-auto min-w-[60px] text-center">
                  React
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded inline-block w-auto min-w-[90px] text-center">
                  React Hooks
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded inline-block w-auto min-w-[60px] text-center">
                  Tailwind
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded inline-block w-auto min-w-[150px] text-center">
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
          {/* Project 3 - */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img
              src={LogiSaas}
              alt="Portfolio Website"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <div className="flex justify-between items-center">
                  <div> LogiSaas - Company Project</div>
                  {siteType === "company" ? (
                    <div className="flex space-x-2">
                      <a
                        title="View Source Code on GitHub"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:color-blue-600 hover:bg-blue-200  p-0.5 rounded "
                      >
                        <img
                          src={github}
                          alt="github Logo"
                          className="w-4 h-4"
                        />
                      </a>
                      <a
                        title="View Live Demo"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:color-blue-600 hover:bg-blue-200  p-0.5 rounded "
                      >
                        🔗
                      </a>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </h3>
              <p className="text-gray-700 mb-3">
                A logistics SaaS product enabling users to create, start, track,
                and end trips, as well as raise expenses. Includes interactive
                charts for visualizing trip and expense data.
              </p>
              <div className="flex  gap-2 mb-3 overflow-x-auto">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  Tailwind
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  NodeJS
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  PostgreSQL
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  AWS
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>
          {/* Project 3 - */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img
              src={DashboardAdminView}
              alt="Activation App Student Enter Code UI"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <div className="flex justify-between items-center">
                  <div>Activation App - Admin/Student Portal</div>
                  {siteType === "company" ? (
                    <div className="flex space-x-2">
                      <a
                        title="View Source Code on GitHub"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:color-blue-600 hover:bg-blue-200 p-0.5 rounded"
                      >
                        <img
                          src={github}
                          alt="github Logo"
                          className="w-4 h-4"
                        />
                      </a>
                      <a
                        title="View Live Demo"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:color-blue-600 hover:bg-blue-200 p-0.5 rounded"
                      >
                        🔗
                      </a>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </h3>
              <p className="text-gray-700 mb-3">
                A web application for student activation and management. Admins
                can generate activation codes, manage student accounts, and
                monitor usage. Students use the portal to activate their
                accounts and access resources.
              </p>
              <div className="flex gap-2 mb-3 overflow-x-auto">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  NodeJS
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  Express
                </span>
                <span className="bg-blue-100  text-blue-800 text-xs px-2 py-1 rounded">
                  MaterialUI
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  SQL
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  AWS
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
