import { withFallback } from '../lib/patterns';

describe('withFallback', () => {
  it('should be defined', () => {
    expect(withFallback).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof withFallback).toBe('function');
  });
});
