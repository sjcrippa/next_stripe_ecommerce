export interface simplifiedProduct {
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

export interface fullProduct {
  _id: string;
  images: ProductImage[];
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string
}
