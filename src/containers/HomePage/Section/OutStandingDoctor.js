import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class OutStandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-out-standing-doctor">
        <div className="section-content">
          <div className="section-header">
            <span className="title-section">Bác sĩ nổi bật tuần qua</span>
            <button className="btn-section">XEM THÊM</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="specialty-customize customize-out-standing-doctor">
                <div className="bg-image section-out-standing-doctor"></div>
                <div>Bác sĩ Chuyên Khoa II Trần Minh Khuyên</div>
                <div>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</div>

              </div>
              <div className="specialty-customize customize-out-standing-doctor">
                <div className="bg-image section-out-standing-doctor"></div>
                  <div>Bác sĩ Chuyên Khoa II Trần Minh Khuyên</div>
                <div>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</div>
              </div>
              <div className="specialty-customize customize-out-standing-doctor">
                <div className="bg-image section-out-standing-doctor"></div>
                  <div>Bác sĩ Chuyên Khoa II Trần Minh Khuyên</div>
                <div>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</div>
              </div>
              <div className="specialty-customize customize-out-standing-doctor">
                <div className="bg-image section-out-standing-doctor"></div>
                  <div>Bác sĩ Chuyên Khoa II Trần Minh Khuyên</div>
                <div>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</div>
              </div>
              <div className="specialty-customize customize-out-standing-doctor">
                <div className="bg-image section-out-standing-doctor"></div>
                  <div>Bác sĩ Chuyên Khoa II Trần Minh Khuyên</div>
                <div>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</div>
              </div>
              <div className="specialty-customize customize-out-standing-doctor">
                <div className="bg-image section-out-standing-doctor"></div>
                  <div>Bác sĩ Chuyên Khoa II Trần Minh Khuyên</div>
                <div>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
