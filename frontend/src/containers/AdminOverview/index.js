import React from "react";
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

const AdminOverview = () => (
  <div>
    <Header
      as="h1"
      content="Admin Overview"
      style={style.h1}
      textAlign="center"
    />
    <Header
      as="h3"
      content="Responsive Vertical Divider"
      style={style.h3}
      textAlign="center"
    />
    <Grid container columns={2} divided relaxed stackable>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>*/}
    <Header
      as="h3"
      content="Employee away"
      style={style.h3}
      textAlign="center"
    />
    <Container>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employee</Table.HeaderCell>
            <Table.HeaderCell>Shift</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  rounded
                  size="mini"
                  src="/assets/images/wireframe/square-image.png"
                />
                <Header.Content>
                  Lena
                  <Header.Subheader>Team: </Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>22</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  rounded
                  size="mini"
                  src="/assets/images/wireframe/square-image.png"
                />
                <Header.Content>
                  Matthew
                  <Header.Subheader>Team</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>15</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  rounded
                  size="mini"
                  src="/assets/images/wireframe/square-image.png"
                />
                <Header.Content>
                  Lindsay
                  <Header.Subheader>Team</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>12</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  rounded
                  size="mini"
                  src="/assets/images/wireframe/square-image.png"
                />
                <Header.Content>
                  Mark
                  <Header.Subheader>Team</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>11</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
    <Header
      as="h1"
      content="Admin Overview"
      style={style.h1}
      textAlign="center"
    />
    <Container>
      <Item.Group divided>
        <Item>
          <Item.Image src="/assets/images/wireframe/image.png" />
          <Item.Content>
            <Item.Header as="a">Create new employee profile</Item.Header>
            <Item.Description>
              Write notifications to remind users about upcoming changes,
              holidays etc.
            </Item.Description>
            <Item.Extra>
              <Button floated="right" primary>
                Create
                <Icon name="right add user" />
              </Button>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src="/assets/images/wireframe/image.png" />
          <Item.Content>
            <Item.Header as="a">Reminders</Item.Header>
            <Item.Description>
              Write notifications to remind users about upcoming changes,
              holidays etc.
            </Item.Description>
            <Item.Extra>
              <Button floated="right" primary>
                Primary
                <Icon name="right idea" />
              </Button>
              <Label>Write new</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image src="/assets/images/wireframe/image.png" />
          <Item.Content>
            <Item.Header as="a">Content Header</Item.Header>
            <Item.Description>
              A description which may flow for several lines and give context to
              the content.
            </Item.Description>
            <Item.Extra>
              <Button primary floated="right">
                Primary
                <Icon name="right chevron" />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <FixedMenuLayout />
    </Container>
  </div>
);

export default AdminOverview;
