'use client';

import React, { useCallback } from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { commonStore, setWord } from '@/src/store/common.store';

interface Props {
  styles?: ClassNameValue;
}

export function ExamplePage({ styles, }: Props) {
  const { word, } = commonStore();

  const onClickChangeWord = useCallback(
    () => {
      setWord(word === 'JavaScript' ? 'TypeScript' : 'JavaScript');
    },
    [ word, ]
  );

  const css = {
    default: twJoin([
      ``,
      styles,
    ]),
    word: twJoin([
      `p-3 text-center bg-black-base text-white text-[3rem] font-900 mb-5`,
    ]),
    button: twJoin([
      `p-3 text-white bg-blue-500 hover:bg-blue-700 text-center w-full text-[1.5rem] font-500`,
    ]),

  };

  return (
    <>
      <div className={css.default}>
        <div className={css.word}>{word}</div>
        <button
          className={css.button}
          onClick={onClickChangeWord}
        >
          클릭해서 변경
        </button>
      </div>
    </>
  );
}
