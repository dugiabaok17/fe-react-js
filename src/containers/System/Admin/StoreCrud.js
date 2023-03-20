import React, { Component } from "react";
import { connect } from "react-redux";
import "../UserManage.scss";
import { getAllStore, createStore , updateStore, delStore} from "../../../services/storeService";
import ModalUser from "../ModalCommon";
class StoreManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrStore: [],
      isOpenModalUser: false,
      dataUpdate: [],
      title: "",
      isOpenModel: false,
    };
  }

  async componentDidMount() {
    await this.getAllStore();
  }

  getAllStore = async () => {
    let response = await getAllStore();
    console.log("check response", response);
    if (response) {
      this.setState({
        arrStore: response,
      });
    }
  };

  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
      isOpenModel: !this.state.isOpenModel,
      title: "Add new store",
    });
  };

  toggle = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
      isOpenModel: !this.state.isOpenModel,
    });
  };

  createStore = async (data) => {
    try {
      let response = await createStore(data);
      console.log(response);
      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await this.getAllStore();
        this.setState({
          isOpenModalUser: false,
          isOpenModel: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  updateStore = async (id,data) => {
    console.log("log data user manager", data);
    console.log(id)
    try {
      let response = await updateStore(id,data);
      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await this.getAllStore();
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
      let res = await delStore(data);
      if (res && res.errCode === 0) {
        this.getAllStore();
      } else {
        alert(res.message);
      }
      this.getAllStore();
    } catch (error) {
      console.log(error);
    }
  };

  handleUpdate = (id,data) => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
      dataUpdate: data,
      title: "Update store",
      isOpenModel: !this.state.isOpenModel,
    });

  };

  render() {
    let arrStore = this.state.arrStore;
    return (
      <div className="users-container">
        {this.state.isOpenModel && (
          <ModalUser
            currentUser={this.state.dataUpdate}
            isOpen={this.state.isOpenModalUser}
            title={this.state.title}
            toggleParent={this.toggle}
            createNewStore={this.createStore}
            updateStore={this.updateStore}
            isOpenModel={this.state.isOpenModel}
          />
        )}
        <h1 className="mt-3 text-center">Manage store with Aluminum</h1>
        <div className="container">
          <div className="">
            <button
              className="btn btn-primary px-2"
              onClick={() => this.handleAddNewUser()}
            >
              <i className="fas fa-plus pe-1"></i> Add new store
            </button>
          </div>
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Nation</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {arrStore &&
                arrStore.map((item, index) => {
                  return (
                    <tr key={index} className="lh-lg">
                      <th scope="col">{index + 1}</th>
                      <td className="column-data-user">{item.name}</td>
                      <td className="column-data-user">{item.address}</td>
                      <td className="column-data-user">{item.city}</td>
                      <td className="column-data-user">{item.nation}</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(StoreManage);
