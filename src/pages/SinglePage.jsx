// Individual section components
function HomeSection() {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center py-20 px-4 min-h-screen">
      <h1 className="text-4xl font-bold text-primary mb-4">Hi, I'm Yiming Wang.</h1>
      <p className="text-lg text-gray-600 mb-6">Software Developer | OMSCS @ Georgia Tech</p>
      <p className="max-w-xl text-gray-700 leading-relaxed mb-8">
        Passionate about Web / AI / Network. Currently working on combining technology with practical applications to create meaningful digital experiences.
      </p>
      <a href="/resume.pdf" className="bg-primary text-white px-6 py-3 rounded hover:bg-blue-800 transition">
        Download CV
      </a>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto py-20 px-4 min-h-screen">
      <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Example project cards - replace with your actual projects */}
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold mb-3">Project 1</h3>
          <p className="text-gray-600 mb-4">Description of your first project...</p>
          <div className="flex space-x-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Node.js</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold mb-3">Project 2</h3>
          <p className="text-gray-600 mb-4">Description of your second project...</p>
          <div className="flex space-x-2">
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Python</span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">AI/ML</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="blog" className="max-w-4xl mx-auto py-20 px-4 min-h-screen">
      <h2 className="text-3xl font-semibold text-primary mb-8 text-center">Blog</h2>
      <div className="space-y-6">
        {/* Example blog posts - replace with your actual posts */}
        <article className="bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold mb-2">Blog Post Title 1</h3>
          <p className="text-gray-500 text-sm mb-3">January 15, 2024</p>
          <p className="text-gray-600">Preview of your blog post content...</p>
          <a href="#" className="text-primary hover:underline mt-2 inline-block">Read more →</a>
        </article>
        <article className="bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold mb-2">Blog Post Title 2</h3>
          <p className="text-gray-500 text-sm mb-3">December 20, 2023</p>
          <p className="text-gray-600">Preview of another blog post...</p>
          <a href="#" className="text-primary hover:underline mt-2 inline-block">Read more →</a>
        </article>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="max-w-3xl mx-auto py-20 px-4 text-center min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl font-semibold text-primary mb-8">Get in Touch</h2>
      <p className="text-gray-600 mb-8">You can reach me via:</p>
      <div className="flex justify-center space-x-8 mb-8">
        <a href="https://github.com/yimingw99" className="flex flex-col items-center text-primary hover:text-blue-800 transition">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-xl">📧</span>
          </div>
          GitHub
        </a>
        <a href="https://linkedin.com/in/yimingw99" className="flex flex-col items-center text-primary hover:text-blue-800 transition">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-xl">💼</span>
          </div>
          LinkedIn
        </a>
        <a href="mailto:yiming@example.com" className="flex flex-col items-center text-primary hover:text-blue-800 transition">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-xl">✉️</span>
          </div>
          Email
        </a>
      </div>
    </section>
  );
}

// Main single page component
export default function SinglePage() {
  return (
    <div className="w-full">
      <HomeSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
