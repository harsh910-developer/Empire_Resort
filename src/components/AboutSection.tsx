import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Calendar, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const AboutSection: React.FC = () => {
  const stats = [
    { icon: Award, number: "25+", label: "Years of Excellence" },
    { icon: Users, number: "75K+", label: "Happy Guests" },
    { icon: Calendar, number: "2500+", label: "Events Hosted" },
    { icon: MapPin, number: "4.9★", label: "Guest Rating" },
  ];

  const features = [
    {
      title: "Heritage & Tradition",
      description:
        "Rooted in the rich cultural heritage of Gwalior, our resort celebrates the royal legacy of Madhya Pradesh.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
    },
    {
      title: "Modern Luxury",
      description:
        "Contemporary amenities and world-class facilities seamlessly blend with traditional architecture.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
    },
    {
      title: "Exceptional Service",
      description:
        "Our dedicated team ensures every guest experiences personalized service and attention to detail.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-6">
            About Empire Resort
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Located on 15 acres of pristine landscape in Gwalior, Madhya
            Pradesh, Empire Resort has been welcoming distinguished guests since
            1998. Our heritage property seamlessly blends Mughal architecture
            with contemporary luxury, offering 85 elegantly appointed rooms and
            suites, world-class dining, and exceptional event spaces.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-amber-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-amber-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-amber-900 to-amber-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif mb-6">Our Story</h3>
              <p className="text-amber-100 leading-relaxed mb-6">
                Founded by the Maharaja Scindia family in 1998, Empire Resort
                was conceived as a tribute to Gwalior's rich cultural heritage.
                Our 15-acre property features traditional Rajasthani and Mughal
                architecture, with hand-carved stone work, intricate frescoes,
                and landscaped gardens that reflect the region's royal legacy.
              </p>
              <p className="text-amber-100 leading-relaxed mb-8">
                Today, Empire Resort stands as Gwalior's premier luxury
                destination, certified by the Ministry of Tourism and recognized
                with the National Tourism Award for Excellence in Hospitality.
                Our commitment to preserving local culture while providing
                world-class amenities has made us the preferred choice for
                discerning travelers.
              </p>
              <Button
                className="bg-white text-amber-900 hover:bg-amber-50 font-semibold px-8 py-3"
                size="lg"
              >
                Discover Our Heritage
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80"
                alt="Empire Resort Heritage"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent rounded-xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
