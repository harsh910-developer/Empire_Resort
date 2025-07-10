import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

interface BlogSectionProps {
  posts?: BlogPost[];
}

const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential Tips for Planning Your Dream Wedding at Empire Resort",
    excerpt:
      "From choosing the perfect venue to coordinating with our expert wedding planners, discover how to create an unforgettable celebration that reflects your unique love story.",
    author: "Meera Gupta",
    date: "December 15, 2023",
    readTime: "8 min read",
    category: "Wedding Planning",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    slug: "dream-wedding-planning-tips",
  },
  {
    id: 2,
    title: "Exploring Gwalior: A Cultural Journey Through History and Heritage",
    excerpt:
      "Discover the rich cultural tapestry of Gwalior while staying at Empire Resort. From ancient forts to vibrant markets, explore the best attractions near our luxury property.",
    author: "Arjun Singh",
    date: "December 10, 2023",
    readTime: "6 min read",
    category: "Travel Guide",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    slug: "gwalior-cultural-journey",
  },
  {
    id: 3,
    title:
      "Culinary Excellence: A Behind-the-Scenes Look at Our Award-Winning Kitchen",
    excerpt:
      "Meet our executive chef and discover the passion, creativity, and local ingredients that make dining at Empire Resort an extraordinary culinary adventure.",
    author: "Chef Vikram Mehta",
    date: "December 5, 2023",
    readTime: "5 min read",
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    slug: "culinary-excellence-behind-scenes",
  },
  {
    id: 4,
    title:
      "Corporate Retreats That Inspire: Creating Productive Team Experiences",
    excerpt:
      "Learn how Empire Resort's unique blend of luxury amenities and professional facilities creates the perfect environment for successful corporate events and team building.",
    author: "Priya Sharma",
    date: "November 28, 2023",
    readTime: "7 min read",
    category: "Corporate Events",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    slug: "corporate-retreats-team-experiences",
  },
  {
    id: 5,
    title:
      "Wellness and Relaxation: Your Guide to Our Spa and Wellness Facilities",
    excerpt:
      "Discover tranquility and rejuvenation at our world-class spa. From traditional Ayurvedic treatments to modern wellness therapies, find your path to complete relaxation.",
    author: "Dr. Anjali Rao",
    date: "November 20, 2023",
    readTime: "4 min read",
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    slug: "wellness-spa-guide",
  },
  {
    id: 6,
    title:
      "Seasonal Celebrations: Making the Most of Festivals at Empire Resort",
    excerpt:
      "Experience the magic of Indian festivals in luxury. From Diwali decorations to Holi celebrations, discover how we bring traditional festivities to life at our resort.",
    author: "Rohit Agarwal",
    date: "November 15, 2023",
    readTime: "6 min read",
    category: "Celebrations",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    slug: "seasonal-festival-celebrations",
  },
];

const BlogSection: React.FC<BlogSectionProps> = ({ posts = defaultPosts }) => {
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1, 6);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">
            Stories & Insights
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Discover expert tips, travel guides, and behind-the-scenes stories
            from Empire Resort
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="overflow-hidden border-amber-200 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative overflow-hidden group">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-4 left-4 bg-amber-600 text-white border-0">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge
                  variant="outline"
                  className="w-fit mb-4 border-amber-300 text-amber-700"
                >
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-serif text-amber-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6 text-sm text-amber-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800 transition-all duration-300 group">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-amber-800 border-0 text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <h4 className="text-lg font-serif text-amber-900 mb-3 leading-tight line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-amber-600 mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-amber-600">{post.date}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-amber-700 hover:text-amber-800 hover:bg-amber-50 p-0"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-2xl font-serif text-amber-900 mb-4">
              Stay Updated with Our Latest Stories
            </h3>
            <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive insights, travel tips,
              and special offers from Empire Resort
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800 px-8 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
