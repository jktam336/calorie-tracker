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
        <label htmlFor="nameInputBox">Name
          <input id={`nameInputBox`} type="text"></input>
        </label>
        <label htmlFor="servingSizeInputBox">Serving Size
          <input id={`servingSizeInputBox`} type="text"></input>
        </label>
        <label htmlFor="caloriesInputBox">Calories per Serving
          <input id={`caloriesInputBox`} type="text"></input>
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