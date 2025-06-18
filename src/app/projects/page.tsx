'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLink, FaGithub, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

// Import or define the Project interface
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  githubLink?: string;
  featured: boolean;
  date: string;
}

// Define the ProjectCardProps interface
interface ProjectCardProps {
  project: Project;
  index: number;
  delay?: number;
}

const getProjectIcon = (tags: string[]) => {
  const tagList = tags.map(tag => tag.toLowerCase());
  if (tagList.some(tag => tag.includes('react') || tag.includes('next'))) {
    return '⚛️';
  } else if (tagList.some(tag => tag.includes('python'))) {
    return '🐍';
  } else if (tagList.some(tag => tag.includes('security') || tag.includes('penetration'))) {
    return '🔒';
  } else if (tagList.some(tag => tag.includes('mobile') || tag.includes('android'))) {
    return '📱';
  } else if (tagList.some(tag => tag.includes('content') || tag.includes('youtube'))) {
    return '🎬';
  } else if (tagList.some(tag => tag.includes('network'))) {
    return '🌐';
  } else {
    return '💻';
  }
};

export default function Projects() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [otherRef, otherInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, index, delay = 0 }: ProjectCardProps) => {
    const [cardRef, cardInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const getIcon = (url: string) => {
      if (url.includes('youtube')) return <FaYoutube className="text-red-500" size={18} />;
      if (url.includes('github')) return <FaGithub className="text-gray-700 dark:text-gray-300" size={18} />;
      return <FaExternalLinkAlt className="text-indigo-500" size={16} />;
    };

    return (
      <motion.div 
        className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-gray-200 shadow-md dark:border-gray-700 transition-all duration-500 hover:shadow-2xl"
        whileHover={{ 
          y: -6,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
      >
        {/* Top Image Section */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-600 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Status indicator */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-800">Live</span>
            </div>
          </div>
          
          {/* Tech stack pills */}
          <div className="absolute bottom-4 right-4">
            <div className="flex gap-2">
              <span className="px-2 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 rounded-full shadow-sm">
                {project.tags[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Header with title */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {project.tags.join(' • ')}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Action buttons */}
          <div className="flex gap-3">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-center py-3 px-4 rounded-2xl font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaExternalLinkAlt size={14} />
              View Live
            </motion.a>
            
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-2xl flex items-center justify-center transition-colors duration-300 shadow-sm"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={18} className="text-gray-700 dark:text-gray-300" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </motion.div>
    );
  };

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
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
              A showcase of my work, including GitHub repositories, personal projects, and educational content.
            </p>
          </motion.div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: <FaGithub />,
                title: "Open Source",
                description: "Contributing to and creating open source projects",
                gradient: "from-indigo-500 to-sky-500"
              },
              {
                icon: <FaExternalLinkAlt />,
                title: "Full Stack Development",
                description: "Building complete web applications with modern technologies",
                gradient: "from-sky-500 to-emerald-500"
              },
              {
                icon: <FaExternalLinkAlt />,
                title: "Live Projects",
                description: "Real-world applications and deployments",
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
                <div className="absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-75"></div>
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

          {/* Featured Projects Section */}
          {featuredProjects.length > 0 && (
            <div className="mb-20">
              <motion.h2
                ref={featuredRef}
                initial={{ opacity: 0, y: 20 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-center mb-12"
              >
                Featured <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400 bg-clip-text text-transparent">Projects</span>
              </motion.h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={featuredInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </motion.div>
            </div>
          )}

          {/* Professional Journey Section */}
          <section className="mb-20 py-16 relative">
            {/* Clean Background */}
            <div className="absolute inset-0 bg-gray-50/30 dark:bg-gray-900/30"></div>
            
            {/* Section Header */}
            <div className="relative container mx-auto px-4 mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-center"
              >
                Project <span className="text-indigo-600 dark:text-indigo-400">Timeline</span>
              </motion.h2>
            </div>

            {/* Timeline Container */}
            <div className="relative max-w-6xl mx-auto px-4">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 dark:bg-gray-700"></div>

              {/* Timeline Items */}
              <div className="relative">
                {projects
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map((project, index) => {
                    const isEven = index % 2 === 0;
                    
                    return (
                      <motion.div 
                        key={project.title}
                        className={`relative flex flex-col md:grid md:grid-cols-2 gap-8 mb-16 ${
                          isEven ? '' : 'md:[direction:rtl]'
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Date Indicator */}
                        <div className={`
                          absolute left-0 md:left-1/2 top-8
                          transform translate-x-4 md:-translate-x-1/2
                          flex items-center
                          ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
                          z-20
                          [direction:ltr]
                        `}>
                          <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 "></div>
                          <div className={`
                            hidden md:block h-[1px] w-12
                            ${isEven ? 'ml-2 bg-gradient-to-r' : 'mr-2 bg-gradient-to-l'}
                            from-indigo-600 to-transparent dark:from-indigo-400
                          `}></div>
                        </div>

                        {/* Content Card */}
                        <div className={`
                          relative ml-12 md:ml-0
                          ${isEven ? 'md:pr-16' : 'md:pl-16'}
                          [direction:ltr]
                        `}>
                          {/* Date */}
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                            {new Date(project.date).toLocaleDateString('en-US', { 
                              year: 'numeric',
                              month: 'long'
                            })}
                          </div>

                          {/* Project Card */}
                          <motion.div 
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6"
                            whileHover={{ y: -2, transition: { duration: 0.2 } }}
                          >
                            {/* Header */}
                            <div className="mb-4">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {project.title}
                              </h3>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.slice(0, 3).map((tag, i) => (
                                  <span 
                                    key={i} 
                                    className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                              {project.description}
                            </p>

                            {/* Actions */}
                            <div className="flex items-center gap-3">
                              <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200"
                                whileHover={{ x: 3 }}
                              >
                                View Project
                                <FaExternalLinkAlt size={12} />
                              </motion.a>

                              {project.githubLink && (
                                <motion.a
                                  href={project.githubLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-600 dark:text-gray-400 transition-colors duration-200"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <FaGithub size={18} />
                                </motion.a>
                              )}
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </div>
          </section>

          {/* Other Projects Section */}
          {otherProjects.length > 0 && (
            <div className="mb-20">
              <motion.h2
                ref={otherRef}
                initial={{ opacity: 0, y: 20 }}
                animate={otherInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-center mb-12"
              >
                Other <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400 bg-clip-text text-transparent">Projects</span>
              </motion.h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={otherInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {otherProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </motion.div>
            </div>
          )}

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={otherInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-emerald-500/10 dark:from-indigo-500/20 dark:via-sky-500/20 dark:to-emerald-500/20"></div>
            <div className="relative z-10">
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                Check out more of my projects on GitHub or get in touch to discuss collaboration opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://github.com/TanvirCou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-white dark:bg-gray-900 text-gray-800 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={20} />
                  <span>View GitHub Profile</span>
                </motion.a>
                <motion.a
                  href="/contact"
                  className="btn bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 text-white inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLink size={16} />
                  <span>Get In Touch</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
