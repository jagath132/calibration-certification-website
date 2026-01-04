import React from 'react';
import { CertificateData } from '../types';
import { calculateError } from '../utils/calculations';

interface Props {
    data: CertificateData;
}

const CertificatePreview: React.FC<Props> = ({ data }) => {

    const PageContainer = ({ children, pageNum, totalPages }: { children?: React.ReactNode, pageNum: number, totalPages: number }) => (
        <div className="print-page bg-white text-black font-serif text-[9pt] leading-tight flex flex-col relative mx-auto shadow-lg print:shadow-none mb-8 print:mb-0 box-border p-6 h-[297mm] w-[210mm]">
            <div className="border-2 border-black h-full flex flex-col">
                {/* Header */}
                <div className="text-center border-b border-black py-2">
                    <h1 className="text-lg font-bold italic">CALIBRATION CERTIFICATE    ANC/F/56</h1>
                </div>

                {/* Content */}
                <div className="flex-grow p-3">
                    {children}
                </div>

                {/* Footer */}
                <div className="border-t border-black p-3">
                    <div className="flex justify-between items-end">
                        <div className="flex-1">
                            <div className="text-xs font-bold mb-1">Calibrated by</div>
                            <div className="border-b border-black w-48 mb-1"></div>
                            <div className="text-xs">{data.calibratedBy}</div>
                        </div>
                        <div className="flex-1 text-right">
                            <div className="text-xs font-bold mb-1">Approved by</div>
                            <div className="border-b border-black w-48 ml-auto mb-1"></div>
                            <div className="text-xs">{data.approvedBy}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col gap-8 print:block print:gap-0 bg-gray-100 print:bg-white p-4 md:p-0">

            {/* PAGE 1 */}
            <PageContainer pageNum={1} totalPages={3}>
                {/* Header Table */}
                <table className="w-full border-collapse border border-black text-[8pt] mb-2">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 font-bold w-32">Certificate Number</td>
                            <td className="border border-black p-1" colSpan={3}>: {data.certificateNumber}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1 font-bold">Issued date</td>
                            <td className="border border-black p-1" colSpan={3}>: {data.issueDate}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1 font-bold">Discipline</td>
                            <td className="border border-black p-1" colSpan={3}>: {data.discipline}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1 font-bold text-center" colSpan={2}>SRF No & Date</td>
                            <td className="border border-black p-1 font-bold text-center">Calibrated at</td>
                            <td className="border border-black p-1 font-bold text-center">Condition on receipt</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1 text-center" colSpan={2}>{data.srfNo} - {data.srfDate}</td>
                            <td className="border border-black p-1 text-center">{data.calibratedAt}</td>
                            <td className="border border-black p-1 text-center">{data.conditionReceipt}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1 font-bold text-center">Date of Calibration</td>
                            <td className="border border-black p-1 font-bold text-center" colSpan={2}>Recommended date for next calibration</td>
                            <td className="border border-black p-1 font-bold text-center">Page No.</td>
                            <td className="border border-black p-1 font-bold text-center">No. of pages</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1 text-center">{data.dateOfCalib}</td>
                            <td className="border border-black p-1 text-center" colSpan={2}>{data.nextCalibDate}</td>
                            <td className="border border-black p-1 text-center">1</td>
                            <td className="border border-black p-1 text-center">3</td>
                        </tr>
                    </tbody>
                </table>

                {/* Calibrated for */}
                <table className="w-full border-collapse border border-black text-[8pt] mb-2">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 font-bold align-top w-40">1. Calibrated for:</td>
                            <td className="border border-black p-1">
                                {data.customer.name}<br />
                                {data.customer.address}
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Instrument Details */}
                <table className="w-full border-collapse border border-black text-[8pt] mb-2">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 font-bold align-top w-40" rowSpan={8}>2. Description &<br />Identification of Instrument</td>
                            <td className="border border-black p-1 w-24">DUC</td>
                            <td className="border border-black p-1 w-4">:</td>
                            <td className="border border-black p-1">{data.instrument.description}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1">Make</td>
                            <td className="border border-black p-1">:</td>
                            <td className="border border-black p-1">{data.instrument.make}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1">Model</td>
                            <td className="border border-black p-1">:</td>
                            <td className="border border-black p-1">{data.instrument.model}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1">Serial No</td>
                            <td className="border border-black p-1">:</td>
                            <td className="border border-black p-1">{data.instrument.serialNo}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1">P/M Serial NO</td>
                            <td className="border border-black p-1">:</td>
                            <td className="border border-black p-1">-</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1">Capacity</td>
                            <td className="border border-black p-1">:</td>
                            <td className="border border-black p-1">{data.instrument.capacity}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1">Resolution</td>
                            <td className="border border-black p-1">:</td>
                            <td className="border border-black p-1">{data.instrument.resolution}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1">Accuracy Class</td>
                            <td className="border border-black p-1">:</td>
                            <td className="border border-black p-1">{data.instrument.accuracyClass}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1">MPE ±</td>
                            <td className="border border-black p-1">:</td>
                            <td className="border border-black p-1">-</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1">Location</td>
                            <td className="border border-black p-1">:</td>
                            <td className="border border-black p-1 font-bold">{data.instrument.location}</td>
                        </tr>
                    </tbody>
                </table>

                {/* Environmental Conditions */}
                <table className="w-full border-collapse border border-black text-[8pt] mb-2">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 font-bold align-top w-40" rowSpan={2}>3. Environmental<br />Conditions:</td>
                            <td className="border border-black p-1 w-32">Temperature :</td>
                            <td className="border border-black p-1">{data.environment.temperature}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1">Relative Humidity :</td>
                            <td className="border border-black p-1">{data.environment.humidity}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1"></td>
                            <td className="border border-black p-1">Atmos. Pressure :</td>
                            <td className="border border-black p-1">{data.environment.pressure}</td>
                        </tr>
                    </tbody>
                </table>

                {/* Traceability */}
                <div className="text-[8pt] mb-1">Details of Traceability - Master Equipment / Standard used for Calibration</div>
                <table className="w-full border-collapse border border-black text-[8pt] mb-2">
                    <thead>
                        <tr>
                            <th className="border border-black p-1 w-12">SL. No</th>
                            <th className="border border-black p-1">Description Master Equipment /<br />Standard used for calibration</th>
                            <th className="border border-black p-1">Traceable to National standards through</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.masterEquipments.map((eq, idx) => (
                            <tr key={eq.id}>
                                <td className="border border-black p-1 text-center">{idx + 1}</td>
                                <td className="border border-black p-1">{eq.description}</td>
                                <td className="border border-black p-1">{eq.traceability}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Uncertainty */}
                <table className="w-full border-collapse border border-black text-[8pt] mb-2">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 font-bold w-48">Uncertainly Of measurement</td>
                            <td className="border border-black p-1">: {data.uncertainty}</td>
                        </tr>
                    </tbody>
                </table>

                {/* Methodology */}
                <table className="w-full border-collapse border border-black text-[8pt] mb-2">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 font-bold w-48">4. Principle/Methodology of<br />Calibration and Calibration<br />Procedure No:</td>
                            <td className="border border-black p-1">{data.methodology}</td>
                        </tr>
                    </tbody>
                </table>

                {/* Result */}
                <table className="w-full border-collapse border border-black text-[8pt]">
                    <tbody>
                        <tr>
                            <td className="border border-black p-1 font-bold" colSpan={2}>Result of Calibration:</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-1" colSpan={2}>1. The results of calibration given on attached sheet(s)</td>
                        </tr>
                    </tbody>
                </table>
            </PageContainer>

            {/* PAGE 2 */}
            <PageContainer pageNum={2} totalPages={3}>
                <div className="mb-2">
                    <table className="w-full border-collapse border border-black text-[8pt]">
                        <tbody>
                            <tr>
                                <td className="border border-black p-1 font-bold">Certificate Number</td>
                                <td className="border border-black p-1">{data.certificateNumber}</td>
                                <td className="border border-black p-1 font-bold text-center w-20">Page No.</td>
                                <td className="border border-black p-1 text-center w-20">No. of pages</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-1"></td>
                                <td className="border border-black p-1"></td>
                                <td className="border border-black p-1 text-center">2</td>
                                <td className="border border-black p-1 text-center">3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="font-bold text-[9pt] mb-2">7. Results:</div>

                {/* Repeatability Test */}
                <div className="font-bold text-[8pt] mb-1">A. Repeatability Test</div>
                <table className="w-full border-collapse border border-black text-[7pt] mb-3">
                    <thead>
                        <tr>
                            <th className="border border-black p-1" rowSpan={2}>No. of<br />Observat<br />ions</th>
                            <th className="border border-black p-1" rowSpan={2}>Applied Weight<br />(Half Load L)(kg)</th>
                            <th className="border border-black p-1" rowSpan={2}>DUC Reading(kg)</th>
                            <th className="border border-black p-1" rowSpan={2}>STDEV at Half<br />Load is (kg)</th>
                            <th className="border border-black p-1" rowSpan={2}>Applied Weight<br />(Full Load L)(kg)</th>
                            <th className="border border-black p-1" rowSpan={2}>DUC Reading(kg)</th>
                            <th className="border border-black p-1" rowSpan={2}>STDEV at Full<br />Load is (kg)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.repeatability.map((row, idx) => (
                            <tr key={idx}>
                                <td className="border border-black p-1 text-center">{idx + 1}</td>
                                <td className="border border-black p-1 text-center">{row.halfLoad}</td>
                                <td className="border border-black p-1 text-center">{row.ducHalf}</td>
                                <td className="border border-black p-1 text-center">{idx === 2 ? '0' : ''}</td>
                                <td className="border border-black p-1 text-center">{row.fullLoad}</td>
                                <td className="border border-black p-1 text-center">{row.ducFull}</td>
                                <td className="border border-black p-1 text-center">{idx === 2 ? '1' : ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Eccentricity Test */}
                <div className="font-bold text-[8pt] mb-1">B. Eccentricity Test</div>
                <table className="w-full border-collapse border border-black text-[7pt] mb-2">
                    <thead>
                        <tr>
                            <th className="border border-black p-1">Nominal</th>
                            <th className="border border-black p-1">Certified Mass(kg)</th>
                            <th className="border border-black p-1">DUC Reading(kg)</th>
                            <th className="border border-black p-1">Position of Weight</th>
                            <th className="border border-black p-1">The Error due to<br />Eccentric Loading<br />is</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.eccentricity.map((row, idx) => (
                            <tr key={idx}>
                                <td className="border border-black p-1 text-center">100</td>
                                <td className="border border-black p-1 text-center">{row.certified}</td>
                                <td className="border border-black p-1 text-center">{row.reading}</td>
                                <td className="border border-black p-1">{row.position}</td>
                                <td className="border border-black p-1 text-center">{idx === 0 ? '0' : ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Diagram */}
                <div className="text-center font-bold text-[8pt] mb-1">Diagram for Eccentricity Test</div>
                <div className="flex justify-center mb-3">
                    <div className="relative w-48 h-32 border-2 border-black">
                        <div className="absolute top-2 left-2 w-6 h-6 border border-black rounded-full flex items-center justify-center text-xs">5</div>
                        <div className="absolute top-2 right-2 w-6 h-6 border border-black rounded-full flex items-center justify-center text-xs">2</div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-black rounded-full flex items-center justify-center text-xs">1</div>
                        <div className="absolute bottom-2 left-2 w-6 h-6 border border-black rounded-full flex items-center justify-center text-xs">4</div>
                        <div className="absolute bottom-2 right-2 w-6 h-6 border border-black rounded-full flex items-center justify-center text-xs">3</div>
                    </div>
                </div>
            </PageContainer>

            {/* PAGE 3 */}
            <PageContainer pageNum={3} totalPages={3}>
                <div className="mb-2">
                    <table className="w-full border-collapse border border-black text-[8pt]">
                        <tbody>
                            <tr>
                                <td className="border border-black p-1 font-bold">Certificate Number</td>
                                <td className="border border-black p-1">{data.certificateNumber}</td>
                                <td className="border border-black p-1 font-bold text-center w-20">Page No</td>
                                <td className="border border-black p-1 text-center w-20">No. of pages</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-1"></td>
                                <td className="border border-black p-1"></td>
                                <td className="border border-black p-1 text-center">3</td>
                                <td className="border border-black p-1 text-center">3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="font-bold text-[9pt] mb-2">7. Results:</div>

                {/* Weighing Performance Test */}
                <div className="font-bold text-[8pt] mb-1">C. Weighing Performance Test</div>
                <table className="w-full border-collapse border border-black text-[7pt] mb-3">
                    <thead>
                        <tr>
                            <th className="border border-black p-1">Nominal<br />Mass(kg)</th>
                            <th className="border border-black p-1">Certified Mass(kg)</th>
                            <th className="border border-black p-1">DUC Reading(kg)</th>
                            <th className="border border-black p-1">Departure of<br />Indication from the</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.weighingPerformance.map((row, idx) => (
                            <tr key={idx}>
                                <td className="border border-black p-1 text-center">{row.nominal}</td>
                                <td className="border border-black p-1 text-center">{row.certified}</td>
                                <td className="border border-black p-1 text-center">{row.reading}</td>
                                <td className="border border-black p-1 text-center">{calculateError(row.reading, row.certified)}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className="border border-black p-1 text-center">0</td>
                            <td className="border border-black p-1 text-center">0</td>
                            <td className="border border-black p-1 text-center">0</td>
                            <td className="border border-black p-1 text-center">0</td>
                        </tr>
                    </tbody>
                </table>

                {/* Remarks */}
                <div className="font-bold text-[8pt] mb-1">8. Remarks:</div>
                <div className="text-[7pt] space-y-1 mb-3">
                    <div className="flex">
                        <span className="w-6">a.</span>
                        <span>This report refers only to the particular instrument/parameter detailed above.</span>
                    </div>
                    <div className="flex">
                        <span className="w-6">b.</span>
                        <span>This report shall not be reproduced without written approval from Aruna Naveen Calibration LLP.</span>
                    </div>
                    <div className="flex">
                        <span className="w-6">c.</span>
                        <span>The results reported in this certificate are valid at the time of calibration and under the stipulated conditions of measurement.</span>
                    </div>
                    <div className="flex">
                        <span className="w-6">d.</span>
                        <span>The calibration masters used are maintained in accordance with ISO/IEC 17025: 2017 and are traceable to National and International Standards.</span>
                    </div>
                    <div className="flex">
                        <span className="w-6">e.</span>
                        <span>The reported expanded uncertainty in measurement is {data.uncertainty} stated as the standard uncertainty in measurement multiplied by the coverage factor k=2, which is normal distribution corresponds to a probability of approximately 95.45%.</span>
                    </div>
                    <div className="flex">
                        <span className="w-6">f.</span>
                        <span>The Balance is calibrated for Scientific or Industrial purpose only.</span>
                    </div>
                    <div className="flex">
                        <span className="w-6">g.</span>
                        <span>Calibration results are given as found at the time of calibration.</span>
                    </div>
                    <div className="flex">
                        <span className="w-6">h.</span>
                        <span>Calibration Due date mentioned as per customer request.</span>
                    </div>
                </div>

                <div className="text-center font-bold text-[8pt] mt-4">----------End of Certificate----------</div>
            </PageContainer>

        </div>
    );
};

export default CertificatePreview;