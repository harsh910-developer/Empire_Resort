import React from "react";
import { motion } from "framer-motion";
import { Clock, Star, Utensils, Wine, Coffee, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const DiningSection: React.FC = () => {
  const restaurants = [
    {
      name: "Royal Darbar",
      cuisine: "Indian & Mughlai",
      description:
        "Experience authentic royal cuisine in an elegant setting with traditional Indian and Mughlai delicacies.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
      timing: "7:00 AM - 11:00 PM",
      capacity: "120 guests",
      rating: 4.8,
      specialties: ["Gwalior Special Biryani", "Tandoor Kebabs", "Royal Thali"],
      priceRange: "₹1,200 - ₹2,500 per person",
    },
    {
      name: "The Terrace Café",
      cuisine: "Continental & Asian",
      description:
        "Casual dining with panoramic views, serving international cuisine and refreshing beverages.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
      timing: "6:00 AM - 12:00 AM",
      capacity: "80 guests",
      rating: 4.6,
      specialties: [
        "Wood-fired Pizza",
        "Continental Breakfast",
        "Asian Fusion",
      ],
      priceRange: "₹800 - ₹1,800 per person",
    },
    {
      name: "Sunset Lounge",
      cuisine: "Bar & Grill",
      description:
        "Sophisticated bar and grill with craft cocktails, premium spirits, and grilled specialties.",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80",
      timing: "5:00 PM - 2:00 AM",
      capacity: "60 guests",
      rating: 4.7,
      specialties: ["Signature Cocktails", "Premium Spirits", "Live Music"],
      priceRange: "₹600 - ₹1,500 per person",
    },
  ];

  const diningFeatures = [
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Exquisite culinary experiences with world-class chefs",
    },
    {
      icon: Wine,
      title: "Premium Bar",
      description: "Curated selection of wines, spirits, and craft cocktails",
    },
    {
      icon: Coffee,
      title: "24/7 Service",
      description: "Round-the-clock room service and café options",
    },
    {
      icon: Users,
      title: "Private Dining",
      description: "Exclusive dining spaces for special occasions",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-6">
            Culinary Excellence
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Indulge in a gastronomic journey that celebrates both local flavors
            and international cuisine, crafted by our award-winning chefs in
            stunning dining environments.
          </p>
        </motion.div>

        {/* Dining Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {diningFeatures.map((feature, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-amber-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Restaurants */}
        <div className="space-y-12">
          {restaurants.map((restaurant, index) => (
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
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-serif text-amber-900">
                        {restaurant.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-amber-500 fill-current" />
                        <span className="text-sm font-medium text-gray-600">
                          {restaurant.rating}
                        </span>
                      </div>
                    </div>

                    <Badge
                      variant="secondary"
                      className="w-fit mb-4 bg-amber-100 text-amber-800"
                    >
                      {restaurant.cuisine}
                    </Badge>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {restaurant.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-amber-600" />
                        <span className="text-gray-600">
                          {restaurant.timing}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-amber-600" />
                        <span className="text-gray-600">
                          {restaurant.capacity}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-amber-900 mb-2">
                        Specialties:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {restaurant.specialties.map((specialty, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-amber-300 text-amber-700"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800">
                        Make Reservation
                      </Button>
                      <Button
                        variant="outline"
                        className="border-amber-300 text-amber-700 hover:bg-amber-50"
                      >
                        View Menu
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Special Dining Experiences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-amber-900 to-amber-800 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-serif mb-6">
            Special Dining Experiences
          </h3>
          <p className="text-amber-100 leading-relaxed mb-8 max-w-2xl mx-auto">
            Elevate your dining experience with our exclusive offerings
            including chef's table experiences, wine pairing dinners, and
            romantic candlelit meals under the stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-amber-900 hover:bg-amber-50 font-semibold px-8">
              Book Chef's Table
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              View All Experiences
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiningSection;
