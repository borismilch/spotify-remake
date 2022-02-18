import React from 'react'

import { ProtectedRoute } from '@/components/auth'
import Layout from '@/components/Layout'

const Search = () => {
  return (
    <ProtectedRoute>

      <Layout title='search | nedofy'>
        <p className='text-title text-2xl'>search</p>
      </Layout>
      
    </ProtectedRoute>
  )
}

export default Search