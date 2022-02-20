import React from 'react'

import Image from 'next/image'
import { useInputValue, useUploadData } from '@/hooks/.'
import { defaultImage } from '@/service/playlist.service'
import analyze from 'rgbaster'

import { FaPen } from 'react-icons/fa'

import { useToggle } from '@/hooks/.'

interface EditModalProps {
  dispalayImage: string,
  startValue: string,
  onComplete: any,
  hasDescription?: boolean
  startDescription?: string
  isAudio?: boolean
  
}
const EditModal: React.FC<EditModalProps> = (props) => {

  const {
     dispalayImage, 
     startValue, 
     onComplete, 
     startDescription = '', 
     hasDescription ,
     isAudio = false
  } = props

  const [disabled, changeDisabled] = useToggle(false)

  const [value, bindValue] = useInputValue(startValue)
  const [description, bindDescription] = useInputValue(startDescription)

  const { url, dataUrl, loading, bind, triggerInput,fileInputRef  } = useUploadData('/images/')

  const saveChanges = async () => {
    let bindColor

    changeDisabled(true)
   
    if (!isAudio && dataUrl) {
      bindColor =( await analyze(dataUrl, 
      { ignore: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ] }))[0].color
    }

    onComplete(value, url ? url : dispalayImage, bindColor, description)
  }
  
  return (
    <div className='flex gap-4 items-center'>

      <div className='avatar_lg group relative'>
        <div>
         <Image 
            src={isAudio ? defaultImage : dataUrl ? dataUrl : dispalayImage}
            alt={startValue}
            layout="fill"
            objectFit='cover'
          />
        </div>
    

        {!isAudio && <div className='over absolute group-hover:opacity-100 h-full z-40'>
          <FaPen
            onClick={triggerInput}
            className='text-white text-xl  app_icon'

          />
        </div>}
      </div>

      <input type="file" hidden {...bind} />

      <div className='flex flex-col mb-7'>
          <input 
            placeholder='title'
            {...bindValue}
            type="text" 
            accept={!isAudio ? 'image/*' : 'audio/*'}
            className='modal_input' 
          />

        { hasDescription && <input 
            {...bindDescription}
            type="text" 
            className='modal_input mt-2' 
            placeholder='description (optional)'
          />}

        <div className='flex gap-3 items-center'>

          { isAudio &&  <button 
            onClick={triggerInput}
            disabled={loading}
            className='song_add_button border-0'>
             upload song
          </button>}

         </div>

          <button 
           onClick={saveChanges}
           disabled={loading || (isAudio && !url) || disabled}
           className='modal_button'>
            {
             loading ? isAudio ? 
              "Uploading audio..." : 
              'Uploading image...' : 
              !disabled ? 'Save changes' :
               "Saving changes..." 
              
            }
          </button>
        

      </div>

    </div>
  )
}

export default EditModal