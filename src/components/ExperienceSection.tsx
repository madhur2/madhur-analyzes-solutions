import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import caseStudiesData from "@/data/caseStudies.json";

const ExperienceSection = () => {
  const navigate = useNavigate();
  
  const iconMap = {
    "scada-iot-uplift": Zap,
    "ai-supply-chain-optimization": Target,
    "real-estate-ai-chatbot": Users,
    "digital-startup-scaling": TrendingUp
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience & Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world impact across diverse industries and technology stacks
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudiesData.map((project, index) => {
              const IconComponent = iconMap[project.slug as keyof typeof iconMap] || Target;
              
              return (
                <Card 
                  key={index} 
                  className="h-full flex flex-col shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group"
                  onClick={() => navigate(`/projects/${project.slug}`)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <IconComponent size={24} />
                      </div>
                      <Badge variant="secondary">{project.company}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <Button variant="link" className="p-0 h-auto group-hover:text-primary transition-colors self-start">
                      Read Full Case Study <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigate('/projects')} 
              className="min-w-[200px]"
            >
              View All Case Studies
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;