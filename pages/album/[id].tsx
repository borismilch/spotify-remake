import React from 'react'

import Layout from '@/components/Layout'
import { useNavigation } from '@/hooks/.'

import { ProtectedRoute } from '@/components/auth'

import { firestore } from '@/lib/firebase'
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import { doc, DocumentData } from 'firebase/firestore'

import dynamic from 'next/dynamic'

const AlbumPage = () => {

  const { query: { id } } = useNavigation()

  const albumref = doc(firestore, 'albums', id ? id.toString() : 'dd')
  const [currentAlbum] = useDocumentDataOnce<DocumentData>(albumref)

  const PageContent = dynamic (() => import('@/components/pages/albumPage/AlbumContent'))

  return (
    <ProtectedRoute>
      <Layout title={currentAlbum?.title + ' | nedofy'} >

      { currentAlbum && <PageContent currentAlbum={currentAlbum as any} /> }
      
      </Layout>

    </ProtectedRoute>
  )
}

export default AlbumPage