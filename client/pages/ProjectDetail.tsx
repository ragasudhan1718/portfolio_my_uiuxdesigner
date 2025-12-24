import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhoneMockup from "@/components/PhoneMockup";
import DesktopMockup from "@/components/DesktopMockup";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projectDetails: Record<string, any> = {
    "agroweather-app": {
      title: "AgroWeather App",
      subtitle: "Farmer-Focused Weather & Crop Advisory",
      category: "App Design",
      year: "2025",
      challenge:
        "Farmers needed real-time weather data and crop advisory information, but existing weather apps were not designed for agricultural use. The interface was cluttered, hard to read in outdoor conditions, and lacked critical farming-specific alerts like pesticide spray recommendations and soil moisture tracking.",
      solution:
        "Designed a dedicated agricultural weather app with large, easy-to-read icons, high-contrast colors for outdoor visibility, and offline capability. Implemented visual alerts for critical farming decisions (rain forecasts before pesticide spraying) and real-time soil moisture monitoring. The interface prioritizes simplicity with minimal text and color-coded information.",
      image:
        "\assets\projects\agroweather\cover.png",
      mockupScreens: [
        {
          title: "Weather Dashboard",
          description:
            "Main weather dashboard displaying current conditions, temperature, and soil moisture information.",
          image:
            "\assets\projects\agroweather.cover.png",
          type: "mobile",
        },
        {
          title: "Mobile App Interface",
          description:
            "Clean mobile interface with easy-to-read weather data and forecast information.",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F7406a3e067be42cd8b32a1d1f06d331e?format=webp&width=800",
          type: "mobile",
        },
        {
          title: "Offline Mode",
          description:
            "Offline capability showing last updated data to ensure farmers have access even without connectivity.",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2Fa40ee7350ef24eb2b288d0de69f2d1d0?format=webp&width=800",
          type: "mobile",
        },
        {
          title: "Design System & Components",
          description:
            "Comprehensive design system with reusable components, typography, and color palette guidelines.",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F72421e60fdb7404cbbd9b10fd9d9e9f9?format=webp&width=800",
          type: "mobile",
        },
        {
          title: "UX Strategy Overview",
          description:
            "User research findings and UX goals that guided the design process and problem-solving approach.",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F8c6b33b07dd74fed91a83cf04d50b7b3?format=webp&width=800",
          type: "mobile",
        },
        {
          title: "Interactive Prototypes",
          description:
            "Interactive prototypes and wireframes showing the complete user journey and interaction patterns.",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F2af2908530084ecf8c3e2c9dc2c6b841?format=webp&width=800",
          type: "mobile",
        },
        {
          title: "Settings & Customization",
          description:
            "User settings panel allowing customization of theme, language, notifications, and location preferences.",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F5314d7bc464b4f4ab8c6009a1d64cbec?format=webp&width=800",
          type: "mobile",
        },
        {
          title: "Final Settings Interface",
          description:
            "Polished settings interface with intuitive navigation and comprehensive user control options.",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F79496fbf8bd14404a855c99f84d747eb?format=webp&width=800",
          type: "mobile",
        },
      ],
      images: [
        "https://cdn.builder.io/o/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F40c4043be8db4d4997c2f8c062acc5e5?alt=media&token=8ec9c617-d685-4f7b-a35c-79a73b960c3e&apiKey=61dacd5c91b34b0ba55d4b6c49c26bc5",
      ],
      tags: ["Web Design", "UX Research", "UI Design", "Design System"],
      highlights: [
        {
          title: "User Research",
          description:
            "Interviewed 20+ farmers across different regions to understand daily challenges and accessibility needs in outdoor conditions",
        },
        {
          title: "Offline Capability",
          description:
            "Implemented offline-first architecture allowing farmers to access cached weather data without constant connectivity",
        },
        {
          title: "Critical Alert System",
          description:
            "Designed visual alert banners for high-priority farming decisions like pesticide spray recommendations before rain",
        },
        {
          title: "High Contrast Design",
          description:
            "Optimized colors and typography for outdoor visibility with large icons and minimal text for quick comprehension",
        },
      ],
      result:
        "The new app increased farmer engagement by 60% and improved decision-making speed by 40%. Users reported significantly better accessibility in outdoor conditions and appreciated the offline functionality. The app saw a 4.8-star rating with over 50,000 downloads in the first quarter.",
      tools: ["Figma", "Adobe XD", "Protopie", "FigJam"],
    },
    "login-page": {
      title: "Login Page Design",
      subtitle: "Secure Authentication Interface",
      category: "App Design",
      year: "2025",
      challenge:
        "Users needed a fast, secure, and intuitive login interface that builds trust and ensures data protection. The design had to work across multiple platforms while maintaining clarity in the authentication process.",
      solution:
        "Created a clean, minimalist login interface with clear form validation, password strength indicators, and 'Forgot Password' functionality. The design emphasizes security through visual cues while maintaining an inviting appearance.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F4a8cb98851f54146982071ac03690b98?format=webp&width=800",
      result:
        "The login interface achieved a 99.2% successful first-time authentication rate and reduced support tickets related to login issues by 75%. Users praised the intuitive design and quick loading times.",
      tools: ["Figma", "Adobe XD", "Protopie"],
      highlights: [
        {
          title: "Form Validation",
          description:
            "Real-time validation feedback for username and password fields",
        },
        {
          title: "Security Focus",
          description: "Visual security indicators and password strength meter",
        },
        {
          title: "Accessibility",
          description:
            "WCAG compliant with proper contrast and keyboard navigation",
        },
        {
          title: "Multi-Platform",
          description:
            "Responsive design working seamlessly across all devices",
        },
      ],
      mockupScreens: [
        {
          title: "Login Screen (Mobile)",
          description:
            "Clean login interface with username and password fields optimized for mobile devices",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2Fe73cefdc8d5846e1bee657edd41419a4?format=webp&width=800",
          type: "mobile",
        },
        {
          title: "Login Screen (Desktop)",
          description:
            "Responsive desktop version of the login interface with enhanced layout for larger screens",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2Fe73cefdc8d5846e1bee657edd41419a4?format=webp&width=800",
          type: "desktop",
        },
      ],
      tags: ["Authentication", "UI Design", "Security", "Responsive"],
    },
    "fin-converter": {
      title: "Fin Converter (MT-MX)",
      subtitle: "Financial Data Conversion Tool",
      category: "Web App",
      year: "2025",
      challenge:
        "Financial professionals needed a fast, reliable tool to convert between MT103 and MX formats. The existing solutions were complex, required technical knowledge, and had long processing times.",
      solution:
        "Built an intuitive web application with drag-and-drop file upload, real-time conversion progress, and instant download functionality. The interface guides users through the process with clear visual feedback at each step.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2Ffe1001e95f8149c0aea68c68d1be6c3a?format=webp&width=800",
      result:
        "The tool processes over 1,000 conversions daily with a 99.8% success rate. Users report 10x faster conversion times compared to previous methods, and the conversion accuracy is 100%.",
      tools: ["Figma", "React", "Node.js", "AWS"],
      highlights: [
        {
          title: "Drag & Drop Upload",
          description:
            "Intuitive file upload with visual feedback and progress tracking",
        },
        {
          title: "Real-Time Conversion",
          description:
            "Instant MT103 to MX format conversion with detailed logging",
        },
        {
          title: "Error Handling",
          description:
            "Clear error messages and validation for invalid file formats",
        },
        {
          title: "Batch Processing",
          description: "Ability to process multiple files simultaneously",
        },
      ],
      mockupScreens: [
        {
          title: "File Upload Interface",
          description: "Drag and drop area with file browser and recent files",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F1082f8030fe84d59989f6656432e2058?format=webp&width=800",
          type: "desktop",
        },
        {
          title: "File Upload Success",
          description:
            "Successful file upload with processing progress indicator",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F9ac4c85f025942a380725366c609690a?format=webp&width=800",
          type: "desktop",
        },
        {
          title: "Message Conversion Interface",
          description: "Direct message paste conversion with dropbox interface",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F5c9b9de5e151406d9533aa4635aac7ec?format=webp&width=800",
          type: "desktop",
        },
        {
          title: "Conversion Success & Download",
          description: "Successfully converted message with download ready",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2Fe05478f9cbc840fe97410c87c8e0869c?format=webp&width=800",
          type: "desktop",
        },
      ],
      tags: ["Finance", "Web App", "Conversion", "Tool"],
    },
    "internet-banking": {
      title: "Internet Banking Dashboard",
      subtitle: "Loan Management & Financial Overview",
      category: "Financial App",
      year: "2025",
      challenge:
        "Users needed a clear, comprehensive view of their loans and account balances, but the existing banking interface was confusing with scattered information. Users struggled to track multiple loans and understand their financial status.",
      solution:
        "Designed a comprehensive banking dashboard with clear loan overview cards, real-time balance display, and intuitive navigation. Implemented color-coded loan types, filter options by time period, and a notification system for important updates.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F0dd0b5f1f993473e9ec3ee6e73ec441d?format=webp&width=800",
      result:
        "Users reported 85% improvement in financial understanding and 90% faster access to loan information. The dashboard increased user engagement by 60% and reduced customer service inquiries by 40%.",
      tools: ["Figma", "Adobe XD", "Sketch", "React"],
      highlights: [
        {
          title: "User-Centric Design",
          description:
            "Clear, easy-to-navigate components prioritizing user experience",
        },
        {
          title: "Intuitive Loan Tracking",
          description:
            "Interactive loan cards displaying loan types and outstanding balances",
        },
        {
          title: "Real-Time Balance",
          description:
            "Always-accessible account balance with real-time updates",
        },
        {
          title: "Advanced Filtering",
          description:
            "Easy loan statement filtering by time period and custom date ranges",
        },
      ],
      mockupScreens: [
        {
          title: "Dashboard Overview",
          description: "Main dashboard with loan cards and account balance",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F0dd0b5f1f993473e9ec3ee6e73ec441d?format=webp&width=800",
          type: "desktop",
        },
        {
          title: "Loan Details",
          description: "Detailed view of individual loan information",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2Fd6140b553b3541d580893c126c6e3e46?format=webp&width=800",
          type: "desktop",
        },
        {
          title: "Account Balance",
          description: "Detailed account balance and financial overview",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2Fbf82c74fda814f788bcf8647b6ef8449?format=webp&width=800",
          type: "desktop",
        },
        {
          title: "Statement Filters",
          description: "Advanced filtering options for loan statements",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F08d5be1c90d6482a91d3ffa7cd25d870?format=webp&width=800",
          type: "desktop",
        },
      ],
      tags: ["Finance", "Dashboard", "Banking", "UX Design"],
    },
    branding: {
      title: "Branding",
      subtitle: "Complete Visual Identity System",
      category: "Branding Design",
      year: "2025",
      challenge:
        "Needed to establish a cohesive visual identity that could work across multiple platforms and applications while maintaining flexibility for different contexts and brand expressions.",
      solution:
        "Created three distinct visual directions representing different brand personalities: a sleek, futuristic gradient dark tech theme, a vibrant orange accent professional approach, and a corporate blue professional aesthetic. Each direction maintains consistent brand values while offering flexibility.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F6404304a62f54b8ab35cb7e3e93b1689?format=webp&width=800",
      result:
        "Successfully delivered a comprehensive branding system that can be adapted for social media, profile branding, and various marketing materials. The multiple visual directions provide flexibility while maintaining brand consistency.",
      tools: ["Figma", "Adobe Illustrator", "Adobe XD"],
      highlights: [
        {
          title: "Multiple Visual Directions",
          description:
            "Three cohesive brand directions catering to different brand expressions and use cases",
        },
        {
          title: "Consistent Identity",
          description:
            "Unified brand values maintained across all visual directions",
        },
        {
          title: "Flexible Application",
          description:
            "Design system easily adaptable for social media, web, and print materials",
        },
        {
          title: "Professional Polish",
          description:
            "High-quality design suitable for corporate and creative applications",
        },
      ],
      mockupScreens: [
        {
          title: "Gradient Dark Tech Theme",
          description:
            "Sleek and futuristic visual direction with gradient dark tech aesthetic",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2F4ed8d448e12140a18796c84995745fc7?format=webp&width=800",
          type: "desktop",
        },
        {
          title: "Orange Accent Theme",
          description:
            "Brand-aligned visual direction with vibrant orange accent colors",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2Fc6d8a305209f40669d4a7ec256a3b0cf?format=webp&width=800",
          type: "desktop",
        },
        {
          title: "Professional Blue Theme",
          description:
            "Corporate and professional visual direction with blue color palette",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F61dacd5c91b34b0ba55d4b6c49c26bc5%2Fe5f1224009e14e109684c085556ee14d?format=webp&width=800",
          type: "desktop",
        },
      ],
      tags: ["Branding", "Visual Identity", "Design System"],
    },
  };

  const project = projectDetails[slug || ""];

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="pt-40 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-primary hover:text-secondary transition-colors"
          >
            Back to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </button>

          <div className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium text-sm mb-6">
              {project.category}
            </span>

            <h1 className="text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              {project.title}
            </h1>

            <p className="text-2xl text-foreground/70">{project.subtitle}</p>
          </div>

          {/* Project Image */}
          <div className="relative rounded-2xl overflow-hidden mb-16 h-96 lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-sm font-semibold text-foreground/60 uppercase mb-2">
              Year
            </h3>
            <p className="text-xl font-bold text-foreground">{project.year}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground/60 uppercase mb-2">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool: string) => (
                <span key={tool} className="text-sm font-medium text-primary">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Challenge */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              The Challenge
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              The Solution
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              {project.solution}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {project.highlights.map((highlight: any, index: number) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-foreground/60">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              The Result
            </h2>
            <div className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl">
              <p className="text-xl text-foreground leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>

          {/* Mockups Section */}
          {project.mockupScreens && (
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Design Mockups
              </h2>
              <p className="text-lg text-foreground/70 mb-12">
                Explore the complete design of the application with detailed
                mockups and screen designs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.mockupScreens.map((screen: any, index: number) => (
                  <div key={index} className="flex flex-col items-center">
                    {screen.type === "desktop" ? (
                      <DesktopMockup
                        image={screen.image}
                        title={screen.title}
                      />
                    ) : (
                      <PhoneMockup image={screen.image} title={screen.title} />
                    )}
                    <p className="text-foreground/60 text-sm leading-relaxed text-center mt-4 max-w-xs">
                      {screen.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-3 py-8 border-t border-border">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Interested in Working{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Together?
            </span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your vision to life.
          </p>
          <a
            href="mailto:ragasudhan1718@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
            <ExternalLink size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
