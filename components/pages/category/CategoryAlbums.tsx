import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { firestore } from '@/lib/firebase'
import { collection, query, where } from 'firebase/firestore' 
import { useCollectionOnce } from 'react-firebase-hooks/firestore'

interface CategoryAlbumsProps {
  category: string,
  reverse: boolean,
  title: string
}

const CategoryAlbums: React.FC<CategoryAlbumsProps> = (props) => {

  const { category, reverse = false, title = '' } = props

  const AlbumList = dynamic(() => import('@/components/reusable/albums/CardList'))

  const fireref = collection(firestore, 'albums')
  const [albumsDocs] = useCollectionOnce(query(fireref, where('genre', "==", category)))

  const albums = albumsDocs?.docs.map(item => ({...item.data(), id: item.id})) || []

  const finalAlbums = albums ? reverse ? albums?.reverse() : albums : []

  return (
    <>
      {finalAlbums.length > 0 &&  <AlbumList title={title} albums={finalAlbums as any} />}

      {!reverse && finalAlbums.length === 0 && (
        <span className='text-xl flex gap-2 pt-4 text-title '>This collection is empty 
         <Link href={'/search'}>
           <p className='text-blue-500 hover:underline cursor-pointer'>try find in other collection</p>
         </Link>
        </span>
      )}
    </>
  )
}

export default CategoryAlbums