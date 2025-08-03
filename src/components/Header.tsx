import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Linkedin, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Madhur_Mulchandani_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmailClick = () => {
    window.open('mailto:mulchandanimadhur2@gmail.com', '_blank');
  };

  const handlePhoneClick = () => {
    // This will show a phone number image - you can upload the image later
    alert("Phone number image will be displayed here. Please upload your phone number image.");
  };

  const handleNameClick = () => {
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div 
            className="font-bold text-xl text-foreground cursor-pointer hover:text-primary transition-colors"
            onClick={handleNameClick}
          >
            Madhur Mulchandani
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/madhur16/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <button 
              onClick={handleEmailClick}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </button>
            <button 
              onClick={handlePhoneClick}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={20} />
            </button>
            <Button variant="cta" size="sm" onClick={handleDownloadCV}>
              <Download size={16} />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors px-4 py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-foreground hover:text-primary transition-colors px-4 py-2"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-left text-foreground hover:text-primary transition-colors px-4 py-2"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors px-4 py-2"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/madhur16/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <button 
                  onClick={handleEmailClick}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                </button>
                <button 
                  onClick={handlePhoneClick}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={20} />
                </button>
                <Button variant="cta" size="sm" onClick={handleDownloadCV}>
                  <Download size={16} />
                  Download CV
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;