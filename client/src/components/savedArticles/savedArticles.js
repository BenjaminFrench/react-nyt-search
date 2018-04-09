import React, { Component } from "react";
import moment from "moment";
import axios from "axios";

class SavedArticles extends Component {

  handleDelete = event => {
    event.preventDefault();

    axios.delete('/api/articles/' + event.target.getAttribute('data-id'))
    .then( response => {
      this.props.getSavedArticles();
    })
    .catch( error => console.log(error));
  }

  render() {
    return (
      <div className="savedArticles">
        <div className="card">
          <div className="card-header">
            Saved articles
          </div>
          <ul className="list-group">
            {
              this.props.articles.map( (article, index) => {
                return (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                    <div>
                      <a className="align-middle" href={article.url}>{article.title} </a><span className="article-date small"> {moment(article.date).format('MMMM Do YYYY')}</span>
                    </div>
                    <button onClick={this.handleDelete} data-id={article._id} className="btn btn-danger ml-3">Delete</button>
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

export default SavedArticles;
