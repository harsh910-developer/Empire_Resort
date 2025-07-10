import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import DatePickerWithRange from "./ui/date-picker-with-range";

interface EventSpace {
  id: number;
  name: string;
  description: string;
  capacity: string;
  size: string;
  amenities: string[];
  images: string[];
}

const EventSpaces = () => {
  const [activeSpace, setActiveSpace] = useState<EventSpace | null>(null);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const eventSpaces: EventSpace[] = [
    {
      id: 1,
      name: "Grand Ballroom",
      description:
        "Our largest and most luxurious venue, perfect for weddings and grand celebrations with elegant chandeliers and marble flooring.",
      capacity: "Up to 500 guests",
      size: "10,000 sq ft",
      amenities: [
        "Built-in sound system",
        "Customizable lighting",
        "Bridal suite",
        "Catering services",
        "Valet parking",
      ],
      images: [
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      ],
    },
    {
      id: 2,
      name: "Garden Terrace",
      description:
        "An open-air venue surrounded by lush gardens and water features, ideal for daytime events and intimate gatherings.",
      capacity: "Up to 200 guests",
      size: "5,000 sq ft",
      amenities: [
        "Natural lighting",
        "Garden views",
        "Covered sections",
        "Outdoor bar",
        "Weather contingency plans",
      ],
      images: [
        "https://images.unsplash.com/photo-1544124499-58912cbddaad?w=800&q=80",
        "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
      ],
    },
    {
      id: 3,
      name: "Executive Conference Room",
      description:
        "A sophisticated space designed for corporate meetings and business events with state-of-the-art technology.",
      capacity: "Up to 50 guests",
      size: "1,500 sq ft",
      amenities: [
        "Video conferencing",
        "High-speed internet",
        "Interactive displays",
        "Executive catering",
        "Business center access",
      ],
      images: [
        "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
      ],
    },
  ];

  const handleInquiryClick = (space: EventSpace) => {
    setActiveSpace(space);
    setShowInquiryForm(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-semibold text-gray-900 mb-4">
            Elegant Event Spaces
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, our versatile venues
            provide the perfect backdrop for your special occasions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {eventSpaces.map((space) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: space.id * 0.2 }}
            >
              <Card className="h-full overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {space.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="h-64 w-full">
                            <img
                              src={image}
                              alt={`${space.name} - Image ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-medium text-gray-900 mb-2">
                    {space.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{space.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Capacity</p>
                      <p className="font-medium">{space.capacity}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Size</p>
                      <p className="font-medium">{space.size}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Amenities</p>
                    <ul className="list-disc pl-5 text-sm text-gray-700">
                      {space.amenities.slice(0, 3).map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                      ))}
                      {space.amenities.length > 3 && (
                        <li>+{space.amenities.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                  <Button
                    onClick={() => handleInquiryClick(space)}
                    className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                  >
                    Inquire About This Space
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {showInquiryForm && activeSpace && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-md"
          >
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
              Inquire About {activeSpace.name}
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <Input id="name" placeholder="Your name" className="w-full" />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="event-type"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Event Type
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="birthday">
                        Birthday Celebration
                      </SelectItem>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="event-date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Event Date
                  </label>
                  <div className="w-full">
                    <DatePickerWithRange />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Number of Guests
                  </label>
                  <Input
                    id="guests"
                    type="number"
                    placeholder="Estimated number of guests"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="requirements"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Special Requirements
                </label>
                <Textarea
                  id="requirements"
                  placeholder="Please share any specific requirements or questions you have"
                  className="w-full h-32"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setShowInquiryForm(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">
            Custom Event Planning
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Our dedicated event planning team can help you create a customized
            experience tailored to your specific needs and preferences.
          </p>
          <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-lg">
            Contact Our Event Specialists
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default EventSpaces;
