import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { IAlbum } from '@/models/.'

import { firestore } from '@/lib/firebase'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore' 

import { TableContext , TableContextProps} from '@/context/.' 
import { AlbumService } from '@/service/.'
import { useNavigation } from '@/hooks/.'

interface AlbumContentProps {
  currentAlbum: IAlbum
  group: string
}

const AlbumContent: React.FC<AlbumContentProps> = (props) => {
  const { currentAlbum, group } = props
  const fireref = collection(firestore, 'albums', currentAlbum.id.trim() , 'tracks')
  const [tracks] = useCollection(fireref)
  const readyTracks: any[] = tracks?.docs.map(item => ({...item.data(), id: item.id}))

  const { pushRouter } = useNavigation()

  const PageTitle = dynamic(() => import('@/components/reusable/pageTitlte/PageTitle'))
  const PageTitleContent = dynamic(() => import('@/components/reusable/pageTitlte/PageTitleContent'))
  const AlbumsContainer = dynamic(() => import('@/components/pages/index/albums/AlbumsContainer'))
  const ActionButtons = dynamic(() => import('@/components/reusable/buttons/ActionButtons'))
  const SongsTable = dynamic(() => import('@/components/reusable/table/SongsTable'))

  const contextValue: TableContextProps = {group, isSearch: false}

  const deleteFunction = async () => {
    await AlbumService.deleteAlbum(currentAlbum.id)
   
    pushRouter('/')
  }

  return (
    <PageTitle
      bgColor={currentAlbum.bindColor}
      titleContent={
        <PageTitleContent
          picture={
            <Image 
              src={currentAlbum.banner}
              layout={'fill'}
              alt={currentAlbum.title}
            />
          } 
          subtitle={currentAlbum.description}
          title={currentAlbum.title}
          type={'Album'}
          rounded={false}
        />
      } 
    >
      <div className='p-2'>
        <ActionButtons 
          isAlbum
          deleteFunc={deleteFunction}
          tracks={readyTracks ? readyTracks : []} 
          group={group} 
          selectedTrack={readyTracks ? readyTracks[0] : {}}  
        />
      </div>

      <TableContext.Provider value={contextValue}>
        <SongsTable tracks={readyTracks ? readyTracks : []} />
      </TableContext.Provider>

      <AlbumsContainer title='More like this' />

    </PageTitle>
  )
}


export default AlbumContent