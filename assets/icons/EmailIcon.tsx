import * as React from 'react';
import { SVGProps } from 'react';
import type { IconProps } from '@assets/iconProps';

const EmailIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zM18.99 7 12 12.666 5.009 7H18.99zM19 17H5V8.495l7 5.673 7-5.672V17z" />
  </svg>
);

export default EmailIcon;
