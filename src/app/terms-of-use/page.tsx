import React from 'react';
import { setMeta } from '@/src/hooks/setMeta';

export const metadata = setMeta({
  title: '이용 약관',
  url: '/terms-of-use',
});

export default function TermsOfUsePage() {
  return (
    <>
      <div>content</div>
    </>
  );
}
