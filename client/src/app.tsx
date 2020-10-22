import { Link, Route } from '@amoutonbrady/solid-tiny-router';
import { Component, Show, Switch } from 'solid-js';
import Home from './pages/home';
import Cart from './pages/cart';
import { useCart } from './services/cart';

export const App: Component = () => {
  const [, { getItemsCount }] = useCart();

  return (
    <div>
      <header class="flex justify-between p-4 mb-10 container mx-auto">
        <Link path="/">
          <h1 class="text-2xl font-bold">AchèteTout</h1>
        </Link>

        <Link path="/cart" class="relative">
          <span class="sr-only">Accéder au panier</span>
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>

          <Show when={getItemsCount() > 0}>
            <span class="absolute top-full left-full transform -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full text-xs font-bold bg-gray-900 text-gray-50 flex items-center justify-center">
              {getItemsCount()}
            </span>
          </Show>
        </Link>
      </header>

      <Switch fallback={<p>404</p>}>
        <Route path="/" children={<Home />} />
        <Route path="/cart" children={<Cart />} />
      </Switch>
    </div>
  );
};
