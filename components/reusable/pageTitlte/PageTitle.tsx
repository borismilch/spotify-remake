import React, { ReactElement } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { useAppDispatch } from '@/hooks/redux' 
import { useEffect } from 'react'
import { setCurrentColor } from '@/store/actions'

import { auth } from '@/lib/firebase'

interface PageTitlteProps {
  bgColor: string,
  titleContent: ReactElement<any, any>
}

const PageTitle: React.FC<PageTitlteProps> = (props) => {

  const { bgColor, titleContent, children } = props
  const [user] = useAuthState(auth)

  const dispatch = useAppDispatch()

  const drawHeader = () => {
    dispatch(setCurrentColor(bgColor)) 
  }

  useEffect(() => {
    drawHeader()
  }, [])

  return (
    <div className='flex flex-col relative overflow-auto scrollbar-none'>

    <div className={`inset-0 -top-[70px] absolute h-[345px]`} style={{backgroundColor: bgColor}} />
    <div className={`inset-0 -top-[70px] absolute h-[345px] z-10 lay`} />

    <div className="p-9 pb-7 z-30">

      {titleContent}
       
      <div className={`bg-gradient-to-t inset-0 from-[#212121] to-[${bgColor}]`} />

    </div>

    <div className='flex flex-col'>
      <div className={`absolute h-[200px] lay_small top-[275px] inset-0 z-10`}></div>
      <div className={`absolute h-[200px] lay_small top-[275px] inset-0`} style={{backgroundColor:bgColor}} />

      <div className='z-30 p-6'>
         {children}
      </div>
    </div>

    </div>
  )
}

export default React.memo(PageTitle)