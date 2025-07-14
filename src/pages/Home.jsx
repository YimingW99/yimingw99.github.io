export default function Home() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
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