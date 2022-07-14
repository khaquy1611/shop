import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ProductDetailsFormCart from 'components/product-details/ProductDetailsFormCart';
import { ProductCartTypes, ProductTypes } from 'types';
import convertCurrentCy from 'utils/convertCurrency';
import formatToCurrency from 'utils/formatprice/formatPrice';

interface PropsTypes{
  addToCart: (product: ProductCartTypes, quantity: number) => void;
  productData: ProductTypes;
}
const ProductDetailsInfomation = ({ addToCart, productData } : PropsTypes) => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');

  return (
    <div className="summary entry-summary">
      <div className="product-top-nav" />
      <h1 itemProp="name" className="product_title entry-title">
        {locale === 'vi' ? productData.name : productData.en_name}
      </h1>
      <br />
      <p className="price">
        <span className="woocommerce-Price-amount amount">
          <bdi>
            {formatToCurrency(convertCurrentCy(productData.price, locale), locale)}&nbsp;
          </bdi>
        </span>
      </p>
      <ProductDetailsFormCart addToCart={addToCart} productData={productData} />
      <div className="product_meta">
        <span className="sku_wrapper">{t('textDetailsCode')}: <span style={{ display: 'inline' }} className="sku">{productData.code}</span></span>
        <span className="posted_in">{t('textDetailsCate')}: <Link href={`/shop/category/${productData.type}`}>{locale === 'vi' ? productData.typeName : productData.en_typeName}</Link></span>
        <span className="sku_wrapper">
          {t('textDetailsDes')}: <p>{locale === 'vi' ? productData.description : productData.en_description}</p>
        </span>
      </div>
    </div>
  );
};
export default ProductDetailsInfomation;
