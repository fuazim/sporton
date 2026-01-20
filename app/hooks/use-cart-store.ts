import { create } from "zustand";
import { Product } from "../types";
import { persist } from "zustand/middleware";

export interface CartItem extends Product {
    quantity: number;
}

export interface CustomerInfo {
    customerName: string;
    customerContact: string;
    customerAddress: string;
}

interface CartStore {
    customerInfo: CustomerInfo | null;
    items: CartItem[];
    setCustomerInfo: (info: CustomerInfo) => void;
    addItem: (product: Product, qty?: number) => void;
    removeItem: (productId: string) => void;
    reset: () => void;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            customerInfo: null,
            items: [],
            setCustomerInfo: (info) => {
                set({ customerInfo: info });
            },
            addItem: (product, qty = 1) => {
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
            removeItem: (productId) => {
                set({
                    items: get().items.filter(item => item._id !== productId)
                })
            },
            reset: () => {
                set({ 
                    customerInfo: null,
                    items: []
                })
            }
        }),
        {
            name: 'cart-storage',
        }
    )
)