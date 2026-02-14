import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      {/* Hero Section */}
      <div className="relative">
        {/* Purple glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-5xl mx-auto pt-20">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-primary font-medium">Available for work</span>
              </div>

              {/* Main heading */}
              <p className="text-lg text-muted-foreground mb-2">Hi, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Jm Pintin</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl mb-8">
                A third-year Computer Science student passionate about{" "}
                <span className="text-white font-semibold">Web Development</span> and{" "}
                <span className="text-white font-semibold">App Development</span>. 
                Building modern, user-friendly applications with clean code.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/20 text-primary-foreground font-medium transition-all hover:bg-primary/30 border border-primary/30"
                >
                  About Me
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border text-white font-medium transition-all hover:bg-secondary hover:border-primary/50"
                >
                  Download CV
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - Profile Image */}
            <div className="shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Glow behind image */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
                {/* Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 bg-slate-600">
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
      <div className="max-w-4xl mx-auto mt-32">
        <h2 className="text-2xl font-semibold text-white mb-8">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="group relative rounded-xl bg-card border border-border p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Web App</h3>
            <p className="text-sm text-muted-foreground mb-4">A modern web application built with Next.js and TypeScript.</p>
            <span className="text-xs text-primary font-medium">View Project →</span>
          </div>

          {/* Project Card 2 */}
          <div className="group relative rounded-xl bg-card border border-border p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Mobile App</h3>
            <p className="text-sm text-muted-foreground mb-4">Cross-platform mobile app with React Native.</p>
            <span className="text-xs text-primary font-medium">View Project →</span>
          </div>

          {/* Project Card 3 */}
          <div className="group relative rounded-xl bg-card border border-border p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Backend API</h3>
            <p className="text-sm text-muted-foreground mb-4">Scalable REST API with Node.js and PostgreSQL.</p>
            <span className="text-xs text-primary font-medium">View Project →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
