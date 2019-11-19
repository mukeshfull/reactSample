import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addCat } from "./../actions/cats";
function mapDispatchToProps(dispatch) {
  return {
    addCat: cats => dispatch(addCat(cats))
  };
}
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      label: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { label } = this.state;
    const id = uuidv1();
    this.props.addCat({ label, id });
    this.setState({ label: "" });
  }
  render() {
    const { label } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="label">label</label>
          <input
            type="text"
            className="form-control"
            id="label"
            value={label}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}
const CatForm = connect(null, mapDispatchToProps)(ConnectedForm);
export default CatForm;