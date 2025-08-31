import { Heart, Shield, Users } from "lucide-react";

const Feature16 = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <p className="mb-4 text-sm text-blue-600 font-semibold lg:text-base">
          OUR VALUES
        </p>
        <h2 className="text-3xl font-medium text-gray-900 lg:text-4xl">Why Choose Aanav Healthcare?</h2>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-blue-100">
              <Heart className="size-6 text-blue-600" />
            </span>
            <h3 className="mb-2 text-xl font-medium text-gray-900">Compassionate Care</h3>
            <p className="leading-7 text-gray-600">
              We believe in treating every patient with empathy, respect, and understanding. 
              Our healthcare professionals are committed to providing personalized care that 
              addresses not just physical health, but emotional and mental well-being too.
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-blue-100">
              <Shield className="size-6 text-blue-600" />
            </span>
            <h3 className="mb-2 text-xl font-medium text-gray-900">Quality & Safety</h3>
            <p className="leading-7 text-gray-600">
              Your health and safety are our top priorities. Every product and service 
              undergoes rigorous quality testing and meets the highest industry standards. 
              We maintain strict protocols to ensure your well-being is never compromised.
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-blue-100">
              <Users className="size-6 text-blue-600" />
            </span>
            <h3 className="mb-2 text-xl font-medium text-gray-900">Patient-Centered</h3>
            <p className="leading-7 text-gray-600">
              We put patients at the center of everything we do. Our approach focuses on 
              understanding your unique health needs, providing education, and empowering 
              you to make informed decisions about your healthcare journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature16 };
