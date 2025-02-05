import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from '../ui/use-toast';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form,
        'YOUR_PUBLIC_KEY'
      );
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                required
                className="bg-gray-900 border-gray-800 text-white"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="bg-gray-900 border-gray-800 text-white"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                className="bg-gray-900 border-gray-800 text-white min-h-[150px]"
              />
            </div>
            <div className="flex justify-center gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black hover:bg-gray-200 min-w-[200px]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black min-w-[200px]"
                onClick={() => window.open('https://wa.me/your-number', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}