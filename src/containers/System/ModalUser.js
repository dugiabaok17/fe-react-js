import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./UserManage.scss";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
    };
    
  }
  
  checkValidateInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phoneNumber",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        alert("Missing parameter: " + arrInput[i]);
        isValid = false;
        break;
      }
    }
    return isValid;
  };
  
  componentDidMount() {
    
  }
 
  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      this.props.createNewUser(this.state)
    }
    if(this.props.isOpen) {
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
      })
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggleParent}
        size="lg"
      >
        <ModalHeader toggle={this.props.toggleParent}>Modal title</ModalHeader>
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
                  type="text"
                />
              </div>
              <div className="col-6 form-group custom-location-icons">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={(e) => this.setState({password: e.target.value})}
                />
              </div>
              <div className="col-6 form-group">
                <label className="form-label mt-3">First name</label>
                <input
                  onChange={(e) =>
                    this.setState({
                      firstName: e.target.value,
                    })
                  }
                  value={this.state.firstName}
                  className="form-control"
                  type="text"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label mt-3">Last name</label>
                <input
                  onChange={(e) =>
                    this.setState({
                      lastName: e.target.value,
                    })
                  }
                  value={this.state.lastName}
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
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn-create"
            color="primary"
            onClick={this.handleAddNewUser}
          >
            Create
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
