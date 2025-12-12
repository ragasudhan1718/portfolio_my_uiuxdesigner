import { useEffect, useState } from "react";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "UI/UX Designer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium text-sm">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-5xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p
            className="text-xl text-foreground/70 mb-12 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            I craft beautiful, intuitive digital experiences that users love.
            With a passion for design and years of experience, I turn ideas into
            reality through thoughtful UX and stunning visuals.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#portfolio"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary text-foreground rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 inline-block"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div
          className="flex justify-center lg:justify-end animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-50"></div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2Fbc7d1edcf68742079f6ca11ba9ec9394?format=webp&width=800"
              alt="Ragasudhan"
              className="relative w-80 h-96 object-cover rounded-2xl border-2 border-primary/30 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
