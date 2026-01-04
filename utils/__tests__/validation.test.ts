import { describe, it, expect } from 'vitest';
import { certificateSchema } from '../validation';
import { INITIAL_DATA } from '../../types';

describe('validation', () => {
  it('should validate correct certificate data', () => {
    expect(() => certificateSchema.parse(INITIAL_DATA)).not.toThrow();
  });

  it('should reject missing certificate number', () => {
    const invalid = { ...INITIAL_DATA, certificateNumber: '' };
    expect(() => certificateSchema.parse(invalid)).toThrow();
  });

  it('should reject missing customer name', () => {
    const invalid = {
      ...INITIAL_DATA,
      customer: { ...INITIAL_DATA.customer, name: '' }
    };
    expect(() => certificateSchema.parse(invalid)).toThrow();
  });

  it('should reject empty repeatability array', () => {
    const invalid = { ...INITIAL_DATA, repeatability: [] };
    expect(() => certificateSchema.parse(invalid)).toThrow();
  });

  it('should reject empty eccentricity array', () => {
    const invalid = { ...INITIAL_DATA, eccentricity: [] };
    expect(() => certificateSchema.parse(invalid)).toThrow();
  });

  it('should reject empty weighingPerformance array', () => {
    const invalid = { ...INITIAL_DATA, weighingPerformance: [] };
    expect(() => certificateSchema.parse(invalid)).toThrow();
  });

  it('should reject empty annexureRows array', () => {
    const invalid = { ...INITIAL_DATA, annexureRows: [] };
    expect(() => certificateSchema.parse(invalid)).toThrow();
  });

  it('should reject empty masterEquipments array', () => {
    const invalid = { ...INITIAL_DATA, masterEquipments: [] };
    expect(() => certificateSchema.parse(invalid)).toThrow();
  });

  it('should reject invalid calibratedAt value', () => {
    const invalid = { ...INITIAL_DATA, calibratedAt: 'Invalid' };
    expect(() => certificateSchema.parse(invalid)).toThrow();
  });

  it('should accept valid calibratedAt values', () => {
    expect(() => certificateSchema.parse({ ...INITIAL_DATA, calibratedAt: 'Onsite' })).not.toThrow();
    expect(() => certificateSchema.parse({ ...INITIAL_DATA, calibratedAt: 'Lab' })).not.toThrow();
  });
});

