export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow fixed top-0 z-50">
      <div className="font-bold text-xl text-primary">Yiming Wang</div>
      <nav className="space-x-6 text-gray-600 text-sm">
        <button onClick={() => scrollToSection('home')} className="hover:text-primary transition">Home</button>
        <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition">Projects</button>
        <button onClick={() => scrollToSection('blog')} className="hover:text-primary transition">Blog</button>
        <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition">Contact</button>
      </nav>
    </header>
  );
}
