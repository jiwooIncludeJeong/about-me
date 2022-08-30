import React from 'react';
import styled from 'styled-components';
import { Row } from '@styles/default-styles';
import Typo from '@components/UI/Typo/Typo';
import DarkColor from '@assets/darkColor';
import useWindowSize from '@hooks/useWindowSize';
import type { ProjectType } from '@interfaces/Projects';

interface Props {
  modalData: ProjectType | null;
}

const ModalTitle: React.FC<Props> = props => {
  const { modalData } = props;
  const { isTablet } = useWindowSize();

  return (
    <Title>
      <Typo
        fontType={isTablet ? 'EN/Body/L/Bold' : 'EN/Heading/L/Bold'}
        color={DarkColor.black}
      >
        {modalData?.title.en}
      </Typo>
      <Typo
        fontType={isTablet ? 'KR/Body/S/Bold' : 'KR/Heading/XS/Bold'}
        color={DarkColor.black}
      >
        {modalData?.title.kr}
      </Typo>
    </Title>
  );
};
const Title = styled(Row)`
  width: unset;
  align-items: flex-end;

  p {
    color: ${({ theme }) => theme.color.black};
    margin-right: 12px;
  }
  @media only screen and ${({ theme }) => theme.maxGrid2} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export default ModalTitle;
