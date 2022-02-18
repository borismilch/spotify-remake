import { firestore } from "@/lib/firebase";
import { doc, updateDoc } from 'firebase/firestore'

import { ModalPayload } from '@/models/.'

export interface UserPayload {
  displayName: string,
  photoURL: string,
  bindColor: string
}

export default class UserService {
  static async updateUser (userId: string, data: UserPayload) {

    const userRef = doc(firestore, 'users', userId)

    await updateDoc(userRef, data as any)
  }

}