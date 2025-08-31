import { ArrowRight } from "lucide-react";

const Feature73 = ({
  heading = "Powerful Features",
  description = "Discover the powerful features that make our platform stand out from the rest. Built with the latest technology and designed for maximum productivity.",
  linkUrl = "https://www.shadcnblocks.com",
  linkText = "Book a demo",
  features = [
    {
      id: "feature-1",
      title: "Modern Design",
      description:
        "Clean and intuitive interface built with the latest design principles. Optimized for the best user experience.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    },
    {
      id: "feature-2",
      title: "Responsive Layout",
      description:
        "Fully responsive design that works seamlessly across all devices and screen sizes. Perfect for any platform.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    },
    {
      id: "feature-3",
      title: "Easy Integration",
      description:
        "Simple integration process with comprehensive documentation and dedicated support team.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    },
  ],
}) => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto flex flex-col gap-16 px-4 lg:px-16">
        <div className="lg:max-w-sm">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h2>
          <p className="text-gray-600 mb-8 lg:text-lg">{description}</p>
          <a
            href={linkUrl}
            className="group flex items-center text-xs font-medium text-blue-600 hover:text-blue-700 md:text-base lg:text-lg"
          >
            {linkText}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features[0] && (
            <div className="flex flex-col overflow-clip rounded-xl border border-gray-200 bg-gray-50 md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
              <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                <img
                  src={features[0].image}
                  alt={features[0].title}
                  className="aspect-16/9 h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 md:mb-4 md:text-2xl lg:mb-6">
                  {features[0].title}
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  {features[0].description}
                </p>
              </div>
            </div>
          )}
          {features.slice(1).map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col overflow-clip rounded-xl border border-gray-200 bg-gray-50"
            >
              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-16/9 h-full w-full object-cover object-center"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 md:mb-4 md:text-2xl lg:mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature73 };
