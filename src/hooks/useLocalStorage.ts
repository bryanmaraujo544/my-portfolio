import { useCallback, useState } from 'react';

export const useLocalStorage = (key: string, initialValue: any) => {
  const [state, setState] = useState(() => {
    try {
      const valueStoraged = localStorage.getItem(key);

      return valueStoraged ? JSON.parse(valueStoraged) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  // prettier-ignore
  const setValue = useCallback((value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    } catch (err) {
      console.log(err);
    }
  }, [key]);

  return [state, setValue];
};
