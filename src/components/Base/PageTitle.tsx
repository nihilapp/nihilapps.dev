'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  styles?: ClassNameValue;
}

export function PageTitle({ children, styles, }: Props) {
  const css = {
    default: twJoin([
      `mb-5 text-justify text-h4 font-900 text-black-base pb-1 border-b-2 border-black-400`,
      styles,
    ]),
  };

  return (
    <>
      <h2 className={css.default}>{children}</h2>
    </>
  );
}
