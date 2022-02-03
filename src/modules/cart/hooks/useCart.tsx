/* eslint-disable max-len */
import { useAtom } from 'jotai';
import useRobot from 'modules/robot/hooks/useRobot';
import React from 'react';
import cartState, { ICart } from '../state/cartState';

interface IUseCart {
  carts: ICart
  increaseItem: (key: string) => void
  decreaseItem: (key: string) => void
  addToCart: (item: { name: string; img: string, price: string }) => void
  removeFromCart: (key: string) => void
  getTotal: () => number
}

function useCart(): IUseCart {
  const [carts, setCarts] = useAtom(cartState);
  const robots = useRobot();

  const increaseItem = React.useCallback((key: string): void => {
    // if cart item count and stock count are the same, quit
    if (robots && (carts[key].count === robots.robotStock[key]
      || robots?.robotStock[key] === 0)
    ) {
      return undefined;
    }
    const itemToUpdate = carts[key];
    carts[key].count += 1;
    setCarts({ ...carts, [key]: itemToUpdate });
    return undefined;
  }, [carts, robots, setCarts]);

  const decreaseItem = React.useCallback((key: string): void => {
    const itemToUpdate = carts[key];
    if (carts[key].count > 1) { carts[key].count -= 1; }
    setCarts({ ...carts, [key]: itemToUpdate });
  }, [carts, setCarts]);

  const addToCart = React.useCallback((item: { name: string; img: string, price: string }): void => {
    if (robots && robots.robotStock[item.name] === 0) return undefined;
    if (Object.keys(carts).length > 4 && !carts[item.name]) {
      // eslint-disable-next-line no-alert
      alert('You cannot buy more than 5 types of robot');
      return undefined;
    }
    if (!carts[item.name]) { setCarts({ ...carts, [item.name]: { ...item, count: 1 } }); } else {
      increaseItem(item.name);
    }
    return undefined;
  }, [carts, increaseItem, robots, setCarts]);

  const removeFromCart = React.useCallback((key: string): void => {
    const copyCart = { ...carts };
    delete copyCart[key];
    setCarts(copyCart);
  }, [carts, setCarts]);

  const getTotal = (): number => {
    let total = 0;
    Object.keys(carts).forEach((key) => {
      total += (carts[key].count * +carts[key].price);
    });
    return +total.toFixed(2);
  };

  return {
    carts,
    increaseItem,
    decreaseItem,
    addToCart,
    removeFromCart,
    getTotal,
  };
}

export default useCart;
