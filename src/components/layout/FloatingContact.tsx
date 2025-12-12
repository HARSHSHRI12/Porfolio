import { motion } from 'framer-motion';
import { MessageCircle, X, Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {isOpen && (
        <motion.div
          className="fixed bottom-24 right-8 z-40 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 w-80"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Get in Touch
          </h3>
          <div className="space-y-3">
            <a
              href="mailto:hshrivastava559@gmail.com"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors"
            >
              <Mail className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                hshrivastava559@gmail.com
              </span>
            </a>
            <a
              href="tel:7706961435"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors"
            >
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">7706961435</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg transition-all"
            >
              <Send className="w-5 h-5" />
              <span className="text-sm font-medium">Send Message</span>
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
};
