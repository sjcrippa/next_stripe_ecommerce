export interface SimplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

export interface ProductImage {
  _type: string;
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  }
}

export interface FullProduct {
  _id: string;
  images: ProductImage[];
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string
}

export interface CartItems {
  id: string,
  name: string,
  description: string,
  price: number,
  currency: string,
  image: ProductImage
  slug: string,
}
