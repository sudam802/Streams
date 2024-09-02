import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="ui error message">{error}</div>;
    }
  }
  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    return (
      <div>
        <label htmlFor="">{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };
  //
  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createStream(formValues);
  };
  render() {
    console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form container error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter the title"
        ></Field>
        <Field
          name="description"
          component={this.renderInput}
          label={"enter the descriotion"}
        ></Field>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Title is empty";
  }
  if (!formValues.description) {
    errors.description = "No description";
  }
  return errors;
};
const formWrapped = reduxForm({
  form: "streamCreate",
  validate: validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
