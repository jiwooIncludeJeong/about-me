import type { NextPage } from 'next';
import { Col } from '@styles/default-styles';
import DarkColor from '@assets/darkColor';
import Introduce from '@components/Introduce';
import Career from '@components/Career';
import Projects from '@components/Projects/Projects';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Wrapper bgColor={DarkColor.black}>
      <Introduce />
      <Career />
      <Projects />
    </Wrapper>
  );
};

const Wrapper = styled(Col)`
  padding: 140px 24px;
  z-index: 0;
  background-color: ${({ theme }) => theme.color.black};

  > div {
    margin-bottom: 120px;

    :last-child {
      margin-bottom: 0;
    }
  }

  @media only screen and ${props => props.theme.maxGrid2} {
    padding: 60px 24px;

    > div {
      margin-bottom: 24px;

      :last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default Home;
