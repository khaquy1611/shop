export interface ProductTypes {
  id: string;
  name: string;
  price: number;
  type: string;
  description: string;
  image: string;
  link: string;
  code: string;
  typeName: string;
  en_typeName: string;
  en_name: string;
  en_description: string;
}
export interface ProductCartTypes extends ProductTypes {
  quantity?: number;
}

export interface CategoryTypes {
  en_name: string;
  type: string;
  name: string;
  id: string;
}
