import React, { Component } from "react";
import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-content">
          <div className="section-header">
            <span className="title-section">
              Truyền thông nói về BookingCare
            </span>
          </div>
          <div className="section-body customize-body-section-about">
            <div className="specialty-customize customize-about">
              <div className=" section-about">
                <iframe
                  width="600"
                  height="345"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
              </div>
            </div>
            <div className="specialty-customize customize-about">
              <div className=" section-about"></div>
              <div>
                Hiện tại, mình đang đi làm fulltime, vì vậy không thể dành 100%
                thời gian làm video khóa học này được. Tuy nhiên, mình luôn cố
                gắng để làm video đều đặn và thường xuyên, vì mình nhận được rất
                nhiều tin nhắn cũng như comment của các bạn, mong muốn được học
                khóa học này ❤ 👉 Tối thiểu là 1 tuần sẽ có 2 video về khóa học,
                còn đôi khi mình có nhiều thời gian rảnh thì 1 tuần 7 cái luôn
                😁
              </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
