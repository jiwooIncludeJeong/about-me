import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  href: string;
  renderIcon: () => React.ReactNode;
}

const IntroduceButtonItem: React.FC<Props> = props => {
  const { href, renderIcon } = props;
  return (
    <Link href={href} passHref={true}>
      <Btn target={'_blank'}>{renderIcon()}</Btn>
    </Link>
  );
};
const Btn = styled.a`
  padding: 8px;
  border-radius: 100%;
  :hover {
    background-color: ${({ theme }) => `${theme.color.orange}50`};
    transition: background-color 400ms ease;
  }
`;
export default IntroduceButtonItem;
