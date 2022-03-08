import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TotalsDisplay from '../src/components/TotalsDisplay';
import userEvent from '@testing-library/user-event';
import regeneratorRuntime from "regenerator-runtime";

describe('TotalsDisplay', () => {
  test('renders TotalsDisplay component with props', () => {
    const props = {
      totalCalories: 430
    }

    render(<TotalsDisplay totalCalories = {props.totalCalories} />)

    // check for html elements with text
    expect(screen.getByText('Total Calories: 430')).toBeInTheDocument();
  });
});