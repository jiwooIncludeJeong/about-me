import React from 'react';
import styled from 'styled-components';
import { Btn, Row } from '@styles/default-styles';
import { AndroidIcon, AppleIcon, ShareIcon } from '@assets/icons';
import Link from 'next/link';

interface Props {
  link?: string;
  androidLink?: string;
  iosLink?: string;
}

const LinkItem: React.FC<Props> = props => {
  const { link, androidLink, iosLink } = props;
  return (
    <Wrapper>
      {link && link.length > 0 && (
        <Link href={link} passHref={true}>
          <a target={'_blank'}>
            <Button>
              <ShareIcon width={32} height={32} />
            </Button>
          </a>
        </Link>
      )}
      {iosLink && iosLink.length > 0 && (
        <Link href={iosLink} passHref={true}>
          <a target={'_blank'}>
            <Button>
              <AppleIcon width={32} height={32} />
            </Button>
          </a>
        </Link>
      )}
      {androidLink && androidLink.length > 0 && (
        <Link href={androidLink} passHref={true}>
          <a target={'_blank'}>
            <Button>
              <AndroidIcon width={32} height={32} />
            </Button>
          </a>
        </Link>
      )}
    </Wrapper>
  );
};

const Button = styled(Btn)`
  path {
    fill: ${({ theme }) => `${theme.color.orange}99`};
  }
  :hover {
    path {
      fill: ${({ theme }) => theme.color.orange};
      transition: fill 200ms ease;
    }
  }
`;

const Wrapper = styled(Row)`
  width: unset;
  align-items: center;

  a {
    margin-right: 8px;
    :last-child {
      margin-right: 0;
    }
  }
`;
export default LinkItem;
