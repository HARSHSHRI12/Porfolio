import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const blogPosts = [
  {
    title: 'Building AI-Powered Applications with LLMs',
    excerpt:
      'Learn how to integrate Large Language Models into your applications for intelligent features.',
    date: '2024-12-10',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    category: 'AI',
  },
  {
    title: 'Mastering React Redux Observable',
    excerpt:
      'Deep dive into managing complex state with Redux Observable and RxJS in React applications.',
    date: '2024-12-05',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
    category: 'React',
  },
  {
    title: 'Microservices Architecture Best Practices',
    excerpt:
      'Essential patterns and practices for building scalable microservices with Node.js.',
    date: '2024-11-28',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    category: 'Backend',
  },
];

export const Blog = () => {
  return (
    <Section id="blog">
      <SectionTitle subtitle="Thoughts, tutorials, and insights">Latest Blog Posts</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Card className="overflow-hidden h-full flex flex-col" hover>
              <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <Button variant="outline" className="w-full">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
