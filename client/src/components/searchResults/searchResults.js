import React, { Component } from "react";
import "./searchResults.css"

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
                  <li className="list-group-item">
                    <a href={article.url}>{article.title}</a> date: {article.date}
                  </li>
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
