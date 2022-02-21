import React, { ReactElement } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { useAppDispatch } from '@/hooks/redux' 
import { useEffect } from 'react'
import { setCurrentColor, ScrollReducerctions } from '@/store/actions'

import { useRef } from 'react'

import { useScrollHeight } from '@/hooks/.'

import { auth } from '@/lib/firebase'

interface PageTitlteProps {
  bgColor: string,
  titleContent: ReactElement<any, any>
}

const PageTitle: React.FC<PageTitlteProps> = (props) => {

  const { bgColor, titleContent, children } = props
  const [user] = useAuthState(auth)

  const scrollAreaRef = useRef(null)

  const d = useScrollHeight(scrollAreaRef)

  const dispatch = useAppDispatch()

  const drawHeader = () => {
    dispatch(setCurrentColor(bgColor))

  }

  useEffect(() => {
    drawHeader()
  
  }, [])

  return (
    <div 
      ref={scrollAreaRef}
      className='flex flex-col h-full relative overflow-auto scrollbar-none'>

    <div className={`inset-0 -top-[70px] absolute h-[345px]`} style={{backgroundColor: bgColor}} />
    <div className={`inset-0 -top-[70px] absolute h-[345px] z-10 lay`} />

    <div className="p-8 pt-6 z-30">

      {titleContent}
       
      <div className={`bg-gradient-to-t inset-0 from-[#212121] to-[${bgColor}]`} />

    </div>

    <div className='flex flex-col'>
      <div className={`absolute h-[200px] lay_small top-[275px] inset-0 z-10`}></div>
      <div className={`absolute h-[200px] lay_small top-[275px] inset-0`} style={{backgroundColor:bgColor}} />

      <div className='z-30 p-6 pt-2'>
         {children}
      </div>
    </div>

    </div>
  )
}

export default React.memo(PageTitle)