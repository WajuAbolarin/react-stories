import React, { memo, useRef } from "react";
import { randomString } from "../helpers";

function NewStory({ onStoryAdded }) {
  const input = useRef(null);

  function postStory() {
    if (!input.current.value.length) return;
    onStoryAdded({
      content: input.current.value,
      id: randomString(),
      posted: Date.now(),
      isPinned: false,
      likes: 0
    });
    input.current.value = "";
  }

  return (
    console.log("Rendering new story") || (
      <div className="d-flex flex-column justify-content-between p-3 shadow py-4 my-3 border">
        <label>Post a Story</label>
        <textarea className="form-control mb-3" rows="3" ref={input} />
        <button className="btn bg-dark btn-md text-white" onClick={postStory}>
          Post Story
        </button>
      </div>
    )
  );
}

export default memo(NewStory);
