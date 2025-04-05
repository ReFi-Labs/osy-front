import Chain from '@/types/Chain';

export const CHAIN_ID_ETHEREUM = 11155111;
export const CHAIN_ID_BASE = 84532;
export const CHAIN_ID_HASHKEY = 133;

export const CHAIN_RPC_URL_ETHEREUM =
  process.env.NEXT_PUBLIC_CHAIN_RPC_URL_ETHEREUM || '';
export const CHAIN_RPC_URL_BASE =
  process.env.NEXT_PUBLIC_CHAIN_RPC_URL_BASE || '';
export const CHAIN_RPC_URL_HASHKEY =
  process.env.NEXT_PUBLIC_CHAIN_RPC_URL_HASHKEY || '';

export const CHAIN_RPC_URLS_ETHEREUM = [CHAIN_RPC_URL_ETHEREUM];
export const CHAIN_RPC_URLS_BASE = [CHAIN_RPC_URL_BASE];
export const CHAIN_RPC_URLS_HASHKEY = [CHAIN_RPC_URL_HASHKEY];

export const CHAIN_ETHEREUM: Chain = {
  id: CHAIN_ID_ETHEREUM,
  name: 'Ethereum',
  rpcUrls: CHAIN_RPC_URLS_ETHEREUM,
  explorerUrl: 'https://sepolia.etherscan.io',
};
export const CHAIN_BASE: Chain = {
  id: CHAIN_ID_BASE,
  name: 'Base',
  rpcUrls: CHAIN_RPC_URLS_BASE,
  explorerUrl: 'https://sepolia.basescan.org',
};
export const CHAIN_HASHKEY: Chain = {
  id: CHAIN_ID_HASHKEY,
  name: 'Hash Key',
  rpcUrls: CHAIN_RPC_URLS_HASHKEY,
  explorerUrl: 'https://hashkeychain-testnet-explorer.alt.technology',
};

export const CHAIN_MAP = {
  [CHAIN_ID_ETHEREUM]: CHAIN_ETHEREUM,
  [CHAIN_ID_BASE]: CHAIN_BASE,
  [CHAIN_ID_HASHKEY]: CHAIN_HASHKEY,
};

export const AVAILABLE_CHAINS = [CHAIN_ETHEREUM, CHAIN_BASE];

const CHAINS = [CHAIN_ETHEREUM, CHAIN_BASE, CHAIN_HASHKEY];

export default CHAINS;
