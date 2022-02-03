import { atom } from 'jotai';

export interface ICart {
  [key: string] : {
    name: string
    img: string
    count: number
    price: string
  }
}
const cartState = atom<ICart>({});

export default cartState;
