import React from 'react'

import { toHHMMSS } from '@/utils/helpers'
import AppIcon from '@/icons/.'
import { FaStop } from 'react-icons/fa'
import { BsRecordCircle } from 'react-icons/bs'

interface RecorderInputProps {
  stopped: boolean,
  audioURL: string,
  timeStamp: number,
  startRecording: () => void,
  stopRecording: () => void,
  isRecording: boolean
}

const RecorderInput: React.FC<RecorderInputProps> = (props) => {
  const { audioURL, stopped, timeStamp, stopRecording, isRecording, startRecording } = props

  return (

      <div 
        style={{background: 'rgb(59, 130, 246)'}}  
        className='
        max-w-[307px]
        sendFormInput 
        bg-green-500 
        overflow-hidden
        hover:bg-green-500 
        text-white p-1 flex-grow
      '>

       {!stopped && (!isRecording ? 
         <AppIcon 
           Icon={
            <FaStop 
              className='
               text-2xl text-white bg-blue-500 animate-pulse -left-10' 
            />}
          
           classes='p-1 bg-blue-500 hover:bg-blue-500' 
           onclick={startRecording.bind(null)}
         /> : (
          <AppIcon 
            Icon={
              <BsRecordCircle 
                className='
                text-2xl text-white bg-blue-500 animate-pulse -left-10' 
              />}
            classes='p-1 bg-blue-500 hover:bg-blue-500' 
            onclick={stopRecording.bind(null)}
          /> 
         ))
       }
        <div className='relative'>

          {stopped && (
            <audio className='timeline ' controls src={audioURL}></audio>
          )}
        </div>

        <div className='flex flex-grow w-full'>

        </div>
        <div className='text-blue-500  p-1 px-2 rounded-full animate-pulse  text-xs font-semibold bg-white'>
        {toHHMMSS(timeStamp.toString())}
        </div>

        </div>
 
  )
}

export default RecorderInput