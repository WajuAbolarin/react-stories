import React, { Component } from 'react'

class NewStory extends Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-between p-3 shadow py-4 my-3 border">
        <label>Post a Story</label>
        <textarea className="form-control mb-3" rows="3" />
        <button className="btn bg-dark btn-md text-white">Post Story</button>
      </div>
    )
  }
}

export default NewStory
