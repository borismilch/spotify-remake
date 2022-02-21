import React, { SyntheticEvent } from 'react'
import { IAlbum } from '@/models/.'

import { PlayButton } from '@/components/reusable/.'
import { useImageLoader } from '@/hooks/.'

import { useNavigation } from '@/hooks/.'
import { FaPen } from 'react-icons/fa'

import { firestore } from '@/lib/firebase'
import { collection, CollectionReference, DocumentData } from 'firebase/firestore'
import { useCollectionOnce } from 'react-firebase-hooks/firestore' 

import { CardLoader } from '@/components/loaders'

interface CardProps {
  album: IAlbum, 
  category: string,
  secondref?: CollectionReference<DocumentData>
  editable?: boolean,
  isArtist?: boolean
}

const Card: React.FC<CardProps> = (props) => {

  const {album, category, secondref, editable = false, isArtist = false} = props

  const fireref = collection(firestore, 'albums', album.id, 'tracks')

  const [tracks] = useCollectionOnce(secondref ? secondref : fireref)
  const readyTracks: any[] = tracks?.docs.map(item => ({...item.data(), id: item.id}))

  const [loaded, onLoad] = useImageLoader()
  const { pushRouter } = useNavigation()

  const pushToEdit = (e: SyntheticEvent) => {
    e.stopPropagation()
    pushRouter('/library/update/' + album.id)
  }

  return (
    <div
      onClick={pushRouter.bind(null, isArtist ? '/artist/' : '/album/' + album.id + "_" + category)}
      className='card_wrapper group relative min-h-[270px]'>

      {<div className={
        'flex flex-col ' + 
        (!loaded && 'opacity-0 absolute invisible')}
      >      
        <div className={'card_content ' + (isArtist && 'rounded-full')}>
          {album.banner &&  <img 
              onLoad={onLoad.bind(null)}
              src={album.banner}
              alt={album.title}
              className={'object-cover w-full h-full'} />
          } 
        </div>
        
        <div className='flex flex-col pt-4'>
          <h3 className='
            flex flex-col truncate font-bold  text-title
          '>{album.title}</h3>

          <span className='
            text-desc break-words line-clamp-2 font-medium text-sm
          '>{album.description}</span>

        </div>

        <div className='upper_transition'>
          { !editable ? (
             <PlayButton 
             tracks={readyTracks ? readyTracks : []}
             category={category}
             playedElement={readyTracks ? readyTracks[0] : {}}
           />
          ) : (
            <button 
              onClick={pushToEdit.bind(null)}
              className='play_button'>
              <FaPen />
            </button>
          )
           
          }
        </div>

       </div>
      }

      { !loaded && <CardLoader /> }

    </div>
  )
}

export default React.memo(Card)