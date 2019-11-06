import React, { Component } from 'react';
import { CardList } from './components/Card-List-Component';
import { SearchBox } from './components/SearchBox-Component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App tc">
          <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder = 'Search Monsters'
          handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
