import React from 'react'

const ItemLoader = () => {
  return (
    
      <div className="animate-pulse w-full flex gap-2">

      <div className="rounded w-10 h-10 bg-gray-700" />

      <div className="flex w-[300px] gap-3 items-start flex-col">
        <div className="w-full h-3 bg-gray-700 rounded" />
        <div className="w-1/2 h-3 bg-gray-700 rounded" />        
      </div>
      </div>

  )
}

export default ItemLoader