import React, { useState } from 'react';
import { ShoppingBag, Plus, Minus, Check, ShoppingCart, X, Trash2, ArrowRight, CheckCircle2, CreditCard } from 'lucide-react';

export interface FruitItem {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  unit: string;
  image: string;
  badge?: string;
}

export const fruitsData: FruitItem[] = [
  {
    id: 'apple',
    name: 'Red Gala Apples',
    price: '$2.49',
    numericPrice: 2.49,
    unit: 'per lb',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80',
    badge: 'Fresh Harvest'
  },
  {
    id: 'banana',
    name: 'Organic Bananas',
    price: '$0.99',
    numericPrice: 0.99,
    unit: 'per lb',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular'
  },
  {
    id: 'orange',
    name: 'Juicy Valencia Oranges',
    price: '$1.99',
    numericPrice: 1.99,
    unit: 'per lb',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'strawberry',
    name: 'Sweet Strawberries',
    price: '$3.99',
    numericPrice: 3.99,
    unit: 'per box',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80',
    badge: 'Organic'
  },
  {
    id: 'blueberry',
    name: 'Fresh Blueberries',
    price: '$4.49',
    numericPrice: 4.49,
    unit: 'per box',
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mango',
    name: 'Tropical Mangoes',
    price: '$1.79',
    numericPrice: 1.79,
    unit: 'each',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80',
    badge: 'Sweet'
  },
  {
    id: 'watermelon',
    name: 'Fresh Seedless Watermelon',
    price: '$5.99',
    numericPrice: 5.99,
    unit: 'each',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'grapes',
    name: 'Crisp Green Grapes',
    price: '$2.99',
    numericPrice: 2.99,
    unit: 'per lb',
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pineapple',
    name: 'Golden Sweet Pineapple',
    price: '$3.49',
    numericPrice: 3.49,
    unit: 'each',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'peach',
    name: 'Ripc Peach Harvest',
    price: '$2.89',
    numericPrice: 2.89,
    unit: 'per lb',
    image: 'https://images.unsplash.com/photo-1629828874514-c1e5103f2ba6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kiwi',
    name: 'Fresh Kiwifruit',
    price: '$1.29',
    numericPrice: 1.29,
    unit: 'each',
    image: 'https://images.unsplash.com/photo-1585059819970-313886362896?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'lemon',
    name: 'Fresh Yellow Lemons',
    price: '$0.89',
    numericPrice: 0.89,
    unit: 'each',
    image: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?auto=format&fit=crop&w=600&q=80'
  }
];

