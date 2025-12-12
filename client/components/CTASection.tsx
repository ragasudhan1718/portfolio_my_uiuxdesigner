import { Mail, Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  const socialLinks = [
    { icon: Mail, href: "mailto:ragasudhan1718@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-2xl p-12 sm:p-16 text-center backdrop-blur-sm animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Create Something{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>

          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a specific project in mind or just
            want to chat about design, feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:ragasudhan1718@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Send Me an Email
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-primary text-foreground rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 inline-block"
            >
              Contact Form
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8 border-t border-border">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300 transform hover:scale-110 group"
                  title={social.label}
                >
                  <Icon
                    size={20}
                    className="text-foreground/70 group-hover:text-primary transition-colors duration-300"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
