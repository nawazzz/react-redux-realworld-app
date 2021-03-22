import logo from './logo.svg';
import './App.scss';
import SignIn from "./signIn"
import SignUp from "./signUp"
import Home from "./home"
import {
  BrowserRouter as Router, Link,
  Switch, Route
} from "react-router-dom"
import React from 'react';
// import { info } from 'node-sass';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        allFeed: {},
        isLoading: false,
        allTags: ["HuManity", "Gandhi", "HITLER", "SIDA", "BlackLivesMatter", "test", "dragons", "Wimp", "India"] 
    } 
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    })
    const url = `https://conduit.productionready.io/api/articles`;
    // const tagUrl = `https://conduit.productionready.io/api/tags`
    fetch(url).then(res => res.json()).then(data => {
      this.setState({
        allFeed: data,
        isLoading: false
      })
    }).catch(error => console.log(error))
    // fetch(tagUrl).then(res => res.json()).then(allTags => {
    //   this.setState({
    //     allTags: allTags.tags.filter(tag => !tag.startsWith("&zwnj;") && !tag.includes("&zwnj;"))
    //   })
    // }).catch(error => console.log(error))
  }

  componentDidUpdate() {
    console.log(this.state.allTags)
  }

  render() {
    return (
      <Router>
        <div >
          <div className="is-flex is-justify-content-space-between headContainer p-3">
            <h1 className="has-text-success title is-4" >conduit</h1>
            <div>
                <Link to="/" className="p-2 has-text-grey-light">Home</Link>
                <Link to="/login" className="p-2 has-text-grey-light">Sign in</Link>
                <Link to="/register" className="p-2 has-text-grey-light">Sign up</Link>
            </div>
          </div> 
          <Switch>
            <Route exact path="/">
              <Home allFeed={this.state.allFeed} isLoading={this.state.isLoading} 
              allTags={this.state.allTags}
              />
            </Route>
            <Route exact path="/login">
              <SignIn />
            </Route>
            <Route exact path="/register">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
