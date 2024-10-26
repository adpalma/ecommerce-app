export type Product = {
  brand_name: string;
  brand_image: string;
  product_name: string;
  product_image: string;
  progress: number;
  title: string;
  lane: null | 'for_you' | 'hot' | 'features';
};
