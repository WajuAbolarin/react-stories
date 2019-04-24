class Storage {
  static key = 'STORIES'

  /**
   * fet all stories from storage
   */
  fetch() {
    return JSON.parse(localStorage.getItem(Storage.key)) || []
  }

  /**
   * synchroise the state with storage
   * @param {array} stories
   */
  sync(stories = []) {
    localStorage.setItem(Storage.key, JSON.stringify(stories))
    return stories
  }

  clear() {
    return this.sync()
  }
}

export default new Storage()
