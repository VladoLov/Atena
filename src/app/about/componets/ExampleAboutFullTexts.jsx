import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Senior Developer",
    imageUrl: "/placeholder.svg?height=200&width=200",
    bio: "John is a passionate developer with over 10 years of experience in web technologies.",
    education: "MSc in Computer Science, XYZ University",
    experience:
      "10+ years in full-stack development, specializing in React and Node.js",
  },
  // Add more team members here...
];

export default function ExpandableTeamCard() {
  const [expandedMember, setExpandedMember] =
    (useState < number) | (null > null);

  const toggleExpand = (id) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="flex flex-col items-center justify-center gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-platinum-100 rounded-lg max-w-3xl w-full shadow-md overflow-hidden transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-col lg:flex-row items-center p-6">
              <div className="relative h-24 w-24 lg:h-48 lg:w-48 rounded-full flex-shrink-0 mb-4 lg:mb-0 lg:mr-6">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex-grow text-center lg:text-left">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-platinum-700 mb-2">{member.role}</p>
                <p className="text-platinum-800 mb-4">{member.bio}</p>
                <button
                  onClick={() => toggleExpand(member.id)}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center justify-center lg:justify-start"
                >
                  {expandedMember === member.id ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="ml-1" />
                    </>
                  ) : (
                    <>
                      <span>Show More</span>
                      <ChevronDown className="ml-1" />
                    </>
                  )}
                </button>
              </div>
            </div>
            {expandedMember === member.id && (
              <div className="px-6 pb-6 lg:ml-60">
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-platinum-800 mb-4">{member.education}</p>
                <h4 className="font-semibold mb-2">Experience</h4>
                <p className="text-platinum-800">{member.experience}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
