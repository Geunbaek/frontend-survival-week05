import axios from 'axios';

import { useInterval, useLocalStorage } from 'usehooks-ts';

import type { AxiosResponse } from 'axios';
import type { Receipt, RestaurantMenu } from '../types';

interface UseOrderProps {
  menu: RestaurantMenu[];
  totalPrice: number;
}

export default function useOrder() {
  const [receipt, setReceipt] = useLocalStorage<Receipt | null>(
    'receipt',
    null,
  );

  const handleOrder = async ({ menu, totalPrice }: UseOrderProps) => {
    const response: AxiosResponse<{ receipt: Receipt }> = await axios.post(
      'http://localhost:3000/orders',
      { menu, totalPrice },
      { headers: { 'Content-Type': 'Application/json' } },
    );
    const { data } = response;
    setReceipt(data.receipt);
  };

  useInterval(
    () => {
      setReceipt(null);
    },
    receipt ? 5000 : null,
  );

  return { receipt, onOrder: handleOrder };
}
