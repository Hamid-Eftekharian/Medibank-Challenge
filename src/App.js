import React, { Component } from "react";
import axios from "axios";
import { Cats } from "./Cats";

class App extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const { data: users } = await axios.get(apiEndpoint);
    this.setState({ users });
  }

  render() {
    const users = this.state.users;

    function getCatsByOwnerGender(gender) {
      const filteredCats = [];
      users
        .filter((item) => item.gender === gender)
        .map((item) => {
          const pets = item.pets;
          if (pets !== null) {
            pets.forEach((pet) => {
              if (pet.type === "Cat") {
                filteredCats.push(pet);
              }
            });
          }
        });
      return filteredCats;
    }

    return (
      <>
        <div>
          <h1>Male</h1>
          <Cats cats={getCatsByOwnerGender("Male")} />
        </div>
        <div>
          <h1>Female</h1>
          <Cats cats={getCatsByOwnerGender("Female")} />
        </div>
      </>
    );
  }
}

export default App;

const apiEndpoint =
  "https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json";
