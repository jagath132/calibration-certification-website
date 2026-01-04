import React from 'react';
import { Sparkles, ShieldCheck, Zap, ArrowRight, CheckCircle2, FileText, Layout, Layers, BarChart3, Database, Globe, Lock, TrendingUp, Users, Award } from 'lucide-react';

interface Props {
  onStart: () => void;
}

const LandingPage: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-sans relative">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-blue-100/30 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-indigo-100/30 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-100/20 rounded-full blur-[140px]"></div>
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-200/50 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-default">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2.5 rounded-xl shadow-lg shadow-blue-600/20 group-hover:shadow-blue-600/30 transition-shadow duration-300">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900">CertGen<span className="text-blue-600">Pro</span></span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Enterprise</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onStart}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
              aria-label="Launch the application"
            >
              Launch Console
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">
              <Zap size={14} className="fill-blue-600 animate-pulse" />
              <span>Enterprise Edition 2.5 is Live</span>
            </div>

            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Precision Engineering,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                  Digitally Mastered.
                </span>
              </h1>
              <p className="max-w-3xl mx-auto text-slate-600 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
                The industry standard for generating ISO/IEC 17025 compliant calibration certificates.
                <span className="block mt-2 text-slate-500 text-base md:text-lg">
                  Automate your lab's workflow with precision, security, and speed.
                </span>
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <button
                onClick={onStart}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-bold text-white text-lg flex items-center justify-center gap-3 hover:from-blue-700 hover:to-indigo-700 shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden"
                aria-label="Start generating certificates"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Generating
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600 font-semibold text-sm">
                <span className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50 shadow-sm">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  ISO 17025 Compliant
                </span>
                <span className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50 shadow-sm">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  99.9% Uptime
                </span>
                <span className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50 shadow-sm">
                  <Lock size={18} className="text-blue-500" />
                  AES-256 Encryption
                </span>
              </div>
            </div>
          </div>

          {/* Dashboard Preview - Enhanced */}
          <div className="mt-24 max-w-6xl mx-auto animate-in fade-in zoom-in-95 duration-1000 delay-300">
            <div className="relative rounded-3xl border border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-900/10 p-3 overflow-hidden group">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/50 aspect-[16/9] flex items-center justify-center overflow-hidden">
                {/* Abstract Pattern Background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
                
                {/* Status Indicator */}
                <div className="relative z-10 bg-white/95 backdrop-blur-md px-8 py-4 rounded-full border border-slate-200/50 shadow-2xl font-bold text-slate-800 flex items-center gap-3 group/status hover:shadow-3xl transition-all">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
                  </div>
                  <span>System Operational</span>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-32 h-8 bg-white/40 backdrop-blur-sm rounded-lg border border-white/50"></div>
                <div className="absolute top-4 right-4 w-24 h-8 bg-white/40 backdrop-blur-sm rounded-lg border border-white/50"></div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-12 bg-white/40 backdrop-blur-sm rounded-lg border border-white/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - New */}
      <section className="relative py-16 px-6 z-10 border-y border-slate-200/50 bg-slate-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '500+', label: 'Active Labs', color: 'text-blue-600' },
              { icon: FileText, value: '50K+', label: 'Certificates', color: 'text-indigo-600' },
              { icon: Award, value: '99.9%', label: 'Uptime', color: 'text-emerald-600' },
              { icon: TrendingUp, value: '24/7', label: 'Support', color: 'text-violet-600' },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2 group">
                <div className={`inline-flex p-3 rounded-2xl bg-white border border-slate-200 shadow-sm group-hover:shadow-md transition-all ${stat.color.replace('text-', 'bg-').replace('-600', '-50')}`}>
                  <stat.icon className={`${stat.color} w-6 h-6`} />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-slate-900">{stat.value}</div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative py-24 px-6 z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Modern Labs</span>
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600 text-lg font-medium">
              Built by metrologists for metrologists. Every feature is designed to reduce error and increase throughput.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Regulatory Compliance",
                desc: "Templates pre-formatted strictly for ISO/IEC 17025:2017 standards validation.",
                color: "text-blue-600",
                bg: "bg-blue-50",
                border: "border-blue-100"
              },
              {
                icon: Layout,
                title: "Real-time Visualization",
                desc: "Instant PDF preview rendering with high-fidelity vector graphics.",
                color: "text-indigo-600",
                bg: "bg-indigo-50",
                border: "border-indigo-100"
              },
              {
                icon: Database,
                title: "Data Integrity",
                desc: "Robust input validation using schema-based controls to prevent manual errors.",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                border: "border-emerald-100"
              },
              {
                icon: Layers,
                title: "Dynamic Annexures",
                desc: "Modules for Eccentricity, Repeatability, and Weighing Performance tests.",
                color: "text-violet-600",
                bg: "bg-violet-50",
                border: "border-violet-100"
              },
              {
                icon: BarChart3,
                title: "Automated Calculations",
                desc: "Built-in uncertainty and error calculation engines based on input readings.",
                color: "text-amber-600",
                bg: "bg-amber-50",
                border: "border-amber-100"
              },
              {
                icon: Globe,
                title: "Cloud Ready",
                desc: "Export, share, and manage certificates securely from any authorized device.",
                color: "text-cyan-600",
                bg: "bg-cyan-50",
                border: "border-cyan-100"
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="group relative p-8 rounded-3xl bg-white border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1"
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-3xl ${feature.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${feature.bg} ${feature.border} border-2 flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <feature.icon size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - New */}
      <section className="relative py-24 px-6 z-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 border-y border-slate-200/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ready to Transform Your Lab?
          </h2>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Join hundreds of calibration labs already using CertGenPro to streamline their workflow.
          </p>
          <button
            onClick={onStart}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-bold text-white text-lg hover:from-blue-700 hover:to-indigo-700 shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            aria-label="Get started with CertGenPro"
          >
            Get Started Free
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-slate-200 bg-white z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-xl shadow-md shadow-blue-600/20">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-slate-900 tracking-tight text-lg">CertGen<span className="text-blue-600">Pro</span></span>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Enterprise Edition</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm font-bold text-slate-500">
              <a href="#" className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1" aria-label="Documentation">Documentation</a>
              <a href="#" className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1" aria-label="API Status">API Status</a>
              <a href="#" className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1" aria-label="Support">Support</a>
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest text-center md:text-right">
              &copy; {new Date().getFullYear()} ANC LABS GLOBAL
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
