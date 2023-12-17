'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  styles?: ClassNameValue;
}

export function TextLine({ children, styles, }: Props) {
  const css = {
    default: twJoin([
      `text-justify font-500 text-[1.1rem] text-black-base`,
      styles,
    ]),
  };

  return (
    <>
      <p className={css.default}>{children}</p>
    </>
  );
}
