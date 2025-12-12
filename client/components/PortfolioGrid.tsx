import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AgroWeather App",
    category: "App Design",
    description:
      "Farmer-focused weather and crop advisory app with real-time alerts and offline capability",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2Fbe9da917ef564f83a50a66220ddae385?format=webp&width=800",
    tags: ["Agriculture", "Weather", "Mobile App"],
    link: "/project/agroweather-app",
  },
  /*{
    id: 2,
    title: "E-Commerce Platform",
    category: "Web Design",
    description:
      "High-converting e-commerce redesign with improved user engagement",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f70570ec0?w=600&h=400&fit=crop",
    tags: ["Web", "E-Commerce", "UX Strategy"],
  },*/
  {
    id: 3,
    title: "Branding",
    category: "Branding Design",
    description:
      "Complete branding system with multiple visual directions and cohesive design language",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F6404304a62f54b8ab35cb7e3e93b1689?format=webp&width=800",
    tags: ["Branding", "Visual Identity", "Design System"],
    link: "/project/branding",
  },
  {
    id: 4,
    title: "Login Page Design",
    category: "App Design",
    description:
      "Secure and intuitive authentication interface with form validation",
    image:
      "https://cdn.builder.io/o/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F1ff01ce65d7b4144b274e8c332be869a?alt=media&token=70804565-1537-4ce1-a432-984e14cad36e&apiKey=61dacd5c91b34b0ba55d4b6c49c26bc5",
    tags: ["Authentication", "UI Design", "Security"],
    link: "/project/login-page",
  },
  {
    id: 5,
    title: "Fin Converter (MT-MX)",
    category: "Web App",
    description: "File conversion tool for financial data transformation",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2Ffe1001e95f8149c0aea68c68d1be6c3a?format=webp&width=800",
    tags: ["Web App", "Conversion", "File Management"],
    link: "/project/fin-converter",
  },
  {
    id: 6,
    title: "Internet Banking Dashboard",
    category: "Financial App",
    description:
      "Comprehensive banking interface for loan management and tracking",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F0dd0b5f1f993473e9ec3ee6e73ec441d?format=webp&width=800",
    tags: ["Finance", "Dashboard", "UX Design"],
    link: "/project/internet-banking",
  },
];

export default function PortfolioGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl">
            A selection of recent projects that showcase my design process,
            problem-solving skills, and attention to detail.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => project.link && navigate(project.link)}
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 h-full">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  {/* Image Container - Left Side */}
                  <div className="md:col-span-2 relative overflow-hidden h-64 md:h-full bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content - Right Side */}
                  <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-foreground/70 text-sm md:text-base mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-foreground/50 bg-muted px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Button */}
                    <button className="flex items-center gap-2 text-primary font-semibold group/btn w-fit">
                      <span>View Project</span>
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                      />
                    </button>
                  </div>
                </div>

                {/* Hover Border Animation */}
                <div className="absolute inset-0 rounded-xl pointer-events-none">
                  <div
                    className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
                      hoveredId === project.id
                        ? "border-primary shadow-lg shadow-primary/20"
                        : "border-transparent"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
