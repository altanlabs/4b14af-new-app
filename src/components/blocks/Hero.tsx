import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center text-center p-4 bg-black"
    >
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Creative Developer
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Crafting digital experiences that leave lasting impressions
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Button 
          size="lg"
          className="bg-white text-black hover:bg-gray-200 transition-colors"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Hire Me
        </Button>
      </motion.div>
    </motion.section>
  );
}