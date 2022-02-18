import React from 'react'
import { FaPen } from 'react-icons/fa'
import dynamic from 'next/dynamic'

import { DocumentData, DocumentReference } from 'firebase/firestore'
import { useToggle } from '@/hooks/.'

interface StartValue {
  image: string,
  text: string
}

interface ChangeTriggerProps {
  onComplete: (value: string, url: string, bindColor: string) => Promise<void>
  startValue: StartValue
  updateRef: DocumentReference<DocumentData>
}

const ChangeTrigger: React.FC<ChangeTriggerProps> = (props) => {

  const { onComplete, startValue, updateRef } = props

  const [open, changeOpen] = useToggle(false)

  const EditModal = dynamic(() => import('@/components/reusable/modal/EditModal'))
  const ModalContainer = dynamic(() => import('@/components/reusable/modal/ModalContainer'))
  
  const endChanges = async (...args: [string, string, string]) => {
    await onComplete(...args)

    changeOpen(false)
  }

  return (
    <div className='flex flex-col'>
      <FaPen
        onClick={changeOpen.bind(null, !open)} 
        className=' text-5xl overlay_icon' 
      />
      
     <ModalContainer 
       title='Change profile'
       open={open}
       close={changeOpen.bind(null, false)}
     >
      <EditModal 
        changeRef={updateRef} 
        dispalayImage={startValue.image} 
        startValue={startValue?.text }
        onComplete={endChanges}
      />

     </ModalContainer>
    </div>
  )
}

export default ChangeTrigger