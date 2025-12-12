import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';

const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer:
      'I specialize in full-stack development with React, TypeScript, Node.js, Express, MongoDB, PostgreSQL, and AI technologies including LLMs, RAG systems, and LangChain.',
  },
  {
    question: 'How much experience do you have?',
    answer:
      'I have 6 months of industry experience at Aerohyre (3 months internship + 3 months full-time), plus additional internships at CodSoft and NullClass. I\'m currently in my 6th semester of BCA.',
  },
  {
    question: 'What kind of projects can you work on?',
    answer:
      'I can work on full-stack web applications, AI-powered solutions, microservices architecture, payment integrations, and educational platforms. My experience ranges from frontend to backend to AI integration.',
  },
  {
    question: 'Are you available for freelance work?',
    answer:
      'Yes! I\'m open to freelance opportunities and collaborations. Feel free to reach out to discuss your project requirements.',
  },
  {
    question: 'What is your approach to learning new technologies?',
    answer:
      'I believe in hands-on learning and building real projects. I stay updated with the latest technologies through documentation, online courses, and active participation in tech communities.',
  },
  {
    question: 'How do you handle project deadlines?',
    answer:
      'I follow agile methodologies, break down tasks into manageable chunks, and maintain clear communication. I prioritize quality while meeting deadlines through effective time management.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionTitle subtitle="Common questions about my work and experience">
        Frequently Asked Questions
      </SectionTitle>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hover={false} className="cursor-pointer" gradient>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-purple-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-purple-600" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
