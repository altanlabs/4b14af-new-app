import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const projects = [
  {
    title: "Digital Dreamscape",
    description: "Interactive Art Installation",
    image: "https://images.unsplash.com/photo-1633627243409-45f9e2300b70?q=80&w=2072&auto=format&fit=crop",
    category: "Digital Art"
  },
  {
    title: "Neon Nights",
    description: "3D Visual Experience",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    category: "3D Design"
  },
  {
    title: "Cyber Genesis",
    description: "Web Development & Animation",
    image: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=2069&auto=format&fit=crop",
    category: "Development"
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
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-sm text-gray-300 mb-2 block">{project.category}</span>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300">{project.description}</p>
                      </div>
                    </div>
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