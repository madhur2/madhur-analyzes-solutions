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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Email",
                icon: Mail,
                description: "mulchandanimadhur2@gmail.com",
                subtext: "Replies within 24 hours"
              },
              {
                title: "Location",
                icon: MapPin,
                description: "Australia",
                subtext: "Remote & hybrid welcome"
              },
              {
                title: "Engagement",
                icon: Briefcase,
                description: "Contract • Permanent • Consulting",
                subtext: "Open to new opportunities"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-lg shadow-sm transition-shadow duration-300 text-center cursor-default"
              >
                <div className="p-3 bg-primary/10 rounded-lg mb-6 inline-block">
                  <item.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-1">{item.description}</p>
                <p className="text-sm text-muted-foreground">{item.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
