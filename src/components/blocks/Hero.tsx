import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen flex flex-col justify-center items-center text-center p-4 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.8)
          ),
          url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">Welcome to my world of</h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
            Digital Art
          </h1>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Crafting immersive digital experiences through creative development and artistic vision
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="space-x-4"
        >
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-gray-200 transition-colors text-lg px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition-colors text-lg px-8"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Work
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </motion.section>
  );
}