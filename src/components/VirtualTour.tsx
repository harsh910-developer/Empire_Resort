import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Maximize, Volume2, VolumeX, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface VirtualTourProps {
  tourUrl?: string;
  previewImage?: string;
}

const VirtualTour: React.FC<VirtualTourProps> = ({
  tourUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL
  previewImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const tourSpots = [
    {
      id: 1,
      name: "Grand Entrance",
      description: "Experience the majestic entrance and lobby area",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80",
      duration: "2 min",
    },
    {
      id: 2,
      name: "Royal Suite",
      description: "Step inside our most luxurious accommodation",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
      duration: "3 min",
    },
    {
      id: 3,
      name: "Grand Ballroom",
      description: "Explore our stunning event and wedding venue",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&q=80",
      duration: "2.5 min",
    },
    {
      id: 4,
      name: "Garden Terrace",
      description: "Walk through our beautiful outdoor spaces",
      image:
        "https://images.unsplash.com/photo-1544124499-58912cbddaad?w=400&q=80",
      duration: "4 min",
    },
    {
      id: 5,
      name: "Spa & Wellness",
      description: "Discover our tranquil wellness facilities",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80",
      duration: "3 min",
    },
    {
      id: 6,
      name: "Dining Areas",
      description: "Tour our exquisite restaurants and bars",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
      duration: "2 min",
    },
  ];

  const handlePlayTour = () => {
    setIsPlaying(true);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
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
            Virtual Resort Tour
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Take a 360-degree journey through Empire Resort from the comfort of
            your home
          </p>
        </motion.div>

        {/* Main Virtual Tour Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="overflow-hidden border-amber-200 shadow-2xl bg-white">
            <div className="relative aspect-video bg-black">
              {!isPlaying ? (
                <div
                  className="relative w-full h-full group cursor-pointer"
                  onClick={handlePlayTour}
                >
                  <img
                    src={previewImage}
                    alt="Virtual Tour Preview"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-2xl"
                    >
                      <Play
                        className="h-12 w-12 text-amber-700 ml-1"
                        fill="currentColor"
                      />
                    </motion.div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-600 text-white border-0">
                      360° Virtual Tour
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-serif mb-2">
                      Explore Empire Resort
                    </h3>
                    <p className="text-white/90">
                      Click to start your virtual journey
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <iframe
                    src={`${tourUrl}?autoplay=1&mute=${isMuted ? 1 : 0}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Empire Resort Virtual Tour"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={handleMute}
                      className="bg-black/50 text-white hover:bg-black/70 border-0"
                    >
                      {isMuted ? (
                        <VolumeX className="h-4 w-4" />
                      ) : (
                        <Volume2 className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={handleFullscreen}
                      className="bg-black/50 text-white hover:bg-black/70 border-0"
                    >
                      <Maximize className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Tour Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-serif text-amber-900 text-center mb-12">
            Tour Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourSpots.map((spot, index) => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={spot.image}
                      alt={spot.name}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-2 right-2 bg-amber-600 text-white border-0 text-xs">
                      {spot.duration}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-serif text-amber-900 mb-2">
                      {spot.name}
                    </h4>
                    <p className="text-sm text-gray-600">{spot.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-2xl font-serif text-amber-900 mb-4">
              Interactive Experience Features
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <RotateCcw className="h-8 w-8 text-amber-700" />
                </div>
                <h4 className="font-semibold text-amber-900 mb-2">
                  360° Views
                </h4>
                <p className="text-sm text-amber-700">
                  Explore every angle of our beautiful spaces
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Play className="h-8 w-8 text-amber-700" />
                </div>
                <h4 className="font-semibold text-amber-900 mb-2">
                  Guided Tours
                </h4>
                <p className="text-sm text-amber-700">
                  Follow our expert guides through the resort
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Maximize className="h-8 w-8 text-amber-700" />
                </div>
                <h4 className="font-semibold text-amber-900 mb-2">
                  Full Screen
                </h4>
                <p className="text-sm text-amber-700">
                  Immerse yourself in the full experience
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800"
                onClick={handlePlayTour}
              >
                Start Virtual Tour
              </Button>
              <Button
                variant="outline"
                className="border-amber-300 text-amber-700 hover:bg-amber-50"
              >
                Schedule Live Tour
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualTour;
