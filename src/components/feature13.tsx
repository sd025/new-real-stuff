const Feature13 = ({
  heading = "A better way to build websites",
  features = [
    {
      id: "feature-1",
      title: "Built for artists and designers",
      subtitle: "FOR DESIGNERS",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus illum, labore quis facilis molestias!",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    },
    {
      id: "feature-2",
      title: "Built for coders and developers",
      subtitle: "FOR DEVELOPERS",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus illum, labore quis facilis molestias!",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    },
  ],
}) => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-medium lg:text-4xl text-center text-gray-900 mb-20">{heading}</h2>
        <div className="grid gap-9 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col justify-between rounded-lg bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between gap-10 border-b border-gray-200">
                <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
                  <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
                    {feature.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <div className="md:w-1/3 w-2/5 shrink-0 rounded-r-lg border-l border-gray-200">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover rounded-r-lg"
                  />
                </div>
              </div>
              <div className="p-4 text-gray-600 md:p-8 leading-relaxed">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature13 };
