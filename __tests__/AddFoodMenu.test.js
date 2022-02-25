import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AddFoodMenu from '../src/components/AddFoodMenu';
import userEvent from '@testing-library/user-event';
import regeneratorRuntime from "regenerator-runtime";

describe('AddFoodMenu', () => {
  test('renders AddFoodMenu component with props', () => {
    const onClick = jest.fn();
    render(<AddFoodMenu addFood={onClick}/>)

    // check for buttons
    expect(screen.getByText('Add Food')).toBeInTheDocument();

    // check for html elements with text
    const inputBoxes = screen.getAllByRole('textbox');
    expect(inputBoxes.length).toBe(3);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Serving Size')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Calories per Serving')).toBeInTheDocument();
  });

  test('calls "onClick" prop on add food button click', async () => {
    const onClick = jest.fn();
    render(<AddFoodMenu addFood={onClick}/>)

    await userEvent.click(screen.getByText('Add Food'));
    expect(screen.getByText('Add Food')).toBeInTheDocument();

    // Wait until the callback does not throw an error. In this case, that means
    // it'll wait until the mock function has been called once.
    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1))
  });
});