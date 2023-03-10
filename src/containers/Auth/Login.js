import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import { handleLoginApi } from "../../services/userService";

import "./Login.scss";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
      errMessage: "",
    };
  }

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });
    try {
      let data = await handleLoginApi(this.state.username, this.state.password);
      if (data && data.errCode !== 0) {
        this.setState({
          errMessage: data.message,
        });
      }

      if (data && data.errCode === 0) {
        //todo
        console.log(data)
        this.props.userLoginSuccess(data)
        console.log("login success");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          });
        }
      }
    }
  };

  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={this.state.username}
                onChange={(e) => this.handleOnChangeInput(e)}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password:</label>
              <input
                type={this.state.isShowPassword === false ? "password" : "text"}
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={this.state.password}
                onChange={(e) => this.handleOnChangeInput(e)}
              />
              <span onClick={() => this.handleShowHidePassword()}>
                <i
                  className={
                    this.state.isShowPassword === true
                      ? "fas fa-eye custom-location"
                      : "fas fa-eye-slash custom-location"
                  }
                ></i>
              </span>
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
            </div>
            <div className="col-12">
              <button className="btn-login" onClick={() => this.handleLogin()}>
                Login
              </button>
            </div>
            <div className="col-12 mt-1">
              <span className="forgot-password">Forget your password ?</span>
            </div>
            <div className="col-12 text-center mt-2">
              <span className="text-other-login">Or login with:</span>
            </div>
            <div className="col-12 social-login ">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
