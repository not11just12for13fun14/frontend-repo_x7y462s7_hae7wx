import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient tint for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-white/0" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-6 pb-16 text-white">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/80">Creative Studio • Games • Animation • Film</p>
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          <span className="block">Playful worlds.</span>
          <span className="block text-white/90">Serious craft.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/85">
          We design interactive experiences across games, animation, and video — with a casual vibe and premium polish.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#services" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow hover:opacity-90 transition">
            Explore Services
          </a>
          <a href="#work" className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-sm hover:bg-white/10 transition">
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
