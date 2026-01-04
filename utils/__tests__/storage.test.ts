import { describe, it, expect, beforeEach } from 'vitest';
import {
  getAllCertificates,
  saveCertificate,
  getCertificateById,
  deleteCertificate,
  saveCurrentCertificate,
  loadCurrentCertificate,
  clearCurrentCertificate
} from '../storage';
import { INITIAL_DATA } from '../../types';

describe('storage', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  describe('getAllCertificates', () => {
    it('should return empty array when no certificates exist', () => {
      expect(getAllCertificates()).toEqual([]);
    });

    it('should return all saved certificates', () => {
      const id1 = saveCertificate(INITIAL_DATA, undefined, 'Test Cert 1');
      const id2 = saveCertificate(INITIAL_DATA, undefined, 'Test Cert 2');
      
      const certificates = getAllCertificates();
      expect(certificates).toHaveLength(2);
      expect(certificates.map(c => c.id)).toContain(id1);
      expect(certificates.map(c => c.id)).toContain(id2);
    });
  });

  describe('saveCertificate', () => {
    it('should create a new certificate with unique ID', () => {
      const id = saveCertificate(INITIAL_DATA, undefined, 'Test Certificate');
      expect(id).toBeTruthy();
      expect(getAllCertificates()).toHaveLength(1);
    });

    it('should update existing certificate when ID is provided', () => {
      const id = saveCertificate(INITIAL_DATA, undefined, 'Original Name');
      const updatedData = { ...INITIAL_DATA, certificateNumber: 'UPDATED-001' };
      
      saveCertificate(updatedData, id, 'Updated Name');
      
      const certificates = getAllCertificates();
      expect(certificates).toHaveLength(1);
      expect(certificates[0].name).toBe('Updated Name');
      expect(certificates[0].certificateNumber).toBe('UPDATED-001');
    });

    it('should generate unique IDs for different certificates', () => {
      const id1 = saveCertificate(INITIAL_DATA, undefined, 'Cert 1');
      const id2 = saveCertificate(INITIAL_DATA, undefined, 'Cert 2');
      
      expect(id1).not.toBe(id2);
    });
  });

  describe('getCertificateById', () => {
    it('should return null for non-existent certificate', () => {
      expect(getCertificateById('non-existent-id')).toBeNull();
    });

    it('should return correct certificate by ID', () => {
      const id = saveCertificate(INITIAL_DATA, undefined, 'Test Certificate');
      const cert = getCertificateById(id);
      
      expect(cert).toBeTruthy();
      expect(cert?.id).toBe(id);
      expect(cert?.name).toBe('Test Certificate');
    });
  });

  describe('deleteCertificate', () => {
    it('should return false for non-existent certificate', () => {
      expect(deleteCertificate('non-existent-id')).toBe(false);
    });

    it('should delete certificate and return true', () => {
      const id = saveCertificate(INITIAL_DATA, undefined, 'Test Certificate');
      expect(getAllCertificates()).toHaveLength(1);
      
      const result = deleteCertificate(id);
      expect(result).toBe(true);
      expect(getAllCertificates()).toHaveLength(0);
    });
  });

  describe('saveCurrentCertificate and loadCurrentCertificate', () => {
    it('should save and load current certificate', () => {
      saveCurrentCertificate(INITIAL_DATA);
      const loaded = loadCurrentCertificate();
      
      expect(loaded).toEqual(INITIAL_DATA);
    });

    it('should return null when no current certificate exists', () => {
      expect(loadCurrentCertificate()).toBeNull();
    });

    it('should clear current certificate', () => {
      saveCurrentCertificate(INITIAL_DATA);
      clearCurrentCertificate();
      
      expect(loadCurrentCertificate()).toBeNull();
    });
  });
});

