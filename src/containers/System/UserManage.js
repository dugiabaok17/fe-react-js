import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
  getAllUsers,
  createNewUser,
  delUser,
  updateNewUser
} from "../../services/userService";
import ModalUser from "./ModalUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
      dataUpdate: [],
      title: "",
      isOpenModel: false,
    };
  }

  async componentDidMount() {
    await this.getAllUsersFromReact();
  }

  getAllUsersFromReact = async () => {
    let response = await getAllUsers("ALL");
    if (response) {
      this.setState({
        arrUsers: response,
      });
    }
  };

  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
      isOpenModel: !this.state.isOpenModel,
      title: "Add new staff",
    });
  };

  toggle = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
      isOpenModel: !this.state.isOpenModel,
    });
  };

  createNewUser = async (data) => {
    console.log("log data user manager", data);
    try {
      let response = await createNewUser(data);
      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await this.getAllUsersFromReact();
        this.setState({
          isOpenModalUser: false,
          isOpenModel: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  updateUser = async (id,data) => {
    console.log("log data user manager", data);
    console.log(id)
    try {
      let response = await updateNewUser(id,data);
      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await this.getAllUsersFromReact();
        this.setState({
          isOpenModalUser: false,
          isOpenModel: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleDelUser = async (data) => {
    try {
      let res = await delUser(data);
      if (res && res.errCode === 0) {
        this.getAllUsersFromReact();
      } else {
        alert(res.message);
      }
      this.getAllUsersFromReact();
    } catch (error) {
      console.log(error);
    }
  };

  handleUpdate = (id,data) => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
      dataUpdate: data,
      title: "Update staff",
      isOpenModel: !this.state.isOpenModel,
    });
  
  };

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container">
        {this.state.isOpenModel && (
          <ModalUser
            currentUser={this.state.dataUpdate}
            isOpen={this.state.isOpenModalUser}
            title={this.state.title}
            toggleParent={this.toggle}
            createNewUser={this.createNewUser}
            updateUser = {this.updateUser}
            isOpenModel={this.state.isOpenModel}
          />
        )}
        <h1 className="mt-3 text-center">Manage users with Aluminum</h1>
        <div className="container">
          <div className="">
            <button
              className="btn btn-primary px-2"
              onClick={() => this.handleAddNewUser()}
            >
              <i className="fas fa-plus pe-1"></i> Add new user
            </button>
          </div>
          <table className="table text-center">
            <thead>
              <tr>
                
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Gender</th>
                <th scope="col">Position</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {arrUsers &&
                arrUsers.map((item, index) => {
                  return (
                    <tr key={index} className="lh-lg">
                      <td className="column-data-user">{item.email}</td>
                      <td className="column-data-user">{`${item.surname} ${item.middleName} ${item.name}`}</td>
                      <td className="column-data-user">{item.address}</td>
                      <td className="column-data-user">{item.phoneNumber}</td>
                      <td className="column-data-user">{item.gender}</td>
                      <td className="column-data-user">{item.positionName}</td>

                      <td className="colum-data-user">
                        <button
                          className="btn-edit me-2"
                          onClick={() => this.handleUpdate(item.id, item)}
                        >
                          <i className="far fa-edit item-edit"></i>
                        </button>

                        <button
                          onClick={() =>
                            window.confirm("do you want delete") &&
                            this.handleDelUser(item.id)
                          }
                          className="btn-del"
                        >
                          <i className="far fa-trash-alt item-del"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
