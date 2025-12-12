import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  category: string;
  image: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: 'Nogen AI',
    category: 'AI / Education',
    description: 'A comprehensive dual-role system for students and teachers with AI-powered features',
    fullDescription:
      'Nogen AI is a major project that revolutionizes education through AI. It provides separate interfaces for students and teachers with powerful features for both.',
    features: [
      'AI-powered notes generator with manual and advanced prompt modes',
      'Three output options: Summary, Q&A, and Formulas',
      'Three-step pipeline: Filter → Format → Display',
      'PDF & DOCX download functionality',
      'LeetCode-style compiler with problem sets',
      'Teacher dashboard with schedule management',
      'Topic planning and daily teaching suggestions',
      'Attendance via group photo with automatic marking',
      'Integrated backend and frontend systems',
    ],
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'React',
      'JWT',
      'Bcrypt',
      'Gemini AI',
      'GPT',
      'Llama 70B',
    ],
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg',
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    title: 'Career Recommendation AI',
    category: 'AI / Career',
    description: 'AI-powered career guidance system with personalized recommendations',
    fullDescription:
      'An intelligent career recommendation platform that uses advanced AI algorithms to match users with ideal career paths based on their skills and interests.',
    features: [
      'User authentication with JWT and hashing',
      'Comprehensive survey form',
      'AI-powered career recommendations',
      'Career comparison with interactive charts',
      'AI chatbot for career queries',
      'Personalized learning roadmap',
      'Advanced scoring: 60% skills + 40% interests',
      'FastAPI integration for AI services',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'FastAPI',
      'MongoDB',
      'JWT',
      'Recharts',
    ],
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Cyber Crime System',
    category: 'Web Application',
    description: 'Modern criminal records management system with E-FIR functionality',
    fullDescription:
      'A comprehensive system for managing criminal records built during 2nd semester. Features clean UI and efficient data management.',
    features: [
      'Add, delete, and edit criminal records',
      'E-FIR registration system',
      'Secure login system',
      'Clean and minimal UI',
      'Efficient data management',
      'User-friendly interface',
    ],
    technologies: ['React', 'CSS', 'Bootstrap', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg',
    gradient: 'from-green-500 to-teal-500',
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="projects" gradient>
      <SectionTitle subtitle="Check out some of my recent work">Featured Projects</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Card className="overflow-hidden cursor-pointer h-full flex flex-col" hover>
              <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <Button
                  onClick={() => setSelectedProject(project)}
                  variant="outline"
                  className="w-full"
                >
                  <Sparkles className="w-4 h-4" />
                  View Details
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-90`}
              />
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold">
                {selectedProject.category}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400">{selectedProject.fullDescription}</p>

            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Key Features
              </h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
};
