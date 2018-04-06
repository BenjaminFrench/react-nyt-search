import React, { Component } from "react";
import "./searchResults.css"

import moment from "moment";

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
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <a className="align-middle" href={article.web_url}>{article.headline.main} </a><span className="article-date small"> {moment(article.pub_date).format('MMMM Do YYYY')}</span>
                        </div>
                        <button className="btn btn-success ml-3">Save</button>
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
