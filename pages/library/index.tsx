import React from 'react'
import dynamic from 'next/dynamic'

import { ProtectedRoute } from '@/components/auth'
import Layout from '@/components/Layout'

const Library = () => {
  const TabsHeader = dynamic(() => import('@/components/pages/library/HeaderTabs'))
  const LibAlbumsContent = dynamic(() => import('@/components/pages/library/albums/AlbumsLibContent'))
  return (
    <ProtectedRoute>

      <Layout HeaderContent={<TabsHeader />} title='layout'>
        <LibAlbumsContent />
      </Layout>
      
    </ProtectedRoute>
  )
}

export default Library