import { Room } from '../types/booking';
import { Button } from './ui/Button';

interface RoomCardProps {
  room: Room;
  onBook: (room: Room) => void;
}

export function RoomCard({ room, onBook }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2">
        {room.type === 'aircon' ? 'Air Conditioned Room' : 'Fan Room'}
      </h3>
      <p className="text-gray-600 mb-4">
        RM {room.price.toFixed(2)} / night
      </p>
      <div className="flex justify-between items-center">
        <span className={cn(
          'px-2 py-1 rounded text-sm',
          room.available 
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        )}>
          {room.available ? 'Available' : 'Booked'}
        </span>
        <Button
          onClick={() => onBook(room)}
          disabled={!room.available}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}