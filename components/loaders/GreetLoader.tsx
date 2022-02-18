import React from 'react'

const GreetLoader = () => {
  return (
    <div className="animate-pulse w-full flex gap-2 px-2">

     <div className="rounded w-16 h-16 flex-shrink-0 bg-gray-700" />

      <div className="flex w-full gap-3 items-start justify-center flex-col">
        <div className="w-full h-5 bg-gray-700 rounded" />
        <div className="w-full h-5 bg-gray-700 rounded" />
              
      </div>
    </div>
  )
}

export default GreetLoader