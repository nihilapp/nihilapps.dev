'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface Props {
  styles?: ClassNameValue;
}

export function NavBlock({ styles, }: Props) {
  const css = {
    default: twJoin([
      `flex flex-row gap-3`,
      styles,
    ]),
    link: twJoin([
      `flex items-center gap-1 p-3 text-black-500 hover:bg-black-100 hover:text-black-base rounded-2`,
    ]),
  };

  return (
    <>
      <nav className={css.default}>
        <Link href='/' className={css.link}>
          <Icon icon='ion:home-sharp' className='mt-[2px]' /> 홈
        </Link>
        <Link href='/about' className={css.link}>
          <Icon icon='mdi:about' className='mt-[2px]' /> 소개
        </Link>
        <Link href='/apps' className={css.link}>
          <Icon icon='tabler:apps-filled' className='mt-[2px]' /> 프로그램 목록
        </Link>
      </nav>
    </>
  );
}
