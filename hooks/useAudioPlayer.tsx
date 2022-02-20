import React, { ChangeEvent, RefObject } from 'react'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './redux' 

import { goNext } from '@/store/actions'
import { setCurrentTime, setFullTime, setPaused } from '@/store/actions'


const useAudioPlayer = (audio: RefObject<HTMLAudioElement>) => {

  const dispatch = useAppDispatch()
  const { currentTrack } = useAppSelector(state => state.song)
  const { currentTime, fullTime, volume, paused } = useAppSelector(state => state.audio)
  
  useEffect(() => {
    startAudio()
  }, [currentTrack])

  useEffect(() => {

    if (!audio.current) { return }

    try {
      audio.current.ontimeupdate = () => {
       if (audio.current?.currentTime) {
        dispatch(setCurrentTime(audio?.current?.currentTime))
       }
        
      }
    } catch {}

  
    audio.current.onloadedmetadata = () => {
      console.log(currentTrack.duration, 'from hook')
      dispatch(setFullTime(currentTrack.duration))
    }

    audio.current.onended = () => {
      dispatch(goNext())
    }

    if (currentTrack ) {
      startAudio()
      audio.current.currentTime = currentTime
    }

  }, [])

  useEffect(() => {
    if (audio) {
      audio.current.volume = (volume / 100)
    }
  }, [volume])

  useEffect(() => {
    if (audio) {
      if (paused) {
        audio.current.play()
      } 
      else {
        audio.current.pause()
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

  function startAudio () {
    if (currentTrack && audio.current) {
      audio.current.src = currentTrack.audio
     
      audio.current.onloadedmetadata = () => {
        dispatch(setFullTime(audio.current.duration))
      }
      dispatch(setPaused(true))
      audio.current.play()
    } else {
      audio.current.src = null
      audio.current.onloadeddata = () => {}
    }
  }

  const changeTime = (e: ChangeEvent<HTMLInputElement>) => {
    audio.current.currentTime = +e.target.value
    dispatch(setCurrentTime(+e.target.value))
  }

  const refreshTime = () => {
    dispatch(setCurrentTime(0))
    audio.current.currentTime = 0
  }

  const shuffleCurrentTime = () => {
    const randomTime  = Math.floor(Math.random() * fullTime)

    dispatch(setCurrentTime(randomTime))
    audio.current.currentTime = randomTime
  }

  return {currentTime, fullTime, shuffleCurrentTime, currentTrack, changeTime, refreshTime, togglePaused}
}

export default useAudioPlayer