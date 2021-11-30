import React, { Component } from 'react';
import TotalsDisplay from './components/TotalsDisplay.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(row, square) {
    let { turn, winner } = this.state;
    const { rows } = this.state;
    const squareInQuestion = rows[row][square];

    if (this.state.winner) return;
    if (squareInQuestion) return;

    rows[row][square] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    winner = checkWin(rows);

    this.setState({
      rows,
      turn,
      winner,
    });
  }

  render() {
    return(
      <div>
        <TotalsDisplay totalCalories = {this.props.totalCalories} />
      </div>
    );
  }
}

export default App;