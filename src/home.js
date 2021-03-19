import React from "react"
import smiley from "./smiley.jpg"
import heart from "./heart.png"
import "./home.scss"
class Home extends React.Component {
  render() {
    return(
      <div>
        <div className=".container has-background-success-dark" style={{textAlign: "center"}}>
          <h1 className="title is-2 pt-5 pb-0 has-text-white">conduit</h1>
          <h2 className="title is-5 pb-5 pt-0 has-text-white">A place to share your knowledge</h2>
        </div>
        <div className="globalFeedContainer mt-6">
          <div>
            <h3 className="title is-6 mb-3 pl-3 has-text-primary-dark">Global Feed</h3>
            <div style={{display: "flex"}} className="pb-4" >
              <p className="globalFeedHeaderLine"></p>
              <p className="globalFeedGreyLine"></p>
            </div>
          </div>
          <div style={{width: "60%"}}>
            
            {this.props.allFeed?.articles && this.props.allFeed.articles.map((elm, index) => {
              return(
                <div>
                  <div className="containerToAddFlexInGlobalFeed">
                    <div>
                      <div style={{display:"flex"}}>
                        <div className="image is-32x32">
                          <img src={elm.author.image || smiley} className="is-rounded" />
                        </div>
                        <div>
                          <h3>{elm.author.username}</h3>
                          <p>{elm.createdAt}</p>
                        </div>
                      </div>
                      <div>
                        <h3>{elm.title}</h3>
                        <p>{elm.description}</p>
                        <a href="/">Read More...</a>
                      </div>
                    </div>
                    <div className="likesContainer">
                      <img src={heart}/>{elm.favoritesCount}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
export default Home;