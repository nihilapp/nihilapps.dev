import React from 'react';
import { Metadata } from 'next';
import { setMeta } from '../hooks/setMeta';
import { configData } from '../data';
import { HomePage } from '@/src/components/Content';

export const metadata: Metadata = setMeta({
  title: `홈 - ${configData.title}`,
  url: '/',
});

export default function IndexPage() {
  return (
    <>
      <HomePage />
    </>
  );
}
