import { Button } from "@/components/ui/button";

const Feature1 = ({
  title = "Blocks built with Shadcn & Tailwind",
  description = "Hundreds of finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  imageAlt = "placeholder hero",
  buttonPrimary = {
    label: "Get Started",
    href: "https://shadcnblocks.com",
  },
  buttonSecondary = {
    label: "Learn More",
    href: "https://shadcnblocks.com",
  },
  reverse = false,
}) => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className={`flex flex-col items-center text-center lg:items-start lg:text-left ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <h1 className="my-6 mt-0 text-4xl font-semibold text-balance lg:text-5xl text-gray-900">
              {title}
            </h1>
            <p className="mb-8 max-w-xl text-gray-600 lg:text-lg">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href={buttonPrimary.href}>
                  {buttonPrimary.label}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={buttonSecondary.href}>
                  {buttonSecondary.label}
                </a>
              </Button>
            </div>
          </div>
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`max-h-96 w-full rounded-md object-cover shadow-lg ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
          />
        </div>
      </div>
    </section>
  );
};

export { Feature1 };
