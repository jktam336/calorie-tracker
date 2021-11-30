import React from 'react';

// presents current day & total calorie count
const TotalsDisplay = (props) => {
  return (
    <div id="totalsDisplay">
      <h3>{Date.now()}</h3>
      <h3>Total Calories: {props.totalCalories}</h3>
    </div>
  );
};

export default TotalsDisplay;