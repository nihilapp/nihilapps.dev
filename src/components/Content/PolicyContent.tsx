'use client';

import React from 'react';
import { ClassNameValue, twJoin } from 'tailwind-merge';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { PageTitle, TextLine } from '@/src/components/Base';

interface Props {
  styles?: ClassNameValue;
}

export function PolicyContent({ styles, }: Props) {
  const queryString = useSearchParams();
  const mode = queryString.get('mode');

  const css = {
    default: twJoin([
      `py-10`,
      styles,
    ]),
    tab: twJoin([
      `flex-1 text-center p-3 text-[1.2rem] font-900 bg-black-300 text-black-400 hover:text-white hover:bg-black-700`,
    ]),
    box: twJoin([
      `p-3 bg-white shadow-md shadow-black-200 font-500 space-y-2`,
    ]),
  };

  return (
    <>
      <div className={css.default}>
        <div className='flex items-center mb-5'>
          <Link href='/policy?mode=privacy' className={twJoin([ css.tab, mode === 'privacy' ? `text-white bg-black-700` : '', ])}>개인정보처리방침</Link>
          <Link href='/policy?mode=terms' className={twJoin([ css.tab, mode === 'terms' ? `text-white bg-black-700` : '', ])}>이용약관</Link>
        </div>

        {mode === 'privacy' && (
          <div className='space-y-3'>
            <PageTitle styles='!mb-3'>개요</PageTitle>
            <div className={css.box}>
              <TextLine>본 문서는 니힐앱스에서 개인정보를 어떻게 수집하고 처리하는지에 대한 내용을 포함합니다. 개인정보처리방침은 이용자가 안심하고 서비스를 이용할 수 있도록 준수해야 할 지침을 의미합니다. 니힐앱스에서는 이용자의 동의에 따라서 개인정보를 수집, 이용, 제공하고 있음을 알려드립니다.</TextLine>
            </div>

            <PageTitle>개인정보의 수집</PageTitle>
            <div className={css.box}>
              <TextLine>니힐앱스는 프로그램의 이용을 위해 최소한의 개인정보를 수집하고 있습니다. 회원가입과 로그인 과정에서 이메일, 비밀번호, 닉네임이 수집되며 이를 바탕으로 회원유무를 판단합니다.</TextLine>
            </div>

            <PageTitle>개인정보의 이용</PageTitle>
            <div className={css.box}>
              <TextLine>니힐앱스는 오로지 회원가입과 로그인을 위해서만 개인정보를 수집하고 있으며 회원유무를 판단할 때 이 정보를 사용합니다. 개인정보를 제 3자에게 제공하지 않으며 오로지 보관 및 이용만 합니다.</TextLine>
            </div>

            <PageTitle>개인정보의 파기</PageTitle>
            <div className={css.box}>
              <TextLine>모든 개인정보는 회원이 탈퇴를 하는 순간 바로 파기합니다.</TextLine>
            </div>
          </div>
        )}
        {mode === 'terms' && (
          <div className='space-y-3'>
            <PageTitle styles='!mb-3'>목적</PageTitle>
            <div className={css.box}>
              <TextLine>본 문서는 니힐앱스를 이용하는데에 있어서 필요하거나 회원 여러분이 알아야 할 정보를 포함하고 있습니다. 니힐앱스는 개인이 운영하는 사이트이며 과금요소는 없지만 비회원과 회원의 차이 등에 대해서 기술합니다.</TextLine>
            </div>

            <PageTitle>회원과 비회원</PageTitle>
            <div className={css.box}>
              <TextLine>니힐앱스의 대부분의 프로그램들은 비회원도 이용이 가능합니다. 하지만 회원에 비해 그 기능이 제한되어 있는 경우가 많습니다. 이메일로 회원가입을 하거나 구글 로그인등으로 회원가입을 하시면 온전하게 프로그램의 기능을 이용할 수 있습니다.</TextLine>
              <TextLine>모든 니힐앱스 프로그램들은 회원 체계를 공유하고 있습니다. 그 어떤 니힐앱스 프로그램에 가입을 하더라도 다른 니힐앱스 프로그램을 이용할 수 있습니다.</TextLine>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
