import { useState } from "react";

export const useSnack = () => {
  const [snack, setSnack] = useState('');
  const showSnack = (message) => {
    try {
        setSnack(message)   
        setTimeout(()=>{ setSnack('') }, 1200);
    } catch (err) {
        setSnack(err.message);
    }
  };
  return [snack, showSnack];
};