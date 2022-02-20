import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { createAlbumSelector, userSelector } from '@/store/selectors'

import { defaultImage } from '@/service/playlist.service'
import AlbumService from '@/service/album.service'

import { CreatealbumActions } from '@/store/actions'
import { ITrack } from '@/models/.'
import { CreateAlbumtracksStore } from '@/store/actions'

const CreateContent: React.FC = () => {

  const newAlbum = useAppSelector(createAlbumSelector)
  const user = useAppSelector(userSelector)
  const dispatch = useAppDispatch()

  const onEditPageTitlte = (data: any) => {
    dispatch(CreatealbumActions.updateAlbum(data))
  }

  const onAddTrack = (track: ITrack) => {
    dispatch(CreateAlbumtracksStore.addTrack(track))
  }

  const onDeleteTrack = (trackId: string) => {
    dispatch(CreateAlbumtracksStore.deleteTrack(trackId))
  }
  
  useEffect(() => {
    if (user && !newAlbum) {
      const newAlbum = AlbumService.createAlbum(user, 'New Album', '...')

      dispatch(CreatealbumActions.setAlbum(newAlbum))
    }
  }, [user])
  
  const PageTitle = dynamic(() => import(
    '@/components/reusable/pageTitlte/PageTitle'
  ))
  const PageTitleContent = dynamic(() => import(
    '@/components/reusable/pageTitlte/PageTitleContent'
  ))

  const EditNewAlbum = dynamic(() => import('./EditNewAlbum'))
  const CreateAlbumTracks = dynamic(() => import('./CreateAlbumTracks'))

  return (

    <PageTitle
      bgColor={newAlbum?.bindColor}

      titleContent={
        <PageTitleContent
          picture={
            <>
           <Image 
              objectFit='cover'
              src={newAlbum?.banner || defaultImage}
              layout={'fill'}
              alt={newAlbum?.title || 'My New Album'}
            />
            </>
          } 
          subtitle={newAlbum?.description}
          title={newAlbum?.title || 'My New Album'}
          type={'Album'}
          changeble
          overlayContent={<EditNewAlbum onEdit={onEditPageTitlte} album={newAlbum} />}
          rounded={false}
        />
      } 
    >
      <CreateAlbumTracks 
        album={newAlbum}
        onAdd={onAddTrack}
        onDelete={onDeleteTrack}
        
      /> 

    </PageTitle>
  )  
}

export default React.memo(CreateContent)