import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import "./index.css";
// const Trees = require("./trees.jpeg");

const HomepageHeading = ({ mobile }) => (
  <Container text className="ContainerHeading">
    <Header
      as="h1"
      content="Kairos Kalendar"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
    <Header
      as="h2"
      content="Your time is precious. Zeit ist das teuerste Kleinod."
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <Button primary size="huge" as="a" href="/login">
      Login
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

export default HomepageHeading;
