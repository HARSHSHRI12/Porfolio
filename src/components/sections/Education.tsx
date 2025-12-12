import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';

export const Education = () => {
  return (
    <Section id="education">
      <SectionTitle subtitle="My academic background">Education</SectionTitle>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card gradient className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />

            <div className="relative">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl text-white">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                    Avviare Education Hub, Noida
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">Glocal University</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span>2023 - 2026</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span>6th Semester (Current)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>Noida, India</span>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Journey</h4>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p>
                    <span className="font-medium">Schooling:</span> Prayagraj
                  </p>
                  <p>
                    <span className="font-medium">Home:</span> Singrauli, Madhya Pradesh
                  </p>
                  <p>
                    <span className="font-medium">Current:</span> Studying in Noida
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Actively involved in tech community leadership and hands-on development while
                  pursuing degree. 1 month remaining in current semester.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};
