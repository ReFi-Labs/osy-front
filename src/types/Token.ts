export type MinimalToken = {
  chainId: number;
  address: string;
};

type Token = MinimalToken & {
  symbol: string;
  decimals: number;
  name?: string;
  isCoin?: boolean;
};

export default Token;
