import { motion } from 'framer-motion';
import { Button } from './components/ui/button';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  showSidebar?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
}

export default function RootLayout({ showHeader = true, showFooter = true }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ['Portfolio', 'About', 'Featured', 'Contact'];

  const scrollToSection = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {showHeader && (
        <header className="fixed w-full z-50 bg-zinc-900 shadow-lg">
          <nav className="container mx-auto px-4">
            <div className="flex justify-end items-center h-16">
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-12">
                {menuItems.map((item) => (
                  <motion.button
                    key={item}
                    className="text-white hover:text-primary transition-colors duration-200 text-sm tracking-wide"
                    onClick={() => scrollToSection(item)}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </Button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <motion.div
                className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="flex flex-col py-2">
                  {menuItems.map((item) => (
                    <button
                      key={item}
                      className="px-4 py-3 text-sm text-white hover:bg-zinc-800 transition-colors duration-200"
                      onClick={() => scrollToSection(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </nav>
        </header>
      )}

      <main className={showHeader ? "pt-16" : ""}>
        <Outlet />
      </main>

      {showFooter && (
        <footer className="bg-zinc-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
}