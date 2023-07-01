import type { FC } from 'react';

import Image from 'next/image';

import type { ProductModel } from '@/packages/api/models/product';

interface ProductItemProps {
  product: ProductModel;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div>
      <div>
        <FavoriteButton product={product} />
        <AddToCartButton product={product} />

        <Image width={300} height={300} src={product.images[0]} alt={product.name} />
      </div>

      <h3>{product.name}</h3>
      <div>{product.category.name}</div>
      <ProductRating rating={product.rating} />
    </div>
  );
};

export default ProductItem;
