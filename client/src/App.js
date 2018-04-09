import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";

import SearchResults from "./components/searchResults/searchResults";
import SavedArticles from "./components/savedArticles/savedArticles";
import SearchForm from "./components/searchForm/searchForm";

import api from "./utils/API"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      savedArticles: []
    }

  }

  componentDidMount() {
    this.getSavedArticles();
  }

  // get saved articles from /api/articles and update state
  getSavedArticles = () => {
    api.getArticles().then( articles => {
      this.setState({savedArticles: articles.data } );
    })
    .catch( err => console.log(err));
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
      <div className="App">
        <div className="container">
          <div className="jumbotron">
            <h1>React nyt search</h1>
          </div>
          <SearchForm submitHandler={this.handleSearchSubmit}/>

          <SearchResults getSavedArticles={this.getSavedArticles} articles={this.state.searchResults}/>
          
          <SavedArticles getSavedArticles={this.getSavedArticles} articles={this.state.savedArticles}/>
        </div>
      </div>
    );
  }
}

export default App;
