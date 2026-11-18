import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Search, Compass, Rocket, Repeat } from 'lucide-react';

export const HowWeWork: React.FC = () => {
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
    <section className="py-20 bg-gradient-to-b from-white to-larken-lightBg border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Execution Model"
          title="How We Work With You"
          subtitle="A structured, transparent delivery methodology designed to eliminate risk and accelerate time-to-value."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((st, i) => (
            <div key={i} className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-extrabold text-slate-200 font-mono">
                  {st.number}
                </span>
                <div className="p-2 rounded-lg bg-blue-50 border border-blue-100">
                  {st.icon}
                </div>
              </div>
              <h3 className="text-base font-bold text-larken-navy">
                {st.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
