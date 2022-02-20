import { defaultImage } from '@/service/playlist.service'
import React from 'react'
import Image from 'next/image'

import { ModalContainer } from '.'
import { useRecorder } from '@/hooks/.'

import RecorderInput from './inputs/RecorderInput'

import { useInputValue } from '@/hooks/.'

interface RecordModalProps {
  open: boolean,
  close: () => void,
  onComplete: (...args:[string, string, number]) => void
}

const RecordModal: React.FC<RecordModalProps> = (props) => {

  const { close, onComplete, open } = props
  const [value, bindValue] = useInputValue('')

  const [
    audioURL, 
    isRecording, 
    startRecording, 
    stopRecording, 
    url, 
    loading, 
    timeStamp, 
    audio, 
    stopped
  ] = useRecorder()

  const finishModal = () => {
    onComplete(value, url, timeStamp)
    close()
  }

  return (
    <ModalContainer
      close={close}
      open={open}
      title='Record Song'
    >
    <div className='flex flex-col gap-4 justify-center items-center'>

      <div className='avatar_lg group relative'>
        <Image 
          src={defaultImage}
          alt={'recond songs'}
          layout="fill"
          objectFit='cover'
        />
      </div>

        <input 
          placeholder='title'
          {...bindValue}
          type="text" 
          className='modal_input' 
        />

        <input 
          placeholder='description'
          type="text" 
          className='modal_input' 
        />

        <RecorderInput 
          audioURL={url} 
          stopped={stopped} 
          timeStamp={timeStamp} 
          isRecording={isRecording}
          startRecording={startRecording}
          stopRecording={stopRecording}
        />

        <div className='flex items-center gap-2'>

          <button 
            onClick={isRecording ? stopRecording : startRecording}
            disabled={loading}
            className='modal_button m-0'>
              {loading ? "Waitng audio..." : 
              isRecording ? "Stop recording" : 'Start recording'}
          </button>
      
          <button 
            onClick={finishModal}
            disabled={loading || !url || !value}
            className='modal_button m-0'>
              {loading ? "Uploading audio..." : 'Add Song'}
          </button>

        </div>

    </div>
    </ModalContainer>
  )
}

export default RecordModal