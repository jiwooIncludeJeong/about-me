import type { MouseEventHandler } from 'react';
import React, { useCallback } from 'react';
import Link from 'next/link';
import type { ProjectDetailType } from '@interfaces/Projects';
import useWindowSize from '@hooks/useWindowSize';
import { stringToStringArray } from '~/utils';
import useItemOpen from '@hooks/useItemOpen';
import Typo from '@components/UI/Typo/Typo';
import DarkColor from '@assets/darkColor';
import { Span } from '@components/UI/Span/Span';
import styled from 'styled-components';
import { Btn, Col, Row } from '@styles/default-styles';
import { TriangleIcon } from '@assets/icons';

interface Props {
  value: ProjectDetailType;
}

const Detail: React.FC<Props> = props => {
  const { value } = props;

  const stringArr = useCallback(
    (detailItem: ProjectDetailType) => {
      return stringToStringArray(detailItem?.content ?? '');
    },
    [value],
  );

  const { isTablet, isMobile } = useWindowSize();

  const { openState, opposite } = useItemOpen();

  const opened = useCallback(
    (detail: ProjectDetailType) => {
      return (
        <OpenedArea openState={openState}>
          <Typo fontType={'KR/Body/S/Medium'} color={DarkColor.black}>
            <Span fontWeight={600}>📕 어려움:</Span> {value.difficulty}
            <br />
            <Span fontWeight={600}>📗 노력:</Span> {value.effort}
            <br />
            <Span fontWeight={600}>📘 결과:</Span> {value.result}
            <br />
            {detail.link && (
              <Link href={value?.link ?? ''} passHref={true}>
                <A target={'_blank'}>
                  <Span color={DarkColor.orange} fontWeight={900}>
                    [LINK]
                  </Span>
                </A>
              </Link>
            )}
          </Typo>
        </OpenedArea>
      );
    },
    [value, isMobile, openState],
  );

  const onClickOpenBtn: MouseEventHandler<HTMLDivElement> = e => {
    opposite();
  };

  const render = useCallback(
    (detail: ProjectDetailType) => {
      return isMobile ? (
        <MobileItemWrapper>
          <ItemWrapper onClick={onClickOpenBtn}>
            <Typo
              fontType={isTablet ? 'KR/Body/S/Medium' : 'KR/Body/M/Regular'}
              color={DarkColor.black}
            >
              <Span fontWeight={900}>{detail.title}</Span>{' '}
            </Typo>
            <OpenBtn openState={openState}>
              <TriangleIcon width={12} height={12} />
            </OpenBtn>
          </ItemWrapper>
          {opened(detail)}
        </MobileItemWrapper>
      ) : (
        <ItemWrapper>
          <Typo
            fontType={isTablet ? 'KR/Body/S/Medium' : 'KR/Body/M/Regular'}
            color={DarkColor.black}
          >
            <Span fontWeight={900}>{detail.title}</Span>{' '}
            {detail.link && (
              <Span color={DarkColor.orange} fontWeight={900}>
                [LINK]
              </Span>
            )}
            <br />
            {stringArr(detail).map(text => (
              <React.Fragment key={text}>
                {text}
                <br />
              </React.Fragment>
            ))}
            <Span fontWeight={600}>📕 어려움:</Span> {detail.difficulty}
            <br />
            <Span fontWeight={600}>📗 노력:</Span> {detail.effort}
            <br />
            <Span fontWeight={600}>📘 결과:</Span> {detail.result}
          </Typo>
        </ItemWrapper>
      );
    },
    [value, isMobile, openState],
  );
  return (
    <React.Fragment key={value.id}>
      {!isMobile && value.link ? (
        <Link href={value.link} passHref={true}>
          <A target={'_blank'}>{render(value)}</A>
        </Link>
      ) : (
        <React.Fragment>{render(value)}</React.Fragment>
      )}
    </React.Fragment>
  );
};
const MobileItemWrapper = styled(Col)`
  margin-bottom: 24px;
  :last-child {
    margin-bottom: 0;
  }
`;
const ItemWrapper = styled(Row)`
  width: unset;
  align-items: flex-start;
  margin-bottom: 24px;

  :last-child {
    margin-bottom: 0;
  }

  :hover {
    p {
      text-decoration: underline 1px ${({ theme }) => theme.color.orange};
      text-decoration-style: double;
    }
  }

  p {
    color: ${({ theme }) => theme.color.black};
    word-break: break-word;
  }

  @media only screen and ${({ theme }) => theme.maxGrid3} {
    align-items: center;
    margin-bottom: 0;
  }
`;
const A = styled.a`
  margin-bottom: 24px;
  position: relative;
  :last-child {
    margin-bottom: 0;
  }
`;
const OpenBtn = styled(Btn)<{ openState: boolean }>`
  margin: 0 8px;
  transform: rotateX(${({ openState }) => (openState ? 0 : 180)}deg);
  transition: transform 200ms ease;

  path {
    fill: ${({ theme }) => theme.color.orange};
  }
`;

const OpenedArea = styled.div<{ openState: boolean }>`
  transition: max-height 300ms ease-in-out;
  max-height: ${({ openState }) => (openState ? '100vh' : 0)};
`;
export default Detail;
