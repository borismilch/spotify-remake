import Layout from '../components/Layout';

import { NextPage } from 'next';
import { ProtectedRoute } from '@/components/auth';

import { useAppDispatch } from '@/hooks/redux';
import { useEffect } from 'react';

import dynamic from 'next/dynamic';

import { setCurrentColor } from '@/store/actions';

const Queue: NextPage = () => {

  const dispatch = useAppDispatch()
  const QueueContent = dynamic(() => import('@/components/pages/queue/QueueContent'))

  useEffect(() => {
    dispatch(setCurrentColor('#212121'))
  }, [])
  
  return (
    <ProtectedRoute>
      <Layout title='queue | nedofy'>

        <QueueContent />

      </Layout>
      
    </ProtectedRoute>
  )
}

export default Queue