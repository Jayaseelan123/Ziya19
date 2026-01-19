import Navigation from "@/components/Navigation";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Automate WhatsApp Customer Support with AI",
      excerpt:
        "Learn how to set up intelligent WhatsApp automation that can handle 80% of customer inquiries automatically while maintaining a personal touch.",
      author: "Sarah Johnson",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Automation",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Building Conversational Flows That Convert",
      excerpt:
        "Discover the psychology behind effective conversational flows and how to design them for maximum lead conversion and customer engagement.",
      author: "Michael Chen",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Strategy",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Voice AI Revolution: The Future of Customer Service",
      excerpt:
        "Explore how voice AI is transforming customer service with natural conversations, emotion detection, and intelligent routing capabilities.",
      author: "Emily Rodriguez",
      date: "January 10, 2025",
      readTime: "10 min read",
      category: "AI Technology",
      image:
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=400&fit=crop",
    },
    {
      id: 4,
      title: "5 WhatsApp Business API Features You're Not Using",
      excerpt:
        "Unlock hidden potential in WhatsApp Business API with these advanced features that most businesses overlook but can dramatically improve results.",
      author: "David Park",
      date: "January 8, 2025",
      readTime: "7 min read",
      category: "WhatsApp",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    },
    {
      id: 5,
      title: "ROI Tracking for AI-Powered Automations",
      excerpt:
        "Learn how to measure and optimize the return on investment for your AI automation initiatives with practical metrics and tools.",
      author: "Lisa Thompson",
      date: "January 5, 2025",
      readTime: "9 min read",
      category: "Analytics",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Integration Guide: Connecting Ziya with Your crms",
      excerpt:
        "Step-by-step guide to integrate Ziya's AI suite with popular crms systems for seamless lead management and customer data synchronization.",
      author: "James Wilson",
      date: "January 3, 2025",
      readTime: "12 min read",
      category: "Integration",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    },
  ];

  const categories = [
    "All",
    "Automation",
    "Strategy",
    "AI Technology",
    "WhatsApp",
    "Analytics",
    "Integration",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                <span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Unlock growth secrets with expert tips on AI automation,
                WhatsApp business strategies, and voice technology. Stay updated
                with the latest trends and best practices.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 rounded-full border-border/50"
                />
              </div>
            </div>

            {/* Category Filter */}
            {/* <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    index === 0 
                      ? 'bg-primary text-white' 
                      : 'bg-white text-muted-foreground border border-border/50 hover:bg-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div> */}
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-elegant overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mr-4">
                      {blogPosts[0].category}
                    </span>
                    <Calendar className="h-4 w-4 mr-2" />
                    {blogPosts[0].date}
                    <span className="mx-2">•</span>
                    {blogPosts[0].readTime}
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {blogPosts[0].title}
                  </h2>

                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground font-semibold">
                        {blogPosts[0].author}
                      </span>
                    </div>

                    <Button variant="hero" className="group">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-elegant overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border/50"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                      <span className="mx-2">•</span>
                      {post.readTime}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm text-foreground font-medium">
                          {post.author}
                        </span>
                      </div>

                      <Button variant="outline" size="sm" className="group">
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Stay Updated with Ziya Insights
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest AI automation strategies and industry insights
              delivered to your inbox weekly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1"
                type="email"
              />
              <Button variant="hero">Subscribe</Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
