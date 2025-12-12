import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const plans = [
  {
    name: 'Small Project',
    price: 'Starting at $500',
    description: 'Perfect for small websites and landing pages',
    features: [
      'Responsive design',
      'Up to 5 pages',
      'Basic SEO optimization',
      'Contact form integration',
      '1 month support',
    ],
    color: 'from-blue-500 to-cyan-500',
    popular: false,
  },
  {
    name: 'Full Stack App',
    price: 'Starting at $2000',
    description: 'Complete web application with backend',
    features: [
      'Custom frontend & backend',
      'Database integration',
      'User authentication',
      'API development',
      'Payment integration',
      '3 months support',
    ],
    color: 'from-purple-500 to-pink-500',
    popular: true,
  },
  {
    name: 'AI Integration',
    price: 'Custom Quote',
    description: 'AI-powered features and LLM integration',
    features: [
      'LLM integration',
      'RAG system setup',
      'Custom AI features',
      'Prompt engineering',
      'Model fine-tuning',
      'Ongoing support',
    ],
    color: 'from-orange-500 to-red-500',
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <Section id="pricing">
      <SectionTitle subtitle="Flexible pricing for different project needs">
        Pricing Plans
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="relative"
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </span>
              </div>
            )}

            <Card
              gradient
              className={`h-full ${plan.popular ? 'border-2 border-purple-600 dark:border-purple-400' : ''}`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${plan.color} mb-6`} />

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>

              <div className="mb-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full">
                Get Started
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card gradient className="inline-block">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Need a custom solution?{' '}
            <a
              href="#contact"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              Let's discuss your project
            </a>
          </p>
        </Card>
      </motion.div>
    </Section>
  );
};
