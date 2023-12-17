'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { PageTitle, TextLine } from '@/src/components/Base';

interface Props {
  styles?: ClassNameValue;
}

export function AboutPageContent({ styles, }: Props) {
  const css = {
    default: twJoin([
      `py-10`,
      styles,
    ]),
    box: twJoin([
      `p-3 bg-white shadow-md shadow-black-200 font-500 space-y-2`,
    ]),
    text: twJoin([
      `text-justify text-[1.1rem]`,
    ]),
  };

  return (
    <>
      <div className={css.default}>
        <PageTitle>니힐앱스</PageTitle>
        <div className={twJoin(css.box, 'mb-5')}>
          <TextLine>
            니힐앱스는 내 활동명인 니힐과 프로그램들 이라는 의미로 앱스를 붙여 작명했다. 니힐앱스는 크고 작은 웹 프로그램들이 소개되는 공간이다.
            나는 일상에서 혹은 취미생활을 하면서 도움이 될 만한 요소들이 있으면 토이 프로젝트로 웹 프로그램을 만들곤 한다. 사실 그렇게 대단한 프로그램들도 아니고 복잡한 로직이 있는 프로그램들도 아니다. 클론 코딩 등의 프로그래밍 연습을 한 결과물 등은 여기에 올라오지 않는다. 오로지 시행착오를 거친 작품들만 올라올 예정이다.
          </TextLine>
          <TextLine>
            이 공간에 내 프로그램들을 게시해두는 이유는 언젠가 실용성이 있는 프로그램도 만들어지지 않을까? 하는 작은 기대감 때문이라고
            해두겠다. 지금은 실용적이기보다 특정 취미를 가진 사람들에게만 의미가 있는 프로그램들이고 사실 앞으로도 그럴 것 같지만 삶이라는 것은 혹시 모르는 것이 아니겠는가.
          </TextLine>
        </div>
        <PageTitle>회원가입에 대해</PageTitle>
        <div className={css.box}>
          <TextLine>
            니힐앱스에 올라온 프로그램들 중 회원가입을 필요로 하는 프로그램들은 전부 같은 데이터베이스를 사용합니다. 같은 회원정보 체계를 공유하기 때문에 니힐앱스에 해당하는 그 어떤 프로그램에서 회원가입을 해도 다른 니힐앱스 프로그램에서 로그인할 수 있습니다. 이를 참고바랍니다.
          </TextLine>
        </div>
      </div>
    </>
  );
}
