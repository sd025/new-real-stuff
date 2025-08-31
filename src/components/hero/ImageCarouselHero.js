"use client";


import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight, Star, Shield, Truck, Clock } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title: "Your Health, Our Priority",
    subtitle: "Premium healthcare products delivered to your doorstep",
    description: "Discover our curated collection of pharmaceutical products, supplements, and wellness solutions.",
    image: "/api/placeholder/1200/600",
    cta: "Shop Now",
    features: ["Free Delivery", "24/7 Support", "Genuine Products"]
  },
  {
    id: 2,
    title: "Trusted Healthcare Partner",
    subtitle: "Licensed pharmacy with certified products",
    description: "Every product is carefully selected and verified for quality, safety, and effectiveness.",
    image: "/api/placeholder/1200/600",
    cta: "Learn More",
    features: ["FDA Approved", "Quality Assured", "Expert Consultation"]
  },
  {
    id: 3,
    title: "Wellness Made Simple",
    subtitle: "Comprehensive health solutions in one place",
    description: "From prescription medications to wellness supplements, we've got your health covered.",
    image: "/api/placeholder/1200/600",
    cta: "Explore Products",
    features: ["Wide Selection", "Best Prices", "Secure Shopping"]
  }
];

export function ImageCarouselHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState(null);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="absolute top-4 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Licensed Pharmacy</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="w-4 h-4 text-green-600" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-orange-600" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
          duration: 20,
          skipSnaps: false,
        }}
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={slide.id} className="relative">
              <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative z-10 container mx-auto px-4 py-20">
                  <div className="max-w-3xl">
                    <div className="space-y-6">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-blue-600 text-sm font-medium">
                        <Star className="w-4 h-4 mr-2 fill-current" />
                        Trusted Healthcare
                      </div>

                      <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>

                      <p className="text-xl lg:text-2xl text-blue-100 font-medium">
                        {slide.subtitle}
                      </p>

                      <p className="text-lg text-gray-200 max-w-2xl">
                        {slide.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button 
                          size="lg" 
                          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg"
                        >
                          {slide.cta}
                          <ChevronRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold rounded-lg"
                        >
                          Learn More
                        </Button>
                      </div>

                      <div className="flex flex-wrap gap-4 pt-6">
                        {slide.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-white">
                            <div className="w-2 h-2 bg-blue-400 rounded-full" />
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 border-0 shadow-lg" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 border-0 shadow-lg" />

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (api) {
                    api.scrollTo(index);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </Carousel>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
