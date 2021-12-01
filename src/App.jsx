import React, { Component } from 'react';
import TotalsDisplay from './components/TotalsDisplay.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCalories: 0
    }
    this.addFood = this.addFood.bind(this);
  }

  addFood() {
    console.log(`add food`);
  }

  render() {
    return(
      <div>
        <TotalsDisplay totalCalories = {this.state.totalCalories} />
        <button onClick = {this.addFood} />
      </div>
    );
  }
}

export default App;