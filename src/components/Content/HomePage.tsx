'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import Image from 'next/image';
import { itemData } from '@/src/data/item.data';
import { Nihil } from '@/src/utils/nihil';
import { PageTitle, TextLine } from '@/src/components/Base';

interface Props {
  styles?: ClassNameValue;
}

export function HomePage({ styles, }: Props) {
  const css = {
    default: twJoin([
      `py-10 h-full flex flex-col`,
      styles,
    ]),
    items: twJoin([
      `flex-1 flex flex-row flex-wrap gap-3 text-black-base h-full`,
    ]),
    item: twJoin([
      `w-full bg-white shadow-md shadow-black-200 p-3 flex items-start gap-5 mf-md:h-[calc(50%-(12px/2))] mf-md:w-[calc(50%-(12px/2))]`,
    ]),
    image: twJoin([
      `w-full`,
    ]),
    imageContainer: twJoin([
      `flex-[2] p-2 border border-black-200`,
    ]),
    infoContainer: twJoin([
      `flex-[3]`,
    ]),
    infoTitle: twJoin([
      `text-h6 font-600 mb-3`,
    ]),
    infoText: twJoin([
      `text-justify`,
    ]),
  };

  return (
    <>
      <div className={css.default}>
        <PageTitle>프로그램 목록</PageTitle>
        <div className={css.items}>
          {itemData.map((item) => (
            <div key={Nihil.uuid(0)} className={css.item}>
              <div className={css.imageContainer}>
                <Image
                  src={item.image.src}
                  alt={item.name}
                  width={item.image.width}
                  height={item.image.height}
                  priority
                  className={css.image}
                />
              </div>
              <div className={css.infoContainer}>
                <h3 className={css.infoTitle}>
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='text-blue-500'
                  >
                    {item.name}(v{item.version})
                  </a>
                </h3>
                {item.desc.map((desc) => (
                  <TextLine key={Nihil.uuid(0)}>{desc}</TextLine>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
