import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        image: "",
      },
    };
    console.log("Child Constructor: " + this.props.name);
  }

  // async
  componentDidMount() {
    // const data = await fetch("https://api.github.com/users/AshKemp");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo: json,
    // });
    console.log("Child componentDidMount: " + this.props.name);
    this.timer = setInterval(() => {
      console.log("NAMASTE REACT OP");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Child ComponentWillUnmount");
    clearInterval(this.timer);
  }
  render() {
    console.log("Child render: " + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>Name: {this.state.userInfo.name}</h2>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default ProfileClass;

/**
 * Parent Constructor
 * Parent render
 *    Child constructor
 *    Child render
 *    DOM is updated
 *    JSON is logged into console
 *    child componentDidMount
 *
 * Parent componentDidMount
 */
