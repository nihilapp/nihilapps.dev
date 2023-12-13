'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';

interface Props {
  styles?: ClassNameValue;
}

export function HomePage({ styles, }: Props) {
  const css = {
    default: twJoin([
      `py-10`,
      styles,
    ]),
  };

  return (
    <>
      <div className={css.default}>
        content
      </div>
    </>
  );
}
