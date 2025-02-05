import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CEO, Design Studio",
    content: "An exceptional talent who delivers outstanding results. The attention to detail and creativity is unmatched.",
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    content: "Working together was a game-changer for our brand. The process was smooth and the results exceeded our expectations.",
  },
  {
    name: "Michael Roberts",
    role: "Tech Startup Founder",
    content: "Incredible work ethic and technical expertise. Transformed our vision into reality with precision and creativity.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Client Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full bg-black border-gray-800">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-gray-400 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
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