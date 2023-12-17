import React from 'react';
import { setMeta } from '@/src/hooks/setMeta';
import { PolicyContent } from '@/src/components/Content';

export const metadata = setMeta({
  title: '개인정보처리방침',
  url: '/privacy-policy',
});

export default function PolicyPage() {
  return (
    <>
      <PolicyContent />
    </>
  );
}
