import { FC } from 'react';

export const ContractsTable: FC = () => {
  return (
    <div className="bg-surface-container/30 backdrop-blur-xl border border-outline-variant/20 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-low/50">
        <h3 className="font-headline-md text-headline-md text-on-surface">Contractual Agreements</h3>
        <button className="text-primary-fixed-dim hover:text-primary transition-colors font-label-sm text-label-sm flex items-center gap-1">
          VIEW_ALL_RECORDS <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-surface-container/50 border-b border-outline-variant/20">
              <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-normal">Developer ID</th>
              <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-normal">Project Asset</th>
              <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-normal">Royalty Split</th>
              <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-normal text-right">Net Yield</th>
              <th className="p-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-normal text-center">Status</th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant/10">
            {/* Row 1: Active */}
            <tr className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
              <td className="p-4 font-label-sm text-label-sm text-tertiary-fixed-dim">DEV_X902A</td>
              <td className="p-4 font-headline-md text-[16px] text-on-surface">Neon Drift Syndicate</td>
              <td className="p-4">
                <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-1 overflow-hidden flex">
                  <div className="bg-primary-fixed-dim h-full w-[70%]"></div>
                  <div className="bg-surface-variant h-full w-[30%]"></div>
                </div>
                <div className="flex justify-between mt-1 font-label-sm text-[10px] text-on-surface-variant">
                  <span>DEV: 70%</span>
                  <span>SYS: 30%</span>
                </div>
              </td>
              <td className="p-4 text-right font-label-sm text-label-sm text-on-surface">$12,450.00</td>
              <td className="p-4 text-center">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-primary-fixed-dim/30 bg-primary-fixed-dim/10 text-primary-fixed-dim font-label-sm text-[10px] uppercase shadow-[0_0_8px_rgba(0,219,231,0.2)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim animate-pulse"></span> Active
                </span>
              </td>
            </tr>

            {/* Row 2: Pending */}
            <tr className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
              <td className="p-4 font-label-sm text-label-sm text-tertiary-fixed-dim">DEV_M334Z</td>
              <td className="p-4 font-headline-md text-[16px] text-on-surface">Void Walker Protocol</td>
              <td className="p-4">
                <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-1 overflow-hidden flex">
                  <div className="bg-secondary h-full w-[85%]"></div>
                  <div className="bg-surface-variant h-full w-[15%]"></div>
                </div>
                <div className="flex justify-between mt-1 font-label-sm text-[10px] text-on-surface-variant">
                  <span>DEV: 85%</span>
                  <span>SYS: 15%</span>
                </div>
              </td>
              <td className="p-4 text-right font-label-sm text-label-sm text-on-surface-variant">--</td>
              <td className="p-4 text-center">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-secondary/30 bg-secondary/10 text-secondary font-label-sm text-[10px] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Pending
                </span>
              </td>
            </tr>

            {/* Row 3: Active */}
            <tr className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
              <td className="p-4 font-label-sm text-label-sm text-tertiary-fixed-dim">DEV_L112B</td>
              <td className="p-4 font-headline-md text-[16px] text-on-surface">Crimson Sector</td>
              <td className="p-4">
                <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-1 overflow-hidden flex">
                  <div className="bg-primary-fixed-dim h-full w-[60%]"></div>
                  <div className="bg-surface-variant h-full w-[40%]"></div>
                </div>
                <div className="flex justify-between mt-1 font-label-sm text-[10px] text-on-surface-variant">
                  <span>DEV: 60%</span>
                  <span>SYS: 40%</span>
                </div>
              </td>
              <td className="p-4 text-right font-label-sm text-label-sm text-on-surface">$8,920.50</td>
              <td className="p-4 text-center">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-primary-fixed-dim/30 bg-primary-fixed-dim/10 text-primary-fixed-dim font-label-sm text-[10px] uppercase shadow-[0_0_8px_rgba(0,219,231,0.2)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim animate-pulse"></span> Active
                </span>
              </td>
            </tr>

            {/* Row 4: Void */}
            <tr className="hover:bg-white/[0.02] transition-colors group cursor-pointer opacity-60">
              <td className="p-4 font-label-sm text-label-sm text-tertiary-fixed-dim">DEV_E999Q</td>
              <td className="p-4 font-headline-md text-[16px] text-on-surface-variant line-through decoration-error/50">Project: Echoes</td>
              <td className="p-4">
                <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-1 overflow-hidden flex">
                  <div className="bg-error h-full w-[0%]"></div>
                  <div className="bg-surface-variant h-full w-[100%]"></div>
                </div>
                <div className="flex justify-between mt-1 font-label-sm text-[10px] text-on-surface-variant">
                  <span>N/A</span>
                </div>
              </td>
              <td className="p-4 text-right font-label-sm text-label-sm text-error/70">$0.00</td>
              <td className="p-4 text-center">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-error/30 bg-error/10 text-error font-label-sm text-[10px] uppercase">
                  <span className="material-symbols-outlined text-[10px]">close</span> Void
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
