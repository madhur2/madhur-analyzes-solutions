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
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-[1.1]">
            Madhur Mulchandani
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
            Business Analyst & Digital Transformation Expert
          </h2>
          
          {/* One-liner */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            5+ years driving tech-enabled solutions across utilities, AI platforms, and enterprise systems. 
            From discovery and stakeholder workshops to agile delivery and testing.
          </p>

          {/* Personal Quote */}
          <div className="mb-12 p-6 bg-card/30 rounded-lg border border-primary/5 max-w-2xl mx-auto">
            <p className="text-lg text-foreground">
              I focus on understanding the real business problem before jumping to solutions. 
              Whether it's streamlining processes or implementing new technology, the best outcomes come from getting the fundamentals right.
            </p>
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