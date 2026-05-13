import React from 'react';
import { ShoppingCart, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(0,242,255,0.15)] docked full-width top-0 z-50 fixed w-full">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link to="/" className="font-display-lg text-headline-md text-surface-tint uppercase tracking-widest">
          INDIE_CORE
        </Link>

        <div className="hidden md:flex gap-8 items-center font-label-sm text-label-sm">
          <Link to="/" className="text-surface-tint font-bold border-b-2 border-surface-tint pb-1 hover:text-primary-fixed-dim transition-all duration-300 active:scale-95">Store</Link>
          <Link to="/library" className="text-on-surface-variant font-medium hover:text-primary-fixed-dim transition-all duration-300 active:scale-95">Library</Link>
          <Link to="/community" className="text-on-surface-variant font-medium hover:text-primary-fixed-dim transition-all duration-300 active:scale-95">Community</Link>
          <Link to="/dev-portal" className="text-on-surface-variant font-medium hover:text-primary-fixed-dim transition-all duration-300 active:scale-95">Dev Portal</Link>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden md:block font-label-sm text-label-sm text-surface-tint border border-surface-tint/50 px-4 py-2 rounded uppercase tracking-widest hover:bg-surface-tint/10 transition-colors">
            Support Dev
          </button>
          <div className="flex items-center gap-4 text-surface-tint">
            <button className="hover:text-primary-fixed-dim transition-all duration-300 active:scale-95">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button className="hover:text-primary-fixed-dim transition-all duration-300 active:scale-95">
              <Bell className="w-6 h-6" />
            </button>
            <Link to="/login" className="w-8 h-8 rounded-full bg-surface-container overflow-hidden border border-white/10 block hover:border-surface-tint transition-all cursor-pointer">
              <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbd2dT12ZtEf7c-mfxRSvXg2Fn5K64gg5sl24X3AEZbXN2TEtuJ-f9FVI9IsIMgSdHtbmj1OY4EPIU47YJ-SLFnn5lQSkmidlsoIpjrqCodm2AC9tU1s7RpJllR68lvcUXuBkngh5ml8HABcGICSnTBzCosIeDlx9BpKN5f8O_NiKTU0z7lS9JDulDJIDbsGMrPZHrU94xoSmGCwJ9JJjxHO5GQuAtq1Gd70ks3iGCg-JDCsC34-owmdY3jaOPqSurwOuvF_ZAWqyV"/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
