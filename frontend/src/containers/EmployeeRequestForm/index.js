import React, { Component } from "react";
import {
  Header,
  Popup,
  Grid,
  Group,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Icon,
  Column,
  Row,
  Field
} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { fetchRequest } from "../../store/actions/userActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Calendar from "react-input-calendar";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "n", text: "Nonbinary", value: "nonbinary" }
];

class EmployeeRequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      first_name: "",
      last_name: "",
      holiday_from: "",
      holiday_until: "",
      request: "",
      description: ""
    };
  }

  handleHoliday = e => {
    this.setState({
      request: e.target.value
    });
  };
  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleFirstNameChange = e => {
    this.setState({ first_name: e.target.value });
  };

  handleLastNameChange = e => {
    this.setState({ last_name: e.target.value });
  };

  handleHolidayFromChange = e => {
    this.setState({ holiday_from: e.target.value });
  };

  handleHolidayUntilChange = e => {
    this.setState({ holiday_until: e.target.value });
  };

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  handleSubmitRequest = e => {
    e.preventDefault();
    this.props.dispatch(fetchRequest({ ...this.state }));
  };

  handleDateFromChange = e => {
    console.log("the event", e);
    this.setState({ holiday_from: e.target.value });
  };
  handleDateUntilChange = e => {
    this.setState({ holiday_until: e.target.value });
  };

  render() {
    return (
      <Popup
        trigger={
          <Button primary floated="right" style={{ background: "teal" }}>
            Make request
            <Icon name="right chevron" />
          </Button>
        }
        flowing
        hoverable
      >
        <Grid>
          <Grid.Column textAlign="center">
            <Header as="h4">Request</Header>
            <Form>
              <Form.Group widths="equal">
                <Form.Field
                  control={Input}
                  label="First name"
                  placeholder="First name"
                  onChange={this.handleFirstNameChange}
                />
                <Form.Field
                  control={Input}
                  label="Last name"
                  placeholder="Last name"
                  onChange={this.handleLastNameChange}
                />
              </Form.Group>
              <label>From</label>
              <Form.Group>
                <Form.Field>
                  {/* <input
                    name="holiday_from"
                    type="date"
                    // disabled={this.state.mode}
                    value={moment(this.state.holiday_from).format("yyyy-MM-dd")}
                    dateformat="yyyy-mm-dd"
                    // className="form-control"
                    onChange={this.handleDateFromChange}
                  /> */}
                  <Calendar
                    name="holiday_from"
                    type="date"
                    value={this.state.holiday_from}
                    onChange={this.handleDateFromChange}
                    placeholder="dd/mm/yyyy"
                  />
                </Form.Field>
                <Form.Field>
                  <input type={"day"} name={"bdaymonth"} />
                  {/* <Calendar
                    name="holiday_until"
                    type="date"
                    value={this.state.holiday_until}
                    onChange={this.handleDateUntilChange}
                    placeholder="dd/mm/yyyy"
                  /> */}
                </Form.Field>
              </Form.Group>
              <Form.Group inline>
                <label>Type of request</label>
                <Form.Field
                  id="Holiday"
                  control={Radio}
                  label="Holiday"
                  value="holiday"
                  checked={this.state.request === "holiday"}
                  onChange={this.handleHoliday}
                />
                <Form.Field
                  id="time-back"
                  control={Radio}
                  label="Time-back"
                  value="time-back"
                  checked={this.state.request === "time-back"}
                  onChange={this.handleHoliday}
                />
                <Form.Field
                  id="shift-swap"
                  control={Radio}
                  label="Shift-swap"
                  value="shift-swap"
                  checked={this.state.request === "shift-swap"}
                  onChange={this.handleHoliday}
                />
              </Form.Group>
              <Form.Field
                id="description"
                control={TextArea}
                label="Additional information"
                placeholder="Please add any details if relevant to the request."
              />
            </Form>
            <Button onSubmit={this.handleSubmitRequest}>Submit</Button>
          </Grid.Column>
        </Grid>
      </Popup>
    );
  }
}

const mapStateToProps = dispatch => ({
  request: data => dispatch(request(data))
});

export default connect()(withRouter(EmployeeRequestForm));
