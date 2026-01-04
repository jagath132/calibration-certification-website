/**
 * Calculate absolute error between reading and actual value.
 * Returns formatted string with sign if positive (e.g., "+0.05", "-0.10", "0")
 */
export const calculateError = (reading: string, actual: string): string => {
    if (!reading || !actual) return "";
    const r = parseFloat(reading);
    const a = parseFloat(actual);
    if (isNaN(r) || isNaN(a)) return "";
    const diff = r - a;

    // Format to 2 decimal places, with sign
    return diff === 0 ? "0" : diff > 0 ? `+${diff.toFixed(2)}` : diff.toFixed(2);
};

/**
 * Calculate percentage error relative to reference value.
 * formula: ((reading - reference) / reference) * 100
 */
export const calculatePercentageError = (reading: string, reference: string): string => {
    const v = parseFloat(reading);
    const r = parseFloat(reference);
    if (isNaN(v) || isNaN(r) || r === 0) return "0.000";
    if (v === r) return "0.000";
    const error = ((v - r) / r) * 100;
    return error.toFixed(3);
};

/**
 * Calculate average of two error values.
 */
export const calculateAverageError = (error1: string, error2: string): string => {
    const e1 = parseFloat(error1);
    const e2 = parseFloat(error2);
    if (isNaN(e1) || isNaN(e2)) return "0.000";
    return ((e1 + e2) / 2).toFixed(3);
};
