"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

// Edit these projects - add your actual repo names and image paths
const projects = [
  {
    id: 1,
    title: "SpendSense",
    description: "A modern budget tracking and expense management platform for students. Features barcode scanning, budget goals, visual reports, and real-time sync with Supabase.",
    image: "/projects/spendsense.png",
    githubUrl: "https://github.com/CSci-153-Web-Systems-and-Technologies/batch-2025-spend-sense-web",
    type: "web",
    languages: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase"],
    imageStyle: "cover" as const,
  },
  {
    id: 2,
    title: "TaskFlow",
    description: "A productivity-focused to-do list app built with Kotlin. Features Camera API integration for quick task capture, intuitive task organization, and seamless mobile experience.",
    image: "/projects/taskflow.png",
    githubUrl: "https://github.com/devjeyem/TaskFlow",
    type: "mobile",
    languages: ["Kotlin"],
    imageStyle: "contain" as const,
  },
  {
    id: 3,
    title: "Student Management System",
    description: "A desktop GUI application for managing student records. Features include adding, editing, deleting, viewing, and sorting student data with a user-friendly interface.",
    image: "/projects/student-management.png",
    githubUrl: "https://github.com/devjeyem/Programming-Practice/tree/Main/StudentManagementSystem-GUI",
    type: "desktop",
    languages: ["Python", "Tkinter"],
    imageStyle: "cover" as const,
  },
  {
    id: 4,
    title: "Rideal",
    description: "A fast and efficient on-campus vehicle rental app for students and staff. Features notification system, intuitive booking workflow with date selection and price calculation, and smooth responsive UI.",
    image: "/projects/rideal.png",
    githubUrl: "https://github.com/PiedraverdeAllysonJhen/rideal",
    type: "mobile",
    languages: ["Dart", "Flutter"],
    imageStyle: "contain" as const,
  },
  {
    id: 5,
    title: "Tic-Tac-Toe",
    description: "Classic fun with a modern twist! A responsive Tic-Tac-Toe game with game stats, move history tracking, and clean UI design.",
    image: "/projects/tictactoe.png",
    githubUrl: "https://github.com/devjeyem/tictactoe-jm",
    type: "web",
    languages: ["React", "JavaScript", "CSS"],
    imageStyle: "cover" as const,
  },
  {
    id: 6,
    title: "Tip Calculator",
    description: "A simple and intuitive tip calculator web app. Quickly calculate tips and split bills with a clean, responsive interface.",
    image: "/projects/tipcalculator.png",
    githubUrl: "https://github.com/devjeyem/tip-calculator-pintin",
    type: "web",
    languages: ["TypeScript", "Next.js", "Tailwind CSS"],
    imageStyle: "cover" as const,
  },
];

function ProjectCard({ 
  project 
}: { 
  project: typeof projects[0]; 
}) {
  const [imageError, setImageError] = useState(false);
  
  const typeColors = {
    mobile: "bg-green-500/80 text-white border-green-500/50",
    web: "bg-purple-500/80 text-white border-purple-500/50",
    desktop: "bg-blue-500/80 text-white border-blue-500/50",
  };

  return (
    <div className="group h-full flex flex-col rounded-xl bg-gray-900/60 border border-purple-500/20 overflow-hidden transition-all hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:bg-gray-900/80">
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden flex-shrink-0">
        {!imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`${project.imageStyle === "cover" ? "object-cover" : "object-contain"} transition-transform duration-500 group-hover:scale-105`}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
            <div className="text-center">
              <svg className="w-12 h-12 text-purple-500/50 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-sm">Add project image</p>
            </div>
          </div>
        )}
        
        {/* Type Badge */}
        <div className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${typeColors[project.type as keyof typeof typeColors]}`}>
          {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Languages */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.languages.map((lang, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 text-sm rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              {lang}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 font-medium transition-all hover:bg-purple-500/30 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
        >
          View on GitHub
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

function ProjectsContent() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");
  
  const [activeFilter, setActiveFilter] = useState<string>(filterParam || "all");

  // Update filter when URL param changes
  useEffect(() => {
    if (filterParam && ["all", "web", "mobile", "desktop"].includes(filterParam)) {
      setActiveFilter(filterParam);
    }
  }, [filterParam]);

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      {/* Header Section */}
      <div className="relative">
        {/* Purple glow effects */}
        <div className="absolute top-0 left-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500/15 rounded-full blur-3xl -z-10" />
        <div className="absolute top-32 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-violet-500/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto pt-8 sm:pt-12 md:pt-16">
          {/* Page Title */}
          <div className="mb-12 sm:mb-16 text-center">
            <p className="text-purple-400 font-medium mb-2 text-sm sm:text-base">What I've built</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-violet-400 to-fuchsia-400">Projects</span>
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-purple-500 to-violet-500 rounded-full mx-auto mb-6" />
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              A collection of projects showcasing my skills in web development, mobile apps, and desktop applications.
            </p>
          </div>

          {/* Filter Tags */}
          <div className="flex justify-center gap-3 mb-14">
            <button 
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeFilter === "all" 
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" 
                  : "bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-purple-500/30 hover:text-purple-300"
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveFilter("web")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeFilter === "web" 
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" 
                  : "bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-purple-500/30 hover:text-purple-300"
              }`}
            >
              Web
            </button>
            <button 
              onClick={() => setActiveFilter("mobile")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeFilter === "mobile" 
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" 
                  : "bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-purple-500/30 hover:text-purple-300"
              }`}
            >
              Mobile
            </button>
            <button 
              onClick={() => setActiveFilter("desktop")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeFilter === "desktop" 
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" 
                  : "bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-purple-500/30 hover:text-purple-300"
              }`}
            >
              Desktop
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pb-12">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
              />
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">Want to see more of my work?</p>
            <a
              href="https://github.com/devjeyem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gray-900/80 border border-gray-700 text-white text-lg font-medium transition-all hover:bg-gray-800 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              View GitHub Profile
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Suspense fallback={<ProjectsLoading />}>
      <ProjectsContent />
    </Suspense>
  );
}

function ProjectsLoading() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="animate-pulse text-purple-400">Loading projects...</div>
    </div>
  );
}
