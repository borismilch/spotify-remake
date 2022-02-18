import React from 'react'

import Link from 'next/link'

const LikesPlaceholder = () => {
  return (
    <span className='text-title flex items-center gap-2 text-xl font-bold'>
      No liked tracks found,
     <Link  href={'/'}> 
        <p className='text-blue-500 cursor-pointer hover:underline'>can you find some?</p>
      </Link>
    </span>
  )
}

export default LikesPlaceholder