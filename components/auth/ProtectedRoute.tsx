import React from 'react';
import { useEffect } from 'react';

import { auth, firestore } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LoginLoader } from '.';
import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { getDoc, doc } from 'firebase/firestore';

import dynamic from 'next/dynamic';
import { setUser } from '@/store/actions';
import { IUser } from '@/models/.';

const Redirect: React.FC = ({children}) => {
  const Login = dynamic(() => import('./Login'))
  const dispatch = useAppDispatch()

  const { user: currentUser } = useAppSelector((state) => state.user)
  const [user, loading] = useAuthState(auth)

  const getAndSaveUser = async () => {
    const userRef = doc(firestore, 'users', user.uid)

    const fireuser = (await getDoc(userRef)).data()
    dispatch(setUser(fireuser as IUser))
    
  }

  useEffect(() => {
    if (!currentUser && user) {
      getAndSaveUser()
    }
  }, [user])

  if (!user && loading) {
    return <LoginLoader />
  }

  if (!user && !loading) {
    return <Login />
  }
  return (
    <>
      {children}
    </>
  )
};

export default Redirect;