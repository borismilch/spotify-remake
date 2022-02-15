import Layout from '../components/Layout';

import { NextPage } from 'next';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ProtectedRoute } from '@/components/auth';
import { auth } from '@/lib/firebase'

import { ProfileContent } from '@/components/pages/profile';

const Profile: NextPage = () => {

  const [user] = useAuthState(auth)

  return (
    <ProtectedRoute>
      <Layout title={user?.displayName + ' | Shopify'}>
        
     
        <ProfileContent />
     
          
      </Layout>
    </ProtectedRoute>
  );
}

export default Profile

