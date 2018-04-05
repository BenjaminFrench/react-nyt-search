import React, { Component } from "react";
import './searchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "topic": '',
      "startYear": '',
      "endYear": ''
    }
  }

  componentDidMount() {

  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {topic, startYear, endYear} = this.state;
    this.props.submitHandler(topic, startYear, endYear);
  }

  render() {
    return (
      <div className="searchForm">
        <div className="card">
          <div className="card-header">
            Search
          </div>
          <form id="search-form-body" onSubmit={this.onSubmit}>

            <div className="form-group">
              <label htmlFor="topic" className="text-center">Topic</label>
              <input type="text" className="form-control" name="topic" onChange={this.onChange} />
            </div>

            <div className="form-group">
              <label htmlFor="startYear">Start Year</label>
              <input type="text" className="form-control" name="startYear" onChange={this.onChange} />
            </div>

            <div className="form-group">
              <label htmlFor="endYear">End Year</label>
              <input type="text" className="form-control" name="endYear" onChange={this.onChange} />
            </div>

            <button type="submit" className="btn btn-info col-md-offset-5 col-md-2" id="searchBtn">Search</button>

          </form>
        </div>
      </div>
    );
  }
}

export default SearchForm;
