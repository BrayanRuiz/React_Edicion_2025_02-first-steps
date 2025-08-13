import { describe, expect, test } from 'vitest';
import { add, subtract } from "./math.helper"

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
        // ! 1. Arrange
        const a = 1;
        const b = 2;
    
        // ! 2. Act
        const result = subtract(a, b);
    
        // ! 3. Assert
        expect(result).toBe(a - b);
    });
    test('should result not negative', () => {
        // ! 1. Arrange
        const a = 11;
        const b = 2;

        // ! 2. Act
        const result = subtract(a, b);

        // ! 3. Assert
        expect(result).toBeGreaterThan(0);
    });
});

