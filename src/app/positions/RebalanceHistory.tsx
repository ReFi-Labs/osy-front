'use client';

import Card from '@/components/Card';
import Table from '@/components/Table';
import History from '@/types/History';
import { address2shorted, formatCommas } from '@/utils/format';
import CHAINS from '@/configs/chains';

export default function RebalanceHistory({
  histories,
}: {
  histories?: History[];
}) {
  // callback
  // const handleCopyClick = useCallback(
  //   (value?: string) => () => {
  //     if (!value) {
  //       return;
  //     }

  //     clipboardCopy(value);
  //   },
  //   []
  // );

  return (
    <>
      <h2 className="text-xl pb-4">Rebalance History</h2>

      <Card>
        <Table>
          <thead>
            <tr>
              <th>TX Hash</th>
              <th>From To</th>
              <th>Amount</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {histories?.map(({ txHash, from, to, amount, time }, index) => (
              <tr key={index}>
                <td>
                  <a
                    className="transition-opacity cursor-pointer hover:opacity-50"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`${CHAINS.find(({ id }) => id === from.chain)?.explorerUrl ?? ''}/tx/${txHash}`}
                  >
                    {address2shorted(txHash)}
                  </a>
                </td>
                <td className="font-medium">
                  {from.dex === 0 ? 'Aave' : 'Compound'}
                  <span className="text-xs font-light">
                    (
                    {CHAINS.find(({ id }) => id === from.chain)?.name ??
                      'Unknwon'}
                    )
                  </span>{' '}
                  → {to.dex === 0 ? 'Aave' : 'Compound'}
                  <span className="text-xs font-light">
                    (
                    {CHAINS.find(({ id }) => id === to.chain)?.name ??
                      'Unknwon'}
                    )
                  </span>
                </td>
                <td>{formatCommas(amount)}</td>
                <td>{new Date(time).toUTCString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
}
