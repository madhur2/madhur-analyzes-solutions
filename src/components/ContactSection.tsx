import { Mail, MapPin, Briefcase } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Open to contract, permanent, and consulting roles across Australia
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 bg-card rounded-lg shadow-card hover:shadow-hover transition-shadow">
              <div className="p-3 bg-primary/10 rounded-lg mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Email</h4>
              <p className="text-muted-foreground mb-2">mulchandanimadhur2@gmail.com</p>
              <p className="text-sm text-muted-foreground">Response within 24 hours</p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-card rounded-lg shadow-card hover:shadow-hover transition-shadow">
              <div className="p-3 bg-primary/10 rounded-lg mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Location</h4>
              <p className="text-muted-foreground mb-2">Australia</p>
              <p className="text-sm text-muted-foreground">Remote & hybrid welcome</p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-card rounded-lg shadow-card hover:shadow-hover transition-shadow">
              <div className="p-3 bg-primary/10 rounded-lg mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Availability</h4>
              <p className="text-muted-foreground mb-2">Open to new opportunities</p>
              <p className="text-sm text-muted-foreground">Contract • Permanent • Consulting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;