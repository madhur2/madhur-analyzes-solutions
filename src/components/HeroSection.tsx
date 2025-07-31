import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Download, Mail } from "lucide-react";
import profileImage from "@/assets/madhur-profile.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // In a real implementation, this would download a PDF
    console.log("Downloading CV...");
  };

  return (
    <section id="about" className="min-h-screen bg-gradient-subtle flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <Avatar className="w-32 h-32 border-4 border-primary/20">
              <AvatarImage src={profileImage} alt="Madhur Mulchandani" />
              <AvatarFallback className="text-2xl font-bold">MM</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Business Analyst &
            <span className="bg-gradient-hero bg-clip-text text-transparent block">
              Digital Transformation Expert
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            5+ years driving tech-enabled solutions across utilities, AI platforms, and enterprise systems. 
            From discovery and stakeholder workshops to agile delivery and testing.
          </p>

          {/* Personal Quote */}
          <div className="bg-card/50 p-6 rounded-lg mb-8 max-w-2xl mx-auto border border-primary/10">
            <p className="text-lg italic text-muted-foreground mb-2">
              "I'm passionate about bridging the gap between complex technology and real business value. 
              Every project is an opportunity to solve meaningful problems and create lasting impact."
            </p>
            <p className="text-sm font-medium text-primary">— Madhur Mulchandani</p>
          </div>

          {/* Key Strengths */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            {[
              "Stakeholder Engagement",
              "Business Process Mapping", 
              "Data-Driven Insights",
              "Cross-Functional Collaboration"
            ].map((strength, index) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow-card">
                <p className="text-sm font-medium text-card-foreground">{strength}</p>
              </div>
            ))}
          </div>

          {/* Location & Availability */}
          <p className="text-lg text-muted-foreground mb-8">
            📍 Based in Australia • Available for contract, permanent, and consulting opportunities
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleDownloadCV}
              className="min-w-[200px]"
            >
              <Download size={20} />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              onClick={() => scrollToSection('projects')}
              className="min-w-[200px]"
            >
              See My Work
              <ArrowRight size={20} />
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="mt-8 pt-8 border-t">
            <p className="text-muted-foreground mb-4">Ready to discuss your next project?</p>
            <Button 
              variant="link" 
              onClick={() => scrollToSection('contact')}
              className="text-lg"
            >
              <Mail size={20} />
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;