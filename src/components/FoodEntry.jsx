import React from 'react';

// presents food name, has an input box for serving size, has update & delete button, displays calories
const FoodEntry = (props) => {
  return (
    <div id="foodEntry">
      <label id='foodLabel'><span id='foodName'>{props.name}</span>
        <div id='foodFormDiv'>
          <form id='foodform' onSubmit={(e) => {
                props.updateFood(e, props.name, document.querySelector(`#textbox${props.name}`).value)
                document.querySelector(`#textbox${props.name}`).value = null;
                }}>  
              <input id={`textbox${props.name}`} type="text" placeholder={`${props.last_serving} oz`}></input>
              <button type="button" onClick={(e) => {
                props.updateFood(e, props.name, document.querySelector(`#textbox${props.name}`).value)
                document.querySelector(`#textbox${props.name}`).value = null;
                }}>Update</button>
          </form>
          <button type="submit" onClick={() => props.deleteFood(props.name)}>Delete</button>
        </div>
        <span id='individualCalories'>{props.last_entry_calories}</span>
    </label>
    </div>
  );
};

export default FoodEntry;