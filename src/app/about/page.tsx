import Image from "next/image";
import { GitHubSkills } from "@/components/github-skills";

export default function About() {

  const experiences = [
    {
      title: "Freelance Developer",
      company: "Self-employed",
      period: "2024 - Present",
      description: "Building custom web and mobile applications for clients.",
    },
    {
      title: "Web Development Intern",
      company: "Tech Company",
      period: "2025 - 2026",
      description: "Collaborated on frontend projects using React and TypeScript.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University",
      period: "2023 - Present",
      description: "Third-year student focusing on software development and web technologies.",
    },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      {/* Header Section */}
      <div className="relative">
        {/* Purple glow effect */}
        <div className="absolute top-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500/15 rounded-full blur-3xl -z-10" />
        <div className="absolute top-20 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-violet-500/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-5xl mx-auto pt-8 sm:pt-12 md:pt-16">
          {/* Page Title */}
          <div className="mb-12 sm:mb-16">
            <p className="text-purple-400 font-medium mb-2 text-sm sm:text-base">Get to know me</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-violet-400 to-fuchsia-400">Me</span>
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-purple-500 to-violet-500 rounded-full" />
          </div>

          {/* Bio Section */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16 sm:mb-20">
            {/* Left - Image */}
            <div className="shrink-0 flex justify-center lg:justify-start">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">
                <div className="absolute -inset-3 sm:-inset-4 rounded-2xl bg-purple-500/20 blur-2xl" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-purple-400/30 bg-slate-700 shadow-[0_0_40px_rgba(192,132,252,0.3)]">
                  <Image
                    src="/profile.jpg"
                    alt="Jm Pintin"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right - Bio Text */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Hi, I'm <span className="text-purple-400">Jm Pintin</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400 mb-4 leading-relaxed">
                I'm a passionate third-year Computer Science student with a strong focus on 
                creating modern, user-friendly web and mobile applications. My journey in 
                tech started with curiosity and has evolved into a deep love for building 
                digital experiences that make a difference.
              </p>
              <p className="text-base sm:text-lg text-gray-400 mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or working on personal projects that challenge my skills.
                I believe in continuous learning and staying up-to-date with the latest industry trends.
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="text-white font-medium">Philippines</p>
                </div>
                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <p className="text-sm text-gray-500 mb-1">Specialization</p>
                  <p className="text-white font-medium">Full-Stack Dev</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section - From GitHub */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Technical <span className="text-purple-400">Skills</span>
            </h2>
            <p className="text-gray-500 text-sm mb-8">Based on my GitHub contributions</p>
            
            <GitHubSkills />
          </div>

          {/* Experience Section */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Work <span className="text-purple-400">Experience</span>
            </h2>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative pl-6 border-l-2 border-purple-500/30 hover:border-purple-400/60 transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-2 border-background" />
                  <div className="p-4 sm:p-6 rounded-xl bg-gray-900/60 border border-purple-500/20 hover:border-purple-400/40 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">{exp.title}</h3>
                      <span className="text-sm text-purple-400 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-violet-300 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              <span className="text-purple-400">Education</span>
            </h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="p-4 sm:p-6 rounded-xl bg-gray-900/60 border border-purple-500/20 hover:border-purple-400/40 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{edu.degree}</h3>
                    <span className="text-sm text-purple-400 font-medium">{edu.period}</span>
                  </div>
                  <p className="text-violet-300 font-medium mb-2">{edu.school}</p>
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center pb-8">
            <p className="text-gray-400 text-lg mb-6">Interested in working together?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-purple-500/20 text-purple-200 text-lg font-medium transition-all hover:bg-purple-500/30 border border-purple-400/40 hover:border-purple-400/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gray-900/80 border border-gray-700 text-white text-lg font-medium transition-all hover:bg-gray-800 hover:border-purple-500/50"
              >
                View Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
