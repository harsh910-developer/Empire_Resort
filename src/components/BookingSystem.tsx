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
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import {
  CheckCircle,
  AlertCircle,
  Calendar as CalendarIcon,
} from "lucide-react";
import LoadingSpinner from "./LoadingSpinner";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BookingSystemProps {
  onBookingComplete?: (bookingData: any) => void;
  isOpen?: boolean;
}

const BookingSystem = ({
  onBookingComplete = () => {},
  isOpen = true,
}: BookingSystemProps) => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [bookingData, setBookingData] = useState({
    checkIn: new Date(),
    checkOut: new Date(new Date().setDate(new Date().getDate() + 1)),
    roomType: "standard",
    guests: 2,
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      setBookingData((prev) => ({
        ...prev,
        checkIn: selectedDate,
      }));

      // Set checkout date to one day after check-in
      const nextDay = new Date(selectedDate);
      nextDay.setDate(nextDay.getDate() + 1);
      setBookingData((prev) => ({
        ...prev,
        checkOut: nextDay,
      }));
    }
  };

  const handleCheckoutDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setBookingData((prev) => ({
        ...prev,
        checkOut: selectedDate,
      }));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setBookingData((prev) => ({
      ...prev,
      [name]: name === "guests" ? parseInt(value) : value,
    }));
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (currentStep) {
      case 1:
        if (!bookingData.checkIn) {
          newErrors.checkIn = "Check-in date is required";
        }
        if (!bookingData.checkOut) {
          newErrors.checkOut = "Check-out date is required";
        }
        if (
          bookingData.checkIn &&
          bookingData.checkOut &&
          bookingData.checkIn >= bookingData.checkOut
        ) {
          newErrors.dateRange = "Check-out date must be after check-in date";
        }
        break;
      case 2:
        if (!bookingData.roomType) {
          newErrors.roomType = "Please select a room type";
        }
        if (!bookingData.guests || bookingData.guests < 1) {
          newErrors.guests = "Please select number of guests";
        }
        break;
      case 3:
        if (!bookingData.name.trim()) {
          newErrors.name = "Full name is required";
        }
        if (!bookingData.email.trim()) {
          newErrors.email = "Email address is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
        if (!bookingData.phone.trim()) {
          newErrors.phone = "Phone number is required";
        } else if (!/^[+]?[0-9\s-()]{10,}$/.test(bookingData.phone)) {
          newErrors.phone = "Please enter a valid phone number";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep(step)) {
      return;
    }

    if (step < 4) {
      setStep(step + 1);
      setErrors({});
    } else {
      completeBooking();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const completeBooking = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsComplete(true);
      onBookingComplete(bookingData);
    } catch (error) {
      setErrors({ general: "Failed to complete booking. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const resetBooking = () => {
    setStep(1);
    setIsComplete(false);
    setBookingData({
      checkIn: new Date(),
      checkOut: new Date(new Date().setDate(new Date().getDate() + 1)),
      roomType: "standard",
      guests: 2,
      name: "",
      email: "",
      phone: "",
      specialRequests: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-background">
      <Card className="border-2 border-amber-100 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
          <CardTitle className="text-2xl font-serif text-center text-amber-900">
            Book Your Stay
          </CardTitle>
          <CardDescription className="text-center text-amber-700">
            Experience luxury and comfort at Empire Resort
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          {!isComplete ? (
            <div className="space-y-6">
              <div className="flex justify-between mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                        step === i
                          ? "bg-amber-600 text-white"
                          : step > i
                            ? "bg-green-500 text-white"
                            : "bg-amber-100 text-amber-600",
                      )}
                    >
                      {step > i ? "✓" : i}
                    </div>
                    <span className="text-xs mt-1 text-amber-700">
                      {i === 1
                        ? "Dates"
                        : i === 2
                          ? "Room"
                          : i === 3
                            ? "Details"
                            : "Review"}
                    </span>
                  </div>
                ))}
              </div>

              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-medium text-amber-800">
                    Select Your Dates
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="check-in">Check-in Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                            id="check-in"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {bookingData.checkIn ? (
                              format(bookingData.checkIn, "PPP")
                            ) : (
                              <span>Select date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={bookingData.checkIn}
                            onSelect={handleDateSelect}
                            initialFocus
                            disabled={(date) =>
                              date < new Date(new Date().setHours(0, 0, 0, 0))
                            }
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.checkIn && (
                        <div className="flex items-center space-x-1 text-red-600 text-sm mt-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>{errors.checkIn}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="check-out">Check-out Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                            id="check-out"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {bookingData.checkOut ? (
                              format(bookingData.checkOut, "PPP")
                            ) : (
                              <span>Select date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={bookingData.checkOut}
                            onSelect={handleCheckoutDateSelect}
                            initialFocus
                            disabled={
                              (date) =>
                                date <
                                new Date(
                                  bookingData.checkIn.getTime() + 86400000,
                                ) // +1 day in ms
                            }
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.checkOut && (
                        <div className="flex items-center space-x-1 text-red-600 text-sm mt-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>{errors.checkOut}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {errors.dateRange && (
                    <div className="flex items-center space-x-1 text-red-600 text-sm mt-2">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.dateRange}</span>
                    </div>
                  )}
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-medium text-amber-800">
                    Choose Your Room
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="room-type">Room Type</Label>
                      <Select
                        value={bookingData.roomType}
                        onValueChange={(value) =>
                          handleSelectChange("roomType", value)
                        }
                      >
                        <SelectTrigger id="room-type">
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">
                            Standard Room (₹5,000/night)
                          </SelectItem>
                          <SelectItem value="cottage">
                            Luxury Cottage (₹8,000/night)
                          </SelectItem>
                          <SelectItem value="suite">
                            Executive Suite (₹12,000/night)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.roomType && (
                        <div className="flex items-center space-x-1 text-red-600 text-sm mt-1">
                          <AlertCircle className="h-4 w-4" />
                          <span>{errors.roomType}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Select
                        value={bookingData.guests.toString()}
                        onValueChange={(value) =>
                          handleSelectChange("guests", value)
                        }
                      >
                        <SelectTrigger id="guests">
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-md mt-4">
                      <h4 className="font-medium text-amber-800 mb-2">
                        {bookingData.roomType === "standard" && "Standard Room"}
                        {bookingData.roomType === "cottage" && "Luxury Cottage"}
                        {bookingData.roomType === "suite" && "Executive Suite"}
                      </h4>
                      <p className="text-sm text-amber-700 mb-2">
                        {bookingData.roomType === "standard" &&
                          "Comfortable accommodation with modern amenities."}
                        {bookingData.roomType === "cottage" &&
                          "Spacious cottage with private garden and premium amenities."}
                        {bookingData.roomType === "suite" &&
                          "Luxurious suite with separate living area and panoramic views."}
                      </p>
                      <p className="text-sm font-medium text-amber-900">
                        {bookingData.roomType === "standard" &&
                          "₹5,000 per night"}
                        {bookingData.roomType === "cottage" &&
                          "₹8,000 per night"}
                        {bookingData.roomType === "suite" &&
                          "₹12,000 per night"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-medium text-amber-800">
                    Guest Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={bookingData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && (
                        <div
                          id="name-error"
                          className="flex items-center space-x-1 text-red-600 text-sm mt-1"
                        >
                          <AlertCircle className="h-4 w-4" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      {errors.email && (
                        <div
                          id="email-error"
                          className="flex items-center space-x-1 text-red-600 text-sm mt-1"
                        >
                          <AlertCircle className="h-4 w-4" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        required
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                      />
                      {errors.phone && (
                        <div
                          id="phone-error"
                          className="flex items-center space-x-1 text-red-600 text-sm mt-1"
                        >
                          <AlertCircle className="h-4 w-4" />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="special-requests">
                        Special Requests (Optional)
                      </Label>
                      <Input
                        id="special-requests"
                        name="specialRequests"
                        value={bookingData.specialRequests}
                        onChange={handleInputChange}
                        placeholder="Any special requirements or preferences"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-medium text-amber-800">
                    Review Your Booking
                  </h3>
                  <div className="bg-amber-50 p-4 rounded-md space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-sm text-amber-700">Check-in Date:</p>
                        <p className="font-medium">
                          {format(bookingData.checkIn, "PPP")}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-amber-700">
                          Check-out Date:
                        </p>
                        <p className="font-medium">
                          {format(bookingData.checkOut, "PPP")}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-amber-700">Room Type:</p>
                        <p className="font-medium">
                          {bookingData.roomType === "standard" &&
                            "Standard Room"}
                          {bookingData.roomType === "cottage" &&
                            "Luxury Cottage"}
                          {bookingData.roomType === "suite" &&
                            "Executive Suite"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-amber-700">Guests:</p>
                        <p className="font-medium">
                          {bookingData.guests}{" "}
                          {bookingData.guests === 1 ? "Guest" : "Guests"}
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-amber-200 pt-3">
                      <p className="text-sm text-amber-700">
                        Guest Information:
                      </p>
                      <p className="font-medium">{bookingData.name}</p>
                      <p className="text-sm">{bookingData.email}</p>
                      <p className="text-sm">{bookingData.phone}</p>
                    </div>
                    {bookingData.specialRequests && (
                      <div className="border-t border-amber-200 pt-3">
                        <p className="text-sm text-amber-700">
                          Special Requests:
                        </p>
                        <p className="text-sm">{bookingData.specialRequests}</p>
                      </div>
                    )}
                    <div className="border-t border-amber-200 pt-3">
                      <p className="text-sm text-amber-700">Price:</p>
                      <p className="font-medium text-amber-900">
                        {bookingData.roomType === "standard" && "₹5,000"}
                        {bookingData.roomType === "cottage" && "₹8,000"}
                        {bookingData.roomType === "suite" && "₹12,000"}
                        {" per night"}
                      </p>
                      <p className="text-xs text-amber-600">
                        *Taxes and fees will be calculated at checkout
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-4"
            >
              <div className="flex justify-center">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h3 className="text-xl font-serif text-amber-900">
                Booking Confirmed!
              </h3>
              <p className="text-amber-700">
                Thank you for choosing Empire Resort. Your booking has been
                confirmed.
              </p>
              <div className="bg-amber-50 p-4 rounded-md mx-auto max-w-md text-left">
                <p className="text-sm">
                  <span className="font-medium">Booking Reference:</span> EMP
                  {Math.floor(Math.random() * 10000)
                    .toString()
                    .padStart(4, "0")}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Check-in:</span>{" "}
                  {format(bookingData.checkIn, "PPP")}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Check-out:</span>{" "}
                  {format(bookingData.checkOut, "PPP")}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Room:</span>{" "}
                  {bookingData.roomType === "standard"
                    ? "Standard Room"
                    : bookingData.roomType === "cottage"
                      ? "Luxury Cottage"
                      : "Executive Suite"}
                </p>
              </div>
              <p className="text-sm text-amber-600 mt-4">
                A confirmation email has been sent to {bookingData.email}.
                <br />
                For any queries, please contact our reservations team.
              </p>
            </motion.div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between bg-gradient-to-r from-amber-50 to-amber-100 p-6">
          {!isComplete ? (
            <>
              {errors.general && (
                <div className="w-full mb-4 flex items-center space-x-1 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{errors.general}</span>
                </div>
              )}
              <div className="flex justify-between w-full">
                {step > 1 && (
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    className="border-amber-300 text-amber-700 hover:bg-amber-100"
                    disabled={isLoading}
                  >
                    Back
                  </Button>
                )}
                {step === 1 && <div></div>}
                <Button
                  onClick={nextStep}
                  className="bg-amber-600 text-white hover:bg-amber-700 min-w-[140px]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <LoadingSpinner size="sm" text="" />
                  ) : step < 4 ? (
                    "Continue"
                  ) : (
                    "Confirm Booking"
                  )}
                </Button>
              </div>
            </>
          ) : (
            <Button
              onClick={resetBooking}
              className="bg-amber-600 text-white hover:bg-amber-700 mx-auto"
            >
              Book Another Stay
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookingSystem;
