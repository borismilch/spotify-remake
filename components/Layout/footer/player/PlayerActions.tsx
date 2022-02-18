import React, { ReactElement } from 'react'

import { useAppSelector, useAppDispatch } from '@/hooks/redux' 

import AppIcon, { AiFillBackward, AiFillForward, AiFillPauseCircle, AiFillPlayCircle, TiArrowShuffle, TiArrowSync } from '@/icons/.'

import { goNext, goPrevios } from '@/store/actions'

interface IActionItem  {
  Icon: ReactElement<any, any>,
  onClick: () => void
}

interface PlayerActionsProps {
  togglePaused: () => void
  refreshTime: () => void
  shuffleCurrentTime: () => void
}

const PlayerActions: React.FC<PlayerActionsProps> = (props) => {

  const dispatch = useAppDispatch()

  const { togglePaused, refreshTime, shuffleCurrentTime } = props
  const { paused } = useAppSelector((state => state.audio))

  const actionArray: IActionItem[]= [
    
    {
      Icon: <AiFillBackward  className="app_icon text-desc" />,
      onClick: () => dispatch(goPrevios())
    },
    {
      Icon: <TiArrowShuffle  className="app_icon text-desc" />,
      onClick: shuffleCurrentTime.bind(null)
    },
    {
      Icon: !paused ?
       <AiFillPlayCircle className="audio_toggler" /> :
       <AiFillPauseCircle className="audio_toggler" />,
      onClick: togglePaused
    },
    {
      Icon: <TiArrowSync className="app_icon text-desc" />,
      onClick: refreshTime.bind(null)
    },
    {
      Icon: <AiFillForward  className="app_icon text-desc"/>,
      onClick: () => dispatch(goNext())
    },

  ]
  return (
    <div className='flex items-center justify-center z-10 gap-3'>
   
      {
        actionArray.map(({Icon, onClick}) => (
          <AppIcon 
            onclick={onClick}
            Icon={Icon}
          />
        ))
      }
   
    </div>
  )
}

export default PlayerActions