import React, { ReactElement, ReactEventHandler } from 'react'
import { FaPen } from 'react-icons/fa'
import dynamic from 'next/dynamic'

import { useToggle } from '@/hooks/.'

interface StartValue {
  image: string,
  text: string,
  description? : string
  isAudio?: boolean
}

interface ChangeTriggerProps {
  onComplete: (value: string, url: string, bindColor: string, description?: string) => Promise<void>
  startValue: StartValue
  hasDescription?: boolean
  togglerElement?: ReactElement<any, any>
}

const ChangeTrigger: React.FC<ChangeTriggerProps> = (props) => {

  const { onComplete, startValue, hasDescription =false, togglerElement } = props

  const [open, changeOpen] = useToggle(false)

  const EditModal = dynamic(() => import('@/components/reusable/modal/EditModal'))
  const ModalContainer = dynamic(() => import('@/components/reusable/modal/ModalContainer'))
  
  const endChanges = async (...args: [string, string, string, string]) => {
    await onComplete(...args)

    changeOpen(false)
  }

  return (
    <div className='flex flex-col'>
      { !togglerElement ?  <FaPen
          onClick={changeOpen.bind(null, !open)} 
          className=' text-5xl overlay_icon' 
       /> : (
         <div onClick={changeOpen.bind(null, !open)}>
           {togglerElement}
         </div>
       )
      }
      
     <ModalContainer 
       title='Change profile'
       open={open}
       close={changeOpen.bind(null, false)}
     >
      <EditModal 
        dispalayImage={startValue.image} 
        startValue={startValue?.text }
        onComplete={endChanges}
        hasDescription={hasDescription}
        startDescription={startValue?.description || ''}
        isAudio={startValue.isAudio}
      />

     </ModalContainer>
    </div>
  )
}

export default ChangeTrigger