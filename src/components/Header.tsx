const MainSection = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-[white] shadow-sm my-2">
        <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">
            {"<"}
            <span className="px-2 font-blue-700">Shashank M M</span>
            {">"}
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  title="View About Me in Detail"
                  href="#about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  title="View Projects"
                  href="#projects"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  title="View Skills"
                  href="#skills"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  title="Experience To Hire"
                  href="#Experience"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Experience
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MainSection;
