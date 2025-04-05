import Token from '@/types/Token';
import { CHAIN_ID_ETHEREUM, CHAIN_ID_BASE, CHAIN_ID_HASHKEY } from './chains';

export const TOKEN_ADDRESS_ETHEREUM_OSYUSD =
  '0xa5E55dcC51d8FeB1348f4Ad324ed9F23903c90A2';
export const TOKEN_ADDRESS_ETHEREUM_USDC =
  '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238';
export const TOKEN_ADDRESS_BASE_USDC =
  '0x036CbD53842c5426634e7929541eC2318f3dCF7e';
export const TOKEN_ADDRESS_HASHKEY_OSYUSD =
  '0xa4DB7798981453A2c8075fe5162cFD0E2479926E';
export const TOKEN_ADDRESS_HASHKEY_USDC =
  '0x1d5C9205B5019c877540e615243CF1E8BA43eeeD';

export const TOKEN_ETHEREUM_OSYUSD: Token = {
  chainId: CHAIN_ID_ETHEREUM,
  address: TOKEN_ADDRESS_ETHEREUM_OSYUSD,
  symbol: 'osyUSD',
  decimals: 6,
  name: 'osyUSD',
  isCoin: false,
};
export const TOKEN_ETHEREUM_USDC: Token = {
  chainId: CHAIN_ID_ETHEREUM,
  address: TOKEN_ADDRESS_ETHEREUM_USDC,
  symbol: 'USDC',
  decimals: 6,
  name: 'USDC',
  isCoin: false,
};
export const TOKEN_BASE_USDC: Token = {
  chainId: CHAIN_ID_BASE,
  address: TOKEN_ADDRESS_BASE_USDC,
  symbol: 'USDC',
  decimals: 6,
  name: 'USDC',
  isCoin: false,
};
export const TOKEN_HASHKEY_OSYUSD: Token = {
  chainId: CHAIN_ID_HASHKEY,
  address: TOKEN_ADDRESS_HASHKEY_OSYUSD,
  symbol: 'osyUSD',
  decimals: 6,
  name: 'osyUSD',
  isCoin: false,
};
export const TOKEN_HASHKEY_USDC: Token = {
  chainId: CHAIN_ID_HASHKEY,
  address: TOKEN_ADDRESS_HASHKEY_USDC,
  symbol: 'USDC',
  decimals: 6,
  name: 'USDC',
  isCoin: false,
};

export const TOKENS_ETHEREUM = [TOKEN_ETHEREUM_OSYUSD, TOKEN_ETHEREUM_USDC];
export const TOKENS_BASE = [TOKEN_BASE_USDC];
export const TOKENS_HASHKEY = [TOKEN_HASHKEY_OSYUSD, TOKEN_HASHKEY_USDC];

export const TOKEN_MAP = {
  [TOKEN_ADDRESS_ETHEREUM_OSYUSD]: TOKEN_ETHEREUM_OSYUSD,
  [TOKEN_ADDRESS_ETHEREUM_USDC]: TOKEN_ETHEREUM_USDC,
  [TOKEN_ADDRESS_BASE_USDC]: TOKEN_BASE_USDC,
  [TOKEN_ADDRESS_HASHKEY_OSYUSD]: TOKEN_HASHKEY_OSYUSD,
  [TOKEN_ADDRESS_HASHKEY_USDC]: TOKEN_HASHKEY_USDC,
};

const TOKENS = [...TOKENS_ETHEREUM, ...TOKENS_BASE, ...TOKENS_HASHKEY];

export default TOKENS;
