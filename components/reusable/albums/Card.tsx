import React from 'react'
import { IAlbum } from '@/models/.'

import { PlayButton } from '@/components/reusable/.'
import Image from 'next/image'
import { useImageLoader } from '@/hooks/.'

import { useNavigation } from '@/hooks/.'

import { CardLoader } from '@/components/loaders'

interface CardProps {
  album: IAlbum, 
  category: string
}

const Card: React.FC<CardProps> = ({album, category}) => {

  const [loaded, onLoad] = useImageLoader()
  const { pushRouter } = useNavigation()

  return (
    <div
      onClick={pushRouter.bind(null, '/album/' + album.id)}
      className='card_wrapper group relative'>

      {<div className={'flex flex-col ' + (!loaded && 'opacity-0 absolute invisible')}>      
        <div className='card_content'>
          {album.banner &&  <Image 
              onLoad={onLoad.bind(null)}
              src={album.banner}
              alt={album.title}
              layout="fill"
              objectFit='cover'
            />}
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
            category={category}
            onClick={() => {console.log(album.tracks[0])}}
            playedElement={album.tracks[0]}
          />
        </div>

       </div>
      }

      { !loaded && <CardLoader /> }

    </div>
  )
}

export default Card