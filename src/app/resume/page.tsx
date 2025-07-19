'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload, FaEye, FaGraduationCap, FaCode, FaTools, FaServer, FaBookOpen, FaBriefcase, FaMapMarkerAlt, FaExpandAlt, FaTimesCircle, FaSpinner, FaExclamationTriangle, FaBook, FaLaptopCode, FaEnvelope } from 'react-icons/fa';
import Footer from '@/components/Footer';
import { personalInfo } from '@/data/personalInfo';
import { education } from '@/data/education';
import { skills } from '@/data/skills';
import { projects } from '@/data/projects';

// PDF Viewer Component
function PDFViewer({ pdfUrl, onClose }: { pdfUrl: string; onClose: () => void }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [useAlternateViewer, setUseAlternateViewer] = useState(false);

  // Handle escape key to close the viewer
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Try alternate viewer if primary one fails
  useEffect(() => {
    if (hasError && !useAlternateViewer) {
      setUseAlternateViewer(true);
      setHasError(false);
      setIsLoading(true);
    }
  }, [hasError, useAlternateViewer]);

  // Toggle fullscreen
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 ${
      isFullscreen ? 'bg-black' : ''
    }`}>
      <div className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex flex-col ${
        isFullscreen ? 'w-screen h-screen rounded-none' : 'w-full max-w-7xl max-h-[90vh]'
      }`}>
        {/* Toolbar */}
        <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 flex items-center justify-between rounded-t-lg">
          <div className="text-gray-800 dark:text-gray-200 font-semibold">PDF Viewer</div>
          <div className="flex items-center gap-2">
            <a 
              href={pdfUrl}
              download
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
              title="Download PDF"
            >
              <FaDownload className="text-gray-600 dark:text-gray-300" />
            </a>
            <button
              onClick={toggleFullscreen}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              <FaExpandAlt className="text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
              title="Close"
            >
              <FaTimesCircle className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
        
        {/* PDF Embed */}
        <div className={`w-full max-w-7xl flex-grow bg-gray-200 rounded-b-lg overflow-hidden ${
          isFullscreen ? 'rounded-none' : ''
        }`}>
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-700">
              <FaSpinner className="animate-spin text-4xl text-primary mb-4" />
              <p className="text-gray-600 dark:text-gray-300">Loading PDF...</p>
            </div>
          )}
          
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-700">
              <FaExclamationTriangle className="text-4xl text-red-500 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 mb-2">Failed to load the PDF</p>
              <a 
                href={pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary text-sm py-1 px-3"
              >
                Open in New Tab
              </a>
            </div>
          )}
          
          {!hasError && !useAlternateViewer && (
            <object
              data={pdfUrl}
              type="application/pdf"
              className="w-full h-full"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
            >
              <p>It appears your browser doesn't support embedded PDFs. 
                <a 
                  href={pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline ml-1"
                >
                  Click here to view the PDF
                </a>
              </p>
            </object>
          )}
          
          {!hasError && useAlternateViewer && (
            <embed
              src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
              type="application/pdf"
              className="w-full h-full"
              onLoad={() => setIsLoading(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);
  
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // const [activeTimelineItem, setActiveTimelineItem] = useState<number | null>(null);
  // const timelineRef = useRef<HTMLDivElement>(null);

 

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <section className="relative pt-16 pb-10 overflow-hidden">
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
              Professional <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400 bg-clip-text text-transparent">Resume</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              A comprehensive overview of my professional experience, skills, and educational background.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-xl font-medium transition-all duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload className="text-lg" />
                <span>Download Resume</span>
              </motion.a>
              
              <motion.button
                onClick={() => setIsPdfViewerOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-medium transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaEye className="text-lg" />
                <span>View Resume</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Resume Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Profile Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-sky-500/5 to-emerald-500/5 dark:from-indigo-500/10 dark:via-sky-500/10 dark:to-emerald-500/10"></div>
              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transform transition-transform duration-500 hover:scale-110"
                    priority
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {personalInfo.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    {personalInfo.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {personalInfo.about}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <FaMapMarkerAlt />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <FaEnvelope />
                      <span>{personalInfo.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="p-2 bg-gray-100 dark:bg-gray-700 rounded-xl">
                  <FaGraduationCap className="text-xl text-gray-900 dark:text-white" />
                </span>
                <span>Education</span>
              </h3>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-sky-500 to-emerald-500"></div>

                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-16 mb-12 last:mb-0"
                  >
                    <div className="absolute left-4 top-0 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 bg-gradient-to-r from-indigo-500 to-sky-500 shadow-lg transform -translate-x-1/2"></div>

                    <div className="bg-gray-100 dark:bg-gray-700/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {item.degree}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">
                            {item.institution}
                          </p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300">
                          {item.year}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {item.description}
                      </p>

                      <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                        <FaBookOpen className="mr-2" />
                        {item.focus}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Skills Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="p-2 bg-gray-100 dark:bg-gray-700 rounded-xl">
                  <FaCode className="text-xl text-gray-900 dark:text-white" />
                </span>
                <span>Technical Skills</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Languages */}
                <div className="bg-gray-100 dark:bg-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                    <FaCode className="text-gray-900 dark:text-white" />
                    Programming Languages
                  </h4>
                  <div className="space-y-4">
                    {skills.languages.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-gray-500 dark:text-gray-400">{skill.level}</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-sky-500"
                            style={{ width: skill.level }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Development */}
                <div className="bg-gray-100 dark:bg-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                    <FaLaptopCode className="text-gray-900 dark:text-white" />
                    Development
                  </h4>
                  <div className="space-y-4">
                    {skills.development.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-gray-500 dark:text-gray-400">{skill.level}</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-sky-500 to-emerald-500"
                            style={{ width: skill.level }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="bg-gray-100 dark:bg-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                    <FaTools className="text-gray-900 dark:text-white" />
                    Tools & Technologies
                  </h4>
                  <div className="space-y-4">
                    {skills.tools.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-gray-500 dark:text-gray-400">{skill.level}</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500"
                            style={{ width: skill.level }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div className="bg-gray-100 dark:bg-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
                  <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                    <FaServer className="text-gray-900 dark:text-white" />
                    Platforms
                  </h4>
                  <div className="space-y-4">
                    {skills.platforms.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-gray-500 dark:text-gray-400">{skill.level}</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-sky-500"
                            style={{ width: skill.level }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Currently Learning */}
              <div className="mt-8 bg-gray-100 dark:bg-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
                <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <FaBook className="text-gray-900 dark:text-white" />
                  Currently Learning
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.currentlyLearning.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Projects Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="p-2 bg-gray-100 dark:bg-gray-700 rounded-xl">
                  <FaBriefcase className="text-xl text-gray-900 dark:text-white" />
                </span>
                <span>Featured Projects</span>
              </h3>

              <div className="space-y-8">
                {projects.filter(project => project.featured).map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-gray-100 dark:bg-gray-700/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {project.title}
                          </h4>
                          <div className="flex items-center gap-4 mt-2">
                            <a 
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                            >
                              Live Demo
                            </a>
                            {project.githubLink && (
                              <a 
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
                              >
                                GitHub Repository
                              </a>
                            )}
                          </div>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300">
                          {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-sm rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* PDF Viewer */}
      {isPdfViewerOpen && (
        <PDFViewer
          pdfUrl={personalInfo.resumeUrl}
          onClose={() => setIsPdfViewerOpen(false)}
        />
      )}
    </main>
  );
}
