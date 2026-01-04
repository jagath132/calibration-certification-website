import React from 'react';
import { CertificateData, WeighingPerformanceRow } from '../../types';
import { BarChart3, Trash2, Plus } from 'lucide-react';
import { Input } from './Shared';

interface Props {
    data: CertificateData;
    onRepeatabilityChange: (newRep: any[]) => void;
    onEccentricityChange: (newEcc: any[]) => void;
    onWeighingPerformanceChange: (newPerf: WeighingPerformanceRow[]) => void;
}

const ResultsSection: React.FC<Props> = ({ data, onRepeatabilityChange, onEccentricityChange, onWeighingPerformanceChange }) => {

    const updateRepeatability = (index: number, field: string, value: string) => {
        const newRep = [...data.repeatability];
        (newRep[index] as any)[field] = value;
        onRepeatabilityChange(newRep);
    };

    const updateEccentricity = (index: number, field: string, value: string) => {
        const newEcc = [...data.eccentricity];
        (newEcc[index] as any)[field] = value;
        onEccentricityChange(newEcc);
    };

    const addWeighingRow = () => {
        const newRow: WeighingPerformanceRow = {
            id: Math.random().toString(36).substr(2, 9),
            nominal: '',
            certified: '',
            reading: ''
        };
        onWeighingPerformanceChange([...data.weighingPerformance, newRow]);
    };

    const removeWeighingRow = (id: string) => {
        onWeighingPerformanceChange(data.weighingPerformance.filter(r => r.id !== id));
    };

    const updateWeighingRow = (id: string, field: keyof WeighingPerformanceRow, value: string) => {
        onWeighingPerformanceChange(data.weighingPerformance.map(r => r.id === id ? { ...r, [field]: value } : r));
    };


    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-violet-50 rounded-lg"><BarChart3 className="text-violet-600" /></div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800">Test Results</h2>
            </div>

            {/* Repeatability */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 font-bold text-slate-700">A. Repeatability Test</div>
                <div className="p-4 overflow-x-auto">
                    <table className="w-full text-sm min-w-[600px]">
                        <thead>
                            <tr className="text-left text-slate-400">
                                <th className="pb-3 pl-2">#</th>
                                <th className="pb-3">Half Load</th>
                                <th className="pb-3">DUC Reading</th>
                                <th className="pb-3">Full Load</th>
                                <th className="pb-3">DUC Reading</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.repeatability.map((row, idx) => (
                                <tr key={idx}>
                                    <td className="py-2 pl-2 text-slate-500 font-medium">{idx + 1}</td>
                                    <td className="pr-2"><Input className="h-9" value={row.halfLoad} onChange={e => updateRepeatability(idx, 'halfLoad', e.target.value)} /></td>
                                    <td className="pr-2"><Input className="h-9" value={row.ducHalf} onChange={e => updateRepeatability(idx, 'ducHalf', e.target.value)} /></td>
                                    <td className="pr-2"><Input className="h-9" value={row.fullLoad} onChange={e => updateRepeatability(idx, 'fullLoad', e.target.value)} /></td>
                                    <td className="pr-2"><Input className="h-9" value={row.ducFull} onChange={e => updateRepeatability(idx, 'ducFull', e.target.value)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Eccentricity */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 font-bold text-slate-700">B. Eccentricity Test</div>
                <div className="p-4 overflow-x-auto">
                    <table className="w-full text-sm min-w-[600px]">
                        <thead>
                            <tr className="text-left text-slate-400">
                                <th className="pb-3 pl-2">Position</th>
                                <th className="pb-3">Nominal</th>
                                <th className="pb-3">Certified</th>
                                <th className="pb-3">Reading</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.eccentricity.map((row, idx) => (
                                <tr key={idx}>
                                    <td className="py-2 pl-2 text-slate-500 font-medium text-xs">{row.position}</td>
                                    <td className="pr-2"><Input className="h-9" value={row.nominal} onChange={e => updateEccentricity(idx, 'nominal', e.target.value)} /></td>
                                    <td className="pr-2"><Input className="h-9" value={row.certified} onChange={e => updateEccentricity(idx, 'certified', e.target.value)} /></td>
                                    <td className="pr-2"><Input className="h-9" value={row.reading} onChange={e => updateEccentricity(idx, 'reading', e.target.value)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Weighing Performance */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 font-bold text-slate-700 flex justify-between items-center">
                    <span>C. Weighing Performance</span>
                    <button onClick={addWeighingRow} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-200 transition-colors flex items-center gap-1"><Plus size={12} /> Add</button>
                </div>
                <div className="p-4 space-y-2">
                    {data.weighingPerformance.map((row) => (
                        <div key={row.id} className="flex gap-2 items-center group">
                            <Input placeholder="Nominal" className="h-9 flex-1 min-w-[60px]" value={row.nominal} onChange={e => updateWeighingRow(row.id, 'nominal', e.target.value)} />
                            <Input placeholder="Certified" className="h-9 flex-1 min-w-[60px]" value={row.certified} onChange={e => updateWeighingRow(row.id, 'certified', e.target.value)} />
                            <Input placeholder="Reading" className="h-9 flex-1 min-w-[60px]" value={row.reading} onChange={e => updateWeighingRow(row.id, 'reading', e.target.value)} />
                            <button onClick={() => removeWeighingRow(row.id)} className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded transition-colors flex-shrink-0"><Trash2 size={16} /></button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ResultsSection;
