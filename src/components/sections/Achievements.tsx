import { motion } from 'framer-motion';
import { Trophy, Award, Users, Code } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';

const achievements = [
  {
    icon: Users,
    title: 'President of Tech Pioneers IT Club',
    description: 'Leading a tech community of 200+ students',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Trophy,
    title: '2× Technia Winner',
    description: 'Won the prestigious Technia competition twice',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    title: 'Tech Trivia Winner',
    description: 'Champion across 7 competitive rounds',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Code,
    title: 'Byte Code Hackathon',
    description: 'Successfully qualified Round 1',
    color: 'from-orange-500 to-red-500',
  },
];

export const Achievements = () => {
  return (
    <Section id="achievements" gradient>
      <SectionTitle subtitle="Milestones and recognition">Achievements</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card gradient className="text-center h-full">
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <achievement.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
