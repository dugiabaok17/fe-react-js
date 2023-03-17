import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./UserManage.scss";
import { getAllStoreName } from "../../services/storeService";
import { getAllPositionName } from "../../services/positionService";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",

      middleName: "",

      surname: "",

      gender: "",

      dateOfBirth: "",

      address: "",

      phoneNumber: "",

      email: "",

      status: 1,

      storeName: "",

      positionName: "",
      arrStoreName: [],
      arrPositionName: [],
    };
  }

  checkValidateInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "name",
      "middleName",
      "surname",
      "gender",
      "dateOfBirth",
      "address",
      "phoneNumber",
      "email",
      // "status",
      "storeName",
      "positionName",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        alert("Missing parameter: " + arrInput[i]);
        isValid = false;
        return isValid;
      }
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(this.state.email)) {
      alert("Invalid email");
      isValid = false;
      return isValid;
    }

    if (
      !/^(03|05|07|08)\d{8}$/.test(this.state.phoneNumber) ||
      !/^0\d{9}$/.test(this.state.phoneNumber)
    ) {
      alert("Invalid phone number");
      isValid = false;
      return isValid;
    }
    return isValid;
  };

  async componentDidMount() {
    let response = await getAllStoreName();
    let positionNameResponse = await getAllPositionName();
    console.log("re-render")
    if (this.props.title === "Update staff") {
      this.setState({
        arrStoreName: response,
        arrPositionName: positionNameResponse,
        name: this.props.currentUser.name,

        middleName: this.props.currentUser.middleName,

        surname: this.props.currentUser.surname,

        gender: this.props.currentUser.gender,

        dateOfBirth: this.props.currentUser.dateOfBirth,

        address: this.props.currentUser.address,

        phoneNumber: this.props.currentUser.phoneNumber,

        email: this.props.currentUser.email,

        status: 1,

        storeName: this.props.currentUser.storeName,

        positionName: this.props.currentUser.positionName,
      });
    } else {
      this.setState({
        arrStoreName: response,
        arrPositionName: positionNameResponse,
      });
    }
  }

  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();
    console.log("check validate0", isValid);
    if (isValid === true) {
      console.log("check at modelUser", this.state);
      this.props.createNewUser(this.state);
    }
    // if (isValid && this.props.isOpen) {
    //   this.setState({
    //     name: "",

    //     middleName: "",

    //     surname: "",

    //     gender: "",

    //     dateOfBirth: "",

    //     address: "",

    //     phoneNumber: "",

    //     email: "",

    //     storeName: "",

    //     positionName: "",
    //   });
    // }
  };

  render() {
    let arrGender = this.state.arrStoreName;
    let arrPosition = this.state.arrPositionName;
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggleParent}
        size="lg"
      >
        <ModalHeader toggle={this.props.toggleParent}>
          {this.props.title}
        </ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="col-6 form-group">
                <label className="form-label">Email</label>
                <input
                  onChange={(e) =>
                    this.setState({
                      email: e.target.value,
                    })
                  }
                  value={this.state.email}
                  className="form-control"
                  type="email"
                />
              </div>
              {/* <div hidden className="col-6 form-group custom-location-icons">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div> */}

              <div className="col-6 form-group">
                <label className="form-label">First name</label>
                <input
                  onChange={(e) =>
                    this.setState({
                      name: e.target.value,
                    })
                  }
                  value={this.state.name}
                  className="form-control"
                  type="text"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label mt-3">Middle name</label>
                <input
                  onChange={(e) =>
                    this.setState({
                      middleName: e.target.value,
                    })
                  }
                  value={this.state.middleName}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label mt-3">Last name</label>
                <input
                  onChange={(e) =>
                    this.setState({
                      surname: e.target.value,
                    })
                  }
                  value={this.state.surname}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-6">
                <label className="form-label mt-3">Address</label>
                <input
                  onChange={(e) =>
                    this.setState({
                      address: e.target.value,
                    })
                  }
                  value={this.state.address}
                  type="text"
                  className="form-control"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label mt-3">Phone number</label>
                <input
                  onChange={(e) =>
                    this.setState({
                      phoneNumber: e.target.value,
                    })
                  }
                  value={this.state.phoneNumber}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label mt-3">Birthday</label>
                <input
                  onChange={(e) =>
                    this.setState({
                      dateOfBirth: e.target.value,
                    })
                  }
                  value={this.state.dateOfBirth}
                  type="date"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label mt-3">Store name</label>
                <select
                  value={this.state.storeName}
                  id="inputState"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({
                      storeName: e.target.value,
                    });
                  }}
                >
                  {arrGender &&
                    arrGender.length > 0 &&
                    arrGender.map((data, index) => {
                      return <option key={index}>{data.storeName}</option>;
                    })}
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label mt-3">Position</label>
                <select
                  value={this.state.positionName}
                  id="inputState"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({
                      positionName: e.target.value,
                    });
                  }}
                >
                  {arrPosition &&
                    arrPosition.length > 0 &&
                    arrPosition.map((data, index) => {
                      return (
                        <option  key={index}>
                          {data.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="col-6 form-group custom-location-icons">
                <label className="form-label mt-3">Gender</label>
                <select
                  value={this.state.gender}
                  id="inputState"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({
                      gender: e.target.value,
                    });
                  }}
                >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn-create"
            color="primary"
            onClick={this.handleAddNewUser}
          >
            Save
          </Button>
          <Button
            className="btn-cancel"
            color="secondary"
            onClick={this.props.toggleParent}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
