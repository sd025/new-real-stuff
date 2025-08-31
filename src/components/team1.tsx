import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Team1 = ({
  heading = "Team",
  description = "Our diverse team of experts brings together decades of experience in design, engineering, and product development.",
  members = [
    {
      id: "member-1",
      name: "Sarah Chen",
      role: "CEO & Founder",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    },
    {
      id: "member-2",
      name: "Marcus Rodriguez",
      role: "CTO",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    },
    {
      id: "member-3",
      name: "Emily Watson",
      role: "Head of Design",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    },
    {
      id: "member-4",
      name: "David Kim",
      role: "Lead Engineer",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    },
    {
      id: "member-5",
      name: "Lisa Thompson",
      role: "Product Manager",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    },
    {
      id: "member-6",
      name: "Alex Johnson",
      role: "UX Designer",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    },
  ],
}) => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl text-gray-900">
          {heading}
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl lg:text-xl">
          {description}
        </p>
      </div>
      <div className="container mx-auto px-4 mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <Avatar className="mb-4 size-20 border-2 border-blue-200 md:mb-5 lg:size-24 shadow-lg">
              <AvatarImage src={member.avatar} />
              <AvatarFallback className="bg-blue-100 text-blue-800 text-lg font-semibold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <p className="text-center font-semibold text-gray-900 text-lg">{member.name}</p>
            <p className="text-blue-600 text-center font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Team1 };
