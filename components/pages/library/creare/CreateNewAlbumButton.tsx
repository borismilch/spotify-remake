import React from 'react'

import { useAppSelector } from '@/hooks/redux'
import { useNavigation } from '@/hooks/.'
import { createAlbumSelector, createAlbumTracksSelector } from '@/store/selectors'

import { AlbumService, TrackService } from '@/service/.'

import { useAppDispatch } from '@/hooks/redux'
import { CreateAlbumtracksStore, CreatealbumActions } from '@/store/actions'

const CreateNewAlbumButton = () => {

  const newAlbum = useAppSelector(createAlbumSelector)
  const tracks = useAppSelector(createAlbumTracksSelector)
  const dispatch = useAppDispatch()

  const { pushRouter, router: { query: { id } } } = useNavigation()

  const createNewAlbum = async () => {
    await AlbumService.addNewAlbum(newAlbum)

    tracks.map(item => ({...item, albumName : newAlbum.title})).forEach(async track => {
      await TrackService.addTrack(newAlbum.id, track)
    })

    pushRouter('/album/' + (id? id : newAlbum.id))

    dispatch(CreateAlbumtracksStore.cleanTracks())
    dispatch(CreatealbumActions.clearAlbum())
  }

  const saveChanges = ( ) => {
    pushRouter('/album/' + (id? id : newAlbum.id))
  }

  return (
    <button 
      onClick={id ? saveChanges : createNewAlbum}
      disabled={!id && !tracks.length}
      className='song_add_button disabled:opacity-50 w-[160px] m-0 border mr-3'>
       { id? "Save changes" : "Create new Album"}
    </button>
  )
}

export default CreateNewAlbumButton