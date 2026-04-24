import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Mail } from "lucide-react";
import { useRoute, useLocation } from "wouter";

/**
 * Detailed project view page
 * Shows comprehensive information about a specific project
 */

interface ProjectData {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  features: string[];
  technologies: {
    category: string;
    items: string[];
  }[];
  timeline: string;
  role: string;
}

const projectsData: Record<string, ProjectData> = {
  "1": {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management and payment integration.",
    fullDescription:
      "A comprehensive e-commerce platform built with modern web technologies. This project demonstrates full-stack development capabilities with a focus on scalability, performance, and user experience. The platform handles thousands of concurrent users with real-time inventory updates and secure payment processing.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663595260513/CjSQFrm66Bj3eLwXndpZaY/code-visualization-RWxZnyMACXSjDrkAaUZg8W.webp",
    link: "#",
    github: "#",
    metrics: [
      { label: "Performance", value: "98/100" },
      { label: "Users", value: "50K+" },
      { label: "Transactions", value: "100K+" },
      { label: "Uptime", value: "99.9%" },
    ],
    features: [
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "User authentication and authorization",
      "Product search and filtering",
      "Shopping cart and checkout",
      "Order tracking and history",
      "Admin dashboard",
      "Email notifications",
    ],
    technologies: [
      {
        category: "Frontend",
        items: ["React 19", "TypeScript", "Tailwind CSS", "Redux"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "PostgreSQL", "Redis"],
      },
      {
        category: "DevOps",
        items: ["Docker", "AWS EC2", "GitHub Actions", "Nginx"],
      },
    ],
    timeline: "6 months",
    role: "Full-Stack Developer",
  },
  "2": {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates and team collaboration features.",
    fullDescription:
      "A real-time collaborative task management application designed for teams. Features include live updates, team workspaces, and intelligent task prioritization. Built with Firebase for real-time capabilities and React for a responsive user interface.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663595260513/CjSQFrm66Bj3eLwXndpZaY/code-visualization-RWxZnyMACXSjDrkAaUZg8W.webp",
    link: "#",
    github: "#",
    metrics: [
      { label: "Active Teams", value: "1K+" },
      { label: "Tasks Created", value: "500K+" },
      { label: "Collaboration", value: "Real-time" },
      { label: "Response Time", value: "<100ms" },
    ],
    features: [
      "Real-time task updates",
      "Team workspaces",
      "Task prioritization",
      "Comments and attachments",
      "Due date reminders",
      "Progress tracking",
      "Team notifications",
      "Export to CSV",
    ],
    technologies: [
      {
        category: "Frontend",
        items: ["React 19", "TypeScript", "Tailwind CSS", "Zustand"],
      },
      {
        category: "Backend",
        items: ["Firebase Firestore", "Firebase Auth", "Cloud Functions"],
      },
      {
        category: "Tools",
        items: ["Vite", "ESLint", "Prettier", "Vitest"],
      },
    ],
    timeline: "4 months",
    role: "Full-Stack Developer",
  },
  "3": {
    id: "3",
    title: "Analytics Dashboard",
    description:
      "Data visualization dashboard with interactive charts and real-time data processing.",
    fullDescription:
      "An enterprise-grade analytics dashboard that processes and visualizes large datasets in real-time. Features interactive charts, custom reports, and data export capabilities. Built with D3.js for advanced visualizations and Express for efficient data processing.",
    tags: ["React", "D3.js", "Express", "MongoDB"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663595260513/CjSQFrm66Bj3eLwXndpZaY/code-visualization-RWxZnyMACXSjDrkAaUZg8W.webp",
    link: "#",
    github: "#",
    metrics: [
      { label: "Data Points", value: "10M+" },
      { label: "Query Time", value: "<500ms" },
      { label: "Visualizations", value: "50+" },
      { label: "Users", value: "5K+" },
    ],
    features: [
      "Interactive charts and graphs",
      "Real-time data updates",
      "Custom report builder",
      "Data filtering and sorting",
      "Export to PDF/CSV",
      "Scheduled reports",
      "User permissions",
      "Dark mode support",
    ],
    technologies: [
      {
        category: "Frontend",
        items: ["React 19", "D3.js", "Recharts", "TypeScript"],
      },
      {
        category: "Backend",
        items: ["Express", "MongoDB", "Node.js", "Socket.io"],
      },
      {
        category: "Infrastructure",
        items: ["AWS S3", "CloudWatch", "Lambda", "RDS"],
      },
    ],
    timeline: "5 months",
    role: "Full-Stack Developer & Data Engineer",
  },
  "4": {
    id: "4",
    title: "Mobile Weather App",
    description:
      "Cross-platform weather application with location-based forecasting and notifications.",
    fullDescription:
      "A native cross-platform weather application built with React Native. Provides accurate weather forecasts, severe weather alerts, and location-based recommendations. Integrates with multiple weather APIs for comprehensive data coverage.",
    tags: ["React Native", "TypeScript", "API Integration"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663595260513/CjSQFrm66Bj3eLwXndpZaY/code-visualization-RWxZnyMACXSjDrkAaUZg8W.webp",
    link: "#",
    github: "#",
    metrics: [
      { label: "Downloads", value: "100K+" },
      { label: "Rating", value: "4.8/5" },
      { label: "Locations", value: "200K+" },
      { label: "Accuracy", value: "95%" },
    ],
    features: [
      "Real-time weather data",
      "7-day forecast",
      "Severe weather alerts",
      "Location-based recommendations",
      "Offline mode",
      "Multiple unit systems",
      "Push notifications",
      "Weather history",
    ],
    technologies: [
      {
        category: "Mobile",
        items: ["React Native", "TypeScript", "Redux", "Native Modules"],
      },
      {
        category: "APIs",
        items: ["OpenWeatherMap", "Google Maps", "Firebase"],
      },
      {
        category: "Tools",
        items: ["Expo", "Xcode", "Android Studio", "TestFlight"],
      },
    ],
    timeline: "3 months",
    role: "Mobile Developer",
  },
};

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const [, navigate] = useLocation();

  const projectId = params?.id || "1";
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <Button onClick={() => navigate("/")} className="bg-accent">
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-foreground hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div className="text-2xl font-bold text-foreground">
            Tarcisse<span className="text-accent">.</span>
          </div>
          <div className="w-20" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 bg-secondary/30 border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-accent/10 rounded-full">
                <span className="text-sm font-medium text-accent">
                  Featured Project
                </span>
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {project.fullDescription}
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/tarcisse-ndjibu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-accent hover:bg-blue-600 text-white">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </a>
                <a
                  href="mailto:ndjibutarcisse@gmail.com"
                >
                  <Button variant="outline" className="border-border">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-100 rounded-2xl blur-2xl" />
              <img
                src={project.image}
                alt={project.title}
                className="relative rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Project Metrics
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {project.metrics.map((metric, idx) => (
              <Card
                key={idx}
                className="p-8 text-center border-border bg-secondary/50 hover:shadow-md transition-shadow"
              >
                <p className="text-4xl font-bold text-accent mb-2">
                  {metric.value}
                </p>
                <p className="text-muted-foreground font-medium">
                  {metric.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.features.map((feature, idx) => (
              <Card
                key={idx}
                className="p-6 border-border bg-white hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-foreground font-medium">{feature}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12">
            Technologies Used
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {project.technologies.map((tech, idx) => (
              <Card
                key={idx}
                className="p-8 border-border bg-secondary/30 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-foreground mb-6">
                  {tech.category}
                </h3>
                <ul className="space-y-3">
                  {tech.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Info Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-border bg-white">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Timeline
              </h3>
              <p className="text-lg text-accent font-medium">
                {project.timeline}
              </p>
            </Card>
            <Card className="p-8 border-border bg-white">
              <h3 className="text-xl font-bold text-foreground mb-4">Role</h3>
              <p className="text-lg text-accent font-medium">{project.role}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Interested in working together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your project to life.
          </p>
          <Button
            onClick={() => navigate("/#contact")}
            className="bg-accent hover:bg-blue-600 text-white"
            size="lg"
          >
            Get In Touch
          </Button>
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
