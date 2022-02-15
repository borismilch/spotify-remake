import { DocumentData, DocumentReference } from 'firebase/firestore'
import React, { useEffect } from 'react'

import Image from 'next/image'
import { useInputValue, useUploadData } from '@/hooks/.'

import analyze from 'rgbaster'

import { FaPen } from 'react-icons/fa'

interface EditModalProps {
  changeRef: DocumentReference<DocumentData>,
  dispalayImage: string,
  startValue: string,
  onComplete: any
}
const EditModal: React.FC<EditModalProps> = (props) => {

  const { changeRef, dispalayImage, startValue, onComplete } = props

  const [value, bindValue , cleanValue] = useInputValue(startValue)
  const { url, dataUrl, getUploadedData, loading, bind, triggerInput } = useUploadData('/images/')

  useEffect(() => {
    console.log(startValue, bind)
  }, [])

  const saveChanges = async () => {
    const bindColor =( await analyze(dataUrl))[0].color

    onComplete(value, url ? url : dispalayImage, bindColor)
  }
  
  return (
    <div className='flex gap-4 items-center'>

      <div className='avatar_lg group relative'>
        <div>
         <Image 
            src={dataUrl ? dataUrl : dispalayImage}
            alt={startValue}
            layout="fill"
            objectFit='cover'
          />
        </div>
    

        <div className='over absolute group-hover:opacity-100 h-full z-40'>
          <FaPen
            onClick={triggerInput}
            className='text-white text-xl  app_icon'

          />
        </div>
      </div>

      <input type="file" hidden {...bind} />

      <div className='flex flex-col mb-7'>
          <input 
            {...bindValue}
            type="text" 
            className='modal_input' 
          />

          <button 
           onClick={saveChanges}
            disabled={loading}
            className='modal_button'>
              {loading ? 'Uploading image...' : 'Save changes'}
            </button>
      </div>

    </div>
  )
}

export default EditModal