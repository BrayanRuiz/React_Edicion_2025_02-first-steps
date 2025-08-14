import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ItemCounter from "./ItemCounter";

describe('ItemCounter', () => {
    // test('should render with default values', () => {

    // });
    // test('should render with custom quantity', () => {
    //     const name = 'Prueba inicial';
    //     const quantity = 10;

    //     render(<ItemCounter name={name} quantity={quantity} />);

    //     expect(screen.getByText(quantity)).toBe(1);
    // });

    test('should decrease count when -1 button is pressed', () => {
        const quantity = 5;

        render(<ItemCounter name={"Test item"} quantity={quantity} />);

        const [, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('4')).toBeDefined();
    });
    // test('should not decrease count when -1 button is pressed and quantity is 1', () => {
    //     const quantity = 5;
    // });
    test('should change to black when count is greater than 1', () => {
        const quantity = 2;
        const name = 'Test Item';
        render(<ItemCounter name={name} quantity={quantity} />); 

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('black');
    });
});
