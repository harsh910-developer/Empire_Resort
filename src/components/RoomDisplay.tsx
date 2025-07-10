import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

interface RoomImage {
  src: string;
  alt: string;
}

interface RoomType {
  id: string;
  name: string;
  description: string;
  price: string;
  capacity: string;
  size: string;
  amenities: string[];
  images: RoomImage[];
}

interface RoomDisplayProps {
  rooms?: RoomType[];
}

const defaultRooms: RoomType[] = [
  {
    id: "standard",
    name: "Standard Room",
    description:
      "Elegant and comfortable standard rooms with modern amenities and a view of our landscaped gardens.",
    price: "₹5,000 per night",
    capacity: "2 Adults",
    size: "350 sq ft",
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Flat-screen TV",
      "Mini Bar",
      "Room Service",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
        alt: "Standard Room Bed",
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
        alt: "Standard Room Bathroom",
      },
      {
        src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
        alt: "Standard Room View",
      },
    ],
  },
  {
    id: "cottage",
    name: "Luxury Cottage",
    description:
      "Private cottages with a blend of traditional charm and modern luxury, featuring private gardens and outdoor seating.",
    price: "₹8,500 per night",
    capacity: "2 Adults, 2 Children",
    size: "550 sq ft",
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Private Garden",
      "Jacuzzi",
      "Premium Toiletries",
      "24/7 Butler Service",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1602002418082-dd4a8f7a3c58?w=800&q=80",
        alt: "Cottage Exterior",
      },
      {
        src: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80",
        alt: "Cottage Interior",
      },
      {
        src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
        alt: "Cottage Bathroom",
      },
    ],
  },
  {
    id: "suite",
    name: "Royal Suite",
    description:
      "Our most luxurious accommodation featuring a separate living area, premium furnishings, and panoramic views of the resort.",
    price: "₹15,000 per night",
    capacity: "4 Adults",
    size: "850 sq ft",
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Living Room",
      "Dining Area",
      "Jacuzzi",
      "Private Balcony",
      "Premium Bar",
      "24/7 Butler Service",
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
        alt: "Suite Living Area",
      },
      {
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
        alt: "Suite Bedroom",
      },
      {
        src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
        alt: "Suite Bathroom",
      },
    ],
  },
];

const RoomDisplay: React.FC<RoomDisplayProps> = ({ rooms = defaultRooms }) => {
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);

  return (
    <section className="py-16 px-4 bg-[#f9f7f2]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif text-[#8B7D3F] mb-4">
            Rooms & Suites
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Experience unparalleled luxury and comfort in our thoughtfully
            designed accommodations, each offering a perfect blend of elegance
            and modern amenities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border border-[#e5e0d5] h-full flex flex-col bg-white">
                <CardHeader className="p-0">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {room.images.map((image, i) => (
                        <CarouselItem key={i}>
                          <div className="aspect-[16/9] relative overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
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
                </CardHeader>
                <CardContent className="pt-6 px-6 flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <CardTitle className="text-2xl font-serif text-[#8B7D3F]">
                      {room.name}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-[#8B7D3F]/10 text-[#8B7D3F] border-[#8B7D3F]/30"
                    >
                      {room.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-700 mb-4">
                    {room.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="text-sm bg-[#f5f2e9] px-3 py-1 rounded-full text-gray-700">
                      <span className="font-medium">Capacity:</span>{" "}
                      {room.capacity}
                    </div>
                    <div className="text-sm bg-[#f5f2e9] px-3 py-1 rounded-full text-gray-700">
                      <span className="font-medium">Size:</span> {room.size}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-4 px-6 pb-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex-1 border-[#8B7D3F] text-[#8B7D3F] hover:bg-[#8B7D3F]/10"
                        onClick={() => setSelectedRoom(room)}
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-serif text-[#8B7D3F]">
                          {selectedRoom?.name}
                        </DialogTitle>
                        <DialogDescription className="text-gray-700">
                          {selectedRoom?.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {selectedRoom?.images.map((image, i) => (
                              <CarouselItem key={i}>
                                <div className="aspect-[16/9] relative overflow-hidden rounded-md">
                                  <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="object-cover w-full h-full"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-2" />
                          <CarouselNext className="right-2" />
                        </Carousel>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">
                              Room Details
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                              <li>Price: {selectedRoom?.price}</li>
                              <li>Capacity: {selectedRoom?.capacity}</li>
                              <li>Size: {selectedRoom?.size}</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">
                              Amenities
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                              {selectedRoom?.amenities.map((amenity, i) => (
                                <li key={i}>{amenity}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                          <Button className="bg-[#8B7D3F] hover:bg-[#6d6231] text-white">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button className="flex-1 bg-[#8B7D3F] hover:bg-[#6d6231] text-white">
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomDisplay;
