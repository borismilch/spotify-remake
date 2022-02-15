import Layout from '../components/Layout';

import { NextPage } from 'next';
import dynamic from 'next/dynamic'

import { ProtectedRoute } from '@/components/auth';

import { ColorOverlay } from '@/components/reusable';
import { useAppSelector } from '@/hooks/redux';

const Home: NextPage = () => {

  const { user } = useAppSelector(state => state.user)

  const Greet = dynamic(() => import('@/components/pages/index/greet/Greet'))
  const AlbumsContainer = dynamic(() => import('@/components/pages/index/albums/AlbumsContainer'))

  return (
    <ProtectedRoute>
      <Layout title={user?.displayName + ' | Shopify'}>
          <ColorOverlay />

        <div className='flex flex-col z-30 p-6 pb-2 pt-4'>
           <Greet />

         <div className='flex-grow flex flex-col'>
            <AlbumsContainer />
         </div>
 
        </div>  
          
      </Layout>
    </ProtectedRoute>
  );
}

export default Home
