'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaTools, FaServer, FaShieldAlt, FaDesktop, FaBook, FaLaptopCode, FaBrain, FaRocket } from 'react-icons/fa';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Radar, Doughnut, Pie, PolarArea, Bar } from 'react-chartjs-2';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { skills } from '@/data/skills';

// Register ChartJS components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function Skills() {
  // Define refs for chart animations
  // const languagesChartRef = useRef(null);
  // const toolsChartRef = useRef(null);
  // const platformsChartRef = useRef(null);
  // const hackingChartRef = useRef(null);
  // const osChartRef = useRef(null);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [languagesRef, languagesInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [toolsRef, toolsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [platformsRef, platformsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [developmentRef, developmentInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [osRef, osInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [learningRef, learningInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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
      transition: { duration: 0.5 },
    },
  };

  // Chart options with modern styling
  const commonChartOptions = {
    plugins: {
      legend: {
        labels: {
          color: 'rgb(107, 114, 128)',
          font: {
            family: "'Inter', sans-serif",
            size: 12,
            weight: 500
          },
          padding: 15,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.8)',
        titleColor: 'rgb(243, 244, 246)',
        bodyColor: 'rgb(243, 244, 246)',
        padding: 12,
        cornerRadius: 8,
        boxPadding: 6,
        titleFont: {
          size: 14,
          weight: 600,
          family: "'Inter', sans-serif"
        },
        bodyFont: {
          size: 13,
          family: "'Inter', sans-serif"
        }
      }
    },
    maintainAspectRatio: false,
    responsive: true
  };

  const radarOptions = {
    ...commonChartOptions,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          display: false,
          stepSize: 20
        },
        pointLabels: {
          font: {
            family: "'Inter', sans-serif",
            size: 12,
            weight: 500
          },
          color: 'rgb(107, 114, 128)'
        },
        grid: {
          color: 'rgba(107, 114, 128, 0.1)'
        },
        angleLines: {
          color: 'rgba(107, 114, 128, 0.1)'
        }
      }
    }
  };

  const barOptions = {
    ...commonChartOptions,
    indexAxis: 'y' as const,
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(107, 114, 128)',
          font: {
            family: "'Inter', sans-serif",
            size: 12
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'rgb(107, 114, 128)',
          font: {
            family: "'Inter', sans-serif",
            size: 12
          }
        }
      }
    },
    plugins: {
      ...commonChartOptions.plugins,
      legend: {
        display: false
      }
    }
  };

  const doughnutOptions = {
    ...commonChartOptions,
    cutout: '70%',
    plugins: {
      ...commonChartOptions.plugins,
      legend: {
        ...commonChartOptions.plugins.legend,
        position: 'right' as const
      }
    }
  };

  // Chart data with modern color scheme
  const getChartData = (skillsArray: any[]) => ({
      labels: skillsArray.map(skill => skill.name),
    datasets: [{
          label: 'Proficiency',
          data: skillsArray.map(skill => parseInt(skill.level || '0%')),
          backgroundColor: [
        'rgba(99, 102, 241, 0.6)', // indigo
        'rgba(14, 165, 233, 0.6)', // sky
            'rgba(16, 185, 129, 0.6)', // emerald
        'rgba(139, 92, 246, 0.6)', // violet
            'rgba(236, 72, 153, 0.6)', // pink
        'rgba(234, 179, 8, 0.6)',  // yellow
        'rgba(239, 68, 68, 0.6)',  // red
          ],
          borderColor: [
        'rgb(99, 102, 241)',
        'rgb(14, 165, 233)',
        'rgb(16, 185, 129)',
        'rgb(139, 92, 246)',
        'rgb(236, 72, 153)',
        'rgb(234, 179, 8)',
        'rgb(239, 68, 68)',
      ],
      borderWidth: 2
    }]
  });

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-10 overflow-hidden">
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
              My <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600 dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
              An interactive overview of my technical expertise and the technologies I work with.
          </p>
        </motion.div>
        
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: <FaCode />,
                title: "Development",
                description: "Full-stack development with modern frameworks and tools",
                gradient: "from-indigo-500 to-sky-500"
              },
              {
                icon: <FaBrain />,
                title: "Problem Solving",
                description: "Analytical thinking and creative solution development",
                gradient: "from-sky-500 to-emerald-500"
              },
              {
                icon: <FaRocket />,
                title: "Innovation",
                description: "Staying current with emerging technologies",
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
            </div>
          </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Charts Section */}
      <section className="py-20 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 via-white/50 to-gray-100/50 dark:from-gray-800/50 dark:via-gray-900/50 dark:to-gray-800/50"></div>
          <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5 dark:opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Languages Chart */}
          <div className="mb-20">
            <motion.div
              ref={languagesRef}
              initial={{ opacity: 0, y: 20 }}
              animate={languagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 flex items-center justify-center text-white shadow-lg">
                  <FaCode size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Programming Languages</h2>
                  <p className="text-gray-600 dark:text-gray-400">Proficiency in various programming languages</p>
                </div>
              </div>
              
              <div className="h-[400px]">
                <Radar data={getChartData(skills.languages)} options={radarOptions} />
              </div>
            </motion.div>
          </div>

          {/* Development Chart - Full Width */}
          <div className="mb-20">
            <motion.div
              ref={developmentRef}
              initial={{ opacity: 0, y: 20 }}
              animate={developmentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-500 flex items-center justify-center text-white shadow-lg">
                  <FaLaptopCode size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Development</h2>
                  <p className="text-gray-600 dark:text-gray-400">Development frameworks and technologies</p>
                </div>
              </div>
              
              <div className="h-[400px]">
                <Bar data={getChartData(skills.development)} options={barOptions} />
              </div>
            </motion.div>
          </div>

          {/* Two Column Layout for Development Tools and Platforms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Development Tools Chart */}
            <motion.div
              ref={toolsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={toolsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:bg-sky-50 dark:hover:bg-sky-900/20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">
                  <FaTools size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Development Tools</h2>
                  <p className="text-gray-600 dark:text-gray-400">Experience with development tools and environments</p>
                </div>
              </div>
              
              <div className="h-[300px]">
                <Doughnut data={getChartData(skills.tools)} options={doughnutOptions} />
              </div>
            </motion.div>

            {/* Platforms Chart */}
            <motion.div
              ref={platformsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={platformsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 flex items-center justify-center text-white shadow-lg">
                  <FaServer size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Platforms</h2>
                  <p className="text-gray-600 dark:text-gray-400">Cloud and deployment platforms</p>
                </div>
              </div>
              
              <div className="h-[300px]">
                <Doughnut data={getChartData(skills.platforms)} options={doughnutOptions} />
              </div>
            </motion.div>
          </div>

          {/* Currently Learning Section */}
          <motion.div
            ref={learningRef}
            initial={{ opacity: 0, y: 20 }}
            animate={learningInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">
                <FaBook size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Currently Learning</h2>
                <p className="text-gray-600 dark:text-gray-400">Technologies I'm currently exploring</p>
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={learningInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills.currentlyLearning.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-sky-500 flex items-center justify-center text-white shadow-lg">
                      <FaLaptopCode size={20} />
                    </div>
                    <p className="font-medium text-gray-900 dark:text-white">{item}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
