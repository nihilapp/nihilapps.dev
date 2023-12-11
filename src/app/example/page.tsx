import React from 'react';
import { setMeta } from '@/src/hooks/setMeta';
import { ExamplePage } from '@/src/components/Content/example';

interface Props {
  //
}

export const metadata = setMeta({
  title: '예시',
  url: '/example',
});

export default function page() {
  return (
    <>
      <ExamplePage />
    </>
  );
}
