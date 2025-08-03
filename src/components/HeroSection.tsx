import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail } from "lucide-react";
import profileImage from "@/assets/madhur-profile.jpg";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-subtle flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <Avatar className="w-32 h-32 border-4 border-primary/20">
              <AvatarImage src={profileImage} alt="Madhur Mulchandani" />
              <AvatarFallback className="text-2xl font-bold">MM</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-[1.1]">
            Madhur Mulchandani
            <span className="bg-gradient-hero bg-clip-text text-transparent block">
              Business Analyst & Digital Transformation Expert
            </span>
          </h1>
          
          {/* One-liner */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            5+ years driving tech-enabled solutions across utilities, AI platforms, and enterprise systems. 
            From discovery and stakeholder workshops to agile delivery and testing.
          </p>

          {/* Personal Quote */}
          <div className="mb-12 p-8 bg-card/50 rounded-lg border border-primary/10 max-w-3xl mx-auto">
            <blockquote className="text-lg text-foreground italic">
              "I believe the best technology solutions come from truly understanding the people and processes they're meant to serve. 
              My passion lies in bridging that gap – translating complex business needs into elegant, practical solutions that deliver real value."
            </blockquote>
            <cite className="block mt-4 text-sm text-muted-foreground not-italic">– Madhur Mulchandani</cite>
          </div>

          {/* Single CTA */}
          <div className="flex justify-center">
            <a href="mailto:mulchandanimadhur2@gmail.com">
              <Button 
                variant="hero" 
                size="lg"
                className="min-w-[200px]"
              >
                <Mail size={20} />
                Get in Touch
              </Button>
            </a>
          </div>

          {/* Location */}
          <p className="text-lg text-muted-foreground mt-8">
            📍 Based in Australia
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;