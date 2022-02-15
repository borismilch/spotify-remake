import React from 'react'

import Image from 'next/image'

import { useAppSelector } from '@/hooks/redux'
import { AiFillHeart, AiOutlineHeart, RiPictureInPictureExitFill } from '@/icons/.'

const defaultImage = 'https://www.businessplatform.ae/wp-content/uploads/2013/05/placeholder3.png'

const FooterSong = () => {

  const { currentTrack } = useAppSelector(state => state.song)

  return (
    <div className='flex items-center gap-3 z-10 w-full'> 

      {<div className='album_image_xs rounded-md'>
        <Image
          src={currentTrack?.albumImg || defaultImage}
          alt={'dddd'} 
          layout={'fill'}
        />
      </div>}

      <div className='flex flex-col'>
        <h3 className='text-title text-sm'>{currentTrack?.title || 'song in not selected'}</h3>

        <h6 className='text-xs text-desc'>{currentTrack?.authorName || ""}</h6>
      </div>

      <div className='flex items-center gap-2'>

        <AiOutlineHeart className='text-gray-500 text-2xl app_icon' />

        <RiPictureInPictureExitFill className='app_icon ' />

      </div>

    </div>
  )
}

export default FooterSong