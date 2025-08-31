import { ArrowUpRight } from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin, FaXTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const Community2 = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-5 text-2xl font-semibold md:text-3xl text-gray-900 text-center">
          Join Our Healthcare Community
        </h2>
        <p className="font-medium text-gray-600 md:text-xl text-center max-w-3xl mx-auto">
          Connect with healthcare professionals, stay updated on wellness tips, and be part of our mission to improve health outcomes.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          <a className="group rounded-md border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300" href="#">
            <div className="flex items-center justify-between gap-4">
              <FaFacebook className="size-5 text-blue-600" />
              <ArrowUpRight className="size-4 -translate-x-2 translate-y-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 text-blue-600" />
            </div>
            <div className="mt-4">
              <h3 className="mb-1 font-semibold text-gray-900">Facebook</h3>
              <p className="text-sm text-gray-600">
                Follow our health tips and wellness updates.
              </p>
            </div>
          </a>
          <a className="group rounded-md border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300" href="#">
            <div className="flex items-center justify-between gap-4">
              <FaInstagram className="size-5 text-pink-600" />
              <ArrowUpRight className="size-4 -translate-x-2 translate-y-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 text-pink-600" />
            </div>
            <div className="mt-4">
              <h3 className="mb-1 font-semibold text-gray-900">Instagram</h3>
              <p className="text-sm text-gray-600">
                Visual health inspiration and wellness stories.
              </p>
            </div>
          </a>
          <a className="group rounded-md border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300" href="#">
            <div className="flex items-center justify-between gap-4">
              <FaLinkedin className="size-5 text-blue-700" />
              <ArrowUpRight className="size-4 -translate-x-2 translate-y-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 text-blue-700" />
            </div>
            <div className="mt-4">
              <h3 className="mb-1 font-semibold text-gray-900">LinkedIn</h3>
              <p className="text-sm text-gray-600">
                Connect with healthcare professionals and opportunities.
              </p>
            </div>
          </a>
          <a className="group rounded-md border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300" href="#">
            <div className="flex items-center justify-between gap-4">
              <FaYoutube className="size-5 text-red-600" />
              <ArrowUpRight className="size-4 -translate-x-2 translate-y-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 text-red-600" />
            </div>
            <div className="mt-4">
              <h3 className="mb-1 font-semibold text-gray-900">YouTube</h3>
              <p className="text-sm text-gray-600">
                Educational health content and wellness videos.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Community2 };
