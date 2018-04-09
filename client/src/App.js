import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";


import SavedArticles from "./components/savedArticles/savedArticles";

import api from "./utils/API"
import SearchPage from "./pages/searchPage";
import Navbar from "./components/navbar/navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <div className="container">
  
            <Route exact path="/search" render={(routeProps) => (
              <SearchPage {...routeProps} getSavedArticles={this.getSavedArticles}/>
            )} />

            <Route path="/" render={(routeProps) => (
              <SavedArticles {...routeProps} getSavedArticles={this.getSavedArticles} articles={this.state.savedArticles}/>
            )} />
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
