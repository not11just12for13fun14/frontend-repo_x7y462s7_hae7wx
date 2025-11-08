import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">Studio Casual</h3>
            <p className="mt-2 text-sm text-gray-600">Gaming • Animation • Videography • Interactive</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="rounded-full border border-gray-200 p-2 hover:bg-gray-50">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-full border border-gray-200 p-2 hover:bg-gray-50">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="rounded-full border border-gray-200 p-2 hover:bg-gray-50">
              <Youtube size={18} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Studio Casual. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
