import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import Search from './Search';
import DadJokes from './DadJokes'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searching: this.props.searching,
      searchTerm: this.props.searchTerm
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>dad jokes</h1>

          <div className="row search-row">
            <form className="col s12">
              <div className="row">
                <Search />
              </div>
            </form>
          </div>

          <div className="row joke-row">
            <DadJokes searching={this.state.searching} searchTerm={this.state.searchTerm} />
          </div>
        </header>
      </div>
    );
  }
}

const mapState = state => {
  return {
    searching: state.searching,
    searchTerm: state.searchTerm,
  }
};
export default connect(mapState)(App);
