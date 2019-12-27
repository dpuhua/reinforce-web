/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: makeOrder
// ====================================================

export interface makeOrder_makeOrder {
  __typename: "Book" | "Wine";
  id: string;
  name: string;
  inStock: number | null;
}

export interface makeOrder {
  makeOrder: makeOrder_makeOrder | null;
}

export interface makeOrderVariables {
  productID: string;
  quantity?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProducts
// ====================================================

export interface getProducts_getAllProducts {
  __typename: "Book" | "Wine";
  id: string;
  name: string;
  inStock: number | null;
}

export interface getProducts_getProduct {
  __typename: "Book" | "Wine";
  id: string;
  name: string;
  inStock: number | null;
}

export interface getProducts {
  getAllProducts: (getProducts_getAllProducts | null)[] | null;
  getProduct: getProducts_getProduct | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
