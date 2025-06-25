export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            title="View LinkedIn Profile"
            href="https://www.linkedin.com/in/shashankmm14/"
            className="hover:text-gray-300 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            title="View Github Profile"
            href="https://github.com/Shashank97code"
            className="hover:text-gray-300 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <p>&copy; 2025 ShashanK M M. All rights reserved.</p>
      </div>
    </footer>
  );
};
