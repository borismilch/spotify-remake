import { ITrack } from "..";

export interface IAlbumModel {

  name: string,
  artist: string,
  creationDate: { seconds: number },
  artistId: string
  description: string 
  genre: string,
  id?: string
  banner: string
  title: string
  bindColor: string
  tracks: ITrack[]
}