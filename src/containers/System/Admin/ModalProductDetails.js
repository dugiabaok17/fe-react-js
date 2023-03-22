import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { getAllPositionName } from "../../../services/productService";
import { getAllPositionNames } from "../../../services/categoryService";
import { getAllPositionNamess } from "../../../services/producerService";
import { getAllColorName } from "../../../services/colorService";
import "../UserManage.scss";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      importPrices: "",
      price: "",
      quantityInStock: "",
      warrantyYear: "",
      categoryName: "",
      colorName: "",
      producerName: "",
      productName: "",
      arrColorName: [],
      arrCategoryName: [],
      arrProductName: [],
      arrProducerName: [],
    };
  }

  checkValidateInput = () => {
    let isValid = true;
    let arrInput = [
      "description",
      "importPrices",
      "price",
      "quantityInStock",
      "warrantyYear",
      "categoryName",
      "colorName",
      "producerName",
      "productName",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        alert("Missing parameter: " + arrInput[i]);
        isValid = false;
        return isValid;
      }
    }

    if (this.state.price < 0) {
      alert("k để giá âm");
      isValid = false;
      return isValid;
    } else if (this.state.importPrices < 0) {
      alert("k để giá nhập âm");
      isValid = false;
      return isValid;
    } else if (this.state.quantityInStock < 0) {
      alert("k để số lượng âm");
      isValid = false;
      return isValid;
    } else if (this.state.warrantyYear < 0) {
      alert("k để năm bảo hành âm");
      isValid = false;
      return isValid;
    }
    return isValid;
  };

  async componentDidMount() {
    let response = await getAllPositionName();
    let responseCategoryName = await getAllPositionNames();
    let responseProducerName = await getAllPositionNamess();
    let responseColorName = await getAllColorName();
    console.log("re-render", this.props.currentUser);
    if (this.props.title === "Update staff") {
      this.setState({
        description: this.props.currentUser.description,
        importPrices: this.props.currentUser.importPrices,
        price: this.props.currentUser.price,
        quantityInStock: this.props.currentUser.quantityInStock,
        warrantyYear: this.props.currentUser.warrantyYear,
        categoryName: this.props.currentUser.categoryName,
        colorName: this.props.currentUser.colorName,
        producerName: this.props.currentUser.producerName,
        productName: this.props.currentUser.producerName,
        arrProductName: response,
        arrCategoryName: responseCategoryName,
        arrProducerName: responseProducerName,
        arrColorName: responseColorName,
      });
    } else {
      this.setState({
        arrProductName: response,
        arrCategoryName: responseCategoryName,
        arrProducerName: responseProducerName,
        arrColorName: responseColorName,
      });
    }
  }

  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      if (this.props.title === "Update staff") {
        console.log("vào dây nè hehe");
        this.props.updateUser(this.props.currentUser.id, this.state);
      } else {
        this.props.createNewUser(this.state);
      }
    }
  };

  render() {
    let arrProduct = this.state.arrProductName;
    let arrCategoryName = this.state.arrCategoryName;
    let arrPosition = this.state.arrProducerName;
    let arrColor = this.state.arrColorName;
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
                <label className="form-label">Description</label>
                <input
                  onChange={(e) =>
                    this.setState({
                      description: e.target.value,
                    })
                  }
                  value={this.state.description}
                  className="form-control"
                  type="text"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label ">Import prices</label>
                <input
                  onChange={(e) =>
                    this.setState({
                      importPrices: e.target.value,
                    })
                  }
                  value={this.state.importPrices}
                  type="number"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label mt-3">Price</label>
                <input
                  onChange={(e) =>
                    this.setState({
                      price: e.target.value,
                    })
                  }
                  value={this.state.price}
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="col-6">
                <label className="form-label mt-3">Quantity in stock</label>
                <input
                  onChange={(e) =>
                    this.setState({
                      quantityInStock: e.target.value,
                    })
                  }
                  value={this.state.quantityInStock}
                  type="number"
                  className="form-control"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label mt-3">Warranty Year</label>
                <input
                  onChange={(e) =>
                    this.setState({
                      warrantyYear: e.target.value,
                    })
                  }
                  value={this.state.warrantyYear}
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label mt-3">Category name</label>
                <select
                  value={this.state.categoryName}
                  id="inputState"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({
                      categoryName: e.target.value,
                    });
                  }}
                >
                  {arrCategoryName &&
                    arrCategoryName.length > 0 &&
                    arrCategoryName.map((data, index) => {
                      return <option key={index}>{data}</option>;
                    })}
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label mt-3">Producer Name</label>
                <select
                  value={this.state.producerName}
                  id="inputState"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({
                      producerName: e.target.value,
                    });
                  }}
                >
                  {arrPosition &&
                    arrPosition.length > 0 &&
                    arrPosition.map((data, index) => {
                      return <option key={index}>{data}</option>;
                    })}
                </select>
              </div>
              <div className="col-6 form-group custom-location-icons">
                <label className="form-label mt-3">Color name</label>
                <select
                  value={this.state.colorName}
                  id="inputState"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({
                      colorName: e.target.value,
                    });
                  }}
                >
                  {arrColor &&
                    arrColor.length > 0 &&
                    arrColor.map((data, index) => {
                      return <option key={index}>{data}</option>;
                    })}
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Product name</label>
                <select
                  value={this.state.productName}
                  id="inputState"
                  className="form-control"
                  onChange={(e) => {
                    this.setState({
                      productName: e.target.value,
                    });
                  }}
                >
                  {arrProduct &&
                    arrProduct.length > 0 &&
                    arrProduct.map((data, index) => {
                      return <option key={index}>{data}</option>;
                    })}
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
