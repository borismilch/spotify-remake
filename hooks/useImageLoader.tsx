import React from 'react'
import { useState } from 'react'

const useImageLoader = (): [boolean, () => void] => {

  const [loaded, setLoaded] = useState<boolean>(false)

  const onLoad = () => {
    setLoaded(true)
  }

return [ loaded, onLoad ]
}

export default useImageLoader