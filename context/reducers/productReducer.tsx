import IProduct from "@/types/ProductInterface";

export type ProductState = IProduct | undefined;

export type ProductAction =
  | { type: "FETCH_PRODUCT_REQUEST"; productId: IProduct["id"] }
  | { type: "FETCH_PRODUCT_SUCCESS"; payload: IProduct }
  | { type: "FETCH_PRODUCT_FAILURE"; payload: unknown };

export const initialProductState: ProductState = undefined;

const productReducer = (
  state: ProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case "FETCH_PRODUCT_REQUEST":
      return undefined;
    case "FETCH_PRODUCT_SUCCESS":
      return action.payload;
    case "FETCH_PRODUCT_FAILURE":
      return undefined;
    default:
      return state;
  }
};
export default productReducer;
