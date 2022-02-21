import React from 'react'

import { IPlayList } from '@/models/.'
import { SongSearchTable } from '.'

import { useInputValue, useToggle } from '@/hooks/.'
import { SearchForm } from '@/components/reusable'

interface PlayListSearchProps {
  playList: IPlayList
}

const PlaylistSearch: React.FC<PlayListSearchProps> = ({playList}) => {

  const [query, bind, clean, changeValue] = useInputValue()
  const [open, changeOpen] = useToggle(true)

  const showtable = (!open) || query

  return (
    <div className='flex flex-col'>

       <SearchForm 
          clean={clean}
          onChange={changeValue}
          query = {query}
          open={open}
          changeOpen={changeOpen}
        />

    { showtable && <SongSearchTable playlist={playList} query={query} />}
      
    </div>
  )
}

export default React.memo(PlaylistSearch)