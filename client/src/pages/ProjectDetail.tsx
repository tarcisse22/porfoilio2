import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github, Mail } from "lucide-react";
import { useRoute, useLocation } from "wouter";

/**
 * Detailed project view page
 * Shows comprehensive information about a specific project
 * 
 * Design Philosophy:
 * - Clean, spacious layout emphasizing project details
 * - Metrics displayed as key performance indicators
 * - Technologies organized by category
 * - Features listed with clear descriptions
 */

interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  github: string;
  live?: string;
  metrics: Record<string, string>;
  features: string[];
  techCategories: Record<string, string[]>;
  timeline: string;
  role: string;
}

const projectsData: Record<string, ProjectData> = {
  "auto-shop": {
    id: "auto-shop",
    title: "Auto Shop Inventory Manager",
    shortDescription: "Full-stack inventory management system for auto service shops",
    fullDescription:
      "A full-stack web application for managing auto service shop inventory. Built with React and Firebase, it enables shop staff to track vehicles, manage service records, and handle inventory in real time. Features secure authentication with role-based access control, real-time data synchronization powered by Firestore, and a responsive design that works seamlessly across desktop and mobile devices.",
    tags: ["React", "Firebase", "Firestore", "CSS3"],
    github: "https://github.com/tarcisse22/Auto-Shop-frontend",
    live: "https://auto-shop-frontend-zeta.vercel.app",
    metrics: {
      "Authentication": "Firebase Auth with role-based access",
      "Real-time Sync": "Firestore database",
      "Vehicle Records": "Full CRUD functionality",
      "Responsiveness": "Mobile & desktop optimized",
    },
    features: [
      "Secure login and registration via Firebase Auth with role-based access control",
      "Add, edit, view, and delete vehicle records with full CRUD functionality",
      "Live data sync powered by Firestore; changes reflect instantly across sessions",
      "Clean, mobile-friendly UI that works across desktop and mobile devices",
    ],
    techCategories: {
      "Frontend": ["React", "Vite", "CSS3"],
      "Backend": ["Firebase Firestore", "Firebase Auth"],
      "Tools": ["npm", "Git"],
    },
    timeline: "2026",
    role: "Full-Stack Developer",
  },
  "health-tracker": {
    id: "health-tracker",
    title: "HabitLoop - Daily Health Tracker",
    shortDescription: "Web application for tracking daily health habits and wellness",
    fullDescription:
      "Built a responsive habit tracking app enabling users to log exercise, water intake, and sleep across mobile and desktop with adaptive grid layouts and persistent localStorage state. Engineered dynamic streak calculation logic and weekly summary visualizations, driving a 3x improvement in user retention during peer testing versus static spreadsheet alternatives.",
    tags: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    github: "https://github.com/tarcisse22/health-habit-tracker",
    metrics: {
      "User Retention": "3x improvement vs spreadsheets",
      "Tracked Habits": "Exercise, water intake, sleep",
      "Data Persistence": "Browser localStorage",
      "Responsiveness": "Mobile & desktop optimized",
    },
    features: [
      "Log daily habits including exercise, water intake, and sleep",
      "Track habit streaks with dynamic calculation logic",
      "View weekly summary visualizations and progress",
      "Persistent data storage using browser localStorage",
      "Responsive design for mobile and desktop",
    ],
    techCategories: {
      "Frontend": ["JavaScript", "HTML5", "CSS3"],
      "Storage": ["LocalStorage API"],
      "Tools": ["Browser APIs", "Git"],
    },
    timeline: "2026",
    role: "Frontend Developer",
  },
  "interview-prep": {
    id: "interview-prep",
    title: "TechPrep - Interview Preparation Platform",
    shortDescription: "Interview question bank with curated coding problems",
    fullDescription:
      "Developed a categorized question bank covering arrays, trees, graphs, dynamic programming, and system design with 100+ curated problems and difficulty tagging. Implemented client-side filtering and session-based progress tracking with 0 backend dependencies, achieving sub-50ms render performance.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/tarcisse22/Interview-Prep-App",
    metrics: {
      "Questions": "100+ curated problems",
      "Topics": "Arrays, Strings, Trees, Graphs, DP",
      "Performance": "Sub-50ms render time",
      "Backend": "Zero backend dependencies",
    },
    features: [
      "Random interview question generator",
      "Multiple topics: Arrays, Strings, Binary Trees",
      "Show solution button for learning and review",
      "Clean and simple UI",
      "Beginner-friendly algorithm examples",
      "100+ curated problems with difficulty levels",
    ],
    techCategories: {
      "Frontend": ["JavaScript", "HTML5", "CSS3"],
      "Performance": ["Client-side filtering", "Sub-50ms render"],
      "Tools": ["Git"],
    },
    timeline: "2026",
    role: "Frontend Developer",
  },
  "job-tracker": {
    id: "job-tracker",
    title: "Job Application Tracker",
    shortDescription: "Dashboard for organizing and tracking job applications",
    fullDescription:
      "A job application tracker that reduces the stress of job searching by organizing all application data into one actionable dashboard. Track company, role, status, and date for each application. Monitor progress through different stages such as Applied, Interview, Offer, and Rejected with color-coded status indicators and persistent storage.",
    tags: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    github: "https://github.com/tarcisse22/Job-Application-Tracker",
    metrics: {
      "Applications": "Unlimited tracking",
      "Status Stages": "Applied, Interview, Offer, Rejected",
      "Data Persistence": "Browser localStorage",
      "Dashboard": "Real-time statistics",
    },
    features: [
      "Add new job applications with company, role, and status",
      "Track application status: Applied, Interview, Offer, Rejected",
      "Delete applications and manage records",
      "Dashboard statistics for applications, interviews, offers, and rejections",
      "Color-coded status indicators for quick overview",
      "Persistent storage using localStorage",
      "Simple responsive UI",
    ],
    techCategories: {
      "Frontend": ["JavaScript", "HTML5", "CSS3"],
      "Storage": ["LocalStorage API"],
      "Tools": ["Browser APIs", "Git"],
    },
    timeline: "2026",
    role: "Frontend Developer",
  },
};

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const [, navigate] = useLocation();

  if (!match) {
    return null;
  }

  const projectId = params?.id as string;
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")} className="bg-accent hover:bg-blue-600 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
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
          <div className="text-2xl font-bold text-foreground">
            Tarcisse<span className="text-accent">.</span>
          </div>
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-foreground hover:text-accent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </nav>

      {/* Project Hero */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-blue-50 text-accent rounded-full text-sm font-medium mb-6">
              Project Details
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {project.shortDescription}
            </p>
            <div className="flex gap-3 flex-wrap mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-12 md:py-20 bg-blue-50/50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Description */}
              <Card className="p-8 mb-8 border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {project.fullDescription}
                </p>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={project.github}
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
              </Card>

              {/* Features */}
              <Card className="p-8 mb-8 border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-lg text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Technologies */}
              <Card className="p-8 border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Technologies Used</h2>
                <div className="space-y-6">
                  {Object.entries(project.techCategories).map(([category, techs]) => (
                    <div key={category}>
                      <h3 className="font-semibold text-foreground mb-3">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-accent rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Metrics */}
              <Card className="p-6 border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">Metrics</h3>
                <div className="space-y-4">
                  {Object.entries(project.metrics).map(([label, value]) => (
                    <div key={label} className="border-b border-border pb-4 last:border-0">
                      <p className="text-sm text-muted-foreground mb-1">{label}</p>
                      <p className="text-lg font-semibold text-foreground">{value}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Project Info */}
              <Card className="p-6 border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">Project Info</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                    <p className="text-lg font-semibold text-foreground">{project.timeline}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Role</p>
                    <p className="text-lg font-semibold text-foreground">{project.role}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Interested in working together?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:ndjibutarcisse@gmail.com">
              <Button className="bg-accent hover:bg-blue-600 text-white px-8">
                Get in Touch
              </Button>
            </a>
            <Button
              variant="outline"
              className="border-border px-8"
              onClick={() => navigate("/")}
            >
              Back to Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
