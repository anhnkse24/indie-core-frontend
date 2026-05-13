import { FC } from 'react';

export const MetricsGrid: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-12">
      {/* Metric Card 1 */}
      <div className="bg-surface-container/40 backdrop-blur-[12px] border border-outline-variant/30 rounded-xl p-6 relative overflow-hidden group hover:border-primary-fixed-dim/50 transition-colors duration-300">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <span className="material-symbols-outlined text-display-lg text-primary-fixed-dim">monitoring</span>
        </div>
        <h2 className="font-label-sm text-label-sm text-on-surface-variant mb-4 uppercase">Total Revenue (YTD)</h2>
        <div className="font-display-lg text-[48px] text-on-surface mb-2 font-black tracking-tight flex items-baseline gap-2">
          <span className="text-primary-fixed-dim font-body-md text-headline-md">$</span>2.48<span className="text-headline-md text-on-surface-variant">M</span>
        </div>
        <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary-fixed-dim">
          <span className="material-symbols-outlined text-[16px] text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
          +14.2% VS LAST CYCLE
        </div>
      </div>

      {/* Metric Card 2 */}
      <div className="bg-surface-container/40 backdrop-blur-[12px] border border-outline-variant/30 rounded-xl p-6 relative overflow-hidden group hover:border-secondary/50 transition-colors duration-300">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <span className="material-symbols-outlined text-display-lg text-secondary">payments</span>
        </div>
        <h2 className="font-label-sm text-label-sm text-on-surface-variant mb-4 uppercase">Pending Payouts</h2>
        <div className="font-display-lg text-[48px] text-on-surface mb-2 font-black tracking-tight flex items-baseline gap-2">
          <span className="text-secondary font-body-md text-headline-md">$</span>142<span className="text-headline-md text-on-surface-variant">K</span>
        </div>
        <div className="flex items-center gap-2 font-label-sm text-label-sm text-secondary">
          <span className="material-symbols-outlined text-[16px]">schedule</span>
          AWAITING CLEARANCE
        </div>
      </div>

      {/* Metric Card 3 */}
      <div className="bg-surface-container/40 backdrop-blur-[12px] border border-outline-variant/30 rounded-xl p-6 relative overflow-hidden group hover:border-outline/50 transition-colors duration-300">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <span className="material-symbols-outlined text-display-lg text-on-surface">handshake</span>
        </div>
        <h2 className="font-label-sm text-label-sm text-on-surface-variant mb-4 uppercase">Active Contracts</h2>
        <div className="font-display-lg text-[48px] text-on-surface mb-2 font-black tracking-tight">
          843
        </div>
        <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
          <span className="material-symbols-outlined text-[16px]">check_circle</span>
          ACROSS 12 REGIONS
        </div>
      </div>
    </div>
  );
};
