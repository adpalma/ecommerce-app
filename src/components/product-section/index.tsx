import { Product } from '../../types/product';
import { ProductItem } from './product-item';
import './index.css';

interface ProductSectionProps {
  title: string;
  items: Product[];
}

export const ProductSection = ({ title, items }: ProductSectionProps) => {
  if (items.length === 0 && !title) return;

  const renderItems = () => {
    if (items.length === 0) {
      return <div className="text-grey">No products available</div>;
    }

    return items.map((product) => <ProductItem product={product} />);
  };

  return (
    <div className="product-section column">
      <div className="row space-between align-center">
        <div className="h6 bold">{title}</div>
        {items.length > 0 && (
          <button className="text-button primary">See All</button>
        )}
      </div>
      <div
        className={`row product-tiles-container ${
          items.length > 2 ? 'show-after' : ''
        }`}
      >
        {renderItems()}
      </div>
    </div>
  );
};
