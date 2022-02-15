import { firestore } from "@/lib/firebase";
import { doc, updateDoc } from 'firebase/firestore'

export default class UserService {
  static async updateUser <T extends {photoURL: string, displayName: string}>(userId: string, data: T) {

    const userRef = doc(firestore, 'users', userId)

    await updateDoc(userRef, data)

    return data
  }
}