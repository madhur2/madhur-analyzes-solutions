import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Users, Target, Zap, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleBackClick = () => {
    // Simple approach - always go back to homepage for now
    // You can enhance this later with URL state if needed
    navigate('/');
  };

  const projects = {
    "scada-iot-uplift": {
      title: "SCADA & IoT System Uplift",
      company: "SA Water",
      description: "Led end-to-end transformation of water infrastructure monitoring during operator transition",
      challenge: "This project involved transitioning multiple water treatment sites from a legacy operator to in-house control, with a focus on uplifting SCADA and IoT infrastructure to align with our organisation's standards. The legacy systems were outdated and inconsistent across sites, making it difficult to achieve reliable real-time monitoring and operational efficiency. The transition also required preparing a robust set of SCADA requirements for an upcoming Request for Proposal (RFP) to be issued to our panel of SCADA integrators.",
      action: "As the sole Business Analyst, I led the end-to-end analysis and requirements process from early-stage discovery and stakeholder mapping to the definition of functional/non-functional requirements and final documentation for the RFP pack. Conducted ~5 one-on-one interviews and 5 structured workshops with key groups including engineering, SCADA leads, technical SMEs, the program manager, networking team, solution architect, and operations managers. Created comprehensive stakeholder maps, reviewed legacy SCADA documentation, network diagrams, and operator frameworks. Participated in technical evaluations of key 'model' treatment sites to identify infrastructure gaps between the legacy and future-state SCADA standard. Consolidated feedback into structured functional and non-functional requirements, with traceability to use cases and assessment findings.",
      impact: "Successfully defined and validated requirements for SCADA transition across 15+ treatment facilities. Reduced ambiguity for the integration panel and improved assessment accuracy during RFP stage. Enabled alignment across IT/OT teams on network and hardware uplift needs. Enhanced organisation's visibility into legacy vs target-state architecture. Built stakeholder confidence in the transition process through structured analysis and collaborative engagement.",
      technologies: ["SCADA Systems & Architecture", "IoT Sensors & Monitoring", "Agile Delivery", "Stakeholder Management", "Process Mapping", "Document Analysis", "Water Infrastructure Domain Knowledge"],
      icon: <Zap className="w-6 h-6" />,
      timeline: "6 months",
      teamSize: "Sole Business Analyst with cross-functional stakeholders",
      budget: "RFP preparation phase",
      outcomes: [
        "Successfully defined requirements for 15+ treatment facilities",
        "Reduced ambiguity for integration panel during RFP stage",
        "Enabled IT/OT team alignment on network and hardware needs",
        "Enhanced visibility into legacy vs target-state architecture",
        "Built stakeholder confidence through structured analysis"
      ],
      deliverables: [
        "Project Charter",
        "RFP Requirements Specification", 
        "Functional and Non-Functional Requirements",
        "FABC (Functional Area Breakdown Chart)",
        "Preliminary Project Management Plan (PMP)"
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
      ],
      deliverables: []
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
      ],
      deliverables: []
    }
  };

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Button onClick={handleBackClick}>
            <ArrowLeft size={16} />
            Back
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
            onClick={handleBackClick}
            className="mb-8"
          >
            <ArrowLeft size={16} />
            Back
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

              {project.deliverables && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Key Deliverables</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {project.deliverables.map((deliverable, index) => (
                        <div key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
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