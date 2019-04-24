import React, { Component } from "react";
import PinnedStory from "./components/PinnedStory";
import NewStory from "./components/NewStory";
import StoryList from "./components/StoryList";
import StoryListItem from "./components/StoryListItem";

import Storage from "./helpers/storage";

class App extends Component {
  state = {
    stories: []
  };
  componentDidMount() {
    this.setState(() => ({ stories: Storage.fetch() }));
  }

  addStory = story => {
    this.setState({ stories: [...this.state.stories, story] }, () =>
      Storage.sync(this.state.stories)
    );
  };
  deleteStory = id => {
    this.setState(
      (prevState, props) => ({
        stories: [...prevState.stories].filter(str => str.id !== id)
      }),
      () => Storage.sync(this.state.stories)
    );
  };

  pinStory = id => {
    let newStories = [...this.state.stories].map(str => ({
      ...str,
      isPinned: str.id === id
    }));
    this.setState(
      () => ({ stories: newStories }),
      () => Storage.sync(this.state.stories)
    );
  };

  unPinStory = () => {
    let stories = [...this.state.stories].map(str => ({
      ...str,
      isPinned: false
    }));
    this.setState(
      preState => ({ stories }),
      () => Storage.sync(this.state.stories)
    );
  };

  likeStory = id => {
    let index = this.state.stories.findIndex(str => str.id === id);
    let story = this.state.stories[index];
    let before = this.state.stories.slice(0, index);
    let after = this.state.stories.slice(index + 1);

    this.setState(
      { stories: [...before, { ...story, likes: story.likes + 1 }, ...after] },
      () => Storage.sync(this.state.stories)
    );
  };

  render() {
    const pinnedStory = this.state.stories.find(story => story.isPinned) || {};
    const otherStories = this.state.stories.filter(story => !story.isPinned);
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col-xs-12 col-md-8 mx-auto">
            <PinnedStory story={pinnedStory} onUnpin={this.unPinStory} />
            <NewStory onStoryAdded={this.addStory} />
            <StoryList>
              {otherStories.length === 0 ? (
                <div className="bg-dark text-white p-4 py-5">
                  <h3 className="text-center my-auto py-5">
                    Hi, Add Your first post now
                  </h3>
                </div>
              ) : (
                otherStories.map(story => (
                  <StoryListItem
                    {...story}
                    key={story.id}
                    onPinStory={this.pinStory}
                    onLikeStory={this.likeStory}
                    onDeleteStory={this.deleteStory}
                  />
                ))
              )}
            </StoryList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
