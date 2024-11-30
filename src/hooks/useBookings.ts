import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { Booking } from '../types/booking';

export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const q = query(
      collection(db, 'bookings'),
      orderBy('checkIn', 'desc')
    );
    
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const bookingData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          checkIn: doc.data().checkIn.toDate(),
          checkOut: doc.data().checkOut.toDate(),
          createdAt: doc.data().createdAt.toDate(),
          updatedAt: doc.data().updatedAt.toDate()
        })) as Booking[];
        
        setBookings(bookingData);
        setLoading(false);
      },
      (error) => {
        setError(error as Error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { bookings, loading, error };
}