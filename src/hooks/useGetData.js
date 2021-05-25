import { useEffect, useState } from 'react'
import firebase from 'firebase'

export const useGetData = () => {
  const [documents, setDocuments] = useState([])
  const db = firebase.firestore()

  useEffect(() => {
    db.collection('personal-notes').onSnapshot(querySnapshot => {
      const arr = []
      querySnapshot.docs.forEach(doc => {
        arr.push({ id: doc.id, value: doc.data() })
      })
      setDocuments(arr)
    })
  }, [db])
  return [documents]
}
