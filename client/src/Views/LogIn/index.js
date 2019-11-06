import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import { Redirect, Link } from "react-router-dom";
import { Container, Row, Col } from "../../Components/Grid";
import { Input, FormBtn } from "../../Components/Form";
import API from "../../utils/API";
import Cookies from "js-cookie";
import LoginModal from "../../Components/LoginModal";
import Title from "../../Components/TitleAnimation";
import { runInThisContext } from "vm";

class LogIn extends Component {
  state = {
    userEmail: "",
    userPassword: "",
    isAuthed: ""
  };

  componentDidMount() {
    // this.setState({ isAuthed: undefined });
    let cookie = Cookies.get("userToken");
    console.log(cookie);
  }

  logSubmit = userObj => {
    API.logUser(userObj)
      .then(function(response) {
        console.log(response.data);
        if (response.data.token) {
          Cookies.set("userToken", response.data.token);
        }
        alert(response.data.message);
        if (response.data.isAuthed === true) {
          window.location.replace("/");
        }
        // if (response.data.isAuthed === false) {
        //   this.setState({ isAuthed: false });
        // } else if (response.data.isAuthed === true) {
        //   this.setState({ isAuthed: true });
        // }
      })
      // .then(window.location.replace("/"))
      .catch(function(error) {
        console.log(error);
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  handleLogIn = event => {
    event.preventDefault();
    if (
      this.validateEmail(this.state.userEmail) &&
      !this.state.userEmail.split("").includes(" ")
    ) {
      const logDetails = {
        email: this.state.userEmail,
        password: this.state.userPassword
      };
      this.logSubmit(logDetails);
    } else {
      alert("Your email is invalid");
    }
  };

  render() {
    return (
      <Container>
        <Title>
          <h1>Log In</h1>
        </Title>
        <br />
        <Row className="justify-content-center">
          <Col size="md-6">
            <form>
              <Input
                value={this.state.userEmail}
                onChange={this.handleInputChange}
                name="userEmail"
                placeholder="Email Address"
              />
              <Input
                value={this.state.userPassword}
                onChange={this.handleInputChange}
                name="userPassword"
                placeholder="Password"
                type="Password"
              />
              <FormBtn
                disabled={!(this.state.userEmail && this.state.userPassword)}
                onClick={this.handleLogIn}
              >
                LOGIN
              </FormBtn>
            </form>

            <p>
              Don't have an account?
              <br />
              <Link to="/SignUp"> Sign Up Here</Link>{" "}
              <button
                onClick={() =>
                  API.removeAllUsers().then(res => console.log(res))
                }
              >
                ADMIN remove all users
              </button>
              <button
                onClick={() =>
                  API.deleteAllOutfits().then(res => console.log(res))
                }
              >
                ADMIN remove all outfits
              </button>
            </p>
          </Col>
        </Row>
        <LoginModal
          auth={this.state.isAuthed ? this.state.isAuthed : undefined}
        />
      </Container>
    );
  }
}

export default LogIn;
