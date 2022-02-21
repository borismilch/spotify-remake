import React, { ChangeEvent, RefObject } from 'react'

import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './redux'

import { ScrollReducerctions }  from '@/store/actions'
import { useToggle } from '.'

const useScrollHeight = (scrollArea: RefObject<HTMLDivElement>) => {

  const [throttlet, setThrottlet] = useToggle (false)

  const dispatch = useAppDispatch()

  const scrollHandler = async (e) => {
    if (throttlet) {
      return 
    }
    setThrottlet(true)

    dispatch(ScrollReducerctions.setScrolledEmeent(scrollArea.current.scrollTop))
    setTimeout(() => setThrottlet(false) ,1000)
  }

  useEffect(() => {
    scrollArea?.current?.addEventListener("scroll", scrollHandler)

    return () => scrollArea?.current?.removeEventListener("scroll", scrollHandler)
  }, [])

  return {}
}

export default useScrollHeight