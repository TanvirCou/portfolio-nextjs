'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiHome, FiUser, FiBook, FiFileText, FiMessageSquare, FiBriefcase, FiCpu } from 'react-icons/fi';
import { personalInfo } from '@/data/personalInfo';

const navLinks = [
  { name: 'Home', path: '/', icon: <FiHome size={16} /> },
  { name: 'About', path: '/about', icon: <FiUser size={16} /> },
  { name: 'Skills', path: '/skills', icon: <FiCpu size={16} /> },
  { name: 'Projects', path: '/projects', icon: <FiBriefcase size={16} /> },
  { name: 'Education', path: '/education', icon: <FiBook size={16} /> },
  { name: 'Resume', path: '/resume', icon: <FiFileText size={16} /> },
  { name: 'Contact', path: '/contact', icon: <FiMessageSquare size={16} /> },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!mounted) {
    return null;
  }
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-b from-white/90 to-white/80 dark:from-gray-900/90 dark:to-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-800/50' 
        : 'bg-gradient-to-b from-white to-white/95 dark:from-gray-900 dark:to-gray-900/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="group flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 dark:from-indigo-400 dark:to-sky-400 p-[2px]">
                <div className="h-full w-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                  <Image 
                    src={personalInfo.profileImage} 
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:via-sky-600 group-hover:to-indigo-600 dark:group-hover:from-emerald-400 dark:group-hover:via-sky-400 dark:group-hover:to-indigo-400 transition-all duration-500">
                {personalInfo.name}
              </h1>
            </Link>
          </motion.div>
          
          <div className="hidden xl:flex xl:items-center xl:ml-6">
            <div className="flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={link.path}
                    className={`relative nav-link group px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? 'bg-gradient-to-r from-indigo-50 to-sky-50 dark:from-indigo-500/10 dark:to-sky-500/10 text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-50/50 dark:hover:from-gray-800 dark:hover:to-gray-800/50 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                  >
                    <span className={`transition-colors duration-300 ${
                      isActive(link.path)
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-400 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
                    }`}>
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`p-2.5 rounded-lg relative overflow-hidden transition-all duration-300 ml-2 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-amber-400 hover:from-gray-700 hover:to-gray-800' 
                    : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 hover:from-gray-200 hover:to-gray-300'
                }`}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
          
          <div className="xl:hidden flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2.5 rounded-lg relative overflow-hidden transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-amber-400 hover:from-gray-700 hover:to-gray-800' 
                  : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 hover:from-gray-200 hover:to-gray-300'
              }`}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className={`p-2.5 rounded-lg transition-colors duration-300 ${
                isOpen 
                  ? 'bg-gradient-to-r from-indigo-50 to-sky-50 dark:from-indigo-500/10 dark:to-sky-500/10 text-indigo-600 dark:text-indigo-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-50/50 dark:hover:from-gray-800 dark:hover:to-gray-800/50'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-800 shadow-lg"
          >
            <div className="grid grid-cols-2 gap-1 p-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={link.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(link.path)
                        ? 'bg-gradient-to-r from-indigo-50 to-sky-50 dark:from-indigo-500/10 dark:to-sky-500/10 text-indigo-600 dark:text-indigo-400 font-medium' 
                        : 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-50/50 dark:hover:from-gray-800 dark:hover:to-gray-800/50 text-gray-600 dark:text-gray-300'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={
                      isActive(link.path)
                        ? 'text-indigo-600 dark:text-indigo-400' 
                        : 'text-gray-400 dark:text-gray-500'
                    }>
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
