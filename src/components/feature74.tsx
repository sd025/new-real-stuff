import { ArrowRight } from "lucide-react";

const Feature74 = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto flex flex-col gap-16 px-4 lg:px-16">
        <div className="lg:max-w-sm">
          <h2 className="mb-3 text-xl font-semibold text-blue-600 md:mb-4 md:text-4xl lg:mb-6">
            Healthcare Innovation
          </h2>
          <p className="mb-8 text-gray-600 lg:text-lg">
            Pioneering the future of healthcare delivery through cutting-edge technology, 
            personalized medicine, and compassionate care that puts patients first.
          </p>
          <a
            href="#innovation"
            className="group flex items-center text-xs font-medium text-blue-600 hover:text-blue-700 md:text-base lg:text-lg"
          >
            Explore Innovation{" "}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div className="flex flex-col overflow-clip rounded-xl border border-gray-200 bg-gray-50 md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop"
                alt="AI-Powered Healthcare Diagnostics"
                className="aspect-16/9 h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 md:mb-4 md:text-2xl lg:mb-6">
                AI-Powered Healthcare Diagnostics
              </h3>
              <p className="text-gray-600 lg:text-lg">
                Our advanced artificial intelligence systems analyze medical data with unprecedented accuracy, 
                helping healthcare providers make faster, more informed decisions and improving patient outcomes 
                through early detection and personalized treatment plans.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse overflow-clip rounded-xl border border-gray-200 bg-gray-50 md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 md:mb-4 md:text-2xl lg:mb-6">
                Telemedicine & Remote Care
              </h3>
              <p className="text-gray-600 lg:text-lg">
                Breaking down geographical barriers with our comprehensive telemedicine platform, 
                enabling patients to access quality healthcare from anywhere while maintaining 
                the personal connection and professional expertise they deserve.
              </p>
            </div>
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop"
                alt="Telemedicine & Remote Care"
                className="aspect-16/9 h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature74 };
