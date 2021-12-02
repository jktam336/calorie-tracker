import React from 'react';

// presents food name, has an input box for serving size, has update & delete button, displays calories
const AddFoodMenu = (props) => {
  return (
    <div id="AddFoodMenu">
      {/* <label>{props.name}
        <form onSubmit={(e) => props.updateFood(e, props.name, document.querySelector(`#textbox${props.name}`).value)}>  
            <input id={`textbox${props.name}`} type="text"></input>
            <button type="submit" onClick={(e) => props.updateFood(e, props.name, document.querySelector(`#textbox${props.name}`).value)}>Update</button>
        </form>
        <button type="submit" onClick={() => props.deleteFood(props.name)}>Delete</button>
        {props.last_entry_calories}
    </label> */}
    <form onSubmit={(e) => {
        // e.preventDefault();
        props.addFood(e, document.querySelector(`#addFoodInputBox`).value);
        }}>  
          <input id={`addFoodInputBox`} type="text"></input>
          <button type="submit" onClick = {() => props.addFood(document.querySelector(`#addFoodInputBox`).value)}>Add Food</button>
        </form>
    </div>
  );
};

export default AddFoodMenu;