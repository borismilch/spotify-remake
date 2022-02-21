import React from 'react'
import { ProtectedRoute } from '@/components/auth'
import Layout from '@/components/Layout'



const showall = () => {
  return (
    <ProtectedRoute>
      <Layout title='some title'>
        <div className='grid_category'>

        </div>
      </Layout>
    </ProtectedRoute>
  )
}

export default showall