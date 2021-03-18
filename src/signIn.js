import React from "react"
import "./signIn.scss"

class SignIn extends React.Component {

  render() {
    return(
      <React.Fragment>
        <div className="signInContainer">
          <div>
            <h3 className="title is-3">
              SignIn
            </h3>
            <div>
              <a href="/">Need an account?</a>
            </div>
          </div>
          <div>
            <input type="text" placeholder="Email"/>
          </div>
          <div>
            <input type="text" placeholder="Password"/>
          </div>
          <div >
            <a href="/" className="button is-success">Sign in</a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default SignIn;