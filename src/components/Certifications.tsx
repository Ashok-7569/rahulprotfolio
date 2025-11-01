import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle2 } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Java Full Stack Development",
      issuer: "Tech Mahindra SMART Academy",
      description: "Comprehensive training in Java, Spring Boot, React.js, and full-stack web development",
    },
    {
      title: "Python Programming",
      issuer: "NPTEL (IIT Platform)",
      description: "Certified course in Python programming fundamentals and applications",
    },
    {
      title: "Artificial Intelligence Internship",
      issuer: "AICTE",
      period: "January - March 2025",
      description: "Hands-on internship focused on AI/ML technologies and practical implementations",
    },
    {
      title: "Tech Saksham - Skill Development Program",
      issuer: "Microsoft & SAP",
      description: "Industry-recognized program for developing technical and professional skills",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Certifications & Training</h2>
            <div className="h-1 w-20 gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-accent/10 flex-shrink-0">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1 flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        {cert.title}
                      </h3>
                      <p className="text-primary font-semibold text-sm mb-2">{cert.issuer}</p>
                      {cert.period && (
                        <p className="text-sm text-muted-foreground mb-2">📅 {cert.period}</p>
                      )}
                      <p className="text-sm text-foreground/70">{cert.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
