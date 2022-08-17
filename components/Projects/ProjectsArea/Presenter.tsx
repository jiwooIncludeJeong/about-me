import React from 'react';
import styled from 'styled-components';
import ProjectItem from '@components/Projects/ProjectsArea/ProjectItem';
import type { ProjectType } from '@interfaces/Projects';

interface Props {
  data: Array<ProjectType>;
  isFocused: boolean;
}

const Presenter: React.FC<Props> = props => {
  const { data, isFocused } = props;
  return (
    <Wrapper isFocused={isFocused}>
      {data.map(value => (
        <ProjectItem key={value.id} onClickItem={() => {}} {...value} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isFocused: boolean }>`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;

  opacity: ${({ isFocused }) => (isFocused ? 1 : 0)};
  transform: translateY(${({ isFocused }) => (isFocused ? 0 : '200px')});
  transition: opacity 200ms ease, transform 200ms ease;

  @media only screen and ${props => props.theme.maxGrid2} {
    padding: 0 40px;
  }
`;

export default Presenter;
