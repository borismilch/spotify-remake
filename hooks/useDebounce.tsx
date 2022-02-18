import React from 'react'

import { useState } from 'react'
import { useInputValue } from '.'

const useDebounce = (callback: (...args: any) => void) => {
  const [timer, setTimer] = useState(null)
  const [debouncing, setDebouncing] = useState<boolean>(false)
  const [val, bind] = useInputValue()

  const debounce = (...args) => {
    bind.onChange(...args)
    if (!debouncing) {
      setDebouncing(true)
    }

    if (timer) {
      clearTimeout(timer)
    }

    setTimer(
      setTimeout(() => callback(...args), 300)
    )
    setDebouncing(false)
   
  }

  return [debounce, val]
}

export default useDebounce