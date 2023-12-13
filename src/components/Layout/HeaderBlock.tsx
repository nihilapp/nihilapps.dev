import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Image from 'next/image';
import Link from 'next/link';
import { NavBlock } from '@/src/components/Layout/NavBlock';
import logo from '@/src/images/nihilapps-logo.png';

interface Props {
  styles?: ClassNameValue;
}

export function HeaderBlock({ styles, }: Props) {
  const css = {
    default: twJoin([
      `flex flex-row justify-between items-center border-b border-black-200 shadow-sm shadow-black-200 bg-white`,
      styles,
    ]),
    logoImage: twJoin([
      `h-[50px] w-auto inline-block`,
    ]),
  };

  return (
    <>
      <header className={css.default}>
        <h1>
          <Link href='/' as='/' className='p-2 block'>
            <Image
              src={logo.src}
              alt='로고'
              width={logo.width}
              height={logo.height}
              priority
              className={css.logoImage}
            />
          </Link>
        </h1>
        <NavBlock />
      </header>
    </>
  );
}
