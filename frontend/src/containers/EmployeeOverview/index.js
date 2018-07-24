import React, { Component } from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table
} from "semantic-ui-react";
import "./index.css";
import FixedMenu from "../FixedMenu/index";
import EmployeeRequestForm from "../EmployeeRequestForm/index";

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

class EmployeeOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header
          as="h1"
          content="G'day. Here is your overview"
          style={style.h1}
          textAlign="center"
        />
        <Image />
        <Grid celled container stackable>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Segment>Holidays</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Schedule</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Overtime</Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment>Notifications</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Pending Requests</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Header
          as="h2"
          content="Requests"
          style={style.h2}
          textAlign="center"
        />
        <Container>
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Header as="a">Holiday</Item.Header>
                <Item.Meta />
                <Item.Description>
                  Please ensure you make your submit your holiday request at
                  least 4 weeks before the requested start date of your holiday.
                </Item.Description>
                <Item.Extra>
                  <EmployeeRequestForm />
                  <Label>Limited</Label>
                </Item.Extra>
              </Item.Content>
            </Item>
            <Item>
              <Item.Content>
                <Item.Header as="a">Time Back</Item.Header>
                <Item.Meta />
                <Item.Description>
                  You are only able to receive time-back if you have collected
                  plus 30 minutes.
                </Item.Description>
                <Item.Extra>
                  <EmployeeRequestForm />
                </Item.Extra>
              </Item.Content>
            </Item>
            <Item>
              <Item.Content>
                <Item.Header as="a">Shift Swap</Item.Header>

                <Item.Meta />
                <Item.Description>
                  A copy of your shift swap request will be sent to your
                  colleague. The shift swap will be confirmed once they have
                  confirmed.
                </Item.Description>
                <Item.Extra>
                  <EmployeeRequestForm />
                  <Label>
                    <div className="ui image label">
                      <img src="https://i.imgur.com/I80W1Q0.png" />
                      Baltz
                      <i className="delete icon" />
                    </div>
                  </Label>
                  <Label>
                    <div className="ui image label">
                      <img src="http://www.syracuse-computer-repairs.com/images/396f2d24539351.56335ec733642.png" />
                      Morritz
                      <i className="delete icon" />
                    </div>
                  </Label>
                  <Label>
                    <div className="ui image label">
                      <img src="http://www.themes-lab.com/conbis/assets/images/avatars/avatar8_big@2x.png" />
                      Getrude
                      <i className="delete icon" />
                    </div>
                  </Label>
                </Item.Extra>
              </Item.Content>
            </Item>
            <Item>
              <Item.Content>
                <Item.Header as="a">Preferences</Item.Header>
                <Item.Meta />
                <Item.Description>
                  If you have a shift preference please submit your request
                  here.
                </Item.Description>
                <Item.Extra>
                  <EmployeeRequestForm />
                </Item.Extra>
              </Item.Content>
            </Item>
            <Item>
              <Item.Content>
                <Item.Header as="a">FAQs</Item.Header>
                <Item.Meta />
                <Item.Description>
                  Your guide to your schedule.
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
          <FixedMenu />
        </Container>
      </div>
    );
  }
}

export default EmployeeOverview;
