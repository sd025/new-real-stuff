import { ArrowRight } from "lucide-react";

const Stats8 = ({
  heading = "Platform performance insights",
  description = "Ensuring stability and scalability for all users",
  link = {
    text: "Read the full impact report",
    url: "https://www.shadcnblocks.com",
  },
  stats = [
    {
      id: "stat-1",
      value: "250%+",
      label: "average growth in user engagement",
    },
    {
      id: "stat-2",
      value: "$2.5m",
      label: "annual savings per enterprise partner",
    },
    {
      id: "stat-3",
      value: "200+",
      label: "integrations with top industry platforms",
    },
    {
      id: "stat-4",
      value: "99.9%",
      label: "customer satisfaction over the last year",
    },
  ],
}) => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">{heading}</h2>
          <p className="text-gray-600 text-lg">{description}</p>
          <a
            href={link.url}
            className="flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
          >
            {link.text}
            <ArrowRight className="h-auto w-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-5 text-center">
              <div className="text-6xl font-bold text-blue-600">{stat.value}</div>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats8 };
