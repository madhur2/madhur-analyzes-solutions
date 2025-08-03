    import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Download, Mail, Phone, Users, Target, BarChart3, Handshake } from "lucide-react";
import profileImage from "@/assets/madhur-profile.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            5+ years driving tech-enabled solutions across utilities, AI platforms, and enterprise systems. 
            From discovery and stakeholder workshops to agile delivery and testing.
          </p>

          {/* Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Services I Provide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Stakeholder Engagement",
                  icon: Users,
                  description: "Facilitate workshops and build consensus across diverse teams"
                },
                {
                  title: "Business Process Mapping",
                  icon: Target,
                  description: "Analyze and optimize workflows for maximum efficiency"
                },
                {
                  title: "Data-Driven Insights",
                  icon: BarChart3,
                  description: "Transform data into actionable business intelligence"
                },
                {
                  title: "Cross-Functional Collaboration",
                  icon: Handshake,
                  description: "Bridge gaps between technical and business teams"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="h-auto p-6 flex flex-col items-center text-center bg-card rounded-lg shadow-card"
                >
                  <service.icon size={32} className="text-primary mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Availability */}
          <p className="text-lg text-muted-foreground mb-8">
            📍 Based in Australia • Available for contract, permanent, and consulting opportunities
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleDownloadCV}
              className="min-w-[180px]"
            >
              <Download size={20} />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              onClick={() => scrollToSection('projects')}
              className="min-w-[180px]"
            >
              See My Work
              <ArrowRight size={20} />
            </Button>
            <a href="mailto:mulchandanimadhur2@gmail.com">
              <Button 
                variant="default" 
                size="xl"
                className="min-w-[180px]"
              >
                <Mail size={20} />
                Email Me
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="xl" 
              onClick={handlePhoneClick}
              className="min-w-[180px]"
            >
              <Phone size={20} />
              Call Me
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-muted-foreground mb-6 text-lg">Ready to discuss your next project?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;