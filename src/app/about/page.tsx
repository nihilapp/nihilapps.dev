import React from 'react';
import { setMeta } from '@/src/hooks/setMeta';

export const metadata = setMeta({
  title: '소개',
  url: '/about',
});

export default function AboutPage() {
  return (
    <>
      <div>content</div>
    </>
  );
}
