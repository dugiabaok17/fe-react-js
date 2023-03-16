import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import * as actions from "../../../store/actions";
import {createStore}  from "../../../services/storeService";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrGender: [],
      arrPosition: [],
      arrRole: [],
    };
  }

  createStore = async () => {
    let response = await createStore();
    console.log(response)
  }
   componentDidMount() {
  
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    
  }

  render() {
    
    return (

       <div className="container">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">City</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Name</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div class="form-group">
              <label for="inputAddress2">Nation</label>
              <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <button type="submit" class="btn btn-primary" onClick={()=> this.createStore()}>Sign in</button>
       </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
