import React from 'react'
import dynamic from 'next/dynamic'

import { IAlbum } from '@/models/.'

import { useAppSelector } from '@/hooks/redux'
import { userSelector } from '@/store/selectors'

import { firestore } from '@/lib/firebase'
import { collection, query, where } from 'firebase/firestore'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'

const AlbumLibBanner = () => {

  const user = useAppSelector(userSelector)
  const likesref= collection(firestore, 'albums')

  const [likes] = useCollectionDataOnce(query(likesref, where("artistId", "==", user?.uid || 's ')))
  const namesAndSongs = likes?.map  ((item: IAlbum) => ([item.artist + '', item.title])).flat()
 
  const Banner = dynamic (() => import ('@/components/reusable/banner/Banner'))

  return (
    
    <Banner 
      chips={namesAndSongs ? namesAndSongs : []}
      description={'All your albums here'}
      title={user?.displayName}
      tracks={likes ? likes as any : []}
      color={user?.bindColor}
      avatar={user?.photoURL}
    />
  
  )
}

export default React.memo(AlbumLibBanner)