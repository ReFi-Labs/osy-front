'use client';

import Card from '@/components/Card';
import Table from '@/components/Table';
import { CHAIN_ID_BASE, CHAIN_ID_ETHEREUM } from '@/configs/chains';
import { formatCommas } from '@/utils/format';
import { useMemo } from 'react';

export default function CurrentStatus({
  histories,
}: {
  histories?: {
    protocolId: number;
    chainId: number;
    apy: number;
    timestamp: number;
  }[];
}) {
  // memo
  const amountEthereumAave = useMemo(
    () =>
      histories?.find(
        ({ protocolId, chainId }) =>
          protocolId === 0 && chainId === CHAIN_ID_ETHEREUM
      )?.apy ?? 0,
    [histories]
  );
  const amountBaseAave = useMemo(
    () =>
      histories?.find(
        ({ protocolId, chainId }) =>
          protocolId === 0 && chainId === CHAIN_ID_BASE
      )?.apy ?? 0,
    [histories]
  );
  const amountEthereumCompound = useMemo(
    () =>
      histories?.find(
        ({ protocolId, chainId }) =>
          protocolId !== 0 && chainId === CHAIN_ID_ETHEREUM
      )?.apy ?? 0,
    [histories]
  );
  const amountBaseCompound = useMemo(
    () =>
      histories?.find(
        ({ protocolId, chainId }) =>
          protocolId !== 0 && chainId === CHAIN_ID_BASE
      )?.apy ?? 0,
    [histories]
  );

  return (
    <>
      <h2 className="text-xl pb-4">Current Status</h2>

      <Card>
        <Table>
          <thead>
            <tr>
              <th />
              <th>Ethereum</th>
              <th>Base</th>
              <th>BSC</th>
              <th>Base</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Aave</th>
              <td>{formatCommas(amountEthereumAave)}%</td>
              <td>{formatCommas(amountBaseAave)}%</td>
              <td className="text-sm text-center" rowSpan={2}>
                Coming <br />
                soon
              </td>
              <td className="text-sm text-center" rowSpan={2}>
                Coming <br />
                soon
              </td>
            </tr>
            <tr>
              <th>Compound</th>
              <td>{formatCommas(amountEthereumCompound)}%</td>
              <td>{formatCommas(amountBaseCompound)}%</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </>
  );
}
