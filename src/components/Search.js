import React from 'react';
import { connect } from 'react-redux';

import { searchJokes } from '../redux/actions';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ""
		}
		this.handleSearch = this.handleSearch.bind(this);
	}

	updateInput(i) {
		this.setState({ input: i });
	}

	handleSearch() {
		this.props.searchJokes(this.state.input);
		// this.props.isSearching(true);
	}

	_handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			this.handleSearch();
		}
	}

	render() {
		return (
			<div className="input-field col s12">
				<i className="material-icons prefix">search</i>
				<input type="text" id="search-input" onChange={e => this.updateInput(e.target.value)} onKeyDown={this._handleKeyDown} />
				<label htmlFor="search-input">Search for Dad jokes...</label>
				<a className="waves-effect waves-light btn" onClick={this.handleSearch}>Search</a>
			</div>
		);
	}
}
const mapState = state => {
	return {
		searchTerm: state.searchTerm
	}
}
const mapDispatchToProps = dispatch => {
	return {
		searchJokes: (input) => dispatch(searchJokes(input))
	};
}
export default connect(mapState, mapDispatchToProps)(Search);