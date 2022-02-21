import React from 'react'

import { firestore } from '@/lib/firebase'
import { collection }  from 'firebase/firestore'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'

const useFirestoreData = (...args: [string, string, string]) => {
  const fireref = collection(firestore, ...args )

  const [data] = useCollectionDataOnce(fireref)

  return [data]
}

export default useFirestoreData