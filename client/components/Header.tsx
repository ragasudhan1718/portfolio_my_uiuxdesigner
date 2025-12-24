import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#portfolio", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];*/
  const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border-2 border-primary shadow-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F5fc1275ea3fa4eb888c088b63d73f43f?format=webp&width=800"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">
              Ragasudhan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              /*<Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>*/
			  <a
                 key={link.href}
                 href={link.href}
                 className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/Ragasudhan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all duration-300"
            >
              <Download size={16} />
              Resume
            </a>
            <a
              href="https://www.behance.net/RagasudhanDesign"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              Behance Portfolio
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 animate-slide-down">
            {navLinks.map((link) => (
              /*<Link
                key={link.href}
                to={link.href}
                className="block py-2 text-foreground/70 hover:text-foreground transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>*/
			  <a
                 key={link.href}
                 href={link.href}
                 className="block py-2 text-foreground/70 hover:text-foreground transition-colors duration-300"
                 onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Ragasudhan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-4 px-4 py-2 border border-primary text-primary rounded-lg font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={16} />
              Resume
            </a>
            <a
              href="https://www.behance.net/RagasudhanDesign"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Behance Portfolio
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
