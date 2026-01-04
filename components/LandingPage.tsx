import React from 'react';
import { Sparkles, ShieldCheck, Zap, ArrowRight, CheckCircle2, FileText, Layout, Layers, BarChart3, Database, Globe } from 'lucide-react';

interface Props {
  onStart: () => void;
}

const LandingPage: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-sans">

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg shadow-md shadow-blue-600/20">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">CertGen<span className="text-blue-600">Pro</span></span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={onStart}
              className="px-6 py-2.5 bg-slate-900 text-white font-semibold text-sm rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:shadow-slate-300"
            >
              Launch Console
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
            <Zap size={14} className="fill-blue-600" />
            <span>Enterprise Edition 2.5 is Live</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.1]">
            Precision Engineering,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digitally Mastered.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-12">
            The industry standard for generating ISO/IEC 17025 compliant calibration certificates.
            Automate your lab's workflow with precision, security, and speed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={onStart}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 rounded-xl font-bold text-white text-lg flex items-center justify-center gap-2 hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all transform hover:-translate-y-1"
            >
              Start Generating <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-6 text-slate-500 font-medium text-sm">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> ISO 17025 Compliant</span>
              <span className="hidden sm:flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> 99.9% Uptime</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview Image (Abstract Representation) */}
        <div className="mt-20 max-w-6xl mx-auto rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50 p-2 overflow-hidden">
          <div className="rounded-lg bg-slate-50 border border-slate-100 aspect-[16/9] flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-center opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
            <div className="z-10 bg-white/90 backdrop-blur px-8 py-4 rounded-full border border-slate-200 shadow-xl font-bold text-slate-800 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              System Operational
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Engineered for Modern Labs</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Built by metrologists for metrologists. Every feature is designed to reduce error and increase throughput.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Regulatory Compliance",
                desc: "Templates pre-formatted strictly for ISO/IEC 17025:2017 standards validation.",
                color: "text-blue-600",
                bg: "bg-blue-100/50"
              },
              {
                icon: Layout,
                title: "Real-time Visualization",
                desc: "Instant PDF preview rendering with high-fidelity vector graphics.",
                color: "text-indigo-600",
                bg: "bg-indigo-100/50"
              },
              {
                icon: Database,
                title: "Data Integrity",
                desc: "Robust input validation using schema-based controls to prevent manual errors.",
                color: "text-emerald-600",
                bg: "bg-emerald-100/50"
              },
              {
                icon: Layers,
                title: "Dynamic Annexures",
                desc: "Modules for Eccentricity, Repeatability, and Weighing Performance tests.",
                color: "text-violet-600",
                bg: "bg-violet-100/50"
              },
              {
                icon: BarChart3,
                title: "Automated Calculations",
                desc: "Built-in uncertainty and error calculation engines based on input readings.",
                color: "text-amber-600",
                bg: "bg-amber-100/50"
              },
              {
                icon: Globe,
                title: "Cloud Ready",
                desc: "Export, share, and manage certificates securely from any authorized device.",
                color: "text-cyan-600",
                bg: "bg-cyan-100/50"
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 text-white p-1 rounded">
              <Sparkles size={16} />
            </div>
            <span className="font-bold text-slate-900 tracking-tight">CertGen Pro</span>
          </div>
          <div className="flex gap-8 text-sm font-bold text-slate-500">
            <a href="#" className="hover:text-blue-600 transition-colors">Documentation</a>
            <a href="#" className="hover:text-blue-600 transition-colors">API Status</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} ANC LABS GLOBAL
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;