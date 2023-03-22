import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import UserManage from "../containers/System/UserManage";
import UserRedux from "../containers/System/Admin/UserRedux";
import Header from "../containers/Header/Header";
import StoreCrud from "../containers/System/Admin/StoreCrud";
import PositionCrud from "../containers/System/Admin/PositionCrud";
import ColorCrud from "../containers/System/Admin/ColorCrud";
import ProductCrud from "../containers/System/Admin/ProductCrud";
import ProducerCrud from "../containers/System/Admin/ProducerCrud";
import CategoryCrud from "../containers/System/Admin/CategoryCrud";
import CustomerCrud from "../containers/System/Admin/CustomerCrud";
import ProductDetailsCrud from "../containers/System/Admin/ProductDetailsCrud";
class System extends Component {
  render() {
    const { systemMenuPath, isLoggedIn } = this.props;
    return (
      <>
        {isLoggedIn && <Header />}
        <div className="system-container">
          <div className="system-list">
            <Switch>
              <Route path="/system/user-manage" component={UserManage} />
              <Route path="/system/staff-manage" component={UserRedux} />
              <Route path="/system/store-manage" component={StoreCrud} />
              <Route path="/system/position-manage" component={PositionCrud} />
              <Route path="/system/color-manage" component={ColorCrud} />
              <Route path="/system/product-manage" component={ProductCrud} />
              <Route path="/system/producer-manage" component={ProducerCrud} />
              <Route path="/system/category-manage" component={CategoryCrud} />
              <Route path="/system/product-details-manage" component={ProductDetailsCrud} />
              <Route path="/system/customer-manage" component={CustomerCrud} />
              <Route
                component={() => {
                  return <Redirect to={systemMenuPath} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
