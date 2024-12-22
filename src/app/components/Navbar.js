import { FaHatWizard } from "react-icons/fa";

export const Navbar = ({
  currentSection,
  onNavigate,
  isMagicMode,
  onToggleMagicMode,
}) => {
  return (
    <nav
      className={`sticky top-0 w-full text-center py-4 overflow-hidden transition-all duration-300 backdrop-blur-sm translate-y-0 opacity-100 z-50 ${
        isMagicMode ? "bg-dark-pastel-purple " : "bg-alice-blue"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex gap-4">
            <button
              onClick={() => onNavigate("home")}
              className={`px-8 py-3 rounded-lg transition-all duration-300 border hover:scale-110 hover:border-[#FFA500] hover:shadow-[0_0.1rem_1rem_#FFA500] hover:bg-[#FFA500] hover:text-white hover:font-bold
                ${
                  currentSection === "home"
                    ? isMagicMode
                      ? "font-bold border-2 shadow-md backdrop-blur-sm"
                      : "shadow-md bg-white/80 backdrop-blur-sm border-gray-400"
                    : "hover:text-white bg-white/80 backdrop-blur-sm border-gray-200"
                } ${isMagicMode ? "text-white bg-inherit" : "text-gray-800"}`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("about")}
              className={`px-8 py-3 rounded-lg transition-all duration-300 border hover:scale-110 hover:border-[#FFA500] hover:shadow-[0_0.1rem_1rem_#FFA500] hover:bg-[#FFA500] hover:text-white hover:font-bold
                ${
                  currentSection === "about"
                    ? isMagicMode
                      ? "font-bold border-2 shadow-md backdrop-blur-sm"
                      : "shadow-md bg-white/80 backdrop-blur-sm border-gray-400"
                    : "hover:text-white bg-white/80 backdrop-blur-sm border-gray-200"
                } ${isMagicMode ? "text-white bg-inherit" : "text-gray-800"}`}
            >
              About
            </button>
            <button
              onClick={() => onNavigate("projects")}
              className={`px-8 py-3 rounded-lg transition-all duration-300 border hover:scale-110 hover:border-[#FFA500] hover:shadow-[0_0.1rem_1rem_#FFA500] hover:bg-[#FFA500] hover:text-white hover:font-bold
                ${
                  currentSection === "projects"
                    ? isMagicMode
                      ? "font-bold border-2 shadow-md backdrop-blur-sm"
                      : "shadow-md bg-white/80 backdrop-blur-sm border-gray-400"
                    : "hover:text-white bg-white/80 backdrop-blur-sm border-gray-200"
                } ${isMagicMode ? "text-white bg-inherit" : "text-gray-800"}`}
            >
              Projects
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleMagicMode}
            className="flex items-center gap-4 focus:outline-none group"
          >
            <div className="flex items-center">
              <div
                className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-all duration-300 ${
                  isMagicMode ? "bg-[#FFA500] bg-opacity-50" : "bg-gray-200"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300
                    ${
                      isMagicMode
                        ? "translate-x-6 bg-[#FFA500]"
                        : "translate-x-0 bg-white"
                    }`}
                ></div>
              </div>
            </div>
            <FaHatWizard
              className={`w-6 h-6 transition-all duration-300
              ${isMagicMode ? "text-[#FFA500]" : "text-gray-600"}`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};
