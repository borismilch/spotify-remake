import React from 'react'

import { FiHeart }  from 'react-icons/fi'
import { PlayButton } from '@/components/reusable'
import { BsThreeDots } from 'react-icons/bs'
import AppIcon from '@/components/icons'

interface ActionButtonsProps {

}

const ActionButtons = () => {
  return (
    <div className='flex  gap-4 py-5'>

      <PlayButton />

      <AppIcon 
        Icon = {<FiHeart />}
        onclick={ () => {} }
      />

      <AppIcon
        Icon={<BsThreeDots />} 
        onclick={ () => {} }
      />


      
    </div>
  )
}

export default ActionButtons