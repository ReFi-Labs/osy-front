import React, { useCallback, useEffect, useState } from 'react';
import Dialog, { Props as DialogProps } from '@/components/Dialog';
import StatusIcon from '../StatusIcon';
import Button from '../Button';
import { ConnectedWallet, usePrivy } from '@privy-io/react-auth';
import {
  encodeApproveCallData,
  encodeDeposit,
  getUserOpByEthereum,
} from '@/libs/aa';
import axios from 'axios';
import { isNormalPositive } from '@/utils/number';
import { API_HOST_BUNDLER } from '@/configs/apiHost';

export interface Props extends DialogProps {
  isShow?: boolean;
  wallet?: ConnectedWallet;
  eoaAddress?: string;
  aaAddress?: string;
  balanceEthereumUsdc?: string;
  onDimClick?: () => void;
}

export default function DialogStake({
  isShow,
  wallet,
  eoaAddress,
  aaAddress,
  balanceEthereumUsdc,
  onDimClick,
  ...props
}: Props) {
  // privy
  const { signMessage } = usePrivy();

  // state
  const [confirmed, setConfirmed] = useState(false);

  // callback
  const handleClick = useCallback(async () => {
    if (
      !(
        wallet &&
        eoaAddress &&
        aaAddress &&
        balanceEthereumUsdc &&
        isNormalPositive(balanceEthereumUsdc, true)
      )
    ) {
      return;
    }

    setConfirmed(true);

    try {
      const depositAmount = balanceEthereumUsdc;
      const callDataInfo = [
        {
          dest: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
          func: await encodeApproveCallData(
            '0x7AA581F22C26098C0Baf6756d6a55F93439c2611',
            depositAmount,
            '6'
          ),
        },
        {
          dest: '0x7AA581F22C26098C0Baf6756d6a55F93439c2611',
          func: await encodeDeposit(aaAddress, depositAmount, '6'),
        },
      ];
      console.log('eoaAddress', eoaAddress);
      console.log('callDataInfo', callDataInfo);
      const userOpInfo = await getUserOpByEthereum(eoaAddress, callDataInfo);
      console.log('userOpInfo', userOpInfo);
      const userOp = userOpInfo.userOp;
      const userOpByHash = userOpInfo.userOpByHash as string;
      const message = userOpByHash;
      console.log('message', message);

      // Metamask 연동
      const { signature } = await signMessage({ message });
      userOp.signature = signature;
      console.log('userOp.signature', userOp.signature);

      try {
        const requestBody = {
          userOp: userOp,
          entryPointInput: '0x', // EntryPoint 컨트랙트 주소
        };

        const response = await axios.post(
          `${API_HOST_BUNDLER}/sendUserOperation`,
          requestBody
        );
        console.log('Response:', response.data);

        onDimClick?.();
      } catch (error) {
        throw error;
      }
    } catch (error) {
      console.log('error', error);
    }

    setConfirmed(false);
  }, [
    aaAddress,
    balanceEthereumUsdc,
    eoaAddress,
    onDimClick,
    signMessage,
    wallet,
  ]);
  const handleDimClick = useCallback(() => {
    if (confirmed) {
      return;
    }

    onDimClick?.();
  }, [confirmed, onDimClick]);

  // effect
  useEffect(() => {
    setConfirmed(false);
  }, [isShow]);

  return (
    <Dialog isShow={isShow} onDimClick={handleDimClick} {...props}>
      <div className="flex flex-col gap-4 w-[300px]">
        <div className="flex flex-col font-light text-center">
          {confirmed
            ? 'Waiting for wallet confirmation'
            : 'Do you want to stake ?'}

          {confirmed ? (
            <div className="pt-4">
              <StatusIcon value="progress" size="32px" />
            </div>
          ) : (
            ''
          )}
        </div>

        <Button className="w-[100%]" onClick={handleClick} disabled={confirmed}>
          Stake now
        </Button>
      </div>
    </Dialog>
  );
}
