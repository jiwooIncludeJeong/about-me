import React from 'react';
import styled from 'styled-components';
import { Btn } from '@styles/default-styles';
import { ShareIcon } from '@assets/icons';
import Link from 'next/link';

interface Props {
  link: string;
}

const LinkItem: React.FC<Props> = props => {
  const { link } = props;
  return (
    <Link href={link} passHref={true}>
      <a target={'_blank'}>
        <Button>
          <ShareIcon width={32} height={32} />
        </Button>
      </a>
    </Link>
  );
};

const Button = styled(Btn)`
  path {
    fill: ${({ theme }) => `${theme.color.orange}99`};

    :hover {
      fill: ${({ theme }) => theme.color.orange};
      transition: fill 200ms ease;
    }
  }
`;
export default LinkItem;
