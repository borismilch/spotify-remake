import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { useAppSelector } from '@/hooks/redux'
import { userSelector } from '@/store/selectors'

import AlbumService from '@/service/album.service'

import { firestore } from '@/lib/firebase'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { doc } from 'firebase/firestore'
import { useNavigation } from '@/hooks/.'
import { CardLoader } from '@/components/loaders'
import { ITrack } from '@/models/.'
import TrackService from '@/service/track.service'

const CreateContent: React.FC = () => {

  const { router: { query: { id } } } = useNavigation()

  const user = useAppSelector(userSelector)
  const [album] = useDocumentData(doc(firestore, 'albums', id.toString() || 'ss'))
  
  const onUpdateAlbum = async (data: any) => {
    await AlbumService.updateAlbum(id.toString(), data)
  }

  const onTrackAdd = async (track: ITrack) => {
    await TrackService.addTrack(album.id, track)
  }

  const deleteTrack = async (trackId: string) => {
    
    await TrackService.deleteTrack(album.id, trackId)
  }
  
  const PageTitle = dynamic(() => import(
    '@/components/reusable/pageTitlte/PageTitle'
  ))
  const PageTitleContent = dynamic(() => import(
    '@/components/reusable/pageTitlte/PageTitleContent'
  ))

  const EditNewAlbum = dynamic(() => import('../creare/EditNewAlbum'))
  const CreateAlbumTracks = dynamic(() => import('../creare/CreateAlbumTracks'))

  return (
    <>
    {album && <PageTitle
      bgColor={album?.bindColor}

      titleContent={
        <PageTitleContent
          picture={
            <>
           <Image 
              objectFit='cover'
              src={album?.banner}
              layout={'fill'}
              alt={album?.title}
            />
            </>
          } 
          subtitle={album?.description}
          title={album?.title}
          type={'Album'}
          changeble
          overlayContent={<EditNewAlbum album={album as any} onEdit={onUpdateAlbum} />}
          rounded={false}
        />
      } 
     >
      <CreateAlbumTracks 
        album={album as any}
        onAdd={onTrackAdd}
         onDelete={deleteTrack}
        albumId={album.id} 
      /> 

    </PageTitle>}

    {!album && <CardLoader />}

    </>
  )  
}

export default React.memo(CreateContent)