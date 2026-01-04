import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowLeft, Mail, Lock, User, ChevronRight, Loader2, Eye, EyeOff, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

interface Props {
  onAuthSuccess: (user: { name: string, email: string }) => void;
  onBack: () => void;
}

const Auth: React.FC<Props> = ({ onAuthSuccess, onBack }) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  // Reset form when switching modes
  useEffect(() => {
    setFormData({ name: '', email: '', password: '' });
    setShowPassword(false);
  }, [mode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      onAuthSuccess({
        name: formData.name || formData.email.split('@')[0],
        email: formData.email
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex font-sans selection:bg-blue-100 selection:text-blue-900 bg-slate-50 relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-100/30 rounded-full blur-[120px]"></div>
      </div>

      {/* Back Button - Mobile/Desktop */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold text-xs uppercase tracking-wider transition-all group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/50 shadow-sm hover:shadow-md"
        aria-label="Go back to home page"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
        <span className="hidden sm:inline">Back</span>
      </button>

      {/* Split Layout Container */}
      <div className="w-full flex flex-col lg:flex-row min-h-screen relative z-10">
        {/* Left Panel - Branding (Hidden on mobile, shown on desktop) */}
        <div className="hidden lg:flex lg:w-[60%] xl:w-[55%] flex-col justify-center items-center p-12 xl:p-16 relative bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white">
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>

          <div className="relative z-10 max-w-md w-full space-y-8 animate-in fade-in slide-in-from-left duration-700">
            {/* Logo/Brand */}
            <div className="space-y-4">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight">
                CertGen<span className="text-blue-200">Pro</span>
              </h1>
              <p className="text-blue-100 text-lg font-medium leading-relaxed">
                Precision Engineering, Digitally Mastered
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">ISO 17025 Compliant</h3>
                  <p className="text-blue-100/90 text-sm">Enterprise-grade security and compliance standards</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Lightning Fast</h3>
                  <p className="text-blue-100/90 text-sm">Generate certificates in seconds, not minutes</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">AES-256 Encryption</h3>
                  <p className="text-blue-100/90 text-sm">Your data is protected with military-grade encryption</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center gap-6 text-white/60 text-xs font-semibold uppercase tracking-wider">
            <span>Trusted by 500+ Labs</span>
            <span>•</span>
            <span>99.9% Uptime</span>
          </div>
        </div>

        {/* Right Panel - Auth Form */}
        <div className="flex-1 lg:w-[40%] xl:w-[45%] flex items-center justify-center p-6 sm:p-8 lg:p-12 xl:p-16">
          <div className="w-full max-w-md space-y-8 animate-in fade-in zoom-in-95 duration-500">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center space-y-3 mb-6">
              <div className="inline-flex justify-center items-center w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg shadow-blue-600/20">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                CertGen<span className="text-blue-600">Pro</span>
              </h1>
            </div>

            {/* Form Card */}
            <div className="bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl shadow-slate-200/50 rounded-3xl p-8 md:p-10 space-y-8">
              {/* Header */}
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                  {mode === 'login' ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p className="text-slate-500 font-medium">
                  {mode === 'login' 
                    ? 'Sign in to access your dashboard' 
                    : 'Join thousands of professionals'}
                </p>
              </div>

              {/* Mode Toggle - Enhanced */}
              <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className={`flex-1 px-4 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 ${
                    mode === 'login'
                      ? 'bg-white text-blue-700 shadow-sm ring-1 ring-black/5'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                  aria-pressed={mode === 'login'}
                  aria-label="Switch to login mode"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className={`flex-1 px-4 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200 ${
                    mode === 'signup'
                      ? 'bg-white text-blue-700 shadow-sm ring-1 ring-black/5'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                  aria-pressed={mode === 'signup'}
                  aria-label="Switch to signup mode"
                >
                  Sign Up
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name Field - Signup Only */}
                {mode === 'signup' && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <label 
                      htmlFor="name"
                      className="block text-xs font-bold text-slate-600 uppercase tracking-wider ml-1"
                    >
                      Full Name
                    </label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors duration-200">
                        <User size={18} aria-hidden="true" />
                      </div>
                      <input
                        id="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full bg-slate-50/80 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 font-medium"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        aria-label="Full name"
                        aria-required="true"
                      />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div className="space-y-2">
                  <label 
                    htmlFor="email"
                    className="block text-xs font-bold text-slate-600 uppercase tracking-wider ml-1"
                  >
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors duration-200">
                      <Mail size={18} aria-hidden="true" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full bg-slate-50/80 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 font-medium"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      aria-label="Email address"
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                    <label 
                      htmlFor="password"
                      className="block text-xs font-bold text-slate-600 uppercase tracking-wider"
                    >
                      Password
                    </label>
                    {mode === 'login' && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle forgot password
                        }}
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                        aria-label="Forgot password"
                      >
                        Forgot?
                      </button>
                    )}
                  </div>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors duration-200">
                      <Lock size={18} aria-hidden="true" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                      className="w-full bg-slate-50/80 border border-slate-200 rounded-xl py-3.5 pl-11 pr-12 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 font-sans font-medium"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={e => setFormData({ ...formData, password: e.target.value })}
                      aria-label="Password"
                      aria-required="true"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-1"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      aria-pressed={showPassword}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-sm uppercase tracking-wide shadow-xl shadow-blue-600/30 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-blue-600/30 flex items-center justify-center gap-2 mt-6 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  aria-label={mode === 'login' ? 'Sign in' : 'Create account'}
                  aria-busy={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} aria-hidden="true" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>{mode === 'login' ? 'Sign In' : 'Create Account'}</span>
                      <ChevronRight size={18} aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} />
                    ISO 17025 Compliant
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1.5">
                    <Lock size={14} />
                    AES-256 Encryption
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
