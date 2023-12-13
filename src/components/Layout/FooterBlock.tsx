'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import nihilBlogLogo from '@/src/images/nihil-logo-w.png';

interface Props {
  styles?: ClassNameValue;
}

export function FooterBlock({ styles, }: Props) {
  const css = {
    default: twJoin([
      `bg-black-700 p-3 text-[1rem] flex items-center justify-center gap-3`,
      styles,
    ]),
    link: twJoin([
      `p-3 flex items-center text-black-200 gap-1 hover:bg-black-base rounded-2 hover:text-white`,
    ]),
  };

  return (
    <>
      <footer className={css.default}>
        <Link href='/privacy-policy' className={css.link}>
          <Icon icon='mdi:paper' className='mt-[2px]' /> 개인정보처리방침
        </Link>
        <Link href='/terms-of-use' className={css.link}>
          <Icon icon='mdi:paper' className='mt-[2px]' /> 이용약관
        </Link>
        <a href='https://nihilncunia.dev' target='_blank' rel='noopener noreferrer' className='p-3 hover:bg-black-base rounded-2 flex items-center justify-center'>
          <span className='a11y-hidden'>니힐 블로그</span>
          <Image
            src={nihilBlogLogo.src}
            width={nihilBlogLogo.width}
            height={nihilBlogLogo.height}
            alt='니힐 블로그 로고'
            priority
            className='h-[20px] w-auto inline-block'
          />
        </a>
      </footer>
    </>
  );
}
