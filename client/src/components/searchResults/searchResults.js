import React, { Component } from "react";
import "./searchResults.css"

import SingleResult from "./singleResult";

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className="searchResults">
        <div className="card">
          <div className="card-header">
            Search Results
          </div>
          <ul className="list-group">
            {
              this.props.articles.map( article => {
                return (
                  <SingleResult getSavedArticles={this.props.getSavedArticles} article={article}/>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchResults;
