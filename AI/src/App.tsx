import React from 'react';

export default function App() {
  return (
    <div className="dark bg-surface-container-lowest text-on-surface min-h-screen flex flex-col font-body-md text-body-md overflow-x-hidden">
      {/* TopNavBar (Shared Component) */}
      <nav className="bg-surface-container/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_0_20px_rgba(0,0,0,0.4)] flex justify-between items-center w-full px-margin-desktop h-16 fixed top-0 z-50">
        {/* Brand */}
        <div className="flex items-center gap-8">
          <div className="font-headline-md text-headline-md font-black tracking-tighter text-primary-fixed-dim drop-shadow-[0_0_8px_rgba(0,219,231,0.5)]">
            GLITCH_ADMIN
          </div>
          {/* Search Bar (on_left) */}
          <div className="hidden md:flex items-center bg-surface-container-low border border-outline-variant/50 rounded px-3 py-1.5 focus-within:border-primary-fixed-dim transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-2">search</span>
            <input className="bg-transparent border-none outline-none font-label-sm text-label-sm text-on-surface placeholder:text-on-surface-variant/50 w-48 focus:ring-0 p-0" placeholder="QUERY_SYSTEM..." type="text" />
          </div>
        </div>
        
        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 font-label-sm text-label-sm h-full pt-1">
          <li className="h-full flex items-center">
            <a className="text-on-surface-variant/70 hover:text-on-surface transition-colors duration-200 uppercase" href="#">Overview</a>
          </li>
          <li className="h-full flex items-center">
            <a className="text-on-surface-variant/70 hover:text-on-surface transition-colors duration-200 uppercase" href="#">Moderation</a>
          </li>
          <li className="h-full flex items-center">
            <a className="text-on-surface-variant/70 hover:text-on-surface transition-colors duration-200 uppercase" href="#">Finance</a>
          </li>
          <li className="h-full flex items-center">
            <a className="text-on-surface-variant/70 hover:text-on-surface transition-colors duration-200 uppercase" href="#">Users</a>
          </li>
          <li className="h-full flex items-center">
            <a className="text-primary-fixed border-b-2 border-primary-fixed-dim pb-1 shadow-[0_2px_10px_rgba(0,219,231,0.3)] uppercase" href="#">Logs</a>
          </li>
        </ul>
        
        {/* Trailing Actions */}
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:bg-white/5 hover:backdrop-blur-md p-2 rounded-full transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-on-surface-variant hover:bg-white/5 hover:backdrop-blur-md p-2 rounded-full transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">terminal</span>
          </button>
          <button className="text-on-surface-variant hover:bg-white/5 hover:backdrop-blur-md p-2 rounded-full transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden ml-2">
            <img alt="Administrator Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl5dh3Kgq1ToH9kz3OWgwLDVZrSg0M7AeqBwOGyuO16xeZ6pQZ-oj9BtAHHxUct8_LKg9Z0kJfYDNDLYDlTtXbSrNN41HjBZD7NjLroKN9QAPClSH2GWI580WzuyefRzCUrj7jYnqyzOL_lgEegQTTRTMeB63OWlMeMO_v3HLUDpmzCERfRKB6WnC10pA4TLa3qi5DjfdxIvVWALdMDyDmoyzEAlEf7bgc5d5L-to261hTczk2ABfmLtnWVFh8cbrZf5xIwhnUD-vn" />
          </div>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-24 pb-20 flex flex-col gap-8 relative z-10">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-fixed-dim/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant/20 pb-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-wider mb-2">Audit Logs</h1>
            <p className="font-label-sm text-label-sm text-on-surface-variant">NODE_CLUSTER: GAMMA-7 // REALTIME_TELEMETRY</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-surface-container border border-outline-variant/50 rounded px-4 py-2 flex items-center gap-3 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <div className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse shadow-[0_0_8px_rgba(116,245,255,0.8)]"></div>
              <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest">Live Stream</span>
              <div className="w-8 h-4 bg-primary-fixed/20 rounded-full relative cursor-pointer border border-primary-fixed/50 ml-2">
                <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-primary-fixed rounded-full shadow-[0_0_5px_rgba(116,245,255,1)]"></div>
              </div>
            </div>
            <button className="bg-surface-container border border-outline-variant/50 hover:border-primary-fixed-dim/50 text-on-surface font-label-sm text-label-sm px-4 py-2 rounded flex items-center gap-2 transition-all">
              <span className="material-symbols-outlined text-[16px]">download</span>
              EXPORT
            </button>
          </div>
        </header>

        {/* Filters Box */}
        <div className="bg-surface-container-low border border-outline-variant/30 rounded p-4 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px]">filter_alt</span>
          </div>
          {/* Search */}
          <div className="flex-1 min-w-[200px] bg-surface-container border border-outline-variant/50 rounded flex items-center px-3 py-1.5 focus-within:border-primary-fixed-dim transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant text-[16px] mr-2">search</span>
            <input className="bg-transparent border-none outline-none font-label-sm text-label-sm text-on-surface placeholder:text-on-surface-variant/50 w-full focus:ring-0 p-0" placeholder="GREP LOGS..." type="text" />
          </div>
          {/* Selects */}
          <select className="bg-surface-container border border-outline-variant/50 rounded font-label-sm text-label-sm text-on-surface px-3 py-1.5 focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim outline-none min-w-[140px] appearance-none cursor-pointer">
            <option value="all">EVENT: ALL</option>
            <option value="auth">EVENT: AUTH</option>
            <option value="deploy">EVENT: DEPLOY</option>
            <option value="mod">EVENT: MODERATION</option>
          </select>
          <select className="bg-surface-container border border-outline-variant/50 rounded font-label-sm text-label-sm text-on-surface px-3 py-1.5 focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim outline-none min-w-[140px] appearance-none cursor-pointer">
            <option value="all">STATUS: ALL</option>
            <option value="ok">STATUS: [OK]</option>
            <option value="warn">STATUS: [WARN]</option>
            <option value="fail">STATUS: [FAIL]</option>
          </select>
          <select className="bg-surface-container border border-outline-variant/50 rounded font-label-sm text-label-sm text-on-surface px-3 py-1.5 focus:border-primary-fixed-dim focus:ring-1 focus:ring-primary-fixed-dim outline-none min-w-[140px] appearance-none cursor-pointer">
            <option value="1h">TIME: LAST 1H</option>
            <option value="24h">TIME: LAST 24H</option>
            <option value="7d">TIME: LAST 7D</option>
          </select>
        </div>

        {/* The Terminal / Log Container */}
        <div className="relative flex-1 bg-[#0A0C10] border border-outline-variant/40 rounded-lg overflow-hidden flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.5)] scanlines">
          {/* Terminal Header Bar */}
          <div className="bg-surface-container-high border-b border-outline-variant/40 grid grid-cols-12 gap-4 px-6 py-3 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest sticky top-0 z-20">
            <div className="col-span-2">TIMESTAMP</div>
            <div className="col-span-2">EVENT_TYPE</div>
            <div className="col-span-3">ORIGIN_NODE</div>
            <div className="col-span-4">PAYLOAD_SUMMARY</div>
            <div className="col-span-1 text-right">STATUS</div>
          </div>
          {/* Log Entries List */}
          <div className="flex flex-col overflow-y-auto z-10 pb-4 relative">
            {/* Row 1 */}
            <div className="grid grid-cols-12 gap-4 px-6 py-2.5 border-b border-outline-variant/10 hover:bg-surface-container/50 transition-colors group cursor-crosshair font-label-sm text-label-sm">
              <div className="col-span-2 text-on-surface-variant/80">2023-10-27T14:32:01Z</div>
              <div className="col-span-2">
                <span className="border border-secondary/30 text-secondary bg-secondary/5 px-2 py-0.5 rounded uppercase">DEPLOY</span>
              </div>
              <div className="col-span-3 text-on-surface-variant">192.168.1.104 <span className="text-outline">:: US-EAST-1A</span></div>
              <div className="col-span-4 text-on-surface truncate group-hover:whitespace-normal group-hover:break-words opacity-90 group-hover:opacity-100 transition-opacity">
                Pushing artifacts to edge node [indie_core_v4.2.1-rc]
              </div>
              <div className="col-span-1 text-right text-primary-fixed-dim drop-shadow-[0_0_5px_rgba(0,219,231,0.5)]">[OK]</div>
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-12 gap-4 px-6 py-2.5 border-b border-outline-variant/10 hover:bg-surface-container/50 transition-colors group cursor-crosshair font-label-sm text-label-sm">
              <div className="col-span-2 text-on-surface-variant/80">2023-10-27T14:31:45Z</div>
              <div className="col-span-2">
                <span className="border border-primary-fixed/30 text-primary-fixed bg-primary-fixed/5 px-2 py-0.5 rounded uppercase">AUTH</span>
              </div>
              <div className="col-span-3 text-on-surface-variant">10.0.0.55 <span className="text-outline">:: EU-CENTRAL-1</span></div>
              <div className="col-span-4 text-on-surface truncate opacity-90">
                Session established for user: DEV_X99
              </div>
              <div className="col-span-1 text-right text-primary-fixed-dim drop-shadow-[0_0_5px_rgba(0,219,231,0.5)]">[OK]</div>
            </div>
            {/* Row 3 (Error) */}
            <div className="grid grid-cols-12 gap-4 px-6 py-2.5 border-b border-error/20 bg-error/5 hover:bg-error/10 transition-colors group cursor-crosshair font-label-sm text-label-sm">
              <div className="col-span-2 text-on-surface-variant/80">2023-10-27T14:30:12Z</div>
              <div className="col-span-2">
                <span className="border border-error/50 text-error bg-error/10 px-2 py-0.5 rounded uppercase">SYS_ERR</span>
              </div>
              <div className="col-span-3 text-on-surface-variant">172.16.254.1 <span className="text-outline">:: AP-SOUTH-1</span></div>
              <div className="col-span-4 text-on-surface truncate opacity-90 text-error/90">
                FATAL: Memory leak detected in container runtime. Rebooting node.
              </div>
              <div className="col-span-1 text-right text-error drop-shadow-[0_0_8px_rgba(255,180,171,0.6)] font-bold">[FAIL]</div>
            </div>
            {/* Row 4 */}
            <div className="grid grid-cols-12 gap-4 px-6 py-2.5 border-b border-outline-variant/10 hover:bg-surface-container/50 transition-colors group cursor-crosshair font-label-sm text-label-sm">
              <div className="col-span-2 text-on-surface-variant/80">2023-10-27T14:28:55Z</div>
              <div className="col-span-2">
                <span className="border border-outline-variant text-on-surface bg-surface px-2 py-0.5 rounded uppercase">MODERATION</span>
              </div>
              <div className="col-span-3 text-on-surface-variant">192.168.1.12 <span className="text-outline">:: US-WEST-2</span></div>
              <div className="col-span-4 text-on-surface truncate opacity-90">
                Flagged content removed. Asset ID: 88472-A. Rule: #44B
              </div>
              <div className="col-span-1 text-right text-primary-fixed-dim drop-shadow-[0_0_5px_rgba(0,219,231,0.5)]">[OK]</div>
            </div>
            {/* Row 5 (Warning) */}
            <div className="grid grid-cols-12 gap-4 px-6 py-2.5 border-b border-outline-variant/10 hover:bg-surface-container/50 transition-colors group cursor-crosshair font-label-sm text-label-sm">
              <div className="col-span-2 text-on-surface-variant/80">2023-10-27T14:25:01Z</div>
              <div className="col-span-2">
                <span className="border border-secondary-fixed-dim/50 text-secondary-fixed-dim bg-secondary-fixed-dim/10 px-2 py-0.5 rounded uppercase">API_RATE</span>
              </div>
              <div className="col-span-3 text-on-surface-variant">10.0.1.200 <span className="text-outline">:: US-EAST-1B</span></div>
              <div className="col-span-4 text-on-surface truncate opacity-90">
                Rate limit approaching threshold (85%) for endpoint /v2/metrics
              </div>
              <div className="col-span-1 text-right text-secondary-fixed-dim drop-shadow-[0_0_5px_rgba(209,188,255,0.5)]">[WARN]</div>
            </div>
            {/* Row 6 */}
            <div className="grid grid-cols-12 gap-4 px-6 py-2.5 border-b border-outline-variant/10 hover:bg-surface-container/50 transition-colors group cursor-crosshair font-label-sm text-label-sm">
              <div className="col-span-2 text-on-surface-variant/80">2023-10-27T14:20:33Z</div>
              <div className="col-span-2">
                <span className="border border-primary-fixed/30 text-primary-fixed bg-primary-fixed/5 px-2 py-0.5 rounded uppercase">AUTH</span>
              </div>
              <div className="col-span-3 text-on-surface-variant">192.168.1.104 <span className="text-outline">:: US-EAST-1A</span></div>
              <div className="col-span-4 text-on-surface truncate opacity-90">
                Token rotated successfully for daemon process.
              </div>
              <div className="col-span-1 text-right text-primary-fixed-dim drop-shadow-[0_0_5px_rgba(0,219,231,0.5)]">[OK]</div>
            </div>
            {/* Empty state padding */}
            <div className="flex-1 min-h-[100px] flex items-center justify-center text-on-surface-variant/30 font-label-sm text-label-sm uppercase">
              // EOF
            </div>
          </div>
        </div>
      </main>

      {/* Footer (Shared Component) */}
      <footer className="bg-surface-container-lowest/90 backdrop-blur-md border-t border-outline-variant/20 flex justify-between items-center w-full px-margin-desktop py-2 fixed bottom-0 z-40">
        {/* Copyright / Status */}
        <div className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim">
          SYSTEM STATUS: OPTIMAL // TELEMETRY ACTIVE
        </div>
        {/* Links */}
        <ul className="flex items-center gap-6 font-label-sm text-label-sm uppercase tracking-widest">
          <li>
            <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">API_V2.4</a>
          </li>
          <li>
            <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">LATENCY_12MS</a>
          </li>
          <li>
            <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">LOG_STREAM</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
