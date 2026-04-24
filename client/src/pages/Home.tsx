import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLocation } from "wouter";

/**
 * Tech-forward developer portfolio for Tarcisse Ndjibu
 * Light theme with vibrant blue accents
 * 
 * Design Philosophy:
 * - Clean, spacious layout emphasizing code and craft
 * - Subtle depth through layered cards and soft shadows
 * - Typography-driven hierarchy with intentional whitespace
 * - Tech-forward but approachable
 */

export default function Home() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management and payment integration.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team collaboration features.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization dashboard with interactive charts and real-time data processing.",
      tags: ["React", "D3.js", "Express", "MongoDB"],
      link: "#",
    },
    {
      title: "Mobile Weather App",
      description:
        "Cross-platform weather application with location-based forecasting and notifications.",
      tags: ["React Native", "TypeScript", "API Integration"],
      link: "#",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Git",
    "Docker",
    "AWS",
    "REST APIs",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-foreground">
            Tarcisse<span className="text-accent">.</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a
              href="#projects"
              className="text-foreground hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white pt-20 pb-32">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663595260513/CjSQFrm66Bj3eLwXndpZaY/hero-tech-gradient-cnUG2QXQGynNNThzixDYRC.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-secondary rounded-full">
              <span className="text-sm font-medium text-accent">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Full-Stack Developer &<br />
              <span className="text-accent">Problem Solver</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              I build scalable web applications and solve complex technical
              challenges. Passionate about clean code, modern technologies, and
              creating seamless user experiences.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-accent hover:bg-blue-600 text-white"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/manus-storage/Tarcisse_Ndjibu_Resume1_ba923d1f.pdf';
                  link.download = 'Tarcisse_Ndjibu_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border bg-card hover:bg-secondary/50 cursor-pointer"
                onClick={() => navigate(`/project/${idx + 1}`)}
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 bg-secondary text-accent text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/project/${idx + 1}`);
                    }}
                    className="inline-flex items-center text-accent hover:text-blue-600 font-medium group/link"
                  >
                    View Project{" "}
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <Card
                key={idx}
                className="p-6 text-center border-border bg-white hover:shadow-md transition-shadow cursor-pointer hover:bg-secondary/50"
              >
                <p className="font-medium text-foreground">{skill}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About Me
              </h2>
              <div className="h-1 w-20 bg-accent rounded-full mb-8" />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a full-stack developer with a passion for building
                beautiful, functional web applications. With experience across
                the entire development stack, I create solutions that are not
                only technically sound but also user-friendly and scalable.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in continuous learning and
                staying updated with the latest industry trends.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/tarcisse-ndjibu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary hover:bg-accent hover:text-white transition-colors"
                  title="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tarcisse-ndjibu-5a0438294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary hover:bg-accent hover:text-white transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:ndjibutarcisse@gmail.com"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary hover:bg-accent hover:text-white transition-colors"
                  title="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-100 rounded-2xl blur-2xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663595260513/CjSQFrm66Bj3eLwXndpZaY/abstract-tech-accent-cyin9uGRCZeP8sWaN4WKYu.webp"
                alt="Tech abstract"
                className="relative rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <div className="h-1 w-20 bg-accent rounded-full mx-auto mb-6" />
              <p className="text-lg text-muted-foreground">
                Have a project in mind or want to collaborate? I'd love to hear
                from you.
              </p>
            </div>

            <Card className="p-8 border-border bg-white">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Your name"
                    className="mt-2 border-border focus:ring-accent"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="your@email.com"
                    className="mt-2 border-border focus:ring-accent"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-foreground font-medium"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="mt-2 border-border focus:ring-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-blue-600 text-white font-medium"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-bold mb-4 md:mb-0">
              Tarcisse<span className="text-accent">.</span>
            </div>
            <p className="text-sm text-gray-400">
              © 2026 Tarcisse Ndjibu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
