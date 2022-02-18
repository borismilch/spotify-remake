export type {IuseUploadDataReult} from "./hooks/IuseUploadDataReult";
export type {IuseInputValueArr} from './hooks/IsuerInputValueArr'
export type { ISidebarLink, ISidebarAction } from './static/SidebarLink'
export type { IDropItem } from './static/DropItems'
export type {IAlbumModel as IAlbum, IPlayList} from './albums/IAlbumModel'
export type { ITrack } from './albums/ITrack'
export type { IUser } from './session/IUser'


export interface ModalPayload {
  value: string, 
  url: string, 
  bindColor: string
}