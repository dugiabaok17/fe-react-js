import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import * as actions from "../../../store/actions";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrGender: [],
      arrPosition: [],
      arrRole: [],
    };
  }
  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getPositionStart();
    this.props.getRoleStart();
    // try {
    //   let res = await getAllCodeService("gender");
    //   this.setState({
    //     arrGender: res.data,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        arrGender: this.props.genderRedux,
      });
    }
    if (prevProps.positionRedux !== this.props.positionRedux) {
      this.setState({
        arrPosition: this.props.positionRedux,
      });
    }
    if (prevProps.roleRedux !== this.props.roleRedux) {
      this.setState({
        arrRole: this.props.roleRedux,

      });
    }
  }

  render() {
    let genders = this.state.arrGender;
    let positions = this.state.arrPosition;
    let roles = this.state.arrRole
    let isLoadingGender = this.props.isLoadingGender;
    console.log("check props", this.props);
    return (
      <div className="user-redux-container">
        <div className="title">learn react-redux staff redux Aluminum</div>
        <div>{isLoadingGender === true ? "loading gender" : ""}</div>
        <div className="user-redux-body">
          <div className="container">
            <div className="form-row mb-3 mt-3">
              <h4>
                <FormattedMessage id="manage-user.add" />{" "}
              </h4>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.email" />{" "}
                </label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.password" />{" "}
                </label>
                <input type="password" className="form-control" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.first-name" />{" "}
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.last-name" />{" "}
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.phone-number" />{" "}
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.address" />{" "}
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>
                  {" "}
                  <FormattedMessage id="manage-user.gender" />{" "}
                </label>
                <select id="inputState" className="form-control">
                  {genders &&
                    genders.length > 0 &&
                    genders.map((items, index) => {
                      return (
                        <option key={index}>
                          {" "}
                          {this.props.language === "en"
                            ? items.valueEn
                            : items.valueVi}{" "}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.position" />{" "}
                </label>
                <select id="inputState" className="form-control">
                  {positions &&
                    positions.length > 0 &&
                    positions.map((items, index) => {
                      return (
                        <option key={index}>
                          {" "}
                          {this.props.language === "en"
                            ? items.valueEn
                            : items.valueVi}{" "}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>
                  {" "}
                  <FormattedMessage id="manage-user.role-id" />{" "}
                </label>
                <select id="inputState" className="form-control">
                  {roles &&
                    roles.length > 0 &&
                    roles.map((items, index) => {
                      return (
                        <option key={index}>
                          {" "}
                          {this.props.language === "en"
                            ? items.valueEn
                            : items.valueVi}{" "}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div className="form-group col-md-6">
                <label>
                  <FormattedMessage id="manage-user.image" />{" "}
                </label>
                <select id="inputState" className="form-control">
                  <option defaultValue>Choose...</option>
                  <option>...</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              <FormattedMessage id="manage-user.save" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    positionRedux: state.admin.positions,
    roleRedux: state.admin.roles,
    isLoadingGender: state.admin.isLoadingGender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // processLogout: () => dispatch(actions.processLogout()),
    // changeLanguageApp: (language) => dispatch(changeLanguageApp(language)),
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
