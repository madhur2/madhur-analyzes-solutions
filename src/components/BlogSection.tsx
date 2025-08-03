import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import blogPostsData from "@/data/blogPosts.json";

const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Perspectives on business analysis, digital transformation, and agile delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPostsData.slice(0, 3).map((post, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group flex flex-col"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                <CardHeader className="flex-1">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
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
                  <CardTitle className="text-lg group-hover:text-primary transition-colors mb-3">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="link" className="p-0 h-auto group-hover:text-primary transition-colors">
                    Read More <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigate('/blog')} 
              className="min-w-[200px]"
            >
              View All Insights
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
