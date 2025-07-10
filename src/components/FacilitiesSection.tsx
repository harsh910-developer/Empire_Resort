import React from "react";
import { motion } from "framer-motion";
import {
  Waves,
  Dumbbell,
  Wifi,
  Car,
  Utensils,
  Gamepad2,
  Baby,
  Shield,
  Sparkles,
  TreePine,
  Users,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const FacilitiesSection: React.FC = () => {
  const mainFacilities = [
    {
      icon: Waves,
      title: "Luxury Spa & Wellness",
      description:
        "Rejuvenate your mind and body with our world-class spa treatments and wellness programs.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
      features: [
        "Ayurvedic Treatments",
        "Massage Therapy",
        "Yoga Studio",
        "Meditation Garden",
      ],
    },
    {
      icon: Waves,
      title: "Swimming Pool Complex",
      description:
        "Multiple pools including infinity pool, kids' pool, and indoor heated pool for year-round enjoyment.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
      features: ["Infinity Pool", "Kids' Pool", "Pool Bar", "Cabanas"],
    },
    {
      icon: Dumbbell,
      title: "Fitness & Recreation",
      description:
        "State-of-the-art fitness center and recreational activities for all ages and fitness levels.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      features: [
        "Modern Gym",
        "Tennis Court",
        "Jogging Track",
        "Sports Equipment",
      ],
    },
  ];

  const amenities = [
    {
      icon: Wifi,
      title: "High-Speed Wi-Fi",
      description: "Complimentary internet throughout the resort",
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "24/7 secure parking with valet service",
    },
    {
      icon: Utensils,
      title: "Room Service",
      description: "Round-the-clock in-room dining service",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Professional security team and surveillance",
    },
    {
      icon: Gamepad2,
      title: "Game Room",
      description: "Entertainment center with games and activities",
    },
    {
      icon: Baby,
      title: "Kids' Club",
      description: "Supervised activities and play area for children",
    },
    {
      icon: Sparkles,
      title: "Concierge Service",
      description: "Personal assistance for all your needs",
    },
    {
      icon: TreePine,
      title: "Garden & Landscaping",
      description: "Beautiful gardens and outdoor spaces",
    },
    {
      icon: Users,
      title: "Business Center",
      description: "Meeting rooms and business facilities",
    },
    {
      icon: Heart,
      title: "Wedding Services",
      description: "Complete wedding planning and coordination",
    },
  ];

  const wellnessPrograms = [
    {
      title: "Royal Ayurvedic Package",
      duration: "3-4 hours",
      price: "₹12,000 - ₹18,000",
      description:
        "Authentic Ayurvedic treatments including Abhyanga massage, Shirodhara, and herbal steam therapy.",
    },
    {
      title: "Sunrise Yoga & Meditation",
      duration: "1.5 hours",
      price: "₹2,000 per session",
      description:
        "Morning sessions at 6:30 AM in our Meditation Garden, led by certified yoga masters.",
    },
    {
      title: "Personal Fitness Training",
      duration: "1 hour",
      price: "₹2,500 per session",
      description:
        "One-on-one training with certified fitness experts in our state-of-the-art gym.",
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
            World-Class Facilities
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover an array of premium amenities and facilities designed to
            enhance your stay and create unforgettable experiences for guests of
            all ages.
          </p>
        </motion.div>

        {/* Main Facilities */}
        <div className="space-y-16 mb-20">
          {mainFacilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div
                    className={`aspect-video lg:aspect-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-12 h-12 rounded-full flex items-center justify-center">
                        <facility.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-serif text-amber-900">
                        {facility.title}
                      </h3>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {facility.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-amber-900 mb-3">
                        Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {facility.features.map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-amber-300 text-amber-700 justify-start"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 w-fit">
                      Learn More
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Amenities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-serif text-amber-900 text-center mb-12">
            Resort Amenities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <amenity.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-amber-900 mb-2">
                      {amenity.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {amenity.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Wellness Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-amber-900 to-amber-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif mb-4">Wellness Programs</h3>
            <p className="text-amber-100 max-w-2xl mx-auto">
              Enhance your well-being with our curated wellness programs
              designed to rejuvenate your body, mind, and spirit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {wellnessPrograms.map((program, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 text-white"
              >
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-2">
                    {program.title}
                  </h4>
                  <div className="flex justify-between items-center mb-3 text-amber-200">
                    <span className="text-sm">{program.duration}</span>
                    <span className="font-semibold">{program.price}</span>
                  </div>
                  <p className="text-amber-100 text-sm">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-white text-amber-900 hover:bg-amber-50 font-semibold px-8">
              Book Wellness Package
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
