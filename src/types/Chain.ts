type Chain = {
  id: number;
  name: string;
  rpcUrls?: string[];
  explorerUrl?: string;
  coin?: {
    name?: string;
    symbol: string;
    decimals: number;
  };
};

export default Chain;
