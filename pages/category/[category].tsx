import React from 'react'
import dynamic from 'next/dynamic'

import Layout from '@/components/Layout'
import { ProtectedRoute } from '@/components/auth'

import { useNavigation } from '@/hooks/.'

const Category = () => {

  const { query: { category } } = useNavigation()

  const CategoryContent = dynamic(() => import('@/components/pages/category/CategoryContent'))

  return (
    <ProtectedRoute>

      <Layout title={category + ' | Nedofy'}>

        <CategoryContent category={category  + ''} />

      </Layout>
      
    </ProtectedRoute>
  )
}

export default Category