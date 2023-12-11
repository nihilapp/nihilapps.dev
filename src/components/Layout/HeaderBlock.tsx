import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';

interface Props {
  styles?: ClassNameValue;
}

export function HeaderBlock({ styles, }: Props) {
  const css = {
    default: twJoin([
      ``,
      styles,
    ]),
  };

  return (
    <>
      <header className={css.default}>content</header>
    </>
  );
}
