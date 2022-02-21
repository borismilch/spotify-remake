import { IAlbum } from '@/models/.'
import React, { useEffect } from 'react'

import { useFirestoreData } from '@/hooks/.'

import { useAppSelector } from '@/hooks/redux'
import { scrollTopSelector } from '@/store/selectors'

import { PlayButton } from '@/components/reusable'

import { firestore } from '@/lib/firebase'
import { collection, DocumentData, DocumentReference } from 'firebase/firestore'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'

interface HeaderSongTitleProps {
  currentAlbum: IAlbum,
  fireRef: DocumentReference<DocumentData>
  group: string
}

const HeaderSongTitle: React.FC<HeaderSongTitleProps> = (props) => {

  const {currentAlbum, fireRef, group} = props

  const tracksRef = collection(fireRef, 'tracks')
  const [tracks] = useCollectionDataOnce(tracksRef)
  
  const scrollTop = useAppSelector(scrollTopSelector)

  return (
    <div className={
      'flex items-center transition-all duration-300 gap-3 opacity-0 ' + 
      ( scrollTop > 400 && 'opacity-100' )}>

      <PlayButton 
        category={group}
        playedElement={tracks? tracks[0] as any : {}}
        tracks={tracks as any}

      />

      <p className='text-title text-lg font-bold'>{currentAlbum?.title}</p>
      
    </div>
  )
}

export default HeaderSongTitle