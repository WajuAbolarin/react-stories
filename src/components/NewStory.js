import React, { useState, memo } from 'react'
import { randomString } from '../helpers'


function NewStory({ onStoryAdded }) {
  const defaultState = { id: '', content: '', posted: '', isPinned: false, likes: 0 }
  const [story, setStory] = useState(defaultState)


  function updateContent({ target: { value: content } }) {
    setStory({ ...story, content })
  }

  function postStory() {
    if (!story.content) return
    onStoryAdded({ ...story, id: randomString(), posted: Date.now() })
    setStory(defaultState)
  }

  return (
           console.log('Rerendering New Story') ||  
      <div className="d-flex flex-column justify-content-between p-3 shadow py-4 my-3 border">
      <label>Post a Story</label>
      <textarea  className="form-control mb-3" rows="3" value={story.content} onChange={updateContent} />
      <button disabled={!story.content} className="btn bg-dark btn-md text-white" onClick={postStory}>
        Post Story
      </button>
    </div>
  )
}

export default memo(NewStory)
