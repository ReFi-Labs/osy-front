/* eslint-disable @next/next/no-img-element */
'use client';

import ImageUsdc from '@/assets/images/usdc.svg';
import SectionQr from './SectionQr';
import SectionStatus from './SectionStatus';
import { useWallets } from '@privy-io/react-auth';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  getAddressEthereum,
  getBalanceEthereumOsy,
  getBalanceBaseUsdc,
  getBalanceEthereumUsdc,
} from '@/libs/aa';
import SYNC_TERM from '@/configs/term';

export default function Earn() {
  // privy
  const { wallets } = useWallets();

  // state
  const [aaAddress, setAaAddress] = useState('');
  const [balanceEthereumOsy, setBalanceEthereumOsy] = useState('0');
  const [balanceBaseUsdc, setBalanceBaseUsdc] = useState('0');
  const [balanceEthereumUsdc, setBalanceEthereumUsdc] = useState('0');

  // memo
  const wallet = useMemo(() => wallets[0], [wallets]);
  const eoaAddress = useMemo(() => wallet?.address, [wallet]);

  // callback
  const syncBalance = useCallback(async () => {
    if (!aaAddress) {
      setBalanceEthereumOsy('0');
      setBalanceBaseUsdc('0');
      setBalanceEthereumUsdc('0');
      return;
    }

    const promises = [
      (async () => {
        try {
          const value = await getBalanceEthereumOsy(aaAddress);
          setBalanceEthereumOsy(value);
        } catch (error) {
          console.warn('getBalanceEthereumOsy.error', error);
          setBalanceEthereumOsy('0');
        }
      })(),
      (async () => {
        try {
          const value = await getBalanceBaseUsdc(aaAddress);
          setBalanceBaseUsdc(value);
        } catch (error) {
          console.warn('getBalanceBaseUsdc.error', error);
          setBalanceBaseUsdc('0');
        }
      })(),
      (async () => {
        try {
          const value = await getBalanceEthereumUsdc(aaAddress);
          setBalanceEthereumUsdc(value);
        } catch (error) {
          console.warn('getBalanceEthereumUsdc.error', error);
          setBalanceEthereumUsdc('0');
        }
      })(),
    ];

    Promise.all(promises);
  }, [aaAddress]);

  // effect
  useEffect(() => {
    if (!wallet) {
      setAaAddress('');
      return;
    }

    (async () => {
      const aaAddress = await getAddressEthereum(eoaAddress);
      setAaAddress(aaAddress);
    })();
  }, [eoaAddress, wallet]);
  useEffect(() => {
    syncBalance();

    const intervalId = setInterval(async () => {
      syncBalance();
    }, SYNC_TERM);

    return () => clearInterval(intervalId);
  }, [syncBalance]);

  return (
    <section className="flex flex-col gap-[128px] row-start-2 items-center justify-center">
      <h1 className="text-xl font-light">
        Stake your{' '}
        <span className="inline-flex items-center justify-center gap-2 text-4xl font-normal">
          USDC
          <img width={28} alt="" src={ImageUsdc.src} />
        </span>
      </h1>

      <div className="flex justify-center w-[900px]">
        <SectionQr
          wallet={wallet}
          eoaAddress={eoaAddress}
          aaAddress={aaAddress}
        />

        <SectionStatus
          wallet={wallet}
          eoaAddress={eoaAddress}
          aaAddress={aaAddress}
          balanceEthereumOsy={balanceEthereumOsy}
          balanceBaseUsdc={balanceBaseUsdc}
          balanceEthereumUsdc={balanceEthereumUsdc}
        />
      </div>
    </section>
  );
}
