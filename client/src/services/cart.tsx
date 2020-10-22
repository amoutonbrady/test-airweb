import {
  Component,
  createContext,
  createState,
  unwrap,
  useContext,
} from 'solid-js';
import type { Product } from '../interfaces/products';

function createCartStore(initialItems: Item[] = []) {
  const [state, setState] = createState<{ items: Item[] }>({
    items: initialItems,
  });

  return [
    state,
    {
      addToCart(product: Product) {
        const index = state.items.findIndex(
          (item) => item.product.id === product.id,
        );

        if (index < 0)
          setState('items', (items) => [...items, { quantity: 1, product }]);
        else setState('items', [index], 'quantity', (quantity) => quantity + 1);

        localStorage.setItem('items', JSON.stringify(unwrap(state.items)));
      },
      clearCart() {
        setState('items', []);
        localStorage.clear();
      },
      getItemsCount() {
        return state.items.reduce((acc, item) => acc + item.quantity, 0);
      },
      getTotal() {
        return state.items.reduce(
          (acc, item) => acc + item.quantity * item.product.price,
          0,
        );
      },
    },
  ] as const;
}

const CartContext = createContext<ReturnType<typeof createCartStore>>();

export const CartProvider: Component = (props) => {
  const initalItems = localStorage.getItem('items');
  const cartStore = createCartStore(initalItems ? JSON.parse(initalItems) : []);

  return (
    <CartContext.Provider value={cartStore}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

interface Item {
  quantity: number;
  product: Product;
}
