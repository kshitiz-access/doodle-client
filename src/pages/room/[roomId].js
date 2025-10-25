import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Menu from '@/components/Menu'
import Toolbox from '@/components/Toolbox'
import Board from '@/components/Board'

export default function Room() {
  const router = useRouter();
  const { roomId } = router.query;

  useEffect(() => {
    if (roomId) {
      // Set room ID for socket connection
      window.currentRoomId = roomId;
    }
  }, [roomId]);

  if (!roomId) return <div>Loading...</div>;

  return (
    <>
      <Menu />
      <Toolbox />
      <Board roomId={roomId} />
    </>
  );
}
