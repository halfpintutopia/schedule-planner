import React, { Component } from "react";
import {
  Header,
  Popup,
  Grid,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Icon
} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { fetchRequest } from "../../store/actions/userActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Request from "../Request/index";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
];

class FormRequest extends Component {
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

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }

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

  handleRequestChange = e => {
    this.setState({ request: e.target.value });
  };

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  render() {
    const { value } = this.state;
    return (
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
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleDateChange}
        />
        <label>Until</label>
        <DatePicker
          label="Until"
          selected={this.state.startDate}
          onChange={this.handleDateChange}
        />
        <Form.Group inline>
          <label>Type of request</label>
          <Form.Field
            control={Radio}
            label="Holiday"
            value="holiday"
            checked={value === "holiday"}
            onChange={this.handleRequestChange}
          />
          <Form.Field
            control={Radio}
            label="Time-back"
            value="time-back"
            checked={value === "time-back"}
            onChange={this.handleRequestChange}
          />
          <Form.Field
            control={Radio}
            label="Shift swap"
            value="shift-swap"
            checked={value === "shift-swap"}
            onChange={this.handleRequestChange}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="Additional information"
          placeholder="Please add any details if relevant to the request."
        />
      </Form>
    );
  }
}

const mapStateToProps = dispatch => ({
  information: data => dispatch(information(data))
});

export default connect()(withRouter(FormRequest));
