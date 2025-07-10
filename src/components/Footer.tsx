import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Clock,
  Award,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Footer: React.FC = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Rooms & Suites", href: "/rooms" },
    { name: "Event Spaces", href: "/events" },
    { name: "Dining", href: "/dining" },
    { name: "Spa & Wellness", href: "/spa" },
    { name: "Gallery", href: "/gallery" },
  ];

  const services = [
    { name: "Wedding Planning", href: "/services/weddings" },
    { name: "Corporate Events", href: "/services/corporate" },
    { name: "Catering Services", href: "/services/catering" },
    { name: "Transportation", href: "/services/transport" },
    { name: "Concierge", href: "/services/concierge" },
    { name: "Room Service", href: "/services/room-service" },
  ];

  const policies = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Cancellation Policy", href: "/cancellation" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  const amenities = [
    { icon: Wifi, name: "Free Wi-Fi" },
    { icon: Car, name: "Valet Parking" },
    { icon: Utensils, name: "Fine Dining" },
    { icon: Dumbbell, name: "Fitness Center" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/empireresort",
      name: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/empireresort",
      name: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/empireresort",
      name: "YouTube",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/empireresort",
      name: "Twitter",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-amber-800">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-serif mb-4">
              Stay Connected with Empire Resort
            </h3>
            <p className="text-amber-200 mb-8 text-lg">
              Subscribe to our newsletter for exclusive offers, event updates,
              and luxury travel insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-amber-700 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm"
              />
              <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 px-8 py-4 text-white border-0">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h2 className="text-3xl font-serif text-amber-200 mb-4">
                Empire Resort
              </h2>
              <p className="text-amber-300 leading-relaxed mb-6">
                Where luxury meets tradition. Experience unparalleled
                hospitality in the heart of Gwalior, where every moment becomes
                a cherished memory.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-amber-200 font-medium">
                    Empire Resort Gwalior
                  </p>
                  <p className="text-amber-300 text-sm">
                    Maharaj Bada, Near Gwalior Fort, Gwalior, MP 474008, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-amber-200">+91 751 400 5000</p>
                  <p className="text-amber-300 text-sm">
                    24/7 Reservations & Concierge
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-amber-200">
                    reservations@empireresortgwalior.com
                  </p>
                  <p className="text-amber-300 text-sm">Bookings & Inquiries</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-amber-200">Check-in: 3:00 PM</p>
                  <p className="text-amber-300 text-sm">Check-out: 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h4 className="text-amber-200 font-semibold mb-4">
                Key Amenities
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <amenity.icon className="h-4 w-4 text-amber-400" />
                    <span className="text-amber-300 text-sm">
                      {amenity.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-serif text-amber-200 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-amber-300 hover:text-amber-100 transition-colors duration-200 text-sm hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-serif text-amber-200 mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-amber-300 hover:text-amber-100 transition-colors duration-200 text-sm hover:underline"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Policies & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-serif text-amber-200 mb-6">Policies</h4>
            <ul className="space-y-3 mb-8">
              {policies.map((policy, index) => (
                <li key={index}>
                  <a
                    href={policy.href}
                    className="text-amber-300 hover:text-amber-100 transition-colors duration-200 text-sm hover:underline"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-serif text-amber-200 mb-6">
                Follow Us
              </h4>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition-colors duration-200 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5 text-amber-200 group-hover:text-white" />
                  </motion.a>
                ))}
              </div>

              {/* Awards */}
              <div className="bg-amber-800/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="h-5 w-5 text-amber-400" />
                  <span className="text-amber-200 font-semibold">
                    Awards & Recognition
                  </span>
                </div>
                <ul className="text-amber-300 text-sm space-y-1">
                  <li>• Best Luxury Resort 2023</li>
                  <li>• Excellence in Hospitality</li>
                  <li>• Top Wedding Venue</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-amber-300 text-sm text-center md:text-left">
              <p>&copy; 2023 Empire Resort Gwalior. All rights reserved.</p>
              <p className="mt-1">Designed with luxury and elegance in mind.</p>
            </div>
            <div className="flex items-center space-x-6 text-amber-300 text-sm">
              <span>Powered by Empire Hospitality Group</span>
              <Separator orientation="vertical" className="h-4 bg-amber-700" />
              <span>Made in India 🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
