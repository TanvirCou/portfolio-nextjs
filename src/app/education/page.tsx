'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaSchool, FaCalendarAlt, FaBookOpen, FaAward, FaCertificate } from 'react-icons/fa';
import Footer from '@/components/Footer';
import { education } from '@/data/education';

// Define Education interface for type safety
interface Education {
  degree: string;
  institution: string;
  focus: string;
  year: string;
  description: string;
}

export default function Education() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <section className="relative pt-16 pb-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5 dark:opacity-10"></div>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500/10 to-sky-500/10 dark:from-indigo-500/20 dark:to-sky-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-sky-500/10 to-emerald-500/10 dark:from-sky-500/20 dark:to-emerald-500/20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Academic <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400 bg-clip-text text-transparent">Journey</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
              Exploring my educational path and continuous learning journey in technology and development.
            </p>
          </motion.div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: <FaGraduationCap />,
                title: "University Graduate",
                description: "BSc Engineering in ICT from Comilla University",
                gradient: "from-indigo-500 to-sky-500"
              },
              {
                icon: <FaBookOpen />,
                title: "Technical Expertise",
                description: "Specialized in Software Development & Web Technologies",
                gradient: "from-sky-500 to-emerald-500"
              },
              {
                icon: <FaAward />,
                title: "Academic Achievement",
                description: "Consistent Academic Excellence Throughout Education",
                gradient: "from-emerald-500 to-indigo-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-75`}></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Timeline */}
          <div className="max-w-5xl mx-auto" ref={timelineRef}>
            {education.map((item: Education, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-sky-500 to-emerald-500"></div>

                {/* Timeline Dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 bg-gradient-to-r from-indigo-500 to-sky-500 shadow-lg"></div>

                {/* Content Card */}
                <div className="ml-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 w-full">
                  {/* Year Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                    <FaCalendarAlt className="mr-2" />
                    {item.year}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.degree}
                  </h3>

                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <FaSchool className="mr-2" />
                      <span className="font-medium">{item.institution}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <FaBookOpen className="mr-2" />
                      <span>Focus: {item.focus}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-emerald-500/10 dark:from-indigo-500/20 dark:via-sky-500/20 dark:to-emerald-500/20"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">
                Learning <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400 bg-clip-text text-transparent">Philosophy</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
              I believe that true growth comes from a mindset of lifelong learning. My journey in technology is driven by curiosity, resilience, and a commitment to evolving with the ever-changing digital world.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
              While my academic foundation from Comilla University in BSc Engineering (ICT) has equipped me with core technical skills, I go beyond the classroom—constantly challenging myself through hands-on projects, self-guided learning, and real-world application. Whether it's mastering new frameworks, building innovative solutions, or exploring emerging trends, I strive to stay ahead and keep learning, every single day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
