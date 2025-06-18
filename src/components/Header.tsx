import linkedIn from "../assets/svg/linkedIn.svg";
import github from "../assets/svg/github.svg";

const MainSection = () => {
  const navItems = [
    { href: "#hero", label: "Home", title: "Go to Home" },
    { href: "#about", label: "About", title: "Go to About" },
    { href: "#projects", label: "Projects", title: "Go to Projects" },
    { href: "#contact", label: "Contact", title: "Go to Contact" },
  ];
  return (
    <header className="bg-white shadow-sm my-2 sticky top-0 ">
      <div className="max-w-7xl mx-auto p-4 flex flex-row justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          {"<"}
          <span className="px-2 text-blue-700">Shashank M M</span>
          {"/>"}
        </h1>
        <nav>
          <ul className="flex space-x-8">
            {navItems?.map((item) => (
              <li key={item.href}>
                <a
                  title={item.title}
                  href={item.href}
                  className={`text-gray-600 hover:text-gray-900 hover:text-blue-700 hover:underline decoration-blue-600 hover:underline-offset-8 ${
                    typeof window !== "undefined" &&
                    window.location.hash === item.href
                      ? "text-blue-700 underline underline-offset-8 decoration-blue-600"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pl-5">
              <a
                title="View LinkedIn Profile"
                href="https://www.linkedin.com/in/shashankmm14/"
                className="text-gray-600 hover:text-blue-700 hover:scale-110 transition-transform duration-200 hover:bg-blue-50 rounded-full p-1 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="LinkedIn Logo" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                title="View Github Profile"
                href="https://github.com/Shashank97code"
                className="text-gray-600 hover:text-blue-700 hover:scale-110 transition-transform duration-200 hover:bg-blue-50 rounded-full p-1 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="github Logo" className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainSection;
