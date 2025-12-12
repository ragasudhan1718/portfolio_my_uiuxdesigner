import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Twitter, Github, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "ragasudhan1718@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 6382350738" },
    { icon: MapPin, label: "Location", value: "India" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ragasudhan-r-03b2aa235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/ragasudhan1718",
      label: "GitHub",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Title */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate-slide-up">
            Get in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p
            className="text-xl text-foreground/60 max-w-2xl animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            I'd love to hear about your project. Let's create something amazing
            together.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-8">Contact Info</h2>

              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg mt-1">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.label}
                          </h3>
                          <p className="text-foreground/60">{info.value}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-card border border-border rounded-lg hover:bg-primary/20 hover:border-primary transition-all duration-300 transform hover:scale-110"
                        title={social.label}
                      >
                        <Icon
                          size={20}
                          className="text-foreground/70 hover:text-primary"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8 animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>

                <p className="text-sm text-foreground/50 mt-4">
                  I'll get back to you as soon as possible, typically within 24
                  hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
