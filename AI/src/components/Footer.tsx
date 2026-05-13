import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-surface-container-lowest/90 backdrop-blur-md border-t border-outline-variant/20 flex justify-between items-center w-full px-margin-desktop py-2 fixed bottom-0 z-40">
      <div className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest">
        SYSTEM STATUS: OPTIMAL // TELEMETRY ACTIVE
      </div>
      <div className="flex gap-6">
        <a className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">API_V2.4</a>
        <a className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">LATENCY_12MS</a>
        <a className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">LOG_STREAM</a>
      </div>
    </footer>
  );
};
