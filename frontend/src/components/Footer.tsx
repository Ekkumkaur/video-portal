import React from "react";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#1e2042] text-white mt-0 overflow-hidden font-sans">

      {/* Player Images - Absolute Positioned */}
      <div className="absolute left-0 bottom-28 z-0 hidden xl:block pointer-events-none">
        <img src="/foot1.png" alt="Player Left" className="h-[200px] object-contain opacity-80" />
      </div>
      <div className="absolute right-0 bottom-28 z-0 hidden xl:block pointer-events-none">
        <img src="/foot2.png" alt="Player Right" className="h-[200px] object-contain opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-10 py-12 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 text-sm">

          {/* Teams Column */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[18px] font-bold text-[#FFC928] mb-2">Teams</h3>
              <div className="h-[2px] w-[60px] bg-white/20"></div>
            </div>
            <ul className="space-y-3">
              {[
                "North East Panthers",
                "Central Strikers",
                "Western Heroes",
                "Norther Dabanggss",
                "Southern Lions",
                "Eastern Rhions",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 group cursor-pointer hover:translate-x-1 transition-transform">
                  <span className="text-[#FFC928] text-[10px]">▶</span>
                  <span className="text-gray-200 hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BRPL - T10 Column */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[18px] font-bold text-[#FFC928] mb-2">BRPL - T10</h3>
              <div className="h-[2px] w-[80px] bg-white/20"></div>
            </div>
            <ul className="space-y-3">
              {["About Us", "Videos", "News & Events"].map((item) => (
                <li key={item} className="flex items-center gap-2 group cursor-pointer hover:translate-x-1 transition-transform">
                  <span className="text-[#FFC928] text-[10px]">▶</span>
                  <span className="text-gray-200 hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            {/* Store Buttons */}
            <div className="flex gap-3 mt-2">
              <button className="flex items-center gap-2 bg-black border border-white/20 rounded-lg px-3 py-1.5 hover:bg-black/80 transition-colors">
                <div className="text-white">
                  <div className="text-[9px] uppercase leading-none">Download on the</div>
                  <div className="text-[13px] font-semibold leading-tight">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-black border border-white/20 rounded-lg px-3 py-1.5 hover:bg-black/80 transition-colors">
                <div className="text-white">
                  <div className="text-[9px] uppercase leading-none">GET IT ON</div>
                  <div className="text-[13px] font-semibold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* BRPL Guidelines Column */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[18px] font-bold text-[#FFC928] mb-2">BRPL Guidelines</h3>
              <div className="h-[2px] w-[120px] bg-white/20"></div>
            </div>
            <ul className="space-y-3">
              {[
                "Code of Conduct in Team Dougouts",
                "BRPL Commercial Guidelines",
                "Cricket Rulebook",
                "Cricket PMOA Guideline",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 group cursor-pointer hover:translate-x-1 transition-transform">
                  <span className="text-[#FFC928] text-[10px]">▶</span>
                  <span className="text-gray-200 hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[18px] font-bold text-[#FFC928] mb-2">Contact</h3>
              <div className="h-[2px] w-[60px] bg-white/20"></div>
            </div>
            <ul className="space-y-3">
              {[
                "Contact Us",
                "News",
                "Privacy & Policy",
                "Terms & Condition",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 group cursor-pointer hover:translate-x-1 transition-transform">
                  <span className="text-[#FFC928] text-[10px]">▶</span>
                  <span className="text-gray-200 hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-2">
              <h4 className="text-[#FFC928] text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                  <Twitter size={16} /> {/* Using Twitter icon for 'X' as close approximation or if X icon unavailable in this version */}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="w-full bg-black text-center py-8 text-[13px] text-white">
        <span>
          © Copyright 2025 | All Rights Reserved by Beyond Reach Premier League
        </span>
      </div>
    </footer>
  );
};

export default Footer;
