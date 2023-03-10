import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-medical-facility">
        <div className="section-content">
          <div className="section-header">
            <span className="title-section">Cơ sở y tế nổi bật</span>
            <button className="btn-section">XEM THÊM</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="specialty-customize">
                <div className="bg-image section-medical-facility"></div>
                <div>Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội 108</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image section-medical-facility"></div>
                <div>Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội 108</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image section-medical-facility"></div>
                <div>Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội 108</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image section-medical-facility"></div>
                <div>Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội 108</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image section-medical-facility"></div>
                <div>Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội 108</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-image section-medical-facility"></div>
                <div>Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân đội 108</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
