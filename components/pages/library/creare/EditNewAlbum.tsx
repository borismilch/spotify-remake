import React from 'react'

import { useAppSelector } from '@/hooks/redux'
import { EditTrigger } from '@/components/reusable/index'

import { PlaylistPayload } from '@/service/playlist.service'
import { userSelector } from '@/store/selectors'

import { IAlbum } from '@/models/.'

interface EditNewAlbumProps {
  onEdit: (data: any) => void,
  album: IAlbum
}

const EditNewAlbum: React.FC<EditNewAlbumProps> = ({onEdit, album}) => {

  const user = useAppSelector(userSelector)

  const submitChage = async (value: string, url: string, bindColor: string) => {
    const data: PlaylistPayload = { title: value, banner: url, bindColor }
    onEdit(data)
  }

  return (
    <>
      <EditTrigger 
        onComplete={submitChage}
        startValue={{ 
          image: album?.banner, 
          text: album?.title, 
          description: album?.description
        }}
        hasDescription={true}
      />
    </>
  )
}

export default React.memo(EditNewAlbum)