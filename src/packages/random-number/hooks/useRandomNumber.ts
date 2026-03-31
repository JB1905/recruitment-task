import { useEffect, useState } from 'react';

import { INTERVAL_MS } from '../constants';
import { getRandomNumber } from '../utils/getRandomNumber';

export const useRandomNumber = () => {
  const [value, setValue] = useState(getRandomNumber);

  useEffect(() => {
    const id = setInterval(() => setValue(getRandomNumber()), INTERVAL_MS);

    return () => clearInterval(id);
  }, []);

  return { value };
};
