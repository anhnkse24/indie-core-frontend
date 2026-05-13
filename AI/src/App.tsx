import React from 'react';
import { ShoppingCart, Bell, User, AtSign, Key } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container dark">
      {/* TopNavBar Header Shell */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_0_20px_rgba(0,242,255,0.15)] flex justify-between items-center px-margin-desktop h-16">
        <div className="flex items-center gap-8">
          <span className="font-display-lg text-headline-md tracking-tighter text-primary-container italic">
            INDIE_CORE
          </span>
          <nav className="hidden md:flex gap-6 items-center">
            <a
              href="#"
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed transition-colors"
            >
              Store
            </a>
            <a
              href="#"
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed transition-colors"
            >
              Library
            </a>
            <a
              href="#"
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed transition-colors"
            >
              Community
            </a>
            <a
              href="#"
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary-fixed transition-colors"
            >
              Dev Portal
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <ShoppingCart className="w-6 h-6 text-on-surface-variant cursor-pointer hover:text-primary-container transition-colors" />
          </div>
          <Bell className="w-6 h-6 text-on-surface-variant cursor-pointer hover:text-primary-container transition-colors" />
          <div className="w-8 h-8 rounded-full border border-outline-variant/50 overflow-hidden bg-surface-container-high">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADLAd7BzcEVqWBN9TeXEaY2eF9Gc7cBDvQ8XUy7L7Y7YSsHdUPvfQj1vA2S0jldAsLVJLp1cyh448cleLTQbkllwI7_WwoakaOepE93Oey6rhSr3AZr0qZVfnZ7o9RMBV7Qyqoer8Z5ptKXHd5kgyv7u2E55IYrSOBput1qgTnF7ARM0xjBTipKipzdWa1wFRX2Oif1lRDfQjMCRTkaopwFV9xtn5K24bA320ChSyTcj7BS3keDFUSaxfEndVY_J5gY3sKh_gJmIBr"
              alt="User Profile Avatar"
            />
          </div>
        </div>
      </header>

      {/* Main Registration Canvas */}
      <main className="flex-1 flex items-center justify-center pt-16 pb-12 px-4">
        <div className="glass-panel w-full max-w-[520px] rounded-lg border border-white/10 p-10 flex flex-col gap-8 shadow-2xl relative overflow-hidden">
          {/* Decorative scanline effect */}
          <div className="absolute inset-0 scanline pointer-events-none opacity-20"></div>

          {/* Title Section */}
          <div className="relative z-10 space-y-2">
            <h1 className="font-display-lg text-headline-lg text-primary-container uppercase tracking-tight italic drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              CREATE_IDENTITY
            </h1>
            <p className="font-label-sm text-label-sm text-on-surface-variant opacity-70">
              ESTABLISHING SECURE PROTOCOLS FOR CORE_ACCESS_V2.4
            </p>
          </div>

          {/* Registration Form */}
          <form className="relative z-10 flex flex-col gap-5">
            <div className="space-y-1.5 group">
              <label className="font-label-sm text-label-sm text-on-surface-variant/80 px-1">
                USERNAME
              </label>
              <div className="flex items-center bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-0.5 transition-all duration-300 neon-border-focus">
                <User className="w-5 h-5 text-outline-variant mx-3" />
                <input
                  type="text"
                  placeholder="Enter operative handle..."
                  className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-on-surface font-body-md py-3 placeholder:text-outline-variant/40"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-label-sm text-label-sm text-on-surface-variant/80 px-1">
                EMAIL
              </label>
              <div className="flex items-center bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-0.5 transition-all duration-300 neon-border-focus">
                <AtSign className="w-5 h-5 text-outline-variant mx-3" />
                <input
                  type="email"
                  placeholder="direct_link@indie_core.net"
                  className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-on-surface font-body-md py-3 placeholder:text-outline-variant/40"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-label-sm text-label-sm text-on-surface-variant/80 px-1">
                  PASSWORD
                </label>
                <div className="flex items-center bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-0.5 transition-all duration-300 neon-border-focus">
                  <input
                    type="password"
                    placeholder="********"
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-on-surface font-body-md py-3 px-4 placeholder:text-outline-variant/40"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="font-label-sm text-label-sm text-on-surface-variant/80 px-1">
                  CONFIRM
                </label>
                <div className="flex items-center bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-0.5 transition-all duration-300 neon-border-focus">
                  <input
                    type="password"
                    placeholder="********"
                    className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-on-surface font-body-md py-3 px-4 placeholder:text-outline-variant/40"
                  />
                </div>
              </div>
            </div>

            {/* Developer Toggle */}
            <div className="flex items-center justify-between p-4 bg-surface-container/50 border border-outline-variant/20 rounded-lg mt-2">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-primary-fixed">
                  REGISTER AS DEVELOPER
                </span>
                <span className="text-[10px] text-on-surface-variant/60 font-mono">
                  ENABLES DEV_PORTAL & ENGINE_RESOURCES
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary-container"></div>
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-primary-container text-on-primary-fixed font-headline-md py-4 rounded-lg active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(0,242,255,0.4)] relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              REGISTER
            </button>

            <p className="text-center font-label-sm text-label-sm text-on-surface-variant/50 mt-4">
              ALREADY SYNCHRONIZED?{' '}
              <a href="#" className="text-secondary hover:text-primary-container transition-colors">
                LOGIN_PORTAL
              </a>
            </p>
          </form>
        </div>
      </main>

      {/* Footer Shell */}
      <footer className="fixed bottom-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-md border-t border-outline-variant/20 flex justify-between items-center px-margin-desktop py-2 text-[10px] opacity-70 font-label-sm text-label-sm font-mono text-secondary">
        <div className="hidden sm:flex gap-6 items-center">
          <span>SYSTEM STATUS: SECURE</span>
          <span className="opacity-40">//</span>
          <span>LATENCY: 24MS</span>
          <span className="opacity-40">//</span>
          <span>INDIE_CORE V2.4.0</span>
        </div>
        <div className="flex gap-8 items-center w-full sm:w-auto justify-center sm:justify-end">
          <a href="#" className="hover:text-primary-container transition-colors">
            Support
          </a>
          <a href="#" className="hover:text-primary-container transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary-container transition-colors">
            Telemetry Settings
          </a>
        </div>
      </footer>
    </div>
  );
}
