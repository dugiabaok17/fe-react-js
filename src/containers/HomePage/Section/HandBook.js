import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";


class HandBook extends Component {
  render() {
   let setting = {...this.props.settings,slidesToShow: 2}
    return (
      <div className="section-share section-hand-book">
        <div className="section-content">
          <div className="section-header">
            <span className="title-section">Cẩm nang</span>
            <button className="btn-section">TẤT CẢ BÀI VIÊT</button>
          </div>
          <div className="section-body">
            <Slider {...setting}>
              
              <div className="specialty-customize customize-section-hand-book">
                <div className="bg-image section-hand-book"></div>
                <div><b>Cắt bao quy đầu ở đâu TPHCM: Địa chỉ uy tín, thông tin rõ ràng</b> </div>
              </div>
              <div className="specialty-customize customize-section-hand-book">
                <div className="bg-image section-hand-book"></div>
                <div><b>Cắt bao quy đầu ở đâu TPHCM: Địa chỉ uy tín, thông tin rõ ràng</b> </div>
              </div>
              <div className="specialty-customize customize-section-hand-book">
                <div className="bg-image section-hand-book"></div>
                <div><b>Cắt bao quy đầu ở đâu TPHCM: Địa chỉ uy tín, thông tin rõ ràng</b> </div>
              </div>
              <div className="specialty-customize customize-section-hand-book">
                <div className="bg-image section-hand-book"></div>
                <div><b>Cắt bao quy đầu ở đâu TPHCM: Địa chỉ uy tín, thông tin rõ ràng</b> </div>
              </div>
              <div className="specialty-customize customize-section-hand-book">
                <div className="bg-image section-hand-book"></div>
                <div><b>Cắt bao quy đầu ở đâu TPHCM: Địa chỉ uy tín, thông tin rõ ràng</b> </div>
              </div>
              <div className="specialty-customize customize-section-hand-book">
                <div className="bg-image section-hand-book"></div>
                <div><b>Cắt bao quy đầu ở đâu TPHCM: Địa chỉ uy tín, thông tin rõ ràng</b> </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
