import { Button } from "@/components/ui/button";

const Timeline3 = ({
  heading = "Experience the difference with us",
  description = "We believe in creating lasting partnerships with our clients, focusing on long-term success through collaborative innovation and dedicated support.",
  buttons = {
    primary: {
      text: "Start Now",
      url: "#",
    },
    secondary: {
      text: "Book a demo",
      url: "#",
    },
  },
  features = [
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      title: "Dedicated Support",
      description:
        "Expanded operations to 5 new countries, reaching millions of new users.",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
      title: "Series B Funding",
      description:
        "Secured $50M in Series B funding to accelerate product development.",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
      title: "Product Launch",
      description: "Successfully launched our flagship product to market.",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
      title: "Company Founded",
      description: "Started with a vision to revolutionize the industry.",
    },
  ],
}) => {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="relative grid gap-16 md:grid-cols-2">
          <div className="top-40 h-fit md:sticky">
            <h2 className="mt-4 mb-6 text-4xl font-semibold md:text-5xl text-gray-900">
              {heading}
            </h2>
            <p className="font-medium text-gray-600 md:text-xl">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-4 lg:flex-row">
              <Button className="gap-2 bg-blue-600 hover:bg-blue-700" size="lg" asChild>
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-12 md:gap-20">
            {features.map((feature, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-2 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-video w-full rounded-xl border border-dashed border-gray-300 object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Timeline3 };
