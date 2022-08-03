import React from 'react';
import styled from 'styled-components';
import { Col } from '@styles/default-styles';
import Typo from '@components/UI/Typo/Typo';
import DarkColor from '@assets/darkColor';
import type { ProjectType } from '@interfaces/Projects';
import ContentRow from '@components/Projects/Modal/ModalContent/OverviewSlide/ContentRow';
import TechItem from '@components/Projects/Modal/ModalContent/OverviewSlide/TechItem';
import LinkItem from '@components/Projects/Modal/ModalContent/OverviewSlide/LinkItem';
import GitHubItem from '@components/Projects/Modal/ModalContent/OverviewSlide/GitHubItem';
import DetailItem from '@components/Projects/Modal/ModalContent/OverviewSlide/DetailItem';

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
      {modalData?.github && (
        <ContentRow
          render={() => <GitHubItem link={modalData?.github ?? ''} />}
          title={'GIT HUB'}
        />
      )}
      <ContentRow
        render={() => (
          <Typo fontType={'KR/Body/M/Regular'} color={DarkColor.black}>
            {modalData?.subTitle ?? ''}
          </Typo>
        )}
        title={'IS'}
      />
      <ContentRow
        render={() => (
          <Typo fontType={'KR/Body/M/Regular'} color={DarkColor.black}>
            {modalData?.duration ?? ''}
          </Typo>
        )}
        title={'DURATION'}
      />
      <ContentRow
        render={() => <DetailItem detail={modalData?.detail} />}
        title={'DETAIL'}
        alignItems={'flex-start'}
      />
    </Wrapper>
  );
};
const Wrapper = styled(Col)`
  width: 100%;
  padding: 24px 48px;
`;
export default Presenter;
