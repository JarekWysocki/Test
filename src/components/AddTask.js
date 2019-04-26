import React, { Component } from "react";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toISOString().slice(0, 10)
  };
  handleDate = e => {
    this.setState({
      date: e.target.value
    });
  };
  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleChecked = e => {
    this.setState({
      checked: e.target.checked
    });
  };
  handleClick = () => {
    const { checked, date, text } = this.state;
    if (text.length > 3) {
      const task = this.props.add(text, date, checked);
      if (task) {
        this.setState({
          text: "",
          checked: false,
          date: new Date().toISOString().slice(0, 10)
        });
      }
    } else {
      alert("za krótki opis");
    }
  };

  render() {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="dodaj zadanie"
          value={this.state.text}
          onChange={this.handleText}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChecked}
          id="important"
        />
        <label htmlFor="important">Priorytet</label>
        <br />
        <label htmlFor="date">Do kiedy</label>
        <input type="date" value={this.state.date} onChange={this.handleDate} />
        <button onClick={this.handleClick}>Dodaj</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
