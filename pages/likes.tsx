import React from 'react'

import { ProtectedRoute } from '@/components/auth'
import Layout from '@/components/Layout'

import { LikesContent } from '@/components/pages/likes' 

const LikesPage = () => {
  return (
    <ProtectedRoute>

      <Layout title='likes | Nedofy'>

        <LikesContent />

      </Layout>
      
    </ProtectedRoute>
  )
}

export default LikesPage 