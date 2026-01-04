import { CertificateData } from '../types';

const STORAGE_KEY = 'certgen_certificates';
const CURRENT_CERT_KEY = 'certgen_current_certificate';

export interface StoredCertificate {
    id: string;
    name: string;
    certificateNumber: string;
    customerName: string;
    createdAt: string;
    updatedAt: string;
    data: CertificateData;
}

/**
 * Generate a unique ID for a certificate
 */
const generateId = (): string => {
    return `cert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Get all stored certificates
 */
export const getAllCertificates = (): StoredCertificate[] => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return [];
        return JSON.parse(stored);
    } catch (error) {
        console.error('Error reading certificates from storage:', error);
        return [];
    }
};

/**
 * Get a certificate by ID
 */
export const getCertificateById = (id: string): StoredCertificate | null => {
    const certificates = getAllCertificates();
    return certificates.find(cert => cert.id === id) || null;
};

/**
 * Save a certificate (creates new if id not provided, updates existing if id provided)
 */
export const saveCertificate = (data: CertificateData, id?: string, name?: string): string => {
    const certificates = getAllCertificates();
    const now = new Date().toISOString();
    
    if (id) {
        // Update existing
        const index = certificates.findIndex(cert => cert.id === id);
        if (index !== -1) {
            certificates[index] = {
                ...certificates[index],
                name: name || certificates[index].name,
                certificateNumber: data.certificateNumber,
                customerName: data.customer.name,
                updatedAt: now,
                data
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(certificates));
            return id;
        }
    }
    
    // Create new
    const newId = generateId();
    const newCertificate: StoredCertificate = {
        id: newId,
        name: name || `Certificate ${data.certificateNumber}`,
        certificateNumber: data.certificateNumber,
        customerName: data.customer.name,
        createdAt: now,
        updatedAt: now,
        data
    };
    
    certificates.push(newCertificate);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(certificates));
    return newId;
};

/**
 * Delete a certificate by ID
 */
export const deleteCertificate = (id: string): boolean => {
    const certificates = getAllCertificates();
    const filtered = certificates.filter(cert => cert.id !== id);
    
    if (filtered.length === certificates.length) {
        return false; // Certificate not found
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    
    // Clear current certificate if it was deleted
    const currentId = localStorage.getItem(CURRENT_CERT_KEY);
    if (currentId === id) {
        localStorage.removeItem(CURRENT_CERT_KEY);
    }
    
    return true;
};

/**
 * Save current working certificate (temporary, not in list)
 */
export const saveCurrentCertificate = (data: CertificateData): void => {
    localStorage.setItem(CURRENT_CERT_KEY, JSON.stringify(data));
};

/**
 * Load current working certificate
 */
export const loadCurrentCertificate = (): CertificateData | null => {
    try {
        const stored = localStorage.getItem(CURRENT_CERT_KEY);
        if (!stored) return null;
        return JSON.parse(stored);
    } catch (error) {
        console.error('Error loading current certificate:', error);
        return null;
    }
};

/**
 * Clear current working certificate
 */
export const clearCurrentCertificate = (): void => {
    localStorage.removeItem(CURRENT_CERT_KEY);
};

