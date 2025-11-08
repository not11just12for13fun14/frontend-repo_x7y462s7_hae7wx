import React from 'react';

const projects = [
  {
    tag: 'Gameplay',
    title: 'Neon Drift',
    blurb: 'A stylized arcade racer built for instant flow and replayability.',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1600&auto=format&fit=crop',
  },
  {
    tag: 'Animation',
    title: 'Character Reels',
    blurb: 'Expressive 3D character vignettes with snappy timing.',
    image: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1600&auto=format&fit=crop',
  },
  {
    tag: 'Interactive',
    title: 'Web Playground',
    blurb: 'A playful microsite with physics-based interactions.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
  },
];

const Showcase = () => {
  return (
    <section id="work" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Featured work</h2>
            <p className="mt-3 text-gray-600">A mix of gameplay, animation, and interactive experiments.</p>
          </div>
          <a href="#contact" className="hidden text-sm font-semibold text-indigo-600 md:block">Start a project →</a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow">{p.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
