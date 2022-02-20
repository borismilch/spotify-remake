import React from 'react'
import dynamic from 'next/dynamic'

import { ProtectedRoute } from '@/components/auth'
import Layout from '@/components/Layout'

const Create = () => {

  const TabsHeader = dynamic(() => import('@/components/pages/library/HeaderTabs'))
  const UpdateContent = dynamic(() => import('@/components/pages/library/update/UpdateContent'))
  const CreateNewAlbumButton = dynamic(() => import('@/components/pages/library/creare/CreateNewAlbumButton'))
  
  return (
    <ProtectedRoute>

      <Layout HeaderContent={
        <div className='flex flex-grow gap-3 justify-between w-full items-center'>
          <TabsHeader />

          <CreateNewAlbumButton />
        </div>
       
      } title='layout'>
      
        <UpdateContent />
      </Layout>
      
    </ProtectedRoute>
  )
}

export default (Create)