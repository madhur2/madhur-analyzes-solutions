import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Mail, MapPin, Phone, Linkedin, Briefcase, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    projectType: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. I'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      projectType: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <p className="text-muted-foreground">madhur.mulchandani@email.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Location</h4>
                    <p className="text-muted-foreground">Australia</p>
                    <p className="text-sm text-muted-foreground mt-1">Remote or hybrid arrangements welcome</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Availability</h4>
                    <p className="text-muted-foreground">Open to new opportunities</p>
                    <p className="text-sm text-muted-foreground mt-1">Contract • Permanent • Consulting</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-subtle rounded-lg border">
              <h4 className="font-semibold text-foreground mb-3">Areas of Expertise</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Digital Transformation & Business Analysis</li>
                <li>• SCADA/IoT Systems & Infrastructure</li>
                <li>• AI/ML Product Design & Implementation</li>
                <li>• Agile Delivery & Stakeholder Management</li>
                <li>• Process Mapping & Requirements Engineering</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Start a Conversation</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="role">Your Role</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleChange("role", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="contract">Contract Role</SelectItem>
                      <SelectItem value="permanent">Permanent Position</SelectItem>
                      <SelectItem value="consulting">Consulting Project</SelectItem>
                      <SelectItem value="discussion">General Discussion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell me about your project, role, or how I can help..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;