import { useCallback, useState } from 'react';

export const useLocalStorage = (key: string, initialValue: any) => {
  const [state, setState] = useState(() => {
    try {
      const valueStoraged = localStorage.getItem(key);
      console.log('a', JSON.parse(valueStoraged as any));

      return valueStoraged ? JSON.parse(valueStoraged) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  console.log(key, state);

  // prettier-ignore
  const setValue = useCallback((value) => {
    console.log({ value });
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    } catch (err) {
      console.log(err);
    }
  }, [key]);

  return [state, setValue];
};
