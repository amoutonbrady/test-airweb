import { Component, createResource, For, Suspense } from 'solid-js';
import { useCart } from '../services/cart';
import type { Category } from '../interfaces/products';
import { convertPrice } from '../utils/convertPrice';

const API = 'http://localhost:3000';
const PLACEHOLDER = 'https://via.placeholder.com/150';

const fetchCategories = () => {
  return fetch(`${API}/products`)
    .then((r) => r.json())
    .then((categories: Category[]) =>
      categories.sort((a, b) => (a.index < b.index ? 1 : -1)),
    );
};

const Home: Component = () => {
  const [, { addToCart }] = useCart();

  const [categories, loadCategories] = createResource<Category[]>([]);
  loadCategories(fetchCategories);

  return (
    <Suspense fallback={<p>Chargement des catégories...</p>}>
      <For each={categories()}>
        {(category) => (
          <main class="container mx-auto p-4">
            <h2 class="font-bold text-lg">{category.label}</h2>

            <section class="grid md:grid-cols-3 gap-6 mt-2">
              <For each={category.products}>
                {(product) => (
                  <article class="flex justify-between space-x-4 bg-white shadow rounded p-4">
                    <img
                      src={product.thumbnail_url || PLACEHOLDER}
                      class="block h-10 w-10 rounded-full bg-gray-100"
                    />

                    <div class="flex space-y-4 flex-col">
                      <h3 class="font-semibold">{product.label}</h3>
                      <p>{product.description}</p>
                    </div>

                    <div class="flex flex-col">
                      <span class="flex items-center justify-center font-bold rounded-full p-4 h-10 w-10 bg-gray-100">
                        {convertPrice(product.price)}
                      </span>
                      <button
                        type="button"
                        class="p-2 rounded uppercase font-semibold mt-auto bg-gray-900 text-gray-50 ml-auto"
                        onClick={() => addToCart(product)}
                      >
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
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </article>
                )}
              </For>
            </section>
          </main>
        )}
      </For>
    </Suspense>
  );
};

export default Home;
