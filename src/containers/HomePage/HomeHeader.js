import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./HomeHeader.scss";
import {LANGUAGE} from "../../utils/constant"
import { changeLanguageApp } from "../../store/actions/appActions";
class HomeHeader extends Component {

  handleChangeLanguage = (language) => {
    this.props.changeLanguageApp(language)
  }
  render() {
    let language = this.props.language
    return (
      <>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b><FormattedMessage id={"home-header.specialty"}/></b>
                </div>
                <div className="subs-title"><FormattedMessage id={"home-header.search-doctor"}/></div>
              </div>
              <div className="child-content">
                <div>
                  <b><FormattedMessage id={"home-header.health-facility"} /></b>
                </div>
                <div className="subs-title"><FormattedMessage id={"home-header.select-room"}/></div>
              </div>
              <div className="child-content">
                <div>
                  <b><FormattedMessage id={"home-header.doctor"}/></b>
                </div>
                <div className="subs-title"><FormattedMessage id={"home-header.select-doctor"}/></div>
              </div>
              <div className="child-content">
                <div>
                  <b><FormattedMessage id={"home-header.fee"}/></b>
                </div>
                <div className="subs-title"><FormattedMessage id={"home-header.check-health"}/></div>
              </div>
            </div>
            <div className="right-content">
              <div className="supports">
                <i className="fas fa-question-circle"> </i><FormattedMessage id={"home-header.support"}/>
              </div>
              <div className= {language === LANGUAGE.VI ? "language-vn active" : "language-vn"}> <span onClick={()=> this.handleChangeLanguage(LANGUAGE.VI)}>Vn</span> </div>
              <div className= {language === LANGUAGE.EN ? "language-en active" : "language-en"}> <span onClick={()=> this.handleChangeLanguage(LANGUAGE.EN)}>En</span> </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1"><FormattedMessage id={"banner.title1"}/></div>
            <div className="title2"><FormattedMessage id={"banner.title2"}/></div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
            </div>
          </div>

          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div className="icon-child">
                  <i className="far fa-hospital"></i>
                </div>
                <div className="text-child"> <FormattedMessage id={"banner.child1"}/></div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="text-child"> <FormattedMessage id={"banner.child2"}/></div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-procedures"></i>
                </div>
                <div className="text-child"> <FormattedMessage id={"banner.child3"}/></div>
              </div>{" "}
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-flask"></i>
                </div>
                <div className="text-child"> <FormattedMessage id={"banner.child4"}/></div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="far fa-user"></i>
                </div>
                <div className="text-child"> <FormattedMessage id={"banner.child5"}/></div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <img src="https://cdn.bookingcare.vn/fo/2022/05/19/104635-khamnhakhoa.png" />
                </div>
                <div className="text-child"> <FormattedMessage id={"banner.child6"}/></div>
              </div>
            </div>
          </div>
        </div>
      </>
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
  return {
    changeLanguageApp: (language) => dispatch(changeLanguageApp(language))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
