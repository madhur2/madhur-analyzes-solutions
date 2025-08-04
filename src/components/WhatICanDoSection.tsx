import { Users, Target, BarChart3, Handshake } from "lucide-react";

const services = [
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
];

const WhatICanDoSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What I Can Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Core capabilities that drive successful digital transformation and business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                role="presentation"
                className="p-8 bg-card rounded-lg shadow-sm transition-shadow duration-300 text-center cursor-default"
              >
                <div className="p-3 bg-primary/10 rounded-lg mb-6 inline-block">
                  <service.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatICanDoSection;
