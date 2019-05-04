import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

class GetAllComments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      body: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
    axios
      .post("https://comments-api.azurewebsites.net/api/Comments", this.state)
      .then(response => {
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { id, name, body } = this.state;
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="id">
              Id
            </label>
            <input
              type="text"
              name="id"
              className="FormField__Input"
              placeholder="Enter your Employee ID"
              value={id}
              onChange={this.changeHandler}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="FormField__Input"
              placeholder="Enter your Name"
              value={name}
              onChange={this.changeHandler}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="comment">
              Comment
            </label>
            <input
              type="text"
              name="body"
              className="FormField__Input"
              placeholder="Enter your Comment"
              value={body}
              onChange={this.changeHandler}
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20" type="submit">
              Add Comment
            </button>
            <Link to="/" className="FormField__Link">
              Show All Comments
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default GetAllComments;
