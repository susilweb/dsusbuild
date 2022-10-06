import React from "react";
const defaultState = {
  name: null,
  email: null,
  password: null,
  nameError: null,
  emailError: null,
  passwordError: null,
};
class CustomFormValidation extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  validate() {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    if (!this.state.name) {
      nameError = "Name field is required";
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.email || reg.test(this.state.email) === false) {
      emailError = "Email Field is Invalid ";
    }
    if (!this.state.password) {
      passwordError = "Password field is required";
    }
    if (emailError || nameError || passwordError) {
      this.setState({ nameError, emailError, passwordError });
      return false;
    }
    return true;
  }
  submit() {
    if (this.validate()) {
      console.warn(this.state);
      this.setState(defaultState);
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h3>React Custom Form Validation Example - Tutsmake.com</h3>
            <br />
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Name :</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.nameError}</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Email :</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.emailError}</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Password :</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.passwordError}</span>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => this.submit()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CustomFormValidation;
