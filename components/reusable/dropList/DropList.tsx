import React from 'react'

import dynamic from 'next/dynamic'
import { IDropItem } from '@/models/.'

interface DropListProps {
  items: IDropItem[], 
  open: boolean, 
  close: () => void
}

const DropList: React.FC<DropListProps> = (props) => {
  const { items, open, close } = props

  const DropItem = dynamic(() => import('./DropListItem'))

  return (
    <div
      onClick={close.bind(null)}
      className={'dropList bg-cardHover ' + (open && 'opacity-[1]')}
       style={{visibility: open ? 'visible' : "hidden"}}
      >

      {
        items.map(item => (
          <DropItem item={item} />
        ))
      }

    </div>
  )
}

export default DropList