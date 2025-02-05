import { motion } from 'framer-motion';
import { Button } from './components/ui/button';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['About', 'Portfolio', 'Contact'];

  const scrollToSection = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.a
              href="/"
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Portfolio
            </motion.a>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '×' : '☰'}
            </Button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {menuItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-white hover:text-gray-300"
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full bg-black/95 py-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="w-full text-white hover:text-gray-300 justify-start px-4"
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </Button>
              ))}
            </motion.div>
          )}
        </nav>
      </header>

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}