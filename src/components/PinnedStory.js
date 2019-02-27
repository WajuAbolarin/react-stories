import React, { Component } from 'react'
const style = {
  content: { lineHeight: '1.5' }
}

class PinnedStory extends Component {
  check = () => {
    return { __html: 'First &middot; Second' }
  }
  render() {
    return (
      <div className="jumbotron jumbotron-fluid rounded">
        <div className="container">
          <p className="h4" style={style.content}>
            {this.props.story.content}
          </p>
          <div className="meta d-flex justify-content-between">
            {/* <p className="text-success"> </p> */}
            <small className="ml-auto font-italic p"> 2 hours ago </small>
          </div>
        </div>
      </div>
    )
  }
}

export default PinnedStory
