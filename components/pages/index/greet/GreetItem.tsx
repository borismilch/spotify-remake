import { memo } from 'react'

import { IAlbum } from '@/models/.'
import { PlayButton } from '@/components/reusable'
import { useAppDispatch } from '@/hooks/redux'
import { setCurrentColor } from '@/store/actions'

import { firestore } from '@/lib/firebase'
import { collection } from 'firebase/firestore'
import { useCollectionOnce } from 'react-firebase-hooks/firestore'
import { GreetLoader } from '@/components/loaders'

import { useImageLoader } from '@/hooks/.'

const GreetItem: React.FC<{album: IAlbum}> = ({album}) => {
  
  const dispatch = useAppDispatch()

  const [loaded, onLoad] = useImageLoader()

  const collectionRef = collection(firestore, 'albums', album.id.trim(), 'tracks')

  const [tracks] = useCollectionOnce(collectionRef)
  const readyTracks: any[] = tracks?.docs.map(item => 
    ({...item.data(), id: item.id}))

  const setBindedColor = () => {
    dispatch(setCurrentColor(album.bindColor))
  }

  const setDefaultColor = () => {
    dispatch(setCurrentColor('#121212'))
  }

  return (
    <div 
      onMouseEnter={setBindedColor.bind(null)}
      onMouseLeave={setDefaultColor.bind(null)}
      className='greet_item group relative'>

      <div className={
        'flex items-center justify-between w-full ' +
       (!loaded && 'hidden')}>

        { album.banner && <div className='album_image_small '>
          <img
            src={album.banner}
            alt={album.title} 
            onLoad={onLoad}
            className="object-cover w-full h-full"
          />
        </div>}

        <div className='flex p-2 group items-center w-full justify-between '>

          <h3 className='text-title font-semibold truncate'>
            {album.title}
          </h3>

          <div className='
           transition-all duration-300 opacity-0  group-hover:opacity-100
          '>
            <PlayButton 
              category='greet'
              playedElement={readyTracks ? readyTracks[0] : {}}
              tracks={tracks as any}
            />
          </div>
        </div>

      </div>  

      {!loaded && <GreetLoader />}
    </div>
  )
}

export default memo(GreetItem)