'use client'

import React, {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useCallback,
} from 'react'
import { Product, ProductVolumeSize } from '@/constant/productList.constant'

export interface CartItem {
    product: Product
    size: ProductVolumeSize
    quantity: number
}

interface CartState {
    items: CartItem[]
}

type CartAction =
    | { type: 'ADD_ITEM'; product: Product; size: ProductVolumeSize }
    | { type: 'REMOVE_ITEM'; productId: number; size: ProductVolumeSize }
    | {
          type: 'UPDATE_QTY'
          productId: number
          size: ProductVolumeSize
          quantity: number
      }
    | { type: 'CLEAR' }
    | { type: 'HYDRATE'; items: CartItem[] }

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'HYDRATE':
            return { items: action.items }

        case 'ADD_ITEM': {
            const existing = state.items.find(
                (i) =>
                    i.product.id === action.product.id &&
                    i.size === action.size,
            )
            if (existing) {
                return {
                    items: state.items.map((i) =>
                        i.product.id === action.product.id &&
                        i.size === action.size
                            ? { ...i, quantity: i.quantity + 1 }
                            : i,
                    ),
                }
            }

            return {
                items: [
                    ...state.items,
                    { product: action.product, size: action.size, quantity: 1 },
                ],
            }
        }

        case 'REMOVE_ITEM':
            return {
                items: state.items.filter(
                    (i) =>
                        !(
                            i.product.id === action.productId &&
                            i.size === action.size
                        ),
                ),
            }

        case 'UPDATE_QTY':
            if (action.quantity <= 0) {
                return {
                    items: state.items.filter(
                        (i) =>
                            !(
                                i.product.id === action.productId &&
                                i.size === action.size
                            ),
                    ),
                }
            }

            return {
                items: state.items.map((i) =>
                    i.product.id === action.productId && i.size === action.size
                        ? { ...i, quantity: action.quantity }
                        : i,
                ),
            }

        case 'CLEAR':
            return { items: [] }

        default:
            return state
    }
}

interface CartContextValue {
    items: CartItem[]
    totalCount: number
    totalPrice: number
    addItem: (product: Product, size: ProductVolumeSize) => void
    removeItem: (productId: number, size: ProductVolumeSize) => void
    updateQty: (
        productId: number,
        size: ProductVolumeSize,
        quantity: number,
    ) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'jinn_cart'

export function CartProvider({
    children,
}: {
    children: React.ReactNode
}): React.JSX.Element {
    const [state, dispatch] = useReducer(cartReducer, { items: [] })

    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY)
            if (raw) {
                const parsed = JSON.parse(raw) as CartItem[]
                if (Array.isArray(parsed)) {
                    dispatch({ type: 'HYDRATE', items: parsed })
                }
            }
        } catch {
            // ignore corrupt storage
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    }, [state.items])

    const addItem = useCallback(
        (product: Product, size: ProductVolumeSize) =>
            dispatch({ type: 'ADD_ITEM', product, size }),
        [],
    )

    const removeItem = useCallback(
        (productId: number, size: ProductVolumeSize) =>
            dispatch({ type: 'REMOVE_ITEM', productId, size }),
        [],
    )

    const updateQty = useCallback(
        (productId: number, size: ProductVolumeSize, quantity: number) =>
            dispatch({ type: 'UPDATE_QTY', productId, size, quantity }),
        [],
    )

    const clearCart = useCallback(() => dispatch({ type: 'CLEAR' }), [])

    const totalCount = state.items.reduce((sum, i) => sum + i.quantity, 0)
    const totalPrice = state.items.reduce(
        (sum, i) =>
            sum +
            i.product.price[i.size as '8ml' | '50ml'].salePrice * i.quantity,
        0,
    )

    return (
        <CartContext.Provider
            value={{
                items: state.items,
                totalCount,
                totalPrice,
                addItem,
                removeItem,
                updateQty,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): CartContextValue {
    const ctx = useContext(CartContext)
    if (!ctx) {
        throw new Error('useCart must be used within CartProvider')
    }

    return ctx
}
