import React from 'react'
import ReactDom from 'react-dom/index'
import { motion, AnimatePresence } from 'framer-motion'

import { IoMdClose } from 'react-icons/io'

import AppIcon from '@/icons/.'

interface ModalProps { 
  title: string
  open: boolean,
  close: () => void
}

const ModalContainer: React.FC<ModalProps> = (props) => {

  const { open, close, children, title } = props

  return  document ? ReactDom.createPortal(
    <AnimatePresence>
     {open && 
      <motion.div 
       animate={{opacity: 1}}
       initial={{opacity: 0}}
       className={'modal_overlay top-0 z-[1000] fixed '}
       onClick={close.bind(null)}
      >
      <div 
        onClick={(e) => e.stopPropagation()}
        className='flex flex-col rounded-xl bg-[#282828] gap-4 w-[520px] p-5'>

        <div className='flex justify-between items-center pb-3 '> 
          <h3 className='text-title text-2xl font-semibold '>{title}</h3>

          <AppIcon 
            Icon={<IoMdClose className="app_icon text-desc text-2xl" />}
          />
        </div>
        {children}

        <div>
          <p className='font-bold text-[0.7rem] text-title'>
            Продолжая, ты предоставляешь Spotify доступ к выбранному изображению. Пожалуйста, не загружай файлы, которые ты не имеешь права распространять.
          </p>
        </div>
      </div>
      </motion.div>}
      
    </AnimatePresence>, document.body) : <></>
}

export default ModalContainer