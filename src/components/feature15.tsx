import {
  Shield,
  Heart,
  Clock,
  Award,
} from "lucide-react";

const feature = [
  {
    title: "Quality Assurance",
    description:
      "Every product in our inventory undergoes rigorous quality testing and meets the highest industry standards. Our licensed pharmacists ensure you receive only the best, most effective treatments.",
    icon: <Shield className="size-6" />,
  },
  {
    title: "Compassionate Care",
    description:
      "We believe in treating every patient with empathy and understanding. Our healthcare professionals are committed to providing personalized care that addresses your unique health needs.",
    icon: <Heart className="size-6" />,
  },
  {
    title: "24/7 Support",
    description:
      "Healthcare doesn't follow a schedule, and neither do we. Our round-the-clock support ensures you have access to professional healthcare guidance whenever you need it most.",
    icon: <Clock className="size-6" />,
  },
  {
    title: "Expert Team",
    description:
      "Our diverse team of healthcare professionals brings together decades of experience in pharmaceuticals, medicine, and patient care to provide you with the highest quality healthcare solutions.",
    icon: <Award className="size-6" />,
  },
];

const Feature15 = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            <p className="text-sm text-blue-600 font-semibold">WHY WE ARE UNIQUE</p>
            <h2 className="text-3xl font-medium text-gray-900 md:text-5xl">
              Bringing the best healthcare to you by the best in the industry
            </h2>

            <p className="text-gray-600 md:max-w-2xl text-lg">
              At Aanav Healthcare, we combine cutting-edge medical technology with 
              compassionate care to deliver healthcare solutions that truly make a difference. 
              Our commitment to excellence and patient-centered approach sets us apart.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
          {feature.map((feature, idx) => (
            <div
              className="flex flex-col justify-between rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 md:min-h-[300px] md:p-8"
              key={idx}
            >
              <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-blue-100">
                <div className="text-blue-600">
                  {feature.icon}
                </div>
              </span>
              <div>
                <h3 className="text-lg font-medium text-gray-900 md:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
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

export { Feature15 };
