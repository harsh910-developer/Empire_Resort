import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Camera } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", count: 24 },
    { id: "rooms", name: "Rooms & Suites", count: 8 },
    { id: "dining", name: "Dining", count: 6 },
    { id: "facilities", name: "Facilities", count: 5 },
    { id: "events", name: "Events", count: 5 },
  ];

  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      category: "rooms",
      title: "Presidential Suite",
      description: "Luxurious presidential suite with panoramic city views",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      category: "facilities",
      title: "Infinity Pool",
      description: "Stunning infinity pool overlooking the gardens",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      category: "dining",
      title: "Royal Darbar Restaurant",
      description: "Elegant dining experience with traditional cuisine",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      category: "rooms",
      title: "Deluxe Room",
      description: "Comfortable and stylish deluxe accommodation",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1519167758481-83f29c853cb9?w=800&q=80",
      category: "events",
      title: "Grand Ballroom",
      description: "Spectacular venue for weddings and celebrations",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
      category: "facilities",
      title: "Luxury Spa",
      description: "Tranquil spa environment for ultimate relaxation",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      category: "dining",
      title: "Terrace Café",
      description: "Casual dining with beautiful outdoor seating",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      category: "facilities",
      title: "Fitness Center",
      description: "State-of-the-art equipment and training facilities",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      category: "events",
      title: "Garden Wedding",
      description: "Beautiful outdoor wedding ceremony setup",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      category: "rooms",
      title: "Executive Suite",
      description: "Spacious suite with modern amenities",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
      category: "dining",
      title: "Sunset Lounge",
      description: "Premium bar with craft cocktails and city views",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
      category: "events",
      title: "Conference Hall",
      description: "Modern conference facilities for business events",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1,
      );
    }
  };

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
            Gallery
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore the beauty and elegance of Empire Resort through our curated
            collection of images showcasing our luxurious accommodations,
            facilities, and experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white"
                  : "border-amber-300 text-amber-700 hover:bg-amber-50"
              } transition-all duration-300`}
            >
              {category.name}
              <Badge
                variant="secondary"
                className="ml-2 bg-white/20 text-current border-0"
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <Camera className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-white/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Virtual Tour CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-amber-900 to-amber-800 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-serif mb-4">Take a Virtual Tour</h3>
            <p className="text-amber-100 leading-relaxed mb-8">
              Experience Empire Resort from the comfort of your home with our
              immersive 360° virtual tour. Explore our rooms, facilities, and
              beautiful grounds in stunning detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-amber-900 hover:bg-amber-50 font-semibold px-8">
                Start Virtual Tour
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[selectedImage].src}
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm text-white p-4 rounded-lg">
                <h4 className="font-semibold mb-1">
                  {filteredItems[selectedImage].title}
                </h4>
                <p className="text-sm text-white/80">
                  {filteredItems[selectedImage].description}
                </p>
                <p className="text-xs text-white/60 mt-2">
                  {selectedImage + 1} of {filteredItems.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
