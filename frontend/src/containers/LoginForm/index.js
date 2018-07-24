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
import { fetchLogin, checkRole } from "../../store/actions/userActions";
import "../Login/index.css";
import { withRouter } from "react-router-dom";
// import kairosLogo from "./kairos.jpg";
// import axios from "axios";

var queryString = require("simple-query-string");

class LoginForm extends Component {
  constructor(props) {
    super(props);
    // this.parsed = queryString.parse(this.props.location.search);

    // reset login status
    // this.props.dispatch(userActions.logoutAction());

    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }

  handleEmailChange = e => {
    // dependent on field and their value of the field
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleLoginSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.dispatch(fetchLogin(user)).then(data => {
      this.props.dispatch(checkRole(data)).then(data => {
        console.log(data);
        if (data.is_superuser === true) {
          this.props.history.push("/admin");
        } else {
          this.props.history.push("/overview");
        }
      });
    });
  };

  // handleLoginSubmit = e => {
  //   e.preventDefault();
  //   const user = {
  //     username: "test",
  //     password: "something1"
  //   };
  //   this.props.dispatch(fetchLogin(user)).then(data => {
  //     this.props.dispatch(checkRole(data)).then(data => {
  //       if (data) {
  //         this.props.history.push("/admin");
  //       } else {
  //         this.props.history.push("/overview");
  //       }
  //     });
  //   });
  // };

  render() {
    return (
      <div className="login-form">
        <Form size="large" onSubmit={this.handleLoginSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleEmailChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />

            <Button color="grey" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = dispatch => ({
  login: data => dispatch(login(data))
});

// export default LoginForm;
// export default connect()(LoginForm);
export default connect()(withRouter(LoginForm));
