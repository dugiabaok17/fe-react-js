import React, { Component } from "react";
import { connect } from "react-redux";
import './FooterPage.scss'
class FooterPage extends Component {
  render() {
    return (
      <div className="footer-page">
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-5 footer-content-right">
                <div className="header-logo"></div>
                <h5 className="mt-4"><strong>Công ty Cổ phần Công nghệ BookingCare</strong></h5>
               <p><i class="fas fa-map-marker-alt"></i> <span className="mt-3">  28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</span></p>
                <p><i class="fas fa-chevron-down"></i> ĐKKD số: 0106790291, Sở KHĐT Hà Nội cấp ngày 16/03/2015</p>
                </div>
                <div className="col-3 footer-content-center">
                    <ul className="footer-content-center-contact">
                        <li>Liên hệ hợp tác</li>
                        <li>Gói Chuyển đổi số doanh nghiệp</li>
                        <li>Tuyển dụng</li>
                        <li>Câu hỏi thường gặp</li>
                        <li>Điều khoản sử dụng</li>
                        <li>Chích sách bảo mật</li>
                        <li>Quy trình hỗ trợ giải quyết khiếu nại</li>
                        <li>Quy chế hoạt dộng</li>
                    </ul>
                </div>
                <div className="col-4 footer-content-left">
                    <h5> <strong>Trụ sở tại Hà Nội</strong></h5>
                    <p>28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</p>
                    <h5> <strong>Văn phòng tại TP Hồ Chí Minh</strong></h5>
                    <p>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</p>
                    <h5> <strong>Hỗ trợ khách hàng</strong></h5>
                    <p>support@bookingcare.vn(7h30-20h)</p>
                </div>
                <hr/>
                <p>Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng: <strong style={{color: '#49bce2',cursor:'pointer'}}>Android - IPhone/IPad - khác</strong></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(FooterPage);
