import React from 'react'

import { useNavigation } from '@/hooks/.'
import { BsChevronLeft, BsChevronRight } from '@/icons/.'

const Navs = () => {

  const { router } = useNavigation()
  
  const backRouter = () => {
    router.back()
  }

  const forwardRouter = () => {
    window.history.forward()
  }

  return (
    <div className='flex items-center z-20 gap-3 ml-5'>
      
      <button 
        onClick={backRouter.bind(null)}
        className='navigation_button'>
          <BsChevronLeft className='text-title text-xl' />
      </button>

      <button 
        onClick={forwardRouter.bind(null)}
        className='navigation_button'>
          <BsChevronRight className='text-title text-xl' />
      </button>
      
    </div>
  )
}

export default Navs