import React, { Component } from 'react'
import StoryListItem from './StoryListItem'

class StoryList extends Component {
  render() {
    return (
      <div className="bg-light rounded p-4">
        {this.props.stories.map(story => (
          <StoryListItem key={story.id} story={story} />
        ))}
      </div>
    )
  }
}

export default StoryList
