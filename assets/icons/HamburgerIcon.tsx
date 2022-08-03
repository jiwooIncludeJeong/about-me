import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const HamburgerIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      d="M7 8h15M7 14h15M7 20h15"
    />
  </svg>
);

export default HamburgerIcon;
