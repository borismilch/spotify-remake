import { memo } from 'react'
import { useAppSelector } from '@/hooks/redux'

const ColorOverlay = () => {

  const {currentColor} = useAppSelector(state => state.color)

  return (
    <div>
      <div className={`overlay transition-all duration-500 z-10`}></div>
      <div className={`overlay transition-all duration-500`} style={{backgroundColor:currentColor}} />
    </div> 
  )
}

export default memo(ColorOverlay)