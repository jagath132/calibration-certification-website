import React from 'react';
import { CertificateData, AnnexureRow } from '../../types';
import { Paperclip, Trash2, Plus } from 'lucide-react';
import { Input, Label } from './Shared';

interface Props {
    data: CertificateData;
    onRootUpdate: (field: keyof CertificateData, value: any) => void;
    onAnnexureRowsChange: (rows: AnnexureRow[]) => void;
}

const AnnexureSection: React.FC<Props> = ({ data, onRootUpdate, onAnnexureRowsChange }) => {

    const addAnnexureRow = () => {
        const newRow: AnnexureRow = {
            id: Math.random().toString(36).substr(2, 9),
            deadWeight: '',
            loading: '',
            unloading: ''
        };
        onAnnexureRowsChange([...data.annexureRows, newRow]);
    };

    const removeAnnexureRow = (id: string) => {
        onAnnexureRowsChange(data.annexureRows.filter(r => r.id !== id));
    };

    const updateAnnexureRow = (id: string, field: keyof AnnexureRow, value: string) => {
        onAnnexureRowsChange(data.annexureRows.map(r => r.id === id ? { ...r, [field]: value } : r));
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-pink-50 rounded-lg"><Paperclip className="text-pink-600" /></div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800">Annexure Data</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-pink-50/50 p-6 rounded-xl border border-pink-100">
                <div><Label>Acceptable Error</Label><Input value={data.acceptableError} onChange={e => onRootUpdate('acceptableError', e.target.value)} /></div>
                <div><Label>Combined Variance</Label><Input value={data.combinedVariance} onChange={e => onRootUpdate('combinedVariance', e.target.value)} /></div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-1 bg-slate-50 border-b border-slate-200 grid grid-cols-10 gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider px-4 py-3 min-w-[500px]">
                    <div className="col-span-3">Dead Wt</div>
                    <div className="col-span-3">Loading</div>
                    <div className="col-span-3">Unloading</div>
                    <div className="col-span-1 text-center">Del</div>
                </div>
                <div className="p-2 space-y-1 overflow-x-auto">
                    <div className="min-w-[500px]">
                        {data.annexureRows.map((row) => (
                            <div key={row.id} className="grid grid-cols-10 gap-2 items-center mb-1">
                                <div className="col-span-3"><Input className="h-9" value={row.deadWeight} onChange={e => updateAnnexureRow(row.id, 'deadWeight', e.target.value)} /></div>
                                <div className="col-span-3"><Input className="h-9" value={row.loading} onChange={e => updateAnnexureRow(row.id, 'loading', e.target.value)} /></div>
                                <div className="col-span-3"><Input className="h-9" value={row.unloading} onChange={e => updateAnnexureRow(row.id, 'unloading', e.target.value)} /></div>
                                <div className="col-span-1 flex justify-center"><button onClick={() => removeAnnexureRow(row.id)} className="text-slate-300 hover:text-red-500 transition-colors"><Trash2 size={16} /></button></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-3 border-t border-slate-100 bg-slate-50">
                    <button onClick={addAnnexureRow} className="flex items-center gap-2 text-pink-600 text-sm font-bold hover:text-pink-700 px-3 py-1.5 rounded-lg hover:bg-pink-100 transition-colors w-full justify-center"><Plus size={16} /> Add Annexure Row</button>
                </div>
            </div>
        </div>
    );
};

export default AnnexureSection;
