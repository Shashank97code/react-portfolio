import Project1Image from "../assets/react-gmap-ui-preview-with-vehicle-marker.png";
import PortfolioImage from "../assets/portfolio-preview.png";
import LogiSaas from "../assets/logiSaas-project-preview.png";
import DashboardAdminView from "../assets/student-enter-key.png";
import github from "../assets/svg/github.svg";
import { useState } from "react";
import TodoAppPreview from "../assets/todo-app-preview.png";

const Projects = () => {
  const [siteType] = useState("personal");

  return (
    <section id="projects" className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 : ToDo */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
            <img
              src={TodoAppPreview}
              alt="React + Google Map UI"
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                <div className="flex justify-between items-center">
                  <div className="text-gray-900">React ToDo App - Todozi</div>
                  <div className="flex space-x-2">
                    <a
                      title="View Source Code on GitHub"
                      href="https://github.com/Shashank97code/todozi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:color-blue-600 hover:bg-blue-200  p-0.5 rounded "
                    >
                      <img src={github} alt="github Logo" className="w-4 h-4" />
                    </a>
                    <a
                      title="View Live Demo"
                      href="https://ornate-empanada-3d786a.netlify.app/"
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
                A simple and intuitive ToDo app built with React, allowing users
                to create, complete, and manage tasks efficiently. The app
                features a clean UI and responsive design.
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
              </div>
            </div>
          </div>
          {/* Project 2  : portfolio*/}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
            <img
              src={PortfolioImage}
              alt="Portfolio Website"
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
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
                    {siteType === "personal" ? (
                      <a
                        title="Currently Viewing"
                        href="#"
                        className="text-sm text-gray-400 cursor-not-allowed p-0.5 rounded"
                        tabIndex={-1}
                        aria-disabled="true"
                      >
                        👁️
                      </a>
                    ) : null}
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
          {/* Project 3  : react-maps*/}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
            <img
              src={Project1Image}
              alt="React + Google Map UI"
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
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
                interactive vehicle markers and info windows.
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
          {/* Project 4 - LogiSaas*/}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
            <img
              src={LogiSaas}
              alt="Portfolio Website"
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
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
          {/* Project 5 - Vb KHSS-KHXR */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-2xl">
            <img
              src={DashboardAdminView}
              alt="Activation App Student Enter Code UI"
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
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
