import { HandHelping, Users, Zap } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Hero45 = ({
  badge = "shadcnblocks.com",
  heading = "Blocks built with Shadcn & Tailwind",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  imageAlt = "placeholder",
  features = [
    {
      icon: <HandHelping className="h-auto w-5" />,
      title: "Flexible Support",
      description:
        "Benefit from around-the-clock assistance to keep your business running smoothly.",
    },
    {
      icon: <Users className="h-auto w-5" />,
      title: "Collaborative Tools",
      description:
        "Enhance teamwork with tools designed to simplify project management and communication.",
    },
    {
      icon: <Zap className="h-auto w-5" />,
      title: "Lightning Fast Speed",
      description:
        "Experience the fastest load times with our high performance servers.",
    },
  ],
}) => {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto overflow-hidden px-4">
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            {badge}
          </Badge>
          <h1 className="text-4xl font-semibold text-gray-900 lg:text-5xl">{heading}</h1>
        </div>
        <div className="relative mx-auto max-w-5xl">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="aspect-video max-h-[500px] w-full rounded-xl object-cover shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-xl"></div>
          <div className="absolute -top-28 -right-28 -z-10 aspect-video h-72 w-96 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] [background-size:12px_12px] opacity-40 sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          <div className="absolute -top-28 -left-28 -z-10 aspect-video h-72 w-96 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] [background-size:12px_12px] opacity-40 sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-5xl flex-col md:flex-row">
          {features.map((feature, index) => (
            <React.Fragment key={feature.title}>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-gray-300 via-transparent to-gray-300 md:block"
                />
              )}
              <div
                key={index}
                className="flex grow basis-0 flex-col rounded-md bg-white p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-blue-100 drop-shadow-lg">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Hero45 };
