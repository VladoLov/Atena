import { teamMembers } from "@/lib/url";
import Image from "next/image";

function AboutTeam() {
  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
          >
            <div className="relative h-64 rounded-full">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-700">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutTeam;
