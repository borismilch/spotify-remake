import React from 'react'
import dynamic from 'next/dynamic'
import { useAppSelector } from '@/hooks/redux'

import Image from 'next/image'

import { firestore } from '@/lib/firebase'
import { collection } from 'firebase/firestore'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'

import { EditTrigger } from '.'

const ProfileBanner = () => {

  const { user } = useAppSelector((state) => state.user)

  const PageTitle = dynamic(() => import('@/components/reusable/pageTitlte/PageTitle'))
  const PageTitleContent = dynamic(() => import('@/components/reusable/pageTitlte/PageTitleContent'))
  const AlbumList = dynamic(() => import('@/components/reusable/albums/CardList'))
  
  const albumsRef = collection(firestore, 'albums')

  const [albums] = useCollectionDataOnce(albumsRef)

  return (
    <>
    <PageTitle
      bgColor={user?.bindColor}
      titleContent={
      <PageTitleContent 
        picture={
          <>
          {user &&  <Image
             src={user?.photoURL}
             alt={user?.displayName}
             layout='fill'
             objectFit='cover'
          />}
          </>
        }
        subtitle={'More than 200 millions listen'}
        type={'Profile'}
        title={user?.displayName}
        changeble
        overlayContent={
          <EditTrigger />
        }
        
      />
      }
    >
      <AlbumList albums={albums as any} title={'Top albums for this month'} />
    </PageTitle>

    

    </>
  )
}

export default ProfileBanner