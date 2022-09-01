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
  shortDetail?: string;
}

const ShortDetailItem: React.FC<Props> = props => {
  const { shortDetail } = props;

  const stringArr = useMemo(() => {
    return stringToStringArray(shortDetail ?? '');
  }, [shortDetail]);

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
    opacity: 0.6;
  }
  :hover::after {
    opacity: 1;
    transition: opacity 200ms ease-in-out;
  }
`;
export default ShortDetailItem;
