import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Target, Zap, Users } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SCADA & IoT System Uplift",
      company: "SA Water",
      description: "Led end-to-end transformation of critical water infrastructure monitoring systems",
      challenge: "Legacy SCADA systems required modernization to improve operational efficiency and real-time monitoring capabilities",
      action: "Facilitated stakeholder workshops, mapped current-state processes, designed future-state architecture, and coordinated agile delivery across multiple teams",
      impact: "Improved system reliability by 40%, reduced response times to critical alerts, and enabled predictive maintenance capabilities",
      technologies: ["SCADA", "IoT", "Process Mapping", "Stakeholder Management"],
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "AI-Based Demand & Sales Optimization",
      company: "Complexica",
      description: "Delivered AI-powered platforms for demand forecasting and sales optimization across retail and manufacturing clients",
      challenge: "Clients needed accurate demand forecasting and sales optimization to reduce waste and increase profitability",
      action: "Conducted discovery sessions, defined business requirements, collaborated with data scientists on algorithm design, and managed UAT processes",
      impact: "Achieved 15-25% improvement in forecast accuracy, $2M+ in cost savings for key clients, and 30% reduction in inventory waste",
      technologies: ["AI/ML", "Demand Forecasting", "Data Analytics", "Agile Delivery"],
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Conversational AI Chatbot",
      company: "Propic",
      description: "Built intelligent chatbot for real estate lead management and customer engagement",
      challenge: "Real estate agents needed automated lead qualification and 24/7 customer support to improve conversion rates",
      action: "Defined conversation flows, created user stories, collaborated with developers on NLP integration, and conducted extensive testing",
      impact: "Increased lead conversion by 35%, reduced response time to under 2 minutes, and improved customer satisfaction scores",
      technologies: ["Conversational AI", "NLP", "Lead Management", "User Experience"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world case studies showcasing end-to-end delivery from requirements to results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="h-full flex flex-col shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {project.icon}
                  </div>
                  <Badge variant="secondary">{project.company}</Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground">{project.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Action</h4>
                    <p className="text-sm text-muted-foreground">{project.action}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Impact</h4>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in learning more about my approach to business analysis and project delivery?
          </p>
          <Button variant="outline" size="lg">
            <ExternalLink size={16} />
            View Full Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;