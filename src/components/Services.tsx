import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Database, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Java Development",
      description:
        "End-to-end development of robust web applications using Java Spring Boot, ensuring scalability, security, and optimal performance.",
      highlights: ["Spring Boot", "RESTful APIs", "Microservices", "Security"],
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description:
        "Building modern, responsive web applications with cutting-edge technologies and best practices for seamless user experiences.",
      highlights: ["React.js", "Modern UI/UX", "Progressive Web Apps", "Performance Optimization"],
    },
    {
      icon: Smartphone,
      title: "Responsive UI/UX Design",
      description:
        "Creating beautiful, intuitive, and mobile-first interfaces that provide exceptional user experiences across all devices.",
      highlights: ["Mobile-First Design", "Cross-Browser Compatible", "Modern CSS", "Accessibility"],
    },
    {
      icon: Database,
      title: "Database Integration & API Development",
      description:
        "Designing and implementing efficient database schemas and RESTful APIs for seamless data management and integration.",
      highlights: ["MySQL", "REST APIs", "Data Modeling", "API Security"],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Services I Offer</h2>
            <div className="h-1 w-20 gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Delivering high-quality solutions tailored to your needs with modern technologies
              and industry best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-hover transition-all hover:scale-105"
              >
                <CardHeader>
                  <div className="p-3 rounded-lg gradient-primary w-fit mb-3">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
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

export default Services;
