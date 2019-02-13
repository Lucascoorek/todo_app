import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    checked: false,
    text: "",
    date: this.minDate,
    error: false
  };
  handleChange = e => {
    if (e.target.type === "checkbox") {
      this.setState({
        checked: e.target.checked
      });
    } else {
      this.setState({
        [e.target.type]: e.target.value
      });
    }
  };
  handleClick = () => {
    const { checked, text, date } = this.state;
    if (text.length > 2) {
      const addTask = this.props.addTask(checked, text, date);
      if (addTask) {
        this.setState({
          checked: false,
          text: "",
          date: this.minDate,
          error: false
        });
      }
    } else {
      this.setState({ error: true });
    }
  };
  render() {
    const maxDate = this.minDate.slice(0, 4) * 1 + 1 + "-12-31";
    return (
      <div className="form">
        <div>
          <input
            type="text"
            placeholder="dodaj zadanie"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            checked={this.state.checked}
            id="important"
            onChange={this.handleChange}
          />

          <label htmlFor="impornant">Priorytet</label>
          <br />
          {this.state.error ? (
            <span style={{ color: "red" }}>Minimum 3 znaki</span>
          ) : null}
          <br />
          <label htmlFor="date">Do kiedy zrobić</label>
          <input
            type="date"
            value={this.state.date}
            id="date"
            min={this.minDate}
            max={maxDate}
            onChange={this.handleChange}
          />
          <br />
          <button onClick={this.handleClick}>Dodaj</button>
        </div>
      </div>
    );
  }
}

export default AddTask;
