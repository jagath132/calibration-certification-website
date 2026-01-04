import React, { useState } from 'react';
import { CertificateData, MasterEquipment, WeighingPerformanceRow, AnnexureRow } from '../types';
import { FileText, User, Gauge, BarChart3, Paperclip, PenTool } from 'lucide-react';
import HeaderSection from './form/HeaderSection';
import CustomerSection from './form/CustomerSection';
import EnvironmentSection from './form/EnvironmentSection';
import ResultsSection from './form/ResultsSection';
import AnnexureSection from './form/AnnexureSection';
import SignaturesSection from './form/SignaturesSection';

interface Props {
  data: CertificateData;
  onChange: (data: CertificateData) => void;
}

type Section = 'header' | 'customer' | 'env' | 'results' | 'annexure' | 'signatures';

const CertificateForm: React.FC<Props> = ({ data, onChange }) => {
  const [activeSection, setActiveSection] = useState<Section>('header');

  const updateField = (section: keyof CertificateData, field: string, value: any) => {
    if (typeof data[section] === 'object' && !Array.isArray(data[section])) {
      onChange({
        ...data,
        [section]: {
          ...(data[section] as any),
          [field]: value
        }
      });
    } else {
      onChange({ ...data, [section]: value });
    }
  };

  const updateRootField = (field: keyof CertificateData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const SectionButton = ({ id, label, icon: Icon }: { id: Section, label: string, icon: any }) => (
    <button
      onClick={() => setActiveSection(id)}
      className={`flex-shrink-0 lg:w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 border ${activeSection === id
        ? 'bg-blue-50 border-blue-200 text-blue-700 shadow-sm'
        : 'bg-white border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-200'
        }`}
    >
      <Icon size={18} className={activeSection === id ? 'text-blue-600' : 'text-slate-400'} />
      <span className="font-semibold whitespace-nowrap">{label}</span>
    </button>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-8 h-auto lg:h-[calc(100vh-140px)] min-h-[600px] w-full">

      {/* Sidebar Navigation */}
      <div className="w-full lg:w-64 flex-shrink-0 bg-white border border-slate-200 rounded-xl p-3 flex flex-row lg:flex-col gap-1 shadow-sm overflow-x-auto no-scrollbar lg:h-fit sticky top-24 z-40">
        <div className="px-4 py-3 mb-2 hidden lg:block border-b border-slate-100">
          <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wide">Sections</h3>
          <p className="text-slate-500 text-xs">Navigate through the form</p>
        </div>
        <SectionButton id="header" label="Header Info" icon={FileText} />
        <SectionButton id="customer" label="Client & Inst." icon={User} />
        <SectionButton id="env" label="Environment" icon={Gauge} />
        <SectionButton id="results" label="Test Results" icon={BarChart3} />
        <SectionButton id="annexure" label="Annexure Data" icon={Paperclip} />
        <SectionButton id="signatures" label="Signatures" icon={PenTool} />
      </div>

      {/* Main Form Content */}
      <div className="flex-grow bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col w-full">
        <div className="p-4 md:p-8 h-auto lg:h-full lg:overflow-y-auto custom-scrollbar">

          {activeSection === 'header' && (
            <HeaderSection data={data} onChange={updateRootField} />
          )}

          {activeSection === 'customer' && (
            <CustomerSection data={data} onUpdate={updateField} />
          )}

          {activeSection === 'env' && (
            <EnvironmentSection
              data={data}
              onUpdate={updateField}
              onRootUpdate={updateRootField}
              onMasterEquipmentChange={(equips: MasterEquipment[]) => onChange({ ...data, masterEquipments: equips })}
            />
          )}

          {activeSection === 'results' && (
            <ResultsSection
              data={data}
              onRepeatabilityChange={(newRep) => onChange({ ...data, repeatability: newRep })}
              onEccentricityChange={(newEcc) => onChange({ ...data, eccentricity: newEcc })}
              onWeighingPerformanceChange={(newPerf) => onChange({ ...data, weighingPerformance: newPerf })}
            />
          )}

          {activeSection === 'annexure' && (
            <AnnexureSection
              data={data}
              onRootUpdate={updateRootField}
              onAnnexureRowsChange={(rows: AnnexureRow[]) => onChange({ ...data, annexureRows: rows })}
            />
          )}

          {activeSection === 'signatures' && (
            <SignaturesSection data={data} onRootUpdate={updateRootField} />
          )}

        </div>
      </div>

    </div>
  );
};

export default CertificateForm;