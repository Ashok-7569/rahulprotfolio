import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Malla Reddy Institute of Engineering and Technology",
      period: "2021 - 2025",
      grade: "CGPA: 8.7",
    },
    {
      degree: "Intermediate (M.P.C)",
      institution: "Prathibha Junior College",
      period: "2018 - 2020",
      grade: "CGPA: 9.7",
    },
    {
      degree: "Secondary Schooling",
      institution: "Z.P.H.S Bakalwadi High School",
      period: "2017 - 2018",
      grade: "CGPA: 7.2",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="h-1 w-20 gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-hover transition-all border-l-4 border-l-primary"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="text-foreground/70">📅 {edu.period}</span>
                        <span className="text-primary font-semibold">🎓 {edu.grade}</span>
                      </div>
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

export default Education;
