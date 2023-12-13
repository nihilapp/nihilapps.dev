import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  styles?: ClassNameValue;
}

export function MainBlock({ children, styles, }: Props) {
  const css = {
    default: twJoin([
      `flex-1`,
      styles,
    ]),
  };

  return (
    <>
      <main className={css.default}>
        {children}
      </main>
    </>
  );
}
