import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const navigate = useNavigate();
  
  const blogPosts = [
    {
      slug: "requirements-to-results-agile",
      title: "From Requirements to Results: How BAs Bridge the Gap in Agile Projects",
      excerpt: "Exploring the critical role of business analysts in agile transformations and how to ensure requirements translate into real business value.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["Business Analysis", "Agile", "Digital Transformation"],
      featured: true
    },
    {
      slug: "stakeholder-engagement-enterprise",
      title: "The Art of Stakeholder Engagement in Complex Enterprise Projects",
      excerpt: "Practical strategies for managing diverse stakeholder groups and maintaining alignment throughout large-scale technology implementations.",
      date: "2024-01-08",
      readTime: "7 min read",
      tags: ["Stakeholder Management", "Enterprise", "Communication"]
    },
    {
      slug: "ai-product-design-ba-perspective",
      title: "AI Product Design: A Business Analyst's Perspective",
      excerpt: "How traditional BA skills apply to AI product development, with insights from building demand forecasting and conversational AI platforms.",
      date: "2024-01-02",
      readTime: "6 min read",
      tags: ["AI/ML", "Product Design", "Innovation"]
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge on business analysis, digital transformation, and agile delivery
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Featured Post */}
          <Card className="mb-8 shadow-card hover:shadow-hover transition-all duration-300 border-l-4 border-l-primary cursor-pointer group"
                onClick={() => navigate(`/blog/${blogPosts[0].slug}`)}>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="default">Featured</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar size={14} className="mr-1" />
                  {new Date(blogPosts[0].date).toLocaleDateString('en-AU', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  <span className="mx-2">•</span>
                  <BookOpen size={14} className="mr-1" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <CardTitle className="text-2xl group-hover:text-primary transition-colors">{blogPosts[0].title}</CardTitle>
              <CardDescription className="text-base">{blogPosts[0].excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
                             <div className="flex flex-wrap gap-2 mb-4">
                 {blogPosts[0].tags.map((tag, index) => (
                   <Badge key={index} variant="secondary">
                     {tag}
                   </Badge>
                 ))}
               </div>
              <Button variant="link" className="p-0 h-auto group-hover:text-primary transition-colors">
                Read More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Other Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group"
                    onClick={() => navigate(`/blog/${post.slug}`)}>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString('en-AU', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                    <span className="mx-2">•</span>
                    <BookOpen size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                                     <div className="flex flex-wrap gap-2 mb-4">
                     {post.tags.map((tag, tagIndex) => (
                       <Badge key={tagIndex} variant="outline" className="text-xs">
                         {tag}
                       </Badge>
                     ))}
                   </div>
                  <Button variant="link" className="p-0 h-auto group-hover:text-primary transition-colors">
                    Read More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to stay updated with my latest insights?
          </p>
          <Button variant="default" size="lg" onClick={() => navigate('/blog')} className="min-w-[200px]">
            <ArrowRight size={16} />
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
