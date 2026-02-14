export default function Home() {
  return (
    <div className="min-h-screen p-8">
      {/* Hero Section */}
      <div className="relative">
        {/* Purple glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto pt-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Available for work</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Jm Pintin</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            A passionate developer crafting beautiful digital experiences. 
            I build modern web applications with cutting-edge technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-white font-medium transition-all hover:bg-secondary hover:border-primary/50"
            >
              Get in Touch
            </a>
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
