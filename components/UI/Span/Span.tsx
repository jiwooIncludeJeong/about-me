import styled from 'styled-components';

export const Span = styled.span<{
  fontWeight?: number;
  fontSize?: number;
  color?: string;
}>`
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
  ${({ color }) => color && `color: ${color}`};
`;
