import React, { useEffect } from 'react'

import { firestore } from '@/lib/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, query, limit } from 'firebase/firestore'

import { GreetItem } from './'
import { IAlbum } from '@/models/.'

const Greet = () => {

  const albumsRef= collection(firestore, 'albums')
  const [albums] = useCollection(query(albumsRef, limit(6)))

  return (
    <div className='flex flex-col'>
      <h1 className='text-title text-4xl p-2 font-bold'>Good Morning</h1>

      <div className='grid grid-cols-2 p-3 gap-4 gap-x-6 grid-rows-2 lg:grid-cols-3 w-full'>
        {
          albums?.docs?.map(doc => (
            <GreetItem album={{...doc.data(), id: doc.id} as IAlbum} />
          ))
        }
      </div>
    </div>
  )
}

export default React.memo(Greet)