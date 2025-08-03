import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, BookOpen, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = window.location;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleBackClick = () => {
    // Simple approach - always go back to homepage for now
    // You can enhance this later with URL state if needed
    navigate('/');
  };

  const blogPosts = {
    "requirements-to-results-agile": {
      title: "From Requirements to Results: How BAs Bridge the Gap in Agile Projects",
      excerpt: "Exploring the critical role of business analysts in agile transformations and how to ensure requirements translate into real business value.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["Business Analysis", "Agile", "Digital Transformation"],
      author: "Madhur Mulchandani",
      content: `
        <p>In today's fast-paced digital landscape, the role of a Business Analyst in agile projects has evolved significantly. We're no longer just the gatekeepers of requirements – we're the strategic bridge between business vision and technical reality.</p>

        <h2>The Evolving Role of BAs in Agile</h2>
        <p>Traditional waterfall methodologies positioned Business Analysts as requirement gatherers who would spend months documenting every possible scenario. Agile has fundamentally changed this approach, requiring us to be more collaborative, adaptive, and outcome-focused.</p>

        <p>In my experience leading agile transformations across utilities and AI platforms, I've seen firsthand how the most successful projects leverage BAs as:</p>
        <ul>
          <li><strong>Facilitators of collaboration</strong> – bringing together diverse stakeholders with different perspectives and priorities</li>
          <li><strong>Translators of business value</strong> – ensuring technical teams understand not just what to build, but why it matters</li>
          <li><strong>Guardians of the user experience</strong> – keeping the end-user perspective at the center of all decisions</li>
        </ul>

        <h2>From User Stories to Business Outcomes</h2>
        <p>One of the biggest challenges I've encountered is helping teams move beyond just delivering features to delivering measurable business value. During the SA Water SCADA uplift project, we didn't just focus on implementing new IoT sensors – we defined clear KPIs around system reliability and response times that directly tied to operational efficiency.</p>

        <blockquote>
          "The best user stories don't just describe functionality – they connect features to business outcomes that stakeholders can measure and celebrate."
        </blockquote>

        <h2>Practical Strategies for Agile BAs</h2>
        <p>Here are some key approaches I've found effective:</p>

        <h3>1. Embrace Continuous Discovery</h3>
        <p>Instead of front-loading all requirements gathering, establish regular touchpoints with users throughout the project. This allows for course corrections and ensures you're building what users actually need, not what they thought they needed six months ago.</p>

        <h3>2. Make Data Your Best Friend</h3>
        <p>Whether it's user analytics, system performance metrics, or business KPIs, data should drive your requirement prioritization. In my work on AI demand forecasting platforms, we used actual forecast accuracy data to prioritize which algorithm improvements would deliver the most business value.</p>

        <h3>3. Think in Terms of Experiments</h3>
        <p>Not every requirement needs to be a permanent feature. Frame some deliverables as experiments with clear success criteria. This mindset helps teams stay agile and reduces the emotional attachment to features that might not deliver expected value.</p>

        <h2>The Communication Challenge</h2>
        <p>Perhaps the most critical skill for modern BAs is the ability to communicate effectively across diverse audiences. In a single day, you might need to:</p>
        <ul>
          <li>Explain technical constraints to business stakeholders</li>
          <li>Translate business priorities to development teams</li>
          <li>Present progress updates to executive leadership</li>
          <li>Facilitate user feedback sessions</li>
        </ul>

        <p>Each audience requires a different approach, different level of detail, and different focus on outcomes versus process.</p>

        <h2>Looking Forward: The Future of Business Analysis</h2>
        <p>As AI and automation continue to reshape how we work, Business Analysts who can bridge the gap between human needs and technological capabilities will become even more valuable. The key is to remain focused on the 'why' behind every requirement while staying flexible about the 'how'.</p>

        <p>The projects that deliver real transformation are those where BAs successfully translate business vision into actionable, measurable outcomes that development teams can rally behind.</p>

        <hr>
        <p><em>Have you experienced challenges bridging the gap between requirements and results in your agile projects? I'd love to hear your thoughts and experiences. Feel free to connect with me on LinkedIn or reach out directly.</em></p>
      `
    },
    "stakeholder-engagement-enterprise": {
      title: "The Art of Stakeholder Engagement in Complex Enterprise Projects",
      excerpt: "Practical strategies for managing diverse stakeholder groups and maintaining alignment throughout large-scale technology implementations.",
      date: "2024-01-08",
      readTime: "7 min read",
      tags: ["Stakeholder Management", "Enterprise", "Communication"],
      author: "Madhur Mulchandani",
      content: `
        <p>Managing stakeholders in enterprise projects is like conducting an orchestra – every player has a different instrument, different expertise, and different ideas about how the music should sound. The art lies in bringing them together to create harmony rather than noise.</p>

        <h2>Understanding the Stakeholder Ecosystem</h2>
        <p>In large enterprise projects, you're typically dealing with multiple layers of stakeholders, each with distinct motivations and success criteria:</p>

        <ul>
          <li><strong>Executive Sponsors</strong> – focused on strategic outcomes and ROI</li>
          <li><strong>Department Heads</strong> – concerned about operational impact and resource allocation</li>
          <li><strong>End Users</strong> – worried about day-to-day usability and workflow changes</li>
          <li><strong>IT Teams</strong> – focused on technical feasibility and system integration</li>
          <li><strong>Compliance/Legal</strong> – ensuring regulatory requirements are met</li>
        </ul>

        <p>Each group speaks a different language and measures success differently. The challenge is creating a shared understanding without losing the unique perspective each brings.</p>

        <h2>The RACI is Just the Beginning</h2>
        <p>While RACI matrices are useful for defining roles and responsibilities, true stakeholder engagement goes much deeper. You need to understand:</p>

        <h3>Individual Motivations</h3>
        <p>What does success look like for each stakeholder personally? How does this project impact their day-to-day work, their team's performance, or their career objectives?</p>

        <h3>Hidden Concerns</h3>
        <p>Often, the biggest obstacles aren't technical – they're political or personal. Is someone worried about job security? Are there historical conflicts between departments? Understanding these undercurrents is crucial for maintaining momentum.</p>

        <h3>Communication Preferences</h3>
        <p>Some stakeholders want detailed technical documentation, others prefer high-level dashboards, and some need face-to-face conversations to feel heard. Adapting your communication style to each audience dramatically improves engagement.</p>

        <h2>Practical Engagement Strategies</h2>

        <h3>1. Create Multiple Feedback Loops</h3>
        <p>Don't rely on a single communication channel. I typically establish:</p>
        <ul>
          <li>Formal steering committee meetings for strategic decisions</li>
          <li>Working group sessions for detailed requirement discussions</li>
          <li>One-on-one check-ins with key influencers</li>
          <li>User feedback sessions for hands-on input</li>
          <li>Executive briefings for high-level updates</li>
        </ul>

        <h3>2. Make Conflicts Visible and Productive</h3>
        <p>When stakeholders have competing priorities, don't try to hide the tension. Instead, facilitate structured discussions where trade-offs can be evaluated transparently. During the AI platform implementation at Complexica, we regularly had sessions where business stakeholders had to choose between faster delivery and additional features. Making these trade-offs explicit helped everyone understand the implications of their decisions.</p>

        <h3>3. Use Data to Drive Consensus</h3>
        <p>Opinions vary, but data speaks truth. Whenever possible, ground discussions in objective metrics. Whether it's user research findings, performance benchmarks, or cost-benefit analyses, data helps move conversations from subjective preferences to objective evaluation.</p>

        <blockquote>
          "The most successful enterprise projects are those where stakeholders feel heard, understood, and aligned on what success looks like."
        </blockquote>

        <h2>Managing Scope Creep Through Stakeholder Alignment</h2>
        <p>Scope creep often isn't a technical problem – it's a stakeholder alignment problem. When stakeholders have different understandings of project goals, they'll naturally push for additions that align with their individual vision.</p>

        <p>The solution isn't rigid change control processes (though those help), but creating genuine consensus around priorities. I've found that involving stakeholders in the prioritization process, rather than just presenting them with predetermined plans, dramatically reduces scope creep.</p>

        <h2>The Cultural Dimension</h2>
        <p>Enterprise projects often span multiple departments, regions, or even companies, each with distinct cultures and ways of working. What feels like resistance might actually be a cultural mismatch.</p>

        <p>For example, during the water infrastructure project, operations teams valued stability and proven solutions, while IT teams were excited about innovative technologies. Neither perspective was wrong, but they needed to understand and respect each other's priorities to move forward effectively.</p>

        <h2>Warning Signs to Watch For</h2>
        <p>Pay attention to these indicators that stakeholder engagement might be breaking down:</p>
        <ul>
          <li>Key stakeholders stop attending meetings regularly</li>
          <li>Decisions get revisited repeatedly</li>
          <li>Side conversations increase while formal discussions become surface-level</li>
          <li>Feedback becomes consistently negative or unreasonably positive</li>
          <li>New requirements surface without clear business justification</li>
        </ul>

        <h2>Building Long-term Relationships</h2>
        <p>Remember that today's project stakeholders are often tomorrow's sponsors or collaborators. Investing in relationship building pays dividends beyond the current project scope.</p>

        <p>Some of my most successful projects have come from stakeholders who trusted my approach based on previous positive experiences, even when the new project was in a completely different domain.</p>

        <hr>
        <p><em>What stakeholder engagement challenges have you faced in your projects? I'm always interested in learning about different approaches and would love to connect with fellow practitioners navigating similar challenges.</em></p>
      `
    },
    "ai-product-design-ba-perspective": {
      title: "AI Product Design: A Business Analyst's Perspective",
      excerpt: "How traditional BA skills apply to AI product development, with insights from building demand forecasting and conversational AI platforms.",
      date: "2024-01-02",
      readTime: "6 min read",
      tags: ["AI/ML", "Product Design", "Innovation"],
      author: "Madhur Mulchandani",
      content: `
        <p>When I first started working on AI products at Complexica, I wondered whether my traditional business analysis skills would translate to this new domain. After helping deliver multiple AI platforms – from demand forecasting systems to conversational chatbots – I've discovered that while the technology is different, the fundamental BA principles remain remarkably relevant.</p>

        <h2>The Human Element in AI Products</h2>
        <p>The biggest misconception about AI products is that they're purely technical challenges. In reality, the most critical decisions are deeply human: What problems are we trying to solve? How will users interact with AI-generated insights? When should the system ask for human intervention?</p>

        <p>Traditional business analysis skills – stakeholder engagement, requirement elicitation, process mapping – become even more important when designing AI products because the technology itself introduces new complexities that non-technical stakeholders may not fully understand.</p>

        <h2>Redefining Requirements for AI Products</h2>
        <p>Functional requirements for AI products look different from traditional software requirements. Instead of "the system shall allow users to generate reports," you're dealing with:</p>

        <ul>
          <li><strong>Accuracy thresholds</strong> – "The demand forecast shall achieve 85% accuracy for Class A items"</li>
          <li><strong>Confidence intervals</strong> – "The system shall provide confidence scores for all predictions"</li>
          <li><strong>Fallback behaviors</strong> – "When confidence drops below 70%, the system shall flag for human review"</li>
          <li><strong>Bias constraints</strong> – "Recommendations shall not discriminate based on specified protected attributes"</li>
        </ul>

        <p>These requirements require a deeper understanding of both the business context and the AI capabilities than traditional software projects.</p>

        <h2>The Data Requirements Challenge</h2>
        <p>In traditional projects, you gather requirements and then build features. In AI projects, the quality and availability of data often determines what's possible. This creates a chicken-and-egg scenario where you need to understand data limitations before you can set realistic expectations with stakeholders.</p>

        <h3>Data Discovery as Requirements Gathering</h3>
        <p>During the demand forecasting project, we spent significant time with data scientists analyzing historical sales data, promotional calendars, and external factors like weather patterns. This wasn't technical work for its own sake – it was requirements discovery that shaped what the AI could realistically deliver.</p>

        <p>Key questions that emerged from this analysis:</p>
        <ul>
          <li>Which product categories had sufficient historical data for accurate forecasting?</li>
          <li>How should the system handle new product launches with no historical data?</li>
          <li>What external data sources were worth integrating given their cost and complexity?</li>
        </ul>

        <blockquote>
          "In AI product design, understanding your data constraints is as important as understanding your user needs."
        </blockquote>

        <h2>User Experience in the Age of AI</h2>
        <p>AI introduces unique UX challenges that require careful business analysis:</p>

        <h3>Explainability vs. Simplicity</h3>
        <p>Users want to understand why the AI made specific recommendations, but they also want simple, actionable insights. Finding the right balance requires deep understanding of user workflows and decision-making processes.</p>

        <p>For the retail demand forecasting platform, we discovered that store managers needed different levels of explanation than category buyers. Store managers wanted simple "order more/less" recommendations, while buyers needed detailed breakdowns of contributing factors.</p>

        <h3>Trust and Verification</h3>
        <p>AI systems make mistakes, and users need mechanisms to identify and correct these errors. This isn't just a technical challenge – it's a process design challenge that requires understanding how users will integrate AI insights into their existing workflows.</p>

        <h2>The Conversational AI Challenge</h2>
        <p>Building the real estate chatbot at Propic presented unique requirements challenges. How do you define requirements for a conversation?</p>

        <h3>Intent Mapping as Process Analysis</h3>
        <p>We approached conversation design like process mapping, identifying:</p>
        <ul>
          <li>Common user intents and the information needed to resolve them</li>
          <li>Escalation paths when the AI couldn't provide adequate assistance</li>
          <li>Handoff protocols between the chatbot and human agents</li>
          <li>Context maintenance across multi-turn conversations</li>
        </ul>

        <h3>Training Data as Business Rules</h3>
        <p>The examples used to train conversational AI become de facto business rules. Every training conversation teaches the AI how to respond in similar situations. This makes the selection and curation of training data a critical business decision, not just a technical one.</p>

        <h2>Measuring Success in AI Products</h2>
        <p>Traditional software success metrics (uptime, performance, user adoption) remain important, but AI products require additional measures:</p>

        <h3>Business Impact Metrics</h3>
        <ul>
          <li>Forecast accuracy improvements and their business value</li>
          <li>Decision-making speed and quality enhancements</li>
          <li>Operational efficiency gains from automation</li>
        </ul>

        <h3>AI-Specific Metrics</h3>
        <ul>
          <li>Model drift detection and retraining frequency</li>
          <li>Confidence score distributions and calibration</li>
          <li>Human-AI interaction patterns and satisfaction</li>
        </ul>

        <h2>Stakeholder Education and Change Management</h2>
        <p>Perhaps the most important BA skill for AI projects is the ability to educate stakeholders about AI capabilities and limitations. Many stakeholders have unrealistic expectations shaped by science fiction or marketing hype.</p>

        <p>Successful AI product launches require extensive change management, helping users understand not just how to use the new system, but how to interpret and act on AI-generated insights.</p>

        <h2>The Future of BA in AI</h2>
        <p>As AI becomes more prevalent in enterprise software, Business Analysts who can bridge the gap between AI capabilities and business needs will become increasingly valuable. The key is maintaining focus on human outcomes while building fluency in AI concepts and constraints.</p>

        <p>The most successful AI products I've worked on succeeded not because they showcased impressive technology, but because they solved real business problems in ways that users could understand and trust.</p>

        <hr>
        <p><em>Are you working on AI products or considering how AI might transform your domain? I'd be interested in hearing about your experiences and challenges. The intersection of business analysis and AI is still evolving, and there's much we can learn from each other.</em></p>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft size={16} />
            Back to Blog
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

          {/* Article Header */}
          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString('en-AU', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                '--tw-prose-body': 'hsl(var(--muted-foreground))',
                '--tw-prose-headings': 'hsl(var(--foreground))',
                '--tw-prose-quotes': 'hsl(var(--muted-foreground))',
                '--tw-prose-quote-borders': 'hsl(var(--primary))',
                '--tw-prose-bold': 'hsl(var(--foreground))',
                '--tw-prose-links': 'hsl(var(--primary))',
                lineHeight: '1.8'
              } as React.CSSProperties}
            />
          </article>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16 text-center bg-gradient-subtle p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Enjoyed this insight?</h3>
            <p className="text-muted-foreground mb-6">Check out more insights and analysis on business transformation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                onClick={() => navigate('/blog')}
              >
                Read More Insights
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;