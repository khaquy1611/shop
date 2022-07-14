import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ProductCartTypes } from 'types';
import convertCurrentCy from 'utils/convertCurrency';
import formatToCurrency from 'utils/formatprice/formatPrice';

interface PropsTypes {
  carts: ProductCartTypes[];
  discount: string;
  setDisCount: (params: string) => void;
  setValid: (params: boolean) => void;
  setDisCountStatus: (params: number) => void;
  valid: boolean;
}
const CartTotal = ({
  carts,
  discount,
  setDisCount,
  setValid,
  setDisCountStatus,
  valid
}: PropsTypes) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const handleChangesetDisCount = (e): void => {
    const { value, name } = e.target;
    if (name === 'coupon_code_alt') {
      setDisCount(value);
      if (value.trim() === '') {
        setValid(false);
      } else {
        setValid(true);
      }
    }
  };
  const scrollToTop = () => {
    if (window.scrollY > 130) {
      setTimeout(() => {
        window.scrollTo({
          top: 120,
          behavior: 'smooth'
        });
      }, 1000);
    }
  };
  const handleSubmitApply = (e): void => {
    e.preventDefault();
    if (valid) {
      setDisCountStatus(2);
    }
    scrollToTop();
  };
  const renderCartDetails = () => {
    return carts.map((productCart: ProductCartTypes) => {
      return (
        <li>
          <div className="name">{locale === 'vi' ? productCart.name : productCart.en_name}&nbsp; </div>
          <div className="price">
            <span className="woocommerce-Price-amount amount">
              <bdi>
                {
                  formatToCurrency(
                    (
                      Number(convertCurrentCy(productCart.price, locale).toFixed(2)) *
                    productCart.quantity
                    ), locale
                  )
                }&nbsp;
              </bdi>
            </span>{' '}
          </div>
        </li>
      );
    });
  };
  const getTotalPrice = () => {
    return carts
      .reduce(
        (sum: number, productCart: ProductCartTypes) =>
          sum + Number(convertCurrentCy(productCart.price, locale).toFixed(2)) *
          productCart.quantity,
        0
      );
  };
  return (
    <div className="cart-collaterals">
      <div className="cart_totals ">
        <h2>{t('textCartTablelRightTitle')}</h2>
        <ul className="cart-items">{renderCartDetails()}</ul>
        <table cellSpacing={0} className="shop_table shop_table_responsive">
          <tbody>
            <tr className="cart-subtotal">
              <th>{t('textCartTablelProvinsionaL')}</th>
              <td data-title="Tạm tính">
                <span className="woocommerce-Price-amount amount">
                  <bdi>
                    {formatToCurrency(getTotalPrice(), locale)}&nbsp;
                  </bdi>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cart-update-buttons">
        <Link href="/my-account">
          <a className="cart-update-buttons--checkout button alt wc-forward">
            <i className="glyphicon glyphicon-shopping-cart" />
            {t('textCartTablelRightCheckout')}
          </a>
        </Link>
      </div>
      <div className="cart-coupon">
        <b>{t('textCartTablelRightPreferential')}:</b>
        <div className="coupon">
          <input
            type="text"
            name="coupon_code_alt"
            className="input-text"
            id="coupon_code_alt"
            defaultValue="không có mã ưu đãi"
            value={discount}
            onChange={(e) => handleChangesetDisCount(e)}
            placeholder={t('textCartTablelRightPreferentialCode')}
          />
          <button type="button" onClick={(e) => handleSubmitApply(e)} className="button" name="apply_coupon_alt">
            {t('textCartTablelRightApply')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
