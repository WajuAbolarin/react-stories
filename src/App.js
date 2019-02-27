import React, { Component } from 'react'
import PinnedStory from './components/PinnedStory'
import NewStory from './components/NewStory'
import StoryList from './components/StoryList'

class App extends Component {
  state = {
    stories: [
      {
        id: 'hdkjkd',
        content: 'Lorem ipsum dolor sit amet conse a Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolores rerum amet modi quaerat, laborum maxime hic dolor eos. Molestias, a!!',
        isPinned: false,
        posted: '28/2/2019 10:00'
      },
      {
        id: 'hascjkd',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolores rerum amet modi quaerat, laborum maxime hic dolor eos. Molestias, a!',
        isPinned: false,
        posted: '28/1/2019 11:00'
      },

      {
        id: 'opcdkjkd',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolores rerum amet modi quaerat, laborum maxime hic dolor eos. Molestias, a!',
        isPinned: false,
        posted: '15/01/2019 08:00'
      },
      {
        id: 'kckjkd',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis repellat sit nisi quidem totam consectetur corporis!',
        isPinned: false,
        posted: '12/01/2019 07:00'
      },
      {
        id: 'zdKJKcjkd',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi id fuga, aperiam veritatis reiciendis repellendus optio iusto maiores officia accusantium in repellat eos nobis dolores impedit. Vel, ad id.',
        isPinned: false,
        posted: '28/1/2019 11:00'
      },

      {
        id: 'LCMMsDzxkd',
        content: 'Wishing myself a happy birthday with many many many many happy returns!!!!! ',
        isPinned: true,
        posted: '16/01/2019 08:00'
      },
      {
        id: '0smopjmS9kd',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi id fuga, aperiam veritatis reiciendis repellendus optio iusto maiores officia accusantium in repellat eos nobis dolores impedit. Vel, ad id.',
        isPinned: false,
        posted: '12/01/2019 07:00'
      }
    ]
  }
  render() {
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col-xs-12 col-md-8 mx-auto">
            <PinnedStory story={this.state.stories.filter(story => story.isPinned)[0]} />
            <NewStory />
            <StoryList stories={this.state.stories.filter(story => !story.isPinned)} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
