'use client';

import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaArrowUp, FaHeart } from 'react-icons/fa';
import { HiMail, HiLocationMarker, HiExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personalInfo';
import { useEffect, useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin size={20} />, url: personalInfo.socialLinks.find(link => link.name === 'LinkedIn')?.url || '#' },
    { name: 'GitHub', icon: <FaGithub size={20} />, url: personalInfo.socialLinks.find(link => link.name === 'GitHub')?.url || '#' },
    { name: 'Facebook', icon: <FaFacebook size={20} />, url: personalInfo.socialLinks.find(link => link.name === 'Facebook')?.url || '#' },
    { name: 'Instagram', icon: <FaInstagram size={20} />, url: personalInfo.socialLinks.find(link => link.name === 'Instagram')?.url || '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto relative">
      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0.8,
          y: showScrollTop ? 0 : 10
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-lg bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-500 dark:via-sky-500 dark:to-emerald-500 text-white shadow-lg hover:from-emerald-600 hover:via-sky-600 hover:to-indigo-600 dark:hover:from-emerald-500 dark:hover:via-sky-500 dark:hover:to-indigo-500 transition-all duration-300"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </motion.button>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/5 via-sky-500/5 to-emerald-500/5 dark:from-indigo-500/10 dark:via-sky-500/10 dark:to-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-500/5 via-sky-500/5 to-indigo-500/5 dark:from-emerald-500/10 dark:via-sky-500/10 dark:to-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Top section with logo and social links */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="mb-8 md:mb-0 text-center md:text-left"
            variants={itemVariants}
          >
            <Link href="/">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400 bg-clip-text text-transparent hover:from-emerald-600 hover:via-sky-600 hover:to-indigo-600 dark:hover:from-emerald-400 dark:hover:via-sky-400 dark:hover:to-indigo-400 transition-all duration-500">
                {personalInfo.name}
              </h2>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-md">
              {personalInfo.title}
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-sky-50 dark:hover:from-indigo-500/10 dark:hover:to-sky-500/10 transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Middle section with quick links and contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-b border-gray-200 dark:border-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl p-5 hover:bg-gradient-to-br hover:from-gray-50 hover:to-white dark:hover:from-gray-800 dark:hover:to-gray-900 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400 rounded mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Skills', path: '/skills' }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-400 dark:to-sky-400 inline-block group-hover:scale-150 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl p-5 hover:bg-gradient-to-br hover:from-gray-50 hover:to-white dark:hover:from-gray-800 dark:hover:to-gray-900 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-sky-600 via-emerald-600 to-indigo-600 dark:from-sky-400 dark:via-emerald-400 dark:to-indigo-400 rounded mr-2"></span>
              Learn More
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Projects', path: '/projects' },
                { name: 'Education', path: '/education' },
                { name: 'Resume', path: '/resume' }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-sky-600 to-emerald-600 dark:from-sky-400 dark:to-emerald-400 inline-block group-hover:scale-150 transition-transform"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl p-5 hover:bg-gradient-to-br hover:from-gray-50 hover:to-white dark:hover:from-gray-800 dark:hover:to-gray-900 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-emerald-600 via-indigo-600 to-sky-600 dark:from-emerald-400 dark:via-indigo-400 dark:to-sky-400 rounded mr-2"></span>
              Get in Touch
            </h3>
            <div className="space-y-4">
              <motion.p 
                className="text-gray-600 dark:text-gray-400 flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <span className="text-indigo-600 dark:text-indigo-400 p-2 bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-indigo-500/10 dark:to-sky-500/10 rounded-lg transition-all duration-300 group-hover:from-indigo-100 group-hover:to-sky-100 dark:group-hover:from-indigo-500/20 dark:group-hover:to-sky-500/20">
                  <HiMail size={18} />
                </span>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {personalInfo.email}
                </a>
              </motion.p>
              <motion.p 
                className="text-gray-600 dark:text-gray-400 flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <span className="text-indigo-600 dark:text-indigo-400 p-2 bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-indigo-500/10 dark:to-sky-500/10 rounded-lg transition-all duration-300 group-hover:from-indigo-100 group-hover:to-sky-100 dark:group-hover:from-indigo-500/20 dark:group-hover:to-sky-500/20">
                  <HiLocationMarker size={18} />
                </span>
                <span>{personalInfo.location}</span>
              </motion.p>
              <div className="pt-2">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-500 dark:via-sky-500 dark:to-emerald-500 text-white rounded-lg hover:from-emerald-600 hover:via-sky-600 hover:to-indigo-600 dark:hover:from-emerald-500 dark:hover:via-sky-500 dark:hover:to-indigo-500 transition-all duration-300 shadow-md hover:shadow-xl group"
                >
                  Contact Me
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "reverse", 
                      duration: 1.5 
                    }}
                  >
                    <HiExternalLink size={16} />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom copyright section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          
          <p className="mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <motion.span 
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400 text-white"
            >
              <FaHeart size={12} />
            </motion.span>
            Made with passion using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
