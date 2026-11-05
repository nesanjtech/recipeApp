import React from 'react';

export const useDebounce = (value, delay) => {
    const [debounce, setDebounce] = React.useState(value);
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(value)
        },delay)

        return () => clearInterval(timer)
    },[value, delay])
  return debounce;
};
