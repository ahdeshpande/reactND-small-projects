import React from "react";

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === "";
  };

  render() {
    const { addItem } = this.props;
    const { value } = this.state;
    return (
      <form onSubmit={e => addItem(e, value)}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    );
  }
}
