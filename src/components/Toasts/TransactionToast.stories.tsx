import { Story, Meta } from "@storybook/react";

import { SubmittedTransaction } from "../../features/transactions/transactionsSlice";
import TransactionToast, { TransactionToastProps } from "./TransactionToast";

export default {
  title: "components/Toasts/TransactionToast",
  component: TransactionToast,
  argTypes: {
    onClose: { control: { type: "function" } },
    error: { control: { type: "boolean" } },
    transaction: { control: { type: "boolean" } },
    type: { control: { type: "boolean" } },
    senderToken: { control: { type: "boolean" } },
    signerToken: { control: { type: "boolean" } },
    approvalToken: { control: { type: "boolean" } },
  },
} as Meta;

const Template: Story<TransactionToastProps> = (args) => (
  <TransactionToast {...args} />
);

const transactions: SubmittedTransaction[] = [
  {
    type: "Order",
    protocol: "request-for-quote",
    order: {
      expiry: "1628840480",
      nonce: "1628840180688",
      signerWallet: "0xE6fDF902a9CB2C443FCc84723d7aaaaaaBCc27F5",
      signerToken: "0xc778417e063141139fce010982780140aa0cd5ab",
      signerAmount: "10009999999999998",
      protocolFee: "7",
      senderWallet: "0x73580000000000000000000000000000000bcBE5",
      senderToken: "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea",
      senderAmount: "10000000000000000",
      r: "0x43cff0758ed93222938094c2f016b3f73ca8ec7b6e73fbeb11fc04f88c452cde",
      s: "0x43fa4900adf33a6011c26d96186b02d5920afbf73f3a1bd807cde1113bea4d3a",
      v: "27",
    },
    hash: "0xa1ea8106cca703f5286c3ca4c739f74463db991cfdaf96bba638b628bbad5f68",
    status: "succeeded",
    timestamp: 1628840183271,
  } as SubmittedTransaction,
  {
    type: "Order",
    protocol: "request-for-quote",
    order: {
      expiry: "1628840474",
      nonce: "1628840174080",
      signerWallet: "0xE6fDF902a9CB2C443FCc84723d7aaaaaaBCc27F5",
      signerToken: "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea",
      signerAmount: "10009999999999998",
      protocolFee: "7",
      senderWallet: "0x73580000000000000000000000000000000bcBE5",
      senderToken: "0xc778417e063141139fce010982780140aa0cd5ab",
      senderAmount: "10000000000000000",
      r: "0xde1bb784ad81abf3f62f906543b5d8320172cffbb181e9336dba2640d9702bcb",
      s: "0x4266def0208ca3ae5bd3acb5b8ec949a9d0ad974ca76bb145d72ab69c72f8eac",
      v: "28",
    },
    hash: "0x0268eddd12d466b19fb1ba05789e4fc8e6a4cfbdb2faf488acc93709dc567263",
    status: "processing",
    timestamp: 1628840176458,
  } as SubmittedTransaction,
  {
    type: "Order",
    protocol: "request-for-quote",
    order: {
      expiry: "1628840464",
      nonce: "1628840164346",
      signerWallet: "0xE6fDF902a9CB2C443FCc84723d7aaaaaaBCc27F5",
      signerToken: "0xc778417e063141139fce010982780140aa0cd5ab",
      signerAmount: "10009999999999998",
      protocolFee: "7",
      senderWallet: "0x73580000000000000000000000000000000bcBE5",
      senderToken: "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea",
      senderAmount: "10000000000000000",
      r: "0x32fcfd8d0fdd8cbf1087f296511755fb6525ddd577b1178eebc69ea041c0721c",
      s: "0x65ae2d37ef4a8b3694c443d15579b0ee1720392581a3f181414c3289cb1fa7b8",
      v: "27",
    },
    hash: "0xe594e34a2353164b9ecf1c91d00fcc6c07f8ae281e90d34b3a02f05321f79475",
    status: "reverted",
    timestamp: 1628840166870,
  } as SubmittedTransaction,
  {
    type: "Order",
    protocol: "request-for-quote",
    order: {
      expiry: "1628840464",
      nonce: "1628840164346",
      signerWallet: "0xE6fDF902a9CB2C443FCc84723d7aaaaaaBCc27F5",
      signerToken: "0xc778417e063141139fce010982780140aa0cd5ab",
      signerAmount: "10009999999999998",
      protocolFee: "7",
      senderWallet: "0x73580000000000000000000000000000000bcBE5",
      senderToken: "0x4CA716086504447923EFbF5e85dDF05E23446C5A",
      senderAmount: "10000000000000000",
      r: "0x32fcfd8d0fdd8cbf1087f296511755fb6525ddd577b1178eebc69ea041c0721c",
      s: "0x65ae2d37ef4a8b3694c443d15579b0ee1720392581a3f181414c3289cb1fa7b8",
      v: "27",
    },
    hash: "0xa2deb952611401755d9a6f648b81f323f9d3a0c768f6de053c99cef1042d3a68",
    status: "reverted",
    timestamp: 1628840166870,
  } as SubmittedTransaction,
];

const tokens = [
  {
    chainId: 4,
    address: "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea",
    name: "Dai Stablecoin",
    symbol: "DAI",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/asset_DAI.svg",
  },
  {
    chainId: 4,
    address: "0xd9ba894e0097f8cc2bbc9d24d308b98e36dc6d02",
    name: "Tether USD",
    symbol: "USDT",
    decimals: 6,
    logoURI:
      "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/asset_USDT.svg",
  },
  {
    chainId: 4,
    address: "0x577d296678535e4903d59a4c929b718e1d575e0a",
    name: "Wrapped BTC",
    symbol: "WBTC",
    decimals: 8,
  },
  {
    name: "Wrapped Ether",
    address: "0xc778417e063141139fce010982780140aa0cd5ab",
    decimals: 18,
    symbol: "WETH",
    chainId: 4,
  },
  {
    name: "Dachshund Inu",
    address: "0x4CA716086504447923EFbF5e85dDF05E23446C5A",
    decimals: 9,
    symbol: "DHI",
    chainId: 4,
    logoURI: "https://github.com/aonhac/airswap-web/blob/develop/public/images/DHI.png",
  },
];

export const TransactionSuccess = Template.bind({});
TransactionSuccess.args = {
  onClose: () => void 1,
  error: false,
  transaction: transactions[0],
  type: "Order",
  senderToken: tokens[0],
  signerToken: tokens[4],
};

export const TransactionFail = Template.bind({});
TransactionFail.args = {
  onClose: () => void 1,
  error: true,
  transaction: transactions[0],
  type: "Order",
  senderToken: tokens[0],
  signerToken: tokens[4],
};

export const ApprovalSuccess = Template.bind({});
ApprovalSuccess.args = {
  onClose: () => void 1,
  error: false,
  transaction: transactions[0],
  type: "Approval",
  approvalToken: tokens[0],
};

export const ApprovalFail = Template.bind({});
ApprovalFail.args = {
  onClose: () => void 1,
  error: true,
  transaction: transactions[0],
  type: "Approval",
  approvalToken: tokens[0],
};

export const Error = Template.bind({});
Error.args = {
  onClose: () => void 1,
  error: true,
  transaction: transactions[0],
  type: "Approval",
  approvalToken: tokens[0],
};
