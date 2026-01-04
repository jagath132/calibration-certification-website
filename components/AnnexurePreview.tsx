import React from 'react';
import { CertificateData } from '../types';
import { calculatePercentageError, calculateAverageError } from '../utils/calculations';

interface Props {
    data: CertificateData;
}

const AnnexurePreview: React.FC<Props> = ({ data }) => {

    const PageContainer = ({ children }: { children?: React.ReactNode }) => (
        <div className="print-page bg-white text-black font-serif text-[10pt] leading-tight flex flex-col relative mx-auto shadow-none print:shadow-none box-border p-8 h-[297mm] w-[210mm]">
            <div className="border-2 border-black h-full flex flex-col p-1">
                <div className="border border-black h-full flex flex-col relative">
                    {/* Simple Header for Annexure */}
                    <div className="p-4 border-b border-black text-center">
                        <h1 className="text-xl font-bold uppercase underline">ANNEXURE REPORT</h1>
                        <p className="text-xs mt-1 uppercase">(Supplementary Data Sheet)</p>
                    </div>

                    <div className="flex-grow p-4 flex flex-col">
                        {children}
                    </div>

                    {/* Footer */}
                    <div className="border-t border-black p-2 px-6 mt-auto">
                        <div className="flex justify-between items-end">
                            <div className="text-center w-1/3">
                                <div className="h-12 flex items-end justify-center mb-1">
                                    <span className="font-script text-xl">{data.calibratedBy.split(' ')[0]}</span>
                                </div>
                                <div className="border-t border-black text-xs font-bold pt-1">Calibrated By</div>
                            </div>
                            <div className="text-center w-1/3">
                                <div className="h-12 flex items-end justify-center mb-1">
                                    <span className="font-script text-xl">{data.approvedBy.split(' ')[0]}</span>
                                </div>
                                <div className="border-t border-black text-xs font-bold pt-1">Authorized Signatory</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col gap-8 print:block print:gap-0 bg-gray-100 print:bg-white p-4 md:p-0">
            <PageContainer>
                {/* Info Block */}
                <div className="border border-black text-sm mb-6">
                    <div className="flex border-b border-black">
                        <div className="w-32 p-1 pl-2 font-bold border-r border-black bg-gray-50 print:bg-transparent">Cert No</div>
                        <div className="p-1 pl-2">{data.certificateNumber}</div>
                    </div>
                    <div className="flex border-b border-black">
                        <div className="w-32 p-1 pl-2 font-bold border-r border-black bg-gray-50 print:bg-transparent">Customer</div>
                        <div className="p-1 pl-2">{data.customer.name}</div>
                    </div>
                    <div className="flex border-b border-black">
                        <div className="w-32 p-1 pl-2 font-bold border-r border-black bg-gray-50 print:bg-transparent">Instrument</div>
                        <div className="p-1 pl-2">{data.instrument.description} (Make: {data.instrument.make}, Model: {data.instrument.model})</div>
                    </div>
                </div>

                <div className="font-bold text-sm mb-2 text-center underline">LINEARITY & HYSTERESIS DATA</div>

                <table className="w-full border border-black text-sm border-collapse text-center mb-6">
                    <thead>
                        <tr className="bg-gray-100 print:bg-transparent border-b border-black text-xs font-bold">
                            <th className="border-r border-black p-1">Load</th>
                            <th className="border-r border-black p-1">Loading Indication</th>
                            <th className="border-r border-black p-1">Unloading Indication</th>
                            <th className="border-r border-black p-1">Loading Error %</th>
                            <th className="border-r border-black p-1">Unloading Error %</th>
                            <th className="p-1">Avg Error %</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.annexureRows.map((row, i) => {
                            const lErr = calculatePercentageError(row.loading, row.deadWeight);
                            const uErr = calculatePercentageError(row.unloading, row.deadWeight);
                            const avg = calculateAverageError(lErr, uErr);
                            return (
                                <tr key={row.id} className="border-b border-black last:border-b-0">
                                    <td className="border-r border-black p-1 font-bold">{row.deadWeight}</td>
                                    <td className="border-r border-black p-1">{row.loading}</td>
                                    <td className="border-r border-black p-1">{row.unloading}</td>
                                    <td className="border-r border-black p-1 text-xs">{lErr}</td>
                                    <td className="border-r border-black p-1 text-xs">{uErr}</td>
                                    <td className="p-1 font-bold">{avg}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="p-1 border-t border-black text-right font-bold text-xs pr-4" colSpan={6}>
                                Combined Variance (Average): {data.combinedVariance}
                            </td>
                        </tr>
                    </tfoot>
                </table>

                <div className="border border-black p-3 text-sm">
                    <div className="mb-2">
                        <span className="font-bold underline">Traceability Reference:</span>
                        <span className="ml-2">{data.masterEquipments[0]?.description} ({data.masterEquipments[0]?.traceability})</span>
                    </div>
                    <div>
                        <span className="font-bold underline">Conclusion:</span>
                        <span className="ml-2">The instrument performance is within the acceptable error limit of {data.acceptableError}.</span>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
};

export default AnnexurePreview;