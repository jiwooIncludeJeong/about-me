import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const XIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m7.327 6.487 4.663-4.65a.56.56 0 0 0-.406-.926.563.563 0 0 0-.387.135l-4.664 4.65L1.87 1.04a.566.566 0 0 0-.964.398c0 .15.06.293.166.399l4.668 4.65-4.668 4.65a.561.561 0 1 0 .793.792l4.668-4.65 4.664 4.65a.564.564 0 0 0 .928-.405.56.56 0 0 0-.135-.386l-4.663-4.65Z"
      fill="#000"
      stroke="#000"
      strokeWidth={0.6}
    />
  </svg>
);

export default XIcon;
