import { useState } from "react";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Lovely Professional University",
    duration: "2023– 2027",
    grade: "CGPA: 6.9",
    description:
      "Focused on software engineering, data structures, algorithms, and full-stack development. Participated in multiple hackathons and built real-world projects using the MERN stack.",
    tags: ["MERN Stack", "DSA", "Cloud"],
    side: "left",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    field: "Science (PCM + Computer Science)",
    institution: "Narayana Junior College",
    duration: "2021 – 2023",
    grade: "Percentage: 69%",
    description:
      "Studied Physics, Chemistry, Mathematics, and Computer Science. Developed a strong foundation in logical thinking and programming fundamentals.",
    tags: ["Python", "Mathematics", "Physics"],
    side: "right",
  },
  {
    id: 3,
    degree: "Secondary School Certificate",
    field: "General Studies",
    institution: "Gautaum High School",
    duration: "2020 – 2021",
    grade: "Percentage: 100%",
    description:
      "Completed secondary education with distinction. Discovered passion for science, technology, and problem-solving during this period.",
    tags: ["Science", "Technology", "Math"],
    side: "left",
  },
];

const GlowDot = () => (
  <div className="flex justify-center items-center w-full">
    <div
      className="w-4 h-4 rounded-full"
      style={{
        background: "#2dd4c4",
        boxShadow:
          "0 0 0 4px #0a1628, 0 0 0 6px rgba(45,212,196,0.35), 0 0 20px rgba(45,212,196,0.6)",
      }}
    />
  </div>
);

const EducationCard = ({ item, isLeft }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-6 cursor-default transition-all duration-300"
      style={{
        background: hovered
          ? "linear-gradient(135deg, #0f2235 0%, #112a40 100%)"
          : "#0f2235",
        border: `1px solid ${hovered ? "rgba(45,212,196,0.4)" : "rgba(45,212,196,0.12)"}`,
        boxShadow: hovered
          ? "0 8px 40px rgba(45,212,196,0.12), 0 2px 8px rgba(0,0,0,0.4)"
          : "0 2px 16px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {/* connector line to dot */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-8 h-px"
        style={{
          background: "rgba(45,212,196,0.25)",
          [isLeft ? "right" : "left"]: "-32px",
        }}
      />

      {/* top row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          {/* icon */}
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(45,212,196,0.1)", border: "1px solid rgba(45,212,196,0.2)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="#2dd4c4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3
              className="font-bold text-sm leading-tight"
              style={{ color: "#e8f4f3", fontFamily: "'Syne', sans-serif" }}
            >
              {item.degree}
            </h3>
            <p className="text-xs mt-0.5" style={{ color: "#2dd4c4" }}>
              {item.field}
            </p>
          </div>
        </div>
        {/* year badge */}
        <span
          className="text-xs px-3 py-1 rounded-full flex-shrink-0 font-medium"
          style={{
            background: "rgba(45,212,196,0.1)",
            color: "#2dd4c4",
            border: "1px solid rgba(45,212,196,0.2)",
          }}
        >
          {item.duration}
        </span>
      </div>

      {/* institution */}
      <p className="text-sm font-semibold mb-1" style={{ color: "#7fa8a5" }}>
        {item.institution}
      </p>

      {/* grade */}
      <p className="text-xs mb-3" style={{ color: "#4a7575" }}>
        {item.grade}
      </p>

      {/* description */}
      <p className="text-xs leading-relaxed mb-4" style={{ color: "#6b9898" }}>
        {item.description}
      </p>

      {/* tags */}
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-md"
            style={{
              background: "rgba(45,212,196,0.06)",
              color: "#7fa8a5",
              border: "1px solid rgba(45,212,196,0.12)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function EducationSection() {
  return (
    <section
      className="relative min-h-screen py-20 px-4 overflow-hidden bg-secondary/5"
      // style={{ background: "" }}
    >
      {/* background glows */}
      <div
        className="pointer-events-none absolute inset-0 "
        style={{
          background:
            "radial-gradient(ellipse at 15% 30%, rgba(32,178,170,0.06) 0%, transparent 55%), radial-gradient(ellipse at 85% 70%, rgba(13,110,120,0.05) 0%, transparent 55%)",
        }}
      />

      {/* floating dots decoration */}
      {[
        { top: "12%", left: "5%", size: 4 },
        { top: "25%", right: "8%", size: 3 },
        { top: "60%", left: "3%", size: 2 },
        { bottom: "20%", right: "5%", size: 4 },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{
            ...dot,
            width: dot.size,
            height: dot.size,
            background: "#2dd4c4",
            opacity: 0.4,
            animationDuration: `${2 + i * 0.7}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* heading */}
        <div className="mb-16">
          <p
            className="text-xs font-medium sans-serif uppercase mb-3"
            style={{ color: "#2dd4c4", letterSpacing: "0.25em" }}
          >
            My Journey
          </p>
          <h2
            className="font-extrabold leading-none"
            style={{
              fontFamily: "sans-serif",
              fontSize: "clamp(36px, 6vw, 52px)",
              color: "#e8f4f3",
            }}
          >
            Education
          </h2>
        </div>

        {/* timeline */}
        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(45,212,196,0.25) 15%, rgba(45,212,196,0.25) 85%, transparent)",
            }}
          />

          <div className="flex flex-col gap-12">
            {educationData.map((item, idx) => (
              <div
                key={item.id}
                className="grid items-center"
                style={{
                  gridTemplateColumns: "1fr 80px 1fr",
                  animation: `fadeUp 0.6s ease forwards`,
                  animationDelay: `${idx * 0.15}s`,
                  opacity: 0,
                }}
              >
                {item.side === "left" ? (
                  <>
                    <EducationCard item={item} isLeft={true} />
                    <GlowDot />
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <GlowDot />
                    <EducationCard item={item} isLeft={false} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* keyframes injected via style tag */}
      <style>{`
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}