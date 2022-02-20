import React from 'react'

import { createContext } from 'react'

export interface TableContextProps {
  group: string
  isSearch?: boolean
  isPlaylist?: boolean
  playlistId?: string
  needLoading?: boolean
  needDelete?: boolean
  onDelete?: (playlistId: string, trackId: string, userId: string) => Promise<void>
  showAlbum?: boolean
  needLike?: boolean
}

export const TableContext = createContext<TableContextProps>(null)