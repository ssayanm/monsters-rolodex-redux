import React, { Component } from 'react';
import { CardList } from './components/Card-List-Component';
import { SearchBox } from './components/SearchBox-Component';
import { connect } from 'react-redux';
import { setSearchField } from './redux/actions';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

 
  render(){
    const { onSearchChange, searchField } = this.props;
    const filteredMonsters = this.state.monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App tc">
          <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder = 'Search Monsters'
          onSearchChange = {onSearchChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
