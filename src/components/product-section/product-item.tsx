import { FallbackImage } from '../fallback-image';
import { Product } from '../../types/product';
import { ProgressBar } from '../progress-bar';

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const percentage = product.progress * 100;
  return (
    <div className="card column product-item">
      <div className="product-image-container">
        <FallbackImage
          src={product.product_image}
          fallbackSrc="https://picsum.photos/200/100?random=1"
          alt={product.product_name}
        />
      </div>
      <div className="product-detail-container column">
        <div className="brand-image-container">
          <FallbackImage
            src={product.brand_image}
            fallbackSrc="https://picsum.photos/50/15?random=1"
            alt={product.brand_name}
            className="brand-image flex align-start"
          />
        </div>
        <div className="body2 bold product-name">{`${product.brand_name} ${product.product_name} ${product.title}`}</div>
        <ProgressBar progress={product.progress} />
        <div className="caption">{`${percentage.toFixed()}% complete`}</div>
      </div>
    </div>
  );
};
