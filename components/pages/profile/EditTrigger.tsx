import React from 'react'
import { FaPen } from 'react-icons/fa'

import dynamic from 'next/dynamic'

import { useAppSelector } from '@/hooks/redux'

import { firestore } from '@/lib/firebase'
import { doc } from 'firebase/firestore'

import { UserService } from '@/service/.'
import { useAppDispatch } from '@/hooks/redux'
import { setUser } from '@/store/actions'

import { useToggle } from '@/hooks/.'

const ChangeTrigger = () => {

  const [open, changeOpen] = useToggle(false)
  const { user } = useAppSelector((state) => state.user)

  const dispatch = useAppDispatch()

  const userRef = doc(firestore, 'users', user?.uid || 'dd')
  
  const EditModal = dynamic(() => import('@/components/reusable/modal/EditModal'))
  const ModalContainer = dynamic(() => import('@/components/reusable/modal/ModalContainer'))

  const submitChage = async (value: string, url: string, bindColor: string) => {
    const data = { displayName: value, photoURL: url, bindColor }

    await UserService.updateUser(user.uid, data)

    console.log(bindColor)

    changeOpen(false)

    dispatch(setUser({...user, ...data}))
  }

  return (
    <div className='flex flex-col'>
      <FaPen
        onClick={changeOpen.bind(null, !open)} 
        className=' text-5xl overlay_icon' 
      />
      
     <ModalContainer 
       title='Change profile'
       open={open}
       close={changeOpen.bind(null, false)}
     >
      <EditModal 
        changeRef={userRef} 
        dispalayImage={user?.photoURL} 
        startValue={user?.displayName }
        onComplete={submitChage}
      />

     </ModalContainer>
    </div>
  )
}

export default ChangeTrigger