import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    comment:
      "Empire Resort exceeded all our expectations! The wedding venue was absolutely stunning, and the staff went above and beyond to make our special day perfect. The attention to detail was remarkable.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
    date: "December 2023",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi, India",
    rating: 5,
    comment:
      "The luxury cottage was incredible! Waking up to the beautiful garden view every morning was magical. The spa services and dining options were world-class. Highly recommend for a romantic getaway.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh",
    date: "November 2023",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "London, UK",
    rating: 5,
    comment:
      "Our corporate retreat at Empire Resort was a huge success. The conference facilities were top-notch, and the team building activities in the beautiful surroundings really brought our team together.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    date: "October 2023",
  },
  {
    id: 4,
    name: "Amit Patel",
    location: "Ahmedabad, India",
    rating: 5,
    comment:
      "The Royal Suite was absolutely magnificent! Every detail was perfect, from the luxurious furnishings to the panoramic views. The butler service made us feel like royalty. Will definitely return!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=amit",
    date: "September 2023",
  },
  {
    id: 5,
    name: "Lisa Chen",
    location: "Singapore",
    rating: 5,
    comment:
      "Empire Resort is a hidden gem! The blend of traditional architecture with modern luxury is breathtaking. The food was exceptional, and the hospitality was warm and genuine. A truly memorable experience.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
    date: "August 2023",
  },
];

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = defaultTestimonials,
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Discover why Empire Resort is the preferred choice for luxury stays
            and memorable events
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="h-full"
                  >
                    <Card className="h-full bg-white border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-4 right-4 text-amber-200">
                        <Quote className="h-8 w-8" />
                      </div>
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex items-center mb-4">
                          <Avatar className="h-12 w-12 mr-4 border-2 border-amber-200">
                            <AvatarImage
                              src={testimonial.avatar}
                              alt={testimonial.name}
                            />
                            <AvatarFallback className="bg-amber-100 text-amber-800">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-semibold text-amber-900">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-amber-600">
                              {testimonial.location}
                            </p>
                            <div className="flex items-center mt-1">
                              {renderStars(testimonial.rating)}
                            </div>
                          </div>
                        </div>
                        <blockquote className="text-gray-700 italic flex-1 mb-4">
                          &quot;{testimonial.comment}&quot;
                        </blockquote>
                        <p className="text-xs text-amber-600 font-medium">
                          {testimonial.date}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 bg-amber-100 border-amber-300 text-amber-800 hover:bg-amber-200" />
            <CarouselNext className="-right-12 bg-amber-100 border-amber-300 text-amber-800 hover:bg-amber-200" />
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-amber-200">
            <h3 className="text-2xl font-serif text-amber-900 mb-4">
              Join Our Happy Guests
            </h3>
            <p className="text-amber-700 mb-6">
              Experience the luxury and hospitality that has earned us over 500
              five-star reviews
            </p>
            <div className="flex justify-center items-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-800">500+</div>
                <div className="text-sm text-amber-600">Happy Guests</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-800">4.9</div>
                <div className="text-sm text-amber-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-800">98%</div>
                <div className="text-sm text-amber-600">Return Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
