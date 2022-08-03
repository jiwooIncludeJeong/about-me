import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Btn, Row } from '@styles/default-styles';
import { GithubIcon } from '@assets/icons';
import Link from 'next/link';
import DarkColor from '@assets/darkColor';
import Typo from '@components/UI/Typo/Typo';
import type { ProjectDetailType } from '@interfaces/Projects';
import { stringToStringArray } from '~/utils';

interface Props {
  detail?: ProjectDetailType;
}

const DetailItem: React.FC<Props> = props => {
  const { detail } = props;

  const stringArr = useMemo(() => {
    return stringToStringArray(detail?.content ?? '');
  }, [detail?.content]);

  const render = useCallback(() => {
    return (
      <Wrapper>
        <Typo fontType={'KR/Body/M/Regular'} color={DarkColor.black}>
          {stringArr.map(value => (
            <React.Fragment key={value}>
              {value}
              <br />
            </React.Fragment>
          ))}
        </Typo>
      </Wrapper>
    );
  }, [detail]);

  return detail?.link ? (
    <Link href={detail.link} passHref={true}>
      <A target={'_blank'}>{render()}</A>
    </Link>
  ) : (
    <React.Fragment>{render()}</React.Fragment>
  );
};

const Wrapper = styled(Row)`
  width: unset;
  align-items: flex-start;

  p {
    color: ${({ theme }) => theme.color.black};
  }
`;
const A = styled.a`
  position: relative;

  ::after {
    left: 0;
    bottom: -12px;
    position: absolute;
    content: 'LINK';
    padding: 6px 12px;
    background-color: ${({ theme }) => theme.color.orange};
    border-radius: 4px;
    font-size: 12px;
    font-family: Roboto;
    font-weight: 500;
    opacity: 0;
  }
  :hover::after {
    opacity: 1;
    transition: opacity 200ms ease-in-out;
  }
`;
export default DetailItem;
