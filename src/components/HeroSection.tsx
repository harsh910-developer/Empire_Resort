import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface HeroSectionProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  backgroundImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
  title = "Welcome to Empire Resort",
  subtitle = "Where Luxury Meets Comfort",
  ctaText = "Book Your Stay",
  onCtaClick = () => console.log("Book Your Stay clicked"),
}: HeroSectionProps) => {
  return (
    <div className="relative h-[100vh] w-full bg-background overflow-hidden">
      {/* Parallax Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ y: 0 }}
        animate={{ y: -50 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Main Title */}
          <h1 className="font-lora mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="font-montserrat mb-8 text-xl text-white/90 md:text-2xl">
            {subtitle}
          </p>

          {/* Enhanced CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 px-12 py-6 text-lg font-semibold text-white shadow-2xl hover:shadow-amber-500/25 hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 transition-all duration-300 border-0 rounded-full relative overflow-hidden"
            >
              <span className="relative z-10">{ctaText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default HeroSection;
