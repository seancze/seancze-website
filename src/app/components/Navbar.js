export const Navbar = ({ currentSection, onNavigate }) => {
  return (
    <nav
      className={`sticky top-0 w-full text-center py-4 overflow-hidden transition-all duration-300 bg-white/80 backdrop-blur-sm translate-y-0 opacity-100 z-50`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex gap-4">
            <button
              onClick={() => onNavigate("home")}
              className={`px-8 py-3 rounded-lg transition-all duration-300 border border-gray-200 bg-white/80 backdrop-blur-sm
                ${
                  currentSection === "home"
                    ? "text-gray-800 shadow-md"
                    : "text-gray-400 hover:text-gray-800 hover:shadow-md"
                }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("about")}
              className={`px-8 py-3 rounded-lg transition-all duration-300 border border-gray-200 bg-white/80 backdrop-blur-sm
                ${
                  currentSection === "about"
                    ? "text-gray-800 shadow-md"
                    : "text-gray-400 hover:text-gray-800 hover:shadow-md"
                }`}
            >
              About
            </button>
            <button
              onClick={() => onNavigate("projects")}
              className={`px-8 py-3 rounded-lg transition-all duration-300 border border-gray-200 bg-white/80 backdrop-blur-sm
                ${
                  currentSection === "projects"
                    ? "text-gray-800 shadow-md"
                    : "text-gray-400 hover:text-gray-800 hover:shadow-md"
                }`}
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
