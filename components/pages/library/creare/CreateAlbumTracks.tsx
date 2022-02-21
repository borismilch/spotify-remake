import React from 'react'
import dynamic from 'next/dynamic'
import { useAppSelector, useAppDispatch } from '@/hooks/redux'

import { TrackService } from '@/service/.'
import { selectCurrentTrack, createAlbumTracksSelector } from '@/store/selectors'

import { TableContext, TableContextProps } from '@/context/.'
import { deleteSong } from '@/store/actions'
import { userSelector } from '@/store/selectors'
import { IAlbum, ITrack } from '@/models/.'

import { firestore } from '@/lib/firebase'
import { collection } from 'firebase/firestore'
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore'

interface CreateAlbumTracksProps {
  album: IAlbum,
  onAdd: (track: ITrack) => void,
  onDelete: (trackId: string) => void,
  albumId?: string
}

const CreateAlbumTracks: React.FC<CreateAlbumTracksProps> = (props) => {
  const { album, onAdd, onDelete, albumId = '' } = props

  const user = useAppSelector(userSelector)
  const tracksRef = collection(firestore, 'albums', albumId || 'dd', 'tracks')

  const tracks = albumId ?
   useCollectionData(tracksRef) : 
   useAppSelector(createAlbumTracksSelector)

  const dispatch = useAppDispatch()
  const currentTrack = useAppSelector(selectCurrentTrack)

  const contextValue: TableContextProps = {
    group: album?.title || '',
    needDelete: true,
    needLike: false,
    onDelete: onDeleteItem
  }

  async function onDeleteItem (playlistId: string, trackId: string, userId: string) {

    if (playlistId === album.id && trackId === currentTrack.id) {
      dispatch(deleteSong())
    }
    onDelete(trackId)
  }

  const onComplete = async (value: string, url: string, duration?:number) => {
    const data = { title: value, audio: url }
    const newTrack = TrackService.createTrack(user, album, data)

    const audio = new Audio(data.audio)

    if (duration) {
      onAdd({...newTrack, duration})
    } else {
    audio.onloadedmetadata = () => {
      onAdd({...newTrack, duration: audio.duration})
    }}
  }

  const EditTrigger = dynamic(() => import(
    '@/components/reusable/editTrigger/EditTrigger'
  ))

  const SongsTable = dynamic(() => import(
    '@/components/reusable/table/SongsTable'
  ))

  const CreateRecordModal = dynamic(() => import('./modal/CreateRecordModal'))

  return (
    <div className='flex flex-col gap-4'>

      <div className='flex items-center gap-3'>
        <EditTrigger 
          onComplete={onComplete as any}
          startValue={{image: album.banner, text: '', isAudio: true}}
          togglerElement={<button className='modal_button m-0 w-40'>Add new Song </button>}
        />

        <CreateRecordModal onComplete={onComplete} />
      </div>

      <TableContext.Provider value={contextValue}>
        <SongsTable tracks={ 
          tracks ? 
          albumId? tracks[0]
          : tracks as any : []
        } />
      </TableContext.Provider>

    </div>
  )
}

export default CreateAlbumTracks