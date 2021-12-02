import React from 'react';

// presents food name, has an input box for serving size, has update & delete button, displays calories
const FoodEntry = (props) => {
  return (
    <div id="foodEntry">
      <label>{props.name}
        <form onSubmit={(e) => {
              props.updateFood(e, props.name, document.querySelector(`#textbox${props.name}`).value)
              document.querySelector(`#textbox${props.name}`).value = null;
              }}>  
            <input id={`textbox${props.name}`} type="text" placeholder={`${props.last_serving} oz`}></input>
            <button type="submit" onClick={(e) => {
              props.updateFood(e, props.name, document.querySelector(`#textbox${props.name}`).value)
              document.querySelector(`#textbox${props.name}`).value = null;
              }}>Update</button>
        </form>
        <button type="submit" onClick={() => props.deleteFood(props.name)}>Delete</button>
        {props.last_entry_calories}
    </label>
    </div>
  );
};

export default FoodEntry;