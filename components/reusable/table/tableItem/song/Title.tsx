import React from 'react'

import { ITrack } from '@/models/.'

import { useContext } from 'react'
import { TableContext, TableContextProps } from '@/context/.'

interface SongTitleProps {
  isSameSong: boolean,
  song: ITrack,
  
}

const Title: React.FC<SongTitleProps> = (props) => {
  
  const { isSameSong, song } = props

  const { isSearch = false } = useContext<TableContextProps>(TableContext)

  return (
    <div className='flex flex-col'>

      <h4 className={'text-title text font-semibold ' + 
        ((isSameSong) && 'text-green-500')}>
        {song.title}
      </h4>

      <p className='text-desc cursor-pointer text-sm hover:underline'>
        { isSearch ? song.albumName : song.authorName }
      </p>

    </div>
  )
}

export default Title