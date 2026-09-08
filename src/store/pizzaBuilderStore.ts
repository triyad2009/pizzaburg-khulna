import { create } from 'zustand';
import { PizzaCreation } from '@/types';
import { DEFAULT_PIZZA_SIZES, DEFAULT_PIZZA_CRUSTS, DEFAULT_PIZZA_SAUCES, DEFAULT_PIZZA_CHEESES } from '@/lib/constants';
import { calculatePizzaPrice } from '@/lib/utils';

interface PizzaBuilderState {
  basePrice: number;
  size: string | null;
  crust: string | null;
  sauce: string | null;
  cheese: string | null;
  toppings: string[];
  totalPrice: number;
  setSizeModifier: (sizeId: string, modifier: number) => void;
  setCrustModifier: (crustId: string, modifier: number) => void;
  setSauce: (sauceId: string) => void;
  setCheese: (cheeseId: string, modifier: number) => void;
  addTopping: (topping: string) => void;
  removeTopping: (topping: string) => void;
  updateTotalPrice: () => void;
  reset: () => void;
}

export const usePizzaBuilderStore = create<PizzaBuilderState>((set, get) => ({
  basePrice: 300,
  size: 'medium',
  crust: 'regular',
  sauce: 'tomato',
  cheese: 'mozzarella',
  toppings: [],
  totalPrice: 300,
  setSizeModifier: (sizeId, modifier) => {
    set({ size: sizeId });
    get().updateTotalPrice();
  },
  setCrustModifier: (crustId, modifier) => {
    set({ crust: crustId });
    get().updateTotalPrice();
  },
  setSauce: (sauceId) => {
    set({ sauce: sauceId });
  },
  setCheese: (cheeseId, modifier) => {
    set({ cheese: cheeseId });
    get().updateTotalPrice();
  },
  addTopping: (topping) => {
    const { toppings } = get();
    if (!toppings.includes(topping)) {
      set({ toppings: [...toppings, topping] });
      get().updateTotalPrice();
    }
  },
  removeTopping: (topping) => {
    const { toppings } = set((state) => ({
      toppings: state.toppings.filter((t) => t !== topping),
    }));
    get().updateTotalPrice();
  },
  updateTotalPrice: () => {
    const { basePrice } = get();
    // TODO: Calculate based on selections
    set({ totalPrice: basePrice });
  },
  reset: () => {
    set({
      basePrice: 300,
      size: 'medium',
      crust: 'regular',
      sauce: 'tomato',
      cheese: 'mozzarella',
      toppings: [],
      totalPrice: 300,
    });
  },
}));
