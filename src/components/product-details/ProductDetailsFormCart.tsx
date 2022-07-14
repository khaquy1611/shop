import React, { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { ProductCartTypes, ProductTypes } from 'types';

interface PropsTypes {
  addToCart: (product: ProductCartTypes, quantity: number) => void;
  productData: ProductTypes;
}
const ProductDetailsFormCart = ({ addToCart, productData }: PropsTypes) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<ProductCartTypes[]>([]);
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartData) {
      setCart(cartData);
    }
  }, []);
  useEffect(() => {
    if (cart !== [] && cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);
  const increOrDeCreQuantity = (quantityCart: number, number: number): void => {
    if (quantityCart <= 1 && number === -1) {
      return;
    }
    const quan = quantityCart + number;
    setQuantity(quan);
  };
  const handleLink = () => {
    router.push('/my-account/');
  };
  return (
    <>
      <div className="quantity buttons_added">
        <label className="screen-reader-text" htmlFor="quantity_6281d4e8e3d4a">
          {locale === 'vi' ? productData.name : productData.en_name}
        </label>
        <input
          type="button"
          onClick={() => increOrDeCreQuantity(quantity, -1)}
          defaultValue="-"
          className="plusminus minus"
        />
        <input
          type="number"
          id="quantity_6281d4e8e3d4a"
          className="input-text qty text"
          step={1}
          min={1}
          name="quantity"
          value={quantity}
          title="SL"
          size={4}
          inputMode="numeric"
        />
        <input
          type="button"
          onClick={() => increOrDeCreQuantity(quantity, 1)}
          defaultValue="+"
          className="plusminus plus"
        />
      </div>
      <button
        type="button"
        name="add-to-cart"
        value={500}
        className="single_add_to_cart_button button alt"
        onClick={() => addToCart(productData, quantity)}
      >
        {t('textDetailsAddCart')}
      </button>
      <button
        id="sbw_wc-adding-button"
        type="button"
        name="sbw-wc-buy-now"
        value={500}
        className="single_add_to_cart_button buy_now_button button alt"
        onClick={handleLink}
      >
        {t('textShopBuy')}
      </button>
    </>
  );
};
export default ProductDetailsFormCart;
