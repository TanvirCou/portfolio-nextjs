'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaYoutube, FaDownload, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaLaptopCode, FaServer, FaMobileAlt } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { personalInfo } from '@/data/personalInfo';

export default function About() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden ">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5 dark:opacity-10"></div>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500/10 to-sky-500/10 dark:from-indigo-500/20 dark:to-sky-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-sky-500/10 to-emerald-500/10 dark:from-sky-500/20 dark:to-emerald-500/20 blur-3xl"></div>
        </div>

        <div className="mx-auto px-4 relative z-10">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
              Get to know more about me, my background, and what drives my passion for technology and learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-sky-500 dark:from-indigo-400 dark:to-sky-400 p-1 rounded-2xl">
                  <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
                    <Image
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      fill
                      priority
                      className="object-cover  transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
                {[
                  { icon: <FaGithub size={20} />, url: personalInfo.socialLinks.find(link => link.name === 'GitHub')?.url },
                  { icon: <FaLinkedin size={20} />, url: personalInfo.socialLinks.find(link => link.name === 'LinkedIn')?.url },
                  { icon: <FaYoutube size={20} />, url: personalInfo.socialLinks.find(link => link.name === 'YouTube')?.url }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-3xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  Hi, I'm {personalInfo.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {personalInfo.title}
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: <FaEnvelope />, text: personalInfo.email },
                  { icon: <FaMapMarkerAlt />, text: personalInfo.location },
                  { icon: <FaCalendarAlt />, text: "Open to internship or junior frontend developer roles" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <span className="text-indigo-600 dark:text-indigo-400">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {personalInfo.about}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.a
                  href={personalInfo.resumeUrl}
                  download
                  className="inline-flex items-center justify-center px-4  lg:px-6 py-3 bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-500 dark:via-sky-500 dark:to-emerald-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm lg:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaDownload className="mr-2" />
                  Download Resume
                </motion.a>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center px-4 lg:px-6 py-3 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 text-sm lg:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaEnvelope className="mr-2" />
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What <span className="bg-gradient-to-r from-sky-600 via-emerald-600 to-indigo-600 dark:from-sky-400 dark:via-emerald-400 dark:to-indigo-400 bg-clip-text text-transparent">I Do</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I specialize in creating modern web applications and exploring various aspects of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaLaptopCode size={24} />,
                title: "Web Development",
                description: "Building responsive and modern web applications using the latest technologies."
              },
              {
                icon: <FaServer size={24} />,
                title: "Backend Development",
                description: "Creating robust server-side applications and APIs for seamless functionality."
              },
              {
                icon: <FaCode size={24} />,
                title: "Clean Code",
                description: "Writing maintainable, efficient, and well-documented code following best practices."
              },
              {
                icon: <FaMobileAlt size={24} />,
                title: "Responsive Design",
                description: "Ensuring applications work flawlessly across all devices and screen sizes."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-gray-50 hover:to-white dark:hover:from-gray-800 dark:hover:to-gray-900"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/10 to-sky-500/10 dark:from-indigo-500/20 dark:to-sky-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 group-hover:from-indigo-500/20 group-hover:to-sky-500/20 dark:group-hover:from-indigo-500/30 dark:group-hover:to-sky-500/30 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5 dark:opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/10 to-indigo-500/10 dark:from-emerald-500/20 dark:to-indigo-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-500/10 to-sky-500/10 dark:from-indigo-500/20 dark:to-sky-500/20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 p-8 md:p-12 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-600 via-sky-600 to-indigo-600 dark:from-emerald-400 dark:via-sky-400 dark:to-indigo-400 bg-clip-text text-transparent">
              My Journey
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <p>
              I'm a frontend developer from Bangladesh with a deep passion for technology, problem-solving, and continuous learning. My journey into the tech world began with a curiosity about how digital systems work, which gradually led me to explore different areas of computing — from basic programming to web development and cloud technologies.
              </p>
              <p>
              I completed my B.Sc. in Information and Communication Technology (ICT) from Comilla University, where I gained a solid academic foundation in computer science and engineering principles. During my studies, I discovered my true interest in web development and started focusing on building modern, responsive web applications using technologies like Next.js, React.js, and TypeScript.
              </p>
              <p>
              As I continued to grow, I also expanded my skills into backend development using Node.js, Express.js, MongoDB, and Mongoose, along with exploring cloud engineering and DevOps practices to better understand the full development lifecycle.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
