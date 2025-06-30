import { OrderItem } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem extends OrderItem {
  quantity: number;
}

interface Cart {
  items: CartItem[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
}

const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
};

interface CartState {
  cart: Cart;
  addItem: (item: OrderItem, quantity: number) => Promise<void>;
  updateItem: (itemId: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  init: () => void;
}

const calculateCart = (items: CartItem[]) => {
  const itemsPrice = items.reduce(
    (acc, item) => acc + item.quantity * parseFloat(item.discount_price),
    0
  );
  const taxPrice = Number((itemsPrice * 0.1).toFixed(2));
  const shippingPrice = items.length > 0 ? 5 : 0;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return {
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  };
};

const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cart: initialState,

      addItem: async (item, quantity) => {
        const { items } = get().cart;

        const existingItem = items.find((x) => x.productId === item.productId);

        if (existingItem) {
          const newQty = existingItem.quantity + quantity;
          if (newQty > item.stock) throw new Error("Not enough stock");

          const updatedItems = items.map((x) =>
            x.productId === item.productId ? { ...x, quantity: newQty } : x
          );

          const prices = calculateCart(updatedItems);
          set({ cart: { ...get().cart, items: updatedItems, ...prices } });
        } else {
          if (quantity > item.stock) throw new Error("Not enough stock");

          const newItem = { ...item, quantity };
          const updatedItems = [...items, newItem];

          const prices = calculateCart(updatedItems);
          set({ cart: { ...get().cart, items: updatedItems, ...prices } });
        }
      },

      updateItem: (itemId, quantity) => {
        const { items } = get().cart;
        const updatedItems = items.map((x) =>
          x.clientId === itemId ? { ...x, quantity } : x
        );
        const prices = calculateCart(updatedItems);
        set({ cart: { ...get().cart, items: updatedItems, ...prices } });
      },

      removeItem: (itemId) => {
        const { items } = get().cart;
        const updatedItems = items.filter((x) => x.clientId !== itemId);
        const prices = calculateCart(updatedItems);
        set({ cart: { ...get().cart, items: updatedItems, ...prices } });
      },

      clearCart: () => set({ cart: initialState }),
      init: () => set({ cart: initialState }),
    }),
    { name: "cart-store" }
  )
);

export default useCartStore;
