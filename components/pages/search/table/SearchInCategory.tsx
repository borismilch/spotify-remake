import React, { useEffect } from 'react'

import dynamic from 'next/dynamic'

import { useAppSelector } from '@/hooks/redux'
import { searchSelector } from '@/store/selectors'
import { SongSearchTable } from '../../playlistPage'

const SearchInCategory = () => {

  const search = useAppSelector(searchSelector)

  useEffect(() => {
    console.log(search)
  }, [search])

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-title text-2xl font-semibold pt-4'>Search for results...</h2>
      <SongSearchTable query={search || 'm'} playlist={{id: 'ss'} as any} />
    </div>
  )
}

export default SearchInCategory