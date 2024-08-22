import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        login: "Dummy",
        url: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/abhishekashokchauhan"
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    const { login, url, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt={name} />
        <h2>Login: {login}</h2>
        <h3>URL: {url}</h3>
        <h4>Contact: Abhishek Chauhan</h4>
      </div>
    );
  }
}

export default UserClass;
