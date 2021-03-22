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
        <div className="mainContainerHomePage">
          <div className="popularTagContainer mt-6">
            <h4>Popular Tags</h4>
            {this.props.isLoading === true ? (
              <div>
                <h4>Loading Tags...</h4>
              </div>
            ) : (
              <div>
              {this.props.allTags.map((elm, index) => {
                  return(
                    <div>
                      <p className="tagElement">{elm}</p>
                    </div>
                  )                
              })}
              </div>
            )}
            
          </div>
          <div className="globalFeedContainer mt-6">
            <div>
              <h3 className="title is-6 mb-3 pl-3 has-text-primary-dark">Global Feed</h3>
              <div style={{display: "flex"}} className="pb-4" >
                <p className="globalFeedHeaderLine"></p>
                <p className="globalFeedGreyLine"></p>
              </div>
            </div>
            <div style={{width: "100%"}}>
              {this.props.isLoading === true ? (
                  <div>
                    <p>Loading...</p>
                  </div>
              ) : (
                <div>
                  {this.props.allFeed?.articles && this.props.allFeed.articles.map((elm, index) => {
                return(
                    <div className="containerToAddFlexInGlobalFeed">
                      <div>
                        <div style={{display:"flex"}}>
                          <div className="image is-32x32">
                            <img src={elm.author.image || smiley} className="is-rounded" />
                          </div>
                          <div>
                            <h3 className="has-text-primary-dark pl-3">{elm.author.username}</h3>
                            <p className="pl-3 is-size-7">{elm.createdAt.slice(0, 10)}</p>
                          </div>
                        </div>
                        <div>
                          <h3 className="title is-4 pt-2">{elm.title}</h3>
                          <p>{elm.description}</p>
                          <a href="/">Read More...</a>
                        </div>
                      </div>
                      <div className="likesContainer">
                        <img src={heart}/>{elm.favoritesCount}
                      </div>
                    </div>
                )
              })}
              </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;