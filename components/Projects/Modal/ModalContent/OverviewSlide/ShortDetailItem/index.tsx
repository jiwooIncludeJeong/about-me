import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Row } from '@styles/default-styles';
import DarkColor from '@assets/darkColor';
import Typo from '@components/UI/Typo/Typo';
import { stringToStringArray } from '~/utils';
import useWindowSize from '@hooks/useWindowSize';

interface Props {
  shortDetail?: string;
}

const ShortDetailItem: React.FC<Props> = props => {
  const { shortDetail } = props;

  const stringArr = useMemo(() => {
    return stringToStringArray(shortDetail ?? '');
  }, [shortDetail]);

  const { isTablet } = useWindowSize();

  return (
    <Wrapper>
      <Typo
        fontType={isTablet ? 'KR/Body/S/Medium' : 'KR/Body/M/Regular'}
        color={DarkColor.black}
      >
        {stringArr.map((value, index) => (
          <React.Fragment key={`${value}_${index}`}>
            •{value}
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
    word-break: break-word;
  }
`;
export default ShortDetailItem;
