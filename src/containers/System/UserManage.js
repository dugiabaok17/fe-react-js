import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
  getAllUsers,
  createNewUser,
  delUser,
} from "../../services/userService";
import ModalUser from "./ModalUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
    };
  }

  async componentDidMount() {
    await this.getAllUsersFromReact();
  }

  getAllUsersFromReact = async () => {
    let response = await getAllUsers("ALL");
    console.log("check response getAllUsers ", response);
    // console.log('check data staff',response)
    // console.log('check data staff first name',response[0].firstName)
    if (response) {
      this.setState({
        arrUsers: response,
      });
    }
  };

  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };

  toggle = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };

  createNewUser = async (data) => {
    try {
      let response = await createNewUser(data);
      console.log("check ", response);
      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await this.getAllUsersFromReact();
        this.setState({
          isOpenModalUser: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleDelUser = async (data) => {
    try {
      let res = await delUser(data.id);
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

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container">
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          test="abc"
          toggleParent={this.toggle}
          createNewUser={this.createNewUser}
        />
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
                      <td className="colum-data-user">
                        <button className="btn-edit me-2">
                          <i className="far fa-edit item-edit"></i>
                        </button>

                        <button
                          onClick={ () => window.confirm("do you want delete") && this.handleDelUser(item)}
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
