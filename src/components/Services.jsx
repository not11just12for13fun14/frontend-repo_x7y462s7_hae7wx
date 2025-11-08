import React from 'react';
import { Rocket, Film, Gamepad2, Wand2 } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Game Development',
    desc: 'Prototypes to production — systems, level design, and juicy feel.',
  },
  {
    icon: Film,
    title: 'Videography',
    desc: 'Cinematic shoots, edits, and motion graphics for promos and docs.',
  },
  {
    icon: Gamepad2,
    title: 'Interactive',
    desc: 'WebGL, XR, and playful microsites that invite people to explore.',
  },
  {
    icon: Wand2,
    title: 'Animation',
    desc: 'Character, 2D/3D, and title sequences with personality.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">A casual, collaborative studio building premium experiences in games, animation, and film.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 text-sm font-medium text-indigo-600 opacity-0 transition group-hover:opacity-100">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
