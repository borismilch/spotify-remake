export { setCurrentColor, setDefaultColor } from './reducers/color.reducer'
export {  setCurrentTrack, goNext, goPrevios, setCurrentIndex, setQueue, setGroup } from './reducers/song.reducer'
export { setUser, cleanUser } from './reducers/user.reducer'
export { audioReducer, setCurrentTime, setFullTime, setPaused, setVolume } from './reducers/audio.reducer'

export * as AlbumsStore from "./reducers/album.reducer"