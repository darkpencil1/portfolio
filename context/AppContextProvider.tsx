"use client";
import React, { ReactNode, useReducer, createContext, useEffect } from "react";

import cartReducer, {
  initialCartState,
  CartAction,
  CartState,
  CartItem,
} from "./reducers/cartReducer";

import productReducer, {
  initialProductState,
  ProductAction,
  ProductState,
} from "./reducers/productReducer";
import IProduct from "@/types/ProductInterface";

// Define the combined state and action types
type AppState = {
  cart: CartState;
  product: ProductState;
};

type AppAction = CartAction | ProductAction;

// Combine initial states
const initialState: AppState = {
  cart: initialCartState,
  product: initialProductState,
};

// Combine reducers
const appReducer = (state: AppState, action: AppAction): AppState => {
  return {
    cart: cartReducer(state.cart, action as CartAction),
    product: productReducer(state.product, action as ProductAction),
  };
};

interface AppContextProps {
  state: AppState;
  fetchProduct: (productId: IProduct["id"]) => void;
  addItemToCart: (cartItem: CartItem) => void;
  changeItemQuantity: (addItem: boolean, cartItem: CartItem) => void;
  removeCartItem: (cartItem: CartItem) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  //Initialize state and get cart state from localStorage if available
  const [state, dispatch] = useReducer(appReducer, initialState, (initial) => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? { ...initial, cart: JSON.parse(savedCart) } : initial;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const fetchProduct = async (id: number) => {
    dispatch({ type: "FETCH_PRODUCT_REQUEST", productId: id });
    try {
      //const response = await axios.get(`/api/product/${id}`);
      //const data: IProduct = await response.data;
      //dispatch({ type: "FETCH_PRODUCT_SUCCESS", payload: {} });
    } catch (error) {
      dispatch({ type: "FETCH_PRODUCT_FAILURE", payload: error });
    }
  };

  const addItemToCart = (cartItem: CartItem) => {
    dispatch({ type: "ADD_ITEM", cartItem });
  };

  const changeItemQuantity = (addItem: boolean, cartItem: CartItem) => {
    addItem
      ? dispatch({ type: "INCREASE_QUANTITY", cartId: cartItem.cartId })
      : dispatch({ type: "DECREASE_QUANTITY", cartId: cartItem.cartId });
  };

  const removeCartItem = (cartItem: CartItem) => {
    dispatch({ type: "REMOVE_ITEM", cartId: cartItem.cartId });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        fetchProduct,
        addItemToCart,
        changeItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

export { AppContext, AppContextProvider, useAppContext };
