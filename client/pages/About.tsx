import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Title */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-slide-up">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p
            className="text-xl text-foreground/60 max-w-2xl animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Learn more about my journey as a designer
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Profile Section */}
            <div className="md:col-span-1 flex flex-col items-center">
              <div className="mb-6">
                <div className="inline-block p-4 bg-primary/10 rounded-full">
                  <div className="w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full overflow-hidden flex items-center justify-center border-4 border-primary">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F5fc1275ea3fa4eb888c088b63d73f43f?format=webp&width=800"
                      alt="Ragasudhan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center">Ragasudhan R</h3>
              <p className="text-primary font-semibold mt-2">
                UI/UX Designer & Creative Innovator
              </p>
              <p className="text-foreground/60 text-sm text-center mt-2">
                Krishnagiri, Tamilnadu
              </p>
            </div>

            {/* Content Section */}
            <div className="md:col-span-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Passionate About UI/UX Design
                  </h2>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    I'm a UI/UX Designer with hands-on experience in UI
                    development and customization for real-time internet banking
                    projects. I'm passionate about creating intuitive,
                    user-centered designs and exploring the endless
                    possibilities of generative AI in design.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">
                    My Design Philosophy
                  </h3>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    I bring fresh perspectives and boundless enthusiasm to every
                    design challenge. I'm constantly evolving, learning new
                    methodologies, and pushing creative boundaries. My approach
                    combines deep design theory with practical problem-solving,
                    ensuring that every solution is both beautiful and
                    functional. I'm passionate about creating designs that not
                    only look great but genuinely improve user experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">My Journey</h3>
                  <ul className="space-y-3 text-foreground/70">
                    <li className="flex items-start gap-3">
                      <ArrowRight
                        size={18}
                        className="text-primary mt-0.5 flex-shrink-0"
                      />
                      <span>
                        Completed Bachelor's degree in Technology with a strong
                        foundation in design principles
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight
                        size={18}
                        className="text-primary mt-0.5 flex-shrink-0"
                      />
                      <span>
                        Gained practical experience through internship at
                        BBSSL-Software Solutions (09/2022 - Present)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight
                        size={18}
                        className="text-primary mt-0.5 flex-shrink-0"
                      />
                      <span>
                        Worked on UI customization for AGD Bank's internet
                        banking platform using modern frameworks
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight
                        size={18}
                        className="text-primary mt-0.5 flex-shrink-0"
                      />
                      <span>
                        Currently seeking a UI/UX design role to grow creatively
                        and contribute to innovative products
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6">
                    Tools & Technologies
                  </h3>

                  {/* Design Tools */}
                  <div className="mb-8">
                    <h4 className="text-primary font-semibold mb-4">Design</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                        { name: "Figma", emoji: "🎨" },
                        { name: "Adobe Illustrator", emoji: "🖌️" },
                        { name: "Adobe Photoshop", emoji: "📸" },
                        { name: "Adobe XD", emoji: "✏️" },
                        { name: "Protopie", emoji: "🔧" },
                        { name: "FigJam", emoji: "📝" },
                      ].map((tool) => (
                        <div
                          key={tool.name}
                          className="p-4 bg-card border border-border rounded-lg text-center hover:border-primary hover:bg-primary/5 transition-all duration-300"
                        >
                          <div className="text-3xl mb-2">{tool.emoji}</div>
                          <p className="text-sm font-medium text-foreground">
                            {tool.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* UI/UX & Frontend */}
                  <div className="mb-8">
                    <h4 className="text-primary font-semibold mb-4">
                      UI/UX & Frontend
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                        { name: "HTML/CSS", emoji: "💻" },
                        { name: "JavaScript", emoji: "⚙️" },
                        { name: "Responsive Design", emoji: "📱" },
                        { name: "UI Design", emoji: "🎯" },
                        { name: "UX Research", emoji: "🔍" },
                        { name: "Design Systems", emoji: "🏗️" },
                      ].map((tool) => (
                        <div
                          key={tool.name}
                          className="p-4 bg-card border border-border rounded-lg text-center hover:border-primary hover:bg-primary/5 transition-all duration-300"
                        >
                          <div className="text-3xl mb-2">{tool.emoji}</div>
                          <p className="text-sm font-medium text-foreground">
                            {tool.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Other Tools */}
                  <div>
                    <h4 className="text-primary font-semibold mb-4">
                      Other Skills
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                        { name: "Prototyping", emoji: "🎬" },
                        { name: "Generative AI", emoji: "🤖" },
                        { name: "Typography", emoji: "🔤" },
                        { name: "Color Theory", emoji: "🎨" },
                        { name: "User Testing", emoji: "👥" },
                        { name: "Problem Solving", emoji: "💡" },
                      ].map((tool) => (
                        <div
                          key={tool.name}
                          className="p-4 bg-card border border-border rounded-lg text-center hover:border-primary hover:bg-primary/5 transition-all duration-300"
                        >
                          <div className="text-3xl mb-2">{tool.emoji}</div>
                          <p className="text-sm font-medium text-foreground">
                            {tool.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
