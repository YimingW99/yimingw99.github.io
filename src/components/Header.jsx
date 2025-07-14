import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="font-bold text-xl text-primary">Yiming Wang</div>
      <nav className="space-x-6 text-gray-600 text-sm">
        <Link to="/" className="hover:text-primary">Home</Link>
        <Link to="/projects" className="hover:text-primary">Projects</Link>
        <Link to="/blog" className="hover:text-primary">Blog</Link>
        <Link to="/contact" className="hover:text-primary">Contact</Link>
      </nav>
    </header>
  );
}
