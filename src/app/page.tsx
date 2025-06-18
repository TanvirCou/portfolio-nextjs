'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowDown, FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaChevronRight, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import Footer from '@/components/Footer';
import { personalInfo } from '@/data/personalInfo';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const socialIcons = {
    Facebook: <FaFacebook size={24} />,
    LinkedIn: <FaLinkedin size={24} />,
    Instagram: <FaInstagram size={24} />,
    GitHub: <FaGithub size={24} />,
  };

  return (
    <main className="relative bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-gray-900">
        {/* Animated Background */}
          <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5 dark:opacity-10"></div>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500/10 to-sky-500/10 dark:from-indigo-500/20 dark:to-sky-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-sky-500/10 to-emerald-500/10 dark:from-sky-500/20 dark:to-emerald-500/20 blur-3xl"></div>
        </div>
        
        <div className="mx-auto px-4 relative z-10">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-12 items-center pt-8 md:pt-0">
            {/* Profile Image for Mobile - Shown only on smaller screens */}
            <motion.div
              className="block md:hidden w-40 h-40 sm:w-44 sm:h-44 mx-auto mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full h-full group">
                {/* Outer Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-full opacity-40 blur-lg group-hover:opacity-75 transition-all duration-500"></div>
                
                {/* Primary Gradient Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 rounded-full animate-spin-slow"></div>
                </div>
                
                {/* Secondary Animated Border */}
                <div className="absolute inset-[2px] bg-gradient-to-r from-sky-500 via-emerald-500 to-indigo-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[1px] bg-gradient-to-r from-emerald-500 via-indigo-500 to-sky-500 rounded-full animate-spin-reverse-slower"></div>
                </div>
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-full bg-white dark:bg-gray-900 p-[3px]">
                  <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-white/10 dark:ring-gray-700/50">
                    <Image 
                      src="/assets/profile.jpeg"
                      alt={personalInfo.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Left Content */}
            <motion.div
              className="text-center md:text-left order-2 md:order-1 mb-0 md:mb-0 pl-2 lg:pl-4 xl:pl-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-sm mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span>👋 Welcome to my portfolio</span>
              </motion.div>
              
          <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
          </motion.h1>
          
              <motion.p
                className="text-gray-600 dark:text-gray-400 text-md lg:text-lg mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {personalInfo.about}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href="/contact">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-500 dark:to-sky-500 text-white rounded-lg font-medium shadow-lg shadow-indigo-500/25 dark:shadow-indigo-500/50 text-sm lg:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get in Touch
                  </motion.button>
                </Link>
                <Link href="/projects">
                  <motion.button
                    className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 shadow-lg shadow-gray-200/25 dark:shadow-gray-900/50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Projects
                  </motion.button>
                </Link>
              </motion.div>
              
          <motion.div 
                className="mt-12 flex gap-6 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {personalInfo.socialLinks.map((link, index) => (
              <motion.a
                    key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                    className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-gray-200 dark:border-gray-700 shadow-lg shadow-gray-200/25 dark:shadow-gray-900/50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.name === 'GitHub' ? <FaGithub /> :
                     link.name === 'LinkedIn' ? <FaLinkedin /> :
                     link.name === 'Facebook' ? <FaFacebook /> :
                     link.name === 'Instagram' ? <FaInstagram /> : null}
              </motion.a>
            ))}
          </motion.div>
            </motion.div>
            
            {/* Right Content - Premium Design */}
            <motion.div 
              className="relative w-full max-w-lg mx-auto order-3 md:order-2 pt-0 md:pt-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Background Glow Effects */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-sky-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
              </div>

              {/* Main Container */}
              <div className="relative flex items-center justify-center min-h-[450px]">
                {/* Profile Image - Hidden on mobile */}
                <motion.div
                  className="absolute -left-6 z-30 w-44 h-44 hidden md:block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative w-full h-full group">
                    {/* Outer Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 rounded-full opacity-40 blur-lg group-hover:opacity-75 transition-all duration-500"></div>
                    
                    {/* Primary Gradient Border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 rounded-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 rounded-full animate-spin-slow"></div>
                    </div>
                    
                    {/* Secondary Animated Border */}
                    <div className="absolute inset-[2px] bg-gradient-to-r from-sky-500 via-emerald-500 to-indigo-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-[1px] bg-gradient-to-r from-emerald-500 via-indigo-500 to-sky-500 rounded-full animate-spin-reverse-slower"></div>
                    </div>
                    
                    {/* Image Container */}
                    <div className="relative w-full h-full rounded-full bg-white dark:bg-gray-900 p-[3px]">
                      <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-white/10 dark:ring-gray-700/50">
                        <Image 
                          src="/assets/profile.jpeg"
                          alt={personalInfo.name}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Code Editor Card */}
                <motion.div 
                  className="relative z-20 w-full md:w-[90%] lg:w-[75%] bg-white/10 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-200/20 dark:border-gray-700/50 shadow-2xl md:ml-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Editor Header */}
                  <div className="flex items-center justify-between px-5 md:px-2 lg:px-5 py-3 border-b border-gray-200/20 dark:border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="w-px h-4 bg-gray-200/20 dark:bg-gray-700/50"></div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">developer.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 text-[10px] font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 rounded-full border border-indigo-100 dark:border-indigo-500/20">Clean Code</span>
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="p-5">
                    <motion.div
                      className="space-y-2.5 font-mono text-[13px] leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="text-gray-800 dark:text-gray-200">
                        <span className="text-purple-500">const</span>{" "}
                        <span className="text-yellow-500">profile</span>{" "}
                        <span className="text-gray-500">=</span>{" "}
                        <span className="text-gray-500">{"{"}</span>
                      </div>
                      <div className="pl-5">
                        <span className="text-pink-500">name</span>:{" "}
                        <span className="text-emerald-500">'Kazi Tanvir Ahmed'</span>,
                      </div>
                      <div className="pl-5">
                        <span className="text-pink-500">title</span>:{" "}
                        <span className="text-emerald-500">'Frontend Developer'</span>,
                      </div>
                      <div className="pl-5">
                        <span className="text-pink-500">skills</span>: [
                      </div>
                      <div className="pl-8">
                        <span className="text-emerald-500">'Next.js'</span>,{" "}
                        <span className="text-emerald-500">'React.js'</span>,{" "}
                        <span className="text-emerald-500">'Tailwind CSS'</span>,
                      </div>
                      <div className="pl-8">
                        <span className="text-emerald-500">'TypeScript'</span>,{" "}
                        <span className="text-emerald-500">'Framer Motion'</span>
                      </div>
                      <div className="pl-5">],</div>
                      <div className="text-gray-500">{"}"}</div>
                    </motion.div>
                  </div>

                  {/* Editor Footer */}
                  <div className="px-5 md:px-2 lg:px-5 py-3 border-t border-gray-200/20 dark:border-gray-700/50">
                    <div className="flex items-center justify-end">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Online</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements - Hidden on mobile */}
                <motion.div 
                  className="absolute hidden md:block -top-2 md:-right-2 lg:right-4 w-16 h-16 bg-gradient-to-br from-indigo-600 to-sky-600 dark:from-indigo-500 dark:to-sky-500 rounded-xl shadow-xl"
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, 4, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full backdrop-blur-sm rounded-xl p-1.5">
                    <div className="w-full h-full bg-white/10 rounded-lg"></div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute hidden md:block bottom-1 md:left-12 lg:left-[72px] w-14 h-14 bg-gradient-to-br from-sky-600 to-emerald-600 dark:from-sky-500 dark:to-emerald-500 rounded-full shadow-xl"
                  animate={{
                    y: [0, 6, 0],
                    rotate: [0, -4, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <div className="w-full h-full backdrop-blur-sm rounded-full p-1.5">
                    <div className="w-full h-full bg-white/10 rounded-full"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ opacity }}
          >
            <FaArrowDown className="text-gray-400 dark:text-gray-600 text-2xl" />
          </motion.div>
        </div>
      </section>
      
      {/* About Section with New Design */}
      <section 
        id="about"
        ref={aboutRef}
        className="relative py-24 bg-gray-50 dark:bg-gray-800"
      >
        {/* <div className="absolute inset-0 bg-grid-pattern opacity-5"></div> */}
        
        <div className="mx-auto px-6 lg:px-8 xl:px-12">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Skills Cards */}
              <div className="space-y-8">
                <h2 className="text-4xl text-center lg:text-left font-bold text-gray-900 dark:text-white mb-8">
                  My <span className="text-indigo-400">Expertise</span>
            </h2>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Frontend", level: "85%" },
                    { name: "Backend", level: "65%" },
                    { name: "UI/UX", level: "80%" },
                    { name: "DevOps", level: "50%" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                      className="bg-white/5 shadow-md backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                    >
                      <h3 className="text-gray-900 dark:text-white mb-2">{skill.name}</h3>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-sky-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                          transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                </div>
              </motion.div>
            ))}
          </div>
              </div>

              {/* Right Side - About Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                  About <span className="text-purple-400">Me</span>
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 text-md lg:text-lg leading-relaxed">
                  {personalInfo.detailsAboutMe}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {personalInfo.details.slice(0, 4).map((detail, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                      <p className="text-gray-600 dark:text-gray-400">{detail}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Link href="/about">
                    <motion.button
                      className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-sky-500 text-white rounded-full font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More About Me
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
                </div>
              </motion.div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="relative py-24 bg-white dark:bg-gray-900 ">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5 dark:opacity-10"></div>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500/10 to-sky-500/10 dark:from-indigo-500/20 dark:to-sky-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-sky-500/10 to-emerald-500/10 dark:from-sky-500/20 dark:to-emerald-500/20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my latest work and ongoing projects
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Inkly",
                description:
                  "Inkly – A modern, responsive blog web application built with Next.js, TypeScript, and Tailwind CSS.It includes separate dashboards for users and admins.",
                image: "https://ik.imagekit.io/25kitplzn/inkly.png",
                tags: ["Next.js", "TypeScript", "Clerk", "Tailwind CSS", "Shadcn UI"],
                link: "https://inkly-six.vercel.app/",
                githubLink: "https://github.com/TanvirCou/inkly",
              },
              {
                title: "GradeSync",
                description:
                  "Grade-Sync is a school management system built with Next.js, Prisma, and PostgreSQL, featuring role-based dashboards for admins, teachers, students, and parents.",
                image: "https://i.ibb.co.com/GQppft75/Screenshot-2025-03-13-172955.png",
                tags: [
                  "Next.js",
                  "Prisma",
                  "PostgreSQL",
                  "TypeScript",
                  "Tailwind CSS",
                  "Clerk",
                ],
                link: "https://grade-sync-school.vercel.app/",
                githubLink: "https://github.com/TanvirCou/grade-sync",
              },
              {
                title: "Panda Shop",
                description:
                  "This is a multi-vendor online E-commerce web application which is built with React JS.Here, I used redux toolkit for state management.",
                image: "https://i.ibb.co/DQSCZWf/panda-shop.png",
                tags: [
                  "React.js",
                  "Redux Toolkit",
                  "Tailwind CSS",
                  "Stripe",
                  "Node JS",
                  "Express JS",
                  "MongoDB",
                ],
                link: "https://panda-shop-webapps.netlify.app/",
                githubLink: "https://github.com/TanvirCou/panda-shop",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-gray-200 shadow-md dark:border-gray-700 transition-all duration-500 hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-center py-3 px-4 rounded-2xl font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaExternalLinkAlt size={14} />
                      View Project
                    </motion.a>
                    
                    <motion.a
                      href={project.githubLink}
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-2xl flex items-center justify-center transition-colors duration-300 shadow-sm"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={18} className="text-gray-700 dark:text-gray-300" />
                    </motion.a>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Professional View More Projects Section */}
          <motion.div
            className="mt-12 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-sky-500/5 to-emerald-500/5 dark:from-indigo-500/10 dark:via-sky-500/10 dark:to-emerald-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-700 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400 bg-clip-text text-transparent mb-4">
                    Explore More Projects
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                    Discover my complete portfolio featuring full-stack applications, mobile apps, and innovative solutions across various domains.
                  </p>
                </div>
            <Link href="/projects">
              <motion.button
                    className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-500 dark:via-sky-500 dark:to-emerald-500 text-white rounded-xl font-medium shadow-lg shadow-indigo-500/25 dark:shadow-indigo-500/50 hover:shadow-xl transition-all duration-300 hover:from-emerald-600 hover:via-sky-600 hover:to-indigo-600 dark:hover:from-emerald-500 dark:hover:via-sky-500 dark:hover:to-indigo-500 whitespace-nowrap"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-2">
                View All Projects
                      <motion.span
                        className="inline-block"
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <FaChevronRight className="text-lg" />
                      </motion.span>
                    </span>
              </motion.button>
            </Link>
          </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Enhanced Skills Section */}
      <section className="relative py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-sky-600 dark:text-sky-400">Skills</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I've been working with recently
            </p>
          </motion.div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "HTML5", level: "95%", icon: "/assets/icons/skills/html.svg" },
              { name: "CSS3", level: "90%", icon: "/assets/icons/skills/css.svg" },
              { name: "Bootstrap", level: "90%", icon: "/assets/icons/skills/bootstrap.png" },
              { name: "TailwindCSS", level: "90%", icon: "/assets/icons/skills/tailwindcss.svg" },
              { name: "TypeScript", level: "80%", icon: "/assets/icons/skills/typescript.png" },
              { name: "React.js", level: "85%", icon: "/assets/icons/skills/react.svg" },
              { name: "Next.js", level: "85%", icon: "/assets/icons/skills/nextjs.png" },
              { name: "Redux", level: "70%", icon: "/assets/icons/skills/redux.svg" },
              { name: "Firebase", level: "60%", icon: "/assets/icons/skills/firebase.svg" },
              { name: "Node.js", level: "55%", icon: "/assets/icons/skills/nodejs.svg" },
              { name: "MongoDB", level: "55%", icon: "/assets/icons/skills/mongodb.svg" },
              { name: "Mongoose", level: "55%", icon: "/assets/icons/skills/mongoose.png" },
              { name: "Prisma", level: "50%", icon: "/assets/icons/skills/prisma.png" },
              { name: "PostgreSQL", level: "50%", icon: "/assets/icons/skills/postgresql.svg" },
              { name: "Git", level: "90%", icon: "/assets/icons/skills/git.svg" },
              { name: "Docker", level: "50%", icon: "/assets/icons/skills/docker.svg" }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg group hover:bg-gradient-to-br hover:from-gray-50 hover:to-white dark:hover:from-gray-800 dark:hover:to-gray-900 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 p-2 group-hover:bg-gradient-to-br group-hover:from-indigo-50 group-hover:to-sky-50 dark:group-hover:from-indigo-500/10 dark:group-hover:to-sky-500/10 transition-all duration-300">
                  <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-medium">
                    {skill.name}
                  </h3>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-500 dark:via-sky-500 dark:to-emerald-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 block">
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="relative py-24 bg-white dark:bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500/10 to-sky-500/10 dark:from-indigo-500/20 dark:to-sky-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-sky-500/10 to-emerald-500/10 dark:from-sky-500/20 dark:to-emerald-500/20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl p-8 md:p-12">
                <motion.div
              className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Let's <span className="text-indigo-600 dark:text-indigo-400">Connect</span>
                  </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Have a project in mind? Let's work together to create something amazing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-indigo-600 dark:text-indigo-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-medium">Email</h3>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sky-50 dark:bg-sky-500/10 rounded-full flex items-center justify-center">
                    <FaLinkedin className="text-sky-600 dark:text-sky-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-medium">LinkedIn</h3>
                    <a href={personalInfo.socialLinks.find(link => link.name === 'LinkedIn')?.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-full flex items-center justify-center">
                    <FaGithub className="text-emerald-600 dark:text-emerald-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-medium">GitHub</h3>
                    <a href={personalInfo.socialLinks.find(link => link.name === 'GitHub')?.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                      View my repositories
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                    <Link href="/contact">
                      <motion.button
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-indigo-500 dark:to-sky-500 text-white rounded-lg font-medium shadow-lg shadow-indigo-500/25 dark:shadow-indigo-500/50"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                    Get in Touch
                      </motion.button>
                    </Link>
                    
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-400">or</p>
                </div>

                <a href={`mailto:${personalInfo.email}`}>
                      <motion.button
                    className="w-full py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 shadow-lg shadow-gray-200/25 dark:shadow-gray-900/50"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                    Send Email Directly
                      </motion.button>
                    </a>
                </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
