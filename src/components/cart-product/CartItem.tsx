import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ProductCartTypes } from 'types';
import convertCurrentCy from 'utils/convertCurrency';
import formatToCurrency from 'utils/formatprice/formatPrice';

interface PropsTypes{
  increOrDecreQuantity: (id: string, number: number) => void;
  removeToCart: (id: string) => void;
  productData: ProductCartTypes;
}
const CartItem = ({ increOrDecreQuantity, removeToCart, productData }: PropsTypes) => {
  const router = useRouter();
  const { locale } = router;
  return (
    <tr className="woocommerce-cart-form__cart-item cart_item">
      <td className="product-remove">
        <a href="#" onClick={() => removeToCart(productData.id)} className="remove">
          ×
        </a>
      </td>
      <td className="product-thumbnail">
        <Link href={`/product/${productData.link}`}>
          <Image
            style={{ cursor: 'pointer' }}
            width={180}
            height={220}
            src={productData.image}
            className="attachment-shop-thumb-2 size-shop-thumb-2"
            alt=""
            loading="lazy"
          />
        </Link>
      </td>
      <td className="product-name">
        <Link href={`/product/${productData.link}`}>
          {locale === 'vi' ? productData.name : productData.en_name}
        </Link>
      </td>
      <td className="product-price">
        <span className="woocommerce-Price-amount amount">
          <bdi>
            {formatToCurrency(convertCurrentCy(productData.price, locale), locale)}&nbsp;
          </bdi>
        </span>
      </td>
      <td className="product-quantity">
        <div className="quantity buttons_added">
          <label className="screen-reader-text" htmlFor="quantity_6285b72a20f6f">
            {locale === 'vi' ? productData.name : productData.en_name}
          </label>
          <input
            onClick={() => increOrDecreQuantity(productData.id, -1)}
            type="button"
            defaultValue="-"
            className="plusminus minus"
          />
          <input
            type="number"
            id="quantity_6285b72a20f6f"
            className="input-text qty text"
            step={1}
            min={0}
            value={productData.quantity}
            title="SL"
            size={4}
            inputMode="numeric"
          />
          <input
            onClick={() => increOrDecreQuantity(productData.id, 1)}
            type="button"
            defaultValue="+"
            className="plusminus plus"
          />
        </div>
      </td>
      <td className="product-subtotal">
        <span className="woocommerce-Price-amount amount">
          <bdi>
            {
              formatToCurrency(
                (
                  Number(convertCurrentCy(productData.price, locale).toFixed(2)) *
               productData.quantity
                ), locale
              )
            }&nbsp;
          </bdi>
        </span>
      </td>
    </tr>
  );
};

export default CartItem;
