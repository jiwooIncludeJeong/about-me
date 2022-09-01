import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Col, Row } from '@styles/default-styles';
import Link from 'next/link';
import DarkColor from '@assets/darkColor';
import Typo from '@components/UI/Typo/Typo';
import type { ProjectDetailType } from '@interfaces/Projects';
import { stringToStringArray } from '~/utils';

interface Props {
  detail?: Array<ProjectDetailType>;
}

const DetailItem: React.FC<Props> = props => {
  const { detail } = props;

  const stringArr = useCallback(
    (detailItem: ProjectDetailType) => {
      return stringToStringArray(detailItem?.content ?? '');
    },
    [detail],
  );

  const render = useCallback(
    (value: ProjectDetailType) => {
      return (
        <ItemWrapper>
          <Typo fontType={'KR/Body/M/Regular'} color={DarkColor.black}>
            {stringArr(value).map(text => (
              <React.Fragment key={text}>
                {text}
                <br />
              </React.Fragment>
            ))}
          </Typo>
        </ItemWrapper>
      );
    },
    [detail],
  );

  return (
    <Wrapper>
      {detail &&
        detail.map(value => (
          <React.Fragment key={value.id}>
            {value.link ? (
              <Link href={value.link} passHref={true}>
                <A target={'_blank'}>{render(value)}</A>
              </Link>
            ) : (
              <React.Fragment>{render(value)}</React.Fragment>
            )}
          </React.Fragment>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled(Col)``;

const ItemWrapper = styled(Row)`
  width: unset;
  align-items: flex-start;

  p {
    color: ${({ theme }) => theme.color.black};
  }
`;
const A = styled.a`
  position: relative;
  margin-bottom: 16px;
  :last-child {
    margin-bottom: 0;
  }

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
export default DetailItem;
