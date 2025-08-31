import { Stethoscope, Pill, Heart } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feature51 = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl mb-4">
            Our Healthcare Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of healthcare solutions designed to support your wellness journey
          </p>
        </div>
        
        <Tabs defaultValue="feature-1">
          <TabsList className="flex h-auto w-full flex-col gap-2 bg-gray-50 md:flex-row">
            <TabsTrigger
              value="feature-1"
              className="flex w-full flex-col items-start justify-start gap-1 rounded-md border p-4 text-left whitespace-normal text-blue-600 hover:border-blue-400 data-[state=active]:border-blue-600 data-[state=active]:bg-blue-50"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-blue-100 lg:size-10">
                  <Stethoscope className="size-4 text-blue-600" />
                </span>
                <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                  Consultation & Care
                </p>
              </div>
              <p className="font-normal text-gray-600 md:block">
                Professional healthcare consultation and personalized care plans
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="feature-2"
              className="flex w-full flex-col items-start justify-start gap-1 rounded-md border p-4 text-left whitespace-normal text-blue-600 hover:border-blue-400 data-[state=active]:border-blue-600 data-[state=active]:bg-blue-50"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-blue-100 lg:size-10">
                  <Pill className="size-4 text-blue-600" />
                </span>
                <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                  Medication Management
                </p>
              </div>
              <p className="font-normal text-gray-600 md:block">
                Comprehensive medication solutions and prescription management
              </p>
            </TabsTrigger>
            <TabsTrigger
              value="feature-3"
              className="flex w-full flex-col items-start justify-start gap-1 rounded-md border p-4 text-left whitespace-normal text-blue-600 hover:border-blue-400 data-[state=active]:border-blue-600 data-[state=active]:bg-blue-50"
            >
              <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                <span className="flex size-8 items-center justify-center rounded-full bg-blue-100 lg:size-10">
                  <Heart className="size-4 text-blue-600" />
                </span>
                <p className="text-lg font-semibold md:text-2xl lg:text-xl">
                  Wellness Programs
                </p>
              </div>
              <p className="font-normal text-gray-600 md:block">
                Preventive care and wellness programs for optimal health
              </p>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="feature-1" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Healthcare Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Our team of experienced healthcare professionals provides personalized consultation services, 
                  helping you understand your health needs and develop comprehensive care plans tailored to your lifestyle.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Initial health assessment and screening
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Personalized treatment recommendations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Ongoing health monitoring and support
                  </li>
                </ul>
              </div>
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop"
                alt="Healthcare consultation"
                className="aspect-video rounded-md object-cover shadow-lg"
              />
            </div>
          </TabsContent>
          <TabsContent value="feature-2" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Medication Solutions</h3>
                <p className="text-gray-600 mb-4">
                  We offer a wide range of pharmaceutical products and medication management services, 
                  ensuring you have access to quality medications and proper guidance for safe usage.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Prescription medication dispensing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Medication interaction checking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Dosage and timing guidance
                  </li>
                </ul>
              </div>
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop"
                alt="Medication management"
                className="aspect-video rounded-md object-cover shadow-lg"
              />
            </div>
          </TabsContent>
          <TabsContent value="feature-3" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Preventive Wellness Programs</h3>
                <p className="text-gray-600 mb-4">
                  Our wellness programs focus on preventive care and lifestyle optimization, 
                  helping you maintain good health and prevent potential health issues before they arise.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Nutrition and diet counseling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Exercise and fitness guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Stress management and mental wellness
                  </li>
                </ul>
              </div>
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                alt="Wellness programs"
                className="aspect-video rounded-md object-cover shadow-lg"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature51 };
