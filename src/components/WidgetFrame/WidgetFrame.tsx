import React, { FC, ReactElement } from "react";

import { Container, StyledWidgetFrame } from "./WidgetFrame.styles";

type WidgetFrameType = {
  children?: React.ReactNode;
  isConnected?: boolean;
  isOpen?: boolean;
};

const WidgetFrame: FC<WidgetFrameType> = ({
  children,
  isOpen,
  isConnected,
}): ReactElement => {
  return (
    <StyledWidgetFrame $isOpen={isOpen} $isConnected={isConnected}>
      <Container>{children}</Container>
    </StyledWidgetFrame>
  );
};

export default WidgetFrame;
