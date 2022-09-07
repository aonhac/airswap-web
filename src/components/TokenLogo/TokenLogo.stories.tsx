import { TokenInfo } from "@airswap/typescript";
import { Story, Meta } from "@storybook/react";

import styled from "styled-components/macro";

import { Subtitle } from "../Typography/Typography";
import TokenLogo from "./TokenLogo";

export default {
  title: "components/TokenLogo",
  component: TokenLogo,
} as Meta;

const Grid = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  row-gap: 2rem;
  column-gap: 5rem;
`;

const airSwapTokenInfo: TokenInfo = {
  symbol: "DHI",
  address: "0x4CA716086504447923EFbF5e85dDF05E23446C5A",
  chainId: 4,
  decimals: 9,
  logoURI:
    "https://assets.coingecko.com/coins/images/1019/thumb/AST.png?1547034939",
  name: "AirSwap",
};

const Template: Story<{}> = (args) => (
  <Grid>
    <Subtitle>small</Subtitle>
    <TokenLogo tokenInfo={airSwapTokenInfo} size="small" />
    <Subtitle>medium</Subtitle>
    <TokenLogo tokenInfo={airSwapTokenInfo} size="medium" />
    <Subtitle>large</Subtitle>
    <TokenLogo tokenInfo={airSwapTokenInfo} size="large" />
    <Subtitle>Empty (medium)</Subtitle>
    <TokenLogo tokenInfo={null} size="medium" />
  </Grid>
);

export const AirSwap = Template.bind({});
AirSwap.args = {
  children: "Click me",
  intent: "primary",
};
