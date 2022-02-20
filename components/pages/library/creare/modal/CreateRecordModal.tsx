import React from 'react'
import dynamic from 'next/dynamic'

import { useToggle } from '@/hooks/.'

interface CreateRecordModalProps {
  onComplete: (value: string, url: string, duration?:number) => void
}

const CreateRecordModal: React.FC<CreateRecordModalProps> = (props) => {
  const { onComplete } = props

  const [open, changeOpen] = useToggle(false)

  const onCompleteModal = (...args: [string, string, number]) => {
    const [value, url, duration] = args

    onComplete(value, url, duration)
  }

  const RecordModal = dynamic(() => import('@/components/reusable/modal/RecordModal'))

  return (
    <div>
      <button 
        onClick={changeOpen.bind(null, true)}
        className='modal_button m-0'>
        Record Song
      </button>

      <RecordModal 
        open={open} 
        close={changeOpen.bind(null, false)} 
        onComplete={onCompleteModal}  
      />
    </div>
  )
}

export default CreateRecordModal