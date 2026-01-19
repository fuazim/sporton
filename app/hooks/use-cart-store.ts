import { create } from "zustand";
import { Product } from "../types";
import { persist } from "zustand/middleware";

export interface CartItem extends Product {
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (product: Product, qty: number) => void;
    removeItem: (id: string) => void;
    reset: () => void;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product: Product, qty: number = 1) => {
                const items = get().items;
                const existingItem = items.find(item => item._id === product._id);
                if (existingItem) {
                    set({
                        items: items.map(item => item._id === product._id ? { ...item, quantity: item.quantity + qty } : item)
                    })
                } else {
                    set({
                        items: [...items, { ...product, quantity: qty }]
                    })
                }
            },
            removeItem: (productId: string) => {
                set({
                    items: get().items.filter(item => item._id !== productId)
                })
            },
            reset: () => {
                set({ items: [] })
            }
        }),
        {
            name: 'cart-storage',
        }
    )
)