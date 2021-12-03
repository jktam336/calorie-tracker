import React from 'react';

// presents food name, has an input box for serving size, has update & delete button, displays calories
const AddFoodMenu = (props) => {
  return (
    <div id="AddFoodMenu">
      {/* <form onSubmit={(e) => {
        // e.preventDefault();
        props.addFood(e, document.querySelector(`#nameInputBox`).value);
        }}>   */}
      {/* <form> */}
        <label htmlFor="nameInputBox">
          <input id={`nameInputBox`} type="text" placeholder='Name'></input>
        </label>
        <label htmlFor="servingSizeInputBox">
          <input id={`servingSizeInputBox`} type="text" placeholder='Serving Size'></input>
        </label>
        <label htmlFor="caloriesInputBox">
          <input id={`caloriesInputBox`} type="text" placeholder='Calories per Serving'></input>
        </label>
          <button type="submit" onClick = {() => {
            props.addFood(
              document.querySelector(`#nameInputBox`).value,
              document.querySelector(`#servingSizeInputBox`).value,
              document.querySelector(`#caloriesInputBox`).value
              );
            document.querySelector(`#nameInputBox`).value = null;
            document.querySelector(`#servingSizeInputBox`).value = null;
            document.querySelector(`#caloriesInputBox`).value = null
            }}>Add Food</button>
      {/* </form> */}
    </div>
  );
};

export default AddFoodMenu;