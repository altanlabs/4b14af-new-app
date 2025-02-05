import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';

const projects = [
  {
    title: "Project 1",
    description: "Digital Art Exhibition",
    image: "https://source.unsplash.com/random/800x600?art",
  },
  {
    title: "Project 2",
    description: "Brand Identity Design",
    image: "https://source.unsplash.com/random/800x600?design",
  },
  {
    title: "Project 3",
    description: "Web Development",
    image: "https://source.unsplash.com/random/800x600?website",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
                <CardContent className="p-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}