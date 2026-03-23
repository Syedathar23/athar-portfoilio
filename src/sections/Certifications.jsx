import React from 'react';
import { motion } from 'framer-motion';
import nptel from '../assets/nptel.png';
import udemy from '../assets/udemy.png';
const certifications = [
  {
    title: 'The Complete Full-stack Web Development Bootcamp by Udemy   ',
    body: 'Udemy',
    desc: 'Engineered full-stack web applications from the ground up using the MERN stack — building dynamic UIs with React, RESTful APIs with Express & Node.js, and scalable data models with MongoDB.',
    image: udemy, // Replace with your certificate image path e.g: '/certs/llm.jpg'
    link: 'https://drive.google.com/file/d/1T0wYJ1tIUvkeLYjrBHkVGQC57IUBKyG0/view',
  },
  {
    title: 'Cloud Coumputing',
    body: 'NPTEL',
    desc: 'Completed NPTEL Cloud Computing certification — covering cloud architecture, service models (IaaS, PaaS, SaaS), virtualization, and deployment strategies for scalable distributed systems.',
    image: nptel,
    link: 'https://drive.google.com/file/d/17M5LWAfmHkXh3ujFnwyTZ-aJYiunz7s3/view?usp=drive_link',
  },
];

const achievements = [
  {
    stat: '100+',
    title: 'Algorithmic Problems (Multi-platform)',
    desc: 'DSA, complexity & analytical thinking',
    link: 'https://leetcode.com/u/Athar23m/',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-20 px-6 overflow-hidden" style={{ background: '#0a1628' }}>

      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 15% 30%, rgba(32,178,170,0.06) 0%, transparent 55%), radial-gradient(ellipse at 85% 70%, rgba(13,110,120,0.05) 0%, transparent 55%)',
        }}
      />

      {/* Floating dots */}
      {[
        { top: '10%', left: '4%', size: 3 },
        { top: '70%', right: '6%', size: 4 },
        { bottom: '15%', left: '7%', size: 2 },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{
            ...dot,
            width: dot.size,
            height: dot.size,
            background: '#2dd4c4',
            opacity: 0.35,
            animationDuration: `${2 + i * 0.8}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="block text-xs font-medium uppercase mb-3"
          style={{ color: '#2dd4c4', letterSpacing: '0.25em' }}
        >
          CREDENTIALS
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.1 }}
          className="font-extrabold leading-tight mb-20 tracking-tight"
          style={{ fontSize: 'clamp(36px, 6vw, 52px)', color: '#e8f4f3' }}
        >
          Certifications &{' '}
          <span style={{ color: '#2dd4c4' }}>Achievements</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── Certifications Column ── */}
          <div>
            <h3
              className="font-black text-sm tracking-widest uppercase mb-10 pl-4"
              style={{
                color: '#e8f4f3',
                borderLeft: '4px solid #2dd4c4',
              }}
            >
              PROFESSIONAL CERTIFICATIONS
            </h3>

            <div className="flex flex-col gap-12">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="group"
                >
                  {/* Certificate Image Area */}
                  <div
                    className="relative w-full overflow-hidden mb-6 transition-all duration-500"
                    style={{
                      height: '224px',
                      borderRadius: '24px',
                      background: 'linear-gradient(135deg, #0f2235 0%, #0d2840 100%)',
                      border: '1px solid rgba(45,212,196,0.15)',
                      boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
                    }}
                  >
                    {/* Corner brackets */}
                    <div className="absolute top-4 left-4 w-5 h-5 z-10" style={{ borderTop: '2px solid rgba(45,212,196,0.5)', borderLeft: '2px solid rgba(45,212,196,0.5)' }} />
                    <div className="absolute top-4 right-4 w-5 h-5 z-10" style={{ borderTop: '2px solid rgba(45,212,196,0.5)', borderRight: '2px solid rgba(45,212,196,0.5)' }} />
                    <div className="absolute bottom-4 left-4 w-5 h-5 z-10" style={{ borderBottom: '2px solid rgba(45,212,196,0.5)', borderLeft: '2px solid rgba(45,212,196,0.5)' }} />
                    <div className="absolute bottom-4 right-4 w-5 h-5 z-10" style={{ borderBottom: '2px solid rgba(45,212,196,0.5)', borderRight: '2px solid rgba(45,212,196,0.5)' }} />

                    {/* Hover border glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
                      style={{ border: '1px solid rgba(45,212,196,0.4)', borderRadius: '24px' }}
                    />

                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-center p-6">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center relative transition-all duration-300"
                          style={{
                            background: 'rgba(45,212,196,0.1)',
                            border: '2px solid rgba(45,212,196,0.35)',
                            boxShadow: '0 0 20px rgba(45,212,196,0.15)',
                          }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 15l-4 4 1-5L5 10l5-.5L12 5l2 4.5 5 .5-4 4 1 5z"
                              stroke="#2dd4c4" strokeWidth="1.5" strokeLinejoin="round" />
                          </svg>
                          <div
                            className="absolute inset-0 rounded-full"
                            style={{ border: '1px dashed rgba(45,212,196,0.25)', transform: 'scale(1.35)' }}
                          />
                        </div>
                        <div className="flex flex-col items-center gap-1.5 w-40">
                          <div className="w-full h-px" style={{ background: 'rgba(45,212,196,0.2)' }} />
                          <div className="w-3/4 h-2 rounded" style={{ background: 'rgba(45,212,196,0.1)' }} />
                          <div className="w-full h-1.5 rounded" style={{ background: 'rgba(45,212,196,0.07)' }} />
                          <div className="w-5/6 h-1.5 rounded" style={{ background: 'rgba(45,212,196,0.07)' }} />
                          <div className="w-full h-px" style={{ background: 'rgba(45,212,196,0.2)' }} />
                        </div>
                        <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'rgba(45,212,196,0.4)' }}>
                          Credential Artifact
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h4
                    className="font-black text-xl mb-1 transition-colors duration-200"
                    style={{ color: '#e8f4f3' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#2dd4c4'}
                    onMouseLeave={e => e.currentTarget.style.color = '#e8f4f3'}
                  >
                    {cert.title}
                  </h4>

                  {/* Issuer */}
                  <p className="font-bold text-xs uppercase tracking-wider mb-3" style={{ color: '#2dd4c4' }}>
                    {cert.body}
                  </p>

                  {/* Description */}
                  <p className="text-base leading-relaxed mb-6 max-w-md" style={{ color: '#6b9898' }}>
                    {cert.desc}
                  </p>

                  {/* View Button */}
                  <a
                    href={cert.link}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all duration-200"
                    style={{
                      background: '#2dd4c4',
                      color: '#0a1628',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#20b2aa'}
                    onMouseLeave={e => e.currentTarget.style.background = '#2dd4c4'}
                  >
                    View Certificate <span className="text-sm">↗</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Achievements Column ── */}
          <div>
            <h3
              className="font-black text-sm tracking-widest uppercase mb-10 pl-4"
              style={{
                color: '#e8f4f3',
                borderLeft: '4px solid rgba(45,212,196,0.4)',
              }}
            >
              KEY ACHIEVEMENTS
            </h3>

            <div className="flex flex-col gap-6">
              {achievements.map((ach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="group flex items-center gap-8 p-8 rounded-2xl transition-all duration-300"
                  style={{
                    background: '#0f2235',
                    border: '1px solid rgba(45,212,196,0.12)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(45,212,196,0.35)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(45,212,196,0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(45,212,196,0.12)';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Stat */}
                  <span
                    className="font-black tracking-tighter flex-shrink-0 min-w-[70px] transition-colors duration-200"
                    style={{ fontSize: 'clamp(36px, 5vw, 52px)', color: 'rgba(45,212,196,0.7)' }}
                  >
                    {ach.stat}
                  </span>

                  {/* Text */}
                  <div className="flex-1">
                    <h4 className="font-black text-lg leading-snug mb-1" style={{ color: '#e8f4f3' }}>
                      {ach.title}
                    </h4>
                    <p className="text-sm font-medium" style={{ color: '#6b9898' }}>
                      {ach.desc}
                    </p>
                  </div>

                  {/* Arrow link */}
                  <a
                    href={ach.link}
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:translate-x-1"
                    style={{
                      background: 'rgba(45,212,196,0.08)',
                      color: '#2dd4c4',
                      border: '1px solid rgba(45,212,196,0.2)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#2dd4c4';
                      e.currentTarget.style.color = '#0a1628';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(45,212,196,0.08)';
                      e.currentTarget.style.color = '#2dd4c4';
                    }}
                  >
                    <span className="text-lg">↗</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;