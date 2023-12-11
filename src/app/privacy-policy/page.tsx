import React from 'react';
import { setMeta } from '@/src/hooks/setMeta';

export const metadata = setMeta({
  title: '개인정보처리방침',
  url: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <div>content</div>
    </>
  );
}
