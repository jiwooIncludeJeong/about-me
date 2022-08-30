import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  fontType:
    | 'MG/Heading/L/Bold'
    | 'MG/Heading/L/Regular'
    | 'MG/Heading/S/Bold'
    | 'MG/Heading/S/Regular'
    | 'EN/Heading/XL/Black'
    | 'EN/Heading/L/Bold'
    | 'EN/Heading/L/Regular'
    | 'EN/Heading/M/Bold'
    | 'EN/Heading/S/Black'
    | 'EN/Heading/S/Bold'
    | 'EN/Heading/XS/Black'
    | 'EN/Heading/XS/Bold'
    | 'EN/Body/L/Bold'
    | 'EN/Body/L/Medium'
    | 'EN/Body/M/Bold'
    | 'EN/Body/M/Regular'
    | 'EN/Body/S/Bold'
    | 'EN/Body/S/Medium'
    | 'EN/Button/M/Bold'
    | 'EN/Button/S/Bold'
    | 'EN/Button/S/Medium'
    | 'EN/Button/XS/Bold'
    | 'EN/Button/XS/Medium'
    | 'EN/Button/S/Bold/UL'
    | 'EN/Button/S/Regular/UL'
    | 'EN/Caption/S/Regular'
    | 'EN/Caption/XS/Regular'
    | 'KR/Heading/XL/Black'
    | 'KR/Heading/L/Bold'
    | 'KR/Heading/L/Regular'
    | 'KR/Heading/M/Bold'
    | 'KR/Heading/S/Black'
    | 'KR/Heading/S/Bold'
    | 'KR/Heading/XS/Black'
    | 'KR/Heading/XS/Bold'
    | 'KR/Body/L/Bold'
    | 'KR/Body/L/Medium'
    | 'KR/Body/M/Bold'
    | 'KR/Body/M/Regular'
    | 'KR/Body/S/Bold'
    | 'KR/Body/S/Medium'
    | 'KR/Button/M/Bold'
    | 'KR/Button/S/Bold'
    | 'KR/Button/S/Medium'
    | 'KR/Button/XS/Bold'
    | 'KR/Button/XS/Medium'
    | 'KR/Button/S/Bold/UL'
    | 'KR/Button/S/Regular/UL'
    | 'KR/Caption/S/Regular'
    | 'KR/Caption/XS/Regular';
  color?: string;
  underline?: boolean;
  center?: boolean;
  lineThrough?: boolean;
  children: React.ReactNode;
}

