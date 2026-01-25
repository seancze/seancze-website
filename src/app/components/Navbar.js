"use client";

import { FaHatWizard } from "react-icons/fa";

const NavButton = ({ label, isActive, isMagicMode, onClick }) => (
  <button
    onClick={onClick}
    className={`
      relative
      px-3 sm:px-6
      py-2
      text-sm sm:text-base
      font-medium
      whitespace-nowrap
      transition-all duration-300
      ${
        isActive
          ? isMagicMode
            ? "text-magic-gold"
            : "text-accent"
          : isMagicMode
            ? "text-parchment/80 hover:text-parchment"
            : "text-text-secondary hover:text-text-primary"
      }
    `}
  >
    {label}
    {/* Animated underline */}
    <span
      className={`
        absolute bottom-0 left-0 w-full h-0.5
        transform origin-left transition-transform duration-300
        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
        ${isMagicMode ? "bg-magic-gold" : "bg-accent"}
      `}
    />
    {/* Hover underline effect */}
    <span
      className={`
        absolute bottom-0 left-0 w-full h-0.5
        transform origin-left transition-transform duration-300
        ${isActive ? "scale-x-0" : "scale-x-0 hover:scale-x-100"}
        ${isMagicMode ? "bg-magic-gold/50" : "bg-accent/50"}
      `}
    />
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
        py-4
        transition-all duration-300
        backdrop-blur-md
        z-40
        ${
          isMagicMode
            ? "bg-magic-bg-primary/90 border-b border-magic-gold/20"
            : "bg-secondary/80 border-b border-border-light"
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 sm:gap-2">
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
            className={`
              flex items-center gap-3
              px-3 py-2
              rounded-full
              transition-all duration-300
              group
              ${isMagicMode ? "hover:bg-magic-gold/10" : "hover:bg-accent/5"}
            `}
            aria-label="Toggle magic mode"
          >
            <div
              className={`
                relative w-12 h-6
                rounded-full
                transition-all duration-300
                ${isMagicMode ? "bg-magic-gold/30" : "bg-border-light"}
              `}
            >
              <div
                className={`
                  absolute top-1
                  w-4 h-4
                  rounded-full
                  shadow-md
                  transition-all duration-300
                  ${
                    isMagicMode
                      ? "left-7 bg-magic-gold shadow-magic-glow"
                      : "left-1 bg-white"
                  }
                `}
              />
            </div>

            <FaHatWizard
              className={`
                w-5 h-5
                transition-all duration-300
                ${
                  isMagicMode
                    ? "text-magic-gold rotate-12 scale-110"
                    : "text-text-secondary group-hover:text-accent"
                }
              `}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};
