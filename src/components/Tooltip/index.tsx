import React, {useState, ReactNode} from 'react';
import styled from 'styled-components';

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContent = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 1;
  opacity: 0.9;
  font-size: 10px;
  display: flex;
  align-items: center;
`;

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {text, children} = props;
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <TooltipContainer onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {isTooltipVisible && <TooltipContent>{text}</TooltipContent>}
    </TooltipContainer>
  );
};

export default Tooltip;
