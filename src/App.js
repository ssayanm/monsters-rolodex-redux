import React, { Component } from "react";
import { CardList } from "./components/Card-List-Component";
import { SearchBox } from "./components/SearchBox-Component";
import { connect } from "react-redux";
import { setSearchField } from "./redux/search/search.action";
import { requestMonsters } from "./redux/monster/monster.action";
import "./App.css";

const mapStateToProps = (state) => ({
  searchField: state.search.searchField,
  monsters: state.monster.monsters,
  isPending: state.monster.isPending,
  error: state.monster.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestMonsters: () => dispatch(requestMonsters()),
});

class App extends Component {
  componentDidMount() {
    this.props.onRequestMonsters();
  }

  render() {
    const { onSearchChange, searchField, monsters } = this.props;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App tc">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          onSearchChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
