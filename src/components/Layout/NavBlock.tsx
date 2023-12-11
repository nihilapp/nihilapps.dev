import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Link from 'next/link';

interface Props {
  styles?: ClassNameValue;
}

export function NavBlock({ styles, }: Props) {
  const css = {
    default: twJoin([
      ``,
      styles,
    ]),
  };

  return (
    <>
      <nav className={css.default}>
        <Link href='/'>홈</Link>
        <Link href='/about'>소개</Link>
        <Link href='/apps'>프로그램 목록</Link>
      </nav>
    </>
  );
}
