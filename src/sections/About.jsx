import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    label: "Architecture",
    title: "Scalable Systems",
    description: "High-availability backend design with clean architecture.",
  },
  {
    icon: Rocket,
    label: "Automation",
    title: "CI/CD Pipelines",
    description: "Zero-downtime deployments and optimized delivery pipelines.",
  },
  {
    icon: Users,
    label: "Frontend",
    title: "Modern UX",
    description: "Responsive, accessible, and pixel-perfect interfaces.",
  },
  {
    icon: Lightbulb,
    label: "Security",
    title: "Robust Tech",
    description: "Performance hardening and best-practice security standards.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">

            {/* Section Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-secondary-foreground text-sm font-medium tracking-wider uppercase block"
            >
              A BIT ABOUT ME
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground"
            >
              I solve problems through{" "}
              <span className="font-serif italic font-normal text-white">
                modern code.
              </span>
            </motion.h2>

            {/* Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-muted-foreground"
            >
              <p>
                I'm a Full Stack Developer & DevOps enthusiast based in India. I specialize in building scalable web applications and optimizing delivery pipelines with a focus on clean architecture and developer experience.
              </p>
              <p>
                I specialize in MongoDB, Express.js, React, Node.js — building responsive frontends and efficient backend systems with clean, maintainable code that delivers performance and reliability.
              </p>
              <p>
                Beyond development, I continuously sharpen my problem-solving skills and explore new technologies. I'm driven by growth and the challenge of turning complex ideas into impactful solutions.
              </p>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl p-6 glow-border"
            >
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build scalable, real-world digital products powered by strong logic, clean architecture, and a constant drive to improve."
              </p>
            </motion.div>

            {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.35 }}
            >
              
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-8 pt-10 border-t border-primary/10"
            >
              <div>
                <p className="text-3xl font-black text-secondary-foreground tracking-tighter">3+</p>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Years Exp</p>
              </div>
              <div>
                <p className="text-3xl font-black text-secondary-foreground tracking-tighter">15+</p>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-black text-secondary-foreground tracking-tighter">8+</p>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Tech Stack</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Focus Area Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * idx + 0.5 }}
                className="glass p-6 rounded-2xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-[10px] font-black text-primary/60 uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};