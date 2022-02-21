import React from 'react'

import { ITrack } from '@/models/.'
import { PlayButton } from '@/components/reusable/'
import { useMounted } from '@/hooks/.'

import { ItemLoader } from '@/components/loaders'
import Image from 'next/image'
import { useAppSelector } from '@/hooks/redux'
import { useImageLoader } from '@/hooks/.'

import { SongActions, SongTitle } from './song'

import { useContext } from 'react'
import { TableContext, TableContextProps } from '@/context/.'

import { selectCurrentTrack } from '@/store/selectors'

interface SongTableItemProps {
  song: ITrack
  idx: number
  tracks: ITrack[]
}

const SongTableItem: React.FC<SongTableItemProps> = (props) => {

  const { 
    song, 
    idx,   
    tracks
  } = props

  const {
    group, 
    isSearch, 
    needLoading, 
  } = useContext<TableContextProps>(TableContext)

  const currentTrack = useAppSelector(selectCurrentTrack)

  const isSameTrack = currentTrack?.albumId === song?.albumId 
  const isSameSong = isSameTrack && song.id === currentTrack.id
  const isIdentical = isSameSong && group === currentTrack.category

  const [loaded, onLoad] = useImageLoader()
  const {mounted} = useMounted()

  const totalyLoaded = needLoading ? isSearch ? loaded : mounted : true

  return (
    <div className={'song_item group px-3 relative'}>

      <div className={
        'flex items-center w-full justify-between ' + 
        (!totalyLoaded && 'opacity-0 hidden')}
      >
      <div className='flex items-center gap-3'>

        <p className={
          `table_number_enumaration w-[40px]` + 
          (isSameSong && 'text-green-500')
        }>
        {idx + 1} 
        </p>

        <div className='hidden group-hover:flex'>

          <PlayButton 
            thin={true} 
            playedElement={song} 
            index={idx}
            tracks={tracks}
            category={group}
            isSong={true}
          />

        </div>

          { isSearch && <div className='avatar_sd rounded-sm top-0 left-0'>
            <Image 
              src={song.albumImg}
              onLoad={onLoad}
              layout={"fill"}
              alt={song.albumId}
            />
          </div>}

          <SongTitle 
            isSameSong={isIdentical} 
          
            song={song} 
          />
        </div>

        <SongActions
          song={song} 
        />

      </div>

      {!totalyLoaded && <ItemLoader />}

    </div>
  )
}

export default React.memo(SongTableItem)