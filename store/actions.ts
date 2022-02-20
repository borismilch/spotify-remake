export { setCurrentColor, setDefaultColor } from './reducers/color.reducer'
export {  setCurrentTrack, goNext, goPrevios, setCurrentIndex, setQueue, setGroup, deleteSong } from './reducers/song.reducer'
export { setUser, cleanUser } from './reducers/user.reducer'
export { audioReducer, setCurrentTime, setFullTime, setPaused, setVolume } from './reducers/audio.reducer'

export * as AlbumsStore from "./reducers/album.reducer"

export { setSearch } from './reducers/search.reducer'
export {CreatealbumActions} from './reducers/create-album.reducer'
export { CreateAlbumtracksStore } from './reducers/create-album-tracks.reducer'