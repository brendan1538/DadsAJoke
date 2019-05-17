import React from 'react';

import './App.css';

import Search from './Search';
import SearchedJokes from './SearchedJokes';
import DadJokes from './DadJokes'
import '../redux/client';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: true
    }
  }
  // Conditional rendering functions (random jokes, or searched jokes)
  renderDadJokes() {
    return (
      <div>
        <DadJokes />
        <DadJokes />
        <DadJokes />
      </div>
    )
  }
  renderSearchJokes() {
    return (
      <div>
        <SearchedJokes searchTerm="duck" />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>dad's a joke!</h1>

          <div className="row search-row">
            <form className="col s12">
              <div className="row">
                <Search />
                <a className="waves-effect waves-light btn">Search</a>
              </div>
            </form>
          </div>

          <div className="row joke-row">
            {this.state.search ? this.renderSearchJokes() : this.renderDadJokes()}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
