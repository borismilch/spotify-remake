import React from 'react'
import { IAlbum, ITrack } from '@/models/.'

import { PlayButton } from '@/components/reusable/.'
import Image from 'next/image'
import { useImageLoader } from '@/hooks/.'

import { useNavigation } from '@/hooks/.'

import { firestore } from '@/lib/firebase'
import { collection } from 'firebase/firestore'
import { useCollectionOnce } from 'react-firebase-hooks/firestore' 

import { CardLoader } from '@/components/loaders'

interface CardProps {
  album: IAlbum, 
  category: string
}

const Card: React.FC<CardProps> = ({album, category}) => {

  const fireref = collection(firestore, 'albums', album.id, 'tracks')

  const [tracks] = useCollectionOnce(fireref)

  const readyTracks: any[] = tracks?.docs.map(item => ({...item.data(), id: item.id}))

  const [loaded, onLoad] = useImageLoader()
  const { pushRouter } = useNavigation()

  return (
    <div
      onClick={pushRouter.bind(null, '/album/' + album.id + "_" + category)}
      className='card_wrapper group relative'>

      {<div className={'flex flex-col ' + (!loaded && 'opacity-0 absolute invisible')}>      
        <div className='card_content'>
          {album.banner &&  <img 
              onLoad={onLoad.bind(null)}
              src={album.banner}
              alt={album.title}
              className={'object-cover w-full h-full'} />
          } 
          </div>
        
        <div className='flex flex-col pt-4'>
          <h3 className='
            flex flex-col truncate font-semibold text-sm text-title
          '>{album.title}</h3>

          <span className='
            text-desc break-words line-clamp-2 font-medium text-xs
          '>{album.description}</span>

        </div>

        <div className='upper_transition'>
          <PlayButton 
            tracks={readyTracks ? readyTracks : []}

            category={category}
            onClick={() => {console.log(album.tracks[0])}}
            playedElement={readyTracks ? readyTracks[0] : {}}
          />
        </div>

       </div>
      }

      { !loaded && <CardLoader /> }

    </div>
  )
}

export default Card