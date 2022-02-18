import React from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { firestore } from '@/lib/firebase'
import { doc } from 'firebase/firestore'

import { setUser } from '@/store/actions'
import { UserService } from '@/service/.'
import { EditTrigger } from '@/components/reusable/index'

import { UserPayload } from '@/service/user.service'

const EditUserTrigger = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.user)
  const userRef = doc(firestore, 'users', user?.uid || 'dd')

  const submitChage = async (value: string, url: string, bindColor: string) => {
    const data: UserPayload = { displayName: value, photoURL: url, bindColor }

    await UserService.updateUser(user?.uid, data)

    dispatch(setUser({...user, ...data}))
  }

  return (
    <>
      <EditTrigger 
        onComplete={submitChage}
        startValue={{ image: user?.photoURL, text: user?.displayName }}
        updateRef={userRef}
      />
    </>
  )
}

export default EditUserTrigger