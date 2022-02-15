import React from 'react'

const CardLoader = () => {
  return (

      <div className="animate-pulse w-full flex flex-col">

        <div className="rounded w-full h-36 bg-gray-700" />

        <div className="flex flex-col mt-5">
          <div className="w-full h-5 bg-gray-700 rounded" />
          <div className="mt-2 w-10/12 h-3 bg-gray-700 rounded" />
          <div className="mt-2 w-8/12 h-3 bg-gray-700 rounded" />
        </div>

      </div>
     
 
  
  )
}

export default CardLoader