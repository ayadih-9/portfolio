import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Twizy Design Office: Traffic Sign Detection & Recognition",
    description:
      "Acquisition and preprocessing of visual data, implementing image processing algorithms such as Canny, SIFT, and ORB for traffic sign recognition (2024-2025).",
    image: "/projects/twizzy.png",
    tags: ["Image Processing", "Computer Vision", "Canny", "SIFT", "ORB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Maze Game (Java, Scrum Methodology)",
    description:
      "Developed a Java-based game with a graphical interface and object-oriented programming. Project realized collaboratively using Agile Scrum and proper testing practices (Oct 2024 – Jan 2025).",
    image: "/projects/game.png",
    tags: ["Java", "OOP", "Scrum", "Game Development"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Weather Balloon Project - Lycée Chopin, Nancy",
    description:
      "Designed a meteorological data acquisition system and supervised practical work sessions (Oct 2023 – Jun 2024).",
    image: "/projects/ballon.jpg",
    tags: ["Embedded Systems", "Data Acquisition", "Meteorology"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "TIPE Project: Autonomous Car - Multi-Sensor Fusion",
    description:
      "Implemented probabilistic state estimation and explored multi-sensor data fusion techniques (2022-2023).",
    image: "/projects/tipe.jpg",
    tags: ["Autonomous Systems", "Sensor Fusion", "Probabilistic Estimation"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my academic and personal projects, showcasing my experience in autonomous systems, image processing, Java development, and data acquisition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
