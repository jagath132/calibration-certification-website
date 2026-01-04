import React, { useState, useEffect } from 'react';
import { INITIAL_DATA, CertificateData } from './types';
import CertificateForm from './components/CertificateForm';
import CertificatePreview from './components/CertificatePreview';
import AnnexurePreview from './components/AnnexurePreview';
import LandingPage from './components/LandingPage';
import Auth from './components/Auth';
import { Sparkles, FileText, Edit2, Zap, Loader2, Download, LogOut, User as UserIcon } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import PDFDocument from './components/PDFDocument';
import { certificateSchema } from './utils/validation';
import { ZodError } from 'zod';

type AppState = 'landing' | 'auth' | 'app';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<CertificateData>(INITIAL_DATA);
  const [view, setView] = useState<'edit' | 'preview'>('edit');
  const [isGenerating, setIsGenerating] = useState(false);
  const [user, setUser] = useState<{ name: string, email: string } | null>(null);

  // Simple session check simulation
  useEffect(() => {
    const savedUser = localStorage.getItem('certgen_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
      setState('app');
    }
  }, []);

  const handleLogin = (userData: { name: string, email: string }) => {
    setUser(userData);
    setIsAuthenticated(true);
    setState('app');
    localStorage.setItem('certgen_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setState('landing');
    localStorage.removeItem('certgen_user');
  };

  const generatePDF = async () => {
    try {
      certificateSchema.parse(data);
    } catch (error) {
      if (error instanceof ZodError) {
        const firstError = error.issues[0];
        alert(`Validation Error: ${firstError.path.join('.')} - ${firstError.message}`);
        return;
      }
    }

    setIsGenerating(true);
    try {
      const blob = await pdf(<PDFDocument data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Certificate_${data.certificateNumber.replace(/[^a-z0-9]/gi, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(error);
      alert('Failed to generate PDF');
    } finally {
      setIsGenerating(false);
    }
  };

  if (state === 'landing') return <LandingPage onStart={() => setState('auth')} />;
  if (state === 'auth') return <Auth onAuthSuccess={handleLogin} onBack={() => setState('landing')} />;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800">
      {/* Dynamic Nav Bar */}
      <nav className="no-print bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20 items-center">

            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setView('edit')}>
              <div className="bg-blue-600 p-2 rounded-lg shadow-md shadow-blue-600/20">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="block font-bold text-lg tracking-tight text-slate-900">CertGen<span className="text-blue-600">Pro</span></span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Enterprise Edition</span>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-6">
              <div className="hidden lg:flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">{user?.name}</span>
              </div>

              <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button onClick={() => setView('edit')} className={`px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all ${view === 'edit' ? 'bg-white text-blue-700 shadow-sm ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}>
                  <Edit2 size={14} /> <span className="hidden sm:inline">Edit</span>
                </button>
                <button onClick={() => setView('preview')} className={`px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all ${view === 'preview' ? 'bg-white text-blue-700 shadow-sm ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}>
                  <FileText size={14} /> <span className="hidden sm:inline">Preview</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={generatePDF} disabled={isGenerating} className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all active:scale-95 disabled:opacity-50 shadow-md shadow-blue-500/20">
                  {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
                </button>
                <button onClick={handleLogout} className="p-2.5 bg-white text-slate-400 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all border border-slate-200 shadow-sm">
                  <LogOut size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow p-4 md:p-8 overflow-hidden w-full">
        <div className="max-w-[1800px] mx-auto">
          {view === 'edit' ? (
            <CertificateForm data={data} onChange={setData} />
          ) : (
            <div className="space-y-12 animate-in zoom-in-95 duration-500 pb-24" id="preview-container">
              <div className="flex flex-col items-center gap-12 w-full">
                <div className="preview-wrapper-multi"><CertificatePreview data={data} /></div>
                <div className="preview-wrapper-single"><AnnexurePreview data={data} /></div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="no-print py-6 px-6 border-t border-slate-200 bg-white text-center">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">Precision Engineering Suite &copy; {new Date().getFullYear()} ANC LABS</p>
      </footer>
    </div>
  );
};

export default App;