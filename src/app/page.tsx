import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      {/* Hero Section */}
      <div className="relative">
        {/* Purple glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500/20 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-5xl mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-20">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-purple-500/15 border border-purple-400/40 mb-4 sm:mb-6">
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-sm sm:text-base text-purple-300 font-medium">Available for work</span>
              </div>

              {/* Main heading */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-1 sm:mb-2">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-violet-400 to-fuchsia-400">Jm Pintin</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mb-6 sm:mb-8 leading-relaxed">
                A third-year Computer Science student passionate about{" "}
                <span className="text-purple-300 font-semibold">Web Development</span> and{" "}
                <span className="text-violet-300 font-semibold">App Development</span>. 
                Building modern, user-friendly applications with clean code.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-purple-500/20 text-purple-200 text-base sm:text-lg font-medium transition-all hover:bg-purple-500/30 border border-purple-400/40 hover:border-purple-400/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                >
                  About Me
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-gray-900/80 border border-gray-700 text-white text-base sm:text-lg font-medium transition-all hover:bg-gray-800 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                >
                  Download CV
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - Profile Image */}
            <div className="shrink-0">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                {/* Outer glow - large and soft */}
                <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 rounded-full bg-purple-500/30 blur-2xl sm:blur-3xl animate-pulse" />
                {/* Inner glow - brighter */}
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 rounded-full bg-violet-500/40 blur-xl sm:blur-2xl" />
                {/* Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-purple-400/40 bg-slate-700 shadow-[0_0_40px_rgba(192,132,252,0.4)] sm:shadow-[0_0_60px_rgba(192,132,252,0.5)]">
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
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-5xl mx-auto mt-16 sm:mt-24 md:mt-32 pb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6 sm:mb-8">Featured Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Project Card 1 */}
          <div className="group relative rounded-xl bg-gray-900/60 border border-purple-500/20 p-5 sm:p-6 transition-all hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:bg-gray-900/80">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Web App</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">A modern web application built with Next.js and TypeScript.</p>
            <span className="text-sm text-purple-400 font-medium group-hover:text-purple-300 transition-colors">View Project →</span>
          </div>

          {/* Project Card 2 */}
          <div className="group relative rounded-xl bg-gray-900/60 border border-violet-500/20 p-5 sm:p-6 transition-all hover:border-violet-400/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:bg-gray-900/80">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-violet-500/20 flex items-center justify-center mb-4 group-hover:bg-violet-500/30 transition-colors">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Mobile App</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">Cross-platform mobile app with React Native.</p>
            <span className="text-sm text-violet-400 font-medium group-hover:text-violet-300 transition-colors">View Project →</span>
          </div>

          {/* Project Card 3 */}
          <div className="group relative rounded-xl bg-gray-900/60 border border-fuchsia-500/20 p-5 sm:p-6 transition-all hover:border-fuchsia-400/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] hover:bg-gray-900/80 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-fuchsia-500/20 flex items-center justify-center mb-4 group-hover:bg-fuchsia-500/30 transition-colors">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Backend API</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">Scalable REST API with Node.js and PostgreSQL.</p>
            <span className="text-sm text-fuchsia-400 font-medium group-hover:text-fuchsia-300 transition-colors">View Project →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
