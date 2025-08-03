import { Button } from "./ui/button";

import React from "react";
import { Mail, MapPin, Phone, Linkedin, Briefcase, Download } from "lucide-react";

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to contract roles, permanent positions, and consulting opportunities across Australia
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-shadow">
                  <div className="p-3 bg-primary/10 rounded-lg mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-muted-foreground mb-2">mulchandanimadhur2@gmail.com</p>
                  <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-shadow">
                  <div className="p-3 bg-primary/10 rounded-lg mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground mb-2">Australia</p>
                  <p className="text-sm text-muted-foreground">Remote or hybrid arrangements welcome</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-card hover:shadow-hover transition-shadow">
                  <div className="p-3 bg-primary/10 rounded-lg mb-4">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Availability</h4>
                  <p className="text-muted-foreground mb-2">Open to new opportunities</p>
                  <p className="text-sm text-muted-foreground">Contract • Permanent • Consulting</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-subtle rounded-lg border text-center">
              <h4 className="text-2xl font-bold text-foreground mb-4">Areas of Expertise</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Digital Transformation & Business Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">SCADA/IoT Systems & Infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">AI/ML Product Design & Implementation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Agile Delivery & Stakeholder Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Process Mapping & Requirements Engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Data Analytics & Business Intelligence</span>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help drive your digital transformation and deliver measurable business outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={() => window.open('mailto:mulchandanimadhur2@gmail.com', '_blank')}
                  className="min-w-[200px]"
                >
                  <Mail size={20} />
                  Start a Conversation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/cv.pdf';
                    link.download = 'Madhur_Mulchandani_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="min-w-[200px]"
                >
                  <Download size={20} />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;