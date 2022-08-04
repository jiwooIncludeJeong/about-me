import type { NextPage } from 'next';
import { Col } from '@styles/default-styles';
import Color from '@assets/color';
import Introduce from '@components/Introduce';
import Career from '@components/Career';
import Projects from '@components/Projects/Projects';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Wrapper bgColor={Color.black}>
      <Introduce />
      <Career />
      <Projects />
    </Wrapper>
  );
};

const Wrapper = styled(Col)`
  padding: 140px 24px;
  z-index: 0;

  div {
    margin-bottom: 24px;

    :last-child {
      margin-bottom: 0;
    }
  }
`;

export default Home;
