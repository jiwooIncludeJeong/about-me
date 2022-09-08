import React from 'react';
import styled from 'styled-components';
import { Col } from '@styles/default-styles';
import type { ProjectType } from '@interfaces/Projects';
import ContentRow from '@components/Projects/Modal/ModalContent/OverviewSlide/ContentRow';
import TechItem from '@components/Projects/Modal/ModalContent/OverviewSlide/TechItem';
import LinkItem from '@components/Projects/Modal/ModalContent/OverviewSlide/LinkItem';
import GitHubItem from '@components/Projects/Modal/ModalContent/OverviewSlide/GitHubItem';
import ShortDetailItem from '@components/Projects/Modal/ModalContent/OverviewSlide/ShortDetailItem';
import OnlyTypoItem from '@components/Projects/Modal/ModalContent/OverviewSlide/OnlyTypoItem';

interface Props {
  modalData: ProjectType | null;
}

const OverviewSlide: React.FC<Props> = props => {
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
      {(modalData?.link || modalData?.iosLink || modalData?.androidLink) && (
        <ContentRow
          render={() => (
            <LinkItem
              link={modalData?.link ?? ''}
              iosLink={modalData?.iosLink ?? ''}
              androidLink={modalData?.androidLink ?? ''}
            />
          )}
          title={'LINK'}
        />
      )}
      {modalData?.github && (
        <ContentRow
          render={() => <GitHubItem link={modalData?.github ?? ''} />}
          title={'GIT HUB'}
        />
      )}
      <ContentRow
        render={() => <OnlyTypoItem content={modalData?.subTitle ?? ''} />}
        title={'IS'}
      />
      <ContentRow
        render={() => <OnlyTypoItem content={modalData?.duration ?? ''} />}
        title={'DURATION'}
      />
      <ContentRow
        render={() => (
          <ShortDetailItem shortDetail={modalData?.shortDetail ?? ''} />
        )}
        title={'DETAIL'}
        alignItems={'flex-start'}
      />
    </Wrapper>
  );
};
const Wrapper = styled(Col)`
  width: 100%;
  padding: 24px 48px;

  @media only screen and ${({ theme }) => theme.maxGrid2} {
    padding: 12px 24px;
  }
`;
export default OverviewSlide;
