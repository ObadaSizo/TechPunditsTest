'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function page() {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);

  return null; // No UI to render, it redirects directly
}

export default page;