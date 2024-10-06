function AboutProjects() {
  const projects = [
    {
      title: "NGS Test Tracking Platform",
      description:
        "A platform for managing and tracking genome tests using advanced sequencing technologies such as WES and WGS.",
      technologies: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
      imageUrl: "/images/ngs-platform.png",
      link: "https://ngs-platform.com",
    },
    {
      title: "Web Development Portfolio",
      description:
        "A personal portfolio showcasing web development projects and front-end expertise.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      imageUrl: "/images/portfolio.png",
      link: "https://my-portfolio.com",
    },
  ];

  return (
    <div className="container mx-auto lg:mt-48">
      <h2 className="text-3xl font-bold text-center mt-12 mb-8">
        About My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-white shadow-lg rounded-lg p-4"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-sm text-gray-500 mb-2">
              Technologies: {project.technologies.join(", ")}
            </p>
            <a
              href={project.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutProjects;
