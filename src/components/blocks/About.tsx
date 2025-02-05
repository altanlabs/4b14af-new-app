import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            I'm a passionate freelance creative developer with over 5 years of experience in crafting digital experiences. 
            My work combines innovative design with cutting-edge technology to create memorable and impactful solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {['Design', 'Development', 'Strategy'].map((skill, index) => (
              <motion.div
                key={skill}
                className="p-6 bg-black rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{skill}</h3>
                <p className="text-gray-400">
                  Expertise in creating innovative solutions with modern tools and technologies.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}