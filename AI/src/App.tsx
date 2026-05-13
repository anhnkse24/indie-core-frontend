import { ContractsTable } from './components/ContractsTable';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MetricsGrid } from './components/MetricsGrid';

export default function App() {
  return (
    <>
      <Header />
      
      {/* Main Content Canvas */}
      <main className="flex-grow max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop pt-24 pb-20">
        
        {/* Page Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant/20 pb-6">
          <div>
            <p className="font-label-sm text-label-sm text-primary-fixed-dim mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">account_balance</span>
              FINANCIAL TELEMETRY
            </p>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Global Ledger
            </h1>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-secondary text-secondary rounded font-label-sm text-label-sm hover:bg-secondary/10 transition-colors flex items-center gap-2 backdrop-blur-md">
              <span className="material-symbols-outlined text-[16px]">download</span>
              EXPORT_CSV
            </button>
            <button className="px-4 py-2 bg-primary-fixed-dim text-on-primary-fixed rounded font-label-sm text-label-sm font-bold hover:bg-primary-fixed transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(0,219,231,0.3)]">
              <span className="material-symbols-outlined text-[16px]">add</span>
              NEW_CONTRACT
            </button>
          </div>
        </div>

        <MetricsGrid />
        <ContractsTable />
        
      </main>

      <Footer />
    </>
  );
}
