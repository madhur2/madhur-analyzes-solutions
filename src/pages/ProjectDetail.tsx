import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Users, Target, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projects = {
    "scada-iot-uplift": {
      title: "SCADA & IoT System Uplift",
      company: "SA Water",
      description: "Led end-to-end transformation of critical water infrastructure monitoring systems",
      challenge: "Legacy SCADA systems required modernization to improve operational efficiency and real-time monitoring capabilities across multiple water treatment facilities. The existing infrastructure was fragmented, with limited integration between different monitoring systems, making it difficult to get a holistic view of operations.",
      action: "Conducted comprehensive stakeholder analysis and facilitated workshops with operations teams, IT, and management. Mapped current-state processes across 15+ facilities, identified pain points and integration opportunities. Designed future-state architecture with modern IoT sensors and centralized monitoring. Coordinated agile delivery across multiple vendor teams, ensuring seamless integration while maintaining 24/7 operations.",
      impact: "Improved system reliability by 40%, reduced response times to critical alerts from 30 minutes to under 5 minutes, and enabled predictive maintenance capabilities that prevented 3 major equipment failures in the first 6 months. The new system processes over 10,000 data points per minute and provides real-time dashboards for operational teams.",
      technologies: ["SCADA Systems", "IoT Sensors", "Process Mapping", "Stakeholder Management", "Agile Delivery", "Data Integration"],
      icon: <Zap className="w-6 h-6" />,
      timeline: "18 months",
      teamSize: "12 people across 4 teams",
      budget: "$2.5M AUD",
      outcomes: [
        "40% improvement in system reliability",
        "83% reduction in response times to critical alerts",
        "Prevented $500K+ in potential equipment failures",
        "Enabled predictive maintenance across 15+ facilities",
        "Real-time processing of 10,000+ data points per minute"
      ]
    },
    "ai-demand-optimization": {
      title: "AI-Based Demand & Sales Optimization",
      company: "Complexica",
      description: "Delivered AI-powered platforms for demand forecasting and sales optimization across retail and manufacturing clients",
      challenge: "Multiple enterprise clients across retail and manufacturing sectors needed accurate demand forecasting and sales optimization to reduce waste and increase profitability. Existing manual forecasting methods were inaccurate and time-consuming, leading to significant inventory waste and missed revenue opportunities.",
      action: "Conducted discovery sessions with 8+ enterprise clients to understand their unique forecasting challenges. Defined comprehensive business requirements for AI algorithms, collaborated closely with data scientists on model design and validation. Managed end-to-end UAT processes, training client teams on new platforms, and establishing KPIs for ongoing optimization.",
      impact: "Achieved 15-25% improvement in forecast accuracy across all client implementations, delivering $2M+ in combined cost savings for key clients, and reducing inventory waste by 30%. The platform now processes forecasts for over 50,000 SKUs daily and has been deployed across 12 major retailers.",
      technologies: ["AI/ML Algorithms", "Demand Forecasting", "Data Analytics", "Agile Delivery", "UAT Management", "KPI Design"],
      icon: <Target className="w-6 h-6" />,
      timeline: "24 months",
      teamSize: "15 people across data science, engineering, and BA teams",
      budget: "$3.2M AUD",
      outcomes: [
        "15-25% improvement in forecast accuracy",
        "$2M+ in cost savings for clients",
        "30% reduction in inventory waste",
        "50,000+ SKUs processed daily",
        "Deployed across 12 major retailers"
      ]
    },
    "conversational-ai-chatbot": {
      title: "Conversational AI Chatbot",
      company: "Propic",
      description: "Built intelligent chatbot for real estate lead management and customer engagement",
      challenge: "Real estate agents needed automated lead qualification and 24/7 customer support to improve conversion rates. Manual lead qualification was time-consuming and inconsistent, with agents often missing opportunities during after-hours inquiries. Customer response times were affecting satisfaction and conversion rates.",
      action: "Defined comprehensive conversation flows covering property inquiries, appointment booking, and lead qualification criteria. Created detailed user stories for different customer personas, collaborated with developers on NLP integration and intent recognition. Conducted extensive testing across multiple real estate scenarios and trained agents on the new system.",
      impact: "Increased lead conversion by 35%, reduced average response time from 4 hours to under 2 minutes, and improved customer satisfaction scores from 3.2 to 4.6 out of 5. The chatbot now handles over 500 inquiries per month and has qualified 1,200+ leads for the sales team.",
      technologies: ["Conversational AI", "NLP", "Lead Management", "User Experience Design", "Testing & QA", "Training & Change Management"],
      icon: <Users className="w-6 h-6" />,
      timeline: "12 months",
      teamSize: "8 people across AI, development, and BA teams",
      budget: "$800K AUD",
      outcomes: [
        "35% increase in lead conversion rates",
        "96% reduction in response times (4 hours to 2 minutes)",
        "Customer satisfaction improved from 3.2 to 4.6/5",
        "500+ inquiries handled monthly",
        "1,200+ leads qualified for sales team"
      ]
    }
  };

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/projects')}>
            <ArrowLeft size={16} />
            Back to Projects
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <Button 
            variant="outline" 
            onClick={() => navigate('/projects')}
            className="mb-8"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Button>

          {/* Project Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                {project.icon}
              </div>
              <Badge variant="secondary" className="text-sm">{project.company}</Badge>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
            
            {/* Project Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-card p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Timeline</p>
                <p className="font-semibold">{project.timeline}</p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Team Size</p>
                <p className="font-semibold">{project.teamSize}</p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Budget</p>
                <p className="font-semibold">{project.budget}</p>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            {/* Challenge & Action */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">The Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">My Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.action}</p>
                </CardContent>
              </Card>
            </div>

            {/* Impact & Outcomes */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Impact & Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.impact}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Outcomes:</h4>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Technologies & Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16 text-center bg-gradient-subtle p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Interested in similar results for your organisation?</h3>
            <p className="text-muted-foreground mb-6">Let's discuss how I can help drive your next transformation project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                onClick={() => navigate('/#contact')}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/projects')}
              >
                View Other Projects
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;