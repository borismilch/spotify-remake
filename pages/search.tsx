import React from 'react'

import dynamic from 'next/dynamic'

import { ProtectedRoute } from '@/components/auth'
import Layout from '@/components/Layout'

const Search = () => {
  const SearchContent = dynamic(() => import('@/components/pages/search/SeachContent'))
  const SearchField = dynamic(() => import('@/components/pages/search/SearchField'))

  return (
    <ProtectedRoute>

      <Layout HeaderContent={<SearchField />} title='search | nedofy'>
        <SearchContent />
      </Layout>
      
    </ProtectedRoute>
  )
}

export default Search