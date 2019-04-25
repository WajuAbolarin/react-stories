import React from "react";
import StoryListItem from "./StoryListItem";

const StoryList = ({ stories = [], onDeleteStory, onLikeStory, onPinStory }) =>
  console.log("Rerendering Storylist") || (
    <div className="bg-light rounded p-4">
      {stories.length === 0 ? (
        <div className="bg-dark text-white p-4 py-5">
          <h3 className="text-center my-auto py-5">
            Hi, Add Your first post now
          </h3>
        </div>
      ) : (
        stories.map(story => (
          <StoryListItem
            {...story}
            key={story.id}
            {...{ onPinStory, onLikeStory, onDeleteStory }}
          />
        ))
      )}
    </div>
  );

export default StoryList;
