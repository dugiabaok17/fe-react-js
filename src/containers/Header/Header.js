import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import { LANGUAGE } from "../../utils/constant";
import { changeLanguageApp } from "../../store/actions/appActions";

class Header extends Component {
  handleChangeLanguage = (language) => {
    this.props.changeLanguageApp(language);
  };
  render() {
    const { processLogout ,language, userInfo} = this.props;
    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>

        <div className="languages">
          <span className="welcome m-3"><FormattedMessage id="home-header.welcome"/>
          {userInfo.userData.firstName}
          {userInfo.userData && userInfo.userData.firstName ? userInfo.userData.first : ''}
          </span>
          <span
            className={
              language === LANGUAGE.VI ? "language-vi active" : "language-vi"
            }
            onClick={() => this.handleChangeLanguage(LANGUAGE.VI)}
          >
            VN
          </span>
          <span
            className={
              language === LANGUAGE.EN
                ? "language-en active m-2"
                : "language-en m-2"
            }
            onClick={() => this.handleChangeLanguage(LANGUAGE.EN)}
          >
            EN
          </span>
          <div
            className="btn btn-logout"
            title="Log out"
            onClick={processLogout}
          >
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>

        {/* nút logout */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    userInfo: state.user.userInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageApp: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
