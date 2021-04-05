import { combineReducers } from 'redux';


const songsReducer = () => {
  return [
    {
      title: "No scrubs",
      duration: "5:02"
    },
    {
      title: "All Star",
      duration: "4:02"
    },
    {
      title: "I want it that way",
      duration: "1:32"
    },
  ];
};


const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

