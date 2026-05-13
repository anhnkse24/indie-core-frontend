import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-white/5 py-12 px-margin-mobile md:px-margin-desktop mt-auto">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Brand / Copyright */}
        <div className="space-y-4">
          <div className="font-headline-md text-headline-md text-surface-tint flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            INDIE_CORE
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            © 2024 INDIE_CORE COMMAND. ALL SYSTEMS NOMINAL.
          </p>
        </div>
        {/* Links */}
        <div className="flex flex-wrap md:justify-end gap-x-8 gap-y-4">
          <a className="font-label-sm text-label-sm text-on-tertiary-container hover:text-primary transition-colors" href="#">Terms of Protocol</a>
          <a className="font-label-sm text-label-sm text-on-tertiary-container hover:text-primary transition-colors" href="#">Privacy Encryption</a>
          <a className="font-label-sm text-label-sm text-on-tertiary-container hover:text-primary transition-colors" href="#">End User License</a>
          <a className="font-label-sm text-label-sm text-on-tertiary-container hover:text-primary transition-colors" href="#">Support Terminal</a>
        </div>
      </div>
    </footer>
  );
}
