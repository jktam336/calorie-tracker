import React from 'react';

// presents current day & total calorie count
const TotalsDisplay = (props) => {
  const date = new Date();
  return (
    <div id="totalsDisplay">
      <h3>{date.toDateString()}</h3>
      <h3>Total Calories: {props.totalCalories}</h3>
    </div>
  );
};

export default TotalsDisplay;