import React from 'react'
import Image from 'next/image'

import { useNavigation } from '@/hooks/.'
import { IAlbum } from '@/models/.'
import { FaChevronRight } from 'react-icons/fa'

interface AlbumTableItemProps {
  album: IAlbum
  index: number
}

const AlbumTableItem: React.FC<AlbumTableItemProps> = (props) => {

  const { album, index } = props
  const { pushRouter } = useNavigation()

  const pushToAlbum = () => {
    pushRouter('/album/' + album.id + '_Most%20popular')
    
  }

  return (
    <div 
      onClick={pushToAlbum.bind(null)}
      className='song_item px-3'>

      <div className='flex items-center gap-2'>

        <p className='table_number_enumaration'>
          {index + 1}
        </p>

        <div className='avatar_sd'>
          <Image 
            src={album.banner}
            alt={album.title}
            layout={"fill"}
            objectFit={"cover"}
          />
        </div>

        <p className='table_number_enumaration font-semibold'>
          {album.title}
        </p>

      </div>

      <div className='flex items-center justify-center mr-8'>
        <FaChevronRight className='text-left app_icon text-desc hover:text-title' />
      </div>

    </div>
  )
}

export default AlbumTableItem