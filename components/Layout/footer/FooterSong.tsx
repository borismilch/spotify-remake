import React from 'react'

import Image from 'next/image'

import { useAppSelector } from '@/hooks/redux'
import { AiFillHeart, AiOutlineHeart, RiPictureInPictureExitFill } from '@/icons/.'

const defaultImage = 'https://www.businessplatform.ae/wp-content/uploads/2013/05/placeholder3.png'

import { firestore } from '@/lib/firebase'
import { useDocument } from 'react-firebase-hooks/firestore'
import { userSelector, selectCurrentTrack } from '@/store/selectors'
import { doc } from 'firebase/firestore'

import { TrackService } from '@/service/.'

import AppIcon from '@/components/icons/AppIcon'

const FooterSong = () => {

  const currentTrack = useAppSelector(selectCurrentTrack)
  const user = useAppSelector(userSelector)

  const likesref = doc(firestore, 'users', user?.uid || 'ff', 'likes', currentTrack?.id || 'dd')
  const [like] = useDocument(likesref)

  const isLiked = !!like?.data()

  const rateTrack = async () => {
    await TrackService.likeOrDislikeTrack(currentTrack, user.uid)
  }

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

       { !isLiked ?  
           (<AppIcon
            onclick={rateTrack}
            Icon={<AiOutlineHeart className={'app_icon'} />} 
            classes={'opacity-0 group-hover:opacity-100'}
          />) : (
            <AppIcon
              onclick={rateTrack}
              Icon={<AiFillHeart className={'app_icon text-green-500'} />} 
            />
          )
       }
        

        <RiPictureInPictureExitFill className='app_icon ' />

      </div>

    </div>
  )
}

export default FooterSong