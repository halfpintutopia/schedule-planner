import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Icon,
  Link,
  Input,
  Popup
} from "semantic-ui-react";

const FixedMenuLayout = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Image
            size="mini"
            src="https://preview.ibb.co/jEUGO8/kairos.png"
            style={{ marginRight: "1.5em" }}
          />
          Kairos Kalendar
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>

        <Dropdown item simple text="Menu">
          <Dropdown.Menu>
            <Dropdown.Item href="/overview">Main Overview</Dropdown.Item>
            <Dropdown.Item />
            <Dropdown.Divider />
            <Dropdown.Header>New</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Edit - Add</span>
              <Dropdown.Menu>
                <Dropdown.Item href="/create">Register employee</Dropdown.Item>
                <Dropdown.Item>Create Notifications</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item as="a" align="right">
          <Popup
            trigger={<Input icon="search" placeholder="Search..." />}
            header="Search"
            content="You may search by name, employee ID or email address"
            on="focus"
          />
        </Menu.Item>
      </Container>
    </Menu>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Site Map</List.Item>
                <List.Item as="a">Contact us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">FAQs</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as="h4" content="Kairos Kalendar" />
              <p>
                Made with <Icon name="heart" color="red" /> by Sirinya
                Richardson
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
