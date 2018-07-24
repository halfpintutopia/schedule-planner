// import React from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
// import { logoutAction } from "../../store/actions/userActions";
import LoginForm from "../LoginForm/index";
import "./index.css";

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
        backgroundImage: url("https://ibb.co/ixLebT");
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{
            height: "100%",
            backgroundImage:
              "url('https://preview.ibb.co/nbHEvo/geo_bird_dk_web.png')"
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center"
          }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Login to your account
            </Header>
            <LoginForm />
            <Message>
              <a href="#">Forgot your password?</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginView;
