import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import SearchResults from "./components/searchResults/searchResults";
import SavedArticles from "./components/savedArticles/savedArticles";

import api from "./utils/API"
import SearchForm from "./components/searchForm/searchForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [1,2,3,4,4],
      savedArticles: []
    }

  }

  componentDidMount() {
    this.getSavedArticles();
  }

  // get saved articles from /api/articles and update state
  getSavedArticles() {
    api.getArticles().then( articles => {
      this.setState({savedArticles: articles.data } );
    })
    .catch( err => console.log(err));
  }

  handleSearchSubmit = (topic, startYear, endYear) => {
    console.log(topic,startYear,endYear);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron">
            <h1>React nyt search</h1>
          </div>

          <SearchForm submitHandler={this.handleSearchSubmit}/>

          <SearchResults articles={this.state.searchResults}/>
          
          <SavedArticles articles={this.state.savedArticles}/>
        </div>
      </div>
    );
  }
}

export default App;
