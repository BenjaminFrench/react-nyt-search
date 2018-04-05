import React, { Component } from "react";

class SavedArticles extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

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

export default SavedArticles;
