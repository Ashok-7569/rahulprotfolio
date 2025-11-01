import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rahulyadav.kodi@gmail.com",
      href: "mailto:rahulyadav.kodi@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 87121 17302",
      href: "tel:+918712117302",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "rahul-yadav-kodi",
      href: "https://linkedin.com/in/rahul-yadav-kodi",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="h-1 w-20 gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="shadow-card hover:shadow-hover transition-all">
                      <CardContent className="p-4">
                        <a
                          href={info.href}
                          target={info.label === "LinkedIn" ? "_blank" : undefined}
                          rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-4 group"
                        >
                          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.label}</p>
                            <p className="font-semibold group-hover:text-primary transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="shadow-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2">Open to Opportunities</h4>
                  <p className="text-foreground/80">
                    I'm currently open to full-time opportunities, freelance projects, and
                    collaborations. Let's build something amazing together!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" required className="bg-background" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" required className="bg-background" />
                  </div>
                  <div>
                    <Input placeholder="Subject" required className="bg-background" />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      required
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full gradient-primary text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
