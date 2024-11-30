import { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { Room } from '../types/booking';

export function useRooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'rooms'));
    
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const roomData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Room[];
        
        setRooms(roomData);
        setLoading(false);
      },
      (error) => {
        setError(error as Error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { rooms, loading, error };
}