import { memo, useEffect } from 'react'
import Image from 'next/image'

import { IAlbum } from '@/models/.'
import { PlayButton } from '@/components/reusable'
import { useAppDispatch } from '@/hooks/redux'
import { setCurrentColor } from '@/store/actions'

const GreetItem: React.FC<{album: IAlbum}> = ({album}) => {
  
  const dispatch = useAppDispatch()

  const setBindedColor = () => {
    dispatch(setCurrentColor(album.bindColor))
  }

  const setDefaultColor = () => {
    dispatch(setCurrentColor('#121212'))
  }

  useEffect(() => {
    console.log('item rerendered')
  }, [])

  return (
    <div 
      onMouseEnter={setBindedColor.bind(null)}
      onMouseLeave={setDefaultColor.bind(null)}
      className='greet_item group relative'>

      { album.banner && <div className='album_image_small '>
        <Image
          src={album.banner}
          layout={'fill'}
          alt={album.title} 
          objectFit={'cover'}
        />
      </div>}

      <div className='flex p-2 group items-center w-full justify-between '>

        <h3 className='text-title font-semibold truncate'>{album.title}</h3>

        <div className=' transition-all duration-300 opacity-0  group-hover:opacity-100'>
          <PlayButton 
            category='greet'
            onClick={() => {}}
            playedElement={album.tracks[0]}
          />
        </div>
       

      </div>
    </div>
  )
}

export default memo(GreetItem)