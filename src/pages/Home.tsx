import '../App.css';
import { Banner } from '../components/banner';
import { ProductSection } from '../components/product-section';
import data from '../assets/data.json';
import { Product } from '../types/product';

export const Home = () => {
  const forYou: Product[] = data.filter(
    (item) => item.lane === 'for_you'
  ) as Product[];
  const hot: Product[] = data.filter(
    (item) => item.lane === 'hot'
  ) as Product[];
  const features: Product[] = data.filter(
    (item) => item.lane === 'features'
  ) as Product[];
  const others: Product[] = data.filter(
    (item) => item.lane === null
  ) as Product[];

  return (
    <div className="homepage">
      <Banner name="Nicole" />
      <div className="product-list flex column">
        <ProductSection title="For You" items={forYou} />
        <ProductSection title="Hot Products" items={hot} />
        <ProductSection title="For You" items={features} />
        <ProductSection title="" items={others} />
      </div>
    </div>
  );
};
