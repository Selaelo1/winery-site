export interface Wine {
  name: string;
  year: string;
  description: string;
  price: string;
  image: string;
  history: string;
  awards: string[];
  pairings: string[];
}

export interface CartItem extends Wine {
  quantity: number;
}