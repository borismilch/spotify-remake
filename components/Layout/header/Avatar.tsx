import React from 'react'

import { auth } from '@/lib/firebase'
import Image from 'next/image'

import { IoMdArrowDropdown } from 'react-icons/io'
import { useToggle } from '@/hooks/.'

import { DropList } from '@/components/reusable'
import { IDropItem } from '@/models/.'
import { HiLogout, FaUserCircle } from '@/icons/.'
import { useNavigation } from '@/hooks/.'

import { useAppSelector, useAppDispatch } from '@/hooks/redux' 
import { cleanUser } from '@/store/actions'

const Avatar = () => {

  const [ open, changeOpen ] = useToggle(false)
  const { pushRouter } = useNavigation()

  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.user)

  const logout = async () => {
    await auth.signOut()
    dispatch(cleanUser())
  }

  const dropItems: IDropItem[] = [
    {
      Icon: HiLogout,
      title: 'Logout',
      onClick: logout.bind(null)
    },
    {
      Icon: FaUserCircle,
      title: 'Profile',
      onClick: pushRouter.bind(null, '/profile'),
    },
  ]

  return (
    <div
      onClick={changeOpen.bind(null, !open)} 
      onMouseLeave={changeOpen.bind(null, false)}
      className='avatar_badge z-40 relative'>

      {user && <div className='avatar_sm'>
        <Image 
          src={user?.photoURL} 
          alt="user image"
          layout='fill'
        />
      </div>}

      <div className='flex gap-2'>
        <p className='text-title'> {user?.displayName} </p>

        <IoMdArrowDropdown className='text-title text-2xl' />
      </div>

      <div className='absolute z-10 top-6 pt-4 right-3'>
        <DropList 
          items={dropItems} 
          open={open} 
          close={changeOpen.bind(null, false)} 
        />
      </div>

    </div>
  )
}

export default Avatar