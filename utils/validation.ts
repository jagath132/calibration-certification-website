import { z } from 'zod';

export const certificateSchema = z.object({
    certificateNumber: z.string().min(1, "Certificate Number is required"),
    issueDate: z.string().min(1, "Issue Date is required"),
    discipline: z.string().min(1, "Discipline is required"),
    srfNo: z.string().min(1, "SRF No is required"),
    srfDate: z.string().min(1, "SRF Date is required"),
    calibratedAt: z.enum(["Onsite", "Lab"]),
    conditionReceipt: z.string().min(1, "Condition on Receipt is required"),
    dateOfCalib: z.string().min(1, "Date of Calibration is required"),
    nextCalibDate: z.string().min(1, "Next Due Date is required"),

    customer: z.object({
        name: z.string().min(1, "Customer Name is required"),
        address: z.string().min(1, "Customer Address is required"),
    }),

    instrument: z.object({
        description: z.string().min(1, "Description is required"),
        duc: z.string().optional(),
        make: z.string().min(1, "Make is required"),
        model: z.string().min(1, "Model is required"),
        serialNo: z.string().min(1, "Serial No is required"),
        pmSerialNo: z.string().optional(),
        capacity: z.string().min(1, "Capacity is required"),
        resolution: z.string().min(1, "Resolution is required"),
        accuracyClass: z.string().min(1, "Accuracy Class is required"),
        mpe: z.string().optional(),
        location: z.string().min(1, "Location is required"),
    }),

    environment: z.object({
        temperature: z.string().min(1, "Temperature is required"),
        humidity: z.string().min(1, "Humidity is required"),
        pressure: z.string().min(1, "Pressure is required"),
    }),

    masterEquipments: z.array(z.object({
        id: z.string(),
        description: z.string().min(1, "Master Equipment Description is required"),
        traceability: z.string().min(1, "Traceability Details are required"),
    })).min(1, "At least one Master Equipment is required"),

    uncertainty: z.string().min(1, "Uncertainty is required"),
    methodology: z.string().min(1, "Methodology is required"),

    repeatability: z.array(z.object({
        id: z.string(),
        halfLoad: z.string(),
        ducHalf: z.string().min(1, "Half Load Reading is required"),
        fullLoad: z.string(),
        ducFull: z.string().min(1, "Full Load Reading is required"),
    })).min(1, "At least one repeatability test result is required"),

    eccentricity: z.array(z.object({
        id: z.string(),
        position: z.string().min(1, "Position is required"),
        nominal: z.string().min(1, "Nominal value is required"),
        certified: z.string().min(1, "Certified value is required"),
        reading: z.string().min(1, "Reading is required"),
    })).min(1, "At least one eccentricity test result is required"),

    weighingPerformance: z.array(z.object({
        id: z.string(),
        nominal: z.string(),
        certified: z.string().min(1, "Certified value is required"),
        reading: z.string().min(1, "Reading is required"),
    })).min(1, "At least one weighing performance test result is required"),

    annexureRows: z.array(z.object({
        id: z.string(),
        deadWeight: z.string().min(1, "Dead weight is required"),
        loading: z.string().min(1, "Loading indication is required"),
        unloading: z.string().min(1, "Unloading indication is required"),
    })).min(1, "At least one annexure row is required"),

    acceptableError: z.string().min(1, "Acceptable error is required"),
    combinedVariance: z.string().min(1, "Combined variance is required"),

    calibratedBy: z.string().min(1, "Calibrated By is required"),
    approvedBy: z.string().min(1, "Approved By is required"),
});
