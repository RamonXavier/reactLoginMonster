import React from 'react';
import logo from '../logo.png';
import '../App.css';
import Card from "../components/Card";
import Style from "../css/style.css";

function App(){
    return(
<div class="ui placeholder segment">
  <div class="ui two column very relaxed stackable grid">
    <div class="column">
      <div class="ui form">
        <div class="field">
        <h1>Bem <b>- Vindo</b></h1>
        <label for="fname">First Name</label>
  <input type="text" id="fname" name="fname"/>
          <label>Username</label>
          <div class="ui left icon input">
            <input type="text" placeholder="Username"/>
            <i class="user icon"></i>
          </div>
        </div>
        <div class="field">
          <label>Password</label>
          <div class="ui left icon input">
            <input type="password"/>
            <i class="lock icon"></i>
          </div>
        </div>
        <div class="ui blue submit button">Login</div>
      </div>
    </div>
    <div class="middle aligned column">
      <div class="ui big button">
        <i class="signup icon"></i>
        Sign Up
      </div>
    </div>
  </div>
  <div class="ui vertical divider">
    Or
  </div>
</div> 
    );
}

export default App;