import { ITrack } from '@/models/.'
import React from 'react'
import Image from 'next/image'

import { PlayButton } from '..'

interface BannerProps {
  chips: string[],
  title: string,
  description: string,
  tracks: ITrack[],
  color?: string,
  avatar?: string
} 

const LikesBanner: React.FC<BannerProps> = (props) => {

  const {description, chips, title, tracks, color = '#450af5', avatar} = props

  return (
    <div 
      style={{background:`linear-gradient(149.46deg,${color},#8e8ee5 99.16%)`}}
      className='relative flex flex-col p-4 col-span-2 group rounded-lg category_item overflow-hidden'>

      {avatar && <div className='avatar_normal absolute'>
        <Image 
          src={avatar}
          layout="fill"
          objectFit='cover'
          alt={title}
        />
      </div>}


      <div className='flex-grow flex items-end pb-5'>
        <div className='flex gap-2 max-w-full  overflow-hidden'>

        {
         chips.map((item, idx) => (
          <p 
            key={idx}
            className={'font-semibold whitespace-nowrap flex items-center gap-2 text-title ' + 
            (!(idx % 2 === 0 ) && 'text-opacity-70')}>
              {item} 
            { !(idx % 2 === 0) && 
            <span 
              className='text-2xl whitespace-nowrap font-bold text-title text-opacity-80'
            >·</span>}</p>
          ))
        }

        </div>
      </div>

      <div className='flex items-center justify-between'>

        <div className='flex flex-col gap-1'>

          <h1 className='text-3xl text-title font-bold'>{title}</h1>

          <h3 className='text-xl text-title text-opacity-70'>{description}</h3>

        </div>

          <div className='upper_transition -bottom-1 right-3'>
            <PlayButton 
              category='likes' 
              noShadow={true} 
              tracks={tracks}
              playedElement={tracks ? tracks as any  : []}
            />
          </div>
      </div>
    
    </div>
  )
}

export default LikesBanner