import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const projects = [
  {
    title: "Digital Dreamscape",
    description: "An immersive digital art installation that combines real-time particle systems with user interaction. Created using WebGL and Three.js.",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2187&auto=format&fit=crop",
    category: "Digital Art",
    tech: ["WebGL", "Three.js", "React"],
    link: "#",
    details: "This project explores the intersection of art and technology, creating an interactive environment where visitors can influence and shape the digital landscape through movement and gesture."
  },
  {
    title: "Neon Nights",
    description: "A 3D visual experience showcasing cyberpunk-inspired cityscapes with dynamic lighting effects.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    category: "3D Design",
    tech: ["Blender", "Unity", "C#"],
    link: "#",
    details: "Neon Nights pushes the boundaries of real-time 3D rendering, featuring procedurally generated cities with dynamic weather systems and time-of-day cycles."
  },
  {
    title: "Cyber Genesis",
    description: "An award-winning web development project featuring cutting-edge animations and interactions.",
    image: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=2069&auto=format&fit=crop",
    category: "Development",
    tech: ["React", "GSAP", "WebGL"],
    link: "#",
    details: "Cyber Genesis redefines web interactions through innovative use of 3D elements and smooth animations, creating an unforgettable user experience."
  },
];

export function Portfolio() {
  return (
    <section 
      id="portfolio" 
      className="py-20 relative"
      style={{
        background: `
          linear-gradient(
            rgba(0, 0, 0, 0.9),
            rgba(0, 0, 0, 0.95)
          ),
          url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2072&auto=format&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="group relative overflow-hidden bg-transparent border-0 rounded-lg shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 p-6"
                        initial={{ y: 60, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 mb-3">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        
                        <div className="space-y-3">
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                              <span 
                                key={i}
                                className="text-xs px-2 py-1 bg-white/20 rounded-full text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <p className="text-sm text-gray-400 mt-2">
                            {project.details}
                          </p>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-4 border-white/50 text-white hover:bg-white hover:text-black transition-colors"
                            onClick={() => window.open(project.link, '_blank')}
                          >
                            View Project
                          </Button>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black transition-colors"
            onClick={() => window.open('#', '_blank')}
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}