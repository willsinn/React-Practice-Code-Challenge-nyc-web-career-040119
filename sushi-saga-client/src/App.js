import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import db from './db.json';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super();
    this.state = {
      sushis: []
    }
  }

componentWillMount = () => {

  this.setState({sushis: db.sushis})
}

  render() {
    console.log(this.state.sushis)
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}/>
        <Table />
      </div>
    );
  }
}

export default App;
