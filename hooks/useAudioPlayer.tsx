import React, { ChangeEvent } from 'react'

import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './redux' 

import { setCurrentTime, setCurrentTrack, setFullTime, setVolume, setPaused } from '@/store/actions'

const useAudioPlayer = () => {

  const [audio, setAudio] = useState<HTMLAudioElement>(null) 

  const dispatch = useAppDispatch()
  const { currentTime, fullTime, volume, currentTrack, paused } = useAppSelector(state => state.song)
  
  useEffect(() => {
    if (currentTrack && audio) {
      audio.src = currentTrack.audio
     
      audio.onloadedmetadata = () => {
        dispatch(setFullTime(audio.duration))
      }
      dispatch(setPaused(true))
      audio.play()
    }
  }, [currentTrack])

  useEffect(() => {

    let newAudio

    if (audio) {
      newAudio = audio
    } else {
      newAudio = new Audio()
    }

    newAudio.ontimeupdate = (current) => {
      dispatch(setCurrentTime(newAudio?.currentTime))
      
    }
    newAudio.onloadedmetadata = () => {
      dispatch(setFullTime(newAudio.duration))
    }

    setAudio(newAudio)

  }, [])

  useEffect(() => {
    if (audio) {
      audio.volume = (volume / 100)
    }
  }, [volume])

  useEffect(() => {
    console.log('ddd')
    if (audio) {
      if (paused) {
        console.log('play')
        audio.play()
      } 
      else {
        audio.pause()
        console.log('puse')
      }

    }
  }, [paused])

  const togglePaused = () => {
    if(paused) {
      dispatch(setPaused(false))
    } else {
      dispatch(setPaused(true))
    }
  }

  const changeTime = (e: ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = +e.target.value
    dispatch(setCurrentTime(+e.target.value))
  }

  const refreshTime = () => {
    dispatch(setCurrentTime(0))
    audio.currentTime = 0
  }

  const shuffleCurrentTime = () => {
    const randomTime  = Math.floor(Math.random() * fullTime)

    dispatch(setCurrentTime(randomTime))
    audio.currentTime = randomTime
  }

  return {currentTime, fullTime, shuffleCurrentTime, currentTrack, changeTime, refreshTime, togglePaused}
}

export default useAudioPlayer