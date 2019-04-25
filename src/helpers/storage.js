class Storage {
  static key = "STORIES";

  /**
   * fet all stories from storage
   */
  static fetch() {
    return JSON.parse(localStorage.getItem(Storage.key)) || [];
  }

  /**
   * synchroise the state with storage
   * @param {array} stories
   */
  static sync(stories = []) {
    localStorage.setItem(Storage.key, JSON.stringify(stories));
    return stories;
  }

  static clear() {
    return Storage.sync();
  }
}

export default Storage;
