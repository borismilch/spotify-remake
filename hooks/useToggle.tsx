import React from 'react'
import { useState } from 'react'

export default (initialVal: boolean): [boolean, (val: boolean) => void, () => void] => {

  const [open, setOpen] = useState<boolean>(initialVal)

  const changeOpen: (val: boolean) => void = (val) => {
    setOpen(val)
  }

  const toggle: () => void = () => {
    setOpen(prev => !prev)
  }
  
  return [open, changeOpen, toggle]
}
