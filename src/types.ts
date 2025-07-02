export interface Coffee {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  category: string;
}

export interface CartItem extends Coffee {
  quantity: number;
}

export interface CheckoutInfo {
  name: string;
  address: string;
  phone: string;
}
