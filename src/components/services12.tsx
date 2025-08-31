"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Primary Care Consultation",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop",
    url: "#primary-care",
  },
  {
    title: "Specialized Treatment",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop",
    url: "#specialized",
  },
  {
    title: "Telemedicine",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop",
    url: "#telemedicine",
  },
  {
    title: "Pharmacy Services",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    url: "#pharmacy",
  },
  {
    title: "Wellness Programs",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec0?q=80&w=2070&auto=format&fit=crop",
    url: "#wellness",
  },
];

const Services12 = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col justify-between lg:col-span-1">
          <div>
            <h2 className="text-gray-900 mb-4 text-4xl font-medium md:text-6xl">
              Healthcare Services
            </h2>
            <p className="text-gray-600 w-72 text-base tracking-tight">
              We offer comprehensive healthcare solutions to support your wellness journey. 
              From primary care to specialized treatments, we deliver quality care that 
              puts your health first.
            </p>
          </div>
          <Button variant="outline" className="mt-8 w-fit border-blue-600 text-blue-600 hover:bg-blue-50">
            View all services <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
          {/* Featured Services - First 2 */}
          {services.slice(0, 2).map((service, idx) => (
            <motion.a
              key={idx}
              href={service.url}
              whileHover={{ opacity: 0.8 }}
              className="group block overflow-hidden rounded-xl"
            >
              <Card className="relative aspect-[3/4] overflow-hidden p-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <CardContent className="absolute inset-0 flex flex-col justify-start p-6">
                  <div className="pr-4 font-semibold text-white text-lg">
                    {service.title}
                  </div>
                </CardContent>
                <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white transition-transform group-hover:scale-110" />
              </Card>
            </motion.a>
          ))}

          {/* Secondary Services - Remaining 3 */}
          <div className="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-3">
            {services.slice(2).map((service, idx) => (
              <motion.a
                key={idx + 2}
                href={service.url}
                whileHover={{ opacity: 0.8 }}
                className="group block overflow-hidden rounded-xl"
              >
                <Card className="relative aspect-[4/3] overflow-hidden p-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <CardContent className="absolute inset-0 flex flex-col justify-start p-4">
                    <div className="pr-4 text-sm font-semibold text-white">
                      {service.title}
                    </div>
                  </CardContent>
                  <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white transition-transform group-hover:scale-110" />
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services12 };
