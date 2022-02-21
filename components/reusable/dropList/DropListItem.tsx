import React from 'react'
import { IDropItem } from '@/models/.'

const DropListItem: React.FC<{item: IDropItem}> = (props) => {

  const {item: { onClick, title, Icon }} = props

  return (
    <div 
      onClick={onClick.bind(null)}
      className='drop_item '>

      <p className='text-title text-sm font-medium'>{title}</p>

      <Icon className="text-title text-lg" />
    </div>
  )
}

export default DropListItem