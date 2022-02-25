import React from 'react'

import Image from 'next/image'
import { auth, googleProvider, firestore } from '@/lib/firebase'
import { signInWithPopup, User } from 'firebase/auth'
import { getDoc, doc, setDoc } from 'firebase/firestore'

import { useNavigation } from '@/hooks/.'
import { SyntheticEvent } from 'react'
import analyze from 'rgbaster'

import { useAppDispatch } from '@/hooks/redux'
import { setUser } from '@/store/actions'

const Login = () => {

  const dispatch = useAppDispatch()
  
  const { pushRouter } = useNavigation()

  const checkUser = async (userId: string, payload: User) => {
    let user
         
    try {
      user = await getDoc(doc(firestore, 'users', userId))
      console.log(user.data())
    } catch {}

    if (user.data()) { return }

    const {displayName, email, photoURL, uid} = payload

    const bindColor = (await analyze(photoURL))

    const newUser = {displayName, email, photoURL, uid, bindColor: bindColor[0].color}

    dispatch(setUser(newUser))
    await setDoc(doc(firestore, 'users', uid), newUser)
  }
  
  const signIn = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()

    signInWithPopup(auth, googleProvider)
      .catch(e => console.log(e.message))
      .then((result: any) => {checkUser(result.user.uid, result.user ), console.log(result.user); pushRouter('/')})
  }



  return (
    <div className='loadingPage'>
      <div className='relative w-[300px] h-[160px]'>
         <Image 
           src={'https://logos-world.net/wp-content/uploads/2020/09/Spotify-Symbol.png'}
           layout={'fill'}
           alt="spotify logo"
         />
      </div>

      <button 
        onClick={signIn.bind(null)}
        className='login_button p-3'>
        Login with Google
      </button>
    </div>
  )
}

export default Login