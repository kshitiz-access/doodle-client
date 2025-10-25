
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Generate unique room ID and redirect
    const roomId = Math.random().toString(36).substring(2, 15);
    router.replace(`/room/${roomId}`);
  }, [router]);

  return <div>Creating your private room...</div>;
}
