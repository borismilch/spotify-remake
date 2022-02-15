import React  from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { IAlbum } from '@/models/.'

interface AlbumContentProps {
  currentAlbum: IAlbum
}

const AlbumContent: React.FC<AlbumContentProps> = (props) => {
  const { currentAlbum } = props

  const PageTitle = dynamic(() => import('@/components/reusable/pageTitlte/PageTitle'))
  const PageTitleContent = dynamic(() => import('@/components/reusable/pageTitlte/PageTitleContent'))
  const AlbumsContainer = dynamic(() => import('@/components/pages/index/albums/AlbumsContainer'))
  const ActionButtons = dynamic(() => import('@/components/reusable/buttons/ActionButtons'))
  const SongsTable = dynamic(() => import('@/components/reusable/table/SongsTable'))

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
      <ActionButtons />

      <SongsTable />

      <AlbumsContainer />

    </PageTitle>
  )
}


export default AlbumContent