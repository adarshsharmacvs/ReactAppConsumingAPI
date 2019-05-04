import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://comments-api.azurewebsites.net/api/Comments")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div> Loading.. </div>;
    }

    return (
      <div className="FormCenter">
        <form>
          <div className="FormField">
            {items.reverse().map(item => (
              <div key={item.id}>
                <div>
                  <label className="FormField__Label" htmlFor="Description">
                    {item.id} ) {item.body}
                  </label>
                  <label>
                    <span>{item.name}</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    );
  }
}

export default AddComment;
