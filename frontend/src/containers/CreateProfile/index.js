import React, { Component } from "react";
import { Segment, Header, Button, Form, Divider } from "semantic-ui-react";

import FixedMenuLayout from "../FixedMenu/index";

const style = {
  h1: {
    marginTop: "3em"
  },
  h2: {
    margin: "4em 0em 2em"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  },
  last: {
    marginBottom: "300px"
  }
};

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "n", text: "Nonbinary", value: "nonbinary" }
];

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="landing-image">
        <Segment>
          <Header
            as="h1"
            content="Profile Creation"
            style={style.h1}
            textAlign="center"
          />

          <Form divided="vertically">
            <Form.Group>
              <Form.Input
                label="First name"
                placeholder="First name"
                width={6}
              />
              <Form.Input label="Last name" placeholder="Last name" width={6} />
              <Form.Select
                fluid
                label="Gender"
                options={options}
                placeholder="Gender"
                width={4}
              />
              {/* <Form.Input label="Last name" placeholder="Last name" width={4} /> */}
            </Form.Group>
            <Form.Group>
              <Form.Input label="Country" placeholder="Country" width={4} />
              <Form.Input
                label="Street & number"
                placeholder="Street & number"
                width={6}
              />
              <Form.Input
                label="County/Kanton"
                placeholder="County/Kanton"
                width={8}
              />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input label="Email" placeholder="Email" />
              <Form.Input label="Telephone" placeholder="Telephone" />
            </Form.Group>
          </Form>
          <Divider inverted section />
          <Segment inverted style={{ background: "grey" }}>
            <Form inverted>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Contract number"
                  placeholder="Contract number"
                />
                <Form.Input
                  fluid
                  label="Contract started"
                  placeholder="Contract started"
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Segment>
          <FixedMenuLayout />
        </Segment>
      </div>
    );
  }
}

export default CreateProfile;
