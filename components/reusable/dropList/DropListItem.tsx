import React from 'react'
import { IDropItem } from '@/models/.'

const DropListItem: React.FC<{item: IDropItem}> = ({item: { onClick, title, Icon }}) => {
  return (
    <div 
      onClick={onClick.bind(null)}
      className='flex gap-2 w-[150px] justify-between transition-all p-2 duration-200 cursor-pointer bg-cardHover hover:bg-light items-center '>

      <p className='text-title text-sm font-medium'>{title}</p>

      <Icon className="text-title text-lg" />
    </div>
  )
}

export default DropListItem