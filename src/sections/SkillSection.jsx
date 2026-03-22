import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiHtml5,
  SiPostman
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    icon: <SiHtml5 />,
    description: "Structure and style responsive web interfaces.",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    description: "Core language of modern web applications.",
    category: "frontend",
  },
  {
    name: "React",
    icon: <FaReact />,
    description: "Build dynamic, component-based user interfaces.",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    description: "Write scalable and type-safe JavaScript code.",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    description: "Rapidly design clean and responsive UIs.",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    description: "Create optimized full-stack React applications.",
    category: "frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    description: "Build scalable server-side applications.",
    category: "backend",
  },
  {
    name: "Express",
    icon: <FaNodeJs />,
    description: "Design RESTful APIs with clean architecture.",
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    description: "Manage flexible NoSQL databases.",
    category: "backend",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    description: "Handle structured relational data efficiently.",
    category: "backend",
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
    description: "Efficient API querying and data fetching.",
    category: "backend",
  },

  // Tools
  {
    name: "Git/GitHub",
    icon: <FaGitAlt />,
    description: "Version control and collaborative development.",
    category: "tools",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    description: "Containerize and deploy applications.",
    category: "tools",
  },
  {
    name: "VS Code",
    icon: <VscVscode />,
    description: "Powerful code editor for modern development.",
    category: "tools",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    description: "Test and manage REST APIs efficiently.",
    category: "tools",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card border border-border rounded-2xl p-6 
              transition-all duration-300 hover:scale-105 
              hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl text-primary">{skill.icon}</div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};