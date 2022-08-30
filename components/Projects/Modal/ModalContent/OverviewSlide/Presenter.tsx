import React from 'react';
import styled from 'styled-components';
import { Col } from '@styles/default-styles';
import Typo from '@components/UI/Typo/Typo';
import DarkColor from '@assets/darkColor';
import type { ProjectType } from '@interfaces/Projects';
import ContentRow from '@components/Projects/Modal/ModalContent/OverviewSlide/ContentRow';
import TechItem from '@components/Projects/Modal/ModalContent/OverviewSlide/TechItem';
import { ShareIcon } from '@assets/icons';
import LinkItem from '@components/Projects/Modal/ModalContent/OverviewSlide/LinkItem';

interface Props {
  modalData: ProjectType | null;
}

const Presenter: React.FC<Props> = props => {
  const { modalData } = props;
  return (
    <Wrapper>
      <ContentRow
        render={() =>
          modalData?.tech.map(value => (
            <TechItem key={value.id} title={value.name} img={''} />
          ))
        }
        title={'TECH'}
      />
      <ContentRow
        render={() => <LinkItem link={modalData?.link ?? ''} />}
        title={'LINK'}
      />
    </Wrapper>
  );
};
const Wrapper = styled(Col)`
  width: 100%;
  padding: 24px 48px;
`;
export default Presenter;
