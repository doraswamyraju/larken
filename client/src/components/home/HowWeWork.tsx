import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Search, Compass, Rocket, Repeat } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();

  const steps = [
    {
      number: '01',
      title: 'Discovery & Needs Assessment',
      desc: 'We dive deep into your technology stack, architectural bottlenecks, hiring objectives, and delivery timelines to define unambiguous milestones.',
      icon: <Search className="w-5 h-5 text-larken-blue" />,
    },
    {
      number: '02',
      title: 'Architecture & Talent Matching',
      desc: 'Our senior architects design tailored technical solutions or present shortlists of thoroughly vetted specialists matched to your culture and stack.',
      icon: <Compass className="w-5 h-5 text-larken-blue" />,
    },
    {
      number: '03',
      title: 'Agile Execution & Integration',
      desc: 'Whether building custom software or integrating new talent into your existing sprints, we align with your workflows, CI/CD pipelines, and tools.',
      icon: <Rocket className="w-5 h-5 text-larken-blue" />,
    },
    {
      number: '04',
      title: 'Governance & Optimization',
      desc: 'We uphold continuous oversight, transparent communication, code quality reviews, and iterative enhancements throughout the engagement lifecycle.',
      icon: <Repeat className="w-5 h-5 text-larken-blue" />,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-larken-lightBg border-t border-slate-200/60 relative overflow-hidden" ref={elementRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <SectionHeading
            badge="Execution Model"
            title="How We Work With You"
            subtitle="A structured, transparent delivery methodology designed to eliminate risk and accelerate time-to-value."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((st, i) => (
            <div 
              key={i} 
              className={`relative bg-white rounded-3xl p-7 border border-slate-200 shadow-soft hover-glow group transition-all duration-300 reveal-on-scroll ${
                isVisible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-4xl font-black text-slate-200 font-mono group-hover:text-larken-blue/30 transition-colors">
                  {st.number}
                </span>
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-larken-blue group-hover:text-white transition-all duration-300">
                  {st.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-larken-navy group-hover:text-larken-blue transition-colors">
                {st.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
