import React from 'react';
import { CertificateData } from '../../types';
import { PenTool } from 'lucide-react';
import { Input, Label } from './Shared';

interface Props {
    data: CertificateData;
    onRootUpdate: (field: keyof CertificateData, value: any) => void;
}

const SignaturesSection: React.FC<Props> = ({ data, onRootUpdate }) => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-amber-50 rounded-lg"><PenTool className="text-amber-600" /></div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800">Authorization Signatures</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
                <div className="space-y-2">
                    <Label>Calibrated By (Technician)</Label>
                    <Input
                        className="bg-white border-slate-300 h-12 text-lg"
                        placeholder="e.g. R. Prasanth"
                        value={data.calibratedBy}
                        onChange={e => onRootUpdate('calibratedBy', e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label>Approved By (Manager)</Label>
                    <Input
                        className="bg-white border-slate-300 h-12 text-lg"
                        placeholder="e.g. P. Bhakyalakshmi"
                        value={data.approvedBy}
                        onChange={e => onRootUpdate('approvedBy', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignaturesSection;
