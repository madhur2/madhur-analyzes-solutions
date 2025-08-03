import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import blogPostsData from "@/data/blogPosts.json";

const AllBlog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                All Insights
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive collection of business analysis insights and digital transformation perspectives
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Featured Post */}
              {blogPostsData.filter(post => post.featured).map((post, index) => (
                <Card key={index} className="mb-8 shadow-card hover:shadow-hover transition-all duration-300 border-l-4 border-l-primary cursor-pointer group"
                      onClick={() => navigate(`/blog/${post.slug}`)}>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="default">Featured</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
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
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <Button variant="link" className="p-0 h-auto group-hover:text-primary transition-colors">
                      Read Full Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}

              {/* Other Posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPostsData.filter(post => !post.featured).map((post, index) => (
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
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">{tag}</Badge>
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
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="mb-8"
              >
                <ArrowRight size={16} className="mr-2 rotate-180" />
                Back to Homepage
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AllBlog;
