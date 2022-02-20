import React from 'react'
import dynamic from 'next/dynamic'

import { ProtectedRoute } from '@/components/auth'
import Layout from '@/components/Layout'

const Playlist = () => {
  const TabsHeader = dynamic(() => import('@/components/pages/library/HeaderTabs'))
  const LibPlaylistsContent = dynamic(() => import('@/components/pages/library/playlists/PlayLibContent'))
  return (
    <ProtectedRoute >

      <Layout HeaderContent={<TabsHeader />} title='layout'>
        <LibPlaylistsContent />
      </Layout>
      
    </ProtectedRoute>
  )
}

export default Playlist