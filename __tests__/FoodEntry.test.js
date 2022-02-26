import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import FoodEntry from '../src/components/FoodEntry';
import userEvent from '@testing-library/user-event';
import regeneratorRuntime from "regenerator-runtime";

describe('FoodEntry', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders FoodEntry component with props', () => {
    const entry = {
      name: 'pizza',
      last_serving: 4.3,
      last_entry_calories: 430
    }
    const deleteFood = jest.fn().mockName('deleteFood');
    const updateFood = jest.fn().mockName('updateFood');
    render(<FoodEntry 
      key = {0} 
      name = {entry.name} 
      last_serving = {entry.last_serving}
      last_entry_calories = {entry.last_entry_calories}
      deleteFood = {deleteFood}
      updateFood = {updateFood}
      />)

    // check for html elements with text
    expect(screen.getByText('pizza')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('4.3 oz')).toBeInTheDocument();
    expect(screen.getByText('430')).toBeInTheDocument();
  });

  test('calls "delete" prop on delete button click', async () => {
    const entry = {
      name: 'pizza',
      last_serving: '4.3 oz',
      last_entry_calories: 430
    }
    const deleteFood = jest.fn().mockName('deleteFood');
    const updateFood = jest.fn().mockName('updateFood');
    render(<FoodEntry 
      key = {0} 
      name = {entry.name} 
      last_serving = {entry.last_serving}
      last_entry_calories = {entry.last_entry_calories}
      deleteFood = {deleteFood}
      updateFood = {updateFood}
      />)

    userEvent.click(screen.getByText('Delete'));

    // Wait until the callback does not throw an error. In this case, that means
    // it'll wait until the mock function has been called once.
    await waitFor(() => expect(deleteFood).toHaveBeenCalledTimes(1))
  });
  
  test('calls "update" prop on update button click', async () => {
    const entry = {
      name: 'pizza',
      last_serving: '4.3 oz',
      last_entry_calories: 430
    }
    const deleteFood = jest.fn().mockName('deleteFood');
    const updateFood = jest.fn().mockName('updateFood');
    render(<FoodEntry 
      key = {0} 
      name = {entry.name} 
      last_serving = {entry.last_serving}
      last_entry_calories = {entry.last_entry_calories}
      deleteFood = {deleteFood}
      updateFood = {updateFood}
      />)

    userEvent.click(screen.getByText('Update'));
    expect(screen.getByText('Update')).toBeInTheDocument();

    // Wait until the callback does not throw an error. In this case, that means
    // it'll wait until the mock function has been called once.
    await waitFor(() => expect(updateFood).toHaveBeenCalledTimes(1))
  });
});