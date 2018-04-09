import React, { Component } from 'react';
import api from "../utils/API"

import SearchResults from "../components/searchResults/searchResults";
import SearchForm from "../components/searchForm/searchForm";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }

  }

  handleSearchSubmit = (topic, startYear, endYear) => {
    if (startYear.length === 4) {
      startYear += '0101';
    }
    if (endYear.length === 4) {
      endYear += '0101';
    }

    api.searchArticles(topic, startYear, endYear)
    .then( response => {
      console.log(response.data);
      this.setState( {searchResults: response.data});
    })
    .catch( error => console.log(error));
  }

  render() {
    return (
      <div>
        
        <SearchForm submitHandler={this.handleSearchSubmit} />

        <SearchResults getSavedArticles={this.props.getSavedArticles} articles={this.state.searchResults} />
      </div>
    );
  }
}

export default SearchPage;