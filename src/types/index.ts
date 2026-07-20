export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  carbonEmissions: number; // in kg CO2
  unit: string;
  imageIcon: string; // We'll use emojis or simple identifiers for this prototype
}

export interface Recommendation {
  sourceId: string;
  recommendedProduct: Product;
  carbonSaved: number;
  tag: string;
}

export interface CartItemType {
  cartItemId: string; // Unique ID for the item in the cart (for animations)
  product: Product;
  quantity: number;
}
