import { describe, expect, test } from 'vitest';
import { add, subtract } from "./math.helper"

// ? 'describe' Es un agrupador de mis pruebas
describe('add', () => {
    test('should add two positives numbers', () => {
        // ! 1. Arrange
        const a = 1;
        const b = 2;
    
        // ! 2. Act
        const result = add(a, b);
    
        // ! 3. Assert
        expect(result).toBe(a + b);
    });
});

describe('subtract', () => {
    test('should subtract two positives numbers', () => {
        const a = 1;
        const b = 2;
    
        const result = subtract(a, b);
    
        expect(result).toBe(a - b);
    });
    test('should result not negative', () => {
        const a = 11;
        const b = 2;

        const result = subtract(a, b);

        expect(result).toBeGreaterThan(0);
    });
});

