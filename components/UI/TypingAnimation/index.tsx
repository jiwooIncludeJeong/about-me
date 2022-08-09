import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface Props {
  content: string;
  speed?: number;
  infinite?: boolean;
}

const TypingAnimation: React.FC<Props> = props => {
  const { content, speed = 1000, infinite = false } = props;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [display, setDisplay] = useState<string>('');
  const [index, setIndex] = useState<number>(-1);
  const [end, setEnd] = useState<boolean>(false);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const typing = () => {
    setIndex(prev => {
      if (prev >= content.length - 1) {
        resetInterval();
        return -1;
      } else {
        return prev + 1;
      }
    });
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      typing();
    }, speed);

    return () => {
      resetInterval();
    };
  }, []);

  useEffect(() => {
    if (index >= 0) {
      setDisplay(prev => prev + content[index]);
    } else {
      if (infinite) {
        setDisplay('');
        setEnd(true);
      }
    }
  }, [index, infinite]);

  useEffect(() => {
    if (end && infinite) {
      setEnd(false);
      intervalRef.current = setInterval(() => {
        typing();
      }, speed);
      return () => {
        resetInterval();
      };
    }
  }, [end, infinite]);

  return <Text>{display}</Text>;
};

const Text = styled.p`
  display: table-cell;
  vertical-align: middle;
  border-right: 0.05em solid #f81857;
  animation: cursor 1s infinite;
  font-family: Pretendard;
  font-size: 26px;
  line-height: 26px;
  font-weight: 200;

  @keyframes cursor {
    to {
      border-color: transparent;
    }
  }
`;

export default TypingAnimation;
