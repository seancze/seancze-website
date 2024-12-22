import { FaHatWizard } from "react-icons/fa";

const NavButton = ({ label, isActive, isMagicMode, onClick }) => (
  <button
    onClick={onClick}
    className={`
      px-2 sm:px-8 
      py-2 sm:py-3 
      rounded-lg 
      transition-all duration-300 
      border 
      text-sm sm:text-base
      whitespace-nowrap
      hover:scale-110 
      hover:border-[#FFA500] 
      hover:shadow-[0_0.1rem_1rem_#FFA500] 
      hover:bg-[#FFA500] 
      hover:text-white 
      hover:font-bold
      ${
        isActive
          ? isMagicMode
            ? "font-bold border-2 shadow-md backdrop-blur-sm"
            : "shadow-md bg-white/80 backdrop-blur-sm border-gray-400"
          : isMagicMode
          ? "bg-dark-pastel-purple"
          : "hover:text-white bg-white/80 backdrop-blur-sm border-gray-200"
      } 
      ${isMagicMode ? "text-white" : "text-gray-800"}
    `}
  >
    {label}
  </button>
);

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
];

export const Navbar = ({
  currentSection,
  onNavigate,
  isMagicMode,
  onToggleMagicMode,
}) => {
  return (
    <nav
      className={`
        sticky top-0 
        w-full 
        text-center 
        py-4
        overflow-hidden 
        transition-all duration-300 
        backdrop-blur-sm 
        translate-y-0 
        opacity-100 
        z-40 
        ${isMagicMode ? "bg-dark-pastel-purple" : "bg-alice-blue"}
      `}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center gap-2 sm:gap-4">
          <div className="flex gap-4">
            {navItems.map((item) => (
              <NavButton
                key={item.id}
                label={item.label}
                isActive={currentSection === item.id}
                isMagicMode={isMagicMode}
                onClick={() => onNavigate(item.id)}
              />
            ))}
          </div>

          <button
            onClick={onToggleMagicMode}
            className="flex items-center gap-2 focus:outline-none group"
            aria-label="Toggle magic mode"
          >
            <div className="flex items-center">
              <div
                className={`
                  w-10 md:w-12 
                  h-5 md:h-6 
                  rounded-full 
                  p-1 
                  cursor-pointer 
                  transition-all duration-300 
                  ${isMagicMode ? "bg-[#FFA500] bg-opacity-50" : "bg-gray-200"}
                `}
              >
                <div
                  className={`
                    w-3 md:w-4 
                    h-3 md:h-4 
                    rounded-full 
                    shadow-md 
                    transform 
                    transition-transform duration-300
                    ${
                      isMagicMode
                        ? "translate-x-5 md:translate-x-6 bg-[#FFA500]"
                        : "translate-x-0 bg-white"
                    }
                  `}
                ></div>
              </div>
            </div>
            <FaHatWizard
              className={`
                w-5 h-5 md:w-6 md:h-6
                transition-all duration-300
                ${isMagicMode ? "text-[#FFA500]" : "text-gray-600"}
              `}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};
