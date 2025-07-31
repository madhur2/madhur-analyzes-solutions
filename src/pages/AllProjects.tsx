import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Zap, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AllProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      slug: "scada-iot-uplift",
      title: "SCADA & IoT System Uplift",
      company: "SA Water",
      description: "Led end-to-end transformation of critical water infrastructure monitoring systems across 15+ facilities",
      challenge: "Legacy SCADA systems required modernization to improve operational efficiency and real-time monitoring capabilities",
      impact: "Improved system reliability by 40%, reduced response times to critical alerts, and enabled predictive maintenance capabilities",
      technologies: ["SCADA", "IoT", "Process Mapping", "Stakeholder Management"],
      icon: <Zap className="w-6 h-6" />,
      timeline: "18 months",
      budget: "$2.5M AUD"
    },
    {
      slug: "ai-demand-optimization",
      title: "AI-Based Demand & Sales Optimization",
      company: "Complexica",
      description: "Delivered AI-powered platforms for demand forecasting and sales optimization across retail and manufacturing clients",
      challenge: "Clients needed accurate demand forecasting and sales optimization to reduce waste and increase profitability",
      impact: "Achieved 15-25% improvement in forecast accuracy, $2M+ in cost savings for key clients, and 30% reduction in inventory waste",
      technologies: ["AI/ML", "Demand Forecasting", "Data Analytics", "Agile Delivery"],
      icon: <Target className="w-6 h-6" />,
      timeline: "24 months",
      budget: "$3.2M AUD"
    },
    {
      slug: "conversational-ai-chatbot",
      title: "Conversational AI Chatbot",
      company: "Propic",
      description: "Built intelligent chatbot for real estate lead management and customer engagement with 24/7 support",
      challenge: "Real estate agents needed automated lead qualification and 24/7 customer support to improve conversion rates",
      impact: "Increased lead conversion by 35%, reduced response time to under 2 minutes, and improved customer satisfaction scores",
      technologies: ["Conversational AI", "NLP", "Lead Management", "User Experience"],
      icon: <Users className="w-6 h-6" />,
      timeline: "12 months",
      budget: "$800K AUD"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Project Case Studies
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real-world transformations showcasing end-to-end delivery from discovery and requirements gathering to agile implementation and measurable business outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <Card key={index} className="h-full flex flex-col shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group"
                      onClick={() => navigate(`/projects/${project.slug}`)}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {project.icon}
                      </div>
                      <Badge variant="secondary">{project.company}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
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
                        <h4 className="font-semibold text-sm text-foreground mb-2">Impact</h4>
                        <p className="text-sm text-muted-foreground">{project.impact}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Timeline</p>
                          <p className="font-semibold text-sm">{project.timeline}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Budget</p>
                          <p className="font-semibold text-sm">{project.budget}</p>
                        </div>
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

                  <CardFooter>
                    <Button variant="link" className="p-0 h-auto group-hover:text-primary transition-colors">
                      Read Full Case Study <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-card p-8 rounded-lg shadow-card max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ready to discuss your next transformation?</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you're looking at digital transformation, process optimization, or AI implementation, 
                  I'd love to explore how my experience might help drive results for your organisation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="default" 
                    onClick={() => navigate('/#contact')}
                  >
                    Let's Connect
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/')}
                  >
                    Back to Homepage
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AllProjects;