import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from '@testing-library/react';

// ? 'screen' : Para poder trabajar el resultado de la renderización en mi componente.

describe('MyAwesomeApp', () => {
    test('should render firstName and lastName', () => {
        render(<MyAwesomeApp />);
        screen.debug();

        const h1 = screen.getByTestId('first-name-title');
        expect(h1.innerHTML).toContain('Brayan');

        // const h1 = container.querySelector('h1');
        // const h3 = container.querySelector('h3');
        
        // expect(h1?.innerHTML).toContain('Brayannn');
        // expect(h3?.innerHTML).toContain('Ruiz');
    });

    test('shourd march snapshot', () => {
        const { container } = render(<MyAwesomeApp />);

        expect(container).toMatchSnapshot();
    });

});