export const FruitGrid: React.FC = () => {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({ name: '', email: '', address: '', paymentMethod: 'card' });

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const updated = Math.max(0, current + delta);
      if (updated === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: updated };
    });

    if (delta > 0) {
      setAddedItem(id);
      setTimeout(() => setAddedItem(null), 1500);
    }
  };

  const removeItem = (id: string) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const counts = Object.values(cart) as number[];
  const totalItems: number = counts.reduce((sum, count) => sum + count, 0);
  const rawTotalPrice: number = (Object.entries(cart) as [string, number][]).reduce((sum, [id, count]) => {
    const item = fruitsData.find((f) => f.id === id);
    return sum + (item ? item.numericPrice * count : 0);
  }, 0);
  const totalPrice = Math.round(rawTotalPrice * 100) / 100;

  const cartList = (Object.entries(cart) as [string, number][])
    .map(([id, count]) => ({
      fruit: fruitsData.find((f) => f.id === id)!,
      count
    }))
    .filter((item) => Boolean(item.fruit));

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrderPlaced(true);
    setCart({});
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-8 mb-10 gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-2">
            What you can buy
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
            what can i help with you today
          </p>
        </div>

        {/* ACTION BUTTONS: VIEW CART & CHECKOUT */}
        <div className="flex items-center gap-3 self-start sm:self-auto flex-wrap">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm transition-all cursor-pointer border border-slate-200 dark:border-slate-700 shadow-xs"
          >
            <ShoppingCart className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>View Cart</span>
            {totalItems > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-indigo-600 text-white font-extrabold text-xs ml-1">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => {
              if (totalItems > 0) {
                setIsCheckoutOpen(true);
              } else {
                setIsCartOpen(true);
              }
            }}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/25 active:scale-95 transition-all cursor-pointer"
          >
            <CreditCard className="w-5 h-5" />
            <span>Checkout</span>
            {totalItems > 0 && (
              <span className="ml-1 text-xs opacity-90 font-extrabold">
                (${totalPrice.toFixed(2)})
              </span>
            )}
          </button>
        </div>
      </div>

      {/* FRUIT PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {fruitsData.map((fruit) => {
          const quantity = cart[fruit.id] || 0;
          const isJustAdded = addedItem === fruit.id;

          return (
            <div
              key={fruit.id}
              className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={fruit.image}
                  alt={fruit.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {fruit.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-slate-950/75 text-white backdrop-blur-md border border-white/10 shadow-xs">
                    {fruit.badge}
                  </span>
                )}
              </div>

              {/* CARD CONTENT */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {fruit.name}
                  </h3>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-xl font-black text-slate-900 dark:text-white">
                      {fruit.price}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {fruit.unit}
                    </span>
                  </div>
                </div>

                {/* QUANTITY & CART CONTROLS */}
                <div className="pt-2">
                  {quantity === 0 ? (
                    <button
                      onClick={() => updateQuantity(fruit.id, 1)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-indigo-600 dark:bg-slate-800 dark:hover:bg-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 shadow-xs"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add to Order</span>
                    </button>
                  ) : (
                    <div className="flex items-center justify-between p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                      <button
                        onClick={() => updateQuantity(fruit.id, -1)}
                        className="p-1.5 rounded-lg bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 cursor-pointer transition-colors"
                        title="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-black text-slate-900 dark:text-white px-2">
                        {quantity} in cart
                      </span>
                      <button
                        onClick={() => updateQuantity(fruit.id, 1)}
                        className="p-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer transition-colors"
                        title="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {isJustAdded && (
                    <div className="mt-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 justify-center animate-fade-in">
                      <Check className="w-3.5 h-3.5" />
                      <span>Added to cart!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CART DRAWER / MODAL */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end transition-opacity">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 dark:border-slate-800">
            {/* CART HEADER */}
            <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingCart className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-xl font-black text-slate-900 dark:text-white">Your Shopping Cart</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* CART ITEMS LIST */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
              {cartList.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Your cart is empty</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                    Explore our fresh fruit selection and click "Add to Order"!
                  </p>
                </div>
              ) : (
                cartList.map(({ fruit, count }) => (
                  <div
                    key={fruit.id}
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60"
                  >
                    <img
                      src={fruit.image}
                      alt={fruit.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 object-cover rounded-xl shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">{fruit.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{fruit.price} {fruit.unit}</p>
                      <p className="text-xs font-black text-indigo-600 dark:text-indigo-400 mt-1">
                        Subtotal: ${(fruit.numericPrice * count).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                        <button
                          onClick={() => updateQuantity(fruit.id, -1)}
                          className="p-1 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-slate-900 dark:text-white">{count}</span>
                        <button
                          onClick={() => updateQuantity(fruit.id, 1)}
                          className="p-1 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(fruit.id)}
                        className="p-1.5 text-rose-500 hover:text-rose-700 dark:hover:text-rose-400 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* CART FOOTER */}
            {cartList.length > 0 && (
              <div className="p-5 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 space-y-4">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Items ({totalItems})</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Standard Delivery</span>
                    <span className="text-emerald-600 font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between text-base font-black text-slate-900 dark:text-white pt-2 border-t border-slate-200 dark:border-slate-800">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full py-3.5 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer active:scale-98 transition-all"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CHECKOUT MODAL PAGE */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 relative">
            <button
              onClick={() => {
                setIsCheckoutOpen(false);
                setIsOrderPlaced(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {isOrderPlaced ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">Order Confirmed!</h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for your purchase, <strong className="text-slate-900 dark:text-white">{checkoutForm.name || 'Valued Customer'}</strong>. Your fresh fruit delivery is on its way!
                </p>
                <button
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    setIsOrderPlaced(false);
                    setCheckoutForm({ name: '', email: '', address: '', paymentMethod: 'card' });
                  }}
                  className="mt-4 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm cursor-pointer shadow-md"
                >
                  Return to Shop
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="space-y-5">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    <span>Checkout Page</span>
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Fill out your shipping and payment details below.
                  </p>
                </div>

                {/* ORDER SUMMARY PREVIEW */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400">
                    <span>Order Summary ({totalItems} items)</span>
                    <button
                      type="button"
                      onClick={() => {
                        setIsCheckoutOpen(false);
                        setIsCartOpen(true);
                      }}
                      className="text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                    >
                      Edit Cart
                    </button>
                  </div>
                  <div className="text-xl font-black text-slate-900 dark:text-white">
                    Total: ${totalPrice.toFixed(2)}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={checkoutForm.name}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={checkoutForm.email}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Delivery Address</label>
                    <textarea
                      required
                      rows={2}
                      value={checkoutForm.address}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                      placeholder="456 Fresh Orchard Lane, Suite 100, San Francisco, CA"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/30 cursor-pointer active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  <span>Complete Order (${totalPrice.toFixed(2)})</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
