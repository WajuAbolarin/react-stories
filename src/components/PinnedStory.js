import React, { PureComponent } from 'react'
const style = {
  content: { lineHeight: '1.5' }
}

class PinnedStory extends PureComponent {
  render() {
    if (Object.keys(this.props.story).length === 0) return null
    return (
        console.log('Rerendering Pinned Story') ||  
      <div className="jumbotron jumbotron-fluid rounded">
        <div className="container">
          <p className="h4" style={style.content}>
            {this.props.story.content}
          </p>
          <div className="meta d-flex justify-content-between">
            <small className="mr-auto font-italic small text-muted">{new Date(this.props.story.posted).toLocaleString()}</small>
            <div className="right ml-auto">
              <small className=" font-italic p mr-3">
                <span className="text-danger mr-1" role="img" aria-label="likes">
                  ❤️
                </span>
                {this.props.story.likes}
              </small>
              <small className="font-italic p" onClick={() => this.props.onUnpin(this.props.story.id)}>
                <span className="text-danger mr-1" role="img" aria-label="likes" />❌
              </small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PinnedStory
