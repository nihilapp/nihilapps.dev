import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  styles?: ClassNameValue;
}

export function MainBlock({ children, styles, }: Props) {
  const css = {
    default: twJoin([
      `flex-1 w-full px-5 mf-sm:w-full mf-md:w-full mf-lg:max-w-[1280px] mx-auto`,
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
