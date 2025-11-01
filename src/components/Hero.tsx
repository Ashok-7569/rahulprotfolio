import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen gradient-hero pt-20 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Kodi Rahul
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Java Full Stack Developer
              </h2>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Building reliable, modern, and scalable web solutions. Passionate about creating 
              efficient applications using Java, Spring Boot, React.js, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="gradient-primary text-white shadow-lg hover:shadow-hover transition-all">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/in/rahul-yadav-kodi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all shadow-card hover:shadow-hover"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all shadow-card hover:shadow-hover"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:rahulyadav.kodi@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-white transition-all shadow-card hover:shadow-hover"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 gradient-primary opacity-20 blur-2xl rounded-full animate-float"></div>
              <img
                src={profilePhoto}
                alt="Kodi Rahul"
                className="relative rounded-full w-80 h-80 object-cover shadow-card border-8 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
