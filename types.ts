export interface InstrumentDetails {
  description: string;
  duc: string;
  make: string;
  model: string;
  serialNo: string;
  pmSerialNo: string;
  capacity: string;
  resolution: string;
  accuracyClass: string;
  mpe: string;
  location: string;
}

export interface CustomerDetails {
  name: string;
  address: string;
}

export interface EnvironmentConditions {
  temperature: string;
  humidity: string;
  pressure: string;
}

export interface MasterEquipment {
  id: string;
  description: string;
  traceability: string; // "Traceable to National standards through..."
}

export interface RepeatabilityRow {
  id: string;
  halfLoad: string;
  ducHalf: string;
  fullLoad: string;
  ducFull: string;
}

export interface EccentricityRow {
  id: string;
  position: string; // 1.Center, 2.Right Up, etc.
  nominal: string;
  certified: string;
  reading: string;
}

export interface WeighingPerformanceRow {
  id: string;
  nominal: string;
  certified: string;
  reading: string;
}

export interface AnnexureRow {
  id: string;
  deadWeight: string;
  loading: string;
  unloading: string;
}

export interface CertificateData {
  // Header
  certificateNumber: string;
  issueDate: string;
  discipline: string;
  srfNo: string;
  srfDate: string;
  calibratedAt: string; // "Onsite" or "Lab"
  conditionReceipt: string;
  dateOfCalib: string;
  nextCalibDate: string;
  
  // Sections
  customer: CustomerDetails;
  instrument: InstrumentDetails;
  environment: EnvironmentConditions;
  masterEquipments: MasterEquipment[];
  uncertainty: string;
  methodology: string;

  // Results
  repeatability: RepeatabilityRow[];
  eccentricity: EccentricityRow[];
  weighingPerformance: WeighingPerformanceRow[];
  
  // Annexure
  annexureRows: AnnexureRow[];
  acceptableError: string;
  combinedVariance: string;
  
  // Footer
  calibratedBy: string;
  approvedBy: string;
}

export const INITIAL_DATA: CertificateData = {
  certificateNumber: "ANC/WB/25-26/250N",
  issueDate: "2025-12-27",
  discipline: "Mechanical- Weighing Scale and Balance",
  srfNo: "ANC/WB/25-26/250N",
  srfDate: "2025-12-24",
  calibratedAt: "Onsite",
  conditionReceipt: "Good",
  dateOfCalib: "2025-12-25",
  nextCalibDate: "2026-03-24",
  
  customer: {
    name: "M/s. Ray Mix Concrete India Pvt Ltd.,",
    address: "No:49 Sakthi garden, Senneerkuppam.\nPoonamallee-600056"
  },
  
  instrument: {
    description: "Weighing Scale(CEMENT)",
    duc: "",
    make: "Schwing Stetter India",
    model: "MI",
    serialNo: "M1-180",
    pmSerialNo: "01-0008-05",
    capacity: "500kg",
    resolution: "1kg",
    accuracyClass: "IV",
    mpe: "1kg",
    location: "Cement scale area"
  },
  
  environment: {
    temperature: "32.2°C",
    humidity: "56.5%",
    pressure: "997hpa"
  },
  
  masterEquipments: [
    { id: '1', description: "M1 Class Weights", traceability: "CC-4155 / Certificate No: ANC/MASS/25-26/002 Valid till: 01-06-2026" },
    { id: '2', description: "M1 Class Weights", traceability: "CC-4155 / Certificate No: ANC/MASS/25-26/004 Valid till: 17-07-2026" }
  ],
  
  uncertainty: "0.58kg",
  methodology: "Calibration Work Instruction No. ANC/SOP/09 as per OIML-R-47",
  
  repeatability: Array(5).fill(null).map((_, i) => ({
    id: i.toString(),
    halfLoad: i === 2 ? "250" : "",
    ducHalf: "250",
    fullLoad: i === 2 ? "500" : "",
    ducFull: i === 0 ? "501" : i === 3 ? "501" : "500"
  })),
  
  eccentricity: [
    { id: '1', position: "1.Center", nominal: "100", certified: "100", reading: "100" },
    { id: '2', position: "2.Right Up corner", nominal: "100", certified: "100", reading: "100" },
    { id: '3', position: "3.Right down corner", nominal: "100", certified: "100", reading: "100" },
    { id: '4', position: "4.Left down corner", nominal: "100", certified: "100", reading: "100" },
    { id: '5', position: "5.Left Up corner", nominal: "100", certified: "100", reading: "100" },
  ],
  
  weighingPerformance: [
    { id: '1', nominal: "1", certified: "1", reading: "1" },
    { id: '2', nominal: "5", certified: "5", reading: "5" },
    { id: '3', nominal: "10", certified: "10", reading: "10" },
    { id: '4', nominal: "20", certified: "20", reading: "20" },
    { id: '5', nominal: "50", certified: "50", reading: "50" },
    { id: '6', nominal: "100", certified: "100", reading: "100" },
    { id: '7', nominal: "200", certified: "200", reading: "200" },
    { id: '8', nominal: "500", certified: "500", reading: "501" },
    { id: '9', nominal: "0", certified: "0", reading: "0" },
  ],
  
  annexureRows: [
    { id: '1', deadWeight: "0", loading: "0", unloading: "0" },
    { id: '2', deadWeight: "20", loading: "20", unloading: "20" },
    { id: '3', deadWeight: "40", loading: "40", unloading: "40" },
    { id: '4', deadWeight: "60", loading: "60", unloading: "60" },
    { id: '5', deadWeight: "80", loading: "80", unloading: "80" },
    { id: '6', deadWeight: "100", loading: "100", unloading: "100" },
    { id: '7', deadWeight: "120", loading: "120", unloading: "120" },
    { id: '8', deadWeight: "140", loading: "140", unloading: "140" },
    { id: '9', deadWeight: "160", loading: "160", unloading: "160" },
    { id: '10', deadWeight: "180", loading: "180", unloading: "180" },
    { id: '11', deadWeight: "200", loading: "200", unloading: "200" },
    { id: '12', deadWeight: "220", loading: "220", unloading: "220" },
    { id: '13', deadWeight: "240", loading: "240", unloading: "239" },
  ],
  
  acceptableError: "± 1%",
  combinedVariance: "-0.005%",
  
  calibratedBy: "R. Prasanth",
  approvedBy: "P.Bhakyalakshmi"
};