import React from 'react'

import { FaHashtag, FaClock } from 'react-icons/fa'
import { RiPlayList2Fill } from 'react-icons/ri'

const SondTablrHeader = () => {
  return (
    <div className='flex p-3 mb-2 border-b border-borderColor items-center justify-between'>

      <div className='flex items-center gap-2 text-desc font-medium'>
        <FaHashtag />

        <p >Song name</p>
      </div>

      <div className='flex items-center mr-10 text-desc gap-32'>
        
        <RiPlayList2Fill className='text-lg'  />

        <FaClock />

      </div>

    </div>
  )
}

export default SondTablrHeader