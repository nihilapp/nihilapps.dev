import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Link from 'next/link';

interface Props {
  styles?: ClassNameValue;
}

export function FooterBlock({ styles, }: Props) {
  const css = {
    default: twJoin([
      ``,
      styles,
    ]),
  };

  return (
    <>
      <footer className={css.default}>
        <Link href='/privacy-policy'>개인정보처리방침</Link>
        <Link href='/terms-of-use'>이용약관</Link>
        <a href='https://nihilncunia.dev' target='_blank' rel='noopener noreferrer'>니힐 블로그 방문</a>
      </footer>
    </>
  );
}
