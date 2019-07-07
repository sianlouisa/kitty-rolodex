import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchField } from './components/search-field/SearchField';
import { SortOptions } from './components/sort-options/SortOptions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      isSortedAscending: false,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users =>
        this.setState({ monsters: users }, () =>
          console.log(this.state.monsters),
        ),
      )
      .catch(err => console.log(err));
  }

  compareNamesAscending = (a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  };

  compareNamesDescending = (a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    let comparison = 0;
    if (nameA < nameB) {
      comparison = 1;
    } else if (nameA > nameB) {
      comparison = -1;
    }
    return comparison;
  };

  onChange = e => this.setState({ searchField: e.target.value });

  handleSort = e => {
    const { monsters, isSortedAscending } = this.state;
    if (!isSortedAscending) {
      const sortedMonsters = monsters.sort(this.compareNamesAscending);
      this.setState({ monsters: sortedMonsters, isSortedAscending: true });
    } else {
      const sortedMonsters = monsters.sort(this.compareNamesDescending);
      this.setState({ monsters: sortedMonsters, isSortedAscending: false });
    }
  };

  render() {
    const { monsters, searchField, isSortedAscending } = this.state;

    const filteredMonsters = monsters.filter(monster => {
      const name = monster.name.toLowerCase();
      const email = monster.email.toLowerCase();
      const search = searchField.toLowerCase();
      return name.includes(search) || email.includes(search);
    });

    return (
      <div className="App">
        <SearchField handleSearchChange={this.onChange} />
        <SortOptions
          handleSort={this.handleSort}
          isSortedAscending={isSortedAscending}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