const Typo: React.FC<Props> = props => {
  const {
    fontType,
    color,
    underline = false,
    center = false,
    lineThrough = false,
    children,
  } = props;

  switch (fontType) {
    case 'MG/Heading/L/Bold':
      return (
        <Magazine
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={36}
          center={center}
          height={47}
          color={color}
        >
          {children}
        </Magazine>
      );
    case 'MG/Heading/L/Regular':
      return (
        <Magazine
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={500}
          lineThrough={lineThrough}
          size={36}
          center={center}
          height={47}
          color={color}
        >
          {children}
        </Magazine>
      );
    case 'MG/Heading/S/Bold':
      return (
        <Magazine
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={24}
          center={center}
          height={34}
          color={color}
        >
          {children}
        </Magazine>
      );
    case 'MG/Heading/S/Regular':
      return (
        <Magazine
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={400}
          lineThrough={lineThrough}
          size={24}
          center={center}
          height={34}
          color={color}
        >
          {children}
        </Magazine>
      );
    case 'EN/Heading/XL/Black':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={900}
          lineThrough={lineThrough}
          size={40}
          center={center}
          height={48}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Heading/L/Bold':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={36}
          center={center}
          height={47}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Heading/M/Bold':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={32}
          center={center}
          height={42}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Heading/S/Black':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={900}
          lineThrough={lineThrough}
          size={24}
          center={center}
          height={34}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Heading/S/Bold':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={24}
          center={center}
          height={34}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Heading/XS/Black':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={900}
          lineThrough={lineThrough}
          size={20}
          center={center}
          height={30}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Heading/XS/Bold':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={20}
          center={center}
          height={30}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Body/L/Bold':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={-0.005}
          fontWeight={700}
          lineThrough={lineThrough}
          size={16}
          center={center}
          height={24}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Body/L/Medium':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={-0.005}
          fontWeight={500}
          lineThrough={lineThrough}
          size={16}
          center={center}
          height={24}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Body/M/Bold':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={14}
          center={center}
          height={21}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Body/M/Regular':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={400}
          lineThrough={lineThrough}
          size={14}
          center={center}
          height={21}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Body/S/Bold':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={12}
          center={center}
          height={17}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Body/S/Medium':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={500}
          lineThrough={lineThrough}
          size={12}
          center={center}
          height={17}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Button/M/Bold':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={-0.005}
          fontWeight={700}
          lineThrough={lineThrough}
          size={16}
          center={center}
          height={16}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Button/S/Bold':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={14}
          center={center}
          height={14}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Button/S/Medium':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={500}
          lineThrough={lineThrough}
          size={14}
          center={center}
          height={14}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Button/XS/Bold':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={12}
          center={center}
          height={12}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Button/XS/Medium':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={500}
          lineThrough={lineThrough}
          size={12}
          center={center}
          height={12}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Button/S/Bold/UL':
      return (
        <English
          id={fontType}
          underline={true}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={14}
          center={center}
          height={14}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Button/S/Regular/UL':
      return (
        <English
          id={fontType}
          underline={true}
          spacing={0}
          fontWeight={400}
          lineThrough={lineThrough}
          size={14}
          center={center}
          height={14}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Caption/S/Regular':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={-0.005}
          fontWeight={400}
          lineThrough={lineThrough}
          size={12}
          center={center}
          height={17}
          color={color}
        >
          {children}
        </English>
      );
    case 'EN/Caption/XS/Regular':
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={-0.005}
          fontWeight={400}
          lineThrough={lineThrough}
          size={11}
          center={center}
          height={15.4}
          color={color}
        >
          {children}
        </English>
      );
    case 'KR/Heading/XL/Black':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={900}
          lineThrough={lineThrough}
          size={40}
          center={center}
          height={48}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Heading/L/Bold':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={36}
          center={center}
          height={47}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Heading/L/Regular':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={400}
          lineThrough={lineThrough}
          size={36}
          center={center}
          height={47}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Heading/M/Bold':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={32}
          center={center}
          height={42}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Heading/S/Black':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={900}
          lineThrough={lineThrough}
          size={24}
          center={center}
          height={34}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Heading/S/Bold':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={24}
          center={center}
          height={34}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Heading/XS/Black':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={900}
          lineThrough={lineThrough}
          size={20}
          center={center}
          height={30}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Heading/XS/Bold':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={20}
          center={center}
          height={30}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Body/L/Bold':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={-0.005}
          fontWeight={700}
          lineThrough={lineThrough}
          size={16}
          center={center}
          height={24}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Body/L/Medium':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={-0.005}
          fontWeight={500}
          lineThrough={lineThrough}
          size={16}
          center={center}
          height={24}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Body/M/Bold':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={14}
          center={center}
          height={21}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Body/M/Regular':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={400}
          lineThrough={lineThrough}
          size={14}
          center={center}
          height={21}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Body/S/Bold':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={12}
          center={center}
          height={17}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Body/S/Medium':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={500}
          lineThrough={lineThrough}
          size={12}
          center={center}
          height={17}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Button/M/Bold':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={-0.005}
          fontWeight={700}
          lineThrough={lineThrough}
          size={16}
          center={center}
          height={16}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Button/S/Bold':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={14}
          center={center}
          height={14}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Button/S/Medium':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={500}
          lineThrough={lineThrough}
          size={14}
          center={center}
          height={14}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Button/XS/Bold':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={12}
          center={center}
          height={12}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Button/XS/Medium':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={500}
          lineThrough={lineThrough}
          size={12}
          center={center}
          height={12}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Button/S/Bold/UL':
      return (
        <Korean
          id={fontType}
          underline={true}
          spacing={0}
          fontWeight={700}
          lineThrough={lineThrough}
          size={14}
          center={center}
          height={14}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Button/S/Regular/UL':
      return (
        <Korean
          id={fontType}
          underline={true}
          spacing={0}
          fontWeight={400}
          lineThrough={lineThrough}
          size={14}
          center={center}
          height={14}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Caption/S/Regular':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={-0.005}
          fontWeight={400}
          lineThrough={lineThrough}
          size={12}
          center={center}
          height={17}
          color={color}
        >
          {children}
        </Korean>
      );
    case 'KR/Caption/XS/Regular':
      return (
        <Korean
          id={fontType}
          underline={underline}
          spacing={-0.005}
          fontWeight={400}
          lineThrough={lineThrough}
          size={11}
          center={center}
          height={15.4}
          color={color}
        >
          {children}
        </Korean>
      );
    default:
      return (
        <English
          id={fontType}
          underline={underline}
          spacing={0}
          fontWeight={600}
          lineThrough={lineThrough}
          size={12}
          center={center}
          height={16.8}
          color={color}
        >
          {children}
        </English>
      );
  }
};

const defaultTypo = css<{
  size: number;
  height?: number;
  spacing: number;
  color?: string;
  underline: boolean;
  center: boolean;
  lineThrough?: boolean;
  fontWeight: number;
}>`
  margin: 0;
  padding: 0;
  font-size: ${props => props.size}px;
  ${props => props.underline && `text-decoration-line: underline`};
  ${props => props.lineThrough && `text-decoration-line: line-through`};
  text-align: ${props => (props.center ? 'center' : 'unset')};
  word-break: keep-all;
  ${props => props.color != null && `color: ${props.color}`};
  ${props => props.height != null && `line-height: ${props.height}px`};
  letter-spacing: ${props => props.spacing}em;
  font-weight: ${props => props.fontWeight};
`;

const English = styled.p<{
  size: number;
  height?: number;
  spacing: number;
  color?: string;
  underline: boolean;
  center: boolean;
  lineThrough: boolean;
  fontWeight: number;
}>`
  ${defaultTypo};
  font-family: 'Roboto';
`;
const Magazine = styled.p<{
  size: number;
  height?: number;
  spacing: number;
  color?: string;
  underline: boolean;
  center: boolean;
  lineThrough: boolean;
  fontWeight: number;
}>`
  ${defaultTypo};
  font-family: 'Magazine';
`;
const Korean = styled.p<{
  size: number;
  height?: number;
  spacing: number;
  color?: string;
  underline: boolean;
  center: boolean;
  lineThrough: boolean;
  fontWeight: number;
}>`
  ${defaultTypo};
  font-family: Pretendard;
`;
export default Typo;
