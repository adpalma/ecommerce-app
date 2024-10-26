import { Product } from '../../types/product';
import { ProductItem } from './product-item';
import './index.css';

interface ProductSectionProps {
  title: string;
  items: Product[];
}

export const ProductSection = ({ title, items }: ProductSectionProps) => {
  return (
    <div className="product-section column">
      <div className="row space-between align-center">
        <div className="h6">{title}</div>
        <button className="text-button primary">See All</button>
      </div>
      <div className="row product-tiles-container">
        {items.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
    </div>
  );
};
