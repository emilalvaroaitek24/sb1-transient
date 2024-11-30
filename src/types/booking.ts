export interface Room {
  id: string;
  type: 'aircon' | 'fan';
  price: number;
  available: boolean;
}

export interface Booking {
  id: string;
  roomId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkIn: Date;
  checkOut: Date;
  totalAmount: number;
  paymentStatus: 'pending' | 'partial' | 'paid';
  paymentMethod?: string;
  createdAt: Date;
  updatedAt: Date;
}