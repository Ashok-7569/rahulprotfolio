import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, Lock, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Blockchain-Based Autonomous Notarization System",
      description:
        "A secure and transparent notarization system leveraging blockchain technology and digital identity verification using National eID Cards. This system ensures tamper-proof document verification and automated notary services.",
      technologies: ["Blockchain", "Smart Contracts", "Digital Identity", "Security"],
      icon: Shield,
      features: [
        "Decentralized document storage",
        "Smart contract automation",
        "eID card integration",
        "Immutable audit trails",
      ],
    },
    {
      title: "Full Stack Web Application",
      description:
        "Developed a comprehensive web application using Java Spring Boot for backend services and React.js for the frontend. Implemented RESTful APIs, database integration with MySQL, and responsive UI design.",
      technologies: ["Java", "Spring Boot", "React.js", "MySQL", "REST API"],
      icon: Database,
      features: [
        "RESTful API architecture",
        "JWT authentication",
        "Responsive design",
        "Database optimization",
      ],
    },
    {
      title: "Secure Authentication System",
      description:
        "Built a robust authentication and authorization system with JWT tokens, role-based access control, and secure password hashing using industry-standard encryption methods.",
      technologies: ["Java", "Spring Security", "JWT", "MySQL"],
      icon: Lock,
      features: [
        "JWT token management",
        "Role-based access control",
        "Password encryption",
        "Session management",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-hover transition-all hover:scale-105 flex flex-col"
              >
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-foreground/80 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-sm mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-foreground/70 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary text-sm rounded-full text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full mt-auto">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
