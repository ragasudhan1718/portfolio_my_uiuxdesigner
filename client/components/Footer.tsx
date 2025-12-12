import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Portfolio", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">
                  R
                </span>
              </div>
              <span className="font-bold text-foreground">Ragasudhan</span>
            </div>
            <p className="text-foreground/60 text-sm">
              UI/UX Designer creating beautiful, functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-foreground/60 hover:text-foreground transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <p className="text-foreground/60 text-sm mb-2">
              ragasudhan1718@gmail.com
            </p>
            <p className="text-foreground/60 text-sm">
              Available for freelance and full-time opportunities
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-foreground/50 text-sm">
              © {currentYear} Ragasudhan. All rights reserved.
            </p>
            <p className="text-foreground/50 text-sm">
              Designed and built with care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
