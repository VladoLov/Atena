import { teamMembers } from "@/lib/url";
import Image from "next/image";

function AboutTeam() {
  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="flex flex-col items-center justify-center gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-platinum-100 pt-2 lg:pt-0 rounded-lg lg:rounded-full max-w-3xl items-center justify-start flex flex-col lg:flex-row overflow-hidden shadow-md "
          >
            <div className="relative h-12 w-12 lg:h-64 lg:w-64 rounded-full flex-shrink-0">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-platinum-700 mb-2">{member.role}</p>
              <p className="text-platinum-800 ">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutTeam;

// second example for small screen

/* export default function CardBasedTeam() {
    const [expandedId, setExpandedId] = useState<number | null>(null);
  
    const toggleExpand = (id: number) => {
      setExpandedId(expandedId === id ? null : id);
    };
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Our Team</h2>
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex items-center p-4">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
                <button
                  onClick={() => toggleExpand(member.id)}
                  className="text-gray-500 focus:outline-none"
                  aria-label={expandedId === member.id ? "Collapse bio" : "Expand bio"}
                >
                  {expandedId === member.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
              </div>
              {expandedId === member.id && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-gray-700">{member.bio}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  } */
