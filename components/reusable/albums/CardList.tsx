import React, { useEffect } from 'react'
import { IAlbum } from '@/models/.'
import dynamic from 'next/dynamic'

import { TrackService } from '@/service/.' 
import { tracks } from '@/utils/mock/trackItems'

interface CardListProps {
  albums: IAlbum[], 
  title: string
}

const CardList: React.FC<CardListProps> = ({albums, title}) => {
  const AlbumsCard = dynamic(() => import('./Card'))

  const calculateCount = () => Math.floor(window.innerWidth / 240)   


  return (
    <>
      <div className='flex justify-between items-center p-3 py-5'> 
        
        <h1 className='text-title font-semibold text-3xl cursor-pointer hover:underline'>{title}</h1>

        <h4 className='text-desc font-bold cursor-pointer hover:text-title transition-all duration-200'>More</h4>

      </div>
      <div className='grid px-1 grid-cols-2 gap-3 md:gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>

        {albums && albums?.slice(0, calculateCount()).map(alb => (
          <AlbumsCard  
            category={title}
            key={alb.id} 
            album={alb} 
          />
        ))}

      </div>
    </>
  )
}

export default React.memo(CardList)