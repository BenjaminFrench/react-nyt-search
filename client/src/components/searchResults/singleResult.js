import React, { Component } from 'react';
import moment from "moment";
import axios from "axios";

class SingleResult extends Component {
  handleSave = event => {
    event.preventDefault();
    event.persist();

    // post to /api/articles
    var newArticle =  {
      title: this.props.article.headline.main,
      url: this.props.article.web_url,
      date: this.props.article.pub_date
    };

    axios.post('/api/articles', newArticle)
    .then( response => {
      this.props.getSavedArticles();
      event.target.innerText = 'Saved';
      event.target.disabled = true;
    })
    .catch( error => console.log(error));
  }

  render() {
    return (
      <div>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <a className="align-middle" href={this.props.article.web_url}>{this.props.article.headline.main} </a><span className="article-date small"> {moment(this.props.article.pub_date).format('MMMM Do YYYY')}</span>
          </div>
          <button onClick={this.handleSave} className="btn btn-success ml-3">Save</button>
        </li>
      </div>
    );
  }
}

export default SingleResult;