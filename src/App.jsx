import React, { Component } from 'react';
import FoodEntry from './components/FoodEntry.jsx';
import TotalsDisplay from './components/TotalsDisplay.jsx';
import AddFoodMenu from './components/AddFoodMenu.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCalories: 0,
      foodEntries: []
    }
    this.addFood = this.addFood.bind(this);
    this.deleteFood = this.deleteFood.bind(this);
    this.updateFood = this.updateFood.bind(this);
  }

  addFood(name, serving_size, calories) {
    // e.preventDefault();
    const url = "http://localhost:3000/api/food";
    const data = {
      name: name,
      serving_size: serving_size, 
      calories: calories
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
          this.setState({
            totalCalories: result.totalCalories,
            foodEntries: result.foodEntries
          });
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

  deleteFood(name) {
    const url = `http://localhost:3000/api/food?name=${name}`;
    const init = {
      method: 'DELETE'
    }
    fetch(url, init)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            totalCalories: result.totalCalories,
            foodEntries: result.foodEntries
          });
          console.log(`delete response`, result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          throw(error);
        }
      )
  }

  updateFood(e, name, last_serving) {
    console.log(e);
    e.preventDefault();
    const url = `http://localhost:3000/api/food?name=${name}&last_serving=${last_serving}`;
    const init = {
      method: 'PATCH'
    }
    fetch(url, init)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            totalCalories: result.totalCalories,
            foodEntries: result.foodEntries
          });
          console.log(`update response`, result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          throw(error);
        }
      )
  }

  // fetch entries from database on component mount
  componentDidMount() {
    const url = "http://localhost:3000/api/";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            totalCalories: result.totalCalories,
            foodEntries: result.foodEntries
          });
          console.log(`get response`, result);
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
    const arrOfFoodEntries = this.state.foodEntries.map((entry, i) => <FoodEntry 
      key = {i} 
      name = {entry.name} 
      last_serving = {entry.last_serving}
      last_entry_calories = {entry.last_entry_calories}
      deleteFood = {this.deleteFood}
      updateFood = {this.updateFood}
      />)
    return(
      <div>
        <TotalsDisplay totalCalories = {this.state.totalCalories} />
        <AddFoodMenu addFood = {this.addFood} />
        {arrOfFoodEntries}
      </div>
    );
  }
}

export default App;