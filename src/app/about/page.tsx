import React from 'react';
import { setMeta } from '@/src/hooks/setMeta';
import { AboutPageContent } from '@/src/components/Content';

export const metadata = setMeta({
  title: '소개',
  url: '/about',
});

export default function AboutPage() {
  return (
    <>
      <AboutPageContent />
    </>
  );
}
