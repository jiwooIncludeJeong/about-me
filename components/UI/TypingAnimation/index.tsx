import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface Props {
  content: string;
  speed?: number;
}

const TypingAnimation: React.FC<Props> = props => {
  const { content, speed = 1000 } = props;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [display, setDisplay] = useState<string>('');
  const [index, setIndex] = useState<number>(-1);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex(prev => {
        if (prev >= content.length - 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return prev;
        } else {
          return prev + 1;
        }
      });
    }, speed);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);
  useEffect(() => {
    if (index >= 0) {
      setDisplay(prev => prev + content[index]);
    }
  }, [index]);

  return <Text>{display}</Text>;
};

const Text = styled.h1`
  display: table-cell;
  vertical-align: middle;
  border-right: 0.05em solid #f81857;
  animation: cursor 1s infinite;
  @keyframes cursor {
    to {
      border-color: transparent;
    }
  }
`;

export default TypingAnimation;
