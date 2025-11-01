import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-foreground/70 flex items-center justify-center gap-2">
            © 2025 Kodi Rahul. Designed with{" "}
            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
