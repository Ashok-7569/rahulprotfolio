import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, MessageSquare, Ear, Zap, Award } from "lucide-react";

const About = () => {
  const strengths = [
    { icon: Zap, title: "Self-Motivated", color: "text-primary" },
    { icon: Users, title: "Leadership", color: "text-accent" },
    { icon: MessageSquare, title: "Communication", color: "text-primary" },
    { icon: Ear, title: "Active Listener", color: "text-accent" },
    { icon: Target, title: "Hardworking", color: "text-primary" },
    { icon: Award, title: "Team Player", color: "text-accent" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 gradient-primary mx-auto rounded-full"></div>
          </div>

          <Card className="shadow-card hover:shadow-hover transition-all mb-12">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                Hi, I'm <span className="font-semibold text-primary">Kodi Rahul</span> — a dedicated and 
                self-motivated Java Full Stack Developer passionate about building efficient, scalable web 
                applications using technologies like Java, Spring Boot, React.js, Node.js, and MySQL. I love 
                solving problems through technology and constantly seek opportunities to grow and contribute 
                to impactful projects.
              </p>
              <div className="border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r">
                <p className="text-foreground/90 font-medium italic">
                  "To pursue a challenging and dynamic career in an innovative environment that values 
                  creativity and growth. I aim to leverage my Java development skills and contribute 
                  meaningfully to the success and progress of the organization."
                </p>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Key Strengths</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {strengths.map((strength, index) => (
                <Card 
                  key={index} 
                  className="shadow-card hover:shadow-hover transition-all hover:scale-105 cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <strength.icon className={`h-10 w-10 mx-auto mb-3 ${strength.color}`} />
                    <p className="font-semibold">{strength.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
