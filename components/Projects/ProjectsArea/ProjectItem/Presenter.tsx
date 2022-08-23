import React from 'react';
import styled from 'styled-components';
import { Col } from '@styles/default-styles';
import type { ProjectTitleType } from '@interfaces/Projects';
import Typo from '@components/UI/Typo/Typo';
import DarkColor from '@assets/darkColor';

interface Props {
  title: ProjectTitleType;
  subTitle: string;
  onClick: () => void;
}

const Presenter: React.FC<Props> = props => {
  const { title, subTitle, onClick } = props;
  return (
    <Wrapper onClick={onClick}>
      <Typo fontType={'EN/Body/L/Medium'} color={DarkColor.white}>
        {title.en}
      </Typo>
      <Typo fontType={'EN/Body/M/Regular'} color={DarkColor.white}>
        {title.kr}
      </Typo>
      <SubTitleWrapper>
        <Typo fontType={'KR/Body/M/Regular'} color={DarkColor.white}>
          {subTitle}
        </Typo>
      </SubTitleWrapper>
    </Wrapper>
  );
};
//todo: mobile 해야함
const Wrapper = styled(Col)`
  padding: 12px;
  align-items: flex-start;
  width: 200px;
  transition: all ease 500ms;

  :hover {
    > p {
      transition: all ease 500ms;
      color: ${({ theme }) => theme.color.orange};
    }
  }

  p {
    color: ${({ theme }) => theme.color.white};
  }
`;
const SubTitleWrapper = styled.div`
  margin-top: 12px;

  p {
    opacity: 0.8;
  }
`;
export default Presenter;
