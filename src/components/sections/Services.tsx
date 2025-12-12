import { motion } from 'framer-motion';
import { Code, Smartphone, Brain, Database, Zap, Shield } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';

const services = [
  {
    icon: Code,
    title: 'Full Stack Development',
    description:
      'End-to-end web application development using React, Node.js, and modern frameworks.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Integrate LLMs, RAG systems, and AI-powered features into your applications.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description:
      'Scalable backend systems with Node.js, Express, FastAPI, and microservices architecture.',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Smartphone,
    title: 'Responsive UI/UX',
    description:
      'Beautiful, responsive interfaces with modern design principles and smooth animations.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'API Integration',
    description: 'Third-party API integration including payments, video calls, and more.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Authentication & Security',
    description: 'Secure authentication systems with JWT, OAuth, and best security practices.',
    color: 'from-indigo-500 to-purple-500',
  },
];

export const Services = () => {
  return (
    <Section id="services" gradient>
      <SectionTitle subtitle="What I can do for you">Services I Offer</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card gradient className="h-full text-center">
              <motion.div
                className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-8 h-8" />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
