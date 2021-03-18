import React from "react"
import "./signUp.scss"

class SignUp extends React.Component {

  render() {
    return(
      <React.Fragment>
        <div className="signInContainer">
          <div>
            <h3 className="title is-3">
              Sign Up
            </h3>
            <div>
              <a href="/">Need an account?</a>
            </div>
          </div>
          <div>
            <input type="text" placeholder="Username"/>
          </div>
          <div>
            <input type="text" placeholder="Email"/>
          </div>
          <div>
            <input type="text" placeholder="Password"/>
          </div>
          <div >
            <a href="/" className="button is-success">Sign Up</a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default SignUp;