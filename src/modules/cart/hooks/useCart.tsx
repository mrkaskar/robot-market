/* eslint-disable max-len */
import { useAtom } from 'jotai';
import React from 'react';
import cartState, { ICart } from '../state/cartState';

interface IUseCart {
  carts: ICart
  increaseItem: (key: string) => void
  decreaseItem: (key: string) => void
  addToCart: (item: { name: string; img: string, price: string }) => void
  removeFromCart: (key: string) => void
}

function useCart(): IUseCart {
  const [carts, setCarts] = useAtom(cartState);

  const increaseItem = React.useCallback((key: string): void => {
    const itemToUpdate = carts[key];
    carts[key].count += 1;
    setCarts({ ...carts, [key]: itemToUpdate });
  }, [carts, setCarts]);
  const decreaseItem = React.useCallback((key: string): void => {
    const itemToUpdate = carts[key];
    if (carts[key].count > 1) { carts[key].count -= 1; }
    setCarts({ ...carts, [key]: itemToUpdate });
  }, [carts, setCarts]);
  const addToCart = React.useCallback((item: { name: string; img: string, price: string }): void => {
    if (!carts[item.name]) { setCarts({ ...carts, [item.name]: { ...item, count: 1 } }); } else {
      increaseItem(item.name);
    }
  }, [carts, increaseItem, setCarts]);

  const removeFromCart = React.useCallback((key: string): void => {
    const copyCart = { ...carts };
    delete copyCart[key];
    setCarts(copyCart);
  }, [carts, setCarts]);

  return {
    carts,
    increaseItem,
    decreaseItem,
    addToCart,
    removeFromCart,
  };
}

export default useCart;
