import React from 'react';
import { CertificateData } from '../../types';
import { User } from 'lucide-react';
import { Input, Label } from './Shared';

interface Props {
    data: CertificateData;
    onUpdate: (section: keyof CertificateData, field: string, value: any) => void;
}

const CustomerSection: React.FC<Props> = ({ data, onUpdate }) => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-fuchsia-50 rounded-lg"><User className="text-fuchsia-600" /></div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800">Client & Instrument</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-700 flex items-center gap-2"><span className="w-2 h-6 bg-fuchsia-500 rounded-full"></span>Client Details</h3>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-4">
                        <div><Label>Name</Label><Input value={data.customer.name} onChange={e => onUpdate('customer', 'name', e.target.value)} /></div>
                        <div><Label>Address</Label><textarea className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-700 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 min-h-[120px]" value={data.customer.address} onChange={e => onUpdate('customer', 'address', e.target.value)} /></div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-700 flex items-center gap-2"><span className="w-2 h-6 bg-indigo-500 rounded-full"></span>Instrument Details</h3>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2"><Label>Description</Label><Input value={data.instrument.description} onChange={e => onUpdate('instrument', 'description', e.target.value)} /></div>
                        <div><Label>Make</Label><Input value={data.instrument.make} onChange={e => onUpdate('instrument', 'make', e.target.value)} /></div>
                        <div><Label>Model</Label><Input value={data.instrument.model} onChange={e => onUpdate('instrument', 'model', e.target.value)} /></div>
                        <div><Label>Serial No</Label><Input value={data.instrument.serialNo} onChange={e => onUpdate('instrument', 'serialNo', e.target.value)} /></div>
                        <div><Label>Capacity</Label><Input value={data.instrument.capacity} onChange={e => onUpdate('instrument', 'capacity', e.target.value)} /></div>
                        <div><Label>Resolution</Label><Input value={data.instrument.resolution} onChange={e => onUpdate('instrument', 'resolution', e.target.value)} /></div>
                        <div><Label>Accuracy Class</Label><Input value={data.instrument.accuracyClass} onChange={e => onUpdate('instrument', 'accuracyClass', e.target.value)} /></div>
                        <div className="md:col-span-2"><Label>Location</Label><Input value={data.instrument.location} onChange={e => onUpdate('instrument', 'location', e.target.value)} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerSection;
