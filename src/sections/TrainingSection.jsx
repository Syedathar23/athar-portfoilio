import React from 'react';
import { motion } from 'framer-motion';
import training from '../assets/training.png'

const certificates = [
  {
    title: 'Logic Building – Programming and Data Structures ',
    provider: 'Lovely Professional University',
    period: 'Jun – Jul 2025',
    desc: 'Solved real-world problems using structured methodologies, optimized coding techniques, and algorithmic thinking, technical proficiency.',
    tags: ['C++', 'Dsa', 'Leetcode'],
    certificate: training// Replace with your image path e.g: '/certs/android.jpg'
  },
  
];

const TrainingSection = () => {
  return (
    <section id="training" className="relative py-20 px-6 overflow-hidden" style={{ background: '#0a1628' }}>

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
          className="block text-xs font-medium uppercase mb-3 tracking-widest"
          style={{ color: '#2dd4c4', letterSpacing: '0.25em' }}
        >
          What I've Learned · My Arsenal
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.1 }}
          className="font-extrabold leading-none mb-16"
          style={{ fontSize: 'clamp(36px, 6vw, 52px)', color: '#e8f4f3' }}
        >
          Training
        </motion.h2>

        {/* Certificate Cards */}
        <div className="flex flex-col gap-20">
          {certificates.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.15 }}
              className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
            >
              {/* Certificate Image Area */}
              <div
                className="flex-1 w-full group relative overflow-hidden transition-all duration-500"
                style={{
                  aspectRatio: '4/3',
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #0f2235 0%, #0d2840 100%)',
                  border: '1px solid rgba(45,212,196,0.15)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
                }}
              >
                {/* Corner brackets */}
                <div className="absolute top-4 left-4 w-6 h-6 z-10" style={{ borderTop: '2px solid rgba(45,212,196,0.5)', borderLeft: '2px solid rgba(45,212,196,0.5)' }} />
                <div className="absolute top-4 right-4 w-6 h-6 z-10" style={{ borderTop: '2px solid rgba(45,212,196,0.5)', borderRight: '2px solid rgba(45,212,196,0.5)' }} />
                <div className="absolute bottom-4 left-4 w-6 h-6 z-10" style={{ borderBottom: '2px solid rgba(45,212,196,0.5)', borderLeft: '2px solid rgba(45,212,196,0.5)' }} />
                <div className="absolute bottom-4 right-4 w-6 h-6 z-10" style={{ borderBottom: '2px solid rgba(45,212,196,0.5)', borderRight: '2px solid rgba(45,212,196,0.5)' }} />

                {/* Hover border glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
                  style={{ border: '1px solid rgba(45,212,196,0.4)', borderRadius: '24px' }}
                />

                {item.certificate ? (
                  <img
                    src={item.certificate}
                    alt={`${item.title} certificate`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 text-center">
                    {/* Seal */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center relative"
                      style={{
                        background: 'rgba(45,212,196,0.1)',
                        border: '2px solid rgba(45,212,196,0.35)',
                        boxShadow: '0 0 20px rgba(45,212,196,0.15)',
                      }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M12 15l-4 4 1-5L5 10l5-.5L12 5l2 4.5 5 .5-4 4 1 5z"
                          stroke="#2dd4c4" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{ border: '1px dashed rgba(45,212,196,0.25)', transform: 'scale(1.35)' }}
                      />
                    </div>

                    {/* Decorative lines */}
                    <div className="flex flex-col items-center gap-2 w-48">
                      <div className="w-full h-px" style={{ background: 'rgba(45,212,196,0.2)' }} />
                      <div className="w-3/4 h-2 rounded" style={{ background: 'rgba(45,212,196,0.1)' }} />
                      <div className="w-full h-1.5 rounded" style={{ background: 'rgba(45,212,196,0.07)' }} />
                      <div className="w-5/6 h-1.5 rounded" style={{ background: 'rgba(45,212,196,0.07)' }} />
                      <div className="w-full h-px" style={{ background: 'rgba(45,212,196,0.2)' }} />
                    </div>

                    <p className="text-xs uppercase tracking-widest font-mono" style={{ color: 'rgba(45,212,196,0.4)' }}>
                      Training Credential Artifact
                    </p>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex-1 flex flex-col justify-center">
                {/* Period */}
                <span className="font-mono text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#4a7575' }}>
                  {item.period}
                </span>

                {/* Title */}
                <h3
                  className="font-black mb-2 tracking-tight leading-tight"
                  style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: '#e8f4f3' }}
                >
                  {item.title}
                </h3>

                {/* Provider */}
                <p className="text-base font-bold mb-6" style={{ color: '#2dd4c4' }}>
                  {item.provider}
                </p>

                {/* Divider */}
                <div className="w-12 h-0.5 mb-6" style={{ background: 'rgba(45,212,196,0.3)' }} />

                {/* Description */}
                <p className="text-base leading-relaxed mb-8 max-w-xl" style={{ color: '#6b9898' }}>
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-tight transition-colors duration-200 cursor-default"
                      style={{
                        background: 'rgba(45,212,196,0.06)',
                        border: '1px solid rgba(45,212,196,0.12)',
                        color: '#7fa8a5',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = '#2dd4c4';
                        e.currentTarget.style.borderColor = 'rgba(45,212,196,0.35)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = '#7fa8a5';
                        e.currentTarget.style.borderColor = 'rgba(45,212,196,0.12)';
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;