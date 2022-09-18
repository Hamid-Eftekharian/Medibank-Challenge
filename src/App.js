import React, { Component } from "react";
import _ from "lodash";
import Users from "./services/service.json";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.setState({ users: Users });
  }

  render() {
    const filteredUsers = this.state.users.filter(
      (item) => _.get(item, pets.type) === "Cat"
    );

    const sortedUsers = _.orderBy(filteredUsers, ["gender", "pets.type"]);

    return (
      <div>
        <h1>Female</h1>
        <ul>
          :
          {sortedUsers
            .filter((i) => i.gender === "Female")
            .map((item) => (
              <li key={item.pets.name}>Pet Name: {item.pets.name}</li>
            ))}
        </ul>
        <h1>Male</h1>
        <ul>
          :
          {sortedUsers
            .filter((i) => i.gender === "Male")
            .map((item) => (
              <li key={item.pets.name}>Pet Name: {item.pets.name}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
