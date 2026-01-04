import { describe, it, expect } from 'vitest';
import { calculateError, calculatePercentageError, calculateAverageError } from '../calculations';

describe('calculations', () => {
  describe('calculateError', () => {
    it('should calculate positive error correctly', () => {
      expect(calculateError('10.5', '10')).toBe('+0.50');
    });

    it('should calculate negative error correctly', () => {
      expect(calculateError('9.5', '10')).toBe('-0.50');
    });

    it('should return "0" for zero error', () => {
      expect(calculateError('10', '10')).toBe('0');
    });

    it('should handle empty strings', () => {
      expect(calculateError('', '10')).toBe('');
      expect(calculateError('10', '')).toBe('');
    });

    it('should handle invalid numbers', () => {
      expect(calculateError('abc', '10')).toBe('');
      expect(calculateError('10', 'abc')).toBe('');
    });
  });

  describe('calculatePercentageError', () => {
    it('should calculate percentage error correctly', () => {
      const result = calculatePercentageError('110', '100');
      expect(parseFloat(result)).toBeCloseTo(10.0, 3);
    });

    it('should return "0.000" for zero error', () => {
      expect(calculatePercentageError('100', '100')).toBe('0.000');
    });

    it('should handle negative percentage error', () => {
      const result = calculatePercentageError('90', '100');
      expect(parseFloat(result)).toBeCloseTo(-10.0, 3);
    });

    it('should handle zero reference', () => {
      expect(calculatePercentageError('10', '0')).toBe('0.000');
    });

    it('should handle invalid inputs', () => {
      expect(calculatePercentageError('abc', '100')).toBe('0.000');
      expect(calculatePercentageError('100', 'abc')).toBe('0.000');
    });
  });

  describe('calculateAverageError', () => {
    it('should calculate average of two errors correctly', () => {
      const result = calculateAverageError('10.5', '9.5');
      expect(parseFloat(result)).toBeCloseTo(10.0, 3);
    });

    it('should handle negative values', () => {
      const result = calculateAverageError('-10.5', '-9.5');
      expect(parseFloat(result)).toBeCloseTo(-10.0, 3);
    });

    it('should handle zero values', () => {
      expect(calculateAverageError('0', '0')).toBe('0.000');
    });

    it('should handle invalid inputs', () => {
      expect(calculateAverageError('abc', '10')).toBe('0.000');
      expect(calculateAverageError('10', 'abc')).toBe('0.000');
    });
  });
});

