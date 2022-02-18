import React from 'react'
import { ITrack } from '@/models/.'

import AppIcon from '@/components/icons/.'
import { MdDelete } from 'react-icons/md'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { PlaylistService } from '@/service/.'
import { useAppSelector } from '@/hooks/redux'

import { toHHMMSS } from '@/utils/helpers'

import { useContext } from 'react'
import { TableContext , TableContextProps} from '@/context/.'

import { firestore } from '@/lib/firebase'

import { doc } from 'firebase/firestore'
import { useDocument } from 'react-firebase-hooks/firestore'

import { TrackService } from '@/service/.'

interface SongActionsProps {
  song: ITrack,
}

const SongActions: React.FC<SongActionsProps> = (props) => {
  const { song } = props

  const { user } = useAppSelector(state => state.user)

  const likesref = doc(firestore, 'users', user?.uid || 'ff', 'likes', song?.id || 'dd')
  const [like] = useDocument(likesref)

  const isLiked = !!like?.data()

  const {
     needDelete  = false, 
     isPlaylist = false, 
     playlistId = '',
     showAlbum = false,
     onDelete
  } = useContext<TableContextProps>(TableContext)

  const addTrackToPlaylist = async () => {
    await PlaylistService.addTrackToPlaylist(playlistId, user.uid, song)
  }

  const deletethisItem = async () => {
    await onDelete(playlistId, song.id, user.uid)
  }

  const rateTrack = async () => {
    await TrackService.likeOrDislikeTrack(song, user.uid)
  }

  return (

    <div className='flex items-center gap-20'>

      { showAlbum && <div>
        <p className='text-title text-sm font-medium'>{song.albumName}</p>
      </div>}

      <div className='text-desc flex gap-3 items-center text-sm'>

       { !isLiked ?  
           (<AppIcon
            onclick={rateTrack}
            Icon={<AiOutlineHeart className={'app_icon'} />} 
            classes={'opacity-0 group-hover:opacity-100'}
          />) : (
            <AppIcon
              onclick={rateTrack}
              Icon={<AiFillHeart className={'app_icon text-green-500'} />} 
            />
          )
       }
        

        <p className='font-semibold '>
          {toHHMMSS(song.duration.toString())}
        </p>

        {!needDelete &&  <div className='w-[20px]'></div> }

        { needDelete && <AppIcon 
          Icon={<MdDelete
             onClick={deletethisItem}
             className='app_icon text-2xl' />}
          classes={'opacity-0 group-hover:opacity-100'}
        />}

        {
          isPlaylist && (
            <button 
              onClick={addTrackToPlaylist.bind(null)}
              className='song_add_button m-0 w-[130px]'>
              Add to playlist
            </button>
          )
        }

      </div>
     </div>

  )
}

export default SongActions