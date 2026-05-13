import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="bg-surface-container/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_0_20px_rgba(0,0,0,0.4)] flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-16 fixed top-0 z-50">
      {/* Left: Logo & Search */}
      <div className="flex items-center gap-gutter">
        <div className="font-headline-md text-headline-md font-black tracking-tighter text-primary-fixed-dim drop-shadow-[0_0_8px_rgba(0,219,231,0.5)]">
          GLITCH_ADMIN
        </div>
        {/* Search Bar (on_left) */}
        <div className="relative hidden md:block w-64 group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-fixed-dim transition-colors text-[18px]">
            search
          </span>
          <input 
            className="w-full bg-surface-container-highest border border-outline-variant rounded-lg py-1.5 pl-9 pr-3 font-label-sm text-label-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim focus:shadow-[0_0_10px_rgba(0,219,231,0.2)] transition-all bg-transparent" 
            placeholder="QUERY_RECORDS..." 
            type="text" 
          />
        </div>
      </div>

      {/* Center: Navigation */}
      <nav className="hidden lg:flex items-center gap-8 h-full">
        <a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-on-surface transition-colors duration-200 h-full flex items-center hover:bg-white/5 hover:backdrop-blur-md px-3" href="#">Overview</a>
        <a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-on-surface transition-colors duration-200 h-full flex items-center hover:bg-white/5 hover:backdrop-blur-md px-3" href="#">Moderation</a>
        {/* Active State */}
        <a className="font-label-sm text-label-sm text-primary-fixed border-b-2 border-primary-fixed-dim pb-1 shadow-[0_2px_10px_rgba(0,219,231,0.3)] h-full flex items-center brightness-125 scale-[0.99] transition-all px-3 relative" href="#">
          Finance
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-fixed-dim shadow-[0_0_8px_rgba(0,219,231,0.8)]"></div>
        </a>
        <a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-on-surface transition-colors duration-200 h-full flex items-center hover:bg-white/5 hover:backdrop-blur-md px-3" href="#">Users</a>
        <a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-on-surface transition-colors duration-200 h-full flex items-center hover:bg-white/5 hover:backdrop-blur-md px-3" href="#">Logs</a>
      </nav>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-4">
        <button className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
        </button>
        <button className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5">
          <span className="material-symbols-outlined text-[20px]">terminal</span>
        </button>
        <button className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors duration-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 mr-2">
          <span className="material-symbols-outlined text-[20px]">settings</span>
        </button>
        <div className="w-8 h-8 rounded border border-primary-fixed-dim/30 overflow-hidden relative group cursor-pointer shadow-[0_0_8px_rgba(0,219,231,0.1)]">
          <img 
            alt="Administrator Avatar" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUGaZFnYOxBrqz8RZaZxjRHbiZDj9yo_hR90PVta_-1XA-2vnE7J31IZgzGWAaqmxUrZKjxbFVdFDe43z7fMNt9GIRpUt95qXM7PGtcDzqXNTOQmnwrr1uWxejmhsZArKTeOBipnU70P7eE_nQNDZSkB2eaIUJmjgCLis8KuF7pQ2Kl7t6YZw5WXRfs0ijMT7c6ysx1PoCbXKx5m_Odz9gXL6Z7Hb-CfR4D339Dq_O_BYRGHdfCOUZ0dmU9e0Ae-mzFhO3vVHwpW6n" 
          />
        </div>
      </div>
    </header>
  );
};
