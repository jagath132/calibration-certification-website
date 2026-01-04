import React from 'react';
import { CertificateData } from '../../types';
import { FileText } from 'lucide-react';
import { Input, Label } from './Shared';

interface Props {
    data: CertificateData;
    onChange: (field: keyof CertificateData, value: any) => void;
}

const HeaderSection: React.FC<Props> = ({ data, onChange }) => {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-indigo-50 rounded-lg"><FileText className="text-indigo-600" /></div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800">Certificate Header</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div><Label>Certificate No</Label><Input value={data.certificateNumber} onChange={e => onChange('certificateNumber', e.target.value)} /></div>
                <div><Label>Issue Date</Label><Input type="date" value={data.issueDate} onChange={e => onChange('issueDate', e.target.value)} /></div>
                <div><Label>Discipline</Label><Input value={data.discipline} onChange={e => onChange('discipline', e.target.value)} /></div>
                <div><Label>SRF No</Label><Input value={data.srfNo} onChange={e => onChange('srfNo', e.target.value)} /></div>
                <div><Label>SRF Date</Label><Input type="date" value={data.srfDate} onChange={e => onChange('srfDate', e.target.value)} /></div>
                <div><Label>Calibrated At</Label>
                    <select className="w-full bg-white border border-slate-300 rounded-md px-3 py-2 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200" value={data.calibratedAt} onChange={e => onChange('calibratedAt', e.target.value)}>
                        <option value="Onsite">Onsite</option>
                        <option value="Lab">Lab</option>
                    </select>
                </div>
                <div><Label>Condition on Receipt</Label><Input value={data.conditionReceipt} onChange={e => onChange('conditionReceipt', e.target.value)} /></div>
                <div><Label>Date of Calibration</Label><Input type="date" value={data.dateOfCalib} onChange={e => onChange('dateOfCalib', e.target.value)} /></div>
                <div><Label>Next Due Date</Label><Input type="date" value={data.nextCalibDate} onChange={e => onChange('nextCalibDate', e.target.value)} /></div>
            </div>
        </div>
    );
};

export default HeaderSection;
