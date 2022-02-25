import React from 'react'
import { ItemLoader } from '.'

const UpdatePageLoader = () => {
  return (
    <div className='flex flex-col gap-6 p-9'>
      <div className="animate-pulse w-full gap-7  flex items-center">

        <div className="rounded w-48  flex-shrink-0 h-48 bg-gray-700" />

        <div className="flex flex-col gap-3 w-5/12 ">
          <div className="mt-2 w-10/12 h-5 bg-gray-700 rounded" />
          <div className="w-full h-20 bg-gray-700 rounded" />
          <div className="w-8/12 h-5 bg-gray-700 rounded" />
        </div>

      </div>

      <div className='flex flex-col gap-3'>

        {new Array(10).fill('').map((item, idx) => (
          <ItemLoader fullWidth={true} key={idx} />
        ))}

      </div>
    </div> 
   
  )
}

export default UpdatePageLoader