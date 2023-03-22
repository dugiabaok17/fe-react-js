import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../UserManage.scss";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  checkValidateInput = () => {
    let isValid = true;
    let arrInput = [
      "name",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        alert("Missing parameter: " + arrInput[i]);
        isValid = false;
        return isValid;
      }
    }
    return isValid;
  };

  async componentDidMount() {
    console.log("re-render",this.props.currentUser);
    if (this.props.title === "Update producer") {
      this.setState({
        name: this.props.currentUser.name,
      });
    }
  }

  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      if (this.props.title === "Update producer") {
        console.log("vào dây nè hehe")
        this.props.updateStore(this.props.currentUser.id,this.state);
      } else {
        this.props.createNewPosition(this.state);
      }
    }
  };

  render() {
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
              <div className="col form-group">
                <label className="form-label">Producer name</label>
                <input
                  // disabled={this.props.title === "Update store" ? true : false}
                  onChange={(e) =>
                    this.setState({
                      name: e.target.value,
                    })
                  }
                  value={this.state.name}
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
