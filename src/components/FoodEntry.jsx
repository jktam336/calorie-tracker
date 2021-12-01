import React from 'react';

// presents food name, has an input box for serving size, has update & delete button, displays calories
const FoodEntry = (props) => {
  return (
    <div id="foodEntry">
      {/* <h3>{props.name}</h3> */}
      {/* <label htmlFor="foodEntry">This is food name: {props.name}<br/> */}
      <label>{props.name}
    
      <form onSubmit={(e) => props.updateFood(e, document.querySelector('#textbox').value)}>  
        {/* we don't want onsubmit to refresh the page. for now use button onclick, but I want to try preventDefault */}
        {/* <label htmlFor='textbox'>Location: */}
          <input id='textbox' type="text"></input>
          <button type="submit" onClick={() => props.updateFood(document.querySelector('#textbox').value)}>Update</button>
        {/* </label> */}
      </form>
      <button type="submit" onClick={() => props.deleteFood(props.name)}>Delete</button>
      {props.calories}
    </label>
    </div>
  );
};

export default FoodEntry;