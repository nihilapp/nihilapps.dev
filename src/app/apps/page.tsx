import React from 'react';
import { setMeta } from '@/src/hooks/setMeta';

export const metadata = setMeta({
  title: '프로그램 목록',
  url: '/apps',
});

export default function AppsPage() {
  return (
    <>
      <div>content</div>
    </>
  );
}
