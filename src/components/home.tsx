import React, { useRef } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import RoomDisplay from "./RoomDisplay";
import EventSpaces from "./EventSpaces";
import BookingSystem from "./BookingSystem";
import DiningSection from "./DiningSection";
import FacilitiesSection from "./FacilitiesSection";
import GallerySection from "./GallerySection";
import TestimonialsSection from "./TestimonialsSection";
import BlogSection from "./BlogSection";
import VirtualTour from "./VirtualTour";
import Footer from "./Footer";
import ErrorBoundary from "./ErrorBoundary";

function Home() {
  const bookingRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Navigation onBookingClick={scrollToBooking} />
        <main>
          <section id="home" aria-label="Hero section">
            <HeroSection onCtaClick={scrollToBooking} />
          </section>
          <section id="about" aria-label="About Empire Resort">
            <AboutSection />
          </section>
          <section id="booking" ref={bookingRef} aria-label="Booking section">
            <BookingSystem />
          </section>
          <section id="rooms" aria-label="Rooms and suites">
            <RoomDisplay />
          </section>
          <section id="dining" aria-label="Dining options">
            <DiningSection />
          </section>
          <section id="events" aria-label="Event spaces">
            <EventSpaces />
          </section>
          <section id="facilities" aria-label="Resort facilities">
            <FacilitiesSection />
          </section>
          <section id="virtual-tour" aria-label="Virtual tour">
            <VirtualTour />
          </section>
          <section id="gallery" aria-label="Photo gallery">
            <GallerySection />
          </section>
          <section id="testimonials" aria-label="Guest testimonials">
            <TestimonialsSection />
          </section>
          <section id="blog" aria-label="Blog and stories">
            <BlogSection />
          </section>
        </main>
        <footer id="contact" aria-label="Contact information">
          <Footer />
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default Home;
