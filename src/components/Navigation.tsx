import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  onBookingClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  onBookingClick = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "ROOMS", href: "#rooms" },
    { name: "DINING", href: "#dining" },
    { name: "EVENTS", href: "#events" },
    { name: "FACILITIES", href: "#facilities" },
    { name: "GALLERY", href: "#gallery" },
    {
      name: "MORE",
      href: "#more",
      hasDropdown: true,
      dropdownItems: [
        { name: "Virtual Tour", href: "#virtual-tour" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
      ],
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const backgroundPattern =
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg"
      style={{
        backgroundImage: `linear-gradient(rgba(22, 101, 52, 0.95), rgba(22, 101, 52, 0.95)), url('${backgroundPattern}')`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg font-serif">E</span>
            </div>
            <div className="text-xl font-serif font-bold text-white">
              EMPIRE
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center space-x-1 text-sm font-medium text-white hover:text-amber-300 transition-colors duration-200 py-2"
                      aria-label={`Toggle ${item.name} dropdown`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          activeDropdown === item.name ? "rotate-180" : "",
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <button
                              key={dropdownItem.name}
                              onClick={() => scrollToSection(dropdownItem.href)}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-sm font-medium text-white hover:text-amber-300 transition-colors duration-200 relative group py-2"
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={onBookingClick}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-medium px-6 py-2 rounded-md shadow-lg hover:shadow-xl"
              aria-label="Book your stay at Empire Resort"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-green-900/98 backdrop-blur-md border-t border-green-700/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full text-left text-white hover:text-amber-300 py-2 text-lg font-medium transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform duration-200",
                            activeDropdown === item.name ? "rotate-180" : "",
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {item.dropdownItems?.map((dropdownItem) => (
                              <button
                                key={dropdownItem.name}
                                onClick={() =>
                                  scrollToSection(dropdownItem.href)
                                }
                                className="block w-full text-left text-amber-200 hover:text-amber-100 py-1 text-base transition-colors duration-200"
                              >
                                {dropdownItem.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left text-white hover:text-amber-300 py-2 text-lg font-medium transition-colors duration-200"
                      aria-label={`Navigate to ${item.name} section`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-green-700/50">
                <Button
                  onClick={() => {
                    onBookingClick();
                    setIsOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 font-medium py-3 rounded-md shadow-lg"
                  aria-label="Book your stay at Empire Resort"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
