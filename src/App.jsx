import React, { Component } from 'react';
import FoodEntry from './components/FoodEntry.jsx';
import TotalsDisplay from './components/TotalsDisplay.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCalories: 0,
      foodEntries: [{
        name: 'test props',
        calories: 101
      }]
    }
    this.addFood = this.addFood.bind(this);
  }

  addFood() {
    console.log(`add food`);
    const url = "http://localhost:3000/api/food";
    const data = {
      name: "test5",
      serving_size: 1, 
      calories: 101
    };
    const init = {
      method: 'POST',  
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
    fetch(url, init)
      .then(res => res.json())
      .then(
        (result) => {
          // this.setState({
          //   isLoaded: true,
          //   items: result.items
          // });
          console.log(`post response`, result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          throw(error);
        }
      )
  }

  render() {
    const arrOfFoodEntries = this.state.foodEntries.map((entry, i) => <FoodEntry key = {i} name = {entry.name} calories = {entry.calories}/>)
    return(
      <div>
        <TotalsDisplay totalCalories = {this.state.totalCalories} />
        <button onClick = {this.addFood}>Add Food</button>
        {arrOfFoodEntries}
      </div>
    );
  }
}

export default App;