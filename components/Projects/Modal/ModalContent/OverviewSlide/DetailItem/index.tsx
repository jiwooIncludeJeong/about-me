import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Col, Row } from '@styles/default-styles';
import Link from 'next/link';
import DarkColor from '@assets/darkColor';
import Typo from '@components/UI/Typo/Typo';
import type { ProjectDetailType } from '@interfaces/Projects';
import { stringToStringArray } from '~/utils';
import useWindowSize from '@hooks/useWindowSize';
import { Span } from '@components/UI/Span/Span';

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

  const { isTablet } = useWindowSize();

  const render = useCallback(
    (value: ProjectDetailType) => {
      return (
        <ItemWrapper>
          <Typo
            fontType={isTablet ? 'KR/Body/S/Medium' : 'KR/Body/M/Regular'}
            color={DarkColor.black}
          >
            <Span fontWeight={900}>{value.title}</Span>{' '}
            {value.link && (
              <Span color={DarkColor.orange} fontWeight={900}>
                [LINK]
              </Span>
            )}
            <br />
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
`;
const A = styled.a`
  margin-bottom: 24px;
  position: relative;
  :last-child {
    margin-bottom: 0;
  }
`;
export default DetailItem;
