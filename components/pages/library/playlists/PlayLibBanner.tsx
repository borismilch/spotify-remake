import React from 'react'
import dynamic from 'next/dynamic'

import { IAlbum } from '@/models/.'

import { useAppSelector } from '@/hooks/redux'
import { userSelector } from '@/store/selectors'

import { firestore } from '@/lib/firebase'
import { collection } from 'firebase/firestore'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'

const PlayLibBanner = () => {

  const user = useAppSelector(userSelector)
  const likesref= collection(firestore, 'users', user?.uid || 'sss', 'likes')

  const [likes] = useCollectionDataOnce(likesref)
  const namesAndSongs = likes?.map((item: IAlbum) => ([item.authorName + '', item.title])).flat()
 
  const Banner = dynamic (() => import ('@/components/reusable/banner/Banner'))

  return (
    <Banner 
      chips={namesAndSongs ? namesAndSongs : []}
      description={'from all artists'}
      title={'Loved tracks'}
      tracks={likes ? likes as any : []}
    />
   
  )
}

export default React.memo(PlayLibBanner)