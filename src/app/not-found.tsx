import React from 'react';
import { setMeta } from '@/src/hooks/setMeta';

export const metadata = setMeta({
  title: '페이지를 찾을 수 없습니다',
});

export default function NotFoundPage() {
  return (
    <>
      <div>content</div>
    </>
  );
}
