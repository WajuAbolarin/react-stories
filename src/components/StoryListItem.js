import React from 'react'

const StoryListItem = ({ id, content, posted, likes, onPinStory, onLikeStory, onDeleteStory }) => {
  const time = new Date(posted).toLocaleString()
  return (
          console.log('Rerendering Storlist Item') ||  
    <div className="card px-3 mb-3">
      <div className="card-body p-3 py-4">
        <p>{content}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="px-2 mr-2 rounded bg-light border" role="img" aria-label="remove story" onClick={() => onDeleteStory(id)}>
            ❌
          </span>
          <small className="mr-auto font-weight-bold font-italic text-muted small">{time}</small>
          <div className="left">
            <button className="btn btn-small btn-dark px-3 mx-2" onClick={() => onLikeStory(id)}>
              <span className="mr-1 text-danger" role="img" aria-label="likes">
                ❤️
              </span>
              <span className="small"> {likes}</span>
            </button>
            <button onClick={() => onPinStory(id)} className="btn btn-small btn-light border px-3 mx-2">
              <span className="mr-1" role="img" aria-label="pin this">
                📌
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(StoryListItem)
