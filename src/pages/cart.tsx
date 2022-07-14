import React, { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CartItem from 'components/cart-product/CartItem';
import CartTotal from 'components/cart-product/CartTotal';
import { ProductCartTypes } from 'types';

const Cart = () => {
  const [cart, setCart] = useState<ProductCartTypes[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isVisible, setIsvisible] = useState<boolean>(false);
  const [itemRemove, setItemRemove] = useState<ProductCartTypes>();
  const [discount, setDisCount] = useState<string>('');
  const [valid, setValid] = useState<boolean>(true);
  const [discountStatus, setDisCountStatus] = useState<number>(1);
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;

  const removeToCart = (id: string): void => {
    const item = cart.find((productCart: ProductCartTypes) => productCart.id === id);
    if (item) {
      setItemRemove(item);
      setIsvisible(true);
    }
    const newCart = cart.filter((productCart: ProductCartTypes) => productCart.id !== id);
    setCart(newCart);
  };

  const increOrDecreQuantity = (id: string, number: number): void => {
    const item = cart.find((productCart: ProductCartTypes) => productCart.id === id);
    if (item) {
      if (item.quantity <= 1 && number === -1) {
        return;
      }
      item.quantity += number;
      const newCart = cart.map((productCart: ProductCartTypes) =>
        (productCart.id === id ? item : productCart));
      setCart(newCart);
    }
  };

  const renderCartItem = () => {
    return (
      cart.map((item: ProductCartTypes) => {
        return (
          <CartItem
            increOrDecreQuantity={increOrDecreQuantity}
            removeToCart={removeToCart}
            productData={item}
            key={item.id}
          />
        );
      })
    );
  };

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartData);
  }, []);

  useEffect(() => {
    const totals = cart.reduce((sum: number, item: ProductCartTypes) => {
      return sum + item.quantity;
    }, 0);
    setTotal(totals);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="page-template-default page page-id-7 theme-oxygen woocommerce-cart woocommerce-page woocommerce-js woo-variation-swatches wvs-theme-oxygen wvs-theme-child-oxygen wvs-style-squared wvs-attr-behavior-blur wvs-tooltip wvs-css wpb-js-composer js-comp-ver-6.7.0 vc_responsive oxygen-top-menu top-header-flat ht-3">
      <div className="top-first breadcrumb_header">
        <div className="row">
          <div className="col-lg-12">
            <div className="left-widget">
              <nav className="woocommerce-breadcrumb">
                <Link href="/">{t('textBreadCumHome')}</Link>
                <span className="sep">»</span>
                {t('textCart')}
              </nav>
            </div>
          </div>
        </div>
      </div>
      {discountStatus === 2 && (
        <div className="woocommerce-notices-wrapper">
          <ul className="woocommerce-error" role="alert">
            <li>
              <strong>{t('textError')}:</strong>
              {discount === '' ? ` ${t('textCartDisCount')} ${t('textNotExits')} ` : ` ${t('textCartDisCount')} ${discount} ${t('textNotExits')} `}
            </li>
          </ul>
        </div>
      )}
      {isVisible && (
        <div className="woocommerce-notices-wrapper">
          <div className="woocommerce-message" role="alert">
            {locale === 'vi' ? itemRemove.name : itemRemove.en_name} {t('textCartNotifyRemove')}.
          </div>
        </div>
      )}
      <div className="woocommerce">
        <div className="woocommerce-notices-wrapper" />{' '}
        <header className="woocommerce-products-header cart-empty">
          <h1>{t('textCart')}</h1>
          <span className="small-title">
            {total === 0 ? t('textCartNotifyNoProduct') : `${total} ITEMS`}
          </span>
        </header>
        {total > 0 && (
          <div className="cart-wrapper">
            <form className="woocommerce-cart-form" action="/cart" method="post">
              <table
                className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                cellSpacing={0}
              >
                <thead>
                  <tr>
                    <th className="product-remove">&nbsp;</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">{t('textCartTableProducts')}</th>
                    <th className="product-price">{t('textCartTablelPrice')}</th>
                    <th className="product-quantity">{t('textCartTablelQuantity')}</th>
                    <th className="product-subtotal">{t('textCartTablelProvinsionaL')}</th>
                  </tr>
                </thead>
                <tbody>{renderCartItem()}</tbody>
              </table>
            </form>
            <CartTotal
              discount={discount}
              setDisCount={setDisCount}
              setValid={setValid}
              setDisCountStatus={setDisCountStatus}
              valid={valid}
              carts={cart}
            />
          </div>
        )}
        {total === 0 && (
          <p className="return-to-shop">
            <Link href="/shop">
              <a className="button wc-backward" href="">
                {t('textCartBack')}
              </a>
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
