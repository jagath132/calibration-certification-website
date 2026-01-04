import React from 'react';
import { CertificateData, MasterEquipment } from '../../types';
import { Gauge, Trash2, Plus } from 'lucide-react';
import { Input, Label } from './Shared';

interface Props {
    data: CertificateData;
    onUpdate: (section: keyof CertificateData, field: string, value: any) => void;
    onRootUpdate: (field: keyof CertificateData, value: any) => void;
    onMasterEquipmentChange: (equips: MasterEquipment[]) => void;
}

const EnvironmentSection: React.FC<Props> = ({ data, onUpdate, onRootUpdate, onMasterEquipmentChange }) => {

    const addMasterEquipment = () => {
        const newEquip: MasterEquipment = {
            id: Math.random().toString(36).substr(2, 9),
            description: '',
            traceability: ''
        };
        onMasterEquipmentChange([...data.masterEquipments, newEquip]);
    };

    const removeMasterEquipment = (id: string) => {
        onMasterEquipmentChange(data.masterEquipments.filter(e => e.id !== id));
    };

    const updateMasterEquipment = (id: string, field: keyof MasterEquipment, value: string) => {
        onMasterEquipmentChange(data.masterEquipments.map(e => e.id === id ? { ...e, [field]: value } : e));
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-teal-50 rounded-lg"><Gauge className="text-teal-600" /></div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800">Environment & Traceability</h2>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-xl border border-teal-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div><Label>Temperature</Label><Input className="bg-white/80" value={data.environment.temperature} onChange={e => onUpdate('environment', 'temperature', e.target.value)} /></div>
                    <div><Label>Rel. Humidity</Label><Input className="bg-white/80" value={data.environment.humidity} onChange={e => onUpdate('environment', 'humidity', e.target.value)} /></div>
                    <div><Label>Atmos. Pressure</Label><Input className="bg-white/80" value={data.environment.pressure} onChange={e => onUpdate('environment', 'pressure', e.target.value)} /></div>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-bold text-slate-700 mb-4">Master Equipment Used</h3>
                <div className="space-y-3">
                    {data.masterEquipments.map((eq, idx) => (
                        <div key={eq.id} className="flex flex-col md:flex-row gap-3 items-start md:items-center group bg-slate-50 p-3 rounded-lg md:bg-transparent md:p-0">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-sm font-bold flex-shrink-0">{idx + 1}</div>
                            <Input placeholder="Description / S.No" className="flex-1" value={eq.description} onChange={e => updateMasterEquipment(eq.id, 'description', e.target.value)} />
                            <Input placeholder="Traceability Details" className="flex-[2]" value={eq.traceability} onChange={e => updateMasterEquipment(eq.id, 'traceability', e.target.value)} />
                            <button onClick={() => removeMasterEquipment(eq.id)} className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors self-end md:self-auto"><Trash2 size={18} /></button>
                        </div>
                    ))}
                </div>
                <button onClick={addMasterEquipment} className="flex items-center gap-2 text-teal-600 text-sm font-bold mt-4 hover:text-teal-700 px-2 py-1 rounded-md hover:bg-teal-50 transition-colors"><Plus size={16} /> Add Equipment</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div><Label>Uncertainty</Label><Input value={data.uncertainty} onChange={e => onRootUpdate('uncertainty', e.target.value)} /></div>
                <div><Label>Methodology/SOP</Label><Input value={data.methodology} onChange={e => onRootUpdate('methodology', e.target.value)} /></div>
            </div>
        </div>
    );
};

export default EnvironmentSection;
