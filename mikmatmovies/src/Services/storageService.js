export default {
  getLiked: (listName, movie, setLiked) => {
    let likedMovies = JSON.parse(localStorage.getItem(listName));

    if (likedMovies && likedMovies.length > 0) {
      var index = likedMovies.findIndex((x) => x.id === movie.id);

      if (index >= 0) {
        setLiked(true);
      }
    }
  },

  storeLiked: (listName, objectToStore) => {
    let likedMovies = JSON.parse(localStorage.getItem(listName));

    if (!likedMovies) {
      likedMovies = [];
    }

    likedMovies.push(objectToStore);
    localStorage.setItem(listName, JSON.stringify(likedMovies));
  },

  removeLiked: (listName, objectToStore) => {
    let likedMovies = JSON.parse(localStorage.getItem(listName));

    if (likedMovies && likedMovies.length > 0) {
      var index = likedMovies.findIndex((x) => x.id === objectToStore.id);
      likedMovies.splice(index, 1);

      localStorage.setItem(listName, JSON.stringify(likedMovies));
    }
  },
};
