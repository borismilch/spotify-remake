import React  from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const defaultImage = 'https://firebasestorage.googleapis.com/v0/b/spoiityf.appspot.com/o/dede.png?alt=media&token=f83fb3ff-0b3e-49ee-80ab-f7c702ac1116'

const LikesContent: React.FC = () => {

  const PageTitle = dynamic(() => import(
    '@/components/reusable/pageTitlte/PageTitle'
  ))
  const PageTitleContent = dynamic(() => import(
    '@/components/reusable/pageTitlte/PageTitleContent'
  ))

  const LikeSongsList = dynamic(() => import('./LikeSongList'))

  return (
    <PageTitle
      bgColor={'#431ab7'}

      titleContent={
        <PageTitleContent
          picture={
            <Image 
              objectFit='cover'
              src={defaultImage}
              layout={'fill'}
              alt={'shit'}
            />
          } 
          subtitle={'Liked songs'}
          title={'Loved songs'}
          type={'Album'}
          rounded={false}
        />
      } 
    >

      <LikeSongsList  />

    </PageTitle>
  )
}


export default React.memo(LikesContent)