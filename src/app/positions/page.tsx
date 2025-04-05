'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import CurrentStatus from './CurrentStatus';
import RebalanceHistory from './RebalanceHistory';
import { formatCommas, formatUnit } from '@/utils/format';
import FORCE_AVERAGE_APY, {
  FORCE_AVERAGE_APY_STORAGE_ID,
} from '@/configs/forceAverageApy';
import { isNormalPositive } from '@/utils/number';
import { API_HOST_API } from '@/configs/apiHost';
import SYNC_TERM from '@/configs/term';
import axios from 'axios';
import History from '@/types/History';

export default function Positions() {
  // state
  const [apyHistories, setApyHistories] = useState<
    {
      protocolId: number;
      chainId: number;
      apy: number;
      timestamp: number;
    }[]
  >([]);
  const [rebalanceHistories, setRebalanceHistories] = useState<History[]>([]);

  // memo
  const forceAverageApyStorage = useMemo(
    () =>
      parseFloat(
        (typeof window === 'object'
          ? window?.localStorage.getItem(FORCE_AVERAGE_APY_STORAGE_ID)
          : '0') ?? '0'
      ),
    []
  );
  const averageApy = useMemo(
    () =>
      isNormalPositive(forceAverageApyStorage, true)
        ? forceAverageApyStorage
        : isNormalPositive(FORCE_AVERAGE_APY, true)
          ? FORCE_AVERAGE_APY
          : 13.1,
    [forceAverageApyStorage]
  );
  const totalAverageApy = useMemo(
    () =>
      isNormalPositive(forceAverageApyStorage, true)
        ? forceAverageApyStorage
        : isNormalPositive(FORCE_AVERAGE_APY, true)
          ? FORCE_AVERAGE_APY
          : averageApy,
    [averageApy, forceAverageApyStorage]
  );

  // callback
  const syncApyHistories = useCallback(async () => {
    const { data: apyHistories } = await axios.get<
      {
        protocolId: number;
        chainId: number;
        apy: number;
        timestamp: number;
      }[]
    >(`${API_HOST_API}/apy-history`);
    setApyHistories(apyHistories);
  }, []);
  const syncRebalanceHistories = useCallback(async () => {
    const { data: rebalanceHistories } = await axios.get<
      {
        amount: number;
        dstChainId: number;
        dstProtocolId: number;
        improvementApy: number;
        srcChainId: number;
        srcProtocolId: number;
        timestamp: number;
        txHash: string;
      }[]
    >(`${API_HOST_API}/rebalance-history`);
    setRebalanceHistories(
      rebalanceHistories.map(
        ({
          txHash,
          srcChainId,
          srcProtocolId,
          dstChainId,
          dstProtocolId,
          amount,
          timestamp,
        }) => ({
          txHash,
          from: { chain: srcChainId, dex: srcProtocolId },
          to: { chain: dstChainId, dex: dstProtocolId },
          amount: formatUnit(amount, 6).toFixed(6),
          time: timestamp,
        })
      )
    );
  }, []);

  // effect
  useEffect(() => {
    syncApyHistories();
    syncRebalanceHistories();

    const intervalId = setInterval(async () => {
      syncApyHistories();
      syncRebalanceHistories();
    }, SYNC_TERM);

    return () => clearInterval(intervalId);
  }, [syncApyHistories, syncRebalanceHistories]);

  return (
    <section className="flex flex-col gap-[128px] row-start-2 items-center justify-center">
      <h1 className="text-xl font-light">
        Total Average APY{' '}
        <span className="text-4xl font-normal">
          {formatCommas(totalAverageApy)}
        </span>
        %
      </h1>

      <div className="flex flex-col gap-[64px] items-center justify-center w-[900px] font-light">
        <div className="w-[100%]">
          <CurrentStatus histories={apyHistories} />
        </div>

        <div className="w-[100%]">
          <RebalanceHistory histories={rebalanceHistories} />
        </div>
      </div>
    </section>
  );
}
