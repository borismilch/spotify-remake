import React from 'react'
import dynamic from 'next/dynamic'

import { useAppSelector } from '@/hooks/redux'
import { searchSelector } from '@/store/selectors'

const SeachContent = () => {

  const search = useAppSelector(searchSelector)

  const CategorySide = dynamic(() => import('./grid/CategorySide'))
  const CategorySearch = dynamic(() => import('./table/SearchInCategory'))

  return (
    <div className='flex flex-col gap-3 p-9 pt-5'>

      {!search ?
       <CategorySide />
        :
      <CategorySearch />
    }

    </div>
  )
}

export default SeachContent