import React from 'react'

import { TableContext, TableContextProps } from '@/context/TableContext'
import { useAppSelector } from '@/hooks/redux'
import dynamic from 'next/dynamic'

import { selectCurrentIndex, selectGroup,selectQueue } from '@/store/selectors'

const Queuetable = () => {
  const SongsTable = dynamic(() => import('@/components/reusable/table/SongsTable'))

  const currentIndex = useAppSelector(selectCurrentIndex)
  const queue = useAppSelector(selectQueue)
  const group = useAppSelector(selectGroup)

  const nextInQueue = queue.slice(currentIndex + 1)

  const contextValue: TableContextProps = {
    group, showAlbum: true, isSearch: true
  }

  console.log('rere')

  return (
   
    <TableContext.Provider value={contextValue}>
      {
      
        <React.Suspense fallback={<p>Loading...</p>}>
        <SongsTable 
          tracks={nextInQueue} 
        />
        </React.Suspense>
       
      }
     </TableContext.Provider>
  
  )
}

export default React.memo(Queuetable)