export interface Billboard {
  id: string;
  storeId?: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard?: Billboard;
  store?: Store;
}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Store {
  id: string;
  name: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  billboards?: Billboard[];
}
