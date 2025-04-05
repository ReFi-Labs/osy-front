import Protocol from '@/types/Protocol';

export const PROTOCOL_ID_AAVE = 0;
export const PROTOCOL_ID_COMPOUND = 1;

export const PROTOCOL_AAVE: Protocol = {
  id: PROTOCOL_ID_AAVE,
  name: 'Aave',
};
export const PROTOCOL_COMPOUND: Protocol = {
  id: PROTOCOL_ID_COMPOUND,
  name: 'Compound',
};

export const PROTOCOL_MAP = {
  [PROTOCOL_ID_AAVE]: PROTOCOL_AAVE,
  [PROTOCOL_ID_COMPOUND]: PROTOCOL_COMPOUND,
};

const PROTOCOLS = [PROTOCOL_AAVE, PROTOCOL_COMPOUND];

export default PROTOCOLS;
