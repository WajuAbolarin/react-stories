import React, { Component } from 'react'

class StoryListItem extends Component {
  render() {
    return (
      <div className="card px-3 mb-3">
        <div className="card-body p-3 py-4">
          <p>{this.props.story.content}</p>
          <div className="d-flex justify-content-between">
            <small className="ml-auto font-italic">{this.props.story.posted}</small>
          </div>
        </div>
      </div>
    )
  }
}

export default StoryListItem
