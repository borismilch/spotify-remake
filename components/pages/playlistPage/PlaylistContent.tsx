import React  from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { IAlbum } from '@/models/.'
import { PlaylistSearch } from '.'

interface PlaylistContentProps {
  playlist: IAlbum
}

const PlaylistContent: React.FC<PlaylistContentProps> = ({playlist}) => {

  const PageTitle = dynamic(() => import(
    '@/components/reusable/pageTitlte/PageTitle'
  ))
  const PageTitleContent = dynamic(() => import(
    '@/components/reusable/pageTitlte/PageTitleContent'
  ))
  const EditPlaylist = dynamic(() => import('./EditPlaylist'))
  const SongList = dynamic(() => import('./SongList'))

  return (
    <PageTitle
      bgColor={playlist.bindColor}

      titleContent={
        <PageTitleContent
          picture={
            <Image 
              objectFit='cover'
              src={playlist.banner}
              layout={'fill'}
              alt={playlist.title}
            />
          } 
          subtitle={playlist.description}
          title={playlist.title}
          type={'Album'}
          changeble
          overlayContent={<EditPlaylist playlist={playlist} />}
          rounded={false}
        />
      } 
    >
      <SongList playlistId={playlist.id} />

      <PlaylistSearch playList={playlist} />

    </PageTitle>
  )
}


export default React.memo(PlaylistContent)