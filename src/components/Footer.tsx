import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Download } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleDownloadCV = () => {
    // In a real implementation, this would download a PDF
    console.log("Downloading CV...");
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Madhur Mulchandani</h3>
            <p className="text-muted-foreground">
              Business Analyst & Digital Transformation Expert delivering 
              tech-enabled solutions across utilities, AI platforms, and enterprise systems.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://linkedin.com/in/madhur-mulchandani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <Linkedin size={20} className="text-muted-foreground" />
              </a>
              <a 
                href="mailto:madhur.mulchandani@email.com"
                className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <Mail size={20} className="text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Me
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Ready to Connect?</h4>
            <p className="text-muted-foreground text-sm">
              Open to contract roles, permanent positions, and consulting opportunities.
            </p>
            <div className="space-y-3">
              <Button variant="cta" size="sm" onClick={handleDownloadCV} className="w-full">
                <Download size={16} />
                Download CV
              </Button>
              <Button variant="outline" size="sm" asChild className="w-full">
                <a href="mailto:madhur.mulchandani@email.com">
                  <Mail size={16} />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Madhur Mulchandani. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>🇦🇺 Based in Australia</span>
            <span>•</span>
            <span>Remote & Hybrid Welcome</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;