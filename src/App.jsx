import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-md text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-extrabold tracking-tight">Studio Casual</a>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#work" className="hover:opacity-80">Work</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black shadow md:inline-block hidden">Let’s Talk</a>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Showcase */}
      <Showcase />

      {/* CTA strip */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight">Ready to build something fun?</h3>
              <p className="mt-2 text-white/80">We keep it casual, collaborative, and laser-focused on the experience.</p>
            </div>
            <a href="#contact" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow hover:opacity-90 transition">Start a project</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
