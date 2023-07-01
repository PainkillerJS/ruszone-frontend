import type { FC } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';
import { ProductModel } from '@/packages/api/models/product';

interface AddToCartButtonProps {
  product: ProductModel;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart, removeFromCart } = useActions();
  const { items } = useCart();

  const currentElement = items.find((cartItem) => cartItem.product.id === product.id);

  return (
    <div>
      <button
        onClick={() =>
          currentElement
            ? removeFromCart({ id: currentElement.id })
            : addToCart({ product, quantity: 1, size: selectedSize })
        }
      >
        {currentElement ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
    </div>
  );
};

export default AddToCartButton;
