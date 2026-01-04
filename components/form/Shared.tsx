import React from 'react';

export const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
        {...props}
        className={`w-full bg-white border border-slate-300 rounded-md px-3 py-2 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder:text-slate-400 ${className || ''}`}
    />
);

export const Label = ({ children }: { children?: React.ReactNode }) => (
    <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-1.5 ml-0.5">{children}</label>
);
